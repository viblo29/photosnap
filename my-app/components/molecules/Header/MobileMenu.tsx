"use client";
import Image from "next/image";
import { useState } from "react";
import siteLogo from "../../../public/photosnap-black.svg";
import NavButtons from "@/components/atoms/NavButtons/NavButtons";
import Link from "next/link";
import Login from "@/components/molecules/Login/Login";

function MobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <>
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={toggleMenu}
        />
      )}

      <div className="md:hidden fixed top-0 left-0 w-full z-50 bg-white shadow-md">
        <div className="w-full h-18 flex justify-between items-center px-6">
          <Link href="/">
            <Image src={siteLogo} alt="Website Logo" />
          </Link>

          <button
            onClick={toggleMenu}
            className="w-6 h-6 flex flex-col justify-center items-center gap-1.5 cursor-pointer"
          >
            <span
              className={`w-5 h-0.5 bg-black transition-all duration-300 ease-in-out ${
                isMenuOpen ? "rotate-45 translate-y-1" : ""
              }`}
            />
            <span
              className={`w-5 h-0.5 bg-black transition-all duration-300 ease-in-out ${
                isMenuOpen ? "-rotate-45 -translate-y-1" : ""
              }`}
            />
          </button>
        </div>

        <div
          className={`absolute top-18 left-0 w-full bg-white transition-all duration-300 ease-in-out
            ${isMenuOpen ? "h-63.25 overflow-visible" : "h-0 overflow-hidden"}
          `}
        >
          <div
            className={`flex flex-col items-center py-7.75 transition-opacity duration-200
            ${isMenuOpen ? "opacity-100" : "opacity-0"}
          `}
          >
            <div className="flex flex-col items-center gap-4.25 mb-4.25">
              <Link href="/stories">
                <NavButtons text="Stories" textColor="black" />
              </Link>
              <Link href="/features">
                <NavButtons text="FEATURES" textColor="black" />
              </Link>
              <Link href="/pricing">
                <NavButtons text="PRICING" textColor="black" />
              </Link>
            </div>

            <div className="w-77.5 h-px bg-black opacity-25 mb-5" />

            <Login buttonClassName="font-bold text-xs tracking-[2px] px-6 py-3 bg-[#000000] text-white hover:text-black hover:bg-[#DFDFDF] cursor-pointer transition-colors duration-300 ease-in-out" />
          </div>
        </div>
      </div>
    </>
  );
}

export default MobileMenu;
