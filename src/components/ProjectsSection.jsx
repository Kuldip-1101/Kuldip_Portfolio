import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

/* ================= DATA ================= */
const projects = [
  {
    title: "Weather App 🌤️",
    desc: "Real-time weather application with location search and detailed forecast.",
    tech: ["React", "API", "CSS3"],
    image: "/projects/weather.png",
    link: "https://github.com/Kuldip-1101/Weather_App_MERN"
  },
  {
    title: "Job Portal 💼",
    desc: "MERN stack job portal with authentication, job posting, and application system.",
    tech: ["React", "Node.js", "MongoDB"],
    image: "/projects/job.png",
    link: "https://github.com/Kuldip-1101/Job_Portal_MERN"
  },
  {
    title: "E-commerce 🛒",
    desc: "Full-stack e-commerce website with cart, checkout and secure payments.",
    tech: ["React", "Node.js", "MongoDB"],
    image: "/projects/ecommerce.png",
    link: "https://github.com/Kuldip-1101/E-Commerce_WebApp_MERN"
  },
  {
    title: "Medicare Booking 🩺",
    desc: "Appointment booking platform for patients and doctors with secure authentication.",
    tech: ["React", "Node.js", "MongoDB"],
    image: "/projects/medicare.png",
    link: "https://github.com/Kuldip-1101/medicare-booking"
  }
];

/* ================= ANIMATION ================= */
const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 }
  }
};

const cardAnim = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

/* ================= BUTTON ================= */
function PremiumButton({ href, children, fullWidth = true }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`
      relative flex items-center justify-center gap-2 
      ${fullWidth ? "w-full py-2" : "w-auto px-4 py-2"}
      rounded-lg border border-purple-500 text-white font-medium overflow-hidden
      transition-all duration-300
      hover:scale-105 hover:-translate-y-[2px] active:scale-95
      hover:border-transparent
      hover:bg-gradient-to-r hover:from-purple-500 hover:via-blue-500 hover:to-cyan-400
      group
      `}
    >
      {/* GLOW */}
      <span className="
        absolute inset-0 opacity-0 group-hover:opacity-100
        blur-md transition duration-500
        bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400
      "></span>

      {/* SHINE */}
      <span className="
        absolute inset-0 translate-x-[-120%]
        bg-gradient-to-r from-transparent via-white/40 to-transparent
        group-hover:translate-x-[120%]
        transition duration-700
      "></span>

      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
    </a>
  );
}

/* ================= COMPONENT ================= */
function ProjectsSection() {
  return (
    <section id="projects" className="px-6 py-20 bg-[#050816]">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="flex justify-between items-center mb-12 flex-wrap gap-4">
          <div>
            <p className="text-purple-400 uppercase text-sm tracking-widest">
              My Projects
            </p>

            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Recent{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
          </div>

          {/* ✅ FIXED WIDTH BUTTON */}
          <PremiumButton
            href="https://github.com/Kuldip-1101"
            fullWidth={false}
          >
            View All on GitHub <FaGithub />
          </PremiumButton>
        </div>

        {/* GRID */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {projects.map((project, i) => (
            <motion.div
              key={i}
              variants={cardAnim}
              className="relative rounded-xl p-[1px]"
            >
              {/* BORDER */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 opacity-20 blur"></div>

              {/* CARD */}
              <div className="relative h-full flex flex-col justify-between rounded-xl bg-[#0b0f1a] border border-white/10 overflow-hidden">

                {/* TOP */}
                <div>
                  <div className="overflow-hidden rounded-t-xl">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-40 object-cover"
                    />
                  </div>

                  <div className="p-5">
                    <h3 className="text-white font-semibold text-lg mb-1">
                      {project.title}
                    </h3>

                    <p className="text-gray-400 text-sm leading-relaxed">
                      {project.desc}
                    </p>
                  </div>
                </div>

                {/* BOTTOM */}
                <div className="p-5 pt-0">

                  {/* BADGES */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-3 py-1 rounded-full bg-white/5 text-gray-300 border border-white/10"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* BUTTON */}
                  <PremiumButton href={project.link}>
                    <FaGithub /> View on GitHub
                  </PremiumButton>

                </div>

              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

export default ProjectsSection;