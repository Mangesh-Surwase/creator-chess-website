import React, { useState } from "react";
import academyImg from "../assets/academy.png";
import academycImg from "../assets/who-we-r.png";
import bgImage from "../assets/bgimg.png";
import PopupForm from "../components/PopupForm";

/* ─── DATA ─── */
const stats = [
  { num: "2000+", label: "Students Trained" },
  { num: "5.0★", label: "Google Rating" },
  { num: "60+", label: "Google Reviews" },
  { num: "3+", label: "Years of Excellence" },
];

const highlights = [
  { icon: "🎯", title: "Structured Learning", sub: "Step-by-step improvement" },
  { icon: "🧠", title: "Practical Training", sub: "Real game analysis" },
  { icon: "🌍", title: "Multi-language", sub: "Marathi, Hindi, English" },
  { icon: "🏆", title: "Tournament Focus", sub: "Competitive preparation" },
];

const philosophyCards = [
  {
    icon: "🎯",
    title: "Fun & Engagement First",
    desc: "Puzzles, storytelling, and interactive methods make learning enjoyable — when students enjoy the process, they learn faster and retain more.",
  },
  {
    icon: "🧠",
    title: "Personalized Learning",
    desc: "Every student is different. We customize training based on level, pace, and thinking style to maximize improvement.",
  },
  {
    icon: "🏆",
    title: "Skills Beyond Chess",
    desc: "Chess teaches decision-making, patience, and focus — helping students succeed both on and off the board.",
  },
];

const whyChess = [
  { icon: "🧠", title: "Boosts IQ & Memory", desc: "Chess scientifically improves cognitive abilities and memory retention in children." },
  { icon: "🎯", title: "Builds Deep Focus", desc: "Regular practice builds concentration skills that help in academics and daily life." },
  { icon: "⚡", title: "Quick Decision Making", desc: "Students learn to think fast, evaluate options, and make confident decisions under pressure." },
  { icon: "🤝", title: "Builds Character", desc: "Win or lose gracefully — chess teaches resilience, patience, and sportsmanship." },
  { icon: "🏅", title: "Tournament Opportunities", desc: "We actively prepare students for local, state, and national level competitions." },
  { icon: "📈", title: "Academic Performance", desc: "Chess players consistently show improvement in maths, reading, and problem solving." },
];

const pricing = [
  {
    name: "Beginner's Recorded Course",
    nameHi: "नवशिक्यांना रेकॉर्डेड कोर्स",
    price: "₹299",
    tag: "Best Value",
    tagColor: "#166534",
    tagBg: "#dcfce7",
    features: ["Self-paced video lessons", "Basics of chess", "Perfect for absolute beginners"],
    accent: "#16a34a",
    featured: false,
  },
  {
    name: "Beginner Online Chess Class",
    nameHi: "बुद्धिबळ ऑनलाईन कोर्स",
    price: "₹999",
    tag: "Popular",
    tagColor: "#1e40af",
    tagBg: "#dbeafe",
    features: ["Live online sessions", "Beginner to basics", "Interactive Q&A"],
    accent: "#2563eb",
    featured: false,
  },
  {
    name: "Online Master Class – Beginner",
    nameHi: "नवशिक्यांना ऑनलाईन मास्टर क्लास",
    price: "₹699",
    tag: "",
    tagColor: "",
    tagBg: "",
    features: ["Expert-led sessions", "Foundational strategies", "Game analysis included"],
    accent: "#7c3aed",
    featured: false,
  },
  {
    name: "Offline Chess Class",
    nameHi: "Ravet, Pimpri-Chinchwad",
    price: "₹1,300",
    tag: "⭐ Most Popular",
    tagColor: "#92400e",
    tagBg: "#fef3c7",
    features: ["In-person coaching", "Kids aged 4–15 & Adults", "Ravet, Pune location"],
    accent: "#d97706",
    featured: true,
  },
  {
    name: "Intermediate / Advanced Recorded",
    nameHi: "रेकॉर्डेड कोर्स",
    price: "₹999",
    tag: "",
    tagColor: "",
    tagBg: "",
    features: ["Advanced video content", "Opening & endgame theory", "Lifetime access"],
    accent: "#0891b2",
    featured: false,
  },
  {
    name: "Online Master Class – Advanced",
    nameHi: "ऑनलाईन मास्टर क्लास अड्वैन्स",
    price: "₹1,199",
    tag: "",
    tagColor: "",
    tagBg: "",
    features: ["Live advanced coaching", "Tournament prep", "Deep game analysis"],
    accent: "#16a34a",
    featured: false,
  },
  {
    name: "Super Advance – Tournament Batch",
    nameHi: "Tournament Players Batch",
    price: "₹1,999",
    tag: "🔥 Elite",
    tagColor: "#991b1b",
    tagBg: "#fee2e2",
    features: ["Exclusive tournament training", "Rating improvement focus", "1-on-1 analysis sessions"],
    accent: "#dc2626",
    featured: false,
  },
];

