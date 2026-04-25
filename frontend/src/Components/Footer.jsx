import React from "react";
import { motion } from "framer-motion";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

const Footer = () => {
  const sectionVariants = {
    hidden: (direction) => ({ opacity: 0, x: direction === "left" ? -50 : 50 }),
    visible: { opacity: 1, x: 0 },
  };

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
    <footer className="bg-[#0f172a] text-slate-400 py-10 md:py-12 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />

      <div className="w-full max-w-7xl 2xl:max-w-6xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 2xl:px-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-10 sm:mb-12 items-start">
          <motion.div
            custom="left"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="space-y-4 lg:col-span-3"
          >
            <h3 className="text-xl font-black text-white tracking-tighter">M8-BID</h3>
            <p className="text-sm font-medium leading-relaxed max-w-sm text-slate-400">
              Empowering global visionaries through elite capital connection and secure, transparent crowdfunding solutions.
            </p>
          </motion.div>

          <motion.div
            custom="right"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.65, ease: "easeOut", delay: 0.05 }}
            className="lg:col-span-2 lg:justify-self-center"
          >
            <h4 className="text-white font-bold text-[10px] uppercase tracking-[0.2em] mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button type="button" onClick={() => scrollToSection(link.id)} className="text-slate-400 hover:text-indigo-400 text-xs transition-colors font-bold uppercase tracking-wider flex items-center group">
                    <span className="w-0 group-hover:w-4 h-[1px] bg-indigo-500 mr-0 group-hover:mr-2 transition-all"></span>
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            custom="right"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.65, ease: "easeOut", delay: 0.1 }}
            className="space-y-6 lg:col-span-3 lg:pl-4"
          >
            <h4 className="text-white font-bold text-[10px] uppercase tracking-[0.2em]">Contact</h4>
            <div className="flex flex-col gap-5">
              <a href="mailto:hello@m8bid.com" className="flex items-center gap-4 text-slate-400 hover:text-indigo-100 transition-colors group">
                <div className="w-10 h-10 flex-shrink-0 rounded-xl bg-slate-800/50 flex items-center justify-center text-indigo-500 transition-all shadow-sm">
                  <MdEmail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-slate-500 mb-0.5">Email</p>
                  <span className="text-xs font-semibold">hello@m8bid.com</span>
                </div>
              </a>
              <a href="tel:+919830590929" className="flex items-center gap-4 text-slate-400 hover:text-indigo-100 transition-colors group">
                <div className="w-10 h-10 flex-shrink-0 rounded-xl bg-slate-800/50 flex items-center justify-center text-indigo-500 transition-all shadow-sm">
                  <MdPhone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-slate-500 mb-0.5">Phone</p>
                  <span className="text-xs font-semibold">+91 98305 90929</span>
                </div>
              </a>
              <div className="flex items-start gap-4 text-slate-400 border-t border-slate-800/50 pt-4 mt-1">
                <div className="w-10 h-10 flex-shrink-0 rounded-xl bg-slate-800/50 flex items-center justify-center text-indigo-500 transition-all shadow-sm">
                  <MdLocationOn className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-slate-500 mb-0.5">Office</p>
                  <span className="text-xs font-semibold leading-tight block max-w-[180px]">3A, Bertram St, Esplanade, Kolkata 700087</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            custom="left"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.65, ease: "easeOut", delay: 0.15 }}
            className="space-y-6 lg:col-span-4"
          >
            <h4 className="text-white font-bold text-[10px] uppercase tracking-[0.2em] lg:text-right">Map View</h4>

            <div className="space-y-4">
              <div className="relative w-full h-64 rounded-xl overflow-hidden border border-white/10 shadow-2xl group ml-auto">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.2755315510!2d88.351239!3d22.5606456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277063cc9b257%3A0xe54970477e68e4c7!2s3A%2C%20Bertram%20St%2C%20Esplanade%2C%20Kolkata%2C%20West%20Bengal%20700087!5e0!3m2!1sen!2sin!4v1712495000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Footer Office Location"
                  className="transition-all duration-500"
                />
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          custom="right"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="pt-8 border-t border-slate-800/30 flex flex-col sm:flex-row justify-between items-center gap-6 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500"
        >
          <p>&copy; {new Date().getFullYear()} M8-BID. All rights reserved.</p>
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
