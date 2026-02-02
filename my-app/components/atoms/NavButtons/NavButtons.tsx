import React from "react";
interface NavButtonsProps {
  text: string;
  textColor: "white" | "black";
}
function NavButtons({ text, textColor }: NavButtonsProps) {
  const textColorClass = textColor === "white" ? "text-white" : "text-black";
  return (
    <div>
      <button className={`font-bold text-[15px] md:text-xs ${textColorClass} uppercase tracking-[2.5px] md:tracking-[2px] cursor-pointer md:p-0.5 transition-opacity duration-300 ease-in-out hover:opacity-30`}>
        {text}
      </button>
    </div>
  );
}

export default NavButtons;
