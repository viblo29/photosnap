"use client";

import { useState } from "react";
import {useForm} from "react-hook-form";

type Props = {
  buttonClassName?: string;
};

const Login = ({ buttonClassName }: Props) => {
  type Mode = "login" | "newUser" | "signup";

  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState<Mode>("login");

  return (
    <>
      
      <button
        onClick={() => {
          setIsOpen(true);
          setMode("login");
        }}
        className={
          buttonClassName ??
          "font-bold text-xs tracking-[2px] px-6 py-3 bg-black text-white hover:bg-[#DFDFDF] hover:text-black transition"
        }
      >
        LOG IN
      </button>

      {/* MODAL */}
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
              className="absolute top-4 right-4 text-gray-500 hover:text-black"
            >
              ✕
            </button>

            {mode === "login" && (
              <>
                <h2 className="text-2xl font-semibold text-center mb-6">
                  Log in
                </h2>

                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Username"
                    className="w-full border px-4 py-2 rounded-md"
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full border px-4 py-2 rounded-md"
                  />

                  <button
                    onClick={() => setMode("newUser")}
                    className="w-full bg-black text-white py-2 rounded-md"
                  >
                    Log in
                  </button>
                </div>
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
                  className="w-full bg-black text-white py-2 rounded-md"
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

                <div className="space-y-4">
                  <input type="text" placeholder="Username" className="w-full border px-4 py-2 rounded-md" />
                  <input type="email" placeholder="Email" className="w-full border px-4 py-2 rounded-md" />
                  <input type="password" placeholder="Password" className="w-full border px-4 py-2 rounded-md" />
                  <input type="password" placeholder="Confirm password" className="w-full border px-4 py-2 rounded-md" />

                  <button className="w-full bg-black text-white py-2 rounded-md">
                    Sign Up
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
