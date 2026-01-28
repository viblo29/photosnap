import React from 'react'

interface HomePageButtonProps {
  text: string
  textColor: 'white' | 'black'
  arrowColor: 'white' | 'black'
  gap: 4.5 | 6.5
}

function HomePageButton({ text, textColor, arrowColor, gap }: HomePageButtonProps) {
  const textColorClass = textColor === 'white' ? 'text-white' : 'text-black'
  const gapClass = gap === 4.5 ? 'gap-4.5' : 'gap-6.5'
  const strokeColor = arrowColor === 'white' ? 'white' : 'black'

  return (
    <div>
        <button className={`font-bold text-xs tracking-[2px] flex justify-center cursor-pointer ${gapClass} ${textColorClass}`}>
          {text}
            <div>
                <svg width="42" height="13" viewBox="0 0 42 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 6.35355H41.864" stroke={strokeColor}/>
                <path d="M35.4282 0.353546L41.4282 6.35355L35.4282 12.3535" stroke={strokeColor}/>
                </svg>
            </div>
        </button>
    </div>
  )
}

export default HomePageButton