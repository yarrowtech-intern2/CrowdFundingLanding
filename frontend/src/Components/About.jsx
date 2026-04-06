import React from "react";
import aboutImg from "../assets/about.png";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <section
      id="about"
      className="w-full bg-gradient-to-b from-[#f8f9ff] via-[#f3f5ff] to-[#eef2ff] py-16 sm:py-20 md:py-28 lg:py-36 2xl:py-48 overflow-hidden"
    >
      <div className="section-container grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 2xl:gap-32 items-center">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -70 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        >
          <span className="inline-block text-xs md:text-sm font-bold uppercase tracking-widest text-primary bg-indigo-50 px-4 py-1.5 md:py-2 rounded-full mb-6 sm:mb-8">
            About Us
          </span>

          <h2 className="heading-section text-primary-dark mb-6 sm:mb-8">
            Architecting a World Where{" "}
            <br className="hidden md:block" />
            <span className="text-primary italic">
              Innovation Has No Limits
            </span>
          </h2>

          <p className="text-body text-slate-500 mb-8 sm:mb-10 md:mb-12 max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-4xl font-medium">
            Dismantling the walls between vision and capital. We provide the
            engine for human progress, fueling the minds that define our future.
          </p>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          className="relative group max-w-sm sm:max-w-md lg:max-w-full xl:max-w-2xl 2xl:max-w-3xl mx-auto w-full"
          initial={{ opacity: 0, x: 70 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1], delay: 0.1 }}
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-[#2e66ff] to-[#4f8cff] rounded-3xl sm:rounded-[3rem] blur-xl opacity-20 group-hover:opacity-30 transition duration-500"></div>
          <div className="relative p-2 sm:p-3 bg-white/40 backdrop-blur-md rounded-3xl sm:rounded-[3.5rem] border border-white/60 shadow-2xl group transition-all duration-700 hover:scale-[1.02]">
            <img
              src={aboutImg}
              alt="About Us"
              className="rounded-2xl sm:rounded-[3rem] w-full h-auto object-cover aspect-[4/3] shadow-inner"
            />
          </div>
        </motion.div>
      </div>
    </section>

  );
};

export default AboutUs;
