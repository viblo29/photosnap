"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

type Props = {
  buttonClassName?: string;
};

type Mode = "login" | "newUser" | "signup";

type FormData = {
  username: string;
  email?: string;
  password: string;
  confirmPassword?: string;
};

const Login = ({ buttonClassName }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false); 
  const [mode, setMode] = useState<Mode>("login");
  const [loggedInUser, setLoggedInUser] = useState<string | null>(null); 
  const [showSuccess, setShowSuccess] = useState(false);
  const [successUser, setSuccessUser] = useState<string | null>(null);
  const [showUserMenu, setShowUserMenu] = useState(false);

  const { register, handleSubmit, watch, formState: { errors }, reset } = useForm<FormData>({
    shouldUnregister: true});
  const passwordValue = watch("password");

  const onSubmit = (data: FormData) => {
    const user = {
      username: data.username,
      email: data.email!,
      password: data.password,
    };

    localStorage.setItem("photosnap-user", JSON.stringify(user));

    setSuccessUser(data.username);
    setShowSuccess(true);

    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);

    setShowModal(false);
    setTimeout(() => setIsOpen(false), 300);

    reset();
    setMode("login");
  };


  useEffect(() => {
    if (isOpen) {
      reset();
      setShowModal(false);       
      const timeout = setTimeout(() => {
        setShowModal(true);
      }, 50);

      return () => clearTimeout(timeout);
    }
  }, [isOpen, reset]);

  const buttonClasses =
    "bg-[#000000] text-white hover:text-black hover:bg-[#DFDFDF] cursor-pointer transition-colors duration-300 ease-in-out py-2 rounded-md w-full";

  return (
    <>
      <button
        onClick={() => {
          setMode("login"); 
          reset();    
          setIsOpen(true);
        }}
        className={
          buttonClassName ??
          "bg-[#000000] text-white hover:text-black hover:bg-[#DFDFDF] cursor-pointer transition-colors duration-300 ease-in-out font-bold text-xs tracking-[2px] px-6 py-3 rounded-md"
        }
      >
        {loggedInUser ? loggedInUser : "LOG IN"}
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          
          <div
                className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
                    showModal ? "opacity-100" : "opacity-0"
                }`}
                onClick={() => {
                    setShowModal(false);
                    setTimeout(() => setIsOpen(false), 300);
                }}
        />

          <div
            className={`relative bg-white/90 w-full max-w-md p-8 rounded-lg shadow-lg transform transition-all duration-300 ease-out
              ${showModal ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}
          >
            <button
                onClick={() => {
                    setShowModal(false);
                    setTimeout(() => setIsOpen(false), 300);
                }}
                className="absolute top-4 right-4 text-gray-500 hover:text-black cursor-pointer transition-colors duration-300 ease-in-out"
                >
                ✕
            </button>

            {mode === "login" && (
              <>
                <h2 className="text-2xl font-semibold text-center mb-6">Log in</h2>
                <form
                  onSubmit={handleSubmit((data) => {
                    const savedUser = localStorage.getItem("photosnap-user");

                    if (!savedUser) {
                      setMode("newUser");
                      return;
                    }

                    const parsedUser = JSON.parse(savedUser);

                    if (
                      data.username === parsedUser.username &&
                      data.password === parsedUser.password
                    ) {
                      setLoggedInUser(parsedUser.username);
                      setShowModal(false);
                      setTimeout(() => setIsOpen(false), 300);
                      reset();
                    } else {
                      alert("Invalid username or password");
                    }
                  })}
                  className="space-y-4"
                >
                  <div className="w-full">
                    <input
                      type="text"
                      placeholder="Username"
                      className={`w-full border px-4 py-2 rounded-md ${
                        errors.username ? "border-red-500" : ""
                      }`}
                      {...register("username", {
                        required: "Username is required",
                        minLength: { value: 3, message: "Username must be at least 3 characters" },
                      })}
                    />
                    {errors.username && (
                      <p className="text-red-500 text-sm">{errors.username.message}</p>
                    )}
                  </div>

                  <div className="w-full">
                    <input
                      type="password"
                      placeholder="Password"
                      className={`w-full border px-4 py-2 rounded-md ${
                        errors.password ? "border-red-500" : ""
                      }`}
                      {...register("password", {
                        required: "Password cannot be empty",
                        minLength: { value: 6, message: "Password must be at least 6 characters" },
                      })}
                    />
                    {errors.password && (
                      <p className="text-red-500 text-sm">{errors.password.message}</p>
                    )}
                  </div>

                  <button type="submit" className={buttonClasses}>Log in</button>
                  <p className="text-center text-sm mt-4">
                    Don’t have an account?{" "}
                    <button
                      type="button"
                      onClick={() => setMode("signup")}
                      className="font-semibold underline hover:text-gray-600 transition-colors cursor-pointer"
                    >
                      Sign up
                    </button>
                  </p>
                </form>
              </>
            )}

            {mode === "newUser" && (
              <>
                <p className="text-center mb-6">
                  Looks like a new user. <br />Please sign up.
                </p>
                <button
                  onClick={() => setMode("signup")}
                  className={buttonClasses}
                >
                  Sign Up
                </button>
              </>
            )}

            {mode === "signup" && (
              <>
                <h2 className="text-2xl font-semibold text-center mb-6">Sign Up</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  
                  <div className="w-full">
                    <input
                      type="text"
                      placeholder="Username"
                      className={`w-full border px-4 py-2 rounded-md ${
                        errors.username ? "border-red-500" : ""
                      }`}
                      {...register("username", {
                        required: "Username is required",
                        minLength: { value: 3, message: "Username must be at least 3 characters" },
                      })}
                    />
                    {errors.username && (
                      <p className="text-red-500 text-sm">{errors.username.message}</p>
                    )}
                  </div>

                  <div className="w-full">
                    <input
                      type="email"
                      placeholder="Email"
                      className={`w-full border px-4 py-2 rounded-md ${
                        errors.email ? "border-red-500" : ""
                      }`}
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "Looks like this is not an email",
                        },
                      })}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm">{errors.email.message}</p>
                    )}
                  </div>

                  <div className="w-full">
                    <input
                      type="password"
                      placeholder="Password"
                      className={`w-full border px-4 py-2 rounded-md ${
                        errors.password ? "border-red-500" : ""
                      }`}
                      {...register("password", {
                        required: "Password cannot be empty",
                        minLength: { value: 6, message: "Password must be at least 6 characters" },
                      })}
                    />
                    {errors.password && (
                      <p className="text-red-500 text-sm">{errors.password.message}</p>
                    )}
                  </div>

                  <div className="w-full">
                    <input
                      type="password"
                      placeholder="Confirm Password"
                      className={`w-full border px-4 py-2 rounded-md ${
                        errors.confirmPassword ? "border-red-500" : ""
                      }`}
                      {...register("confirmPassword", {
                        required: "Please confirm your password",
                        validate: (value) =>
                          value === passwordValue || "Passwords do not match",
                      })}
                    />
                    {errors.confirmPassword && (
                      <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>
                    )}
                  </div>

                  <button type="submit" className={buttonClasses}>
                    Sign Up
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}

      {showSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

          <div
            className="relative bg-white/90 w-full max-w-md p-8 rounded-lg shadow-lg
                      transform transition-all duration-300 ease-out
                      opacity-100 scale-100 text-center"
          >
            <div className="text-4xl mb-4">✨</div>
            <p className="text-lg">
              Welcome <strong>{successUser}</strong>
            </p>
            <p className="text-sm mt-2 text-gray-600">
              You have signed up successfully!
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
