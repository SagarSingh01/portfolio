import React, { useContext } from "react";
import SagarSingh from "/src/assets/SagarSingh.png";
import Skills from "../Skills/Skill.js";
import { motion } from "framer-motion";
import { themeContext } from "../Context/Context.js";

const About = () => {

  const context = useContext(themeContext);
  if (!context) return null;

  const { mode } = context;

  return (
    <section
      id="about"
      className="min-h-screen border-t border-cyan-600 px-6 py-20 md:px-24 flex flex-col md:flex-row items-center gap-16 relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute w-96 h-96 bg-yellow-400/10 blur-3xl rounded-full -top-40 -left-40 animate-pulse" />
      <div className="absolute w-80 h-80 bg-cyan-400/10 blur-3xl rounded-full bottom-0 right-0 animate-pulse" />

      {/* LEFT IMAGE */}
      <motion.div
        className="flex-1 flex justify-center md:justify-start relative"
        initial={{ opacity: 0, x: -120, scale: 0.9 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="relative group">
          {/* glow ring */}
          <div className="absolute inset-0 rounded-3xl bg-cyan-800 bg-linear-to-r from-yellow-400/20 via-pink-500/20 to-purple-500/20 blur-2xl group-hover:blur-3xl transition" />

          <img
            src={SagarSingh}
            alt="Sagar Singh"
            className="relative w-72 h-72 md:w-96 md:h-96 rounded-3xl object-cover border border-white/10 shadow-2xl group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      </motion.div>

      {/* RIGHT CONTENT */}
      <motion.div
        className="flex-1 flex flex-col gap-6"
        initial={{ opacity: 0, x: 120, scale: 0.95 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Title */}
        <h2 className="text-5xl font-extrabold bg-linear-to-r from-yellow-400 via-orange-400 to-pink-500 text-transparent bg-clip-text">
          About Me
        </h2>

        {/* Intro card */}
        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-xl">
          <p className="leading-relaxed text-lg">
            I’m a <span className="text-yellow-400 font-semibold">web developer</span> focused on frontend development, constantly improving my skills by building real-world projects.
            I specialize in React and enjoy creating responsive, interactive, and performance-optimized user interfaces.
            I care about details — animations, usability, and clean design — to deliver experiences that feel modern, smooth, and intuitive.
          </p>
        </div>

        {/* Skills */}
        <div className="mt-2">
          <h3 className="text-2xl font-semibold text-yellow-400 mb-4">
            Skills & Tools
          </h3>

          <div className="flex flex-wrap gap-3">
            {
              Skills.map((skill, _) => (
                <motion.div
                  key={skill.id}
                  className={`flex items-center gap-4 px-4 py-2 rounded-full cursor-pointer
                    transition-all duration-100 shadow-[0_0_10px_cyan] font-bold tracking-tight hover:bg-yellow-400
                    ${mode
                      ? "bg-white text-black hover:text-black border border-black/10"
                      : "bg-[#11112a] text-white hover:text-black border border-white/10"
                    }`}
                >
                  <skill.icon color={skill.name === "Git & GitHub" ? (mode ? "#000" : "#fff") : skill.color} />
                  {skill.name}
                </motion.div>
              ))
            }
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;