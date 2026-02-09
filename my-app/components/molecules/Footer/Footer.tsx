import React from "react";
import siteLogoFooter from "../../../public/photosnap-white.svg";
import Image from "next/image";
import Link from "next/link";
import NavButtons from "@/components/atoms/NavButtons/NavButtons";
import HomePageButton from "@/components/atoms/HomePageButton/HomePageButton";
import {
  FacebookIcon,
  YoutubeIcon,
  TwitterIcon,
  PinterestIcon,
  InstagramIcon,
} from "@/components/atoms/SocialIcons/SocialIcons";

function Footer() {
  return (
    <div id="main-footer" className="w-screen">
      <div className="w-full h-134.75 md:h-71 lg:h-62.5 bg-black flex flex-col md:flex-row items-center  md:justify-around">
        <div className="flex mt-14 md:mt-0 lg:gap-27.5">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-27.5 lg:w-full">
            <div className="pt-0.5 row-start-1 mb-8 lg:mb-0 items-center">
              <Image src={siteLogoFooter} alt="Website Logo" />
            </div>

            <div className="flex justify-center md:justify-start items-center gap-[13.33px] row-start-2 md:row-start-3 lg:row-start-2 lg:col-start-1 self-end md:mt-18 lg:mt-0">
              <div>
                {" "}
                <FacebookIcon />{" "}
              </div>
              <div>
                {" "}
                <YoutubeIcon />{" "}
              </div>
              <div>
                {" "}
                <TwitterIcon />{" "}
              </div>
              <div>
                {" "}
                <PinterestIcon />{" "}
              </div>
              <div>
                {" "}
                <InstagramIcon />{" "}
              </div>
            </div>

            <div className="items-center mt-12.25 md:mt-0 flex flex-col gap-4.25 row-start-3 md:flex-row md:gap-6.5 md:row-start-2 md:items-center lg:flex-col lg:gap-4.25 lg:col-start-2 lg:row-start-1 lg:row-span-2 lg:justify-self-start lg:items-start">
              <Link href="/">
                <NavButtons text="HOME" textColor="white" />
              </Link>
              <Link href="/stories">
                <NavButtons text="STORIES" textColor="white" />
              </Link>
              <Link href="/features">
                <NavButtons text="FEATURES" textColor="white" />
              </Link>
              <Link href="/pricing">
                <NavButtons text="PRICING" textColor="white" />
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col mt-29.75 md:mt-0">
          <div className="flex justify-center md:justify-end">
            <HomePageButton text="GET AN INVITE" textColor="white" gap={4.5} />
          </div>
          <div className="text-[15px] justify-center opacity-[0.5] text-white mt-8.5 md:mt-30 lg:mt-21.5">
            Copyright 2019. All Rights Reserved
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
