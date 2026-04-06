import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { MdLock, MdGavel, MdVerified } from "react-icons/md";

const items = [
  {
    id: 1,
    title: "Data Encryption",
    desc: "All transactions and personal data are encrypted with 256-bit SSL, ensuring your financial information remains completely private and protected from unauthorized access.",
    icon: <MdLock size={22} color="white" />,
    direction: -70,
  },
  {
    id: 2,
    title: "Regulatory Compliance",
    desc: "Fully compliant with SEBI and government regulations. Our platform undergoes regular audits to ensure adherence to all applicable financial laws and investor protection guidelines.",
    icon: <MdGavel size={22} color="white" />,
    direction: 0,
    y: 50,
  },
  {
    id: 3,
    title: "Verified Properties",
    desc: "All listed investments are thoroughly vetted by our expert team. Every property undergoes a rigorous due diligence process before being made available to investors on our platform.",
    icon: <MdVerified size={22} color="white" />,
    direction: 70,
  },
];

const SecurityCompliance = () => {
  return (
    <section
      id="security"
      className="w-full bg-surface py-16 sm:py-20 md:py-28 lg:py-32 2xl:py-40 overflow-hidden"
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
          <p className="max-w-2xl mx-auto text-body text-gray-500 font-medium">
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
              className={`bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 2xl:p-12 shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col group ${
                index === 2 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="h-12 w-12 sm:h-14 sm:w-14 2xl:h-16 2xl:w-16 rounded-xl sm:rounded-2xl bg-primary flex items-center justify-center shadow-lg group-hover:bg-primary-dark transition-colors duration-300 mb-5 sm:mb-6 md:mb-8">
                <div className="transform group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
              </div>

              <h3 className="text-lg sm:text-xl md:text-2xl 2xl:text-3xl font-bold text-primary-dark mb-3 sm:mb-4">
                {item.title}
              </h3>

              <div className="w-16 h-1 bg-indigo-50 mb-5 sm:mb-6 group-hover:w-full transition-all duration-500" />

              <p className="text-gray-600 text-body leading-relaxed flex-1 font-medium">
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