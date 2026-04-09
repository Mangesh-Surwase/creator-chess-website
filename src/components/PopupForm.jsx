import React, { useState } from "react";

const PopupForm = ({ close, type: initialType }) => {
  const [type, setType] = useState(initialType || "enroll");
  const [formData, setFormData] = useState({
    parent_name: "", phone: "", email: "",
    kid_name: "", age: "", gender: "",
    program: "", school: "", address: "", message: "",
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const validate = () => {
    const newErrors = {};
    if (!formData.parent_name.trim()) newErrors.parent_name = "Parent name is required";
    if (!formData.phone.trim()) {
      newErrors.phone = "WhatsApp number is required";
    } else if (!/^[6-9]\d{9}$/.test(formData.phone.trim())) {
      newErrors.phone = "Enter a valid 10-digit Indian mobile number";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    const label = type === "enroll" ? "New Enrollment Request" : "New Demo Booking";
    const message = `♟ *${label}*\n\n👨 Parent: ${formData.parent_name}\n📞 Phone: ${formData.phone}\n📧 Email: ${formData.email || "—"}\n\n👦 Child: ${formData.kid_name || "—"}\n🎂 Age: ${formData.age || "—"}\n⚧ Gender: ${formData.gender || "—"}\n\n📚 Program: ${formData.program || "—"}\n🏫 School: ${formData.school || "—"}\n📍 Address: ${formData.address || "—"}\n\n📝 Message: ${formData.message || "—"}`;
    const url = `https://wa.me/919028447116?text=${encodeURIComponent(message)}`;
    setSuccess(true);
    setTimeout(() => { window.open(url, "_blank"); close(); }, 1600);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center px-3 py-6 overflow-y-auto"
      style={{ background: "rgba(0,0,0,0.55)", backdropFilter: "blur(4px)" }}
    >
      <div
        className="w-full rounded-2xl overflow-hidden shadow-2xl"
        style={{
          maxWidth: 680,
          background: "#fff",
          animation: "slideInUp 0.35s cubic-bezier(0.34,1.56,0.64,1)",
        }}
      >
        {/* ── Header ── */}
        <div
          className="relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg,#1a3a2a 0%,#1a5c36 60%,#2d7a52 100%)",
            padding: "20px 24px",
          }}
        >
          {/* decorative circles */}
          <div style={{ position:"absolute",top:-30,right:-30,width:120,height:120,borderRadius:"50%",background:"rgba(200,168,75,0.12)" }} />
          <div style={{ position:"absolute",bottom:-20,right:60,width:80,height:80,borderRadius:"50%",background:"rgba(200,168,75,0.08)" }} />

          <div className="flex justify-between items-start relative">
            <div>
              <div
                className="inline-flex items-center gap-1 mb-2"
                style={{
                  background: "rgba(200,168,75,0.2)",
                  border: "1px solid rgba(200,168,75,0.4)",
                  color: "#e8c96a", fontSize: 11, fontWeight: 500,
                  padding: "4px 10px", borderRadius: 20, letterSpacing: "0.5px",
                }}
              >
                <span>♟</span> Chess Academy
              </div>
              <h2 className="text-white font-medium text-xl mb-1">
                {type === "enroll" ? "Enroll Your Child" : "Book a Free Demo"}
              </h2>
              <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 13 }}>
                {type === "enroll"
                  ? "Fill in the details and we'll get back to you on WhatsApp"
                  : "Schedule a free demo class — no commitment required"}
              </p>
            </div>
            <button
              onClick={close}
              className="flex items-center justify-center"
              style={{
                background: "rgba(255,255,255,0.1)", border: "none",
                color: "rgba(255,255,255,0.8)", width: 32, height: 32,
                borderRadius: "50%", cursor: "pointer", fontSize: 15, flexShrink: 0,
                marginTop: 2, transition: "background 0.2s",
              }}
              onMouseEnter={e => e.target.style.background = "rgba(255,255,255,0.25)"}
              onMouseLeave={e => e.target.style.background = "rgba(255,255,255,0.1)"}
            >
              ✕
            </button>
          </div>

          {/* Tabs */}
          <div
            className="flex mt-3"
            style={{ background: "rgba(255,255,255,0.1)", borderRadius: 10, padding: 3 }}
          >
            {["enroll", "demo"].map((t) => (
              <button
                key={t}
                onClick={() => setType(t)}
                className="flex-1"
                style={{
                  padding: "8px 12px", border: "none", borderRadius: 8, cursor: "pointer",
                  fontSize: 13, fontWeight: 500, transition: "all 0.25s",
                  background: type === t ? "#fff" : "transparent",
                  color: type === t ? "#1a3a2a" : "rgba(255,255,255,0.6)",
                  boxShadow: type === t ? "0 2px 8px rgba(0,0,0,0.15)" : "none",
                }}
              >
                {t === "enroll" ? "Enroll Now" : "Book Free Demo"}
              </button>
            ))}
          </div>
        </div>

        {/* ── Body ── */}
        {success ? (
          <div className="text-center py-10 px-6" style={{ animation: "fadeInUp 0.4s ease" }}>
            <div
              className="mx-auto mb-5 flex items-center justify-center"
              style={{ width: 72, height: 72, borderRadius: "50%", background: "#e8f5ee" }}
            >
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                <circle cx="18" cy="18" r="17" stroke="#1a7a4a" strokeWidth="1.5" opacity="0.3" />
                <polyline
                  points="10,19 15,24 26,13"
                  stroke="#1a7a4a" strokeWidth="2.5" strokeLinecap="round"
                  strokeLinejoin="round" fill="none"
                  style={{ strokeDasharray: 100, strokeDashoffset: 100, animation: "checkmark 0.5s ease 0.2s forwards" }}
                />
              </svg>
            </div>
            <h3 style={{ fontSize: 20, fontWeight: 500, color: "#1a7a4a", marginBottom: 8 }}>
              Request Sent!
            </h3>
            <p style={{ fontSize: 14, color: "#666", lineHeight: 1.6 }}>
              <strong>{type === "enroll" ? "Enrollment request" : "Demo booking"}</strong> submitted.<br />
              Redirecting you to WhatsApp to confirm...
            </p>
            <div
              className="mx-auto mt-5"
              style={{ maxWidth: 200, height: 4, borderRadius: 2, background: "#e5e5e5", overflow: "hidden" }}
            >
              <div style={{ height: "100%", background: "#1a7a4a", borderRadius: 2, animation: "fillBar 1.5s linear forwards" }} />
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ padding: "20px 24px 24px" }}>
            {/* Parent Details */}
            <SectionLabel>Parent details</SectionLabel>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
              <Field label="Parent name" required error={errors.parent_name}>
                <input name="parent_name" placeholder="e.g. Rajesh Sharma" onChange={handleChange} className={fieldClass(errors.parent_name)} />
              </Field>
              <Field label="WhatsApp number" required error={errors.phone}>
                <input name="phone" placeholder="10-digit mobile number" onChange={handleChange} className={fieldClass(errors.phone)} />
              </Field>
              <div className="md:col-span-2">
                <Field label="Email address">
                  <input name="email" type="email" placeholder="optional" onChange={handleChange} className={fieldClass()} />
                </Field>
              </div>
            </div>

            {/* Child Details */}
            <SectionLabel>Child details</SectionLabel>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
              <Field label="Child's name"><input name="kid_name" placeholder="e.g. Arjun" onChange={handleChange} className={fieldClass()} /></Field>
              <Field label="Age"><input name="age" type="number" placeholder="e.g. 10" min="4" max="18" onChange={handleChange} className={fieldClass()} /></Field>
              <Field label="Gender">
                <select name="gender" onChange={handleChange} className={fieldClass()}>
                  <option value="">Select gender</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </Field>
              <Field label="School name"><input name="school" placeholder="e.g. DPS Nagpur" onChange={handleChange} className={fieldClass()} /></Field>
            </div>

            {/* Program */}
            <SectionLabel>Program &amp; details</SectionLabel>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
              <Field label="Select program">
                <select name="program" onChange={handleChange} className={fieldClass()}>
                  <option value="">Choose level</option>
                  <option>Beginner</option>
                  <option>Intermediate</option>
                  <option>Advanced</option>
                </select>
              </Field>
              <Field label="Address"><input name="address" placeholder="City / Area" onChange={handleChange} className={fieldClass()} /></Field>
              <div className="md:col-span-2">
                <Field label="Message (optional)">
                  <textarea name="message" placeholder="Any questions or special requirements..." onChange={handleChange} className={fieldClass()} style={{ minHeight: 70, resize: "vertical" }} />
                </Field>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col-reverse md:flex-row justify-end gap-3 pt-4 border-t border-gray-100">
              <button
                type="button"
                onClick={close}
                className="px-5 py-2 rounded-xl text-sm border border-gray-200 bg-gray-50 text-gray-600 hover:bg-gray-100 transition-all"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex items-center justify-center gap-2 px-6 py-2 rounded-xl text-sm font-medium text-white transition-all"
                style={{ background: "linear-gradient(135deg,#1a7a4a,#1a5c36)" }}
              >
                <WhatsAppIcon />
                {type === "enroll" ? "Send via WhatsApp" : "Book Demo on WhatsApp"}
              </button>
            </div>
          </form>
        )}
      </div>

      {/* Global keyframes */}
      <style>{`
        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(24px) scale(0.98); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes checkmark {
          to { stroke-dashoffset: 0; }
        }
        @keyframes fillBar {
          from { width: 0; }
          to   { width: 100%; }
        }
      `}</style>
    </div>
  );
};

