import { useState, useEffect, useRef } from "react";
import bcBg from "../assets/bgimg.png";

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const courses = [
  {
    id: 1,
    tag: "Self-Paced",
    tagColor: "#6B7280",
    title: "Beginner's Recorded Course",
    subtitle: "Marathi / English",
    price: "₹299",
    priceNote: "One-time access",
    highlight: false,
    icon: "🎬",
    shortDesc: "Learn chess at your own pace with lifetime access to recorded lessons, PDFs, and free tools.",
    syllabus: [
      "Introduction to chess & competitive rules",
      "Piece movements & board setup",
      "Chess notation (recording moves)",
      "Basic openings",
      "Puzzle solving – Checkmate in one",
      "One-to-One game demonstrations",
      "Middle game & endgame training",
      "Game analysis techniques",
    ],
    extras: [
      "Checkmate-in-one PDF",
      "3 Free practice tools (with registration guide video)",
      "All recording links + notes PDFs",
      "Puzzle PDFs included",
    ],
    timing: "Self-paced — access after payment",
    duration: "Lifetime access",
    seats: null,
    level: "Beginner",
    levelColor: "#10B981",
  },
  {
    id: 2,
    tag: "Live Zoom",
    tagColor: "#3B82F6",
    title: "Live Online Beginner Batch",
    subtitle: "Zoom Classes",
    price: "₹999",
    priceNote: "Per batch",
    highlight: false,
    icon: "💻",
    shortDesc: "Zero to chess hero in 30 days. Live Zoom sessions Mon–Fri with the Reverse–Forward revision system.",
    syllabus: [
      "Chess fundamentals from scratch",
      "Piece movements & rules",
      "Board setup & notation",
      "Basic openings & tactics",
      "Puzzle solving (beginner level)",
      "Reverse–Forward System: Learn 10 days → Revise 10 days",
      "Practice games & live analysis",
      "Competitive rule orientation",
    ],
    extras: [
      "Live doubt-clearing in class",
      "Revision module included",
      "Suitable for school students & working professionals",
    ],
    timing: "Batch 1: 8:00–9:00 PM  |  Batch 2: 9:30–10:30 PM\nMon – Fri",
    duration: "10 Nov – 5 Dec (approx. 30 days)",
    seats: "Limited",
    level: "Beginner",
    levelColor: "#10B981",
  },
  {
    id: 3,
    tag: "Online Masterclass",
    tagColor: "#8B5CF6",
    title: "Online Chess Masterclass",
    subtitle: "Beginner to Advanced · Marathi",
    price: "₹699",
    priceNote: "Per batch",
    highlight: false,
    icon: "⭐",
    shortDesc: "Structured Marathi-medium coaching designed to take students from basics to FIDE-rated competition.",
    syllabus: [
      "Rapid Learning System for beginners",
      "Advanced openings & repertoire building",
      "Middle game strategy & planning",
      "Endgame technique (King & pawn, Rook endings)",
      "Puzzle training across all game phases",
      "Game analysis – how to learn from losses",
      "Zonal, State & National tournament preparation",
      "FIDE rating process guidance",
    ],
    extras: [
      "Expert coaching (international-level trainer)",
      "Competitive & career pathway guidance",
      "Suitable for 8+ age group",
    ],
    timing: "Batches announced on enrollment",
    duration: "Ongoing",
    seats: null,
    level: "Beginner – Advanced",
    levelColor: "#F59E0B",
  },
  {
    id: 4,
    tag: "Offline · Ravet",
    tagColor: "#EF4444",
    title: "Offline Chess Classes",
    subtitle: "Sapiens School, Ravet · Age 4–15",
    price: "₹1,300",
    priceNote: "Enquire for full fee",
    highlight: false,
    icon: "🏫",
    shortDesc: "Weekend in-person coaching at Sapiens School of Learning, SB Patil College Road, Ravet.",
    syllabus: [
      "Beginners Level: rules, piece movement, simple tactics",
      "Intermediate–Advanced: opening prep, middle game, endgame",
      "Tournament preparation & game analysis",
      "Fun learning approach for young students (age 4+)",
      "Marathi, Hindi & English medium available",
    ],
    extras: [
      "Beginners Monthly: ₹1,500  |  3-Month: ₹4,000 (save ₹500)",
      "Intermediate+Advanced Monthly: ₹1,800  |  3-Month: ₹5,000 (save ₹400)",
      "Location: Bhalchandra Prospero Society, Near Bhondve Baug",
    ],
    timing: "Sat & Sun — 11:00 AM–12:00 PM  OR  12:00 PM–1:00 PM",
    duration: "Monthly rolling batches",
    seats: null,
    level: "Beginner – Advanced",
    levelColor: "#F59E0B",
  },
  {
    id: 5,
    tag: "Elite Batch",
    tagColor: "#D97706",
    title: "SUPER ADVANCE — Tournament Batch",
    subtitle: "For Rated & Competitive Players",
    price: "₹1,999",
    priceNote: "Per batch · Only 5 seats",
    highlight: true,
    icon: "🏆",
    shortDesc: "Exclusive 5-student intensive batch with Coach Pravin Mane. Deep preparation for serious tournament players.",
    syllabus: [
      "Deep game preparation & opening repertoire (advanced)",
      "Tournament mindset & long-thinking development",
      "Advanced puzzle training — Opening, Middle Game, Endgame",
      "Positional play & strategic planning",
      "Time management in OTB & online tournaments",
      "Personalised game analysis session per student",
      "Psychological preparation for competitive chess",
    ],
    extras: [
      "Personal coaching by Coach Pravin Mane",
      "Only 5 students per batch — maximum individual attention",
      "2.5-hour intensive sessions (with break if needed)",
      "For rated & competitively active players only",
    ],
    timing: "Mon & Tue — 8:00 PM–10:30 PM",
    duration: "3 Nov – 3 Dec",
    seats: "Only 5 seats",
    level: "Tournament",
    levelColor: "#EF4444",
  },
];

