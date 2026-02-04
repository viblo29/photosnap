"use client";

import { useState } from "react";
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
  const [mode, setMode] = useState<Mode>("login");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const passwordValue = watch("password");

  const onSubmit = (data: FormData) => {
    console.log("Form Data:", data);
    setIsOpen(false);
    reset();
    setMode("login"); // დაბრუნება საწყის ლოგინზე
  };

  const buttonClasses =
    "bg-[#000000] text-white hover:text-black hover:bg-[#DFDFDF] cursor-pointer transition-colors duration-300 ease-in-out py-2 rounded-md w-full";

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={
          buttonClassName ??
          "bg-[#000000] text-white hover:text-black hover:bg-[#DFDFDF] cursor-pointer transition-colors duration-300 ease-in-out font-bold text-xs tracking-[2px] px-6 py-3 rounded-md"
        }
      >
        LOG IN
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />

          {/* Modal content */}
          <div className="relative bg-white w-full max-w-md p-8 rounded-lg shadow-lg">
            <button
              onClick={() => setIsOpen(false)}
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
                  onSubmit={handleSubmit(() => setMode("newUser"))}
                  className="space-y-4"
                >
                  {/* Username */}
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

                  {/* Password */}
                  <div className="w-full">
                    <input
                      type="password"
                      placeholder="Password"
                      className={`w-full border px-4 py-2 rounded-md ${
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
                    {errors.password && (
                      <p className="text-red-500 text-sm">{errors.password.message}</p>
                    )}
                  </div>

                  <button type="submit" className={buttonClasses}>
                    Log in
                  </button>
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
                  onClick={() => setMode("signup")}
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

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  {/* Username */}
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

                  {/* Email */}
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

                  {/* Password */}
                  <div className="w-full">
                    <input
                      type="password"
                      placeholder="Password"
                      className={`w-full border px-4 py-2 rounded-md ${
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
                    {errors.password && (
                      <p className="text-red-500 text-sm">{errors.password.message}</p>
                    )}
                  </div>

                  {/* Confirm Password */}
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
    </>
  );
};

export default Login;
