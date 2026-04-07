import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { motion } from "framer-motion";

const FloatingContact = () => {
  const whatsappNumber = "919830590929"; 
  const email = "hello@m8bid.com";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hello%20I%20want%20to%20know%20more%20about%20your%20services`;
  const mailLink = `mailto:${email}`;

  return (
    <motion.div 
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 1 }}
      className="fixed bottom-6 right-5 sm:bottom-8 sm:right-8 md:bottom-10 md:right-10 2xl:bottom-12 2xl:right-12 z-[9999] flex flex-col gap-3 sm:gap-4 pointer-events-auto"
    >
      {/* WhatsApp */}
      <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 2xl:w-12 2xl:h-12 rounded-2xl bg-[#25D366] text-white shadow-xl shadow-green-500/20 hover:scale-110 active:scale-95 transition-all">
        <FaWhatsapp className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 2xl:w-6 2xl:h-6" />
      </a>
      {/* Email */}
      <a href={mailLink} className="group flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 2xl:w-12 2xl:h-12 rounded-2xl bg-indigo-600 text-white shadow-xl shadow-indigo-500/20 hover:scale-110 active:scale-95 transition-all">
        <FiMail className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 2xl:w-6 2xl:h-6" />
      </a>
    </motion.div>
  );
};

export default FloatingContact;