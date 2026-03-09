import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import HeroVideo from "../assets/video.mp4";

// ─── Blue Canvas Animated Background ─────────────────────────────────────────
const BlueAnimatedBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    const resizeCanvas = () => {
      const parent = document.getElementById("home");
      if (parent) {
        canvas.width = parent.offsetWidth;
        canvas.height = parent.offsetHeight;
      } else {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    setTimeout(resizeCanvas, 50);

    const gridSize = 60;
    let offset = 0;

    const particles = Array.from({ length: 60 }).map(() => ({
      x: Math.random() * (canvas.width || window.innerWidth),
      y: Math.random() * (canvas.height || window.innerHeight),
      size: Math.random() * 3 + 1,
      speedY: Math.random() * 0.8 + 0.2,
      opacity: Math.random() * 0.4 + 0.1,
    }));

    const draw = () => {
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      // Light Blue/Slate gradient background to keep the UI legible
      const gradient = ctx.createLinearGradient(0, 0, w, h);
      gradient.addColorStop(0, "#e0e7ff"); // indigo-100
      gradient.addColorStop(0.5, "#bfdbfe"); // blue-200
      gradient.addColorStop(1, "#dbeafe"); // blue-100
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, w, h);

      // Perspective grid - vertical lines (Blue)
      ctx.strokeStyle = "rgba(37, 99, 235, 0.4)"; // blue-600
      ctx.lineWidth = 1.5;
      const centerX = w / 2;
      for (let i = 0; i <= w; i += gridSize) {
        ctx.beginPath();
        ctx.moveTo(centerX, h);
        ctx.lineTo(i, 0);
        ctx.stroke();
      }

      // Horizontal lines with motion
      offset = (offset + 0.5) % gridSize;
      for (let i = h; i >= 0; i -= gridSize) {
        const currentY = i + offset;
        ctx.beginPath();
        ctx.moveTo(0, currentY);
        ctx.lineTo(w, currentY);
        ctx.strokeStyle = `rgba(37, 99, 235, ${Math.max(0, (currentY / h) * 0.5)})`;
        ctx.stroke();
      }

      // Floating blue particles
      particles.forEach((p) => {
        ctx.beginPath();
        const flicker = Math.random() * 0.2 + p.opacity;
        ctx.fillStyle = `rgba(29, 78, 216, ${flicker + 0.2})`; // blue-700
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        p.y -= p.speedY;
        if (p.y < 0) {
          p.y = h;
          p.x = Math.random() * w;
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
};
// ─────────────────────────────────────────────────────────────────────────────

const Hero = () => {
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

  // Staggered container animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  // Individual item animations
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.23, 1, 0.320, 1], // Custom cubic-bezier for smooth ease
      },
    },
  };

  // Slide from right animation
  const slideInRightVariants = {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.9,
        ease: [0.23, 1, 0.320, 1],
      },
    },
  };

  // Slide from left animation
  const slideInLeftVariants = {
    hidden: { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.9,
        ease: [0.23, 1, 0.320, 1],
      },
    },
  };

  // Floating animation for background blurs
  const floatVariants = {
    initial: { y: 0 },
    animate: {
      y: [0, 30, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  // Subtle scale on button hover
  const buttonVariants = {
    rest: { scale: 1 },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3, ease: "easeOut" },
    },
    tap: { scale: 0.98 },
  };
  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center overflow-hidden bg-transparent"
    >
      <BlueAnimatedBackground />

      <div className="relative w-full max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center z-10">
        {/* LEFT CONTENT */}
        <motion.div
          variants={slideInRightVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.p
            className="text-sm font-bold uppercase tracking-widest text-indigo-600 mb-6"
            variants={itemVariants}
          >
            Crowdfunding Platform
          </motion.p>

          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight mb-8"
            variants={itemVariants}
          >
            Successful{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text italic text-transparent">
              Fundraisers
            </span>
            <br />
            Start Here
          </motion.h1>

          <motion.p
            className="text-lg text-slate-600 max-w-lg leading-relaxed mb-10"
            variants={itemVariants}
          >
            Raise funds for your startup, idea, or mission. Connect with investors and supporters worldwide.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Primary Button */}
            <motion.button
              onClick={() => scrollToSection("fundraise")}
              className="px-8 py-3.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-300"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              initial="rest"
            >
              Start A Fundraiser
            </motion.button>

            {/* Secondary Button */}
            <motion.button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-3.5 bg-white text-slate-700 font-semibold rounded-lg border-2 border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all duration-300"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              initial="rest"
            >
              Get Started
            </motion.button>
          </motion.div>
        </motion.div>

        {/* RIGHT VIDEO */}
        <motion.div
          className="relative h-[350px] sm:h-[400px] md:h-[500px] lg:h-[550px] mt-4 md:mt-8 lg:mt-12"
          variants={slideInLeftVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-slate-200"
            whileHover={{ boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
            transition={{ duration: 0.3 }}
          >
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
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;