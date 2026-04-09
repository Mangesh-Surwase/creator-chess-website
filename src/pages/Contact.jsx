import { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import facebookIcon from "../assets/facebook.png";
import instagramIcon from "../assets/instagram.jpg";
import bcBg from "../assets/bc.png";

/* ─────────────────────────────────────────────
   Injected CSS — Light Beige / Green-400/600 theme
───────────────────────────────────────────── */
const STYLES = `
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;700;900&family=Nunito:wght@300;400;500;600;700&display=swap');

:root {
  --beige:        #f7f3ec;
  --beige-2:      #efe9df;
  --white:        #ffffff;
  --green-400:    #4ade80;
  --green-500:    #22c55e;
  --green-600:    #16a34a;
  --green-700:    #15803d;
  --green-light:  #dcfce7;
  --green-pale:   #f0fdf4;
  --text-dark:    #1a2e1a;
  --text-mid:     #3d5c3d;
  --text-muted:   #6b7f6b;
  --border:       rgba(22,163,74,0.18);
  --border-soft:  rgba(22,163,74,0.10);
  --shadow-sm:    0 2px 12px rgba(22,163,74,0.08);
  --shadow-md:    0 8px 32px rgba(22,163,74,0.13);
  --shadow-lg:    0 20px 56px rgba(0,0,0,0.10);
  --radius:       16px;
  --radius-sm:    10px;
  --font-head:    'Playfair Display', Georgia, serif;
  --font-body:    'Nunito', sans-serif;
}

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }

/* ── Scroll-reveal ── */
.cca-reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.62s cubic-bezier(0.22,1,0.36,1),
              transform 0.62s cubic-bezier(0.22,1,0.36,1);
}
.cca-reveal.from-left  { transform: translateX(-42px); }
.cca-reveal.from-right { transform: translateX(42px);  }
.cca-reveal.visible    { opacity: 1; transform: translate(0,0); }
.cca-d1 { transition-delay: 0.08s !important; }
.cca-d2 { transition-delay: 0.16s !important; }
.cca-d3 { transition-delay: 0.24s !important; }
.cca-d4 { transition-delay: 0.32s !important; }
.cca-d5 { transition-delay: 0.40s !important; }

/* ── Page root ── */
.cca-page {
  font-family: var(--font-body);
  background: var(--beige);
  color: var(--text-dark);
  min-height: 100vh;
  overflow-x: hidden;
}

/* ═══════════ HERO ═══════════ */
.cca-hero {
  position: relative;
  min-height: 460px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 110px 24px 72px;   /* 110px top = clears fixed navbar */
  overflow: hidden;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}
.cca-hero-overlay {
  position: absolute; inset: 0;
  background: linear-gradient(
    155deg,
    rgba(240,253,244,0.93) 0%,
    rgba(247,243,236,0.90) 45%,
    rgba(220,252,231,0.88) 100%
  );
}
.cca-hero > * { position: relative; z-index: 1; }

.cca-hero-logo {
  width: 96px; height: 96px;
  object-fit: contain;
  border-radius: 50%;
  border: 3px solid var(--green-500);
  box-shadow: 0 0 0 6px rgba(34,197,94,0.14), var(--shadow-md);
  margin-bottom: 20px;
  animation: ccaLogoBob 3.5s ease-in-out infinite;
}
@keyframes ccaLogoBob {
  0%,100% { transform: translateY(0);    box-shadow: 0 0 0 6px rgba(34,197,94,0.14), var(--shadow-md); }
  50%      { transform: translateY(-6px); box-shadow: 0 0 0 10px rgba(34,197,94,0.20), 0 16px 40px rgba(22,163,74,0.20); }
}
.cca-hero-eyebrow {
  font-size: 0.70rem; font-weight: 800;
  letter-spacing: 0.28em; text-transform: uppercase;
  color: var(--green-600); margin-bottom: 10px;
}
.cca-hero-title {
  font-family: var(--font-head);
  font-size: clamp(2.1rem, 5.5vw, 3.6rem);
  font-weight: 900; color: var(--text-dark);
  line-height: 1.1; letter-spacing: -0.01em; margin-bottom: 14px;
}
.cca-hero-title span { color: var(--green-600); }
.cca-hero-sub {
  font-size: 0.98rem; color: var(--text-muted);
  max-width: 450px; line-height: 1.75; margin: 0 auto 26px;
}
.cca-rating-badge {
  display: inline-flex; align-items: center; gap: 10px;
  background: var(--white); border: 1px solid var(--border);
  border-radius: 100px; padding: 10px 22px; box-shadow: var(--shadow-sm);
}
.cca-stars { color: #f59e0b; font-size: 0.93rem; letter-spacing: 2px; }
.cca-rating-text { font-size: 0.80rem; color: var(--text-mid); font-weight: 600; }
.cca-rating-text strong { color: var(--green-700); }

/* ═══════════ SECTION SHARED ═══════════ */
.cca-section {
  max-width: 1160px; margin: 0 auto; padding: 68px 24px;
}
.cca-section-label {
  font-size: 0.67rem; font-weight: 800;
  letter-spacing: 0.30em; text-transform: uppercase;
  color: var(--green-600); margin-bottom: 8px;
}
.cca-section-title {
  font-family: var(--font-head);
  font-size: clamp(1.65rem, 3.5vw, 2.35rem);
  font-weight: 700; color: var(--text-dark);
  line-height: 1.2; margin-bottom: 10px;
}
.cca-section-title span { color: var(--green-600); }
.cca-divider {
  width: 48px; height: 3px;
  background: linear-gradient(90deg, var(--green-600), var(--green-400));
  border-radius: 2px; margin-bottom: 34px;
}

/* ═══════════ INFO CARDS ═══════════ */
.cca-info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(218px,1fr));
  gap: 16px;
}
.cca-info-card {
  background: var(--white);
  border: 1px solid var(--border-soft);
  border-radius: var(--radius);
  padding: 24px 20px;
  display: flex; flex-direction: column; gap: 9px;
  box-shadow: var(--shadow-sm);
  transition: transform 0.26s ease, box-shadow 0.26s ease, border-color 0.26s ease;
}
.cca-info-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
  border-color: rgba(34,197,94,0.35);
}
.cca-info-icon {
  width: 44px; height: 44px;
  background: var(--green-pale); border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  display: flex; align-items: center; justify-content: center; font-size: 1.2rem;
}
.cca-info-label {
  font-size: 0.63rem; font-weight: 800;
  letter-spacing: 0.20em; text-transform: uppercase; color: var(--green-600);
}
.cca-info-value {
  font-size: 0.90rem; color: var(--text-mid); line-height: 1.55; white-space: pre-line;
}
.cca-info-value a { color: var(--text-mid); text-decoration: none; }
.cca-info-value a:hover { color: var(--green-700); text-decoration: underline; }

/* ═══════════ TWO-COL ═══════════ */
.cca-two-col {
  display: grid; grid-template-columns: 1fr 1fr; gap: 34px; align-items: start;
}
@media (max-width: 860px) { .cca-two-col { grid-template-columns: 1fr; } }

/* ═══════════ FORM ═══════════ */
.cca-form-card {
  background: var(--white);
  border: 1px solid var(--border-soft);
  border-radius: 20px; padding: 36px 32px;
  box-shadow: var(--shadow-lg);
}
.cca-form-title {
  font-family: var(--font-head); font-size: 1.42rem;
  font-weight: 700; color: var(--text-dark); margin-bottom: 5px;
}
.cca-form-sub {
  font-size: 0.86rem; color: var(--text-muted); margin-bottom: 24px; line-height: 1.65;
}
.cca-form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 13px; }
@media (max-width: 520px) { .cca-form-row { grid-template-columns: 1fr; } }
.cca-form-group { display: flex; flex-direction: column; gap: 6px; margin-bottom: 13px; }
.cca-form-group label {
  font-size: 0.68rem; font-weight: 800;
  letter-spacing: 0.10em; text-transform: uppercase; color: var(--text-muted);
}
.cca-form-group input,
.cca-form-group select,
.cca-form-group textarea {
  background: var(--beige);
  border: 1.5px solid rgba(22,163,74,0.15);
  border-radius: var(--radius-sm);
  padding: 11px 14px;
  font-family: var(--font-body); font-size: 0.92rem; color: var(--text-dark);
  transition: border-color 0.2s, box-shadow 0.2s, background 0.2s;
  outline: none; -webkit-appearance: none;
}
.cca-form-group select option { background: var(--white); }
.cca-form-group input:focus,
.cca-form-group select:focus,
.cca-form-group textarea:focus {
  border-color: var(--green-500);
  background: var(--white);
  box-shadow: 0 0 0 3px rgba(34,197,94,0.13);
}
.cca-form-group input::placeholder,
.cca-form-group textarea::placeholder { color: #b0bdb0; }
.cca-form-group textarea { resize: vertical; min-height: 100px; }

.cca-btn {
  width: 100%; padding: 14px 24px;
  background: linear-gradient(135deg, var(--green-700) 0%, var(--green-500) 100%);
  color: var(--white); font-family: var(--font-body);
  font-size: 0.96rem; font-weight: 700; letter-spacing: 0.02em;
  border: none; border-radius: var(--radius-sm); cursor: pointer;
  display: flex; align-items: center; justify-content: center; gap: 8px;
  transition: transform 0.2s, box-shadow 0.2s, filter 0.2s;
  box-shadow: 0 6px 20px rgba(22,163,74,0.30); margin-top: 6px;
}
.cca-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 28px rgba(22,163,74,0.38);
  filter: brightness(1.06);
}
.cca-btn:active { transform: translateY(0); }
.cca-form-note {
  text-align: center; font-size: 0.74rem; color: var(--text-muted); margin-top: 11px;
}

/* ═══════════ MAP ═══════════ */
.cca-map-desc { font-size: 0.88rem; color: var(--text-muted); line-height: 1.7; margin-bottom: 20px; }
.cca-map-wrap {
  border-radius: var(--radius); overflow: hidden;
  border: 1px solid var(--border); box-shadow: var(--shadow-md);
}
.cca-map-wrap iframe { width: 100%; height: 390px; display: block; }
.cca-map-footer {
  background: var(--green-pale); padding: 13px 18px;
  display: flex; align-items: center; gap: 8px;
  border-top: 1px solid var(--border);
}
.cca-map-footer-text { font-size: 0.81rem; color: var(--text-mid); }
.cca-map-footer-text strong { color: var(--green-700); }

/* ═══════════ SOCIAL PROOF BAND ═══════════ */
.cca-proof-band { background: var(--white); border-top: 1px solid var(--border-soft); border-bottom: 1px solid var(--border-soft); }
.cca-proof-inner {
  max-width: 1160px; margin: 0 auto; padding: 52px 24px;
  display: flex; flex-direction: column; align-items: center; gap: 28px; text-align: center;
}
.cca-proof-title { font-family: var(--font-head); font-size: 1.5rem; font-weight: 700; color: var(--text-dark); }
.cca-proof-title span { color: var(--green-600); }
.cca-proof-sub { font-size: 0.87rem; color: var(--text-muted); max-width: 380px; line-height: 1.7; }
.cca-social-links { display: flex; gap: 14px; flex-wrap: wrap; justify-content: center; }
.cca-social-btn {
  display: inline-flex; align-items: center; gap: 8px;
  background: var(--beige); border: 1.5px solid var(--border);
  border-radius: 50px; padding: 10px 20px;
  color: var(--text-dark); text-decoration: none;
  font-size: 0.87rem; font-weight: 700;
  transition: transform 0.22s, box-shadow 0.22s, border-color 0.22s, background 0.22s;
}
.cca-social-btn:hover {
  transform: translateY(-3px); background: var(--white);
  border-color: rgba(34,197,94,0.4); box-shadow: var(--shadow-md);
}
.cca-social-btn img { width: 22px; height: 22px; object-fit: cover; border-radius: 5px; }
.cca-stats-row { display: flex; gap: 32px; flex-wrap: wrap; justify-content: center; }
.cca-stat { text-align: center; }
.cca-stat-num {
  font-family: var(--font-head); font-size: 1.65rem;
  font-weight: 700; color: var(--green-600); line-height: 1;
}
.cca-stat-label { font-size: 0.73rem; color: var(--text-muted); margin-top: 4px; font-weight: 600; }

/* ═══════════ SOCIAL FLOAT STACK ═══════════ */
/* Sits directly above the global WhatsApp FAB (assumed ~68px at bottom-right) */
.cca-social-stack {
  position: fixed;
  bottom: 88px;   /* adjust if your WhatsApp FAB height differs */
  right: 20px;
  display: flex; flex-direction: column; gap: 9px;
  z-index: 7800;
}
.cca-social-fab {
  width: 44px; height: 44px;
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  box-shadow: 0 4px 14px rgba(0,0,0,0.16);
  transition: transform 0.22s, box-shadow 0.22s;
  overflow: hidden;
  border: 2.5px solid rgba(255,255,255,0.75);
  text-decoration: none;
}
.cca-social-fab:hover { transform: scale(1.13); box-shadow: 0 6px 20px rgba(0,0,0,0.22); }
.cca-social-fab img { width: 100%; height: 100%; object-fit: cover; }
.cca-social-fab.fb {
  background: #1877f2;
  display: flex; align-items: center; justify-content: center;
}
.cca-social-fab.fb img { width: 58%; height: 58%; object-fit: contain; }

/* ═══════════ TOAST ═══════════ */
.cca-toast {
  position: fixed; bottom: 88px; left: 50%; transform: translateX(-50%);
  background: var(--white); border: 1.5px solid var(--green-500);
  color: var(--green-700); font-family: var(--font-body);
  font-weight: 700; font-size: 0.87rem;
  padding: 12px 22px; border-radius: 50px;
  box-shadow: var(--shadow-md); z-index: 9999; white-space: nowrap;
  animation: ccaToast 0.38s cubic-bezier(0.16,1,0.3,1) forwards;
}
@keyframes ccaToast {
  from { opacity: 0; transform: translateX(-50%) translateY(14px) scale(0.95); }
  to   { opacity: 1; transform: translateX(-50%) translateY(0) scale(1); }
}

@media (max-width: 640px) {
  .cca-form-card { padding: 24px 18px; }
  .cca-social-stack { bottom: 80px; right: 14px; }
}
`;

/* ─── Scroll-reveal hook ─── */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".cca-reveal");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.10 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/* ─── Main Component ─── */
export default function Contact() {
  useReveal();

  const [form, setForm] = useState({ name: "", phone: "", age: "", course: "", message: "" });
  const [toast, setToast] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Hi Creator Chess Academy! ♟\n\nName: ${form.name}\nPhone: ${form.phone}\nAge of Student: ${form.age}\nCourse Interest: ${form.course}\n\n${form.message || "I'd like to book a free demo class."}`
    );
    window.open(`https://wa.me/919028447116?text=${msg}`, "_blank");
    setToast(true);
    setTimeout(() => setToast(false), 3200);
    setForm({ name: "", phone: "", age: "", course: "", message: "" });
  };

  useEffect(() => {
    if (!document.getElementById("cca-v2-styles")) {
      const tag = document.createElement("style");
      tag.id = "cca-v2-styles";
      tag.textContent = STYLES;
      document.head.appendChild(tag);
    }
  }, []);

  const infoCards = [
    { icon: "📞", label: "Phone / WhatsApp", value: "090284 47116",                         href: "tel:+919028447116" },
    { icon: "📍", label: "Address",          value: "Ravet, Pimpri-Chinchwad,\nMaharashtra 412101", href: null },
    { icon: "✉️", label: "Email",            value: "creatorchessacademy@gmail.com",         href: "mailto:creatorchessacademy@gmail.com" },
    { icon: "🕐", label: "Operating Hours",  value: "Open 24 Hours\nAvailable Anytime",      href: null },
  ];

  const stats = [
    { num: "5.0★", label: "Google Rating" },
    { num: "60+",  label: "Reviews" },
    { num: "2000+", label: "Students Trained" },
    { num: "10+",  label: "Tournament Winners" },
  ];

  return (
    <div className="cca-page">

      {/* ── Hero ── */}
      <section
        className="cca-hero"
        style={{ backgroundImage: `url(${bcBg})` }}
      >
        <div className="cca-hero-overlay" />

        <img
          src={logo}
          alt="Creator Chess Academy Logo"
          className="cca-hero-logo cca-reveal"
        />
        <p className="cca-hero-eyebrow cca-reveal cca-d1">Creator Chess Academy · Ravet</p>
        <h1 className="cca-hero-title cca-reveal cca-d2">
          Let's <span>Connect</span>
        </h1>
        <p className="cca-hero-sub cca-reveal cca-d3">
          Book a free demo class for your child or yourself — we coach kids aged 4–15 &amp; adults of all levels.
        </p>
        <div className="cca-rating-badge cca-reveal cca-d4">
          <span className="cca-stars">★★★★★</span>
          <span className="cca-rating-text">
            <strong>5.0 Rating</strong> · 60+ Google Reviews
          </span>
        </div>
      </section>

      {/* ── Contact Information ── */}
      <div style={{ background: "var(--beige)" }}>
        <div className="cca-section" style={{ paddingBottom: "48px" }}>
          <p className="cca-section-label cca-reveal">Reach Us</p>
          <h2 className="cca-section-title cca-reveal cca-d1">Contact <span>Information</span></h2>
          <div className="cca-divider cca-reveal cca-d2" />
          <div className="cca-info-grid">
            {infoCards.map((c, i) => (
              <div className={`cca-info-card cca-reveal cca-d${i + 1}`} key={c.label}>
                <div className="cca-info-icon">{c.icon}</div>
                <div className="cca-info-label">{c.label}</div>
                <div className="cca-info-value">
                  {c.href ? <a href={c.href}>{c.value}</a> : c.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Inquiry Form + Map ── */}
      <div style={{ background: "var(--beige-2)" }}>
        <div className="cca-section">
          <div className="cca-two-col">

            {/* Form */}
            <div className="cca-reveal from-left">
              <div className="cca-form-card">
                <h2 className="cca-form-title">♟ Book a Free Demo Class</h2>
                <p className="cca-form-sub">
                  Fill in your details — we'll confirm your slot on WhatsApp within hours.
                </p>
                <form onSubmit={handleSubmit}>
                  <div className="cca-form-row">
                    <div className="cca-form-group">
                      <label>Full Name *</label>
                      <input name="name" required value={form.name} onChange={handleChange} placeholder="Your name" />
                    </div>
                    <div className="cca-form-group">
                      <label>Phone Number *</label>
                      <input name="phone" required value={form.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX" type="tel" />
                    </div>
                  </div>
                  <div className="cca-form-row">
                    <div className="cca-form-group">
                      <label>Age of Student *</label>
                      <input name="age" required value={form.age} onChange={handleChange} placeholder="e.g. 8" type="number" min="4" max="99" />
                    </div>
                    <div className="cca-form-group">
                      <label>Interested Course *</label>
                      <select name="course" required value={form.course} onChange={handleChange}>
                        <option value="">Select a course…</option>
                        <option>Offline Classes – Beginner</option>
                        <option>Offline Classes – Intermediate</option>
                        <option>Offline Classes – Advanced</option>
                        <option>Online Masterclass – Beginner</option>
                        <option>Online Masterclass – Advanced</option>
                        <option>Tournament Player Batch</option>
                      </select>
                    </div>
                  </div>
                  <div className="cca-form-group">
                    <label>Message (Optional)</label>
                    <textarea
                      name="message" value={form.message} onChange={handleChange}
                      placeholder="Any questions or preferred schedule…"
                    />
                  </div>
                  <button type="submit" className="cca-btn">
                    📲 Book a Free Demo Class
                  </button>
                  <p className="cca-form-note">
                    Your inquiry will be sent directly via WhatsApp
                  </p>
                </form>
              </div>
            </div>

            {/* Map */}
            <div className="cca-reveal from-right">
              <p className="cca-section-label">Find Us</p>
              <h2 className="cca-section-title" style={{ marginBottom: "8px" }}>
                Our <span>Location</span>
              </h2>
              <p className="cca-map-desc">
                Conveniently located in Ravet — easy access from Wakad, Akurdi &amp; Pimpri-Chinchwad.
              </p>
              <div className="cca-map-wrap">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2842.4273646982524!2d73.74267504891533!3d18.658956615441202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b1c7bda4688b%3A0xb5560184569c91ed!2sCreator%20Chess%20Academy%20Chess%20Classes%20in%20Ravet!5e0!3m2!1sen!2sin!4v1775724797910!5m2!1sen!2sin"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Creator Chess Academy Map"
                />
                <div className="cca-map-footer">
                  <span>📍</span>
                  <span className="cca-map-footer-text">
                    <strong>Creator Chess Academy</strong> · Ravet, Pimpri-Chinchwad 412101
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ── Social Proof Band ── */}
      <div className="cca-proof-band">
        <div className="cca-proof-inner">
          <div className="cca-reveal">
            <h2 className="cca-proof-title">Follow Us on <span>Social Media</span></h2>
          </div>
          <p className="cca-proof-sub cca-reveal cca-d1">
            Chess tips, student achievements &amp; tournament updates
          </p>
          <div className="cca-social-links cca-reveal cca-d2">
            <a
              href="https://www.facebook.com/people/Creator-CHESS-Academy/61561075196020/"
              target="_blank" rel="noopener noreferrer"
              className="cca-social-btn"
            >
              <img src={facebookIcon} alt="Facebook" /> Facebook
            </a>
            <a
              href="https://www.instagram.com/creatorchessacademy/"
              target="_blank" rel="noopener noreferrer"
              className="cca-social-btn"
            >
              <img src={instagramIcon} alt="Instagram" /> Instagram
            </a>
          </div>
          <div className="cca-stats-row cca-reveal cca-d3">
            {stats.map((s) => (
              <div className="cca-stat" key={s.label}>
                <div className="cca-stat-num">{s.num}</div>
                <div className="cca-stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Social Float Stack (above global WhatsApp FAB) ── */}
      <div className="cca-social-stack">
        <a
          href="https://www.instagram.com/creatorchessacademy/"
          target="_blank" rel="noopener noreferrer"
          className="cca-social-fab"
          title="Instagram"
        >
          <img src={instagramIcon} alt="Instagram" />
        </a>
        <a
          href="https://www.facebook.com/people/Creator-CHESS-Academy/61561075196020/"
          target="_blank" rel="noopener noreferrer"
          className="cca-social-fab fb"
          title="Facebook"
        >
          <img src={facebookIcon} alt="Facebook" />
        </a>
      </div>

      {/* ── Toast notification ── */}
      {toast && <div className="cca-toast">✅ Opening WhatsApp…</div>}
    </div>
  );
}
