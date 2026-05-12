import Navbar from "../components/Navbar";
//import Footer from "../components/Footer";

const sections = [
  {
    id: "introduction",
    icon: "♟️",
    title: "Introduction",
    content: `Welcome to Creator CHESS Academy ("we," "our," or "us"). By accessing our website, enrolling in our classes, or using any of our services, you agree to be bound by these Terms & Conditions. These terms apply to all students, parents, guardians, and visitors interacting with Creator CHESS Academy — whether online or offline.

Creator CHESS Academy is dedicated to providing quality chess coaching to students of all ages, with a special focus on kids and beginners. We strive to create a safe, respectful, and intellectually stimulating environment for every learner.`,
  },
  {
    id: "website-usage",
    icon: "🌐",
    title: "Website Usage",
    content: `Our website is intended solely for educational purposes and to provide information about our chess coaching programs. You agree to:

• Use the website only for lawful purposes and in a manner that does not infringe the rights of others.
• Not attempt to gain unauthorized access to any part of the website or its related systems.
• Not reproduce, duplicate, or copy content from this website without prior written permission.
• Provide accurate information when filling out enrollment forms or contact forms.

We reserve the right to restrict access to any user who violates these usage terms.`,
  },
  {
    id: "enrollment",
    icon: "📋",
    title: "Class Enrollment Rules",
    content: `Enrollment in Creator CHESS Academy classes is subject to the following rules:

• Enrollment is confirmed only after receipt of the applicable fees and completion of registration.
• Students must provide accurate personal details during registration. False information may result in immediate termination of enrollment.
• Parents or guardians must consent on behalf of students under 18 years of age.
• We reserve the right to decline or cancel enrollment if a student's behavior is deemed disruptive or harmful to the learning environment.
• Class seats are limited and allocated on a first-come, first-served basis.`,
  },
  {
    id: "classes-policy",
    icon: "🎓",
    title: "Online & Offline Classes Policy",
    content: `Creator CHESS Academy offers both online and offline chess coaching sessions. The following policies apply:

Online Classes:
• Students must have a stable internet connection and a functioning device with camera and microphone.
• Classes are conducted via designated video conferencing platforms. Links are shared via WhatsApp or email prior to sessions.
• Recording of online sessions by students is strictly prohibited without express written consent from the academy.

Offline Classes:
• Students are expected to arrive on time. Repeated tardiness may affect the student's progress and standing.
• The academy premises must be treated with respect. Any damage caused will be the student's (or guardian's) responsibility.
• Students must bring their own chess sets unless otherwise specified.

WhatsApp Communication:
• We use WhatsApp as our primary communication channel for class schedules, updates, homework assignments, and announcements.
• Students and parents are encouraged to join the designated WhatsApp groups for their respective batches.`,
  },
  {
    id: "fees",
    icon: "💳",
    title: "Fees & Payments",
    content: `• All fees must be paid in advance before the commencement of each month or course module, as applicable.
• Fees are non-transferable and cannot be applied to a different course or student.
• We accept payments via UPI, bank transfer, or other methods specified at the time of enrollment.
• A detailed fee structure will be shared at the time of registration. Fees are subject to revision; any changes will be communicated at least 15 days in advance.
• Non-payment of fees may result in suspension of the student's access to classes until dues are cleared.`,
  },
  {
    id: "refund",
    icon: "↩️",
    title: "Cancellation & Refund Policy",
    content: `We understand that circumstances may change. Our cancellation and refund policy is as follows:

• Cancellation requests must be submitted in writing via WhatsApp or email to the academy.
• Refunds, if applicable, are processed within 7–10 business days of approval.
• No refund is provided for classes already attended or for no-shows.
• If the academy cancels a class due to unforeseen circumstances (e.g., technical issues, instructor unavailability), a make-up class or equivalent credit will be provided.
• Partial refunds may be considered at the sole discretion of the management in genuine cases such as medical emergencies (with supporting documentation).`,
    highlight: true,
  },
  {
    id: "conduct",
    icon: "🤝",
    title: "Student Conduct & Discipline",
    content: `Creator CHESS Academy maintains a zero-tolerance policy for disruptive or disrespectful behavior. All students are expected to:

• Treat instructors, fellow students, and academy staff with courtesy and respect at all times.
• Refrain from using offensive language, bullying, or any form of harassment — whether online or offline.
• Actively participate in sessions and complete assigned exercises and homework.
• Not engage in cheating during practice games, assessments, or tournaments organized by the academy.

Violation of the conduct policy may result in a formal warning, suspension, or permanent expulsion from the academy without a refund.`,
  },
  {
    id: "ip",
    icon: "©️",
    title: "Intellectual Property Rights",
    content: `All course materials provided by Creator CHESS Academy — including but not limited to lesson plans, worksheets, video recordings, puzzles, and training resources — are the exclusive intellectual property of Creator CHESS Academy.

• Students may use these materials strictly for personal, non-commercial, educational purposes.
• Sharing, distributing, selling, or reproducing any course material without prior written permission is strictly prohibited.
• Any unauthorized use of our intellectual property may result in legal action.`,
  },
  {
    id: "tournament",
    icon: "🏆",
    title: "Tournament & Competition Disclaimer",
    content: `Creator CHESS Academy may assist students with tournament preparation, ratings, and competitive play. However:

• We do not guarantee any specific tournament results, ratings, or rankings.
• Participation in tournaments is entirely at the student's (and guardian's) discretion and risk.
• The academy is not responsible for losses, injuries, or disputes that occur during external tournaments not organized by us.
• Any travel, accommodation, or participation fees for external tournaments are the sole responsibility of the student/guardian.
• Our coaching is aimed at overall chess development; tournament outcomes are influenced by many factors beyond our control.`,
    highlight: true,
  },
  {
    id: "privacy",
    icon: "🔒",
    title: "Privacy & Data Usage",
    content: `We respect your privacy and are committed to protecting your personal data. By enrolling or using our website, you consent to:

• Collection of basic personal information (name, age, contact details) for registration and communication purposes.
• Communication via WhatsApp, email, or phone for class-related updates and announcements.
• Use of student performance data internally to track progress and improve coaching quality.

We do not sell, rent, or share your personal data with third parties for commercial purposes. For more details, please refer to our Privacy Policy.`,
  },
  {
    id: "liability",
    icon: "⚖️",
    title: "Limitation of Liability",
    content: `To the fullest extent permitted by law, Creator CHESS Academy shall not be liable for:

• Any indirect, incidental, or consequential damages arising from the use of our services.
• Technical failures, internet outages, or platform disruptions that affect online class delivery.
• Any loss of data, progress, or materials due to unforeseen technical circumstances.
• Actions taken by students or third parties that are outside the academy's reasonable control.

Our total liability in any case shall not exceed the fees paid by the student for the current enrollment period.`,
  },
  {
    id: "changes",
    icon: "🔄",
    title: "Changes to Terms",
    content: `Creator CHESS Academy reserves the right to update or modify these Terms & Conditions at any time. Changes will be:

• Announced via our website and/or WhatsApp communication channels.
• Effective immediately upon posting unless stated otherwise.

Continued use of our services after any changes constitutes your acceptance of the revised terms. We encourage you to review these terms periodically.`,
  },
  {
    id: "contact",
    icon: "📬",
    title: "Contact Information",
    content: `If you have any questions, concerns, or feedback regarding these Terms & Conditions, please reach out to us:

Creator CHESS Academy
📱 WhatsApp: Available on our official academy number (shared at enrollment)
📧 Email: Contact us through the form on our website
🌐 Website: As listed in your enrollment documents

We are committed to resolving any queries promptly and ensuring your experience with Creator CHESS Academy is positive and enriching.`,
  },
];

