import React, { useEffect, useMemo, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const HEADER_HEIGHT = 100;

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

      const scrollPosition = scrollY + HEADER_HEIGHT + 80;

      navItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (!section) return;

        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
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

    const y =
      element.getBoundingClientRect().top +
      window.pageYOffset -
      HEADER_HEIGHT;

    window.scrollTo({ top: y, behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <header className="fixed top-2 sm:top-4 md:top-6 left-0 w-full z-50 px-3 sm:px-6 lg:px-8 pointer-events-none transition-all duration-300">

      {/* Grid Layout: 1fr | auto | 1fr -> Guarantees mathematically perfect center! */}
      <div className="section-container max-w-[85rem] grid grid-cols-[1fr_auto_1fr] items-center pointer-events-auto relative">

        {/* LEFT — Logo */}
        <div
          onClick={() => scrollToSection("home")}
          className="cursor-pointer flex items-center gap-2 sm:gap-3 justify-self-start group"
        >
          <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-indigo-600 flex items-center justify-center shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
            <span className="text-white font-bold text-sm md:text-base">M8</span>
          </div>
          <span className="text-lg sm:text-xl md:text-2xl font-black text-black tracking-tighter whitespace-nowrap group-hover:text-indigo-600 transition-colors duration-300">
            M8-BID
          </span>
        </div>

        {/* CENTER — Desktop Navigation pill (always centered) */}
        <div className="justify-self-center">
          <div
            className={`hidden lg:flex items-center gap-6 xl:gap-8 2xl:gap-12 px-6 xl:px-10 py-3 xl:py-4 rounded-full border border-white/50 transition-all duration-500 ${
              scrolled
                ? "bg-white/90 backdrop-blur-xl shadow-2xl shadow-indigo-100 scale-100"
                : "bg-white/40 backdrop-blur-xl scale-[1.02]"
            }`}
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm xl:text-base 2xl:text-lg font-bold transition-all duration-300 whitespace-nowrap relative group/item ${
                  activeSection === item.id
                    ? "text-indigo-600"
                    : "text-black hover:text-indigo-500"
                }`}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-indigo-600 transition-all duration-300 ${
                  activeSection === item.id ? "w-full" : "w-0 group-hover/item:w-full"
                }`} />
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT — Mobile hamburger */}
        <div className="flex justify-end justify-self-end">
          <button
            className="lg:hidden w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-white/80 backdrop-blur-md rounded-full shadow-lg border border-gray-100 text-black text-xl p-2 active:scale-90 transition-transform duration-200"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
          
          {/* Desktop Call to Action (optional, but adds symmetry) */}
          <button 
            onClick={() => scrollToSection("contact")}
            className="hidden lg:flex px-6 xl:px-8 py-3 xl:py-3.5 bg-indigo-600 text-white font-bold rounded-full text-sm xl:text-base hover:bg-indigo-700 hover:shadow-xl hover:shadow-indigo-200 transition-all duration-300 active:scale-95"
          >
            Get Started
          </button>
        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="mt-3 w-full max-w-7xl mx-auto lg:hidden pointer-events-auto">
          <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl border border-gray-100">
            <div className="flex flex-col px-5 py-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left py-3 text-base font-medium border-b border-gray-50 last:border-0 transition-colors duration-200 ${
                    activeSection === item.id
                      ? "text-indigo-600"
                      : "text-gray-800 hover:text-indigo-500"
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

    </header>
  );
};

export default Header;