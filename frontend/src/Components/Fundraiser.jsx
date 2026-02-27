import React, { useEffect } from "react";
import heroImg from "../assets/Fundraiser.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const FundraiserSection = () => {

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
      id="fundraise"
      className="w-full min-h-screen bg-gradient-to-b from-[#f8f9ff] via-[#f3f5ff] to-[#eef2ff] flex items-center"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-8 grid md:grid-cols-2 gap-16 items-center w-full">

        {/* LEFT IMAGE */}
        <div className="relative group" data-aos="fade-right">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#2e66ff] to-[#4f8cff] rounded-3xl blur-lg opacity-15 group-hover:opacity-25 transition duration-500"></div>

          <img
            src={heroImg}
            alt="Fundraiser"
            className="relative rounded-3xl shadow-2xl w-full object-cover transition duration-700 group-hover:scale-105"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div data-aos="fade-left">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#2e66ff] bg-[#eef2ff] px-4 py-1.5 rounded-full mb-6">
            Fundraising Platform
          </span>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#1e2b4f] leading-[1.1] mb-6">
            Start a Business <br />
            <span className="text-[#2e66ff] italic">Fundraiser</span>
          </h1>

          <p className="text-[15px] md:text-lg text-gray-600 leading-relaxed mb-4 max-w-xl">
            No fees to start or deadlines to meet. Raise funds to power your business dreams.
          </p>

          <p className="text-[15px] md:text-lg text-gray-600 leading-relaxed max-w-xl">
            Present your idea to a trusted network of investors and secure the capital needed to scale confidently.
          </p>
        </div>

      </div>
    </section>
  );
};

export default FundraiserSection;