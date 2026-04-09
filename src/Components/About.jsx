import React from "react";
import { FaLinkedin , FaReact, FaJsSquare, FaCss3Alt, FaHtml5, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const About = () => {
  return (
    <section id="about" className="min-h-screen bg-[#0a0a1a] text-white px-6 py-16 md:px-20 flex flex-col md:flex-row items-center gap-12">

      {/* Left: Image */}
      <div className="flex-1 flex justify-center md:justify-start">
        <img
          src="/src/assets/SagarSingh.png"
          alt="Sagar Singh"
          className="w-64 h-64 md:w-80 md:h-80 rounded-3xl border-4 border-yellow-400 object-cover shadow-2xl"
        />
      </div>

      {/* Right: Content */}
      <div className="flex-1 flex flex-col gap-6">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-yellow-400">About Me</h2>

        {/* Intro */}
        <p className="text-white/80 leading-relaxed text-lg">
          Hello! I'm <span className="text-yellow-400 font-semibold">Sagar Singh</span>, a passionate web developer. I love building modern, responsive, and interactive web applications using the latest technologies.
        </p>

        {/* Skills */}
        <div>
          <h3 className="text-2xl font-semibold text-yellow-400 mb-4">Skills</h3>
          <div className="flex flex-wrap gap-4 text-white/80">
            {/* HTML */}
            <div className="flex items-center gap-2 bg-[#11112a] px-4 py-2 rounded-full shadow hover:bg-yellow-400 hover:text-black transition">
              <FaHtml5 /> HTML
            </div>
            {/* CSS */}
            <div className="flex items-center gap-2 bg-[#11112a] px-4 py-2 rounded-full shadow hover:bg-yellow-400 hover:text-black transition">
              <FaCss3Alt /> CSS
            </div>
            {/* JavaScript */}
            <div className="flex items-center gap-2 bg-[#11112a] px-4 py-2 rounded-full shadow hover:bg-yellow-400 hover:text-black transition">
              <FaJsSquare /> JavaScript
            </div>
            {/* React */}
            <div className="flex items-center gap-2 bg-[#11112a] px-4 py-2 rounded-full shadow hover:bg-yellow-400 hover:text-black transition">
              <FaReact /> React
            </div>
            {/* Tailwind CSS */}
            <div className="flex items-center gap-2 bg-[#11112a] px-4 py-2 rounded-full shadow hover:bg-yellow-400 hover:text-black transition">
              <SiTailwindcss /> Tailwind CSS
            </div>
            {/* Git */}
            <div className="flex items-center gap-2 bg-[#11112a] px-4 py-2 rounded-full shadow hover:bg-yellow-400 hover:text-black transition">
              <FaGitAlt /> Git
            </div>
            {/* GitHub */}
            <div className="flex items-center gap-2 bg-[#11112a] px-4 py-2 rounded-full shadow hover:bg-yellow-400 hover:text-black transition">
              <FaGithub /> GitHub
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;