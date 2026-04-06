import React from "react";
import { useRef } from "react";
import academycImg from "../assets/gallery-hero.png";
import ach1 from "../assets/achievement1.png";
import ach2 from "../assets/achievement2.png";




const Gallery = () => {

   const sliderRef = useRef(null); 

   const scrollLeft = () => {
  sliderRef.current.scrollBy({
    left: -700,
    behavior: "smooth",
  });
};

const scrollRight = () => {
  sliderRef.current.scrollBy({
    left: 700,
    behavior: "smooth",
  });
};

  return (
    <div className="w-full pt-[110px]">

      {/* 🔥 GALLERY HERO SECTION */}
      <div className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden">

        {/* 🔹 Background Image */}
        <img
          src={academycImg}  
          alt="gallery"
          className="absolute w-full h-full object-cover scale-110"
        />

        {/* 🔹 Dark Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* 🔹 Content */}
        <div className="relative z-10 text-center px-6 animate-fadeInUp">

          <h1 className="text-white text-4xl md:text-6xl font-extrabold mb-4">
            Our Gallery ♟️
          </h1>

          <p className="text-gray-300 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed">
            Explore real moments from Creator Chess Academy — where students learn,
            compete, and grow every day.
          </p>

          {/* 🔥 Highlights */}
          <div className="flex flex-wrap justify-center gap-3 mt-6">

            <span className="bg-white/10 backdrop-blur px-4 py-2 rounded-full text-white text-sm">
              🧠 Smart Learning
            </span>

            <span className="bg-white/10 backdrop-blur px-4 py-2 rounded-full text-white text-sm">
              🏆 Tournament Moments
            </span>

            <span className="bg-white/10 backdrop-blur px-4 py-2 rounded-full text-white text-sm">
              📸 Real Class Sessions
            </span>

          </div>

        </div>

      </div>
      const scrollAmount = 600;

{/* 🏆 ACHIEVEMENT SECTION */}
<div className="w-full py-20 px-6 md:px-16 bg-gray-50 relative">

  {/* 🔹 Heading */}
  <div className="text-center mb-12 animate-fadeInUp">
    <h2 className="text-3xl md:text-5xl font-extrabold text-gray-800">
      Wall of <span className="text-green-600">Fame</span> 🏆
    </h2>
    <p className="text-gray-500 mt-3">
      Celebrating achievements of our rising chess champions ♟️
    </p>
  </div>

  {/* 🔥 Scroll Container */}
  <div className="relative">

    

    {/* 🔹 LEFT BUTTON */}
<button
  onClick={scrollLeft}
  className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 
  bg-white/90 backdrop-blur-md border border-gray-200 
  shadow-xl p-3 md:p-4 rounded-full 
  hover:bg-green-500 hover:text-white 
  hover:scale-110 transition duration-300"
>
  <span className="text-lg md:text-2xl font-bold">‹</span>
</button>

{/* 🔹 RIGHT BUTTON */}
<button
  onClick={scrollRight}
  className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 
  bg-white/90 backdrop-blur-md border border-gray-200 
  shadow-xl p-3 md:p-4 rounded-full 
  hover:bg-green-500 hover:text-white 
  hover:scale-110 transition duration-300"
>
  <span className="text-lg md:text-2xl font-bold">›</span>
</button>

    {/* 🔥 SLIDER */}
    <div
       ref={sliderRef} 
      id="achievementSlider"
      className="flex gap-8 overflow-x-auto scroll-smooth no-scrollbar px-10"
    >

      {/* 🔥 ACHIEVEMENT 1 */}
      <div className="min-w-[90%] md:min-w-[80%] bg-white rounded-2xl shadow-xl hover:shadow-2xl transition duration-500 overflow-hidden animate-fadeInUp">

        <div className="grid md:grid-cols-2">

          {/* IMAGE */}
          <div className="relative group">
            <img
              src={ach1}
              alt="achievement1"
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition"></div>
          </div>

          {/* CONTENT */}
          <div className="p-6 md:p-10 flex flex-col justify-center">
            <h3 className="text-xl md:text-2xl font-bold text-green-600 mb-3">
              🥉 Proud Moment for Creator Chess Academy
            </h3>

            <p className="text-gray-700 text-sm md:text-base mb-4">
              Anvay Sapale secured <b>3rd Place</b> in the Under-9 category at
              Golden Square Chess Tournament (Belgaum).
            </p>

            <p className="text-gray-600 text-sm mb-4">
              📊 9 Rounds | 5.5 Points <br />
              ⭐ Performance Rating: 1548
            </p>

            <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm w-fit">
              👏 Congratulations Champion!
            </span>
          </div>

        </div>
      </div>

      {/* 🔥 ACHIEVEMENT 2 */}
      <div className="min-w-[90%] md:min-w-[80%] bg-white rounded-2xl shadow-xl hover:shadow-2xl transition duration-500 overflow-hidden animate-fadeInUp">

        <div className="grid md:grid-cols-2">

          {/* IMAGE */}
          <div className="relative group">
            <img
              src={ach2}
              alt="achievement2"
              className="w-full h-full object-contain bg-gray-100 p-4 group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition"></div>
          </div>

          {/* CONTENT */}
          <div className="p-6 md:p-10 flex flex-col justify-center">
            <h3 className="text-xl md:text-2xl font-bold text-green-600 mb-3">
              🏅 Gold Medal Winner
            </h3>

            <p className="text-gray-700 text-sm md:text-base mb-4">
              Ved Bare won <b>Gold Medal</b> at Holy Cross School Chess Competition (2025–2026).
            </p>

            <p className="text-gray-600 text-sm mb-4">
              This reflects discipline, consistent practice, and strong thinking ♟️💪
            </p>

            <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm w-fit">
              🚀 Keep Winning!
            </span>
          </div>

        </div>
      </div>

    </div>
  </div>
</div>


    </div>
  );
};

export default Gallery;