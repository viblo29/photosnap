"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { createPortal } from "react-dom";
import { AuthInput } from "./AuthInput";

type Props = { buttonClassName?: string };
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

  const { register, handleSubmit, watch, formState: { errors }, reset } = useForm<FormData>({ shouldUnregister: true });
  const passwordValue = watch("password");

  useEffect(() => { setMounted(true); }, []);
  useEffect(() => {
    const session = sessionStorage.getItem("photosnap-session");
    if (session) setLoggedInUser(session);
  }, []);

  useEffect(() => {
    if (isOpen) {
      reset();
      setShowPassword(false);
      setShowConfirmPassword(false);
      setShowModal(false);
      const timeout = setTimeout(() => setShowModal(true), 50);
      return () => clearTimeout(timeout);
    }
  }, [isOpen, reset]);

  const closePortal = () => {
    setShowModal(false);
    setTimeout(() => setIsOpen(false), 300);
  };

  const onSignupSubmit = (data: FormData) => {
    const user = { username: data.username, email: data.email!, password: data.password };
    sessionStorage.setItem("photosnap-user", JSON.stringify(user));
    setLoggedInUser(data.username);
    sessionStorage.setItem("photosnap-session", data.username);
    setSuccessUser(data.username);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
    closePortal();
  };

  const onLoginSubmit = (data: FormData) => {
    const savedUser = sessionStorage.getItem("photosnap-user");
    if (!savedUser) { setMode("newUser"); return; }
    const parsedUser = JSON.parse(savedUser);
    if (data.username === parsedUser.username && data.password === parsedUser.password) {
      setLoggedInUser(parsedUser.username);
      sessionStorage.setItem("photosnap-session", parsedUser.username);
      closePortal();
    } else {
      alert("Invalid username or password");
    }
  };

  const buttonClasses = "bg-[#000000] text-white hover:text-black hover:bg-[#DFDFDF] cursor-pointer transition-colors duration-300 ease-in-out py-2 rounded-none w-full";

  return (
    <>
      <div className="relative inline-block">
        <button
          onClick={() => loggedInUser ? setShowUserMenu(!showUserMenu) : (setMode("login"), setIsOpen(true))}
          className={buttonClassName ?? "bg-[#000000] text-white hover:text-black hover:bg-[#DFDFDF] cursor-pointer transition-colors duration-300 ease-in-out font-bold text-xs tracking-[2px] px-6 py-3 rounded-none"}
        >
          {loggedInUser ? loggedInUser : "LOG IN"}
        </button>

        {loggedInUser && (
          <div className={`absolute right-0 mt-2 w-44 bg-white/90 backdrop-blur-md shadow-lg z-60 overflow-hidden transition-all duration-300 ${showUserMenu ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
            <button className="w-full text-left cursor-pointer px-4 py-2 text-sm bg-black text-white hover:bg-[#DFDFDF] hover:text-black transition-colors" onClick={() => { setShowUserMenu(false); alert("Personal info (coming soon)"); }}>Personal info</button>
            <button className="w-full text-left cursor-pointer px-4 py-2 text-sm bg-black text-white hover:bg-[#DFDFDF] hover:text-black transition-colors" onClick={() => { setLoggedInUser(null); setShowUserMenu(false); sessionStorage.removeItem("photosnap-session"); }}>Log out</button>
          </div>
        )}
      </div>

      {isOpen && mounted && createPortal(
        <div className="fixed inset-0 z-60 flex items-center justify-center">
          <div className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${showModal ? "opacity-100" : "opacity-0"}`} onClick={closePortal} />
          <div className={`relative bg-white/90 w-full max-w-md p-8 shadow-lg transform transition-all duration-300 ${showModal ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}>
            <button onClick={closePortal} className="absolute top-4 right-4 text-gray-500 hover:text-black cursor-pointer">✕</button>

            {mode === "login" && (
              <>
                <h2 className="text-2xl font-semibold text-center mb-6">Log in</h2>
                <form onSubmit={handleSubmit(onLoginSubmit)} className="space-y-4">
                  <AuthInput name="username" placeholder="Username" register={register} errors={errors} validation={{ required: "Username is required", minLength: { value: 3, message: "Username must be at least 3 characters" } }} />
                  <AuthInput name="password" placeholder="Password" register={register} errors={errors} validation={{ required: "Password cannot be empty" }} showToggle onToggle={() => setShowPassword(!showPassword)} visible={showPassword} />
                  <button type="submit" className={buttonClasses}>Log in</button>
                  <p className="text-center text-sm mt-4">Don't have an account? <button type="button" onClick={() => { setMode("signup"); reset(); }} className="font-semibold underline hover:text-gray-600 transition-colors">Sign up</button></p>
                </form>
              </>
            )}

            {mode === "newUser" && (
              <div className="text-center">
                <p className="mb-6">Looks like a new user. <br /> Please sign up.</p>
                <button onClick={() => { setMode("signup"); reset(); }} className={buttonClasses}>Sign Up</button>
              </div>
            )}

            {mode === "signup" && (
              <>
                <h2 className="text-2xl font-semibold text-center mb-6">Sign Up</h2>
                <form onSubmit={handleSubmit(onSignupSubmit)} className="space-y-4">
                  <AuthInput name="username" placeholder="Username" register={register} errors={errors} validation={{ required: "Username is required", minLength: { value: 3, message: "Username must be at least 3 characters" } }} />
                  <AuthInput name="email" placeholder="Email" register={register} errors={errors} validation={{ required: "Email is required", pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Looks like this is not an email" } }} />
                  <AuthInput name="password" placeholder="Password" register={register} errors={errors} validation={{ required: "Password cannot be empty", minLength: { value: 6, message: "Password must be at least 6 characters" } }} showToggle onToggle={() => setShowPassword(!showPassword)} visible={showPassword} />
                  <AuthInput name="confirmPassword" placeholder="Confirm Password" register={register} errors={errors} validation={{ required: "Please confirm your password", validate: (val: string) => val === passwordValue || "Passwords do not match" }} showToggle onToggle={() => setShowConfirmPassword(!showConfirmPassword)} visible={showConfirmPassword} />
                  <button type="submit" className={buttonClasses}>Sign Up</button>
                </form>
              </>
            )}
          </div>
        </div>,
        document.body
      )}

      {showSuccess && mounted && createPortal(
        <div className="fixed inset-0 z-60 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
          <div className="relative bg-white/90 w-full max-w-md p-8 shadow-lg text-center transform transition-all duration-300 opacity-100 scale-100">
            <div className="text-4xl mb-4">✨</div>
            <p className="text-lg">Welcome <strong>{successUser}</strong></p>
            <p className="text-sm mt-2 text-gray-600">You have signed up successfully!</p>
          </div>
        </div>,
        document.body
      )}
    </>
  );
};

export default Login;