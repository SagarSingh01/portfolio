import React from "react";
import { FaArrowRight, FaUser } from "react-icons/fa";

function Home() {

  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-linear-to-br from-[#050816] via-[#0a0f2c] to-black text-white pt-28 relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute w-125 h-125 bg-yellow-400/10 blur-3xl rounded-full -top-40 -left-40" />
      <div className="absolute w-100 h-100 bg-purple-500/10 blur-3xl rounded-full bottom-0 right-0" />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="space-y-6">
          <p className="text-yellow-400 uppercase tracking-widest text-2xl">
            Hello, I'm
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            Sagar Singh
          </h1>

          <h2 className="text-2xl md:text-3xl font-semibold bg-linear-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">
            Frontend Developer
          </h2>

          <p className="text-white/70 max-w-lg text-lg leading-relaxed">
            I create modern, responsive, and visually engaging web
            applications using React and cutting-edge frontend technologies.
            I focus on performance, clean UI, and smooth user experiences.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 pt-2">

            {/* Primary Button */}
            <a
              href="#projects"
              className="flex items-center gap-2 px-7 py-3 rounded-full 
              bg-linear-to-r from-yellow-400 via-amber-500 to-orange-500 
             text-black font-semibold shadow-lg 
              hover:shadow-yellow-400/50 hover:scale-105 
              transition-all duration-300 group"
            >
              View Projects
              <FaArrowRight className="group-hover:translate-x-1 transition duration-300" />
            </a>

            {/* Secondary Button */}
            <a href="#about"
              className="flex items-center gap-2 px-7 py-3 rounded-full 
              bg-linear-to-r from-cyan-400 via-blue-500 to-indigo-600 
            text-white font-semibold shadow-lg 
              hover:shadow-blue-400/50 hover:scale-105 
              transition-all duration-300 group"
            >
              <FaUser className="group-hover:scale-110 transition duration-300" />
              About Me
            </a>

          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center md:justify-end">
          <div className="relative">

            {/* Glow effect (makes it premium) */}
            <div className="absolute inset-0 rounded-3xl blur-2xl bg-blue-500/20"></div>

            <img
              src="/src/assets/Sagar.png"
              alt="Sagar"
              className="relative w-72 md:w-105 h-auto object-contain drop-shadow-2xl will-change-transform"
            />
            
          </div>
        </div>
      </div>

    </section>
  );
}

export default Home;
