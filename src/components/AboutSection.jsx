import React from "react";
import { motion } from "framer-motion";
import {
  FaUser,
  FaMapMarkerAlt,
  FaBriefcase,
  FaEnvelope,
  FaCheckCircle,
} from "react-icons/fa";

/* 🔥 ANIMATION VARIANTS */
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -60 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 60, scale: 0.95 },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const itemFade = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

function AboutSection() {
  return (
    <section id="about" className="relative px-6 py-20 bg-[#050816]">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
        className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start"
      >
        {/* ================= LEFT ================= */}
        <motion.div variants={fadeLeft} className="space-y-6">
          <p className="text-purple-400 uppercase text-sm tracking-widest">
            About Me
          </p>

          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Get to know{" "}
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
                me!
              </span>
            </h2>

            <div className="mt-2 h-[3px] w-24 rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400"></div>
          </div>

          <p className="text-gray-400 leading-relaxed">
            I'm a passionate Full Stack Developer who loves building creative
            and impactful web applications. I enjoy learning new technologies
            and turning ideas into real-world solutions.
          </p>

          <div className="space-y-3 text-gray-300 text-sm">
            <InfoItem icon={<FaUser />} label="Name" value="Kuldip Patel" />
            <InfoItem
              icon={<FaMapMarkerAlt />}
              label="Location"
              value="India"
            />
            <InfoItem
              icon={<FaBriefcase />}
              label="Experience"
              value="Fresher (Project Based)"
            />
            <InfoItem
              icon={<FaEnvelope />}
              label="Email"
              value="patelkuldip390@gmail.com"
            />
            <InfoItem
              icon={<FaCheckCircle />}
              label="Availability"
              value="Open to work"
            />
          </div>

          <a
            href={`${import.meta.env.BASE_URL}KuldipPatel_Resume.pdf`}
            download
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold shadow-lg hover:scale-105 active:scale-95 transition"
          >
            Download CV
          </a>
        </motion.div>

        {/* ================= RIGHT ================= */}
        <motion.div variants={fadeRight} className="relative">
          <div className="relative bg-[#0b0f1a] border border-white/10 rounded-2xl p-6 shadow-[0_0_40px_rgba(139,92,246,0.3)]">
            {/* TIMELINE LINE */}
            <div className="absolute left-[50px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-purple-500 to-blue-500 opacity-60"></div>

            <div className="space-y-10">
              <TimelineItem
                year="2023 - Present"
                title="Full Stack Developer (Self-Learning & Projects)"
                points={[
                  "Built real-world MERN stack applications including Job Portal, E-commerce, Weather App, and Medicare Booking system.",
                  "Strengthened skills in React, Node.js, MongoDB, and REST APIs.",
                  "Focused on writing clean, scalable, and maintainable code.",
                ]}
              />

              <TimelineItem
                year="2020 - 2022"
                title="Post Graduation Diploma (Information Technology Solutions)"
                points={[
                  "Gained strong foundation in software development and system design.",
                  "Worked with modern development tools and technologies.",
                ]}
              />

              <TimelineItem
                year="2015 - 2019"
                title="Bachelor of Computer Engineering"
                points={[
                  "Developed core knowledge in programming, data structures, and computer science fundamentals.",
                ]}
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ================= INFO ITEM ================= */
function InfoItem({ icon, label, value }) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-purple-400">{icon}</span>
      <span className="text-gray-400">{label}:</span>
      <span className="text-white">{value}</span>
    </div>
  );
}

/* ================= TIMELINE ITEM ================= */
function TimelineItem({ year, title, points }) {
  return (
    <motion.div variants={itemFade} className="relative pl-12">
      {/* DOT */}
      <div className="absolute left-[22px] top-2 w-3 h-3 rounded-full bg-purple-500 shadow-[0_0_12px_rgba(168,85,247,1)]"></div>

      <p className="text-purple-400 text-sm mb-1">{year}</p>

      <h3 className="text-white font-semibold mb-2">{title}</h3>

      <ul className="list-disc list-inside text-gray-400 text-sm space-y-1">
        {points.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>
    </motion.div>
  );
}

export default AboutSection;
