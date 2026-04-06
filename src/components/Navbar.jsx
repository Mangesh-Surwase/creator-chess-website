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

          {/* 🔹 Desktop Menu */}
          <ul className="hidden md:flex gap-4 bg-gray-100 px-4 py-2 rounded-full shadow-sm">

            {menuItems.map((item) => (
              <Link to={item.path} key={item.name}>
                <li
                  className={`px-4 py-1 rounded-full cursor-pointer transition duration-300 ${
                    location.pathname === item.path
                      ? "bg-green-500 text-white shadow" // ✅ ACTIVE
                      : "hover:bg-green-100 hover:text-green-600"
                  }`}
                >
                  {item.name}
                </li>
              </Link>
            ))}

          </ul>

          {/* 🔹 Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setOpen(true)}>
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
          <button onClick={() => setOpen(false)}>
            <X size={30} />
          </button>
        </div>

        {/* 🔹 Mobile Menu */}
        <ul className="flex flex-col gap-6 px-6 text-lg font-semibold text-gray-700">

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

      </div>
    </>
  );
};

export default Navbar;