import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { MdLock, MdGavel, MdVerified } from "react-icons/md";

const items = [
  {
    id: 1,
    title: "Data Encryption",
    desc: "All transactions and personal data are encrypted with 256-bit SSL, ensuring your financial information remains completely private and protected from unauthorized access.",
    icon: <MdLock className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 xl:w-9 xl:h-9 2xl:w-10 2xl:h-10" color="white" />,
    direction: -70,
  },
  {
    id: 2,
    title: "Regulatory Compliance",
    desc: "Fully compliant with SEBI and government regulations. Our platform undergoes regular audits to ensure adherence to all applicable financial laws and investor protection guidelines.",
    icon: <MdGavel className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 xl:w-9 xl:h-9 2xl:w-10 2xl:h-10" color="white" />,
    direction: 0,
    y: 50,
  },
  {
    id: 3,
    title: "Verified Properties",
    desc: "All listed investments are thoroughly vetted by our expert team. Every property undergoes a rigorous due diligence process before being made available to investors on our platform.",
    icon: <MdVerified className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 xl:w-9 xl:h-9 2xl:w-10 2xl:h-10" color="white" />,
    direction: 70,
  },
];

const SecurityCompliance = () => {
  return (
    <section
      id="security"
      className="w-full bg-white py-[var(--fluid-py)] overflow-hidden"
    >
      <div className="section-container">
        {/* HEADER */}
        <motion.div
          className="text-center mb-8 sm:mb-12 md:mb-20 2xl:mb-28"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        >
          <span className="inline-block text-xs md:text-sm font-bold uppercase tracking-widest text-primary bg-indigo-50 px-4 py-1.5 md:py-2 rounded-full mb-3 sm:mb-4">
            Trust &amp; Safety
          </span>

          <h2 className="heading-section text-primary-dark mb-3 sm:mb-5">
            Security &amp;{" "}
            <span className="text-primary italic">Compliance</span>
          </h2>
          <p className="max-w-2xl mx-auto text-body text-black font-medium">
            We prioritize your protection with industry-leading security protocols and 
            unwavering adherence to global regulatory standards.
          </p>
        </motion.div>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 xl:gap-14">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{
                opacity: 0,
                x: item.direction || 0,
                y: item.y || 40,
              }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
                ease: [0.23, 1, 0.32, 1],
              }}
              className={`bg-white rounded-xl p-6 sm:p-8 md:p-8 lg:p-10 xl:p-11 2xl:p-12 shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-2 hover:bg-indigo-50/60 hover:border-indigo-100 transition-all duration-300 flex flex-col group ${
                index === 2 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg bg-primary group-hover:bg-[#0f172a] transition-colors duration-500 mb-5 sm:mb-6 md:mb-8">
                <div className="transform group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
              </div>

              <h3 className="text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-2xl 2xl:text-3xl font-bold text-primary-dark mb-3 sm:mb-4">
                {item.title}
              </h3>

              <div className="w-16 h-1 bg-indigo-50 mb-5 sm:mb-6 group-hover:w-full transition-all duration-500" />

              <p className="text-black text-body leading-relaxed flex-1 font-medium text-sm sm:text-base">
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