const benefits = [
  { icon: "🧠", title: "IQ & Memory Boost", desc: "Studies show chess players develop stronger working memory and spatial reasoning—skills that transfer directly to academics." },
  { icon: "🎯", title: "Laser Focus", desc: "Calculating variations trains the brain to sustain deep concentration, reducing impulsivity in daily life." },
  { icon: "⚡", title: "Problem Solving", desc: "Every chess position is a puzzle. Students learn to break complex problems into manageable steps—a lifelong skill." },
];

const methodology = [
  { num: "01", title: "Reverse–Forward System", desc: "Learn new concepts for 10 days, then systematically revise them for the next 10 days. This dual-pass method locks knowledge into long-term memory." },
  { num: "02", title: "Practical Game Analysis", desc: "Every session includes real game review. Students learn to identify mistakes, find improvements, and build pattern recognition faster." },
  { num: "03", title: "Phase-wise Puzzle Training", desc: "Puzzles are categorised by game phase—opening traps, middle-game tactics, endgame technique—so skills develop in context." },
];

const roadmapSteps = [
  { label: "Beginner", sub: "Rules, pieces, basics", pct: 0 },
  { label: "Intermediate", sub: "Tactics & openings", pct: 33 },
  { label: "Advanced", sub: "Strategy & endgames", pct: 66 },
  { label: "Tournament", sub: "Rated competition", pct: 100 },
];

