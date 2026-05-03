import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaEnvelope
} from "react-icons/fa";
import emailjs from "@emailjs/browser";

/* ================= COMPONENT ================= */
function ContactSection() {
  const form = useRef();

  const [loading, setLoading] = useState(false);
  const [popup, setPopup] = useState({ show: false, type: "", message: "" });
  const [errors, setErrors] = useState({});

  /* ================= VALIDATION ================= */
  const validate = (data) => {
    const newErrors = {};

    if (!data.user_name.trim()) newErrors.user_name = "Name is required";
    if (!data.user_email.match(/^\S+@\S+\.\S+$/))
      newErrors.user_email = "Valid email required";
    if (!data.message.trim()) newErrors.message = "Message is required";

    return newErrors;
  };

  /* ================= SEND EMAIL ================= */
  const sendEmail = (e) => {
    e.preventDefault();

    const formData = {
      user_name: form.current.user_name.value,
      user_email: form.current.user_email.value,
      subject: form.current.subject.value,
      message: form.current.message.value
    };

    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAIL_PUBLIC_KEY
      )
      .then(
        () => {
          setPopup({
            show: true,
            type: "success",
            message: "Message sent successfully 🚀"
          });
          form.current.reset();
        },
        () => {
          setPopup({
            show: true,
            type: "error",
            message: "Something went wrong ❌"
          });
        }
      )
      .finally(() => {
        setLoading(false);

        // ✅ FIXED TIMEOUT (no stale state)
        setTimeout(() => {
          setPopup({ show: false, type: "", message: "" });
        }, 3000);
      });
  };

  return (
    <section id="contact" className="px-6 py-20 bg-[#050816]">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">

        {/* ================= LEFT ================= */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <p className="text-purple-400 uppercase text-sm tracking-widest">
            Contact Me
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Let’s work{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              together!
            </span>
          </h2>

          <p className="text-gray-400">
            Have a project in mind or want to collaborate? <br/>
            Feel free to reach out to me.
          </p>

          {/* ✅ COLORFUL SOCIAL ICONS */}
          <div className="flex gap-4 text-xl">
            <SocialIcon
              icon={<FaGithub />}
              link="https://github.com/Kuldip-1101"
              color="hover:text-white"
            />
            <SocialIcon
              icon={<FaLinkedin />}
              link="https://www.linkedin.com/in/kuldip1101/"
              color="hover:text-blue-400"
            />
            <SocialIcon
              icon={<FaTwitter />}
              link="https://x.com/patelkuldip390"
              color="hover:text-sky-400"
            />
            <SocialIcon
              icon={<FaInstagram />}
              link="https://www.instagram.com/kuldip.903/"
              color="hover:text-pink-400"
            />
            <SocialIcon
              icon={<FaEnvelope />}
              link="mailto:patelkuldip390@gmail.com"
              color="hover:text-red-400"
            />
          </div>
        </motion.div>

        {/* ================= FORM ================= */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-[#0b0f1a] border border-white/10 rounded-2xl p-6 shadow-[0_0_40px_rgba(139,92,246,0.3)]">

            <form ref={form} onSubmit={sendEmail} className="space-y-4">

              <div className="grid grid-cols-2 gap-4">
                <Input name="user_name" placeholder="Your Name" error={errors.user_name} />
                <Input name="user_email" placeholder="Your Email" error={errors.user_email} />
              </div>

              <Input name="subject" placeholder="Subject" />

              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  className="w-full p-3 rounded-lg bg-transparent border border-white/10 text-white placeholder-gray-500 focus:border-purple-500 outline-none transition resize-none h-32"
                />
                {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                disabled={loading}
                className="relative w-full py-3 rounded-lg text-white font-semibold overflow-hidden
                border border-purple-500 transition-all duration-300
                hover:scale-105 hover:-translate-y-[2px] active:scale-95
                hover:border-transparent
                hover:bg-gradient-to-r hover:from-purple-500 hover:via-blue-500 hover:to-cyan-400 group"
              >
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 blur-md transition duration-500 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400"></span>

                <span className="relative z-10 flex items-center justify-center gap-2">
                  {loading ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                      Sending...
                    </>
                  ) : (
                    "Send Message ✈️"
                  )}
                </span>
              </button>
            </form>
          </div>
        </motion.div>
      </div>

      {/* ================= POPUP ================= */}
      {popup.show && (
        <div className={`fixed bottom-6 right-6 px-6 py-3 rounded-lg text-white shadow-lg
          ${popup.type === "success" ? "bg-green-500" : "bg-red-500"}`}>
          {popup.message}
        </div>
      )}
    </section>
  );
}

/* ================= INPUT ================= */
function Input({ name, placeholder, error }) {
    return (
      <div>
        <input
          name={name}
          placeholder={placeholder}
          autoComplete="off"
          className={`w-full p-3 rounded-lg bg-transparent border ${
            error ? "border-red-500" : "border-white/10"
          } text-white placeholder-gray-500 focus:border-purple-500 outline-none transition`}
        />
        {error && <p className="text-red-400 text-xs mt-1">{error}</p>}
      </div>
    );
  }

/* ================= SOCIAL ================= */
function SocialIcon({ icon, link, color }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`
      p-3 rounded-lg border border-white/10 text-gray-400
      transition-all duration-300
      hover:scale-110
      hover:border-purple-500
      hover:shadow-[0_0_15px_rgba(168,85,247,0.6)]
      ${color}
      `}
    >
      {icon}
    </a>
  );
}

export default ContactSection;