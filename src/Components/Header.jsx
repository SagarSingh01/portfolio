import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaBars, FaTimes , FaPaperPlane } from "react-icons/fa";
import accounts from "../Social Accounts/account";

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { id: "home", label: "Home" },
        { id: "about", label: "About" },
        { id: "projects", label: "Projects" },
        { id: "contact", label: "Contact" },
    ];

    return (
        <header className="w-full fixed top-0 left-0 z-50 bg-linear-to-r from-[#050816]/95 to-[#0a0f2c]/95 backdrop-blur-lg border-b border-white/10 text-white">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-2 cursor-pointer select-none">
                    <span className="text-3xl font-extrabold text-yellow-400">S.</span>
                    <span className="md:text-2xl text-2xl font-semibold tracking-wide">Sagar</span>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex gap-10 text-sm uppercase tracking-widest text-white/70">
                    {
                        navItems.map((tabs, key) => (
                            <a
                                key={key}
                                href={`#${tabs.id}`}
                                className="relative font-medium hover:text-yellow-400 transition after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-yellow-400 after:left-0 after:-bottom-1 after:transition-all hover:after:w-full"
                            >
                                {tabs.label}
                            </a>
                        ))
                    }
                </nav>

                {/* Desktop Social */}
                <div className="hidden md:flex items-center gap-5">
                    {
                        accounts.map((acc, key) => {
                            return (
                                <a key={key}
                                    href={acc.Link}
                                    target="_blank"
                                    className="hover:text-yellow-400 hover:scale-110 transition cursor-pointer"
                                >
                                    <acc.Icon size={acc.Size} color={acc.Color} />
                                </a>
                            )
                        })
                    }

                    <a
                        href="#contact"
                        className="ml-4 flex items-center gap-2 px-6 py-2 rounded-full
                        bg-linear-to-r from-yellow-400 via-amber-500 to-orange-500 
                        text-black font-semibold shadow-lg 
                        hover:shadow-yellow-400/50 hover:scale-105 
                        transition-all duration-300 group"
                    >
                        <FaPaperPlane className="group-hover:translate-x-1 transition duration-300" />
                        Let's Talk
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-xl hover:text-yellow-400 transition"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Mobile Navigation Panel */}
            {
                isOpen && (
                    <div className="md:hidden h-fit bg-[#050816] border-t border-white/10">
                        <div className="flex flex-col items-center gap-6 py-6 text-white/80 uppercase tracking-wider">
                            {
                                navItems.map((tabs, key) => (
                                    <a
                                        key={key}
                                        href={`#${tabs.id}`}
                                        onClick={() => setIsOpen(false)}
                                        className="relative font-medium hover:text-yellow-400 transition after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-yellow-400 after:left-0 after:-bottom-1 after:transition-all hover:after:w-full"
                                    >
                                        {tabs.label}
                                    </a>
                                ))
                            }

                            <div className="flex gap-6 pt-4">
                                {
                                    accounts.map((acc, key) => {
                                        return (
                                            <a href={acc.Link} key={key} target="_blank">
                                                <acc.Icon className="hover:text-yellow-400 cursor-pointer" size={acc.Size} color={acc.Color} />
                                            </a>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                )
            }
        </header>
    );
}

export default Header;