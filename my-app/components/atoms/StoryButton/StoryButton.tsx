import React from 'react'


function StoryButton() {
    return (
        <div >
            <button
                className={`font-bold text-xs tracking-[2px] flex justify-between items-center text-white`}
                style={{ width: `280px` }}
            >
                READ STORY
                <svg width="42" height="13" viewBox="0 0 42 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 6.35355H41.864" stroke="white" />
                    <path d="M35.4282 0.353546L41.4282 6.35355L35.4282 12.3535" stroke="white" />
                </svg>
            </button>

        </div>
    )
}

export default StoryButton
