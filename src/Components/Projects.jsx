import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import projects from "../Projects/project";
import ProjectReact from "../Projects/ProjectReact";

const Projects = () => {
    return (
        <section
            id="projects"
            className="min-h-screen bg-[#0a0a1a] text-white px-6 py-16 md:px-20 relative overflow-hidden"
        >
            <h2 className="text-5xl font-bold text-yellow-400 mb-12 text-center relative z-10">
                Projects
            </h2>

            {/* JS Projects */}
            <h3 className="text-2xl font-semibold text-white mb-6 relative z-10">JS Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 relative z-10">
                {
                    projects.map((project) => (
                        <div
                            key={project.id}
                            className="group relative bg-[#11112a] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-3 hover:scale-105"
                        >
                            {/* Project Image */}
                            <div className="relative">
                                <img
                                    src={project.image}
                                    alt={project.name}
                                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-100"
                                />
                                {/* Gradient overlay */}
                                <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-2xl"></div>
                            </div>

                            {/* Content */}
                            <div className="p-6 flex flex-col justify-between h-70">
                                <div>
                                    <h3 className="text-2xl font-bold text-yellow-400 mb-2">
                                        {project.name}
                                    </h3>
                                    <p className="text-white/80 mb-4 font-bold line-clamp-4">
                                        {project.description}
                                    </p>
                                </div>

                                {/* Tech Tags */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tech.split(", ").map((tech, index) => (
                                        <span
                                            key={index}
                                            className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-xs font-medium hover:bg-blue-400/40 transition"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Buttons */}
                                <div className="flex gap-4 flex-wrap">
                                    <a
                                        href={project.repoUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex items-center gap-2 bg-yellow-400 text-black px-4 py-2 rounded-full shadow-lg hover:bg-yellow-500 hover:scale-105 transition-transform duration-300"
                                    >
                                        <FaGithub /> GitHub
                                    </a>
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full shadow-lg hover:bg-gray-200 hover:scale-105 transition-transform duration-300"
                                    >
                                        <FaExternalLinkAlt /> Live
                                    </a>
                                </div>
                            </div>

                            {/* Glow effect on hover */}
                            <div className="absolute inset-0 rounded-2xl pointer-events-none border-2 border-yellow-400 opacity-0 group-hover:opacity-40 animate-pulse"></div>
                        </div>
                    ))
                }
            </div>

            {/* Decorative Separator */}
            <div className="w-full h-1 bg-linear-to-r from-yellow-400 via-pink-500 to-purple-600 my-16 rounded-full relative z-10"></div>

            {/* React.js Projects */}
            <h3 className="text-2xl font-semibold text-white mb-6 relative z-10">REACT Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">

                {/* React.JS */}

                {
                    ProjectReact.map((project, index) => (
                        <div
                            key={index}
                            className="group relative bg-[#11112a] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2 hover:scale-105"
                        >
                            {/* Project Image */}
                            <div className="relative">
                                <img
                                    src={project.image}
                                    alt={project.name}
                                    className="w-full h-56 md:h-64 object-cover transition-transform duration-500 group-hover:scale-100"
                                />
                                {/* Gradient overlay */}
                                <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-2xl"></div>
                            </div>

                            {/* Content */}
                            <div className="p-6 flex flex-col justify-between h-auto">
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-3">
                                        {project.name}
                                    </h3>
                                    <p className="text-white/80 mb-4 text-sm md:text-base font-medium line-clamp-4">
                                        {project.description}
                                    </p>
                                </div>

                                {/* Tech Tag (React) */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tech.split(", ").map((tech, index) => (
                                        <span
                                            key={index}
                                            className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-xs font-medium hover:bg-blue-400/40 transition"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Buttons */}
                                <div className="flex gap-4 flex-wrap">
                                    <a
                                        href={project.repoUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex items-center gap-2 bg-yellow-400 text-black px-4 py-2 rounded-full shadow-lg hover:bg-yellow-500 hover:scale-105 transition-transform duration-300 text-sm md:text-base font-semibold"
                                    >
                                        <FaGithub /> GitHub
                                    </a>
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full shadow-lg hover:bg-gray-200 hover:scale-105 transition-transform duration-300 text-sm md:text-base font-semibold"
                                    >
                                        <FaExternalLinkAlt /> Live
                                    </a>
                                </div>
                            </div>

                            {/* Glow effect on hover */}
                            <div className="absolute inset-0 rounded-2xl pointer-events-none border-2 border-yellow-400 opacity-0 group-hover:opacity-40 animate-pulse"></div>
                        </div>
                    ))
                }
            </div>

            {/* Optional: Background Accent */}
            <div className="absolute top-0 left-1/2 w-200 h-200 bg-yellow-400/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl z-0"></div>
            <div className="absolute bottom-0 right-1/4 w-150 h-150 bg-pink-500/10 rounded-full blur-3xl z-0"></div>
        </section>
    );
};

export default Projects;