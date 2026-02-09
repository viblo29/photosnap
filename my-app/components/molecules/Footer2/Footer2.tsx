import Image from "next/image";
import React from "react";
import footerRectangle from "../../../public/features&pricing/footer-rectangle.svg";
import footerRectangleMobile from "../../../public/features&pricing/footer-rectangle-mobile.svg";
import mobileFooterBackground from "../../../public/features&pricing/mobile-footer-background.webp";
import tabletFooterBackground from "../../../public/features&pricing/tablet-footer-background.webp";
import footerBackground from "../../../public/features&pricing/footer-background.webp";
import HomePageButton from "@/components/atoms/HomePageButton/HomePageButton";

function Footer2() {
  return (
    <div className="h-72 md:h-70 w-full relative">
      <div className="flex md:hidden">
        <Image
          src={mobileFooterBackground}
          alt="background image"
          fill
          className="object-cover"
        />
      </div>
      <div className="hidden md:flex">
        <Image
          src={tabletFooterBackground}
          alt="background image"
          fill
          className="object-cover"
        />
      </div>
      <div className="hidden md:hidden lg:flex">
        <Image
          src={footerBackground}
          alt="background image"
          fill
          className="object-cover"
        />
      </div>

      <div className="relative z-10 px-7.5 md:px-0 md:flex md:items-center ">
        <div className="flex md:hidden">
          <Image src={footerRectangleMobile} alt="" />
        </div>
        <div className="hidden md:flex">
          <Image src={footerRectangle} alt="" />
        </div>

        <div className="md:flex md:justify-between md:w-full md:items-center">
          <div className="md:w-100 mt-14.5 md:mt-0 md:ml-8.25 lg:ml-39.75 text-white font-bold text-[32px]/[40px] md:text-[40px]/[48px] md:tracking-[4.17px] tracking-[3.33px] uppercase ">
            We’re in beta. Get your invite today!
          </div>
          <div className="mt-6 md:mt-0 md:mr-10 lg:mr-41.25">
            <HomePageButton
              text={"GET AN INVITE"}
              textColor={"white"}
              gap={4.5}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer2;