const reviews = [
  {
    name: "Priya Sharma",
    text: "Very good teaching for all age people and children who are beginner. Highly recommended!",
    rating: 5,
    initial: "P",
    color: "#16a34a",
  },
  {
    name: "Rahul Patil",
    text: "Good guidance and skillful teaching... Thank you CCA teachers team. My son loves every session.",
    rating: 5,
    initial: "R",
    color: "#2563eb",
  },
  {
    name: "Sunita More",
    text: "Our mentor Mr. Praveen is very approachable and explains everything patiently. Great academy!",
    rating: 5,
    initial: "S",
    color: "#7c3aed",
  },
];

/* ─── COMPONENT ─── */
const About = () => {
  const [popup, setPopup] = useState(null);

  return (
    <div className="w-full pt-[80px]">

      {/* ══ 1. HERO ══ */}
      <div className="relative bg-gradient-to-br from-[#0a0f1a] via-[#0d1a10] to-[#0a0f1a] py-24 px-6 md:px-16 overflow-hidden">

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.035]"
          style={{ backgroundImage: "repeating-linear-gradient(0deg,transparent,transparent 60px,#fff 60px,#fff 61px),repeating-linear-gradient(90deg,transparent,transparent 60px,#fff 60px,#fff 61px)" }} />

        {/* Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] rounded-full opacity-20 pointer-events-none"
          style={{ background: "radial-gradient(ellipse,#16a34a 0%,transparent 70%)" }} />

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center relative z-10">

          {/* Left */}
          <div className="text-center md:text-left">
            <span className="inline-block bg-green-500/15 text-green-400 border border-green-500/30 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-5">
              Our Mission ♟️
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-5">
              We Build Minds<br />
              <span style={{ background: "linear-gradient(135deg,#4ade80,#16a34a)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                with Chess ♕
              </span>
            </h1>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-3 max-w-xl">
              At <span className="text-green-400 font-semibold">Creator Chess Academy</span>, we use chess as a powerful tool to develop focus, confidence, and smart decision-making in every student.
            </p>
            <p className="text-gray-500 text-sm md:text-base mb-8">
              From beginners to advanced players — we guide every student step-by-step towards mastery and tournament success.
            </p>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start mb-8">
              {["🧠 Improve IQ", "🎯 Focus & Strategy", "🏆 Tournament Ready"].map(t => (
                <span key={t} className="px-4 py-2 rounded-full text-sm text-white"
                  style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)" }}>
                  {t}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <button onClick={() => setPopup("enroll")}
                className="px-7 py-3 rounded-xl font-bold text-sm text-white transition hover:opacity-90 hover:scale-105 active:scale-95"
                style={{ background: "linear-gradient(135deg,#16a34a,#15803d)" }}>
                Enroll Now ♟️
              </button>
              <button onClick={() => setPopup("demo")}
                className="px-7 py-3 rounded-xl font-bold text-sm text-green-400 border border-green-500/40 transition hover:bg-green-500/10">
                🎯 Book Free Demo
              </button>
            </div>
          </div>

          {/* Right image */}
          <div className="relative">
            <div className="absolute -inset-1 rounded-3xl opacity-25"
              style={{ background: "linear-gradient(135deg,#16a34a,transparent)" }} />
            <img src={academycImg} alt="Creator Chess Academy"
              className="relative rounded-3xl w-full object-cover shadow-2xl hover:scale-[1.02] transition duration-500" />
            <div className="absolute bottom-4 left-4 bg-green-500 text-white px-4 py-2.5 rounded-xl shadow-lg text-sm font-bold">
              ⭐ 5.0 Rated on Google
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div className="max-w-5xl mx-auto mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10">
          {stats.map(s => (
            <div key={s.label} className="text-center rounded-2xl py-5 px-4"
              style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}>
              <p className="text-2xl md:text-3xl font-extrabold text-green-400">{s.num}</p>
              <p className="text-gray-400 text-xs mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>


      {/* ══ 2. WHO WE ARE ══ */}
      <div className="bg-white py-24 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img src={academyImg} alt="Students" className="rounded-3xl shadow-xl w-full object-cover" />
            <div className="absolute -bottom-5 -left-5 bg-green-500 text-white px-6 py-4 rounded-2xl shadow-xl">
              <p className="text-2xl font-extrabold">2000+</p>
              <p className="text-sm font-medium opacity-90">Students Trained</p>
            </div>
            <div className="absolute -top-4 -right-4 bg-white rounded-2xl px-4 py-3 shadow-lg border border-gray-100 text-center">
              <p className="text-xl font-extrabold text-yellow-500">5.0 ★</p>
              <p className="text-xs text-gray-500">Google Rating</p>
            </div>
          </div>
          <div>
            <span className="inline-block bg-green-100 text-green-700 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-5">
              Who We Are ♟️
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-5">
              Building Smart Thinkers<br />Through Chess <span className="text-green-600">♕</span>
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-4">
              Creator Chess Academy is one of the fastest-growing chess academies in Pune, helping kids and adults master the game from beginner to advanced level.
            </p>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-8">
              We focus on practical learning — openings, middle game strategies, and endgame techniques — along with real match analysis and tournaments. Classes available in Marathi, Hindi, and English.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {highlights.map(h => (
                <div key={h.title} className="rounded-2xl p-4 border border-gray-100 hover:border-green-200 hover:shadow-md transition"
                  style={{ background: "#fafafa" }}>
                  <p className="font-bold text-gray-800 text-sm">{h.icon} {h.title}</p>
                  <p className="text-xs text-gray-500 mt-1">{h.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>


      {/* ══ 3. WHY CHESS ══ */}
      <div className="bg-gray-50 py-24 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block bg-green-100 text-green-700 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4">
              Why Chess?
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900">
              Why Enroll Your Child in <span className="text-green-600">Chess?</span>
            </h2>
            <p className="text-gray-500 mt-3 text-base md:text-lg max-w-2xl mx-auto">
              Not just a game — chess builds a smart brain, a focused mind, and a strong character.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {whyChess.map(item => (
              <div key={item.title}
                className="bg-white rounded-3xl p-6 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition duration-300 group">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition"
                  style={{ background: "#f0fdf4" }}>
                  {item.icon}
                </div>
                <h3 className="font-extrabold text-gray-900 text-base mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>


      {/* ══ 4. TEACHING PHILOSOPHY ══ */}
      <div className="bg-white py-24 px-6 md:px-16">
        <div className="max-w-7xl mx-auto text-center">
          <span className="inline-block bg-green-100 text-green-700 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4">
            Our Approach
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Our Teaching Philosophy ♟️
          </h2>
          <p className="text-gray-500 text-base md:text-lg mb-14 max-w-2xl mx-auto">
            It's not just about winning — it's about building a powerful way of thinking.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {philosophyCards.map(c => (
              <div key={c.title}
                className="group bg-white border border-gray-100 p-8 rounded-3xl shadow-sm hover:shadow-2xl hover:-translate-y-3 transition duration-500 text-left">
                <div className="w-16 h-16 flex items-center justify-center rounded-2xl text-3xl mb-5 group-hover:scale-110 transition"
                  style={{ background: "#f0fdf4" }}>
                  {c.icon}
                </div>
                <h3 className="text-xl font-extrabold text-gray-800 mb-3">{c.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>


      {/* ══ 5. PRICING ══ */}
      <div className="bg-gray-50 py-24 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block bg-green-100 text-green-700 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4">
              Pricing
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900">
              Programs & <span className="text-green-600">Fees</span>
            </h2>
            <p className="text-gray-500 mt-3 text-base md:text-lg">
              Affordable chess training for every level — beginner to tournament player.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {pricing.map(p => (
              <div key={p.name}
                className={`bg-white rounded-3xl p-6 flex flex-col border transition duration-300 hover:shadow-xl hover:-translate-y-1 ${p.featured ? "border-2" : "border-gray-100"}`}
                style={p.featured ? { borderColor: p.accent } : {}}>

                {p.featured && p.tag && (
                  <div className="w-full text-center mb-3">
                    <span className="text-xs font-bold px-3 py-1 rounded-full"
                      style={{ background: p.tagBg, color: p.tagColor }}>
                      {p.tag}
                    </span>
                  </div>
                )}

                <div className="flex items-start justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                    style={{ background: `${p.accent}18` }}>
                    ♟️
                  </div>
                  {p.tag && !p.featured && (
                    <span className="text-xs font-bold px-2.5 py-1 rounded-full"
                      style={{ background: p.tagBg, color: p.tagColor }}>
                      {p.tag}
                    </span>
                  )}
                </div>

                <p className="font-extrabold text-gray-900 text-sm leading-snug mb-1">{p.name}</p>
                <p className="text-xs text-gray-400 mb-4">{p.nameHi}</p>
                <p className="text-3xl font-extrabold mb-4" style={{ color: p.accent }}>{p.price}</p>

                <ul className="flex-1 space-y-2 mb-5">
                  {p.features.map(f => (
                    <li key={f} className="flex items-start gap-2 text-xs text-gray-600">
                      <span className="text-green-500 mt-0.5 flex-shrink-0">✓</span>{f}
                    </li>
                  ))}
                </ul>

                <button onClick={() => setPopup("enroll")}
                  className="w-full py-2.5 rounded-xl text-xs font-bold transition hover:opacity-90"
                  style={{ background: `${p.accent}15`, color: p.accent }}>
                  Enroll Now →
                </button>
              </div>
            ))}
          </div>

          {/* Free demo CTA */}
          <div className="mt-10 rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6"
            style={{ background: "linear-gradient(135deg,#14532d,#166534,#15803d)" }}>
            <div>
              <p className="text-white font-extrabold text-2xl md:text-3xl mb-1">🎯 First Demo Class — Absolutely Free!</p>
              <p className="text-green-200 text-sm md:text-base">Try before you enroll. No commitment, no payment needed.</p>
            </div>
            <button onClick={() => setPopup("demo")}
              className="flex-shrink-0 bg-white text-green-700 font-extrabold px-8 py-3.5 rounded-2xl hover:scale-105 transition text-sm shadow-lg">
              Book Free Demo ♟️
            </button>
          </div>
        </div>
      </div>


      {/* ══ 6. VISION & MISSION ══ */}
      <div className="relative w-full py-28 px-6 md:px-16 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center scale-110"
          style={{ backgroundImage: `url(${bgImage})` }} />
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/40 via-transparent to-green-900/40" />
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-4">♟️ Our Vision & Mission</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">We are building future thinkers through the power of chess.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            {[
              { icon: "🎯", title: "Our Vision", text: "To make chess a powerful learning tool for every child — building focus, creativity, and strong decision-making skills that last a lifetime." },
              { icon: "🚀", title: "Our Mission", text: "To provide structured chess training through expert coaching, real-game analysis, and tournaments — helping students grow from beginners to confident players." },
            ].map(v => (
              <div key={v.title} className="rounded-3xl p-8 shadow-2xl hover:scale-105 transition duration-500"
                style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", backdropFilter: "blur(20px)" }}>
                <h3 className="text-2xl md:text-3xl font-extrabold text-green-400 mb-4">{v.icon} {v.title}</h3>
                <p className="text-gray-200 leading-relaxed text-base md:text-lg">{v.text}</p>
                <div className="mt-6 w-20 h-[3px] bg-green-400 rounded-full" />
              </div>
            ))}
          </div>
          <div className="text-center mt-20">
            <h3 className="text-2xl md:text-4xl font-extrabold text-white">🧠 Building Thinkers. ♟️ Creating Champions.</h3>
          </div>
        </div>
      </div>


      {/* ══ 7. GOOGLE REVIEWS + LOCATION ══ */}
      <div className="bg-white py-24 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block bg-yellow-100 text-yellow-700 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4">
              Google Reviews
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900">
              What Parents <span className="text-green-600">Say About Us</span>
            </h2>
            <div className="flex items-center justify-center gap-2 mt-3">
              <span className="text-yellow-400 text-xl">★★★★★</span>
              <span className="font-extrabold text-gray-900">5.0</span>
              <span className="text-gray-500 text-sm">· 60+ Google Reviews</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {reviews.map(r => (
              <div key={r.name} className="bg-gray-50 rounded-3xl p-6 border border-gray-100 hover:shadow-lg transition">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-full flex items-center justify-center text-white font-extrabold text-sm flex-shrink-0"
                    style={{ background: r.color }}>
                    {r.initial}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">{r.name}</p>
                    <p className="text-yellow-400 text-xs">{"★".repeat(r.rating)}</p>
                  </div>
                  <div className="ml-auto">
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">"{r.text}"</p>
              </div>
            ))}
          </div>

          {/* Location + CTA card */}
          <div className="rounded-3xl overflow-hidden border border-gray-100 shadow-sm grid md:grid-cols-2">
            <div className="bg-gray-50 p-8">
              <p className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-4">Find Us</p>
              <h3 className="font-extrabold text-gray-900 text-xl mb-3">Creator Chess Academy</h3>
              <p className="text-gray-600 text-sm mb-1.5">📍 Ravet, Pimpri-Chinchwad, Maharashtra 412101</p>
              <p className="text-gray-600 text-sm mb-1.5">
                📞 <a href="tel:+919028447116" className="text-green-600 font-semibold hover:underline">090284 47116</a>
              </p>
              <p className="text-gray-600 text-sm mb-4">🕐 Open 24 hours</p>
              <p className="text-xs text-gray-400 mb-2">Chess instructor in Pimpri-Chinchwad, Maharashtra</p>
              <div className="flex items-center gap-1.5 mt-1">
                <span className="text-yellow-400">★★★★★</span>
                <span className="text-sm font-bold text-gray-800">5.0</span>
                <span className="text-gray-400 text-xs">· 60 Google reviews</span>
              </div>
            </div>
            <div className="bg-white p-8 flex flex-col justify-center items-center text-center gap-4">
              <span className="text-4xl">♟️</span>
              <p className="font-extrabold text-gray-900 text-lg">Ready to Join Creator Chess Academy?</p>
              <p className="text-gray-500 text-sm max-w-xs">First demo class is absolutely free. Come experience the difference.</p>
              <div className="flex flex-col sm:flex-row gap-3 w-full">
                <button onClick={() => setPopup("enroll")}
                  className="flex-1 py-3 rounded-xl font-bold text-sm text-white transition hover:opacity-90"
                  style={{ background: "linear-gradient(135deg,#16a34a,#15803d)" }}>
                  Enroll Now ♟️
                </button>
                <button onClick={() => setPopup("demo")}
                  className="flex-1 py-3 rounded-xl font-bold text-sm text-green-600 border border-green-300 hover:bg-green-50 transition">
                  Free Demo 🎯
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* ══ POPUP ══ */}
      {popup && <PopupForm close={() => setPopup(null)} type={popup} />}

    </div>
  );
};

export default About;
