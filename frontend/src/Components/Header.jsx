import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const HEADER_HEIGHT = 110;

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

  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Background change on scroll
      setScrolled(scrollY > 30);

      const scrollPosition = scrollY + HEADER_HEIGHT + 80;

      for (let item of navItems) {
        const section = document.getElementById(item.id);
        if (!section) continue;

        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(item.id);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll on mobile menu
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [menuOpen]);

  // Smooth scroll
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
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#1e2b4f]/95 backdrop-blur-md shadow-lg"
            : "bg-[#1e2b4f]"
        }`}
      >
        <div
          className={`mx-auto flex max-w-7xl items-center justify-between px-4 md:px-6 transition-all duration-300 ${
            scrolled ? "py-2" : "py-3"
          }`}
        >
          {/* Logo */}
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => scrollToSection("home")}
          >
            <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center">
              <span className="text-white font-bold text-lg">C</span>
            </div>
            <h1 className="text-white font-semibold text-lg tracking-wide">
              Crowd Funding
            </h1>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-10 relative">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative font-medium transition duration-300 ${
                  activeSection === item.id
                    ? "text-indigo-400"
                    : "text-white hover:text-indigo-300"
                }`}
              >
                {item.name}

                {/* Animated Underline */}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-indigo-400 transition-all duration-300 ${
                    activeSection === item.id
                      ? "w-full"
                      : "w-0"
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white text-xl"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Offer Bar */}
        <div className="w-full bg-[#2e66ff] text-white text-sm text-center py-2">
          🎉 Special Offer: Launch your startup fundraiser and get{" "}
          <span className="font-bold">
            20% bonus visibility
          </span>{" "}
          + discounted platform fees!
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-[#1e2b4f] border-t border-white/10">
            <div className="flex flex-col px-6 py-6 gap-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left font-medium ${
                    activeSection === item.id
                      ? "text-indigo-400"
                      : "text-white"
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Spacer */}
      <div style={{ height: HEADER_HEIGHT }} />
    </>
  );
};

export default Header;