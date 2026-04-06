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
    <header className="fixed top-4 md:top-6 left-0 w-full z-50 px-4 sm:px-6 lg:px-8 pointer-events-none">

      {/* Grid Layout: 1fr | auto | 1fr -> Guarantees mathematically perfect center! */}
      <div className="w-full max-w-7xl xl:max-w-[88rem] mx-auto grid grid-cols-[1fr_auto_1fr] items-center pointer-events-auto relative">

        {/* LEFT — Logo */}
        <div
          onClick={() => scrollToSection("home")}
          className="cursor-pointer flex items-center gap-2 sm:gap-3 justify-self-start"
        >
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-indigo-600 flex items-center justify-center shadow-md flex-shrink-0">
            <span className="text-white font-bold text-sm">M8</span>
          </div>
          <span className="text-lg sm:text-xl font-bold text-black tracking-wide whitespace-nowrap">
            M8-BID
          </span>
        </div>

        {/* CENTER — Desktop Navigation pill (always centered) */}
        <div className="justify-self-center">
          <div
            className={`hidden lg:flex items-center gap-5 xl:gap-8 px-5 xl:px-8 py-3 rounded-full transition-all duration-300 ${
              scrolled
                ? "bg-white/80 backdrop-blur-xl shadow-lg"
                : "bg-white/40 backdrop-blur-xl"
            }`}
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm lg:text-base font-medium transition-all duration-300 whitespace-nowrap ${
                  activeSection === item.id
                    ? "text-indigo-600"
                    : "text-black hover:text-indigo-500"
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT — Mobile hamburger */}
        <div className="flex justify-end justify-self-end w-full">
          <button
            className="lg:hidden text-black text-xl p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
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