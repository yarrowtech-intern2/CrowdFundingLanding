import React from "react";
import {
  MdEmail,
  MdPhone,
  MdLocationOn,
} from "react-icons/md";

const Footer = () => {
  const quickLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Investors", id: "investors" }, // Updated
    { name: "Security", id: "security" },
    { name: "Contact", id: "contact" },
  ];

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <footer className="bg-[#0f172a] text-gray-300 pt-20 pb-10 relative overflow-hidden">

      {/* Gradient Top Border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600" />

      <div className="max-w-7xl mx-auto px-6">

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">

          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">
              Crowd Funding
            </h3>

            <p className="text-gray-400 leading-relaxed">
              Empowering investors and startups through secure,
              transparent, and compliant crowdfunding solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-lg">
              Quick Links
            </h4>

            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="hover:text-indigo-400 transition duration-300 text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Map */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-lg">
              Contact Info
            </h4>

            <div className="space-y-4 text-sm mb-6">

              <div className="flex items-start gap-3">
                <MdLocationOn className="text-indigo-400 mt-1" size={18} />
                <span>
                  3A, Bertram St, Esplanade, Dharmatala, Taltala,
                  Kolkata, West Bengal 700087
                </span>
              </div>

              <div className="flex items-center gap-3">
                <MdEmail className="text-indigo-400" size={18} />
                <span>hello@example.com</span>
              </div>

              <div className="flex items-center gap-3">
                <MdPhone className="text-indigo-400" size={18} />
                <span>+91 98305 90929</span>
              </div>
            </div>

            {/* Google Map */}
            <div className="rounded-2xl overflow-hidden border border-gray-700 shadow-lg">
              <iframe
                title="Crowd Funding Location"
                src="https://www.google.com/maps?q=3A%20Bertram%20St%2C%20Esplanade%2C%20Dharmatala%2C%20Taltala%2C%20Kolkata%2C%20West%20Bengal%20700087&output=embed"
                width="100%"
                height="200"
                style={{ border: 0 }}
                loading="lazy"
              ></iframe>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>
            © {new Date().getFullYear()} Crowd Funding. All rights reserved.
          </p>

          <p className="mt-4 md:mt-0">
            Built with security & trust in mind.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;