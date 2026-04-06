import React from "react";
import aboutImg from "../assets/about.png";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <section
      id="about"
      className="w-full bg-gradient-to-b from-[#f8f9ff] via-[#f3f5ff] to-[#eef2ff] py-16 sm:py-20 md:py-28 overflow-hidden"
    >
      <div className="w-full max-w-7xl xl:max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -70 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        >
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#2e66ff] bg-[#eef2ff] px-4 py-1.5 rounded-full mb-4 sm:mb-6">
            About Us
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-[#1e2b4f] leading-[1.1] mb-4 sm:mb-6">
            Architecting a World Where{" "}
            <br className="hidden md:block" />
            <span className="text-[#2e66ff] italic">
              Innovation Has No Limits
            </span>
          </h2>

          <p className="text-sm sm:text-[15px] md:text-lg text-slate-500 leading-relaxed mb-4 sm:mb-6 max-w-lg lg:max-w-xl xl:max-w-2xl font-medium">
            Dismantling the walls between vision and capital. We provide the
            engine for human progress, fueling the minds that define our future.
          </p>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          className="relative group max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto w-full"
          initial={{ opacity: 0, x: 70 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1], delay: 0.1 }}
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-[#2e66ff] to-[#4f8cff] rounded-2xl sm:rounded-3xl blur-lg opacity-15 group-hover:opacity-25 transition duration-500"></div>
          <div className="relative p-1.5 sm:p-2 bg-white/40 backdrop-blur-md rounded-2xl sm:rounded-[2.5rem] border border-white/60 shadow-2xl group transition-all duration-700 hover:scale-[1.02]">
            <img
              src={aboutImg}
              alt="About Us"
              className="rounded-xl sm:rounded-[2rem] w-full h-auto object-cover aspect-[4/3]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
