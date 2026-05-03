import React, { useCallback } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import {
  SiMongodb,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiTailwindcss,
  SiGit,
} from "react-icons/si";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Typewriter } from "react-simple-typewriter";

/* ================= HERO ================= */
function HeroSection() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <section
      id="home"
      className="relative overflow-hidden px-6 pt-20 xl:pt-12 pb-16 bg-[#050816]"
    >
      {/* PARTICLES */}
      <Particles
        init={particlesInit}
        className="absolute inset-0 -z-10 pointer-events-none"
        options={{
          particles: {
            number: { value: 40 },
            size: { value: 2 },
            move: { enable: true, speed: 0.3 },
            opacity: { value: 0.5 },
          },
        }}
      />

      <div className="max-w-7xl mx-auto grid xl:grid-cols-2 gap-12 xl:gap-20 items-center">
        {/* ================= LEFT ================= */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.15 },
            },
          }}
          className="space-y-6 text-center xl:text-left z-10"
        >
          {/* HEADING */}
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-gray-300 text-lg">Hi, I'm</span>
            <div className="text-4xl sm:text-5xl xl:text-6xl font-extrabold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Kuldip Patel
            </div>
          </motion.h1>

          {/* TYPEWRITER */}
          <motion.span
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
            className="text-lg sm:text-xl font-semibold text-purple-300 block min-h-[28px]"
          >
            <Typewriter
              words={[
                "Full Stack Developer",
                "MERN Stack Developer",
                "Web Developer",
                "Building Scalable UI",
                "Java Developer",
              ]}
              loop
              cursor
            />
          </motion.span>

          {/* DESCRIPTION */}
          <motion.p
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
            transition={{ duration: 0.5 }}
            className="text-gray-400 max-w-lg mx-auto xl:mx-0"
          >
            I build modern, scalable and visually engaging web applications with
            a focus on performance and user experience.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap gap-4 justify-center xl:justify-start"
          >
            <a
              href="#contact"
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold transition hover:scale-105 active:scale-95"
            >
              Let’s Connect
            </a>

            <a
              href="https://github.com/Kuldip-1101"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg border border-gray-600 text-white flex items-center gap-2 hover:bg-white/10 active:scale-95"
            >
              <FaGithub /> GitHub
            </a>
          </motion.div>

          {/* SOCIAL ICONS (RESTORED) */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 15 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
            className="flex gap-4 justify-center xl:justify-start text-xl text-gray-400 pt-2"
          >
            <SocialIcon
              href="https://github.com/Kuldip-1101"
              icon={<FaGithub />}
            />
            <SocialIcon
              href="https://www.linkedin.com/in/kuldip1101/"
              icon={<FaLinkedin />}
            />
            <SocialIcon
              href="https://x.com/patelkuldip390"
              icon={<FaTwitter />}
            />
            <SocialIcon
              href="https://www.instagram.com/kuldip.903/"
              icon={<FaInstagram />}
            />
          </motion.div>
        </motion.div>

        {/* ================= RIGHT ================= */}
        <HeroRight />
      </div>
    </section>
  );
}

/* ================= RIGHT SIDE ================= */
function HeroRight() {
  return (
    <div className="relative flex justify-center items-center w-full h-[400px] sm:h-[500px]">
      {/* CARD */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="relative w-full max-w-md bg-[#0b0f1a] border border-white/10 rounded-2xl p-5 shadow-[0_0_60px_rgba(139,92,246,0.6)] z-20"
      >
        <pre className="text-xs sm:text-sm text-gray-300 font-mono leading-relaxed">
          {`const developer = {
  name: "Kuldip Patel",
  stack: ["React", "Node", "MongoDB"],
  focus: "Clean UI",
  passion: "Building apps 🚀"
};`}
        </pre>
      </motion.div>

      {/* FLOATING TECH ICONS */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <FloatIcon className="left-2 top-10 sm:left-6 sm:top-16" delay={0}>
          <SiReact />
        </FloatIcon>

        <FloatIcon
          className="left-4 bottom-16 sm:left-10 sm:bottom-24"
          delay={1}
        >
          <SiJavascript />
        </FloatIcon>

        <FloatIcon className="right-2 top-16 sm:right-8 sm:top-20" delay={2}>
          <SiMongodb />
        </FloatIcon>

        <FloatIcon
          className="right-4 bottom-20 sm:right-10 sm:bottom-28"
          delay={3}
        >
          <SiNodedotjs />
        </FloatIcon>

        {/* EXTRA (desktop only) */}
        <FloatIcon
          className="left-1/2 top-4 -translate-x-1/2 hidden sm:block"
          delay={4}
        >
          <SiTailwindcss />
        </FloatIcon>

        <FloatIcon
          className="left-1/2 bottom-4 -translate-x-1/2 hidden sm:block"
          delay={5}
        >
          <SiGit />
        </FloatIcon>
      </div>
    </div>
  );
}

/* ================= FLOAT ICON ================= */
function FloatIcon({ children, className, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -15, 0],
        x: [0, 8, 0],
      }}
      transition={{
        opacity: { duration: 0.4, delay },
        scale: { duration: 0.4, delay },
        y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay },
        x: { duration: 4, repeat: Infinity, ease: "easeInOut", delay },
      }}
      className={`absolute text-2xl sm:text-3xl text-purple-400 ${className}`}
    >
      <div className="drop-shadow-[0_0_15px_rgba(168,85,247,0.8)]">
        {children}
      </div>
    </motion.div>
  );
}

/* ================= SOCIAL ================= */
function SocialIcon({ href, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="transition transform hover:text-white hover:scale-110 active:scale-90"
    >
      {icon}
    </a>
  );
}

export default HeroSection;
