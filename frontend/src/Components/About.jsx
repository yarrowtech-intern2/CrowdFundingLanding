import React, { useEffect } from "react";
import aboutImg from "../assets/about.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutUs = () => {

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
      id="about"
      className="w-full bg-gradient-to-b from-[#f8f9ff] via-[#f3f5ff] to-[#eef2ff] py-24 md:py-32"
    >
      
      <div className="max-w-6xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div data-aos="fade-right">

          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#2e66ff] bg-[#eef2ff] px-4 py-1.5 rounded-full mb-6">
            About Us
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#1e2b4f] leading-[1.1] mb-6">
            Building the Future of <br />
            <span className="text-[#2e66ff] italic">Digital Fundraising</span>
          </h2>

          <p className="text-[15px] md:text-lg text-gray-600 leading-relaxed mb-5 max-w-xl">
            We are a modern crowdfunding platform empowering entrepreneurs,
            startups, and investors through a secure and transparent ecosystem.
          </p>

          <p className="text-[15px] md:text-lg text-gray-600 leading-relaxed mb-5 max-w-xl">
            Our mission is to simplify capital raising while maintaining the
            highest standards of due diligence, compliance, and investor protection.
          </p>

          <p className="text-[15px] md:text-lg text-gray-600 leading-relaxed max-w-xl">
            By combining financial integrity with advanced technology,
            we create opportunities where innovation thrives and investments grow confidently.
          </p>

        </div>

        {/* RIGHT IMAGE */}
        <div className="relative group" data-aos="fade-left">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#2e66ff] to-[#4f8cff] rounded-3xl blur-lg opacity-15 group-hover:opacity-25 transition duration-500"></div>

          <img
            src={aboutImg}
            alt="About Us"
            className="relative rounded-3xl shadow-2xl w-full object-cover transition duration-700 group-hover:scale-105"
          />
        </div>

      </div>
    </section>
  );
};

export default AboutUs;