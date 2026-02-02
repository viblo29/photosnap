"use client";
import Image from "next/image";
import { useState } from "react";
import siteLogo from "../../../public/photosnap-black.svg";
import NavButtons from "@/components/atoms/NavButtons/NavButtons";
import Link from "next/link";

function MobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40 md:hidden"
          onClick={toggleMenu}
        />
      )}

      <div className="md:hidden relative z-50">
        <div className="w-full h-18 bg-white flex justify-between items-center px-6">
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
          className={`absolute top-18 left-0 w-full bg-white overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "h-63.25" : "h-0"
          }`}
        >
          <div className="flex flex-col items-center py-7.75">
            <div className="flex flex-col items-center gap-4.25 mb-4.25">
              <Link href="/stories">
              <NavButtons text="Stories" textColor="black"/>
              </Link>
              <Link href="/features">
                <NavButtons text="FEATURES" textColor="black"/>
              </Link>
              <Link href="/pricing">
                <NavButtons text="PRICING" textColor="black"/>
              </Link>
            </div>

            <div className="w-77.5 h-px bg-black opacity-25 mb-5" />

            <button className="w-77.5 h-12 font-bold text-[15px] tracking-[2.5px] bg-[#000000] text-white">
              GET AN INVITE
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default MobileMenu;
