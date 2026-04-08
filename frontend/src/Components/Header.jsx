import React, { useEffect, useMemo, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const HEADER_HEIGHT = 80;

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
      setScrolled(scrollY > 20);

      const scrollPosition = scrollY + HEADER_HEIGHT + 50;
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
    <header className="fixed top-2 sm:top-3 md:top-4 left-0 w-full z-50 pointer-events-none transition-all duration-300">
      <div className="w-full max-w-7xl mx-auto px-3 sm:px-6 md:px-8 lg:px-12 grid grid-cols-[1fr_auto_1fr] items-center pointer-events-auto relative">
        
        {/* Logo */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.6 }}
          onClick={() => scrollToSection("home")} 
          className="cursor-pointer flex items-center gap-1.5 sm:gap-2 md:gap-2.5 justify-self-start group"
        >
          {/* Logo Circle */}
          <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-indigo-600 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300">
            <span className="text-white font-black text-[9px] sm:text-xs md:text-sm">M8</span>
          </div>

          {/* Logo Text */}
          <span className="text-sm sm:text-base md:text-lg font-black text-slate-900 tracking-tighter group-hover:text-indigo-600 transition-colors duration-300 whitespace-nowrap">
            M8-BID
          </span>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="justify-self-center hidden lg:block"
        >
          <nav className={`flex items-center gap-4 xl:gap-6 2xl:gap-8 px-4 sm:px-5 md:px-6 xl:px-8 py-2 sm:py-2.5 md:py-3 rounded-full border border-white/40 transition-all duration-500 ${
            scrolled 
              ? "bg-white/95 backdrop-blur-xl shadow-2xl shadow-indigo-100/40 border-indigo-100/60" 
              : "bg-white/50 backdrop-blur-sm border-white/30"
          }`}>
            {navItems.map((item, idx) => (
              <button 
                key={item.id} 
                onClick={() => scrollToSection(item.id)} 
                className={`text-[10px] sm:text-xs md:text-sm xl:text-base font-bold transition-all relative group/item whitespace-nowrap px-1 py-1 ${
                  activeSection === item.id 
                    ? "text-indigo-600" 
                    : "text-slate-700 hover:text-indigo-600"
                }`}
              >
                {item.name}
                <span 
                  className={`absolute -bottom-1 left-1 h-0.5 bg-indigo-600 rounded-full transition-all duration-300 ${
                    activeSection === item.id ? "w-[calc(100%-8px)]" : "w-0 group-hover/item:w-[calc(100%-8px)]"
                  }`} 
                />
              </button>
            ))}
          </nav>
        </motion.div>

        {/* Right Controls */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }} 
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-end items-center gap-2 sm:gap-3 md:gap-4"
        >
          {/* Desktop CTA Button */}
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("contact")} 
            className="hidden md:flex px-4 sm:px-5 md:px-6 lg:px-7 xl:px-8 py-2 sm:py-2.5 md:py-3 bg-indigo-600 text-white font-bold text-[10px] sm:text-xs md:text-sm lg:text-base rounded-full hover:bg-indigo-700 transition-all active:scale-95 shadow-lg shadow-indigo-200 hover:shadow-xl hover:shadow-indigo-300"
          >
            Get Started
          </motion.button>
          
          {/* Mobile Menu Toggle */}
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center bg-white rounded-full shadow-lg border border-slate-200 text-slate-900 hover:bg-slate-50 transition-all"
          >
            {menuOpen ? <FaTimes size={14} className="sm:block" /> : <FaBars size={14} className="sm:block" />}
          </motion.button>
        </motion.div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="mt-3 sm:mt-4 w-[calc(100%-24px)] sm:w-[calc(100%-48px)] mx-auto lg:hidden pointer-events-auto"
          >
            <div className="bg-white/98 backdrop-blur-2xl rounded-xl sm:rounded-2xl shadow-2xl border border-slate-200 p-3 sm:p-4 md:p-5">
              
              {/* Menu Items */}
              <div className="flex flex-col gap-0.5 sm:gap-1">
                {navItems.map((item, idx) => (
                  <motion.button 
                    key={item.id} 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    onClick={() => scrollToSection(item.id)} 
                    className={`text-left py-2.5 sm:py-3 md:py-3.5 px-3 sm:px-4 text-xs sm:text-sm md:text-base font-bold rounded-lg transition-all ${
                      activeSection === item.id 
                        ? "text-indigo-600 bg-indigo-100/60" 
                        : "text-slate-800 hover:bg-slate-100/50 active:bg-slate-200/50"
                    }`}
                  >
                    {item.name}
                  </motion.button>
                ))}
              </div>

              {/* Mobile CTA Button */}
              <motion.button 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.05 + 0.1 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollToSection("contact")} 
                className="mt-3 sm:mt-4 w-full py-3 sm:py-3.5 md:py-4 bg-indigo-600 text-white font-black text-xs sm:text-sm md:text-base rounded-lg shadow-lg hover:bg-indigo-700 transition-all active:scale-95"
              >
                Get Started
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;