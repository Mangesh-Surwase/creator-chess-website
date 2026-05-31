import React, { useState } from "react";

import videoBg from "../assets/chess-bg.mp4";
import academyImg from "../assets/academy.png";

import Navbar from "../components/Navbar";
import PopupForm from "../components/PopupForm";

const Home = () => {
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
        <div className="absolute inset-0 bg-black/75"></div>

        {/* Content */}
        <div className="relative z-10 flex items-center h-full px-6 md:px-16">
          <div className="max-w-2xl">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-sm text-white px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              Trusted Chess Academy in Ravet, Pune
            </div>

            <h1 className="text-white text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
              Master Your Mind ♟️ <br />
              <span className="text-green-400">Become a Chess Champion</span>
            </h1>

            <p className="text-gray-300 mb-8 text-sm md:text-lg leading-relaxed">
              At Creator Chess Academy, we train beginners to advanced players
              with expert coaching. Improve your focus, memory, and strategic
              thinking through structured chess learning.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3">

              <button
                onClick={() => {
                  setFormType("enroll");
                  setShowForm(true);
                }}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition-all duration-200 flex items-center gap-2"
              >
                <span>🎓</span> Enroll Now
              </button>

              <button
                onClick={() => {
                  setFormType("demo");
                  setShowForm(true);
                }}
                className="bg-white/10 hover:bg-white/20 border border-white/30 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition-all duration-200 flex items-center gap-2 backdrop-blur-sm"
              >
                <span>📅</span> Book Free Demo
              </button>

              {/* ✅ Student Login Button */}
              <a
                href="https://learn.creatorchessacademy.com/login"
                target="_blank"
                rel="noreferrer"
                className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition-all duration-200 flex items-center gap-2"
              >
                <span>🔐</span> Student Login
              </a>

              <a
                href="https://wa.me/919028447116"
                target="_blank"
                rel="noreferrer"
                className="bg-[#25D366] hover:bg-[#1ebe5d] text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition-all duration-200 flex items-center gap-2"
              >
                <span>💬</span> WhatsApp Now
              </a>

            </div>

            {/* Trust Bar */}
            <div className="flex flex-wrap gap-6 mt-10">
              <div className="flex items-center gap-2 text-gray-300 text-sm">
                <span className="text-yellow-400 text-base">⭐⭐⭐⭐⭐</span>
                <span>5.0 Google Rated</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300 text-sm">
                <span>👨‍🎓</span>
                <span>500+ Students Trained</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300 text-sm">
                <span>🏆</span>
                <span>Tournament Winners</span>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* 🔥 About Section */}
      <div className="bg-[#f5f0e6] py-20 px-6 md:px-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left */}
          <div className="animate-fadeInUp" style={{ animationDelay: "0.2s" }}>

            <div className="inline-block mb-5">
              <span className="bg-green-600 text-white px-5 py-2 rounded-full text-sm font-semibold shadow-md">
                ♟️ Trusted Chess Academy in Ravet
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-extrabold mb-5 text-gray-900 leading-tight">
              Build Strong <span className="text-green-600">Chess Foundations</span>
            </h2>

            <p className="text-gray-600 mb-8 text-base md:text-lg leading-relaxed max-w-xl">
              Creator Chess Academy provides expert chess coaching for kids and adults.
              Learn openings, middle game strategies, and endgame techniques to boost
              focus, memory, and strategic thinking.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { icon: "⭐", text: "5★ Google Rated" },
                { icon: "♟️", text: "Beginner to Advanced" },
                { icon: "👨‍🏫", text: "Expert Coaches" },
                { icon: "🌐", text: "Online & Offline" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white border border-gray-100 shadow-sm rounded-xl px-4 py-3 flex items-center gap-3 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                >
                  <span className="text-xl">{item.icon}</span>
                  <span className="text-sm font-semibold text-gray-700">{item.text}</span>
                </div>
              ))}
            </div>

          </div>

          {/* Right */}
          <div className="relative animate-fadeInRight">
            <div className="rounded-2xl overflow-hidden shadow-2xl ring-4 ring-green-100">
              <img
                src={academyImg}
                alt="Creator Chess Academy"
                className="w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white px-5 py-3 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-2">
              <span className="text-yellow-400">⭐</span>
              <div>
                <p className="text-sm font-bold text-gray-800">Rated 5.0</p>
                <p className="text-xs text-gray-500">by Students & Parents</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* 🔹 Benefits Section */}
      <div className="bg-gray-50 py-20 px-6 md:px-16 text-center">

        <div className="inline-block bg-green-100 text-green-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
          Why Chess?
        </div>

        <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4 animate-fadeInUp">
          Give Your Child the Gifts of Chess
        </h2>

        <p className="text-gray-500 max-w-2xl mx-auto mb-14 text-base md:text-lg animate-fadeInUp" style={{ animationDelay: "0.2s" }}>
          Chess is a powerful tool for learning. It trains the brain, improves focus,
          and builds life-long skills like patience, strategy, and confidence.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: "🧠",
              bg: "bg-orange-50",
              iconBg: "bg-orange-100",
              iconColor: "text-orange-500",
              border: "border-orange-100",
              title: "Boosts Critical Thinking",
              desc: "Students learn to plan ahead, analyze situations, and make smart decisions under pressure.",
            },
            {
              icon: "👁️",
              bg: "bg-purple-50",
              iconBg: "bg-purple-100",
              iconColor: "text-purple-500",
              border: "border-purple-100",
              title: "Improves Concentration",
              desc: "Chess builds focus and patience, helping students improve their attention span and discipline.",
            },
            {
              icon: "📈",
              bg: "bg-green-50",
              iconBg: "bg-green-100",
              iconColor: "text-green-500",
              border: "border-green-100",
              title: "Builds Confidence",
              desc: "Winning games and solving problems boosts confidence and encourages independent thinking.",
            },
          ].map((card, i) => (
            <div
              key={i}
              className={`${card.bg} border ${card.border} rounded-2xl p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 animate-fadeInUp text-left`}
              style={{ animationDelay: `${0.3 + i * 0.2}s` }}
            >
              <div className={`w-14 h-14 mb-5 flex items-center justify-center rounded-2xl ${card.iconBg} ${card.iconColor} text-2xl`}>
                {card.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{card.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>

      </div>

      {/* 🔹 Journey Section */}
      <div className="bg-white py-20 px-6 md:px-16 text-center">

        <div className="inline-block bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
          Getting Started
        </div>

        <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4 animate-fadeInUp">
          Your Child's Journey Starts Here 🚀
        </h2>

        <p className="text-gray-500 max-w-2xl mx-auto mb-16 text-base md:text-lg animate-fadeInUp" style={{ animationDelay: "0.2s" }}>
          Simple steps to begin your child's chess journey and unlock their full potential.
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              step: "1",
              bg: "bg-orange-500",
              ring: "ring-orange-100",
              title: "Book Free Demo",
              desc: "Choose a time that works for you. Your child can meet our coach and experience a trial class.",
            },
            {
              step: "2",
              bg: "bg-green-500",
              ring: "ring-green-100",
              title: "Get Personalized Plan",
              desc: "We analyze your child's level and create a customized training plan for maximum growth.",
            },
            {
              step: "3",
              bg: "bg-purple-500",
              ring: "ring-purple-100",
              title: "Learn, Play & Grow ♟️",
              desc: "Watch your child gain confidence, improve skills, and enjoy learning through chess.",
            },
          ].map((step, i) => (
            <div
              key={i}
              className={`relative bg-gray-50 border border-gray-100 rounded-2xl p-8 pt-12 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 animate-fadeInUp ring-4 ${step.ring}`}
              style={{ animationDelay: `${0.3 + i * 0.2}s` }}
            >
              <div className={`absolute -top-6 left-1/2 -translate-x-1/2 w-14 h-14 flex items-center justify-center rounded-full ${step.bg} text-white text-xl font-bold shadow-lg ring-4 ${step.ring}`}>
                {step.step}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

      </div>

      {/* 🔹 Testimonials Section */}
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 py-20 px-6 md:px-16 overflow-hidden">

        <div className="text-center mb-12">
          <div className="inline-block bg-white/10 text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-4 backdrop-blur-sm border border-white/20">
            ⭐ Google Reviews
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-3 animate-fadeInUp">
            What Parents Are Saying 💬
          </h2>
          <p className="text-gray-400 animate-fadeInUp">
            Real feedback from students and parents at Creator Chess Academy
          </p>
        </div>

        <div className="flex gap-6 overflow-x-auto scroll-smooth pb-4 scrollbar-hide">
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
              className="min-w-[300px] md:min-w-[340px] bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/15 hover:-translate-y-2 transition-all duration-300 animate-fadeInUp"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 flex items-center justify-center bg-green-500 text-white rounded-full font-bold text-base shadow-md">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold text-white text-sm">{review.name}</h4>
                  <p className="text-xs text-gray-400">Google Review</p>
                </div>
              </div>
              <div className="text-yellow-400 mb-3 text-base">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-300 text-sm leading-relaxed">{review.text}</p>
            </div>
          ))}
        </div>

      </div>

      {/* 🔹 CTA Section */}
      <div className="bg-green-700 py-16 px-6 md:px-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Start Your Chess Journey? ♟️
        </h2>
        <p className="text-green-100 mb-8 text-base md:text-lg max-w-xl mx-auto">
          Join hundreds of students already learning at Creator Chess Academy. Book a free demo today!
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={() => {
              setFormType("demo");
              setShowForm(true);
            }}
            className="bg-white text-green-700 px-8 py-3 rounded-xl font-bold shadow-lg hover:scale-105 hover:bg-gray-100 transition-all duration-200"
          >
            📅 Book Free Demo
          </button>
          <a
            href="https://wa.me/919028447116"
            target="_blank"
            rel="noreferrer"
            className="bg-green-600 border-2 border-white/30 text-white px-8 py-3 rounded-xl font-bold shadow-lg hover:scale-105 hover:bg-green-500 transition-all duration-200"
          >
            💬 WhatsApp Us
          </a>
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