import React from "react";
import { motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-[#050816] px-6 pt-6 pb-10">

      <div className="max-w-7xl mx-auto flex items-center justify-between relative">

        {/* ================= LEFT TEXT ================= */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-gray-400 text-sm"
        >
          © {year} Kuldip Patel. All rights reserved.
        </motion.p>

        {/* ================= FLOATING BUTTON ================= */}
        <div className="absolute left-1/2 -translate-x-1/2 -top-10">

          <motion.button
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0.7, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            whileTap={{ scale: 0.9 }}
            animate={{
              y: [0, -10, 0],
              x: [0, 5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="
              relative group
              w-16 h-16 flex items-center justify-center
              rounded-full
              bg-[#0b0f1a]/80
              backdrop-blur-md
              border border-purple-500/30
              transition-all duration-300
              hover:scale-110 hover:-translate-y-2
            "
          >
            {/* ✅ CONTROLLED GLOW (FIXED) */}
            <span className="absolute inset-0 rounded-full blur-md bg-purple-500/20 opacity-50 group-hover:opacity-80 transition duration-300"></span>

            {/* HOVER GRADIENT (SOFT) */}
            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-400 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 blur-sm"></span>

            {/* ICON */}
            <FaArrowUp className="relative z-10 text-white text-xl group-hover:scale-125 transition" />
          </motion.button>
        </div>

        {/* ================= RIGHT SPACER ================= */}
        <div className="w-[200px]" />

      </div>
    </footer>
  );
}

export default Footer;