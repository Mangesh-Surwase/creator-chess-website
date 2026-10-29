import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Courses", path: "/courses" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* 🔹 Navbar */}
      <div className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-lg shadow-sm border-b">

        <div className="flex justify-between items-center px-6 md:px-16 py-3">

          {/* 🔹 Logo */}
          <div className="flex items-center gap-3">
            <img src={logo} alt="logo" className="w-20 md:w-24 object-contain" />
            <div className="leading-tight">
              <h1 className="text-green-600 font-extrabold text-lg md:text-xl">
                CREATOR CHESS
              </h1>
              <p className="text-gray-600 text-xs md:text-sm font-semibold">
                ACADEMY
              </p>
            </div>
          </div>

          {/* 🔹 Desktop Menu + Login */}
          <div className="hidden md:flex items-center gap-4">

            <ul className="flex gap-4 bg-gray-100 px-4 py-2 rounded-full shadow-sm">
              {menuItems.map((item) => (
                <Link to={item.path} key={item.name}>
                  <li
                    className={`px-4 py-1 rounded-full cursor-pointer transition duration-300 ${
                      location.pathname === item.path
                        ? "bg-green-500 text-white shadow"
                        : "hover:bg-green-100 hover:text-green-600"
                    }`}
                  >
                    {item.name}
                  </li>
                </Link>
              ))}
            </ul>

            {/* 🔐 Student Login Button — Desktop */}
            <a
              href="https://learn.creatorchessacademy.com/login"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white text-sm font-semibold px-5 py-2 rounded-full shadow-md hover:shadow-green-400/30 hover:scale-105 transition-all duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              Student Login
            </a>

          </div>

          {/* 🔹 Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setOpen(true)} aria-label="Open navigation menu">
              <Menu size={30} />
            </button>
          </div>

        </div>
      </div>

      {/* 🔥 Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setOpen(false)}
      ></div>

      {/* 🔥 Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[75%] bg-white z-50 shadow-xl transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >

        {/* Close */}
        <div className="flex justify-end p-4">
          <button onClick={() => setOpen(false)} aria-label="Close navigation menu">
            <X size={30} />
          </button>
        </div>

        {/* 🔹 Mobile Menu */}
        <ul className="flex flex-col gap-4 px-6 text-lg font-semibold text-gray-700">

          {menuItems.map((item) => (
            <Link
              to={item.path}
              key={item.name}
              onClick={() => setOpen(false)}
            >
              <li
                className={`px-4 py-2 rounded-lg transition ${
                  location.pathname === item.path
                    ? "bg-green-500 text-white"
                    : "hover:bg-green-100 hover:text-green-600"
                }`}
              >
                {item.name}
              </li>
            </Link>
          ))}

        </ul>

        {/* 🔐 Student Login Button — Mobile Drawer */}
        <div className="px-6 mt-6">
          <a
            href="https://learn.creatorchessacademy.com/login"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="flex items-center justify-center gap-2 w-full bg-green-600 hover:bg-green-500 text-white text-base font-bold px-5 py-3 rounded-xl shadow-md transition-all duration-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            Student Login
          </a>
          <p className="text-xs text-gray-400 text-center mt-2">Access your classes &amp; progress</p>
        </div>

      </div>
    </>
  );
};

export default Navbar;