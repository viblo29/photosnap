import React from 'react'

interface RightArrowIconProps {
  arrowColor?: 'white' | 'black'
}

function RightArrowIcon({arrowColor}: RightArrowIconProps) {
    const strokeColor = arrowColor === 'white' ? 'white' : 'black'

  return (
    <svg width="42" height="13" viewBox="0 0 42 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 6.35355H41.864" stroke={strokeColor}/>
        <path d="M35.4282 0.353546L41.4282 6.35355L35.4282 12.3535" stroke={strokeColor}/>
    </svg>
  )
}

export default RightArrowIcon