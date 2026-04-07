import React from "react";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { motion } from "framer-motion";

const Footer = () => {
  const quickLinks = [
    { name: "Home", id: "home" },
    { name: "Investors", id: "investors" },
    { name: "About", id: "about" },
    { name: "Security", id: "security" },
    { name: "Contact", id: "contact" },
  ];

  const scrollToSection = (id) => {
    requestAnimationFrame(() => {
      const element = document.getElementById(id);
      if (!element) return;
      const navbarOffset = 90;
      const y = element.getBoundingClientRect().top + window.pageYOffset - navbarOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    });
  };

  return (
    <footer className="bg-[#0f172a] text-gray-300 py-[var(--fluid-py)] relative overflow-hidden">
      {/* Top Accent */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-indigo-500/0 via-indigo-600 to-indigo-500/0" />

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 md:gap-16 mb-12 sm:mb-16">
          
          {/* Brand */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="sm:col-span-2 lg:col-span-1"
          >
            <h3 className="text-xl sm:text-2xl 2xl:text-4xl font-black text-white mb-6">M8-BID</h3>
            <p className="text-slate-400 text-sm sm:text-base 2xl:text-xl max-w-sm font-medium leading-relaxed mb-8">
              Empowering global visionaries through elite capital connection and secure, transparent crowdfunding solutions.
            </p>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="text-white font-bold text-sm sm:text-base 2xl:text-2xl mb-6 uppercase tracking-widest">Quick Links</h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button onClick={() => scrollToSection(link.id)} className="text-slate-400 hover:text-indigo-400 text-xs sm:text-sm 2xl:text-lg transition-colors font-semibold">
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="text-white font-bold text-sm sm:text-base 2xl:text-2xl mb-6 uppercase tracking-widest">Connect</h4>
            <div className="space-y-4 text-xs sm:text-sm 2xl:text-lg mb-8">
              <a href="#" className="flex items-start gap-3 text-slate-400 hover:text-indigo-400 transition-colors">
                <MdLocationOn className="text-indigo-500 w-5 h-5 flex-shrink-0" />
                <span>3A, Bertram St, Esplanade, Dharmatala, Kolkata 700087</span>
              </a>
              <a href="mailto:hello@m8bid.com" className="flex items-center gap-3 text-slate-400 hover:text-indigo-400 transition-colors">
                <MdEmail className="text-indigo-500 w-5 h-5" />
                <span>hello@m8bid.com</span>
              </a>
              <a href="tel:+919830590929" className="flex items-center gap-3 text-slate-400 hover:text-indigo-400 transition-colors">
                <MdPhone className="text-indigo-500 w-5 h-5" />
                <span>+91 98305 90929</span>
              </a>
            </div>
            
            <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-2xl opacity-90 transition-opacity hover:opacity-100">
              <iframe title="Location" src="https://www.google.com/maps?q=3A%20Bertram%20St%2C%20Esplanade%2C%20Dharmatala%2C%20Taltala%2C%20Kolkata%2C%20West%20Bengal%20700087&output=embed" width="100%" height="130" style={{ border: 0 }} loading="lazy" />
            </div>
          </motion.div>
        </div>

        {/* Legal */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] sm:text-xs 2xl:text-sm text-slate-500 font-bold uppercase tracking-widest"
        >
          <p>© {new Date().getFullYear()} M8-BID. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-indigo-400 transition-colors">Privacy</a>
            <a href="#" className="hover:text-indigo-400 transition-colors">Terms</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;