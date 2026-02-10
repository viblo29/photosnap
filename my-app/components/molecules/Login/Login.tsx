"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { createPortal } from "react-dom";

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
  const [mounted, setMounted] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    shouldUnregister: true,
  });
  const passwordValue = watch("password");

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const session = sessionStorage.getItem("photosnap-session");
    if (session) {
      setLoggedInUser(session);
    }
  }, []);

  const onSignupSubmit = (data: FormData) => {
    const user = {
      username: data.username,
      email: data.email!,
      password: data.password,
    };

    sessionStorage.setItem("photosnap-user", JSON.stringify(user));
    
    setLoggedInUser(data.username);
    sessionStorage.setItem("photosnap-session", data.username);

    setSuccessUser(data.username);
    setShowSuccess(true);

    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);

    setShowModal(false);
    setTimeout(() => {
      setIsOpen(false);
      setMode("login");
      reset();
    }, 300);
  };

  const onLoginSubmit = (data: FormData) => {
    const savedUser = sessionStorage.getItem("photosnap-user");

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
      sessionStorage.setItem("photosnap-session", parsedUser.username);
      
      setShowModal(false);
      setTimeout(() => setIsOpen(false), 300);
      reset();
    } else {
      alert("Invalid username or password");
    }
  };

  useEffect(() => {
    if (isOpen) {
      reset();
      setShowPassword(false); 
      setShowConfirmPassword(false);
      setShowModal(false);
      const timeout = setTimeout(() => {
        setShowModal(true);
      }, 50);

      return () => clearTimeout(timeout);
    }
  }, [isOpen, reset]);

  const EyeIcon = ({ visible }: { visible: boolean }) => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 24 24" 
      strokeWidth={1.5} 
      stroke="currentColor" 
      className="w-5 h-5"
    >
      {visible ? (
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
      ) : (
        <>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.644C3.413 8.133 7.182 4.5 12 4.5c4.788 0 8.557 3.633 9.963 7.178.07.175.07.362 0 .537C20.587 15.867 16.818 19.5 12 19.5c-4.788 0-8.557-3.633-9.963-7.178z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </>
      )}
    </svg>
  );

  const buttonClasses =
    "bg-[#000000] text-white hover:text-black hover:bg-[#DFDFDF] cursor-pointer transition-colors duration-300 ease-in-out py-2 rounded-none w-full";

  const loginModal =
    isOpen && mounted
      ? createPortal(
          <div className="fixed inset-0 z-60 flex items-center justify-center">
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
              className={`relative bg-white/90 w-full max-w-md p-8 rounded-none shadow-lg transform transition-all duration-300 ease-out
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
                  <h2 className="text-2xl font-semibold text-center mb-6">
                    Log in
                  </h2>
                  <form
                    onSubmit={handleSubmit(onLoginSubmit)}
                    className="space-y-4"
                  >
                    <div className="w-full">
                      <input type="text" placeholder="Username"
                        className={`w-full border px-4 py-2 rounded-none ${
                          errors.username ? "border-red-500" : ""
                        }`}
                        {...register("username", {
                          required: "Username is required",
                          minLength: {
                            value: 3,
                            message: "Username must be at least 3 characters",
                          },
                        })}
                      />
                      {errors.username && (
                        <p className="text-red-500 text-sm">
                          {errors.username.message}
                        </p>
                      )}
                    </div>

                    <div className="w-full relative">
                      <input type={showPassword ? "text" : "password"} placeholder="Password"
                        className={`w-full border px-4 py-2 rounded-none pr-10 ${
                          errors.password ? "border-red-500" : ""
                        }`}
                        {...register("password", {
                          required: "Password cannot be empty",
                          minLength: {
                            value: 6,
                            message: "Password must be at least 6 characters",
                          },
                        })}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-[10px] text-gray-500 hover:text-black transition-colors"
                      >
                        <EyeIcon visible={showPassword} />
                      </button>
                      {errors.password && (
                        <p className="text-red-500 text-sm">
                          {errors.password.message}
                        </p>
                      )}
                    </div>

                    <button type="submit" className={buttonClasses}>
                      Log in
                    </button>
                    <p className="text-center text-sm mt-4">
                      Don't have an account?{" "}
                      <button
                        type="button"
                        onClick={() => {
                            setMode("signup");
                            reset();
                        }}
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
                    Looks like a new user. <br />
                    Please sign up.
                  </p>
                  <button
                    onClick={() => {
                        setMode("signup");
                        reset();
                    }}
                    className={buttonClasses}
                  >
                    Sign Up
                  </button>
                </>
              )}

              {mode === "signup" && (
                <>
                  <h2 className="text-2xl font-semibold text-center mb-6">
                    Sign Up
                  </h2>
                  <form onSubmit={handleSubmit(onSignupSubmit)} className="space-y-4">
                    <div className="w-full">
                      <input type="text" placeholder="Username"
                        className={`w-full border px-4 py-2 rounded-none ${
                          errors.username ? "border-red-500" : ""
                        }`}
                        {...register("username", {
                          required: "Username is required",
                          minLength: {
                            value: 3,
                            message: "Username must be at least 3 characters",
                          },
                        })}
                      />
                      {errors.username && (
                        <p className="text-red-500 text-sm">
                          {errors.username.message}
                        </p>
                      )}
                    </div>

                    <div className="w-full">
                      <input type="email" placeholder="Email"
                        className={`w-full border px-4 py-2 rounded-none ${
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
                        <p className="text-red-500 text-sm">
                          {errors.email.message}
                        </p>
                      )}
                    </div>

                    <div className="w-full relative">
                      <input type={showPassword ? "text" : "password"} placeholder="Password"
                        className={`w-full border px-4 py-2 rounded-none pr-10 ${
                          errors.password ? "border-red-500" : ""
                        }`}
                        {...register("password", {
                          required: "Password cannot be empty",
                          minLength: {
                            value: 6,
                            message: "Password must be at least 6 characters",
                          },
                        })}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-[10px] text-gray-500 hover:text-black transition-colors"
                      >
                        <EyeIcon visible={showPassword} />
                      </button>
                      {errors.password && (
                        <p className="text-red-500 text-sm">
                          {errors.password.message}
                        </p>
                      )}
                    </div>

                    <div className="w-full relative">
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Confirm Password"
                        className={`w-full border px-4 py-2 rounded-none pr-10 ${
                          errors.confirmPassword ? "border-red-500" : ""
                        }`}
                        {...register("confirmPassword", {
                          required: "Please confirm your password",
                          validate: (value) =>
                            value === passwordValue || "Passwords do not match",
                        })}
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-[10px] text-gray-500 hover:text-black transition-colors"
                      >
                        <EyeIcon visible={showConfirmPassword} />
                      </button>
                      {errors.confirmPassword && (
                        <p className="text-red-500 text-sm">
                          {errors.confirmPassword.message}
                        </p>
                      )}
                    </div>

                    <button type="submit" className={buttonClasses}>
                      Sign Up
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>,
          document.body,
        )
      : null;

  const successModal =
    showSuccess && mounted
      ? createPortal(
          <div className="fixed inset-0 z-60 flex items-center justify-center">
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

            <div
              className="relative bg-white/90 w-full max-w-md p-8 rounded-none shadow-lg
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
          </div>,
          document.body,
        )
      : null;

  return (
    <>
      <div className="relative inline-block">
        <button
          onClick={() => {
            if (loggedInUser) {
              setShowUserMenu((prev) => !prev);
            } else {
              setMode("login");
              reset();
              setIsOpen(true);
            }
          }}
          className={
            buttonClassName ??
            "bg-[#000000] text-white hover:text-black hover:bg-[#DFDFDF] cursor-pointer transition-colors duration-300 ease-in-out font-bold text-xs tracking-[2px] px-6 py-3 rounded-none"
          }
        >
          {loggedInUser ? loggedInUser : "LOG IN"}
        </button>

        {loggedInUser && (
          <div
            className={`absolute right-0 mt-2 w-44 bg-white/90 backdrop-blur-md rounded-none shadow-lg z-60
              overflow-hidden transition-all duration-300 ease-out
              ${showUserMenu ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}
            `}
          >
            <div className="flex flex-col">
              <button
                type="button"
                className="w-full text-left cursor-pointer px-4 py-2 text-sm bg-black text-white hover:bg-[#DFDFDF] hover:text-black transition-colors duration-300"
                onClick={() => {
                  setShowUserMenu(false);
                  alert("Personal info (coming soon)");
                }}
              >
                Personal info
              </button>

              <button
                type="button"
                className="w-full text-left cursor-pointer px-4 py-2 text-sm bg-black text-white hover:bg-[#DFDFDF] hover:text-black transition-colors duration-300"
                onClick={() => {
                  setLoggedInUser(null);
                  setShowUserMenu(false);
                  sessionStorage.removeItem("photosnap-session");
                }}
              >
                Log out
              </button>
            </div>
          </div>
        )}
      </div>

      {loginModal}
      {successModal}
    </>
  );
};

export default Login;