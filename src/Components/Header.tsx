import React, { useContext, useState } from "react";
import { FaGithub, FaLinkedin, FaBars, FaTimes, FaPaperPlane } from "react-icons/fa";
import Accounts from "../SocialAccounts/account.js";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { IoIosSunny } from "react-icons/io";
import { themeContext } from "../Context/Context.js";
import { Link } from "react-scroll";
import ScrollProgress from "../Scroll/ScrollProgress.js";

function Header() {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const context = useContext(themeContext)

    if (!context) {
        return null;
    }

    const { mode, setMode } = context;

    /* Navigation Tabs */

    type Tabs = {
        id: string;
        label: string;
    }

    const navItems: Tabs[] = [
        { id: "home", label: "Home" },
        { id: "about", label: "About" },
        { id: "projects", label: "Projects" },
        { id: "contact", label: "Contact" },
    ];

    return (
        <header className={`fixed top-0 left-0 w-full z-50 backdrop-blur-2xl border-b transition-all duration-500
            ${mode
                ? "bg-white/80 border-black/10 shadow-[0_4px_30px_rgba(0,0,0,0.08)]"
                : "bg-black/40 border-white/10 shadow-[0_4px_30px_rgba(255,255,255,0.03)]"
            }`}>

            <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex items-center justify-between">

                {/* LOGO */}
                <div className="flex items-center gap-3 group cursor-pointer">

                    {/* Icon */}
                    <div
                        className="h-12 w-12 rounded-2xl flex items-center justify-center 
                        bg-linear-to-br from-yellow-400 via-orange-500 to-amber-600 
                        shadow-[0_0_25px_rgba(251,191,36,0.4)] group-hover:rotate-6 
                        group-hover:scale-110 transition-all duration-500">

                        <span className="text-black text-xl font-black">S</span>

                    </div>

                    {/* Text */}
                    <div className="leading-tight">
                        <h1 className={`text-2xl md:text-3xl font-extrabold tracking-tight`}>
                            Sagar
                        </h1>

                        <p
                            className={`uppercase tracking-[4px] text-[10px] md:text-xs
                            group-hover:text-yellow-500 transition font-bold`}>
                            Frontend Developer
                        </p>
                    </div>
                </div>

                {/* DESKTOP NAV */}
                <nav className="hidden md:flex items-center gap-10">

                    {
                        navItems.map((tabs, key) => (
                            <Link
                                key={key}
                                to={tabs.id}
                                spy={true}
                                activeClass="text-yellow-500"
                                className="relative cursor-pointer text-sm uppercase tracking-[3px]
                                font-bold transition-all duration-300 hover:text-yellow-400
                                after:absolute after:left-1/2 after:-bottom-1 after:-translate-x-1/2 
                                after:h-1 after:w-0 after:bg-yellow-400
                                 after:transition-all after:duration-400 hover:after:w-full">
                                {tabs.label}
                            </Link>
                        ))
                    }
                </nav>

                {/* RIGHT SECTION */}
                <div className="hidden md:flex items-center gap-5">

                    <button
                        onClick={() => setMode(!mode)}
                        className={`h-12 w-12 rounded-full flex items-center justify-center cursor-pointer
                            transition-all duration-500 hover:scale-110 hover:-translate-y-1
                            border backdrop-blur-md
                            ${mode ? "bg-white/80 border-black/10 shadow-[0_0_25px_rgba(0,0,0,0.25)]"
                                : "bg-white/5 border-white/10 shadow-[0_0_25px_rgba(255,255,255,0.15)]"
                            }`}
                    >
                        {
                            mode ? (
                                <BsFillMoonStarsFill
                                    size={18}
                                    className="text-blue-500 transition-transform duration-500 rotate-0 hover:rotate-12"
                                />
                            ) : (
                                <IoIosSunny
                                    size={22}
                                    className="text-yellow-400 transition-transform duration-500 hover:rotate-180"
                                />
                            )
                        }
                    </button>

                    {/* SOCIAL ACCOUNT ICONS */}
                    {
                        Accounts.slice(0, 2).map((acc, key) => (
                            <a
                                key={key}
                                href={acc.Link}
                                target="_blank"
                                rel="noreferrer"
                                className={`transition-all duration-300 hover:scale-110
                                text-black/70 hover:text-yellow-400`}>

                                <acc.Icon size={acc.Size} color={acc.Name === "Github" ? (mode ? "#000" : "#fff") : acc.Color} />

                            </a>
                        ))
                    }

                    {/* CONTACT BUTTON */}
                    <Link
                        to="contact"
                        className="cursor-pointer ml-2 flex items-center gap-2 px-6 py-3 rounded-full
                        bg-linear-to-r from-yellow-400 via-orange-500 to-amber-500
                        text-black font-bold hover:scale-105 hover:shadow-yellow-500/50
                        transition-all duration-300 group shadow-[0_0_16px_orange]">

                        <FaPaperPlane className="group-hover:translate-x-1 transition duration-300" />
                        Let's Talk

                    </Link>
                </div>

                {/* MOBILE MENU BUTTON */}
                <button
                    className={`md:hidden text-2xl transition cursor-pointer`}
                    onClick={() => setIsOpen(!isOpen)}>

                    {isOpen ? <FaTimes /> : <FaBars />}

                </button>
            </div>

            {/* MOBILE MENU */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-400
                    ${isOpen ? "max-h-125 py-6" : "max-h-0"} border-t`}>

                <div className="flex flex-col items-center gap-6">

                    {
                        navItems.map((tabs, key) => (
                            <Link
                                key={key}
                                to={tabs.id}
                                spy={true}
                                activeClass="text-yellow-500"
                                onClick={() => setIsOpen(false)}
                                className={`uppercase tracking-[3px] text-sm transition font-bold`}>
                                {tabs.label}
                            </Link>
                        ))
                    }

                    {/* MOBILE SOCIALS */}
                    <div className="flex gap-6 pt-2">
                        {
                            Accounts.slice(0, 2).map((acc, key) => (
                                <a
                                    key={key}
                                    href={acc.Link}
                                    target="_blank"
                                    rel="noreferrer">

                                    <acc.Icon size={acc.Size} color={acc.Name === "Github" ? (mode ? "#000" : "#fff") : acc.Color} className={`transition hover:scale-110`} />
                                </a>
                            ))
                        }
                    </div>

                    {/* MOBILE THEME */}
                    <button onClick={() => {
                        setMode(!mode)
                        setIsOpen(false)
                    }}
                        className="cursor-pointer mt-2 px-5 py-2 rounded-full bg-linear-to-r from-yellow-400 to-orange-500 text-black font-semibold">
                        {mode ? "Dark Mode" : "Light Mode"}
                    </button>
                </div>
            </div>
            <ScrollProgress />
        </header>
    );
}

export default Header;