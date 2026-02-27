import React, { useEffect } from "react";
import heroImg from "../assets/Investor.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const BrowseInvestors = () => {

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
      id="investors"
      className="w-full bg-gradient-to-b from-[#f8f9ff] via-[#f3f5ff] to-[#eef2ff] py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-8 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div data-aos="fade-right">

          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#2e66ff] bg-[#eef2ff] px-4 py-1.5 rounded-full mb-6">
            Investor Network
          </span>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#1e2b4f] leading-[1.1] mb-6">
            Discover Investors &{" "}
            <span className="text-[#2e66ff] italic">
              High-Growth Startups
            </span>
          </h1>

          <p className="text-[15px] md:text-lg text-gray-600 leading-relaxed mb-4 max-w-xl">
            Our platform connects visionary entrepreneurs with forward-thinking
            investors who are passionate about innovation and long-term growth.
            Whether you're seeking capital to scale your startup or looking for
            promising ventures to invest in, this is where opportunity begins.
          </p>

          <p className="text-[15px] md:text-lg text-gray-600 leading-relaxed mb-4 max-w-xl">
            Explore curated startup profiles, analyze business fundamentals,
            evaluate traction metrics, and build strategic partnerships in a
            secure and transparent environment.
          </p>

          <p className="text-[15px] md:text-lg text-gray-600 leading-relaxed max-w-xl">
            Join a growing ecosystem of founders and capital partners shaping
            industries through smart investments and visionary ideas.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative group" data-aos="fade-left">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#2e66ff] to-[#4f8cff] rounded-3xl blur-lg opacity-15 group-hover:opacity-25 transition duration-500"></div>

          <img
            src={heroImg}
            alt="Investor"
            className="relative rounded-3xl shadow-2xl w-full object-cover transition duration-700 group-hover:scale-105"
          />
        </div>

      </div>
    </section>
  );
};

export default BrowseInvestors;