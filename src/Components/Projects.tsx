import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import projects from "../Projects/project.js";
import ProjectReact from "../Projects/ProjectReact.js";
import { motion } from "framer-motion";

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Projects = () => {
    return (
        <section
            id="projects"
            className="min-h-screen border-t border-emerald-700 px-6 py-16 md:px-20 relative overflow-hidden"
        >
            {/* Title Animation */}
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-6xl font-bold bg-linear-to-r from-yellow-400 via-pink-500 to-purple-500 text-transparent bg-clip-text mb-12 text-center relative z-10"
            >
                Projects
            </motion.h2>

            {/* JS Projects */}
            <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="text-2xl font-semibold mb-6 relative z-10"
            >
                JS Projects
            </motion.h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 relative z-10">
                {
                    projects.map((project, _) => (
                        <motion.div
                            key={project.id}
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            whileHover={{ y: -8, scale: 1.03 }}
                            transition={{ type: "spring", stiffness: 120 }}
                            className="border-amber-700 border-2 group relative bg-[#11112a] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-transform"
                        >
                            <div className="relative">
                                <img
                                    src={project.image}
                                    alt={project.name}
                                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-2xl"></div>
                            </div>

                            <div className="p-6 flex flex-col justify-between h-70">
                                <div>
                                    <h3 className="text-2xl font-bold text-yellow-400 mb-2">
                                        {project.name}
                                    </h3>
                                    <p className="text-white/80 mb-4 font-bold line-clamp-4">
                                        {project.description}
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {
                                    project.tech.split(", ").map((tech, index) => (
                                        <span
                                            key={index}
                                            className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-xs font-medium hover:bg-blue-400/30 transition"
                                        >
                                            {tech}
                                        </span>
                                    ))
                                    }
                                </div>

                                <div className="flex gap-4 flex-wrap">
                                    <a
                                        href={project.repoUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex items-center gap-2 bg-yellow-400 text-black px-4 py-2 rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
                                    >
                                        <FaGithub /> GitHub
                                    </a>

                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
                                    >
                                        <FaExternalLinkAlt /> Live
                                    </a>
                                </div>
                            </div>

                            <div className="absolute inset-0 rounded-2xl pointer-events-none border border-yellow-400/30 opacity-0 group-hover:opacity-40 transition-all duration-300"></div>
                        </motion.div>
                    ))
                }
            </div>

            {/* Divider */}
            <div className="w-full h-1 bg-linear-to-r from-yellow-400 via-pink-500 to-purple-600 my-16 rounded-full relative z-10"></div>

            {/* React Projects */}
            <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="text-2xl font-semibold mb-6 relative z-10"
            >
                REACT Projects
            </motion.h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
                {
                    ProjectReact.map((project, index) => (
                        <motion.div
                            key={index}
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            whileHover={{ y: -8, scale: 1.03 }}
                            transition={{ type: "spring", stiffness: 120 }}
                            className="border-amber-700 border-2 group relative bg-[#11112a] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-transform"
                        >
                            <div className="relative">
                                <img
                                    src={project.image}
                                    alt={project.name}
                                    className="w-full h-56 md:h-64 object-cover transition-transform duration-500 group-hover:scale-100"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-2xl"></div>
                            </div>

                            <div className="p-6 flex flex-col justify-between h-auto">
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-3">
                                        {project.name}
                                    </h3>
                                    <p className="text-white/80 mb-4 text-sm md:text-base font-medium line-clamp-4">
                                        {project.description}
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {
                                        project.tech.split(", ").map((tech, index) => (
                                            <span
                                                key={index}
                                                className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-xs font-medium hover:bg-blue-400/30 transition"
                                            >
                                                {tech}
                                            </span>
                                        ))
                                    }
                                </div>

                                <div className="flex gap-4 flex-wrap">
                                    <a
                                        href={project.repoUrl}
                                        target="_blank"
                                        className="flex items-center gap-2 bg-yellow-400 text-black px-4 py-2 rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
                                    >
                                        <FaGithub /> GitHub
                                    </a>

                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
                                    >
                                        <FaExternalLinkAlt /> Live
                                    </a>
                                </div>
                            </div>

                            <div className="absolute inset-0 rounded-2xl pointer-events-none border border-yellow-400/30 opacity-0 group-hover:opacity-40 transition-all duration-300"></div>
                        </motion.div>
                    ))
                }
            </div>
        </section>
    );
};

export default Projects;