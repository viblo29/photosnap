import StoryButton from '@/components/atoms/StoryButton/StoryButton'

function Stories() {
  const stories = [
    {
      date: "April 16th 2020",
      title: "The Mountains",
      author: "by John Appleseed",
      image: "/images/mountain_story.svg"
    },
    {
      date: "April 14th 2020",
      title: "Sunset Cityscapes",
      author: "by Benjamin Cruz",
      image: "/images/city_story.svg"
    },
    {
      date: "April 11th 2020",
      title: "18 Days Voyage",
      author: "by Alexei Borodin",
      image: "/images/man_walking_story.svg"
    },
    {
      date: "April 9th 2020",
      title: "Architecturals",
      author: "by Samantha Brooke",
      image: "/images/round_building_story.svg"
    },
    {
      date: "April 7th 2020",
      title: "World Tour 2019",
      author: "by Timothy Wagner",
      image: "/images/story_1.svg"
    },
    {
      date: "April 3rd 2020",
      title: "Unforeseen Corners",
      author: "by William Malcolm",
      image: "/images/story_2.svg"
    },
    {
      date: "March 29th 2020",
      title: "King on Africa: Part II",
      author: "by Tim Hillenburg",
      image: "/images/story_3.svg"
    },
    {
      date: "March 21th 2020",
      title: "The Trip to Nowhere",
      author: "by Felicia Rourke",
      image: "/images/story_4.svg"
    },
    {
      date: "March 19th 2020",
      title: "Rage of The Sea",
      author: "by Mohammed Abdul",
      image: "/images/story_5.svg"
    },
    {
      date: "March 16th 2020",
      title: "Running Free",
      author: "by Michelle",
      image: "/images/story_6.svg"
    },
    {
      date: "March 11th 2020",
      title: "Behind the Waves",
      author: "by Lamarr Wilson",
      image: "/images/story_7.svg"
    },
    {
      date: "March 9th 2020",
      title: "Calm Waters",
      author: "by Samantha Brooke",
      image: "/images/story_8.svg"
    },
    {
      date: "March 5th 2020",
      title: "The Milky Way",
      author: "by Benjamin Cruz",
      image: "/images/story_9.svg"
    },
    {

      date: "March 4th 2020",
      title: "Night at The Dark Forest",
      author: "by  Mohammed Abdul",
      image: "/images/story_10.svg"
    },
    {
      date: "March 1st 2020",
      title: "Somwarpet’s Beauty",
      author: "by Michelle",
      image: "/images/story_11.svg"
    },
    {
      date: "February 25th 2020",
      title: "Land of Dreams",
      author: "by William Malcolm",
      image: "/images/story_12.svg"
    }
  ]

  return (
    <div className="grid grid-cols-4">
      {stories.map((story) => (
        <div
          key={story.title}
          className="relative group w-full h-125 cursor-pointer"
        >

          <div className="pointer-events-none opacity-0">
            <div className="px-10 pb-5 pt-90.25 flex flex-col items-start">
              <div className="flex flex-col items-start">
                <div className="mb-4 text-white">
                  <h1 className="font-['DM_Sans',sans-serif] font-bold text-[18px] leading-6.25 tracking-[0px] mb-1">
                    {story.title}
                  </h1>
                  <p className="font-['DM_Sans',sans-serif] font-normal text-[13px] leading-[100%] tracking-[0px]">
                    {story.author}
                  </p>
                </div>
                <div className="mb-5 h-px bg-gray-500 w-70" />
                <div className="h-10 w-32 bg-transparent" />
              </div>
            </div>
          </div>

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
            <div className="mb-10 mt-90.25 flex flex-col items-start w-full">
              <div className="mb-4 text-white  ">
                <p className="font-['DM_Sans',sans-serif] mb-1 font-normal text-[13px] leading-[100%] tracking-[0px]"
                >{story.date}</p>
                <h1 className="font-['DM_Sans',sans-serif]  font-bold text-[18px] leading-6.25 tracking-[0px] mb-1">
                  {story.title}
                </h1>
                <p className="font-['DM_Sans',sans-serif] font-normal text-[13px] leading-[100%] tracking-[0px]">
                  {story.author}
                </p>
              </div>

              <div className="mb-5 h-px bg-gray-500 w-full" />

              <StoryButton width='100%' />
            </div>
          </div>

          <div className="
            absolute
            bottom-0 left-0 right-0
            h-1.5
            bg-[linear-gradient(0.5deg,#FFC593,#BC7198,#5A77FF)]
            scale-y-0
            origin-bottom
            transition-all duration-300 ease-out
            group-hover:scale-y-100
            group-hover:-translate-y-6
          "></div>

        </div>
      ))}
    </div>
  )
}

export default Stories
