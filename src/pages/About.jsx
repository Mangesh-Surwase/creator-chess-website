import React from "react";
import academyImg from "../assets/academy.png"; 
import academycImg from "../assets/who-we-r.png"; 
import bgImage from "../assets/bgimg.png"; 

const About = () => {
  return (
    <div className="w-full pt-[80px]">

      {/* 🔥 ABOUT HERO SECTION */}
      <div className="bg-gradient-to-br from-[#1f2937] via-[#111827] to-black py-20 px-6 md:px-16">

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

          {/* 🔹 LEFT CONTENT */}
          <div className="text-center md:text-left animate-fadeInUp">

            {/* Tag */}
            <span className="bg-green-500/10 text-green-400 px-4 py-1 rounded-full text-sm font-semibold">
              Our Mission ♟️
            </span>

            {/* Heading */}
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mt-4 leading-tight">
              We Build Minds with Chess{" "}
              <span className="text-green-400">♕</span>
            </h1>

            {/* Sub text */}
            <p className="text-gray-300 mt-6 text-sm md:text-lg leading-relaxed max-w-xl">
              At <span className="text-green-400 font-semibold">Creator Chess Academy</span>, 
              we use chess as a powerful tool to develop focus, confidence, 
              and smart decision-making in students.
            </p>

            {/* Extra line */}
            <p className="text-gray-400 mt-4 text-sm md:text-base">
              From beginners to advanced players, we guide every student 
              step-by-step towards mastery and tournament success.
            </p>

            {/* Highlights */}
            <div className="mt-6 flex flex-wrap gap-3 justify-center md:justify-start">

              <span className="bg-white/10 text-white px-4 py-2 rounded-full text-sm">
                🧠 Improve IQ
              </span>

              <span className="bg-white/10 text-white px-4 py-2 rounded-full text-sm">
                🎯 Focus & Strategy
              </span>

              <span className="bg-white/10 text-white px-4 py-2 rounded-full text-sm">
                🏆 Tournament Ready
              </span>

            </div>

          </div>

          {/* 🔹 RIGHT IMAGE */}
          <div className="relative animate-fadeInRight">

            <img
              src={academycImg}
              alt="academy"
              className="rounded-2xl shadow-2xl w-full object-cover hover:scale-105 transition duration-500"
            />

            {/* Floating badge */}
            <div className="absolute bottom-4 left-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-md text-sm font-semibold">
              ⭐ 5.0 Rated Academy
            </div>

          </div>

        </div>

      </div>


      {/* 🔥 WHO WE ARE SECTION */}
<div className="bg-white py-20 px-6 md:px-16">

  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

    {/* 🔹 LEFT IMAGE (Creative Layout) */}
    <div className="relative animate-fadeInRight">

      {/* Main Image */}
      <img
        src={academyImg}
        alt="students playing chess"
        className="rounded-2xl shadow-xl w-full object-cover"
      />

      {/* Floating small box */}
      <div className="absolute -bottom-6 -left-6 bg-green-500 text-white px-6 py-4 rounded-xl shadow-lg">
        <p className="text-lg font-bold">2000+</p>
        <p className="text-sm">Students Trained</p>
      </div>

    </div>

    {/* 🔹 RIGHT CONTENT */}
    <div className="animate-fadeInUp">

      {/* Tag */}
      <span className="bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-semibold">
        Who We Are ♟️
      </span>

      {/* Heading */}
      <h2 className="text-3xl md:text-5xl font-extrabold mt-4 mb-6 text-gray-900 leading-tight">
        Building Smart Thinkers <br />
        Through Chess <span className="text-green-600">♕</span>
      </h2>

      {/* Description */}
      <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
        Creator Chess Academy is one of the fastest-growing chess academies in 
        Pune, helping kids and adults master the game from beginner to advanced level.
      </p>

      <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-6">
        We focus on practical learning — including openings, middle game strategies, 
        and endgame techniques — along with real match analysis and tournaments.
      </p>

      {/* Highlights Grid */}
      <div className="grid grid-cols-2 gap-4">

        <div className="bg-gray-100 p-4 rounded-xl hover:shadow-md transition">
          <h4 className="font-semibold text-gray-800">🎯 Structured Learning</h4>
          <p className="text-xs text-gray-500 mt-1">Step-by-step improvement</p>
        </div>

        <div className="bg-gray-100 p-4 rounded-xl hover:shadow-md transition">
          <h4 className="font-semibold text-gray-800">🧠 Practical Training</h4>
          <p className="text-xs text-gray-500 mt-1">Real game analysis</p>
        </div>

        <div className="bg-gray-100 p-4 rounded-xl hover:shadow-md transition">
          <h4 className="font-semibold text-gray-800">🌍 Multi-language</h4>
          <p className="text-xs text-gray-500 mt-1">Marathi, Hindi, English</p>
        </div>

        <div className="bg-gray-100 p-4 rounded-xl hover:shadow-md transition">
          <h4 className="font-semibold text-gray-800">🏆 Tournament Focus</h4>
          <p className="text-xs text-gray-500 mt-1">Competitive preparation</p>
        </div>

      </div>

    </div>

  </div>

</div>


      {/* 🔥 TEACHING PHILOSOPHY */}
<div className="bg-gradient-to-b from-white to-gray-50 py-20 px-6 md:px-16">

  <div className="max-w-7xl mx-auto text-center">

    {/* Heading */}
    <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 animate-fadeInUp">
      Our Teaching Philosophy ♟️
    </h2>

    <p className="text-gray-500 text-sm md:text-lg mb-12 animate-fadeInUp">
      It's not just about winning — it's about building a powerful way of thinking.
    </p>

    {/* Cards */}
    <div className="grid md:grid-cols-3 gap-8">

      {/* Card 1 */}
      <div className="group bg-white/70 backdrop-blur-lg p-8 rounded-2xl shadow-md hover:shadow-2xl transition duration-500 hover:-translate-y-3 border border-gray-100 animate-fadeInUp">

        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-green-100 text-green-600 text-2xl mx-auto mb-5 group-hover:scale-110 transition">
          🎯
        </div>

        <h3 className="text-xl font-bold text-gray-800 mb-3">
          Fun & Engagement First
        </h3>

        <p className="text-gray-500 text-sm leading-relaxed">
          We use puzzles, storytelling, and interactive methods to make learning enjoyable.
          When students enjoy the process, they learn faster and retain more.
        </p>

      </div>

      {/* Card 2 */}
      <div className="group bg-white/70 backdrop-blur-lg p-8 rounded-2xl shadow-md hover:shadow-2xl transition duration-500 hover:-translate-y-3 border border-gray-100 animate-fadeInUp delay-150">

        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-green-100 text-green-600 text-2xl mx-auto mb-5 group-hover:scale-110 transition">
          🧠
        </div>

        <h3 className="text-xl font-bold text-gray-800 mb-3">
          Personalized Learning
        </h3>

        <p className="text-gray-500 text-sm leading-relaxed">
          Every student is different. We customize training based on level, pace,
          and thinking style to maximize improvement.
        </p>

      </div>

      {/* Card 3 */}
      <div className="group bg-white/70 backdrop-blur-lg p-8 rounded-2xl shadow-md hover:shadow-2xl transition duration-500 hover:-translate-y-3 border border-gray-100 animate-fadeInUp delay-300">

        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-green-100 text-green-600 text-2xl mx-auto mb-5 group-hover:scale-110 transition">
          🏆
        </div>

        <h3 className="text-xl font-bold text-gray-800 mb-3">
          Skills Beyond Chess
        </h3>

        <p className="text-gray-500 text-sm leading-relaxed">
          Chess teaches life skills like decision-making, patience, and focus —
          helping students succeed both on and off the board.
        </p>

      </div>

    </div>

  </div>

</div>

      {/* 🔥 VISION & MISSION – PREMIUM SECTION */}
<div className="relative w-full py-28 px-6 md:px-16 overflow-hidden">

  {/* 🔹 Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center scale-110"
    style={{ backgroundImage: `url(${bgImage})` }}
  ></div>

  {/* 🔹 Dark Overlay (IMPORTANT FIX) */}
  <div className="absolute inset-0 bg-black/60"></div>

  {/* 🔹 Gradient Glow */}
  <div className="absolute inset-0 bg-gradient-to-r from-green-900/40 via-transparent to-green-900/40"></div>

  {/* 🔹 Content */}
  <div className="relative z-10 max-w-6xl mx-auto">

    {/* 🔥 Heading */}
    <div className="text-center mb-16 animate-fadeInUp">
      <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
        ♟️ Our Vision & Mission
      </h2>
      <p className="text-gray-300 max-w-2xl mx-auto">
        We are building future thinkers through the power of chess.
      </p>
    </div>

    {/* 🔹 Cards */}
    <div className="grid md:grid-cols-2 gap-10">

      {/* 🔹 Vision */}
      <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl hover:scale-105 transition duration-500 animate-fadeInUp">

        <h3 className="text-2xl md:text-3xl font-bold text-green-400 mb-4">
          🎯 Our Vision
        </h3>

        <p className="text-gray-200 leading-relaxed text-base md:text-lg">
          To make chess a powerful learning tool for every child, helping them
          build focus, creativity, and strong decision-making skills that last a lifetime.
        </p>

        <div className="mt-6 w-20 h-[3px] bg-green-400 rounded-full"></div>

      </div>

      {/* 🔹 Mission */}
      <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl hover:scale-105 transition duration-500 animate-fadeInRight">

        <h3 className="text-2xl md:text-3xl font-bold text-green-400 mb-4">
          🚀 Our Mission
        </h3>

        <p className="text-gray-200 leading-relaxed text-base md:text-lg">
          To provide structured chess training through expert coaching, real-game
          analysis, and tournaments — helping students grow from beginners to confident players.
        </p>

        <div className="mt-6 w-20 h-[3px] bg-green-400 rounded-full"></div>

      </div>

    </div>

    {/* 🔥 Bottom Line */}
    <div className="text-center mt-20 animate-fadeInUp">
      <h3 className="text-2xl md:text-4xl font-bold text-white">
        🧠 Building Thinkers. ♟️ Creating Champions.
      </h3>
    </div>

  </div>

</div>

    </div>
  );
};

export default About;