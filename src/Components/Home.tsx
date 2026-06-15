import React, { useContext } from "react";
import { FaArrowRight, FaUser } from "react-icons/fa";
import Sagar from "/src/assets/Sagar.png";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { themeContext } from "../Context/Context.js";

function Home() {
  const context = useContext(themeContext);
  if(!context) return null;

  const { mode } = context;

  return (
    <section
      id="home"
      className={`min-h-screen flex items-center pt-28 relative overflow-hidden 
        transition-all duration-500 ${mode ? "bg-white text-black" : "bg-black text-white"}`}
    >
      {/* Background Blobs */}
      <div className="absolute w-96 h-96 bg-yellow-400/10 blur-3xl rounded-full -top-40 -left-40 animate-pulse"></div>
      <div className="absolute w-80 h-80 bg-purple-500/10 blur-3xl rounded-full bottom-0 right-0 animate-pulse"></div>
      <div className="absolute w-72 h-72 bg-cyan-400/10 blur-3xl rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -100, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          {/* Badge */}
          <div
            className={`inline-flex items-center px-4 py-2 rounded-full text-sm tracking-widest backdrop-blur-md border transition-all duration-500 ${mode
              ? "bg-black/5 border-black/10 text-yellow-600"
              : "bg-white/5 border-white/10 text-yellow-400"
              }`}
          >
            👋 AVAILABLE FOR WORK
          </div>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            Hi, I'm{" "}
            <span className="bg-linear-to-r from-yellow-400 via-orange-400 to-pink-500 text-transparent bg-clip-text">
              Sagar Singh
            </span>
          </h1>

          {/* Role */}
          <h2 className="text-2xl md:text-3xl font-semibold">
            Frontend Developer
          </h2>

          {/* Description */}
          <p className="max-w-lg text-lg leading-relaxed opacity-80">
            I design and build modern, high-performance web applications using React.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 pt-2">

            {/* Primary */}
            <Link
              to="projects"
              className="cursor-pointer flex items-center gap-2 px-7 py-3 rounded-full bg-linear-to-r from-yellow-400 via-amber-500 to-orange-500 text-black font-semibold shadow-lg hover:scale-105 transition-all duration-300 group"
            >
              View Projects
              <FaArrowRight className="group-hover:translate-x-1 transition" />
            </Link>

            {/* Secondary */}
            <Link
              to="about"
              className={`cursor-pointer flex items-center gap-2 px-7 py-3 rounded-full backdrop-blur-md border font-semibold hover:scale-105 transition-all duration-300 group ${mode
                ? "bg-black/5 border-black/10 text-black hover:bg-black/10"
                : "bg-white/5 border-white/10 text-white hover:bg-white/10"
                }`}
            >
              <FaUser className="group-hover:scale-110 transition" />
              About Me
            </Link>

          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 100, scale: 0.9 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative">

            {/* Glow ring */}
            <div className="absolute inset-0 rounded-3xl bg-linear-to-r from-yellow-400/20 via-pink-500/20 to-purple-500/20 blur-2xl"></div>

            {/* Image float */}
            <motion.img
              src={Sagar}
              alt="Sagar"
              className="relative w-72 md:w-96 object-contain drop-shadow-2xl"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            />

          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Home;