export default function Terms() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-[110px] relative overflow-hidden bg-gradient-to-br from-[#0d2b1f] via-[#14532d] to-[#0f3d25] min-h-[340px] flex items-center">
        {/* Chess board pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `repeating-conic-gradient(#fff 0% 25%, transparent 0% 50%)`,
            backgroundSize: "48px 48px",
          }}
        />
        {/* Radial glow */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        <div className="absolute top-10 right-10 text-[120px] opacity-[0.06] select-none leading-none">
          ♛
        </div>
        <div className="absolute bottom-4 left-8 text-[90px] opacity-[0.05] select-none leading-none">
          ♞
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 py-16 text-center w-full">
          <div
            className="inline-block mb-4 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase border border-emerald-400/30 text-emerald-300 bg-emerald-900/30"
            style={{ animation: "fadeInDown 0.6s ease both" }}
          >
            Legal Document
          </div>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-5 tracking-tight"
            style={{ animation: "fadeInUp 0.7s ease 0.1s both" }}
          >
            Terms &amp; Conditions{" "}
            <span className="inline-block" style={{ animation: "float 3s ease-in-out infinite" }}>
              ♟️
            </span>
          </h1>
          <p
            className="text-emerald-200/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
            style={{ animation: "fadeInUp 0.7s ease 0.2s both" }}
          >
            Please read these terms carefully before using our services.
          </p>
          <div
            className="mt-8 flex items-center justify-center gap-2 text-sm text-emerald-300/60"
            style={{ animation: "fadeInUp 0.7s ease 0.3s both" }}
          >
            <span className="w-8 h-px bg-emerald-500/40" />
            <span>Creator CHESS Academy — Effective 2026</span>
            <span className="w-8 h-px bg-emerald-500/40" />
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <div className="bg-white border-b border-gray-100 sticky top-0 z-30 shadow-sm hidden lg:block">
        <div className="max-w-6xl mx-auto px-6 py-3 overflow-x-auto">
          <div className="flex items-center gap-1 text-xs font-medium text-gray-500">
            <span className="text-emerald-700 font-semibold shrink-0">Jump to:</span>
            {sections.slice(0, 7).map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="shrink-0 px-3 py-1 rounded-full hover:bg-emerald-50 hover:text-emerald-700 transition-colors whitespace-nowrap"
              >
                {s.title}
              </a>
            ))}
            <span className="text-gray-300 mx-1">•••</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-16">

        {/* Important Notice */}
        <div className="mb-10 rounded-2xl bg-amber-50 border border-amber-200 p-5 flex gap-4 items-start shadow-sm">
          <span className="text-2xl shrink-0 mt-0.5">⚠️</span>
          <div>
            <p className="font-semibold text-amber-800 mb-1">Important Notice</p>
            <p className="text-amber-700 text-sm leading-relaxed">
              By enrolling in any class or using our website, you acknowledge that you have read,
              understood, and agree to be bound by these Terms &amp; Conditions. If you do not
              agree, please refrain from using our services.
            </p>
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-6">
          {sections.map((section, index) => (
            <article
              key={section.id}
              id={section.id}
              className={`group rounded-2xl border shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden scroll-mt-20 ${
                section.highlight
                  ? "border-emerald-200 bg-gradient-to-br from-emerald-50/80 to-white"
                  : "border-gray-100 bg-white"
              }`}
              style={{ animation: `fadeInUp 0.5s ease ${index * 0.04}s both` }}
            >
              {/* Section Header */}
              <div
                className={`flex items-center gap-4 px-6 py-5 border-b ${
                  section.highlight ? "border-emerald-100 bg-emerald-50/60" : "border-gray-50 bg-gray-50/60"
                }`}
              >
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center text-xl shrink-0 shadow-inner ${
                    section.highlight
                      ? "bg-emerald-100 text-emerald-800"
                      : "bg-white border border-gray-100 text-gray-700"
                  }`}
                >
                  {section.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold tracking-widest text-gray-400 uppercase">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {section.highlight && (
                      <span className="text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-full bg-emerald-600 text-white">
                        Key Policy
                      </span>
                    )}
                  </div>
                  <h2 className="text-lg md:text-xl font-bold text-gray-800 mt-0.5">
                    {section.title}
                  </h2>
                </div>
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center text-xs transition-transform duration-300 group-hover:translate-x-1 ${
                    section.highlight ? "text-emerald-600" : "text-gray-300"
                  }`}
                >
                  →
                </div>
              </div>

              {/* Section Body */}
              <div className="px-6 py-6">
                <div className="text-gray-600 text-[15px] leading-[1.85] whitespace-pre-line">
                  {section.content.split("\n").map((line, i) => {
                    if (line.startsWith("•")) {
                      return (
                        <div key={i} className="flex gap-2.5 mb-2">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                          <span>{line.slice(1).trim()}</span>
                        </div>
                      );
                    }
                    if (
                      line.endsWith(":") &&
                      line.trim().length < 40 &&
                      !line.startsWith(" ")
                    ) {
                      return (
                        <p key={i} className="font-semibold text-gray-800 mt-4 mb-2">
                          {line}
                        </p>
                      );
                    }
                    if (line.trim() === "") return <div key={i} className="mb-3" />;
                    return (
                      <p key={i} className="mb-3">
                        {line}
                      </p>
                    );
                  })}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Divider */}
        <div className="my-12 flex items-center gap-4">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
          <span className="text-2xl opacity-40">♔</span>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
        </div>

        {/* Agreement Banner */}
        <div className="rounded-2xl bg-gradient-to-br from-[#0d2b1f] to-[#14532d] p-8 text-center shadow-xl">
          <div className="text-4xl mb-4">🤝</div>
          <h3 className="text-xl font-bold text-white mb-3">Your Agreement</h3>
          <p className="text-emerald-200/80 text-sm leading-relaxed max-w-xl mx-auto">
            By using our services, enrolling in classes, or accessing this website, you confirm that
            you have read and agree to these Terms &amp; Conditions. We appreciate your trust in
            Creator CHESS Academy and look forward to an enriching chess journey together.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 text-emerald-300 text-sm font-medium">
            <span>♟</span>
            <span>Play fair. Learn well. Grow together.</span>
            <span>♟</span>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-10 text-center">
          <p className="text-xs text-gray-400 tracking-wide">
            Last Updated:{" "}
            <span className="font-semibold text-gray-500">2026</span> &nbsp;·&nbsp; Creator CHESS
            Academy &nbsp;·&nbsp; All Rights Reserved
          </p>
        </div>
      </main>

     

      {/* Keyframe Animations */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-6px); }
        }
      `}</style>
    </div>
  );
}