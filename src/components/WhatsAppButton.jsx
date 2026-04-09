import React from "react";
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "919028447116";

  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 group">

      {/* 🔥 Tooltip */}
      <span className="absolute right-14 top-1/2 -translate-y-1/2 
      bg-black text-white text-xs px-3 py-1 rounded-md 
      opacity-0 group-hover:opacity-100 transition duration-300 whitespace-nowrap">
        Chat with us
      </span>

      {/* 🔥 Button */}
      <button
        onClick={handleClick}
        className="relative flex items-center justify-center 
        w-14 h-14 rounded-full 
        bg-gradient-to-r from-green-500 to-green-600 
        text-white shadow-2xl 
        hover:scale-110 hover:shadow-green-400/50 
        transition duration-300"
      >

        {/* 🔥 Pulse Animation */}
        <span className="absolute w-full h-full rounded-full bg-green-400 opacity-30 animate-ping"></span>

        {/* Icon */}
        <MessageCircle size={28} className="relative z-10" />

      </button>
    </div>
  );
};

export default WhatsAppButton;