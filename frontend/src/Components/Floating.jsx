import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { FiMail, FiMessageCircle } from "react-icons/fi";
import { ArrowUp } from "lucide-react";

const FloatingActions = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  const whatsappNumber = "919830590929"; 
  const email = "hello@m8bid.com";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hello%20I%20want%20to%20know%20more%20about%20your%20services`;
  const mailLink = `mailto:${email}`;

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsOpen(false);
  };

  const toggleMenu = (e) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  const menuVariants = {
    closed: { opacity: 0, scale: 0.5, y: 10 },
    open: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25,
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, y: 10, scale: 0.8 },
    open: { opacity: 1, y: 0, scale: 1 }
  };

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-[9999] flex flex-col items-center gap-3 pointer-events-auto">
      
      {/* Scroll to Top "Tir" Icon */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-indigo-900 text-white flex items-center justify-center shadow-lg shadow-indigo-500/30 hover:bg-indigo-700 transition-colors cursor-pointer"
            title="Go to Top"
          >
            <ArrowUp className="w-5 h-5 sm:w-5.5 sm:h-5.5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Main Toggle Button & Menu */}
      <div className="flex flex-col items-center gap-3">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="flex flex-col gap-2.5"
            >
              {/* WhatsApp Icon */}
              <motion.a
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg shadow-green-500/30 hover:shadow-green-500/40 transition-shadow cursor-pointer"
                title="WhatsApp"
              >
                <FaWhatsapp className="w-5 h-5 sm:w-5.5 sm:h-5.5" />
              </motion.a>

              {/* Email Icon */}
              <motion.a
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href={mailLink}
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-indigo-600 text-white flex items-center justify-center shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/40 transition-shadow cursor-pointer"
                title="Email"
              >
                <FiMail className="w-5 h-5 sm:w-5.5 sm:h-5.5" />
              </motion.a>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Toggle Button */}
        <motion.button
          onClick={toggleMenu}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-indigo-600 text-white flex items-center justify-center shadow-2xl overflow-hidden group cursor-pointer"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-indigo-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <motion.div
            animate={{ rotate: isOpen ? 135 : 0 }}
            className="relative z-10"
          >
            <FiMessageCircle className="w-6 h-6 sm:w-7 sm:h-7" />
          </motion.div>
        </motion.button>
      </div>
    </div>
  );
};

export default FloatingActions;
