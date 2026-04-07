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
    <footer className="bg-[#0f172a] text-slate-400 py-10 md:py-14 relative overflow-hidden">
      {/* Top Accent */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />

      <div className="w-full max-w-[85rem] 2xl:max-w-6xl mx-auto px-6 sm:px-12 lg:px-20 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-14 mb-10 sm:mb-14">
          
          {/* Brand */}
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ amount: 0.2 }} transition={{ duration: 0.8 }} className="sm:col-span-2 lg:col-span-2">
            <h3 className="text-lg sm:text-xl font-black text-white mb-5">M8-BID</h3>
            <p className="text-xs sm:text-sm font-medium leading-relaxed max-w-sm mb-8 text-slate-400">
              Empowering global visionaries through elite capital connection and secure, transparent crowdfunding solutions.
            </p>
          </motion.div>

          {/* Links */}
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ amount: 0.2 }} transition={{ duration: 0.8, delay: 0.1 }}>
            <h4 className="text-white font-bold text-[10px] uppercase tracking-widest mb-6">Quick Links</h4>
            <ul className="space-y-3.5">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button onClick={() => scrollToSection(link.id)} className="text-slate-400 hover:text-indigo-400 text-[11px] sm:text-xs transition-colors font-bold uppercase tracking-wider">
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ amount: 0.2 }} transition={{ duration: 0.8, delay: 0.2 }}>
            <h4 className="text-white font-bold text-[10px] uppercase tracking-widest mb-6">Connect</h4>
            <div className="space-y-3.5 text-xs mb-8">
              <a href="#" className="flex items-start gap-2.5 text-slate-400 hover:text-indigo-100 transition-colors">
                <MdLocationOn className="text-indigo-500 w-4 h-4 flex-shrink-0" />
                <span className="text-[11px] sm:text-xs font-medium">3A, Bertram St, Esplanade, Kolkata 700087</span>
              </a>
              <a href="mailto:hello@m8bid.com" className="flex items-center gap-2.5 text-slate-400 hover:text-indigo-100 transition-colors">
                <MdEmail className="text-indigo-500 w-4 h-4" />
                <span className="text-[11px] sm:text-xs font-medium">hello@m8bid.com</span>
              </a>
              <a href="tel:+919830590929" className="flex items-center gap-2.5 text-slate-400 hover:text-indigo-100 transition-colors">
                <MdPhone className="text-indigo-500 w-4 h-4" />
                <span className="text-[11px] sm:text-xs font-medium">+91 98305 90929</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Legal */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ amount: 0.2 }} transition={{ duration: 0.8 }} className="pt-8 border-t border-slate-800/30 flex flex-col sm:flex-row justify-between items-center gap-4 text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-slate-500">
          <p>© {new Date().getFullYear()} M8-BID. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-indigo-400 transition-all">Privacy</a>
            <a href="#" className="hover:text-indigo-400 transition-all">Terms</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;