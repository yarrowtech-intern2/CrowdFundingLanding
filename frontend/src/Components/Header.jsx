import React, { useEffect, useMemo, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const HEADER_HEIGHT = 100;

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  const navItems = useMemo(
    () => [
      { name: "Home", id: "home" },
      { name: "Fundraise", id: "fundraise" },
      { name: "Investors", id: "investors" },
      { name: "About", id: "about" },
      { name: "Security", id: "security" },
      { name: "Contact", id: "contact" },
    ],
    []
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

    const mobileOffset = isMobile ? 60 : HEADER_HEIGHT;
    const y =
      element.getBoundingClientRect().top +
      window.pageYOffset -
      mobileOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <header className="fixed top-2 sm:top-3 md:top-4 lg:top-6 left-0 w-full z-50 px-3 sm:px-4 md:px-6 lg:px-8 pointer-events-none">
      {/* Grid Layout: 1fr | auto | 1fr -> Guarantees mathematically perfect center! */}
      <div className="w-full max-w-7xl mx-auto grid grid-cols-[1fr_auto_1fr] items-center pointer-events-auto relative">
        {/* LEFT — Logo */}
        <div
          onClick={() => scrollToSection("home")}
          className="cursor-pointer flex items-center gap-1.5 sm:gap-2 md:gap-3 justify-self-start"
        >
          <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full bg-gradient-to-br from-indigo-600 to-indigo-700 flex items-center justify-center shadow-md flex-shrink-0 hover:shadow-lg transition-all duration-300 active:scale-95">
            <span className="text-white font-bold text-xs sm:text-sm md:text-base">
              M8
            </span>
          </div>
          <span className="text-base sm:text-lg md:text-xl font-bold text-[#1e2b4f] tracking-tight sm:tracking-wide whitespace-nowrap">
            M8-BID
          </span>
        </div>

        {/* CENTER — Desktop Navigation pill (always centered) */}
        <div className="justify-self-center hidden lg:block">
          <nav
            className={`flex items-center gap-1 px-6 xl:px-8 py-2.5 md:py-3 rounded-full transition-all duration-300 ${
              scrolled
                ? "bg-white/85 backdrop-blur-xl shadow-lg border border-white/40"
                : "bg-white/60 backdrop-blur-lg border border-white/30"
            }`}
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm lg:text-base px-3 xl:px-4 py-2 font-medium transition-all duration-300 whitespace-nowrap rounded-lg ${
                  activeSection === item.id
                    ? "text-indigo-600 bg-indigo-50"
                    : "text-[#1e2b4f] hover:text-indigo-600 hover:bg-indigo-50/50"
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>
        </div>

        {/* RIGHT — Mobile hamburger */}
        <div className="flex justify-end justify-self-end">
          <button
            className="lg:hidden text-[#1e2b4f] text-lg sm:text-xl p-2 sm:p-2.5 rounded-lg hover:bg-white/50 transition-all duration-300 active:scale-95"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <FaTimes size={isMobile ? 20 : 24} />
            ) : (
              <FaBars size={isMobile ? 20 : 24} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="mt-2 sm:mt-3 w-full max-w-7xl mx-auto lg:hidden pointer-events-auto animate-in fade-in duration-300">
          <div className="bg-white/95 backdrop-blur-xl rounded-xl sm:rounded-2xl shadow-xl border border-gray-100/50 overflow-hidden">
            <div className="flex flex-col px-4 sm:px-5 py-3 sm:py-4 max-h-[60vh] overflow-y-auto">
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left py-2.5 sm:py-3 px-3 sm:px-4 text-sm sm:text-base font-medium rounded-lg transition-all duration-200 ${
                    activeSection === item.id
                      ? "text-indigo-600 bg-indigo-50 font-semibold"
                      : "text-[#1e2b4f] hover:text-indigo-600 hover:bg-indigo-50/50"
                  }`}
                  style={{
                    transitionDelay: menuOpen ? `${index * 50}ms` : "0ms",
                  }}
                >
                  {item.name}
                </button>
              ))}

              {/* Mobile CTA Button */}
              <button className="mt-4 sm:mt-5 w-full px-4 sm:px-5 py-2.5 sm:py-3 bg-indigo-600 text-white font-bold rounded-lg sm:rounded-xl text-sm sm:text-base hover:bg-indigo-700 transition-all duration-300 active:scale-95 shadow-md">
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;