import React, { useEffect, useMemo, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const HEADER_HEIGHT = 90;

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const navItems = useMemo(
    () => [
      { name: "Home", id: "home" },
      { name: "Investors", id: "investors" },
      { name: "About", id: "about" },
      { name: "Security", id: "security" },
      { name: "Contact", id: "contact" },
    ],
    []
  );

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 40);

      const scrollPosition = scrollY + HEADER_HEIGHT + 60;
      navItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (!section) return;
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(item.id);
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (!element) return;
    const y = element.getBoundingClientRect().top + window.pageYOffset - HEADER_HEIGHT;
    window.scrollTo({ top: y, behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <header className="fixed top-2 sm:top-4 md:top-5 left-0 w-full z-50 pointer-events-none transition-all duration-300">
      <div className="section-container grid grid-cols-[1fr_auto_1fr] items-center pointer-events-auto relative px-4 sm:px-6 md:px-8">
        
        {/* Logo */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8 }}
          onClick={() => scrollToSection("home")} 
          className="cursor-pointer flex items-center gap-2 sm:gap-2.5 justify-self-start group"
        >
          <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 2xl:w-14 2xl:h-14 rounded-full bg-indigo-600 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
            <span className="text-white font-bold text-xs md:text-sm 2xl:text-lg">M8</span>
          </div>
          <span className="text-base sm:text-lg md:text-xl 2xl:text-3xl font-black text-black tracking-tighter group-hover:text-indigo-600 transition-colors duration-300">
            M8-BID
          </span>
        </motion.div>

        {/* Desktop Nav */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.8 }}
          className="justify-self-center font-black"
        >
          <div className={`hidden lg:flex items-center gap-6 xl:gap-8 2xl:gap-12 px-6 xl:px-8 2xl:px-14 py-2.5 xl:py-3.5 2xl:py-5 rounded-full border border-white/40 transition-all duration-500 ${
            scrolled ? "bg-white/90 backdrop-blur-xl shadow-xl shadow-indigo-100/50" : "bg-white/40 backdrop-blur-md"
          }`}>
            {navItems.map((item) => (
              <button key={item.id} onClick={() => scrollToSection(item.id)} className={`text-xs xl:text-sm 2xl:text-lg font-bold transition-all relative group/item ${
                activeSection === item.id ? "text-indigo-600" : "text-black hover:text-indigo-500"
              }`}>
                {item.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-indigo-600 transition-all ${activeSection === item.id ? "w-full" : "w-0 group-hover/item:w-full"}`} />
              </button>
            ))}
          </div>
        </motion.div>

        {/* Right Controls */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8 }}
          className="flex justify-end justify-self-end items-center gap-4"
        >
          <button onClick={() => scrollToSection("contact")} className="hidden lg:flex px-6 xl:px-8 2xl:px-10 py-2.5 xl:py-3 2xl:py-4 bg-indigo-600 text-white font-black rounded-full text-xs xl:text-sm 2xl:text-lg hover:bg-indigo-700 transition-all active:scale-95">
            Get Started
          </button>
          
          <button className="lg:hidden w-10 h-10 flex items-center justify-center bg-white/90 backdrop-blur-md rounded-full shadow-lg border border-gray-100 text-black text-xl p-2 active:scale-90 transition-transform" onClick={() => setMenuOpen(!menuOpen)}>
            <AnimatePresence mode="wait">
              <motion.div key={menuOpen ? "times" : "bars"} initial={{ opacity: 0, rotate: -90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: 90 }} transition={{ duration: 0.2 }}>
                {menuOpen ? <FaTimes size={16} /> : <FaBars size={16} />}
              </motion.div>
            </AnimatePresence>
          </button>
        </motion.div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity: 0, y: -10, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -10, scale: 0.98 }} transition={{ duration: 0.3 }} className="mt-2 w-full max-w-[94%] mx-auto lg:hidden pointer-events-auto">
            <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
              <div className="flex flex-col px-4 py-4 gap-1">
                {navItems.map((item) => (
                  <button key={item.id} onClick={() => scrollToSection(item.id)} className={`text-left py-3 px-4 text-sm font-bold rounded-xl transition-all ${
                    activeSection === item.id ? "text-indigo-600 bg-indigo-50/70" : "text-gray-800 hover:bg-gray-50"
                  }`}>
                    {item.name}
                  </button>
                ))}
                <button onClick={() => scrollToSection("contact")} className="mt-3 w-full py-3.5 bg-indigo-600 text-white font-black rounded-xl shadow-lg active:scale-95">
                  Get Started
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;