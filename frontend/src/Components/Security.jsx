import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { MdLock, MdGavel, MdVerified } from "react-icons/md";

const items = [
  {
    id: 1,
    title: "Data Encryption",
    desc: "All transactions and personal data are encrypted with 256-bit SSL, ensuring your financial information remains completely private and protected from unauthorized access.",
    icon: <MdLock size={22} color="white" />,
  },
  {
    id: 2,
    title: "Regulatory Compliance",
    desc: "Fully compliant with SEBI and government regulations. Our platform undergoes regular audits to ensure adherence to all applicable financial laws and investor protection guidelines.",
    icon: <MdGavel size={22} color="white" />,
  },
  {
    id: 3,
    title: "Verified Properties",
    desc: "All listed investments are thoroughly vetted by our expert team. Every property undergoes a rigorous due diligence process before being made available to investors on our platform.",
    icon: <MdVerified size={22} color="white" />,
  },
];

const SecurityCompliance = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
    });
  }, []);

  return (
    <section
      id="security"
      className="w-full bg-[#f6f7fb] py-20 md:py-28"
    >
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8">

        {/* HEADER */}
        <div className="text-center mb-16 md:mb-20" data-aos="fade-up">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#2e66ff] bg-[#eef2ff] px-4 py-1.5 rounded-full mb-4">
            Trust & Safety
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1e2b4f] mb-5">
            Security &{" "}
            <span className="text-[#2e66ff] italic">
              Compliance
            </span>
          </h2>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div
              key={item.id}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col group"
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
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SecurityCompliance;