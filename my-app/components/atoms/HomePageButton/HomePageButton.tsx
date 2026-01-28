
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
        <button className={`font-bold text-xs tracking-[2px] flex justify-center cursor-pointer hover:underline ${gapClass} ${textColorClass}`}>
          {text}
            <div>
                <RightArrowIcon arrowColor={textColor}/>
            </div>
        </button>
    </div>
  )
}

export default HomePageButton