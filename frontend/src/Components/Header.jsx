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
    <header className="fixed top-2 sm:top-4 left-0 w-full z-50 pointer-events-none transition-all duration-300">
      <div className="w-full max-w-[85rem] 2xl:max-w-5xl mx-auto px-4 sm:px-12 lg:px-20 grid grid-cols-[1fr_auto_1fr] items-center pointer-events-auto relative">
        
        {/* Logo */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }} 
          animate={{ opacity: 1, x: 0 }} 
          onClick={() => scrollToSection("home")} 
          className="cursor-pointer flex items-center gap-2.5 justify-self-start group"
        >
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-indigo-600 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
            <span className="text-white font-bold text-xs sm:text-sm">M8</span>
          </div>
          <span className="text-base sm:text-lg font-black text-slate-900 tracking-tighter group-hover:text-indigo-600 transition-colors">
            M8-BID
          </span>
        </motion.div>

        {/* Desktop Nav */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }} 
          animate={{ opacity: 1, y: 0 }}
          className="justify-self-center hidden lg:block"
        >
          <nav className={`flex items-center gap-6 xl:gap-8 px-6 py-2.5 rounded-full border border-white/40 transition-all duration-500 ${
            scrolled ? "bg-white/90 backdrop-blur-xl shadow-xl shadow-indigo-100/30" : "bg-white/40 backdrop-blur-md"
          }`}>
            {navItems.map((item) => (
              <button key={item.id} onClick={() => scrollToSection(item.id)} className={`text-xs xl:text-sm font-bold transition-all relative group/item ${
                activeSection === item.id ? "text-indigo-600" : "text-slate-600 hover:text-indigo-500"
              }`}>
                {item.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-indigo-600 transition-all ${activeSection === item.id ? "w-full" : "w-0 group-hover/item:w-full"}`} />
              </button>
            ))}
          </nav>
        </motion.div>

        {/* Right Controls */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }} 
          animate={{ opacity: 1, x: 0 }}
          className="flex justify-end items-center gap-4"
        >
          <button onClick={() => scrollToSection("contact")} className="hidden md:flex px-6 py-2.5 bg-indigo-600 text-white font-bold rounded-full text-xs hover:bg-indigo-700 transition-all active:scale-95 shadow-lg shadow-indigo-200">
            Get Started
          </button>
          
          <button className="lg:hidden w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-lg border border-slate-100 text-slate-900" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes size={16} /> : <FaBars size={16} />}
          </button>
        </motion.div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="mt-2 w-full max-w-[94%] mx-auto lg:hidden pointer-events-auto">
            <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-100 p-4">
              <div className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <button key={item.id} onClick={() => scrollToSection(item.id)} className={`text-left py-3.5 px-4 text-sm font-bold rounded-xl transition-all ${
                    activeSection === item.id ? "text-indigo-600 bg-indigo-50/70" : "text-slate-800 hover:bg-slate-50"
                  }`}>
                    {item.name}
                  </button>
                ))}
                <button onClick={() => scrollToSection("contact")} className="mt-4 w-full py-4 bg-indigo-600 text-white font-black rounded-xl shadow-lg">
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