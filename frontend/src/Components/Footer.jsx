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
    <footer className="bg-[#0f172a] text-slate-400 py-12 md:py-16 relative overflow-hidden">
      {/* Top Accent */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />

      <div className="w-full max-w-[85rem] 2xl:max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 2xl:gap-24 mb-12 sm:mb-16 items-start">
          
          {/* Brand */}
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ amount: 0.2 }} transition={{ duration: 0.8 }} className="space-y-6">
            <h3 className="text-xl font-black text-white tracking-tighter">M8-BID</h3>
            <p className="text-sm font-medium leading-relaxed max-w-sm text-slate-400">
              Empowering global visionaries through elite capital connection and secure, transparent crowdfunding solutions.
            </p>
          </motion.div>

          {/* Links */}
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ amount: 0.2 }} transition={{ duration: 0.8, delay: 0.1 }} className="lg:justify-self-center">
            <h4 className="text-white font-bold text-[11px] uppercase tracking-[0.2em] mb-8">Quick Links</h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button onClick={() => scrollToSection(link.id)} className="text-slate-400 hover:text-indigo-400 text-xs transition-colors font-bold uppercase tracking-wider flex items-center group">
                    <span className="w-0 group-hover:w-4 h-[1px] bg-indigo-500 mr-0 group-hover:mr-2 transition-all"></span>
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact & Map (Right Side) */}
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ amount: 0.2 }} transition={{ duration: 0.8, delay: 0.2 }} className="space-y-8">
            <h4 className="text-white font-bold text-[11px] uppercase tracking-[0.2em]">Connect</h4>
            
            <div className="space-y-6">
              <a href="#" className="flex items-start gap-4 text-slate-400 hover:text-indigo-100 transition-colors group">
                <div className="w-10 h-10 rounded-xl bg-slate-800/50 flex items-center justify-center text-indigo-500 group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-sm">
                  <MdLocationOn className="w-5 h-5" />
                </div>
                <div className="max-w-[200px]">
                  <p className="text-[10px] uppercase font-bold text-slate-500 mb-1">Office</p>
                  <span className="text-xs font-semibold leading-relaxed">3A, Bertram St, Esplanade, Kolkata 700087</span>
                </div>
              </a>
              
              {/* Right-Side Map */}
              <div className="relative w-full h-40 rounded-2xl overflow-hidden shadow-2xl border border-white/5 ring-1 ring-white/10">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.2755315510!2d88.351239!3d22.5606456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277063cc9b257%3A0xe54970477e68e4c7!2s3A%2C%20Bertram%20St%2C%20Esplanade%2C%20Kolkata%2C%20West%20Bengal%20700087!5e0!3m2!1sen!2sin!4v1712495000000!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, filter: "grayscale(1) invert(0.92) contrast(1.2) brightness(0.9)" }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location"
                  className="grayscale-0 hover:grayscale-0 transition-all duration-700"
                />
              </div>

              <div className="flex flex-col gap-4">
                <a href="mailto:hello@m8bid.com" className="flex items-center gap-4 text-slate-400 hover:text-indigo-100 transition-colors group">
                  <MdEmail className="text-indigo-500 w-5 h-5" />
                  <span className="text-xs font-semibold">hello@m8bid.com</span>
                </a>
                <a href="tel:+919830590929" className="flex items-center gap-4 text-slate-400 hover:text-indigo-100 transition-colors group">
                  <MdPhone className="text-indigo-500 w-5 h-5" />
                  <span className="text-xs font-semibold">+91 98305 90929</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Legal */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ amount: 0.2 }} transition={{ duration: 0.8 }} className="pt-10 border-t border-slate-800/30 flex flex-col sm:row justify-between items-center gap-6 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
          <p>© {new Date().getFullYear()} M8-BID. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-indigo-400 transition-all">Privacy Policy</a>
            <a href="#" className="hover:text-indigo-400 transition-all">Terms of Service</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;