import React, { useEffect, useMemo, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

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
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          setScrolled(scrollY > 20);

          const scrollPosition = scrollY + HEADER_HEIGHT + 100;
          navItems.forEach((item) => {
            const section = document.getElementById(item.id);
            if (!section) return;
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
              setActiveSection(item.id);
            }
          });
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
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
      <div className="w-full max-w-7xl 2xl:max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 2xl:px-16 flex items-center justify-between pointer-events-auto relative">
        <div onClick={() => scrollToSection("home")} className="cursor-pointer flex items-center gap-2 sm:gap-2.5 justify-start group flex-shrink-0">
          <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-indigo-600 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300">
            <span className="text-white font-black text-[9px] sm:text-xs md:text-sm">M8</span>
          </div>

          <span className="text-sm sm:text-base md:text-lg font-black text-slate-900 tracking-tighter group-hover:text-indigo-600 transition-colors duration-300 whitespace-nowrap">
            M8-BID
          </span>
        </div>

        <div className="hidden lg:block absolute left-1/2 -translate-x-1/2">
          <nav
            className={`flex items-center gap-4 xl:gap-8 px-6 py-3 rounded-full border border-white/40 transition-all duration-500 ${
              scrolled
                ? "bg-white/95 backdrop-blur-xl shadow-2xl shadow-indigo-100/40 border-indigo-100/60"
                : "bg-white/50 backdrop-blur-sm border-white/30"
            }`}
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                className={`text-xs md:text-sm xl:text-base font-bold transition-all relative group/item whitespace-nowrap px-1 py-1 ${
                  activeSection === item.id ? "text-indigo-600" : "text-slate-700 hover:text-indigo-600"
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
        </div>

        <div className="flex justify-end items-center gap-2 sm:gap-3 md:gap-4 flex-shrink-0">
          <button
            type="button"
            onClick={() => scrollToSection("contact")}
            className="hidden md:flex px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 bg-indigo-600 text-white font-bold text-xs md:text-sm rounded-full hover:bg-indigo-700 transition-all active:scale-95 shadow-lg shadow-indigo-200 hover:shadow-xl hover:shadow-indigo-300"
          >
            Get Started
          </button>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-lg border border-slate-200 text-slate-900 hover:bg-slate-50 transition-all ml-auto"
            aria-label="Toggle Menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <FaTimes size={16} /> : <FaBars size={16} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="mt-3 sm:mt-4 w-[calc(100%-24px)] sm:w-[calc(100%-48px)] mx-auto lg:hidden pointer-events-auto">
          <div className="bg-white/98 backdrop-blur-2xl rounded-xl sm:rounded-2xl shadow-2xl border border-slate-200 p-3 sm:p-4 md:p-5">
            <div className="flex flex-col gap-0.5 sm:gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left py-2.5 sm:py-3 md:py-3.5 px-3 sm:px-4 text-xs sm:text-sm md:text-base font-bold rounded-lg transition-all ${
                    activeSection === item.id
                      ? "text-indigo-600 bg-indigo-100/60"
                      : "text-slate-800 hover:bg-slate-100/50 active:bg-slate-200/50"
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={() => scrollToSection("contact")}
              className="mt-3 sm:mt-4 w-full py-3 sm:py-3.5 md:py-4 bg-indigo-600 text-white font-black text-xs sm:text-sm md:text-base rounded-lg shadow-lg hover:bg-indigo-700 transition-all active:scale-95"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
