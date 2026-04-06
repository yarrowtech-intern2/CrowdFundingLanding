import React from "react";
import fundraiserImg from "../assets/Fundraiser.png";
import { motion } from "framer-motion";

const FundraiserSection = () => {
  return (
    <section
      id="fundraise"
      className="w-full bg-gradient-to-b from-[#f8f9ff] via-[#f3f5ff] to-[#eef2ff] flex items-center overflow-hidden py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">

        {/* LEFT IMAGE (Slides from Left) */}
        <motion.div 
          className="relative group max-w-sm sm:max-w-md lg:max-w-full mx-auto w-full"
          initial={{ opacity: 0, x: -70 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-[#2e66ff] to-[#4f8cff] rounded-3xl blur-lg opacity-15 group-hover:opacity-25 transition duration-500"></div>
          <img
            src={fundraiserImg}
            alt="Fundraiser"
            className="relative rounded-3xl shadow-2xl w-full h-auto object-cover transition duration-700 group-hover:scale-105"
          />
        </motion.div>

        {/* RIGHT CONTENT (Slides from Right) */}
        <motion.div 
          initial={{ opacity: 0, x: 70 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1], delay: 0.1 }}
        >
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#2e66ff] bg-[#eef2ff] px-4 py-1.5 rounded-full mb-6">
            Fundraising Platform
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1e2b4f] leading-[1.1] mb-6">
            Ignite Your Ambition. <br />
            <span className="text-[#2e66ff] italic">Architect the Future</span>
          </h1>

          <p className="text-[15px] md:text-lg text-gray-600 leading-relaxed mb-6 max-w-xl">
            Launch your vision with <strong>0% platform fees</strong>, global reach, and a direct line to elite capital. We provide the tools and exposure you need to transition from an idea to a global market leader with unshakeable speed.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default FundraiserSection;