const chessPieces = [
  {
    id: "king", name: "King", symbol: "♔", tagline: "The most important piece",
    color: "#14532D", bg: "#DCFCE7", border: "#86EFAC",
    move: "Moves one square in any direction — horizontally, vertically, or diagonally.",
    fact: "If your King is in checkmate, the game ends immediately. Protect it at all costs!",
    power: 1,
  },
  {
    id: "queen", name: "Queen", symbol: "♕", tagline: "The most powerful piece",
    color: "#6D28D9", bg: "#EDE9FE", border: "#C4B5FD",
    move: "Moves any number of squares in any direction — like Rook + Bishop combined.",
    fact: "The Queen is worth about 9 points. Losing it early is almost always decisive.",
    power: 9,
  },
  {
    id: "rook", name: "Rook", symbol: "♖", tagline: "The straight-line charger",
    color: "#1D4ED8", bg: "#DBEAFE", border: "#93C5FD",
    move: "Moves any number of squares horizontally or vertically — never diagonally.",
    fact: "Two Rooks on the 7th rank are notoriously powerful in the endgame.",
    power: 5,
  },
  {
    id: "bishop", name: "Bishop", symbol: "♗", tagline: "The diagonal dominator",
    color: "#92400E", bg: "#FEF3C7", border: "#FCD34D",
    move: "Moves any number of squares diagonally and always stays on its starting color.",
    fact: "Having both Bishops (the 'Bishop pair') is a significant long-term advantage.",
    power: 3,
  },
  {
    id: "knight", name: "Knight", symbol: "♘", tagline: "The only piece that jumps",
    color: "#9D174D", bg: "#FCE7F3", border: "#F9A8D4",
    move: "Moves in an 'L' shape: 2 squares in one direction + 1 square perpendicular.",
    fact: "Knights are the only pieces that can jump over other pieces — great for closed positions!",
    power: 3,
  },
  {
    id: "pawn", name: "Pawn", symbol: "♙", tagline: "The soul of chess",
    color: "#374151", bg: "#F3F4F6", border: "#D1D5DB",
    move: "Moves forward one square (two on first move); captures one square diagonally.",
    fact: "A Pawn reaching the opposite side promotes to any piece — usually a Queen!",
    power: 1,
  },
];

/* ─────────────────────────────────────────────
   SCROLL FADE HOOK
───────────────────────────────────────────── */
function useScrollFade(threshold = 0.12) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return [ref, visible];
}

