import React from "react";
import { motion } from "framer-motion";
import {
  SiReact,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiGit,
  SiIntellijidea,
  SiPostman,
  SiEclipseide
} from "react-icons/si";
import {
  FaCode,
  FaDatabase,
  FaTools,
  FaCogs,
  FaLayerGroup,
  FaLaptopCode,
  FaInfinity,
  FaGithub,
  FaWindows,
  FaLinux,
  FaApple
} from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";

/* ================= DATA ================= */
const skills = [
  {
    title: "Languages",
    icon: <FaCode />,
    items: "HTML5, CSS3, JavaScript(ES6), Java, C++, SQL",
    gradient: "from-pink-500 via-red-500 to-yellow-500"
  },
  {
    title: "FrontEnd",
    icon: <SiReact />,
    items: "React.js, Bootstrap, Responsive Web Design, DOM Manipulation, AJAX, JSX",
    gradient: "from-cyan-400 via-blue-500 to-indigo-500"
  },
  {
    title: "Backend",
    icon: <SiNodedotjs />,
    items: "Node.js, Express.js, REST APIs, JWT Authentication, CRUD Operations",
    gradient: "from-green-400 via-emerald-500 to-teal-500"
  },
  {
    title: "Frameworks & Libraries",
    icon: <FaLayerGroup />,
    items: "React.js, Express.js, Hibernate, Spring Boot, JPA",
    gradient: "from-purple-500 via-indigo-500 to-blue-500"
  },
  {
    title: "Databases",
    icon: <FaDatabase />,
    items: "MongoDB, MySQL",
    gradient: "from-emerald-400 via-green-500 to-lime-500"
  },
  {
    title: "Version Control",
    icon: <SiGit />,
    items: "Git, GitHub",
    gradient: "from-orange-400 via-red-500 to-pink-500",
    extraIcons: [
      <SiGit key="git" className="text-orange-500" />,
      <FaGithub key="gh" className="text-white" />
    ]
  },
  {
    title: "Tools & IDE's",
    icon: <FaTools />,
    items: "VS Code, IntelliJ IDE, Netbeans, STS, Eclipse, Postman, Sublime",
    gradient: "from-blue-400 via-cyan-400 to-sky-500",
    extraIcons: [
      <VscVscode key="v" className="text-blue-500" />,
      <SiIntellijidea key="i" className="text-pink-500" />,
      <SiEclipseide key="e" className="text-purple-500" />,
      <SiPostman key="p" className="text-orange-400" />
    ]
  },
  {
    title: "Core Concepts",
    icon: <FaCogs />,
    items: "OOP, State Management, Exception Handling, MVC Architecture, Data Structures",
    gradient: "from-yellow-400 via-orange-500 to-red-500"
  },
  {
    title: "Methodology",
    icon: <FaInfinity />,
    items: "SDLC, Agile, Waterfall",
    gradient: "from-indigo-400 via-purple-500 to-pink-500"
  },
  {
    title: "Operating System",
    icon: <FaLaptopCode />,
    items: "Windows, Linux, iOS",
    gradient: "from-gray-400 via-slate-500 to-gray-700",
    extraIcons: [
      <FaWindows key="w" className="text-blue-400" />,
      <FaLinux key="l" className="text-yellow-400" />,
      <FaApple key="a" className="text-gray-300" />
    ]
  }
];

/* ================= ANIMATION ================= */
const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 }
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

/* ================= COMPONENT ================= */
function SkillsSection() {
  return (
    <section id="skills" className="px-6 py-20 bg-[#050816]">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="mb-12">
          <p className="text-purple-400 uppercase text-sm tracking-widest">
            My Skills
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Technical Skills &{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>
        </div>

        {/* GRID */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              variants={cardAnim}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                e.currentTarget.style.setProperty("--x", `${x}px`);
                e.currentTarget.style.setProperty("--y", `${y}px`);
              }}
              className="group relative rounded-xl p-[1px] overflow-hidden"
            >
              {/* ✅ SOFT GRADIENT (LIGHT DEFAULT, STRONG ON HOVER) */}
              <div className={`absolute inset-0 bg-gradient-to-r ${skill.gradient} opacity-10 group-hover:opacity-70 blur-xl transition duration-500`}></div>

              {/* CARD */}
              <div className="relative h-full rounded-xl p-5 
                bg-[#0b0f1a]/70 backdrop-blur-md border border-white/10
                transition duration-300 
                group-hover:-translate-y-2 
                group-hover:shadow-[0_0_60px_rgba(139,92,246,0.6)] 
                overflow-hidden">

                {/* CURSOR LIGHT */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300"
                  style={{
                    background:
                      "radial-gradient(200px circle at var(--x) var(--y), rgba(255,255,255,0.12), transparent 60%)"
                  }}
                />

                {/* CONTENT */}
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xl text-white group-hover:scale-110 transition">
                      {skill.icon}
                    </span>
                    <h3 className="text-white font-semibold">
                      {skill.title}
                    </h3>
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed">
                    {skill.items}
                  </p>

                  {skill.extraIcons && (
                    <div className="flex gap-4 mt-4 text-xl">
                      {skill.extraIcons.map((icon, idx) => (
                        <span key={idx} className="hover:scale-125 transition">
                          {icon}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

export default SkillsSection;