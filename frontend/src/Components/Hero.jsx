import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import HeroVideo from "../assets/video.mp4";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (!element) return;

    const navbarOffset = 110;
    const y =
      element.getBoundingClientRect().top +
      window.pageYOffset -
      navbarOffset;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-white via-slate-50/40 to-white"
    >
      {/* Refined Background Blurs */}
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-indigo-200/25 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-purple-200/20 rounded-full blur-3xl" />

      <div className="relative w-full max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div data-aos="fade-right">
          <p className="text-sm font-bold uppercase tracking-widest text-indigo-600 mb-6">
            Crowdfunding Platform
          </p>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight mb-8">
            Successful{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text italic text-transparent">
              Fundraisers
            </span>
            <br />
            Start Here
          </h1>

          <p className="text-lg text-slate-600 max-w-lg leading-relaxed mb-10">
            Raise funds for your startup, idea, or mission. Connect with investors and supporters worldwide.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            {/* Primary Button */}
            <button
              onClick={() => scrollToSection("fundraise")}
              className="px-8 py-3.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-300"
            >
              Start A Fundraiser
            </button>

            {/* Secondary Button */}
            <button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-3.5 bg-white text-slate-700 font-semibold rounded-lg border-2 border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all duration-300"
            >
              Get Started
            </button>
          </div>
        </div>

        {/* RIGHT VIDEO */}
        <div
          className="relative h-[350px] sm:h-[400px] md:h-[500px] lg:h-[550px]"
          data-aos="fade-left"
        >
          <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
            <video
              src={HeroVideo}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              controls
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;