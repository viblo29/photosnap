import React from "react";

function AllBenefits() {
  const benefits = [
    {
      icon: "/images/Shape1.svg",
      title: "100% Responsive",
      text: "No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen.",
      iconWidth: "w-18",
    },
    {
      icon: "/images/Shape2.svg",
      title: "No Photo Upload Limit",
      text: "Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.",
      iconWidth: "w-18",
    },
    {
      icon: "/images/Shape3.svg",
      title: "Available to Embed",
      text: "Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more.",
      iconWidth: "w-18",
    },
    {
      icon: "/images/Shape4.svg",
      title: "Custom Domain",
      text: "With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding!",
      iconWidth: "w-20",
    },
    {
      icon: "/images/Shape5.svg",
      title: "Boost Your Exposure",
      text: "Users that viewed your story or gallery can easily get notifed of new and featured stories with our built in mailing list.",
      iconWidth: "w-18",
    },
    {
      icon: "/images/Shape6.svg",
      title: "Drag & Drop Image",
      text: "Easily drag and drop your image and get beautiful shots everytime. No over the top tooling to add friction to creating stories.",
      iconWidth: "w-22.5",
    },
  ];

  return (
    <div
      className="w-screen  p-40 pt-8 flex items-center justify-between flex-wrap
                 max-[1100px]:p-20 max-[1100px]:pt-10
                 max-[900px]:px-9 max-[767px]:justify-center"
    >
      {benefits.map((item, index) => (
        <div
          key={index}
          className="w-87.5 h-59 flex flex-col justify-between items-center mt-26
                     max-[1100px]:w-85 max-[1100px]:mt-16
                     max-[540px]:w-77.5"
        >
          <div className={`${item.iconWidth} h-18 flex items-center`}>
            <img src={item.icon} alt={item.title} />
          </div>

          <div className="w-full h-29 text-center">
            <p className="font-bold text-[18px] leading-6.25 mb-4.5">
              {item.title}
            </p>
            <p className="opacity-60 text-[15px]">{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
export default AllBenefits;