/* ─────────────────────────────────────────────
   FADE SECTION WRAPPER
───────────────────────────────────────────── */
function FadeSection({ children, delay = 0, className = "" }) {
  const [ref, visible] = useScrollFade();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(26px)",
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

/* ─────────────────────────────────────────────
   FLIP PIECE CARD
───────────────────────────────────────────── */
function PieceCard({ piece, index }) {
  const [flipped, setFlipped] = useState(false);
  const [ref, visible] = useScrollFade();

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(30px)",
        transition: `opacity 0.5s ease ${index * 75}ms, transform 0.5s ease ${index * 75}ms`,
        perspective: "900px",
      }}
    >
      <div
        className="relative cursor-pointer select-none"
        style={{
          height: "196px",
          transformStyle: "preserve-3d",
          transition: "transform 0.5s cubic-bezier(0.4,0.2,0.2,1)",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
        onClick={() => setFlipped((f) => !f)}
        role="button"
        aria-label={`${piece.name} — tap to flip`}
      >
        {/* FRONT */}
        <div
          className="absolute inset-0 rounded-3xl border-2 flex flex-col items-center justify-center gap-2 p-3 text-center"
          style={{ backfaceVisibility: "hidden", background: piece.bg, borderColor: piece.border }}
        >
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center text-4xl"
            style={{ background: "white", boxShadow: `0 3px 14px ${piece.border}90` }}
          >
            {piece.symbol}
          </div>
          <p className="text-sm font-bold" style={{ color: piece.color }}>{piece.name}</p>
          <p className="text-xs leading-tight" style={{ color: piece.color + "99" }}>{piece.tagline}</p>
          <span
            className="text-xs px-2.5 py-0.5 rounded-full font-medium mt-0.5"
            style={{ background: piece.color + "18", color: piece.color }}
          >
            Tap to flip →
          </span>
        </div>

        {/* BACK */}
        <div
          className="absolute inset-0 rounded-3xl flex flex-col justify-between p-4 text-left"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)", background: piece.color }}
        >
          <div>
            <p className="text-xs font-bold text-white opacity-60 uppercase tracking-wider mb-1">How it moves</p>
            <p className="text-xs text-white font-semibold leading-snug">{piece.move}</p>
          </div>
          <div>
            <p className="text-xs font-bold text-white opacity-60 uppercase tracking-wider mb-1">Did you know?</p>
            <p className="text-xs text-white opacity-85 leading-relaxed">{piece.fact}</p>
          </div>
          <div className="flex items-center justify-between pt-1">
            <div className="flex gap-0.5">
              {Array.from({ length: Math.min(piece.power, 9) }).map((_, i) => (
                <div key={i} className="w-2 h-2 rounded-full bg-white opacity-70" />
              ))}
            </div>
            <span className="text-xs text-white opacity-50">Value: {piece.power}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   MODAL
───────────────────────────────────────────── */
function Modal({ course, onClose }) {
  useEffect(() => {
    const handleKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", handleKey); document.body.style.overflow = ""; };
  }, [onClose]);

  if (!course) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4"
      style={{ background: "rgba(0,0,0,0.52)", backdropFilter: "blur(4px)" }}
      onClick={onClose}
    >
      <div
        className="relative w-full sm:max-w-2xl bg-white rounded-t-3xl sm:rounded-3xl overflow-hidden"
        style={{ maxHeight: "92vh" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Mobile drag handle */}
        <div className="flex justify-center pt-3 pb-1 sm:hidden">
          <div className="w-10 h-1 rounded-full bg-gray-200" />
        </div>

        {/* Header */}
        <div className="px-6 pt-3 pb-4 border-b border-gray-100" style={{ background: course.highlight ? "#FFFBEB" : "#F9FAFB" }}>
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0" style={{ background: course.tagColor + "15" }}>
                {course.icon}
              </div>
              <div>
                <span className="inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full mb-1" style={{ background: course.tagColor + "20", color: course.tagColor }}>
                  {course.tag}
                </span>
                <h2 className="text-base font-bold text-gray-900 leading-tight">{course.title}</h2>
                <p className="text-xs text-gray-400">{course.subtitle}</p>
              </div>
            </div>
            <button onClick={onClose} className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 text-sm font-bold transition-colors">
              ✕
            </button>
          </div>

          <div className="flex items-center flex-wrap gap-3 mt-3">
            <div>
              <span className="text-2xl font-bold text-gray-900">{course.price}</span>
              <span className="text-xs text-gray-400 ml-1">{course.priceNote}</span>
            </div>
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full" style={{ background: course.levelColor + "18", color: course.levelColor }}>
              {course.level}
            </span>
            {course.seats && (
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-red-50 text-red-600 border border-red-100">⚠ {course.seats}</span>
            )}
          </div>
        </div>

        {/* Body */}
        <div className="overflow-y-auto px-6 py-5 space-y-5" style={{ maxHeight: "58vh" }}>
          <div className="flex gap-3 flex-wrap">
            <div className="flex-1 min-w-[140px] bg-green-50 rounded-2xl p-4 border border-green-100">
              <p className="text-xs font-bold text-green-700 mb-1">🗓 Schedule</p>
              <p className="text-sm text-green-900 whitespace-pre-line leading-relaxed">{course.timing}</p>
            </div>
            <div className="flex-1 min-w-[140px] bg-blue-50 rounded-2xl p-4 border border-blue-100">
              <p className="text-xs font-bold text-blue-700 mb-1">⏱ Duration</p>
              <p className="text-sm text-blue-900">{course.duration}</p>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">What you'll learn</h3>
            <ul className="space-y-2">
              {course.syllabus.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-gray-700">
                  <span className="w-5 h-5 rounded-full bg-green-100 text-green-700 flex items-center justify-center flex-shrink-0 text-xs font-bold mt-0.5">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {course.extras.length > 0 && (
            <div className="bg-amber-50 rounded-2xl p-4 border border-amber-100">
              <h3 className="text-xs font-bold text-amber-700 uppercase tracking-wider mb-2.5">✨ Includes / Extras</h3>
              <ul className="space-y-1.5">
                {course.extras.map((item, i) => (
                  <li key={i} className="text-sm text-amber-900 flex items-start gap-2">
                    <span className="text-amber-400 flex-shrink-0 mt-0.5">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-gray-100 bg-white">
          <a
            href="https://wa.me/919028447116"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl text-white font-bold text-sm transition-all hover:opacity-90 active:scale-95"
            style={{ background: "#16A34A" }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.558 4.116 1.535 5.845L.057 23.928a.75.75 0 00.915.915l6.083-1.478A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.75 9.75 0 01-4.97-1.364l-.356-.213-3.694.897.91-3.594-.232-.369A9.75 9.75 0 112.25 12 9.76 9.76 0 0112 21.75z"/>
            </svg>
            Book Your Seat on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   COURSE CARD
───────────────────────────────────────────── */
function CourseCard({ course, onClick }) {
  return (
    <div
      className="relative flex flex-col bg-white rounded-3xl border overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer group h-full"
      style={
        course.highlight
          ? { borderColor: "#FCD34D", boxShadow: "0 4px 24px #FCD34D40" }
          : { borderColor: "#E5E7EB", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }
      }
      onClick={onClick}
    >
      {course.highlight && (
        <div className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl" style={{ background: "linear-gradient(90deg,#F59E0B,#FCD34D,#F59E0B)" }} />
      )}

      <div className="px-5 pt-5 pb-4 flex-1">
        <div className="flex items-start justify-between mb-3">
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full" style={{ background: course.tagColor + "15", color: course.tagColor }}>
            {course.tag}
          </span>
          <span className="text-2xl">{course.icon}</span>
        </div>
        <h3 className="text-base font-bold text-gray-900 leading-snug mb-0.5">{course.title}</h3>
        <p className="text-xs text-gray-400 mb-3">{course.subtitle}</p>
        <div className="w-8 h-0.5 rounded-full mb-3" style={{ background: course.tagColor }} />
        <p className="text-sm text-gray-500 leading-relaxed">{course.shortDesc}</p>
      </div>

      <div className="mx-5 border-t border-gray-100" />

      <div className="px-5 py-4 flex items-center justify-between">
        <div>
          <span className="text-xl font-bold text-gray-900">{course.price}</span>
          <span className="text-xs text-gray-400 ml-1">{course.priceNote}</span>
          {course.seats && <p className="text-xs text-red-500 font-medium mt-0.5">⚠ {course.seats}</p>}
        </div>
        <button
          className="flex items-center gap-1.5 text-sm font-semibold px-4 py-2 rounded-xl transition-all duration-200 group-hover:gap-2.5"
          style={{ background: "#DCFCE7", color: "#15803D" }}
        >
          View Details
          <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
        </button>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   ROADMAP
───────────────────────────────────────────── */
function Roadmap() {
  const [progress, setProgress] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setTimeout(() => setProgress(100), 300); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="relative">
      <div className="relative h-2 bg-gray-100 rounded-full mb-10 overflow-hidden">
        <div
          className="absolute inset-y-0 left-0 rounded-full"
          style={{ width: `${progress}%`, background: "linear-gradient(90deg,#10B981,#16A34A)", transition: "width 1.8s cubic-bezier(0.4,0,0.2,1)" }}
        />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {roadmapSteps.map((step, i) => (
          <div
            key={i}
            className="flex flex-col items-center text-center"
            style={{ opacity: progress >= step.pct ? 1 : 0.3, transform: `translateY(${progress >= step.pct ? 0 : 8}px)`, transition: `opacity 0.7s ease ${i * 200}ms, transform 0.7s ease ${i * 200}ms` }}
          >
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold mb-2 border-2 transition-all duration-500"
              style={progress >= step.pct ? { background: "#10B981", borderColor: "#10B981", color: "white" } : { background: "white", borderColor: "#D1FAE5", color: "#9CA3AF" }}
            >
              {i + 1}
            </div>
            <p className="text-sm font-bold text-gray-800">{step.label}</p>
            <p className="text-xs text-gray-400 mt-0.5">{step.sub}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   SECTION LABEL COMPONENT
───────────────────────────────────────────── */
function SectionLabel({ children }) {
  return (
    <span
      className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase mb-3 px-3 py-1 rounded-full"
      style={{ color: "#15803D", background: "#DCFCE7" }}
    >
      {children}
    </span>
  );
}

/* ─────────────────────────────────────────────
   MAIN PAGE
───────────────────────────────────────────── */
export default function Courses() {
  const [selectedCourse, setSelectedCourse] = useState(null);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700;800&family=DM+Sans:ital,wght@0,400;0,500;0,600;1,400&display=swap');

        .courses-page * { font-family: 'DM Sans', sans-serif; box-sizing: border-box; }
        .display-font { font-family: 'Cormorant Garamond', serif; }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInUp { animation: fadeInUp 0.65s ease both; }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }

              .hero-section {
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          position: relative;
          width: 100%;
        }
        /* Beige overlay at 82% opacity keeps bg visible but ensures text is crisp */
        .hero-overlay {
          position: absolute;
          inset: 0;
          background: rgba(245, 243, 238, 0.82);
        }

        /* Piece card grid: 3 cols on tablet+, 2 cols on mobile */
        .pieces-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
        }
        @media (min-width: 1024px) {
          .pieces-grid { grid-template-columns: repeat(6, 1fr); }
        }
        @media (max-width: 480px) {
          .pieces-grid { grid-template-columns: repeat(2, 1fr); }
        }
      `}</style>

      <div className="courses-page min-h-screen" style={{ background: "#F5F3EE" }}>

        {/* ══════════════════════════════════════
            HERO
            pt-28 = 7rem ≈ 112px clears a standard 64–72px fixed Navbar
            on smaller screens pt-24 (96px) is also safe
        ══════════════════════════════════════ */}
       <section 
            className="hero-section" 
            style={{ backgroundImage: `url(${bcBg})` }}
          >
            <div className="hero-overlay" />

            {/* Subtle chess grid watermark on top of overlay */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ 
                opacity: 0.035, 
                backgroundImage: "repeating-conic-gradient(#1a1a1a 0% 25%, transparent 0% 50%)", 
                backgroundSize: "38px 38px", 
                zIndex: 1 
              }}
            />
          <div className="relative z-10 max-w-3xl mx-auto px-5 pt-28 sm:pt-32 pb-20 text-center">
            <div className="animate-fadeInUp">
              <SectionLabel>♟ Creator Chess Academy</SectionLabel>
              <h1 className="display-font text-5xl sm:text-6xl font-bold text-gray-900 leading-[1.1] mb-5">
                Master the<br />
                <em style={{ color: "#15803D", fontStyle: "italic" }}>Game of Kings</em>
              </h1>
              <p className="text-base sm:text-lg text-gray-500 leading-relaxed max-w-xl mx-auto mb-1.5">
                Building sharp minds, strategic thinkers, and confident tournament players —
                from your very first move to a FIDE rating.
              </p>
              <p className="text-sm text-gray-400 italic mb-10">Taught in Marathi · Hindi · English</p>
            </div>

            {/* Stats */}
            <div className="animate-fadeInUp delay-200 grid grid-cols-3 gap-3 max-w-xs mx-auto mb-8">
              {[{ num: "5+", label: "Courses" }, { num: "500+", label: "Students" }, { num: "10+", label: "Tournaments" }].map((s, i) => (
                <div key={i} className="bg-white rounded-2xl py-3.5 px-2 border border-gray-100 text-center" style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.07)" }}>
                  <p className="display-font text-2xl font-bold text-gray-900">{s.num}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>

            {/* CTA row */}
            <div className="animate-fadeInUp delay-300 flex items-center justify-center flex-wrap gap-3">
              <a href="#courses" className="inline-flex items-center gap-2 text-sm font-semibold px-6 py-3 rounded-2xl text-white transition-all hover:opacity-90 active:scale-95" style={{ background: "#16A34A" }}>
                View All Courses →
              </a>
              <a href="https://wa.me/919028447116" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold px-6 py-3 rounded-2xl bg-white text-gray-800 border border-gray-200 transition-all hover:bg-gray-50">
                📞 Free Demo Call
              </a>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            CHESS BASICS — Know Your Pieces
        ══════════════════════════════════════ */}
        <section className="px-5 py-16" style={{ background: "#F5F3EE" }}>
          <div className="max-w-5xl mx-auto">
            <FadeSection className="text-center mb-10">
              <SectionLabel>♟ Chess Basics</SectionLabel>
              <h2 className="display-font text-4xl font-bold text-gray-900 mb-3">
                Master the Board
              </h2>
              <p className="text-gray-400 text-sm max-w-md mx-auto">
                Every great player starts by knowing their pieces. Tap each card to discover how it moves — and why it matters.
              </p>
            </FadeSection>

            <div className="pieces-grid">
              {chessPieces.map((piece, i) => (
                <PieceCard key={piece.id} piece={piece} index={i} />
              ))}
            </div>

            {/* Fun fact strip */}
            <FadeSection delay={300}>
              <div
                className="mt-8 rounded-2xl px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-4 border"
                style={{ background: "#DCFCE7", borderColor: "#86EFAC" }}
              >
                <div className="text-3xl flex-shrink-0">💡</div>
                <div>
                  <p className="text-sm font-bold text-green-800 mb-0.5">Quick Rule to Remember</p>
                  <p className="text-sm text-green-700 leading-relaxed">
                    White always moves first. The goal is <strong>checkmate</strong> — trap your opponent's King so it has no escape.
                    The board has 64 squares and each piece has a unique role. Learn them all and strategy becomes natural.
                  </p>
                </div>
              </div>
            </FadeSection>
          </div>
        </section>

        {/* ══════════════════════════════════════
            POWER OF CHESS
        ══════════════════════════════════════ */}
        <section className="px-5 py-16" style={{ background: "#FAFAF7" }}>
          <div className="max-w-5xl mx-auto">
            <FadeSection className="text-center mb-10">
              <SectionLabel>Why Chess?</SectionLabel>
              <h2 className="display-font text-4xl font-bold text-gray-900 mb-2">The Power of Chess</h2>
              <p className="text-gray-400 text-sm">It's not just a game — it's brain training</p>
            </FadeSection>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {benefits.map((b, i) => (
                <FadeSection key={i} delay={i * 100}>
                  <div className="bg-white rounded-3xl p-6 border border-gray-100 hover:shadow-md transition-shadow duration-300 h-full" style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}>
                    <div className="text-3xl mb-4">{b.icon}</div>
                    <h3 className="text-base font-bold text-gray-900 mb-2">{b.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{b.desc}</p>
                  </div>
                </FadeSection>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            METHODOLOGY
        ══════════════════════════════════════ */}
        <section className="px-5 py-16" style={{ background: "#F5F3EE" }}>
          <div className="max-w-5xl mx-auto">
            <FadeSection className="text-center mb-10">
              <SectionLabel>Our Approach</SectionLabel>
              <h2 className="display-font text-4xl font-bold text-gray-900 mb-2">Training Methodology</h2>
              <p className="text-gray-400 text-sm">Systems designed to build lasting skill, not just short-term tricks</p>
            </FadeSection>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {methodology.map((m, i) => (
                <FadeSection key={i} delay={i * 100}>
                  <div className="bg-white rounded-3xl p-6 border border-gray-100 hover:shadow-md transition-shadow duration-300 h-full" style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}>
                    <span className="display-font text-4xl font-bold" style={{ color: "#D1FAE5" }}>{m.num}</span>
                    <h3 className="text-base font-bold text-gray-900 mt-2 mb-2">{m.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{m.desc}</p>
                  </div>
                </FadeSection>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            LEARNING ROADMAP
        ══════════════════════════════════════ */}
        <section className="px-5 py-16" style={{ background: "#FAFAF7" }}>
          <div className="max-w-3xl mx-auto">
            <FadeSection className="text-center mb-10">
              <SectionLabel>Your Journey</SectionLabel>
              <h2 className="display-font text-4xl font-bold text-gray-900 mb-2">Your Learning Path</h2>
              <p className="text-gray-400 text-sm">Every grandmaster started exactly where you are</p>
            </FadeSection>
            <FadeSection delay={100}>
              <div className="bg-white rounded-3xl p-8 border border-gray-100" style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.06)" }}>
                <Roadmap />
              </div>
            </FadeSection>
          </div>
        </section>

        {/* ══════════════════════════════════════
            COURSES
        ══════════════════════════════════════ */}
        <section className="px-5 py-16" style={{ background: "#F5F3EE" }} id="courses">
          <div className="max-w-5xl mx-auto">
            <FadeSection className="text-center mb-10">
              <SectionLabel>Enrol Now</SectionLabel>
              <h2 className="display-font text-4xl font-bold text-gray-900 mb-2">Choose Your Course</h2>
              <p className="text-gray-400 text-sm">From complete beginner to tournament champion — we have a batch for every level</p>
            </FadeSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {courses.map((c, i) => (
                <FadeSection key={c.id} delay={i * 80} className="flex flex-col">
                  <CourseCard course={c} onClick={() => setSelectedCourse(c)} />
                </FadeSection>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            CTA
        ══════════════════════════════════════ */}
        <section className="px-5 py-14">
          <FadeSection>
            <div className="max-w-2xl mx-auto">
              <div
                className="rounded-3xl px-7 py-12 text-center relative overflow-hidden"
                style={{ background: "#14532D", boxShadow: "0 8px 40px rgba(20,83,45,0.3)" }}
              >
                <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "22px 22px" }} />
                <div className="relative">
                  <p className="text-3xl mb-3">♟️</p>
                  <h2 className="display-font text-3xl sm:text-4xl font-bold text-white mb-3 leading-snug">
                    Not sure which level to join?
                  </h2>
                  <p className="text-green-200 text-sm mb-7 max-w-sm mx-auto leading-relaxed">
                    Book a free 15-minute demo call with Coach Pravin and we'll find the perfect batch for your child.
                  </p>
                  <a
                    href="https://wa.me/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 bg-white text-green-800 font-bold text-sm px-7 py-3.5 rounded-2xl hover:bg-green-50 transition-colors duration-200 active:scale-95"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="#16A34A">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.558 4.116 1.535 5.845L.057 23.928a.75.75 0 00.915.915l6.083-1.478A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.75 9.75 0 01-4.97-1.364l-.356-.213-3.694.897.91-3.594-.232-.369A9.75 9.75 0 112.25 12 9.76 9.76 0 0112 21.75z"/>
                    </svg>
                    Book a Free Demo Call
                  </a>
                </div>
              </div>
            </div>
          </FadeSection>
        </section>

      </div>

      {selectedCourse && (
        <Modal course={selectedCourse} onClose={() => setSelectedCourse(null)} />
      )}
    </>
  );
}