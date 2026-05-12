import Navbar from "../components/Navbar";
//import Footer from "../components/Footer";

const sections = [
  {
    id: "introduction",
    icon: "♟️",
    title: "Introduction",
    content: `Creator CHESS Academy ("we," "our," or "us") is committed to protecting the privacy and personal data of our students, parents, and website visitors. This Privacy Policy explains how we collect, use, store, and safeguard information when you interact with our website, enroll in our chess coaching programs, or communicate with us.

By using our website or enrolling in any of our online or offline chess classes, you consent to the practices described in this policy. We encourage you to read this document carefully to understand how your data is handled.`,
  },
  {
    id: "info-collect",
    icon: "📥",
    title: "Information We Collect",
    content: `We collect information in the following ways:

• Information you provide directly through registration forms, demo class bookings, or inquiry forms on our website.
• Information shared with us via WhatsApp, phone, or email when you contact us.
• Automatically collected data such as browser type, IP address, and pages visited when you use our website.
• Payment-related information when you enroll in our programs.

We collect only the information that is necessary to provide our chess coaching services effectively and safely.`,
  },
  {
    id: "personal-info",
    icon: "👤",
    title: "Personal Information",
    content: `Personal information we may collect includes:

• Full name of the student and parent/guardian
• Age and date of birth (especially for student safety and class grouping)
• Contact number and email address
• City or location (for batch scheduling purposes)
• Chess experience level or current rating (if applicable)
• Device and browser information for website analytics

This information is collected only for legitimate educational and operational purposes.`,
  },
  {
    id: "student-parent",
    icon: "👨‍👩‍👧",
    title: "Student & Parent Information",
    highlight: true,
    content: `Because many of our students are minors (children under 18), we place the highest importance on student and parent privacy:

• We collect parent or guardian contact details as the primary point of communication for students under 18.
• Student information is never shared with unauthorized third parties.
• We use student performance and progress data solely for internal coaching improvement and progress reporting to parents.
• Parents and guardians may contact us at any time to review or request deletion of their child's data.

The safety and privacy of our young learners is our top priority.`,
  },
  {
    id: "whatsapp",
    icon: "💬",
    title: "WhatsApp & Contact Information Usage",
    content: `Creator CHESS Academy uses WhatsApp as its primary communication platform. By enrolling or submitting your contact information, you agree to:

• Receive class schedules, batch updates, and homework assignments via WhatsApp.
• Receive important announcements, fee reminders, or event notifications through WhatsApp or phone.
• Be added to relevant academy WhatsApp groups for your enrolled batch.

We will not spam you with unsolicited promotional messages. All communications will be relevant to your enrollment or inquiry. You may opt out of WhatsApp groups at any time by informing the academy.`,
  },
  {
    id: "demo-booking",
    icon: "📅",
    title: "Demo Class Booking Data",
    content: `When you book a demo class through our website or via WhatsApp, we collect:

• Student's name and age
• Parent/guardian name and contact number
• Preferred class timing and format (online or offline)
• Chess experience level

This data is used exclusively to schedule and deliver your demo session and to follow up regarding enrollment. Demo booking data is not shared with any third parties or used for any commercial purpose beyond onboarding.`,
  },
  {
    id: "payment",
    icon: "💳",
    title: "Payment Information",
    highlight: true,
    content: `Creator CHESS Academy does not store sensitive financial information such as credit/debit card numbers, CVV codes, or banking credentials on our servers.

• Fee payments are collected via UPI, bank transfer, or other secure payment methods communicated at the time of enrollment.
• We may retain records of transaction amounts, dates, and references for accounting and fee tracking purposes.
• All payment transactions are the responsibility of the respective payment platform used.

We strongly advise against sharing sensitive financial credentials with anyone claiming to represent the academy via unofficial channels.`,
  },
  {
    id: "how-we-use",
    icon: "🔍",
    title: "How We Use Information",
    content: `The information we collect is used for the following purposes:

• To process enrollment and class registrations
• To communicate class schedules, updates, and assignments
• To track student progress and provide personalized coaching
• To respond to inquiries and demo booking requests
• To improve our website experience and content
• To send important academy announcements and event notifications
• To maintain internal records for operational purposes

We do not use your information for any purpose beyond what is outlined in this policy without your explicit consent.`,
  },
  {
    id: "communication",
    icon: "📢",
    title: "Communication Policy",
    content: `Creator CHESS Academy communicates with students and parents through the following channels:

• WhatsApp (primary channel for day-to-day communication)
• Email (for formal correspondence and enrollment documentation)
• Phone calls (for urgent matters or demo scheduling)

By providing your contact details, you agree to receive academy-related communications through these channels. We respect your time and limit communications to relevant, educational, and operational matters only.

You may request to be removed from communication lists at any time (subject to the condition that essential operational messages may still be sent during active enrollment).`,
  },
  {
    id: "cookies",
    icon: "🍪",
    title: "Cookies & Website Analytics",
    content: `Our website may use cookies and similar tracking technologies to enhance your browsing experience. These may include:

• Session cookies to maintain your preferences during a website visit
• Analytics tools (such as Google Analytics) to understand website traffic and usage patterns
• No personally identifiable information is transmitted through cookies

You may disable cookies through your browser settings; however, some features of the website may not function properly as a result. By continuing to use our website, you consent to our use of cookies as described in this policy.`,
  },
  {
    id: "third-party",
    icon: "🔗",
    title: "Third-Party Services",
    content: `We may use trusted third-party services to operate our academy, including:

• Video conferencing platforms (for online classes)
• Payment processing services (for fee collection)
• Google Analytics or similar tools (for website analytics)
• WhatsApp Business platform (for communication)

These third parties are obligated to handle your data responsibly and are not permitted to use your information for their own commercial purposes. We are not responsible for the privacy practices of external websites linked from our platform.`,
  },
  {
    id: "data-protection",
    icon: "🛡️",
    title: "Data Protection & Security",
    highlight: true,
    content: `We take the security of your personal data seriously and implement appropriate technical and organizational measures to protect it, including:

• Limiting access to personal data to authorized academy staff only
• Using secure communication channels for sensitive information
• Regularly reviewing our data handling practices

However, please note that no method of internet transmission or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.

If you suspect a data breach or misuse, please contact us immediately via WhatsApp or email.`,
  },
  {
    id: "childrens-privacy",
    icon: "🧒",
    title: "Children's Privacy",
    content: `Creator CHESS Academy serves a significant number of children and young learners. We are deeply committed to protecting their privacy:

• We do not knowingly collect personal information from children under 13 without verifiable parental consent.
• For students between 13–18, we require a parent or guardian to register on their behalf and act as the primary contact.
• We do not display student names, photos, or any identifying information publicly without explicit written consent from parents/guardians.
• Parents may review, update, or request deletion of their child's data at any time.

If you believe we have inadvertently collected information from a minor without consent, please contact us immediately and we will take prompt corrective action.`,
  },
  {
    id: "sharing",
    icon: "🚫",
    title: "Sharing of Information",
    content: `Creator CHESS Academy does not sell, rent, trade, or share your personal information with third parties for commercial purposes. We may share limited information only in the following situations:

• With trusted service providers who assist us in operating the academy (subject to strict confidentiality agreements)
• If required by law or legal proceedings
• To protect the rights, safety, or property of the academy, its staff, or students
• With the explicit consent of the individual (or parent/guardian for minors)

Your data stays within the academy ecosystem and is not monetized in any form.`,
  },
  {
    id: "user-rights",
    icon: "✅",
    title: "User Rights",
    content: `You (and parents/guardians on behalf of minors) have the following rights regarding your personal data:

• Right to Access: Request a copy of the personal information we hold about you.
• Right to Correction: Request correction of inaccurate or incomplete data.
• Right to Deletion: Request deletion of your personal data, subject to legal and operational requirements.
• Right to Withdraw Consent: Withdraw consent for communications or data usage at any time.
• Right to Object: Object to the use of your data for specific purposes.

To exercise any of these rights, please contact us via WhatsApp or email with your request. We will respond within a reasonable timeframe.`,
  },
  {
    id: "updates",
    icon: "🔄",
    title: "Updates to Privacy Policy",
    content: `Creator CHESS Academy reserves the right to update or revise this Privacy Policy at any time to reflect changes in our practices, legal requirements, or operational needs.

• All updates will be published on this page with a revised "Last Updated" date.
• Significant changes will be communicated via WhatsApp or email to enrolled students and parents.
• Continued use of our services after any updates constitutes acceptance of the revised Privacy Policy.

We encourage you to revisit this page periodically to stay informed about how we protect your information.`,
  },
  {
    id: "contact",
    icon: "📬",
    title: "Contact Information",
    content: `If you have any questions, concerns, or requests regarding this Privacy Policy or our data handling practices, please contact us:

Creator CHESS Academy
📱 WhatsApp: Available on our official academy number (shared at enrollment)
📧 Email: Reachable through the contact form on our website
🌐 Website: Refer to your enrollment documentation for official web address

We are committed to addressing your privacy concerns promptly and transparently. Your trust matters deeply to us, and we will always act in your best interest.`,
  },
];

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* ── Hero ── */}
      <section className="pt-[110px] relative overflow-hidden bg-gradient-to-br from-[#0a2218] via-[#0f3d25] to-[#14532d] min-h-[340px] flex items-center">
        {/* Chess-board tile overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `repeating-conic-gradient(#fff 0% 25%, transparent 0% 50%)`,
            backgroundSize: "52px 52px",
          }}
        />
        {/* Gradient vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />

        {/* Decorative chess glyphs */}
        <span className="absolute right-8 top-8 text-[140px] text-white opacity-[0.05] select-none leading-none">♛</span>
        <span className="absolute left-6 bottom-2 text-[100px] text-white opacity-[0.04] select-none leading-none">♝</span>

        <div className="relative z-10 w-full max-w-4xl mx-auto px-6 py-16 text-center">
          <div
            className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full border border-emerald-400/25 bg-emerald-900/30 text-emerald-300 text-xs font-bold tracking-widest uppercase"
            style={{ animation: "ppFadeDown 0.55s ease both" }}
          >
            <span>🔒</span> Legal Document
          </div>

          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-4 leading-tight"
            style={{ animation: "ppFadeUp 0.65s ease 0.08s both" }}
          >
            Privacy Policy{" "}
            <span className="inline-block" style={{ animation: "ppFloat 3.5s ease-in-out infinite" }}>
              🔒
            </span>
          </h1>

          <p
            className="text-emerald-200/75 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
            style={{ animation: "ppFadeUp 0.65s ease 0.16s both" }}
          >
            Your privacy and data protection are important to us.
          </p>

          <div
            className="mt-8 flex items-center justify-center gap-3 text-emerald-400/50 text-sm"
            style={{ animation: "ppFadeUp 0.65s ease 0.24s both" }}
          >
            <span className="w-10 h-px bg-emerald-500/30" />
            <span className="font-medium">Creator CHESS Academy · 2026</span>
            <span className="w-10 h-px bg-emerald-500/30" />
          </div>
        </div>
      </section>

      {/* ── Sticky jump bar (desktop) ── */}
      <div className="hidden lg:block sticky top-0 z-30 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-2.5 flex items-center gap-1 overflow-x-auto">
          <span className="shrink-0 text-xs font-bold text-emerald-700 mr-2 tracking-wide">
            Jump to:
          </span>
          {sections.slice(0, 8).map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="shrink-0 text-xs px-3 py-1 rounded-full text-gray-500 hover:bg-emerald-50 hover:text-emerald-700 transition-colors whitespace-nowrap"
            >
              {s.title}
            </a>
          ))}
          <span className="text-gray-300 text-xs mx-1 shrink-0">···</span>
        </div>
      </div>

      {/* ── Main Content ── */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-16">

        {/* Commitment Banner */}
        <div
          className="mb-10 rounded-2xl p-6 flex gap-4 items-start shadow-sm border border-emerald-100 bg-gradient-to-br from-emerald-50 to-white"
          style={{ animation: "ppFadeUp 0.5s ease 0.1s both" }}
        >
          <span className="text-3xl shrink-0 mt-0.5">🛡️</span>
          <div>
            <p className="font-bold text-emerald-800 mb-1 text-base">Our Privacy Commitment</p>
            <p className="text-emerald-700/80 text-sm leading-relaxed">
              We will never sell, rent, or trade your personal data. All information collected is used
              solely to deliver and improve our chess coaching services. This policy applies to all
              students, parents, and website visitors.
            </p>
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-5">
          {sections.map((section, index) => (
            <article
              key={section.id}
              id={section.id}
              className={`group rounded-2xl border overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 scroll-mt-20 ${
                section.highlight
                  ? "border-emerald-200 bg-gradient-to-br from-emerald-50/70 to-white"
                  : "border-gray-100 bg-white"
              }`}
              style={{ animation: `ppFadeUp 0.5s ease ${0.05 + index * 0.035}s both` }}
            >
              {/* Card Header */}
              <div
                className={`flex items-center gap-4 px-6 py-4 border-b ${
                  section.highlight
                    ? "border-emerald-100 bg-emerald-50/50"
                    : "border-gray-50 bg-gray-50/50"
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg shrink-0 ${
                    section.highlight
                      ? "bg-emerald-100 border border-emerald-200"
                      : "bg-white border border-gray-100 shadow-inner"
                  }`}
                >
                  {section.icon}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {section.highlight && (
                      <span className="text-[9px] font-extrabold tracking-widest uppercase px-2 py-0.5 rounded-full bg-emerald-600 text-white">
                        Important
                      </span>
                    )}
                  </div>
                  <h2 className="text-base md:text-lg font-bold text-gray-800 leading-snug">
                    {section.title}
                  </h2>
                </div>

                <span
                  className={`text-sm transition-transform duration-300 group-hover:translate-x-1 ${
                    section.highlight ? "text-emerald-500" : "text-gray-300"
                  }`}
                >
                  →
                </span>
              </div>

              {/* Card Body */}
              <div className="px-6 py-5">
                <ContentRenderer text={section.content} />
              </div>
            </article>
          ))}
        </div>

        {/* Divider */}
        <div className="my-12 flex items-center gap-4">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
          <span className="text-2xl opacity-30 select-none">♚</span>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
        </div>

        {/* Trust Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          {[
            { icon: "🚫", label: "No Data Selling", desc: "We never sell or trade your personal information." },
            { icon: "🔐", label: "Secure Storage", desc: "Data is handled with care and limited to authorized staff." },
            { icon: "👨‍👩‍👧", label: "Kids-Safe Policy", desc: "Special protections for all students under 18 years old." },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-xl border border-gray-100 bg-white p-5 text-center shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="text-3xl mb-3">{item.icon}</div>
              <p className="font-bold text-gray-800 text-sm mb-1">{item.label}</p>
              <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Closing Banner */}
        <div className="rounded-2xl bg-gradient-to-br from-[#0a2218] to-[#14532d] p-8 text-center shadow-xl">
          <div className="text-4xl mb-4">🔒</div>
          <h3 className="text-xl font-bold text-white mb-3">Your Trust, Our Responsibility</h3>
          <p className="text-emerald-200/75 text-sm leading-relaxed max-w-xl mx-auto">
            At Creator CHESS Academy, we believe trust is the foundation of every great partnership.
            Your privacy is not just a legal obligation — it's a core value. We are committed to
            transparency, safety, and responsible data stewardship.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 text-emerald-300/70 text-sm font-medium">
            <span>♟</span>
            <span>Learn freely. Stay secure. Trust Creator CHESS Academy.</span>
            <span>♟</span>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-10 text-center space-y-1">
          <p className="text-xs text-gray-400 tracking-wide">
            Last Updated:{" "}
            <span className="font-semibold text-gray-500">2026</span>
            &nbsp;·&nbsp; Creator CHESS Academy
            &nbsp;·&nbsp; All Rights Reserved
          </p>
          <p className="text-[11px] text-gray-300">
            This policy is effective as of January 1, 2026 and supersedes all previous versions.
          </p>
        </div>
      </main>

     

      {/* Global keyframes */}
      <style>{`
        @keyframes ppFadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes ppFadeDown {
          from { opacity: 0; transform: translateY(-10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes ppFloat {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50%       { transform: translateY(-7px) rotate(-5deg); }
        }
      `}</style>
    </div>
  );
}

/* ── Helper: renders section text with styled bullets and sub-headings ── */
function ContentRenderer({ text }) {
  const lines = text.split("\n");
  const elements = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();

    if (trimmed === "") {
      elements.push(<div key={i} className="mb-2" />);
    } else if (trimmed.startsWith("•")) {
      elements.push(
        <div key={i} className="flex gap-2.5 mb-2 items-start">
          <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
          <span className="text-gray-600 text-[15px] leading-relaxed">{trimmed.slice(1).trim()}</span>
        </div>
      );
    } else if (trimmed.endsWith(":") && trimmed.length < 50) {
      elements.push(
        <p key={i} className="font-semibold text-gray-800 text-[15px] mt-4 mb-2">
          {trimmed}
        </p>
      );
    } else if (trimmed.startsWith("•")) {
      elements.push(
        <div key={i} className="flex gap-2.5 mb-2 items-start">
          <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
          <span className="text-gray-600 text-[15px] leading-relaxed">{trimmed.slice(1).trim()}</span>
        </div>
      );
    } else {
      elements.push(
        <p key={i} className="text-gray-600 text-[15px] leading-[1.85] mb-3">
          {line}
        </p>
      );
    }
    i++;
  }

  return <div>{elements}</div>;
}