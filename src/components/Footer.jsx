import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16 px-6 md:px-16">

      <div className="grid md:grid-cols-4 gap-10">

        {/* Academy Info */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">
            ♟️ Creator Chess Academy
          </h2>

          <p className="text-sm text-gray-400 leading-relaxed">
            We provide professional chess training for beginners to advanced players.
            Our mission is to build focus, confidence, and strategic thinking through chess.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Quick Links
          </h3>

          <ul className="space-y-2 text-sm">
            {["Home", "About", "Courses", "Gallery", "Contact"].map((item) => (
              <li key={item} className="hover:text-green-400 cursor-pointer transition">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Courses */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Our Courses
          </h3>

          <ul className="space-y-2 text-sm text-gray-400">
            <li>Beginner Chess Class</li>
            <li>Intermediate Training</li>
            <li>Advanced Coaching</li>
            <li>Online Chess Classes</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Contact Us
          </h3>

          <ul className="space-y-3 text-sm">

            <li>📍 Ravet, Pimpri-Chinchwad</li>
            <li>📞 +91 9028447116</li>
            <li>🕒 Open 24 Hours</li>

            <li>
              <a
                href="https://wa.me/919028447116"
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-2 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
              >
                WhatsApp Chat
              </a>
            </li>

          </ul>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Creator Chess Academy. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;