import React from 'react'
import RightArrowIcon from '../RightArrowIcon/RightArrowIcon'

interface HomePageButtonProps {
  text: string
  textColor: 'white' | 'black'
  gap: 4.5 | 6.5
}

function HomePageButton({ text, textColor, gap }: HomePageButtonProps) {
  const textColorClass = textColor === 'white' ? 'text-white' : 'text-black'
  const gapClass = gap === 4.5 ? 'gap-4.5' : 'gap-6.5'

  return (
    <div>
      <button className={`font-bold text-xs tracking-[2px] flex items-center cursor-pointer ${gapClass} ${textColorClass} group`}>
        <span className="border-b border-transparent transition-all duration-300 ease-in-out group-hover:border-current py-0.5">
          {text}
        </span>

        <div className="flex items-center">
          <RightArrowIcon arrowColor={textColor}/>
        </div>
        
      </button>
    </div>
  )
}

export default HomePageButton