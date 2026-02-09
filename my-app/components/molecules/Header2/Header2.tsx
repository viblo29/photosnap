import Image from "next/image";
import { StaticImageData } from "next/image";
import mobileRectangle from "../../../public/features&pricing/mobile-rectangle.svg";
import rectangle from "../../../public/features&pricing/rectangle.svg";

interface Header2Props {
  h1: string;
  h2: string;
  images: {
    mobile: StaticImageData;
    tablet: StaticImageData;
    desktop: StaticImageData;
  };
}

function Header2({ h1, h2, images }: Header2Props) {
  return (
    <div className="flex flex-col mt-18">
      <div className="block md:hidden">
        <div>
          <Image src={images.mobile} alt="Header Picture" />
        </div>

        <div className="bg-black px-7.25 pb-18">
          <div className="flex">
            <Image src={mobileRectangle} alt="" />
          </div>
          <div className="flex flex-col text-white mt-16.5">
            <div className="font-bold text-[32px]/[40px] tracking-[3.33px]">
              {h1}
            </div>
            <div className="mt-4 text-[15px]/[25px] opacity-60">{h2}</div>
          </div>
        </div>
      </div>

      <div className="hidden md:flex lg:hidden">
        <div className="w-[64%] bg-black flex items-center">
          <div className="w-full flex items-center">
            <div>
              <Image src={rectangle} alt="" />
            </div>

            <div className="flex flex-col text-white flex-1 md:pl-12 md:pr-13.5 ">
              <div className="font-bold text-[32px]/[40px] tracking-[3.33px]">
                {h1}
              </div>
              <div className="mt-4 md:mt-5.25 text-[15px]/[25px] opacity-60">
                {h2}
              </div>
            </div>
          </div>
        </div>

        <div className="w-[36%]">
          <Image
            src={images.tablet}
            alt="Header Picture"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="hidden lg:flex">
        <div className="w-[42.4%] bg-black flex items-center">
          <div className="w-full flex items-center">
            <div>
              <Image src={rectangle} alt="" />
            </div>

            <div className="flex flex-col text-white flex-1 md:pl-26.5 md:pr-27.75">
              <div className="font-bold text-[32px]/[40px] tracking-[3.33px] md:text-[40px]/[48px] md:tracking-[4.17px] ">
                {h1}
              </div>
              <div className="mt-4 md:mt-5.25 text-[15px]/[25px] opacity-60">
                {h2}
              </div>
            </div>
          </div>
        </div>

        <div className="w-[57.6%]">
          <Image
            src={images.desktop}
            alt="Header Picture"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Header2;
