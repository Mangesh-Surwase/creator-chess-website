import React, { useRef, useState } from "react";
import PopupForm from "../components/PopupForm";
import ach1 from "../assets/achievement1.png";
import ach2 from "../assets/achievement2.png";
import ach3 from "../assets/achievement3.png";
import ach4 from "../assets/ach4.jpg";
import ach5 from "../assets/ach5.jpg";
import ach6 from "../assets/ach6.jpg";
import cr1 from "../assets/cr1.jpg";
import cr2 from "../assets/cr2.jpg";
import cr3 from "../assets/cr3.jpg";
import cr4 from "../assets/cr4.jpg";
import cr5 from "../assets/cr5.jpg";

const achievements = [
  {
    id: 1,
    image: ach1,
    medal: "🥉",
    medalLabel: "3rd Place",
    medalColor: "#b45309",
    medalBg: "#fef3c7",
    title: "Proud Moment for Creator Chess Academy",
    student: "Anvay Sapale",
    description:
      "Secured 3rd Place in the Under-9 category at Golden Square Chess Tournament, Belgaum — a brilliant achievement showing exceptional talent and dedication.",
    stats: [
      { label: "Rounds", value: "9" },
      { label: "Points", value: "5.5" },
      { label: "Performance Rating", value: "1548" },
    ],
    tag: "👏 Congratulations Champion!",
    tagColor: "#166534",
    tagBg: "#dcfce7",
  },
  {
    id: 2,
    image: ach2,
    medal: "🥇",
    medalLabel: "Gold Medal",
    medalColor: "#92400e",
    medalBg: "#fef3c7",
    title: "Gold Medal Winner",
    student: "Ved Bare",
    description:
      "Won Gold Medal at Holy Cross School Chess Competition (2025–2026) — a testament to discipline, consistent practice, and sharp strategic thinking.",
    stats: [
      { label: "Event", value: "School Championship" },
      { label: "Year", value: "2025–26" },
      { label: "Result", value: "1st Place" },
    ],
    tag: "🚀 Keep Winning!",
    tagColor: "#166534",
    tagBg: "#dcfce7",
  },
  {
    id: 3,
    image: ach3,
    medal: "🥉",
    medalLabel: "3rd Place",
    medalColor: "#b45309",
    medalBg: "#fef3c7",
    title: "Proud Moment | Creator Chess Academy",
    student: "Ved Ambedkar",
    description:
      "Secured 3rd Place in the U8 Rapid category at Chessland Jungle Stories Festival on 26 Jan 2026 — excellent performance at a very young age, with more success ahead!",
    stats: [
      { label: "Category", value: "U8 Rapid" },
      { label: "Score", value: "4/5" },
      { label: "Performance", value: "1640" },
    ],
    tag: "👏 Excellent at a young age!",
    tagColor: "#166534",
    tagBg: "#dcfce7",
  },
  {
    id: 4,
    image: ach4,
    medal: "🥇",
    medalLabel: "1st Place",
    medalColor: "#92400e",
    medalBg: "#fef3c7",
    title: "Proud Moment | Creator Chess Academy",
    student: "Ananya",
    description:
      "अनन्याने राणिमाता जिजाऊ चषक बुद्धिबळ स्पर्धेत प्रथम क्रमांक मिळवला! लहान वयात ही चमकदार कामगिरी तिच्या मेहनत, सातत्य, योग्य प्रशिक्षण आणि पालकांच्या पाठिंब्याचा परिणाम आहे.",
    stats: [
      { label: "Result", value: "1st" },
      { label: "Tournament", value: "जिजाऊ चषक" },
      { label: "Academy", value: "Creator" },
    ],
    tag: "💐 मनःपूर्वक अभिनंदन!",
    tagColor: "#166534",
    tagBg: "#dcfce7",
  },
  {
    id: 5,
    image: ach5,
    medal: "🏆",
    medalLabel: "7th Rank",
    medalColor: "#1e40af",
    medalBg: "#dbeafe",
    title: "Proud Moment | Creator Chess Academy",
    student: "Sariska Bavale",
    description:
      "सारिस्काने जय भवानी गड विकास प्रतिष्ठान आयोजित State Level Chess Competition मध्ये Open Category मधून 7th Rank Trophy जिंकली! Online class student असूनही ही कामगिरी सातत्यपूर्ण सराव, मेहनत आणि योग्य मार्गदर्शनाचे उत्तम उदाहरण आहे.",
    stats: [
      { label: "Rank", value: "7th" },
      { label: "Category", value: "Open" },
      { label: "Level", value: "State" },
    ],
    tag: "💐 शुभेच्छा सारिस्का!",
    tagColor: "#1e40af",
    tagBg: "#dbeafe",
  },
  {
    id: 6,
    image: ach6,
    medal: "🥉",
    medalLabel: "4th Rank",
    medalColor: "#b45309",
    medalBg: "#fef3c7",
    title: "Proud Moment | Creator Chess Academy",
    student: "Anup Kanade",
    description:
      "अनुपने Ken Chess Champion 2025 – U-09 Open Rapid Chess Tournament मध्ये 4th Rank मिळवला! (Lions Club of Ichalkaranji, 21 Dec 2025) Online class student असूनही ही कामगिरी त्याच्या मेहनत आणि सातत्यपूर्ण सरावाचे उत्तम उदाहरण आहे.",
    stats: [
      { label: "Rank", value: "4th" },
      { label: "Score", value: "6.5/8" },
      { label: "Category", value: "U-09 Rapid" },
    ],
    tag: "👏 मनःपूर्वक अभिनंदन अनुप!",
    tagColor: "#b45309",
    tagBg: "#fef3c7",
  },
];

