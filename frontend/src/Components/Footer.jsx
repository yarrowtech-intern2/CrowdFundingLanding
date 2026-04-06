import React from "react";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

const Footer = () => {
  const quickLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Investors", id: "investors" },
    { name: "Security", id: "security" },
    { name: "Contact", id: "contact" },
  ];

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="bg-[#0f172a] text-gray-300 py-[var(--size-fluid-section-py)] relative overflow-hidden">
      {/* Gradient Top Border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600" />

      <div className="section-container">
        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12 mb-10 sm:mb-12 md:mb-16">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-3 sm:mb-4 md:mb-6">
              M8-BID
            </h3>
            <p className="text-gray-400 leading-relaxed text-sm md:text-base">
              Empowering investors and startups through secure, transparent, and
              compliant crowdfunding solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-3 sm:mb-4 md:mb-6 text-sm sm:text-base md:text-lg">
              Quick Links
            </h4>
            <ul className="space-y-2 sm:space-y-3 md:space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-xs sm:text-sm md:text-base hover:text-indigo-400 transition duration-300 text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Map */}
          <div>
            <h4 className="text-white font-semibold mb-3 sm:mb-4 md:mb-6 text-sm sm:text-base md:text-lg">
              Contact Info
            </h4>

            <div className="space-y-2 sm:space-y-3 md:space-y-4 text-xs sm:text-sm mb-4 sm:mb-6">
              <a
                href="https://www.google.com/maps?q=3A%20Bertram%20St%2C%20Esplanade%2C%20Dharmatala%2C%20Taltala%2C%20Kolkata%2C%20West%20Bengal%20700087"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 sm:gap-3 hover:text-indigo-400 transition-colors duration-300"
              >
                <MdLocationOn className="text-indigo-400 mt-0.5 sm:mt-1 flex-shrink-0 w-4 h-4 sm:w-[18px] sm:h-[18px]" />
                <span>
                  3A, Bertram St, Esplanade, Dharmatala, Taltala, Kolkata, West
                  Bengal 700087
                </span>
              </a>

              <a
                href="mailto:hello@example.com"
                className="flex items-center gap-2 sm:gap-3 hover:text-indigo-400 transition-colors duration-300 w-fit"
              >
                <MdEmail className="text-indigo-400 flex-shrink-0 w-4 h-4 sm:w-[18px] sm:h-[18px]" />
                <span>hello@example.com</span>
              </a>

              <a
                href="tel:+919830590929"
                className="flex items-center gap-2 sm:gap-3 hover:text-indigo-400 transition-colors duration-300 w-fit"
              >
                <MdPhone className="text-indigo-400 flex-shrink-0 w-4 h-4 sm:w-[18px] sm:h-[18px]" />
                <span>+91 98305 90929</span>
              </a>
            </div>

            {/* Google Map */}
            <div className="rounded-xl sm:rounded-2xl overflow-hidden border border-gray-700 shadow-lg">
              <iframe
                title="Crowd Funding Location"
                src="https://www.google.com/maps?q=3A%20Bertram%20St%2C%20Esplanade%2C%20Dharmatala%2C%20Taltala%2C%20Kolkata%2C%20West%20Bengal%20700087&output=embed"
                width="100%"
                height="140"
                className="sm:h-[180px]"
                style={{ border: 0 }}
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-4 sm:pt-6 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-500">
          <p>
            © {new Date().getFullYear()} Crowd Funding. All rights reserved.
          </p>
          <p>Built with security &amp; trust in mind.</p>
        </div>
      </div>

    </footer>
  );
};

export default Footer;