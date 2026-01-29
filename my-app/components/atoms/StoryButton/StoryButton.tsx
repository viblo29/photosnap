import React from 'react'

interface HomePageButtonProps {
  width: string
}

function StoryButton({ width }: HomePageButtonProps) {
  return (
    <button
      style={{ width: width }}
      className="font-bold text-xs tracking-[2px] flex items-center  text-white cursor-pointer justify-between"
    >
      READ STORY
      <img src="/images/story_arrow.svg" alt="arrow" />
    </button>
  )
}

export default StoryButton
