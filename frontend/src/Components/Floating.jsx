import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const FloatingContact = () => {
  const whatsappNumber = "919830590929"; // remove + and spaces
  const email = "hello@example.com";

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hello%20I%20want%20to%20know%20more%20about%20your%20services`;
  const mailLink = `mailto:${email}`;

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 flex flex-col gap-3 md:gap-4">
      
      {/* WhatsApp */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-green-500 text-white shadow-lg hover:scale-110 transition-all duration-300"
      >
        <FaWhatsapp className="w-6 h-6 md:w-7 md:h-7" />
      </a>

      {/* Email */}
      <a
        href={mailLink}
        className="group flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-yellow-400 text-black shadow-lg hover:scale-110 transition-all duration-300"
      >
        <FiMail className="w-5 h-5 md:w-6 md:h-6" />
      </a>

    </div>
  );
};

export default FloatingContact;