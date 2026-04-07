import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const FloatingContact = () => {
  const whatsappNumber = "919830590929"; 
  const email = "hello@m8bid.com";

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hello%20I%20want%20to%20know%20more%20about%20your%20services`;
  const mailLink = `mailto:${email}`;

  return (
    <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 flex flex-col gap-3">
      
      {/* WhatsApp */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-[#25D366] text-white shadow-xl shadow-green-500/20 hover:scale-110 active:scale-95 transition-all duration-500"
      >
        <FaWhatsapp className="w-6 h-6 md:w-7 md:h-7" />
      </a>

      {/* Email */}
      <a
        href={mailLink}
        className="group flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-indigo-600 text-white shadow-xl shadow-indigo-500/20 hover:scale-110 active:scale-95 transition-all duration-500"
      >
        <FiMail className="w-6 h-6 md:w-7 md:h-7" />
      </a>

    </div>
  );
};

export default FloatingContact;