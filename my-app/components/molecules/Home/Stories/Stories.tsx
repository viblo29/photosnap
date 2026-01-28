import StoryButton from '@/components/atoms/StoryButton/StoryButton'

function Stories() {
  const stories = [
    {
      title: "The Mountains",
      author: "John Appleseed",
      image: "/images/mountain_story.svg"
    },
    {
      title: "Sunset Cityscapes",
      author: "Benjamin Cruz",
      image: "/images/city_story.svg"
    },
    {
      title: "18 Days Voyage",
      author: "Alexei Borodin",
      image: "/images/man_walking_story.svg"
    },
    {
      title: "Architecturals",
      author: "Samantha Brooke",
      image: "/images/round_building_story.svg"
    }
  ]

  return (
    <div className="flex">
      {stories.map((story) => (
        <div
          key={story.title}
          className="relative group"
        >

          {/* INVISIBLE CONT (gasazomad)*/}
          <div className="pointer-events-none opacity-0">
            <div className="px-10 pb-5 pt-90.25 flex flex-col items-start">
              <div className="flex flex-col items-start">
                <div className="mb-4 text-white">
                  <h1 className="font-['DM_Sans',sans-serif] font-bold text-[18px] leading-6.25 tracking-[0px] mb-1">
                    The Mountains
                  </h1>
                  <p className="font-['DM_Sans',sans-serif] font-normal text-[13px] leading-[100%] tracking-[0px]">
                    by John Appleseed
                  </p>
                </div>
                <div className="mb-5 h-px bg-gray-500 w-70" />
                <div className="h-10 w-32 bg-transparent" />
              </div>
            </div>
          </div>

          {/* MAIN CONT*/}
          <div
            className="
              absolute
              px-10 inset-0
              bg-cover bg-center
              transition-all duration-300 ease-out
              group-hover:-translate-y-6
            "
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.01), rgba(0,0,0,0.6612)), url('${story.image}')`
            }}
          >
            <div className="mb-10 mt-90.25 flex flex-col items-start">
              <div className="mb-4 text-white">
                <h1 className="font-['DM_Sans',sans-serif] font-bold text-[18px] leading-6.25 tracking-[0px] mb-1">
                  {story.title}
                </h1>
                <p className="font-['DM_Sans',sans-serif] font-normal text-[13px] leading-[100%] tracking-[0px]">
                  by {story.author}
                </p>
              </div>

              <div className="mb-5 h-px bg-gray-500 w-70" />

              <StoryButton />
            </div>
          </div>

          {/* BORDER DIV  */}
          <div className="
  absolute
  bottom-0 left-0 right-0
  h-1.5
  bg-[linear-gradient(0.5deg,#FFC593,#BC7198,#5A77FF)]
  scale-y-0 // Start with 0 height
  origin-bottom
  transition-all duration-300 ease-out
  group-hover:scale-y-100 // Expand to full height
  group-hover:-translate-y-6 // Move up with content
"></div>

        </div>
      ))}
    </div>
  )
}

export default Stories