/* ── Helpers ── */
const fieldClass = (err) =>
  `w-full px-3 py-2.5 text-sm rounded-xl border transition-all outline-none ${
    err
      ? "border-red-400 bg-red-50 focus:ring-2 focus:ring-red-100"
      : "border-gray-200 bg-gray-50 focus:border-green-600 focus:bg-white focus:ring-2 focus:ring-green-100"
  }`;

const Field = ({ label, required, error, children }) => (
  <div className="flex flex-col gap-1">
    <label className="text-xs font-medium text-gray-500">
      {label} {required && <span className="text-red-400">*</span>}
    </label>
    {children}
    {error && <span className="text-red-500 text-xs">{error}</span>}
  </div>
);

const SectionLabel = ({ children }) => (
  <div className="flex items-center gap-2 mb-3">
    <span className="text-xs font-medium text-gray-400 uppercase tracking-widest whitespace-nowrap">
      {children}
    </span>
    <div className="flex-1 h-px bg-gray-100" />
  </div>
);

const WhatsAppIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12.003 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.988-1.318A9.956 9.956 0 0012.003 22C17.523 22 17.523 17.523 22 12c0-5.523-4.477-10-9.997-10zm0 18.182a8.182 8.182 0 01-4.206-1.161l-.3-.179-3.117.824.833-3.057-.196-.314A8.182 8.182 0 1112.003 20.182z"/>
  </svg>
);

export default PopupForm;