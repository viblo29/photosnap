"use client";

import { useState, useEffect, useRef } from "react";
import StoryButton from "@/components/atoms/StoryButton/StoryButton";

function Stories() {
  const stories = [
    {
      title: "The Mountains",
      author: "John Appleseed",
      image: "/images/mountain_story.webp",
    },
    {
      title: "Sunset Cityscapes",
      author: "Benjamin Cruz",
      image: "/images/city_story.webp",
    },
    {
      title: "18 Days Voyage",
      author: "Alexei Borodin",
      image: "/images/man_walking_story.webp",
    },
    {
      title: "Architecturals",
      author: "Samantha Brooke",
      image: "/images/round_building_story.webp",
    },
  ];

  const [visibleStories, setVisibleStories] = useState<Set<number>>(new Set());
  const storyRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    storyRefs.current.forEach((ref, index) => {
      if (!ref) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleStories((prev) => new Set(prev).add(index));
            }
          });
        },
        {
          threshold: 0.15,
          rootMargin: "0px 0px -50px 0px",
        },
      );

      observer.observe(ref);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <div className="grid w-screen grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1">
      {stories.map((story, index) => (
        <div
          key={story.title}
          ref={(el) => {
            if (el) storyRefs.current[index] = el;
          }}
          className={`
            relative group w-full h-125 cursor-pointer
            transition-all duration-700 ease-out
            ${
              visibleStories.has(index)
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }
          `}
          style={{
            transitionDelay: `${(index % 4) * 100}ms`,
          }}
        >
          <div className="pointer-events-none opacity-0">
            <div className="px-10 pb-5 pt-90.25 flex flex-col  items-start">
              <div className="flex flex-col items-start ">
                <div className="mb-4 text-white w-full">
                  <h1 className="font-['DM_Sans',sans-serif] font-bold text-[18px] leading-6.25 tracking-[0px] mb-1">
                    {story.title}
                  </h1>
                  <p className="font-['DM_Sans',sans-serif] font-normal text-[13px] leading-[100%] tracking-[0px]">
                    by {story.author}
                  </p>
                </div>
                <div className="mb-5 h-px bg-gray-500 w-full" />
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
              backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.01), rgba(0,0,0,0.6612)), url('${story.image}')`,
            }}
          >
            <div className="mb-10 mt-90.25 flex flex-col items-start">
              <div className="mb-4 text-white w-full">
                <h1 className="font-['DM_Sans',sans-serif] font-bold text-[18px] leading-6.25 tracking-[0px] mb-1">
                  {story.title}
                </h1>
                <p className="font-['DM_Sans',sans-serif] font-normal text-[13px] leading-[100%] tracking-[0px]">
                  by {story.author}
                </p>
              </div>

              <div className="mb-5 h-px bg-gray-500 w-full" />

              <StoryButton width="100%" />
            </div>
          </div>

          <div
            className="
            absolute
            bottom-0 left-0 right-0
            h-1.5
            bg-[linear-gradient(0.5deg,#FFC593,#BC7198,#5A77FF)]
            scale-y-0
            origin-bottom
            transition-all duration-300 ease-out
            group-hover:scale-y-100
            group-hover:-translate-y-6
          "
          ></div>
        </div>
      ))}
    </div>
  );
}

export default Stories;
