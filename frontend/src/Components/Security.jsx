import React from "react";
import { motion } from "framer-motion";
import { MdLock, MdGavel, MdVerified } from "react-icons/md";

const items = [
  {
    id: 1,
    title: "Data Encryption",
    desc: "All transactions and personal data are encrypted with 256-bit SSL, ensuring your financial information remains completely private and protected from unauthorized access.",
    icon: <MdLock size={22} color="white" />,
    direction: -70, // from left
  },
  {
    id: 2,
    title: "Regulatory Compliance",
    desc: "Fully compliant with SEBI and government regulations. Our platform undergoes regular audits to ensure adherence to all applicable financial laws and investor protection guidelines.",
    icon: <MdGavel size={22} color="white" />,
    direction: 0, // from bottom
    y: 50
  },
  {
    id: 3,
    title: "Verified Properties",
    desc: "All listed investments are thoroughly vetted by our expert team. Every property undergoes a rigorous due diligence process before being made available to investors on our platform.",
    icon: <MdVerified size={22} color="white" />,
    direction: 70, // from right
  },
];

const SecurityCompliance = () => {
  return (
    <section
      id="security"
      className="w-full bg-[#f6f7fb] py-20 md:py-28 overflow-hidden"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER (Slides from Bottom) */}
        <motion.div 
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        >
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#2e66ff] bg-[#eef2ff] px-4 py-1.5 rounded-full mb-4">
            Trust & Safety
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1e2b4f] mb-5">
            Security &{" "}
            <span className="text-[#2e66ff] italic">
              Compliance
            </span>
          </h2>
        </motion.div>

        {/* CARDS (Animated from sides and bottom) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: item.direction || 0, y: item.y || 40 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: [0.23, 1, 0.32, 1] }}
              className={`bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col group ${index === 2 ? "sm:col-span-2 lg:col-span-1" : ""}`}
            >
              {/* Icon */}
              <div className="h-12 w-12 rounded-2xl bg-[#2e66ff] flex items-center justify-center shadow-lg group-hover:bg-[#1e2b4f] transition-colors duration-300 mb-6">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-[#1e2b4f] mb-4">
                {item.title}
              </h3>

              {/* Divider */}
              <div className="border-t border-gray-100 mb-5" />

              {/* Description */}
              <p className="text-gray-600 text-sm md:text-base leading-relaxed flex-1">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SecurityCompliance;