const Gallery = () => {
  const sliderRef = useRef(null);
  const [showPopup, setShowPopup] = useState(false);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -sliderRef.current.offsetWidth, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: sliderRef.current.offsetWidth, behavior: "smooth" });
  };

  return (
    <div className="w-full pt-[110px] bg-gray-50 min-h-screen">

      {/* ═══════════════════════════════════════
          HERO SECTION — No image, clean design
      ═══════════════════════════════════════ */}
      <div className="w-full py-20 md:py-28 flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="relative flex flex-col items-center text-center px-6">

          {/* Rounded background blob behind text */}
          <div
            className="absolute inset-0 rounded-[3rem] md:rounded-[4rem] blur-sm"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(22,163,74,0.18) 0%, rgba(22,163,74,0.06) 60%, transparent 100%)",
            }}
          />

          {/* Chess icon circle */}
          <div
            className="relative z-10 w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center mb-6 border-2 border-green-500/40"
            style={{ background: "rgba(22,163,74,0.12)" }}
          >
            <span className="text-4xl md:text-5xl select-none">♟️</span>
          </div>

          {/* Pill badge */}
          <div className="relative z-10 mb-4">
            <span
              className="text-xs md:text-sm font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full"
              style={{
                background: "rgba(22,163,74,0.15)",
                color: "#4ade80",
                border: "1px solid rgba(74,222,128,0.3)",
              }}
            >
              Creator Chess Academy
            </span>
          </div>

          {/* Main heading */}
          <h1 className="relative z-10 text-white text-4xl md:text-6xl lg:text-7xl font-extrabold mb-5 leading-tight tracking-tight">
            Our{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #4ade80 0%, #22c55e 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Gallery
            </span>
          </h1>

          <p className="relative z-10 text-gray-400 text-sm md:text-lg max-w-xl mx-auto leading-relaxed mb-8">
            Real moments from Creator Chess Academy — where students learn,
            compete, and grow every single day.
          </p>

          {/* Highlight pills */}
          <div className="relative z-10 flex flex-wrap justify-center gap-3">
            {[
              { icon: "🧠", text: "Smart Learning" },
              { icon: "🏆", text: "Tournament Moments" },
              { icon: "📸", text: "Real Class Sessions" },
            ].map((item) => (
              <span
                key={item.text}
                className="px-4 py-2 rounded-full text-sm font-medium text-gray-300 transition"
                style={{
                  background: "rgba(255,255,255,0.07)",
                  border: "1px solid rgba(255,255,255,0.12)",
                }}
              >
                {item.icon} {item.text}
              </span>
            ))}
          </div>

        </div>
      </div>

      {/* ═══════════════════════════════════════
          WALL OF FAME — Achievement Slider
      ═══════════════════════════════════════ */}
      <div className="w-full py-20 px-4 md:px-12 bg-gray-50">

        {/* Section header */}
        <div className="text-center mb-14">
          <span
            className="inline-block text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4"
            style={{ background: "#dcfce7", color: "#166534" }}
          >
            Hall of Champions
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900">
            Wall of{" "}
            <span className="text-green-600">Fame</span> 🏆
          </h2>
          <p className="text-gray-500 mt-3 text-base md:text-lg">
            Celebrating the achievements of our rising chess champions ♟️
          </p>
        </div>

        {/* Slider wrapper */}
        <div className="relative max-w-5xl mx-auto">

          {/* Nav buttons */}
          <button
            onClick={scrollLeft}
            aria-label="Previous"
            className="absolute -left-3 md:-left-6 top-1/2 -translate-y-1/2 z-20
              w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center
              bg-white border border-gray-200 shadow-lg
              hover:bg-green-500 hover:border-green-500 hover:text-white
              text-gray-700 transition-all duration-200 text-xl font-bold"
          >
            ‹
          </button>

          <button
            onClick={scrollRight}
            aria-label="Next"
            className="absolute -right-3 md:-right-6 top-1/2 -translate-y-1/2 z-20
              w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center
              bg-white border border-gray-200 shadow-lg
              hover:bg-green-500 hover:border-green-500 hover:text-white
              text-gray-700 transition-all duration-200 text-xl font-bold"
          >
            ›
          </button>

          {/* Slides */}
          <div
            ref={sliderRef}
            className="flex overflow-x-hidden scroll-smooth"
          >
            {achievements.map((ach) => (
              <div
                key={ach.id}
                className="w-full flex-shrink-0 bg-white rounded-3xl overflow-hidden"
                style={{
                  boxShadow:
                    "0 4px 6px -1px rgba(0,0,0,0.07), 0 2px 4px -2px rgba(0,0,0,0.04), 0 0 0 1px rgba(0,0,0,0.05)",
                }}
              >
                <div className="flex flex-col md:flex-row">

                  {/* ── Image panel ── */}
                  <div className="md:w-5/12 relative overflow-hidden bg-gray-100 min-h-[260px] md:min-h-[400px]">
                    <img
                      src={ach.image}
                      alt={ach.student}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                    {/* Gradient overlay bottom */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-black/10" />

                    {/* Medal badge on image */}
                    <div className="absolute top-4 left-4">
                      <span
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold shadow-md"
                        style={{
                          background: ach.medalBg,
                          color: ach.medalColor,
                          border: `1px solid ${ach.medalColor}33`,
                        }}
                      >
                        {ach.medal} {ach.medalLabel}
                      </span>
                    </div>

                    {/* Student name overlay bottom-left on mobile */}
                    <div className="absolute bottom-4 left-4 md:hidden">
                      <p className="text-white font-bold text-xl drop-shadow">{ach.student}</p>
                    </div>
                  </div>

                  {/* ── Content panel ── */}
                  <div className="md:w-7/12 p-7 md:p-10 flex flex-col justify-center gap-5">

                    {/* Student name — desktop only */}
                    <div className="hidden md:flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm text-white"
                        style={{ background: "linear-gradient(135deg, #16a34a, #15803d)" }}
                      >
                        {ach.student.charAt(0)}
                      </div>
                      <div>
                        <p className="font-bold text-gray-900 text-base leading-tight">{ach.student}</p>
                        <p className="text-xs text-gray-500">Creator Chess Academy</p>
                      </div>
                    </div>

                    {/* Divider */}
                    <div className="hidden md:block h-px bg-gray-100" />

                    {/* Title */}
                    <div>
                      <h3 className="text-xl md:text-2xl font-extrabold text-gray-900 leading-snug mb-2">
                        {ach.title}
                      </h3>
                      <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                        {ach.description}
                      </p>
                    </div>

                    {/* Stats row */}
                    <div className="grid grid-cols-3 gap-3">
                      {ach.stats.map((stat) => (
                        <div
                          key={stat.label}
                          className="rounded-xl p-3 text-center"
                          style={{ background: "#f8fffe", border: "1px solid #dcfce7" }}
                        >
                          <p className="text-lg md:text-xl font-extrabold text-green-700 leading-tight">
                            {stat.value}
                          </p>
                          <p className="text-xs text-gray-500 mt-0.5 leading-tight">{stat.label}</p>
                        </div>
                      ))}
                    </div>

                    {/* Congrats tag */}
                    <div>
                      <span
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold"
                        style={{
                          background: ach.tagBg,
                          color: ach.tagColor,
                        }}
                      >
                        {ach.tag}
                      </span>
                    </div>

                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {achievements.map((ach, i) => (
              <button
                key={ach.id}
                onClick={() => {
                  sliderRef.current.scrollTo({
                    left: i * sliderRef.current.offsetWidth,
                    behavior: "smooth",
                  });
                }}
                className="w-2 h-2 rounded-full transition-all duration-300"
                style={{ background: i === 0 ? "#16a34a" : "#d1d5db" }}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

        </div>
      </div>

      {/* ═══════════════════════════════════════
          INSIDE THE ACADEMY SECTION
      ═══════════════════════════════════════ */}
      <div className="w-full py-20 px-4 md:px-12 bg-white">

        {/* Section header */}
        <div className="text-center mb-14">
          <span
            className="inline-block text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4"
            style={{ background: "#f0fdf4", color: "#166534" }}
          >
            Behind the Board
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900">
            Inside the{" "}
            <span className="text-green-600">Academy</span> ♟️
          </h2>
          <p className="text-gray-500 mt-3 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            A glimpse into where champions are made — real classrooms, focused minds,
            and a coach dedicated to every student's growth.
          </p>
        </div>

        {/* Bento-style photo grid */}
        <div className="max-w-6xl mx-auto">

          {/* Row 1 — large left + 2 stacked right */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">

            {/* Large feature image */}
            <div
              className="md:col-span-2 relative overflow-hidden rounded-3xl group"
              style={{ minHeight: "320px" }}
            >
              <img
                src={cr1}
                alt="Chess class in session"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <span
                  className="inline-block text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-2"
                  style={{ background: "rgba(22,163,74,0.85)", color: "#fff" }}
                >
                  Live Class
                </span>
                <p className="text-white font-bold text-lg leading-snug drop-shadow">
                  Every session is a step closer to mastery
                </p>
              </div>
            </div>

            {/* Two stacked smaller images */}
            <div className="flex flex-col gap-4">
              <div
                className="relative overflow-hidden rounded-3xl group flex-1"
                style={{ minHeight: "150px" }}
              >
                <img
                  src={cr2}
                  alt="Students concentrating"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <p className="text-white text-sm font-semibold drop-shadow">Deep Focus 🧠</p>
                </div>
              </div>
              <div
                className="relative overflow-hidden rounded-3xl group flex-1"
                style={{ minHeight: "150px" }}
              >
                <img
                  src={cr3}
                  alt="Coach guiding students"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <p className="text-white text-sm font-semibold drop-shadow">Expert Guidance ♟️</p>
                </div>
              </div>
            </div>

          </div>

          {/* Row 2 — 3 equal images */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { src: cr4, label: "Strategy in Action", sub: "Every move matters" },
              { src: cr5, label: "Learning Together", sub: "Peer-to-peer growth" },
            ].map((item) => (
              <div
                key={item.label}
                className="relative overflow-hidden rounded-3xl group"
                style={{ minHeight: "220px" }}
              >
                <img
                  src={item.src}
                  alt={item.label}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-bold text-sm leading-tight drop-shadow">{item.label}</p>
                  <p className="text-gray-300 text-xs mt-0.5 drop-shadow">{item.sub}</p>
                </div>
              </div>
            ))}

            {/* CTA Card */}
            <div
              className="rounded-3xl flex flex-col items-center justify-center text-center p-8 gap-4"
              style={{
                background: "linear-gradient(135deg, #14532d 0%, #166534 60%, #15803d 100%)",
                minHeight: "220px",
              }}
            >
              <span className="text-4xl">♟️</span>
              <div>
                <p className="text-white font-extrabold text-lg leading-snug">
                  Want to be part of this journey?
                </p>
                <p className="text-green-200 text-sm mt-1">
                  Join Creator Chess Academy today
                </p>
              </div>
              <button
                onClick={() => setShowPopup(true)}
                className="inline-block text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full cursor-pointer transition hover:bg-white/30"
                style={{ background: "rgba(255,255,255,0.15)", color: "#fff", border: "1px solid rgba(255,255,255,0.3)" }}
              >
                Enroll Now →
              </button>
            </div>

          </div>
        </div>

        {/* Bottom tagline strip */}
        <div className="max-w-6xl mx-auto mt-12">
          <div
            className="rounded-2xl px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-4"
            style={{ background: "#f0fdf4", border: "1px solid #bbf7d0" }}
          >
            <div className="flex items-center gap-4">
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
                style={{ background: "#dcfce7" }}
              >
                🎯
              </div>
              <div>
                <p className="font-extrabold text-gray-900 text-base">Focused. Disciplined. Winning.</p>
                <p className="text-gray-500 text-sm">Creator Chess Academy — where every child is a champion in the making.</p>
              </div>
            </div>
            <div className="flex gap-6 text-center flex-shrink-0">
              {[
                { num: "100+", label: "Students" },
                { num: "5★", label: "Coaching" },
                { num: "Online", label: "+ Offline" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="font-extrabold text-green-700 text-xl">{s.num}</p>
                  <p className="text-gray-500 text-xs">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>


      {showPopup && <PopupForm close={() => setShowPopup(false)} type="enroll" />}
    </div>
  );
};

export default Gallery;