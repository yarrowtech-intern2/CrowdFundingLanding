import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const HEADER_HEIGHT = 100;

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: "Home", id: "home" },
    { name: "Investors", id: "investors" },
    { name: "About", id: "about" },
    { name: "Security", id: "security" },
    { name: "Contact", id: "contact" },
  ];

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
  }, []);

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
    <header className="fixed top-4 md:top-8 left-0 w-full z-50">

      <div className="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <div
          onClick={() => scrollToSection("home")}
          className="cursor-pointer flex items-center gap-3"
        >
          {/* Circle Logo */}
          <div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center shadow-md">
            <span className="text-white font-bold text-base">M8</span>
          </div>

          {/* Logo Text */}
          <span className="text-2xl font-bold text-black tracking-wide">
            M8-BID
          </span>
        </div>

        {/* Center Navigation */}
        <div
          className={`hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-8 px-8 py-4 rounded-full transition-all duration-300
          ${
            scrolled
              ? "bg-white/80 backdrop-blur-xl shadow-lg"
              : "bg-white/40 backdrop-blur-xl"
          }`}
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-base font-medium transition-all duration-300 ${
                activeSection === item.id
                  ? "text-indigo-600"
                  : "text-black hover:text-indigo-500"
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-black text-xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[92%] bg-white rounded-xl shadow-lg md:hidden">
          <div className="flex flex-col gap-6 px-6 py-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-left text-black font-medium text-lg"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}

    </header>
  );
};

export default Header;