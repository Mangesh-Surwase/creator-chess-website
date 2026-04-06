import React, { useState } from "react";

import videoBg from "../assets/chess-bg.mp4";
import academyImg from "../assets/academy.png";


import Navbar from "../components/Navbar";
import PopupForm from "../components/PopupForm";

const Home = () => {
  //
  const [showForm, setShowForm] = useState(false);

  const [formType, setFormType] = useState("");
  

  return (
    <div className="w-full">

  {/* 🔹 Hero Section */}
  <div className="relative w-screen h-screen mt-[70px]">
    
    <video
      autoPlay
      loop
      muted
      playsInline
      className="absolute top-0 left-0 w-screen h-full object-cover"
    >
      <source src={videoBg} type="video/mp4" />
    </video>

    {/* Overlay */}
    <div className="absolute inset-0 bg-black/70"></div>

    {/* Content */}
    <div className="relative z-10 flex items-center h-full px-6 md:px-16">
      <div className="max-w-2xl">

        <h1 className="text-white text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
          Master Your Mind ♟️ <br />
          <span className="text-green-400">Become a Chess Champion</span>
        </h1>

        <p className="text-gray-300 mb-6 text-sm md:text-lg leading-relaxed">
          At Creator Chess Academy, we train beginners to advanced players
          with expert coaching. Improve your focus, memory, and strategic
          thinking through structured chess learning.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4">

          <button 
              onClick={() => {
                setFormType("enroll");
                setShowForm(true);
              }}
            className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:scale-105 transition"
            >
              Enroll Now
            </button>


          <button 
                onClick={() => {
                  setFormType("demo");
                  setShowForm(true);
                }}
              className="bg-white hover:bg-gray-200 text-black px-6 py-3 rounded-lg font-semibold shadow-md hover:scale-105 transition"
              >
                Book Free Demo
              </button>

          <a
            href="https://wa.me/919028447116"
            target="_blank"
            rel="noreferrer"
            className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:scale-105 transition"
          >
            WhatsApp Now
          </a>

        </div>

      </div>
    </div>

  </div>

      {/* 🔥 NEW SECTION (Correct Position) */}
      <div className="bg-[#f5f0e6] py-16 px-6 md:px-16">

        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* Left */}
          {/* Left */}
<div 
  className="animate-fadeInUp"
  style={{ animationDelay: "0.2s" }}
>

  {/* 🔥 Pill Badge */}
  <div className="inline-block mb-4">
    <span className="bg-gradient-to-r from-green-500 to-green-600 text-white px-5 py-2 rounded-full text-sm md:text-base font-semibold shadow-md">
      ♟️ Trusted Chess Academy in Ravet
    </span>
  </div>

  {/* 🔥 Heading */}
  <h2 className="text-4xl md:text-6xl font-extrabold mb-5 text-gray-900 leading-tight">
    Build Strong <span className="text-green-600">Chess Foundations</span>
  </h2>

  {/* 🔥 Description */}
  <p className="text-gray-600 mb-8 text-base md:text-lg leading-relaxed max-w-xl">
    Creator Chess Academy provides expert chess coaching for kids and adults.
    Learn openings, middle game strategies, and endgame techniques to boost
    focus, memory, and strategic thinking.
  </p>

  {/* 🔥 Highlights Cards */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

    <div className="bg-white border border-gray-100 shadow-sm rounded-full px-4 py-3 flex items-center gap-2 hover:shadow-md transition">
      <span className="text-green-600 text-lg">⭐</span>
      <span className="text-sm font-semibold text-gray-700">
        5⭐ Google Rated
      </span>
    </div>

    <div className="bg-white border border-gray-100 shadow-sm rounded-full px-4 py-3 flex items-center gap-2 hover:shadow-md transition">
      <span className="text-green-600 text-lg">♟️</span>
      <span className="text-sm font-semibold text-gray-700">
        Beginner to Advanced
      </span>
    </div>

    <div className="bg-white border border-gray-100 shadow-sm rounded-full px-4 py-3 flex items-center gap-2 hover:shadow-md transition">
      <span className="text-green-600 text-lg">👨‍🏫</span>
      <span className="text-sm font-semibold text-gray-700">
        Expert Coaches
      </span>
    </div>

    <div className="bg-white border border-gray-100 shadow-sm rounded-full px-4 py-3 flex items-center gap-2 hover:shadow-md transition">
      <span className="text-green-600 text-lg">🌐</span>
      <span className="text-sm font-semibold text-gray-700">
        Online & Offline
      </span>
    </div>

  </div>

</div>

          {/* Right */}
          <div className="relative animate-fadeInRight">

            <img
              src={academyImg}
              alt="academy"
              className="rounded-2xl shadow-xl w-full object-cover"
            />

            <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-lg shadow-md text-sm font-semibold">
              ⭐ Rated 5.0 by Students
            </div>

          </div>

        </div>

      </div>

            {/* 🔹 Benefits Section */}
      <div className="bg-gray-100 py-20 px-6 md:px-16 text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4 animate-fadeInUp">
          Give Your Child the Gifts of Chess
        </h2>

        {/* Subtext */}
        <p 
          className="text-gray-600 max-w-2xl mx-auto mb-12 text-base md:text-lg animate-fadeInUp"
          style={{ animationDelay: "0.2s" }}
        >
          Chess is a powerful tool for learning. It trains the brain, improves focus,
          and builds life-long skills like patience, strategy, and confidence.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* Card 1 */}
          <div 
            className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl hover:-translate-y-2 transition duration-300 animate-fadeInUp"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-orange-100 text-orange-500 text-2xl">
              🧠
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Boosts Critical Thinking
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Students learn to plan ahead, analyze situations, and make smart
              decisions under pressure.
            </p>
          </div>

          {/* Card 2 */}
          <div 
            className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl hover:-translate-y-2 transition duration-300 animate-fadeInUp"
            style={{ animationDelay: "0.5s" }}
          >
            <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-purple-100 text-purple-500 text-2xl">
              👁️
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Improves Concentration
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Chess builds focus and patience, helping students improve their
              attention span and discipline.
            </p>
          </div>

          {/* Card 3 */}
          <div 
            className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl hover:-translate-y-2 transition duration-300 animate-fadeInUp"
            style={{ animationDelay: "0.7s" }}
          >
            <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-orange-100 text-orange-500 text-2xl">
              📈
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Builds Confidence
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Winning games and solving problems boosts confidence and encourages
              independent thinking.
            </p>
          </div>

        </div>

      </div>

      {/* 🔹 Journey Section */}
<div className="bg-white py-20 px-6 md:px-16 text-center">

  {/* Heading */}
  <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4 animate-fadeInUp">
    Your Child’s Journey Starts Here 🚀
  </h2>

  <p 
    className="text-gray-500 max-w-2xl mx-auto mb-14 text-base md:text-lg animate-fadeInUp"
    style={{ animationDelay: "0.2s" }}
  >
    Simple steps to begin your child’s chess journey and unlock their full potential.
  </p>

  {/* Steps */}
  <div className="grid md:grid-cols-3 gap-10">

    {/* Step 1 */}
    <div 
      className="relative bg-gray-50 rounded-2xl p-8 shadow-md hover:shadow-xl transition hover:-translate-y-2 animate-fadeInUp"
      style={{ animationDelay: "0.3s" }}
    >

      {/* Number Circle */}
      <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-14 h-14 flex items-center justify-center rounded-full bg-orange-500 text-white text-xl font-bold shadow-lg">
        1
      </div>

      <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-2">
        Book Free Demo
      </h3>

      <p className="text-gray-500 text-sm leading-relaxed">
        Choose a time that works for you. Your child can meet our coach and experience a trial class.
      </p>

    </div>

    {/* Step 2 */}
    <div 
      className="relative bg-gray-50 rounded-2xl p-8 shadow-md hover:shadow-xl transition hover:-translate-y-2 animate-fadeInUp"
      style={{ animationDelay: "0.5s" }}
    >

      <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-14 h-14 flex items-center justify-center rounded-full bg-green-500 text-white text-xl font-bold shadow-lg">
        2
      </div>

      <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-2">
        Get Personalized Plan
      </h3>

      <p className="text-gray-500 text-sm leading-relaxed">
        We analyze your child’s level and create a customized training plan for maximum growth.
      </p>

    </div>

    {/* Step 3 */}
    <div 
      className="relative bg-gray-50 rounded-2xl p-8 shadow-md hover:shadow-xl transition hover:-translate-y-2 animate-fadeInUp"
      style={{ animationDelay: "0.7s" }}
    >

      <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-14 h-14 flex items-center justify-center rounded-full bg-purple-500 text-white text-xl font-bold shadow-lg">
        3
      </div>

      <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-2">
        Learn, Play & Grow ♟️
      </h3>

      <p className="text-gray-500 text-sm leading-relaxed">
        Watch your child gain confidence, improve skills, and enjoy learning through chess.
      </p>

    </div>

  </div>

</div>

      {/* 🔹 Testimonials Section */}
<div className="bg-gradient-to-br from-gray-100 to-gray-200 py-20 px-6 md:px-16 overflow-hidden">

  {/* Heading */}
  <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-800 mb-4 animate-fadeInUp">
    What Parents Are Saying 💬
  </h2>

  <p className="text-center text-gray-600 mb-12 animate-fadeInUp">
    Real feedback from students and parents at Creator Chess Academy
  </p>

  {/* Scroll Container */}
  <div className="flex gap-6 overflow-x-auto scroll-smooth pb-4">

    {/* Card */}
    {[
      {
        name: "Suraj Shirkande",
        text: "Very well-structured chess class. Coach explains openings, tactics, and endgames in a simple way. Puzzles and game analysis help improve thinking.",
      },
      {
        name: "Jyoti Kothimbire",
        text: "Excellent teaching system. Weekly tournaments and game discussions are very helpful. Best Marathi chess class 👌",
      },
      {
        name: "Yogita Shinde",
        text: "Teaching in Marathi helped a lot for children. Very beneficial and easy to understand.",
      },
      {
        name: "Amaan Shaikh",
        text: "Pravin Sir explains with clarity and patience. Great dedication and support for students.",
      },
      {
        name: "Seema Timewar",
        text: "Very useful classes. Kids learned basics, tactics, and ideas. Marathi teaching makes it easier to understand.",
      },
    ].map((review, index) => (
      
      <div
        key={index}
        className="min-w-[300px] md:min-w-[350px] bg-white rounded-2xl shadow-md p-6 hover:shadow-xl hover:-translate-y-2 transition duration-300 animate-fadeInUp"
        style={{ animationDelay: `${index * 0.2}s` }}
      >

        {/* Profile */}
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 flex items-center justify-center bg-green-500 text-white rounded-full font-bold">
            {review.name.charAt(0)}
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 text-sm">
              {review.name}
            </h4>
            <p className="text-xs text-gray-400">Google Review</p>
          </div>
        </div>

        {/* Stars */}
        <div className="text-yellow-400 mb-2">⭐⭐⭐⭐⭐</div>

        {/* Text */}
        <p className="text-gray-600 text-sm leading-relaxed">
          {review.text}
        </p>

      </div>

    ))}

  </div>

</div>
    <Navbar />

{showForm && (
  <PopupForm 
    close={() => setShowForm(false)} 
    type={formType}
  />
)}    

       </div>
  );
};

export default Home;
