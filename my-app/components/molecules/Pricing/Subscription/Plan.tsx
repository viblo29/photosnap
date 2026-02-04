import rectangle from "../../../../public/plans-features-pro.svg";
import rectangleTablet from "../../../../public/plans-features-pro-tablet.svg";
import rectangleMobile from "../../../../public/plans-features-pro-mobile.svg";
import Image from "next/image";

interface PlanProps {
  h1: string;
  h2: string;
  price: string;
  backgroundColor: "black" | "gray";
  isMiddle?: boolean;
  isYearly: boolean;
  onPickPlan: () => void;
}

function Plan({ h1, h2, price, backgroundColor, isMiddle = false, isYearly, onPickPlan }: PlanProps) {
  const bgColor = backgroundColor === "black" ? "bg-black" : "bg-[#F5F5F5]";
  const textColor = backgroundColor === "black" ? "text-white" : "text-black";
  const buttonClasses =
    backgroundColor === "black"
      ? "bg-white text-black hover:bg-[#DFDFDF]"
      : "bg-black text-white hover:bg-[#DFDFDF] hover:text-black";

  const basePrice = parseFloat(price);
  const displayPrice = isYearly ? (basePrice * 10).toFixed(2) : basePrice.toFixed(2);
  const billingPeriod = isYearly ? "per year" : "per month";

  return (
    <div>
      <div
        className={`hidden lg:flex ${bgColor} w-87.5 ${isMiddle ? "h-117.5" : "h-101.75"} ${textColor} flex-col items-center text-center`}
      >
        {isMiddle && (
          <div className="">
            <Image src={rectangle} alt="" />
          </div>
        )}
        <div className="px-10">
          <div
            className={`flex flex-col gap-4.5 ${isMiddle ? "mt-20.5" : "mt-14"} mb-10`}
          >
            <div className="font-bold text-[24px]/[25px]">{h1}</div>
            <div className="text-[15px]/[25px] opacity-60">{h2}</div>
          </div>
          <div className="mb-10">
            <div className="font-bold text-[40px]/[48px] tracking-[4.17px] uppercase">
              ${displayPrice}
            </div>
            <div className="text-[15px]/[25px] opacity-60">{billingPeriod}</div>
          </div>

          <button
            onClick={onPickPlan}
            className={`w-full h-10 font-bold cursor-pointer text-[12px] tracking-[2px] uppercase ${buttonClasses} transition-colors duration-300 ease-in-out`}
          >
            Pick Plan
          </button>
        </div>
      </div>


      <div
        className={`hidden md:flex lg:hidden ${bgColor} w-172.25 h-67.5 ${textColor} flex-row  pr-12 py-10`}
      >

        {isMiddle && (
          <div className="flex items-center">
            <Image src={rectangleTablet} alt="" />
          </div>
        )}
        

        <div className={`flex flex-col justify-center flex-1 ${isMiddle ? "ml-8.5" : "ml-10"}`}>
          <div className="flex flex-col gap-4 mb-8 w-67.5">
            <div className="font-bold text-[24px]/[25px]">{h1}</div>
            <div className="text-[15px]/[25px] opacity-60">{h2}</div>
          </div>
          
          <button
            onClick={onPickPlan}
            className={`w-67.5 h-10 font-bold cursor-pointer text-[12px] tracking-[2px] uppercase ${buttonClasses} transition-colors duration-300 ease-in-out`}
          >
            Pick Plan
          </button>
        </div>

        <div className="flex flex-col items-end text-right pt-0.5">
          <div className="font-bold text-[40px]/[48px] tracking-[4.17px] uppercase">
            ${displayPrice}
          </div>
          <div className="text-[15px]/[25px] opacity-60">{billingPeriod}</div>
        </div>
      </div>

      <div
        className={`flex md:hidden ${bgColor} w-79.5 h-101.75 ${textColor} flex-col items-center text-center`}
      >
        {isMiddle && (
          <div className="">
            <Image src={rectangleMobile} alt="" />
          </div>
        )}
        <div className="px-5.25">
          <div
            className={`flex flex-col gap-4.5 ${isMiddle ? "mt-12.5" : "mt-14"} mb-10`}
          >
            <div className="font-bold text-[24px]/[25px]">{h1}</div>
            <div className="text-[15px]/[25px] opacity-60">{h2}</div>
          </div>
          <div className="mb-10">
            <div className="font-bold text-[40px]/[48px] tracking-[4.17px] uppercase">
              ${displayPrice}
            </div>
            <div className="text-[15px]/[25px] opacity-60">{billingPeriod}</div>
          </div>

          <button
            onClick={onPickPlan}
            className={`w-61.25 h-10 font-bold cursor-pointer text-[12px] tracking-[2px] uppercase ${buttonClasses} transition-colors duration-300 ease-in-out`}
          >
            Pick Plan
          </button>
        </div>
      </div>
    </div>
  );
}

export default Plan;