import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const FloatingContact = () => {
  const whatsappNumber = "919830590929"; 
  const email = "hello@m8bid.com";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hello%20I%20want%20to%20know%20more%20about%20your%20services`;
  const mailLink = `mailto:${email}`;

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 2xl:bottom-10 2xl:right-10 z-[9999] flex flex-col gap-3 sm:gap-4 pointer-events-auto">
      {/* WhatsApp */}
      <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 2xl:w-12 2xl:h-12 rounded-2xl bg-[#25D366] text-white shadow-xl shadow-green-500/20 hover:scale-110 active:scale-95 transition-all">
        <FaWhatsapp className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 2xl:w-6 2xl:h-6" />
      </a>
      {/* Email */}
      <a href={mailLink} className="group flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 2xl:w-12 2xl:h-12 rounded-2xl bg-indigo-600 text-white shadow-xl shadow-indigo-500/20 hover:scale-110 active:scale-95 transition-all">
        <FiMail className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 2xl:w-6 2xl:h-6" />
      </a>
    </div>
  );
};

export default FloatingContact;
