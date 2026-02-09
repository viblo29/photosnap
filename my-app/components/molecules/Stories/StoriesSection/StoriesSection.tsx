"use client";

import { useState, useEffect, useRef } from "react";
import StoryButton from "@/components/atoms/StoryButton/StoryButton";

export default function Stories() {
  const defaultStories = [
    {
      date: "April 16th 2020",
      title: "The Mountains",
      author: "by John Appleseed",
      image: "/images/mountain_story.webp",
    },
    {
      date: "April 14th 2020",
      title: "Sunset Cityscapes",
      author: "by Benjamin Cruz",
      image: "/images/city_story.webp",
    },
    {
      date: "April 11th 2020",
      title: "18 Days Voyage",
      author: "by Alexei Borodin",
      image: "/images/man_walking_story.webp",
    },
    {
      date: "April 9th 2020",
      title: "Architecturals",
      author: "by Samantha Brooke",
      image: "/images/round_building_story.webp",
    },
    {
      date: "April 7th 2020",
      title: "World Tour 2019",
      author: "by Timothy Wagner",
      image: "/images/story_1.webp",
    },
    {
      date: "April 3rd 2020",
      title: "Unforeseen Corners",
      author: "by William Malcolm",
      image: "/images/story_2.webp",
    },
    {
      date: "March 29th 2020",
      title: "King on Africa: Part II",
      author: "by Tim Hillenburg",
      image: "/images/story_3.webp",
    },
    {
      date: "March 21th 2020",
      title: "The Trip to Nowhere",
      author: "by Felicia Rourke",
      image: "/images/story_4.webp",
    },
    {
      date: "March 19th 2020",
      title: "Rage of The Sea",
      author: "by Mohammed Abdul",
      image: "/images/story_5.webp",
    },
    {
      date: "March 16th 2020",
      title: "Running Free",
      author: "by Michelle",
      image: "/images/story_6.webp",
    },
    {
      date: "March 11th 2020",
      title: "Behind the Waves",
      author: "by Lamarr Wilson",
      image: "/images/story_7.webp",
    },
    {
      date: "March 9th 2020",
      title: "Calm Waters",
      author: "by Samantha Brooke",
      image: "/images/story_8.webp",
    },
    {
      date: "March 5th 2020",
      title: "The Milky Way",
      author: "by Benjamin Cruz",
      image: "/images/story_9.webp",
    },
    {
      date: "March 4th 2020",
      title: "Night at The Dark Forest",
      author: "by Mohammed Abdul",
      image: "/images/story_10.webp",
    },
    {
      date: "March 1st 2020",
      title: "Somwarpet's Beauty",
      author: "by Michelle",
      image: "/images/story_11.webp",
    },
    {
      date: "February 25th 2020",
      title: "Land of Dreams",
      author: "by William Malcolm",
      image: "/images/story_12.webp",
    },
  ];

  const [stories, setStories] = useState<any[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newAuthor, setNewAuthor] = useState("");
  const [newDate, setNewDate] = useState("");
  const [newImageUrl, setNewImageUrl] = useState("");
  const [isOnFooter, setIsOnFooter] = useState(false);
  const [visibleStories, setVisibleStories] = useState<Set<number>>(new Set());

  const storyRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("stories");
    if (saved) {
      setStories(JSON.parse(saved));
    } else {
      setStories(defaultStories);
      localStorage.setItem("stories", JSON.stringify(defaultStories));
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector("#main-footer");

      if (!footer) return;

      const footerPlace = footer.getBoundingClientRect();
      const buttonBottom = window.innerHeight - 80;

      if (footerPlace.top < buttonBottom) {
        setIsOnFooter(true);
      } else {
        setIsOnFooter(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


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
  }, [stories]);

  function openForm() {
    setShowForm(true);
  }

  function closeForm() {
    setShowForm(false);
    setNewTitle("");
    setNewAuthor("");
    setNewDate("");
    setNewImageUrl("");
  }

  function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) {
      setNewImageUrl("");
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      const base64String = reader.result as string;
      setNewImageUrl(base64String);
    };

    reader.readAsDataURL(file);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const newStory = {
      title: newTitle,
      author: newAuthor,
      date: newDate,
      image: newImageUrl,
    };

    const updatedStories = [newStory, ...stories];
    setStories(updatedStories);
    localStorage.setItem("stories", JSON.stringify(updatedStories));

    setNewTitle("");
    setNewAuthor("");
    setNewDate("");
    setNewImageUrl("");
    setShowForm(false);
  }

  return (
    <>
      <button
        onClick={openForm}
        className={`
    fixed bottom-4 right-8 z-20
    w-16 h-16
    font-bold text-[36px]
    flex items-center justify-center
    shadow-2xl
    transition-all duration-300 hover:scale-110   
  
        ${
          isOnFooter
            ? "bg-white text-black rounded-xl "
            : "bg-black text-white rounded-xl "
        }
          `}
      >
        +
      </button>

      {showForm && (
        <div
          onClick={closeForm}
          className="
            fixed inset-0 z-50
          bg-black/70 
            backdrop-blur-sm
            "
        >
          <div className="min-h-full flex items-center justify-center">
            <div
              onClick={(e) => e.stopPropagation()}
              className="
                w-full max-w-7xl bg-white rounded-2xl shadow-2xl
                overflow-hidden 
                flex flex-col lg:flex-row
                my-8
              "
            >
              {/* Form Section */}   
              <div className="w-full lg:w-1/2 p-6 sm:p-8">
                <h2 className="text-[24px] sm:text-[30px] font-bold mb-4 sm:mb-5">Create New Story</h2>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:gap-6">
                  <div>
                    <label className="block mb-2 font-medium text-sm sm:text-base">Title</label>
                    <input
                      value={newTitle}
                      onChange={(e) => setNewTitle(e.target.value)}
                      placeholder="e.g. Northern Lights Adventure"
                      className="w-full p-2.5 sm:p-3 border rounded-lg text-[14px] sm:text-[16px]"
                      required
                    />
                  </div>

                  <div>
                    <label className="block mb-2 font-medium text-sm sm:text-base">Author</label>
                    <input
                      value={newAuthor}
                      onChange={(e) => setNewAuthor(e.target.value)}
                      placeholder="by Your Name"
                      className="w-full p-2.5 sm:p-3 border rounded-lg text-[14px] sm:text-[16px]"
                      required
                    />
                  </div>

                  <div>
                    <label className="block mb-2 font-medium text-sm sm:text-base">Date</label>
                    <input
                      value={newDate}
                      onChange={(e) => setNewDate(e.target.value)}
                      placeholder="e.g. April 16th 2025"
                      className="w-full p-2.5 sm:p-3 border rounded-lg text-[14px] sm:text-[16px]"
                      required
                    />
                  </div>

                  <div>
                    <label className="block mb-2 font-medium text-sm sm:text-base">Image</label>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="w-full p-2.5 sm:p-3 rounded-md text-gray-500 border-black border-[1.5px] text-[14px] sm:text-[16px]"
                      required
                    />
                  </div>

                  <div className="mt-2 sm:mt-4 flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <button
                      type="submit"
                      className="
                        w-full sm:flex-1 py-2.5 sm:py-3 px-4 sm:px-6 rounded-xl font-bold text-white text-[14px] sm:text-[16px]
                        bg-black hover:bg-gray-800 transition-colors"
                    >
                      Create Story
                    </button>

                    <button
                      type="button"
                      onClick={closeForm}
                      className="
                        w-full sm:flex-1 py-2.5 sm:py-3 px-4 sm:px-6 rounded-xl border border-gray-300
                        font-semibold text-[14px] sm:text-[16px] hover:bg-gray-100 transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>

              {/* Preview Section */}
              <div className="w-full lg:w-1/2 bg-gray-900 p-6 sm:p-8 lg:p-10 flex items-center justify-center">
                <div className="w-full max-w-md aspect-3/4 relative rounded-xl overflow-hidden shadow-2xl">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.75)), url(${newImageUrl})`,
                    }}
                  />

                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-white">
                    <p className="text-xs sm:text-sm opacity-90 mb-1">{newDate || 'Date'}</p>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-1">{newTitle || 'Story Title'}</h3>
                    <p className="text-[12px] sm:text-[14px] opacity-90">{newAuthor || 'by Author Name'}</p>
                    <div className="my-4 sm:my-5 h-px bg-white/40" />

                    <StoryButton width="100%" />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-1 bg-gray-900 p-10 flex items-center justify-center">
              <div className="w-full max-w-100 aspect-3/4 relative rounded-xl overflow-hidden shadow-2xl">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.75)), url(${newImageUrl})`,
                  }}
                />

                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <p className="text-md opacity-90 mb-1">{newDate || "Date"}</p>
                  <h3 className="text-2xl font-bold mb-1">
                    {newTitle || "Story Title"}
                  </h3>
                  <p className="text-[14px] opacity-90">
                    {newAuthor || "by Author Name"}
                  </p>
                  <div className="my-5 h-px bg-white/40" />

                  <StoryButton width="100%" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 w-screen">
        {stories.map((story, index) => (
          <div
            key={story.title}
            ref={(el) => {
              if (el) storyRefs.current[index] = el;
            }}
            className={`
              group relative h-125 cursor-pointer
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
            <div className="absolute inset-0 bg-linear-to-b from-black/5 to-black/70 transition-transform group-hover:-translate-y-6 duration-300" />

            <div
              className="absolute inset-0 bg-cover bg-center transition-transform group-hover:-translate-y-6 duration-300"
              style={{
                backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.05), rgba(0,0,0,0.7)), url('${story.image}')`,
              }}
            >
              <div className="absolute bottom-10 left-10 right-10 text-white">
                <p className="text-[14px] mb-1">{story.date}</p>
                <h3 className="text-[18px] font-bold mb-1">{story.title}</h3>
                <p className="text-[14px]">{story.author}</p>

                <div className="my-5 h-px bg-gray-400 w-full" />

                <StoryButton width="100%" />
              </div>
            </div>

            <div
              className="
                absolute bottom-0 left-0 right-0 h-1.5
                bg-linear-to-r from-[#FFC593] via-[#BC7198] to-[#5A77FF]
                scale-y-0 origin-bottom
                transition-transform duration-300
                group-hover:scale-y-100 group-hover:-translate-y-6
              "
            />
          </div>
        ))}
      </div>
    </>
  );
}
