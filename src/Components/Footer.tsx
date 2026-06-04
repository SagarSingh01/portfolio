import React, { useContext } from "react";
import dayjs from "dayjs";
import Accounts from "../SocialAccounts/account.js";
import { themeContext } from "../Context/Context.js";

const Footer = () => {
    const context = useContext(themeContext);

    if (!context) return null;

    const { mode } = context;
    const year = dayjs().format("YYYY");

    return (
        <footer
            className={`relative overflow-hidden py-10 border-t backdrop-blur-md transition-all duration-500 ${mode
                ? "bg-white border-black/10"
                : "bg-zinc-950 border-white/10"
                }`}
        >
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-yellow-400/10 blur-3xl rounded-full"></div>
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-500/10 blur-3xl rounded-full"></div>

            <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-6 relative z-10">

                {/* Social Links */}
                <div className="flex flex-wrap justify-center gap-5">
                    {
                        Accounts.map((social, key) => (
                            <a
                                key={key}
                                href={social.Link}
                                target="_blank"
                                rel="noreferrer"
                                aria-label={social.Name}
                                className={`group p-4 rounded-2xl border transition-all duration-300 hover:-translate-y-2 hover:scale-110 ${mode
                                    ? "bg-white border-black/10 shadow-lg hover:shadow-xl"
                                    : "bg-white/5 border-white/10 shadow-lg hover:border-yellow-400/40 hover:shadow-[0_0_25px_rgba(250,204,21,0.25)]"
                                    }`}
                            >
                                <social.Icon
                                    size={28}
                                    className="transition-all duration-300 group-hover:rotate-6 group-hover:scale-125"
                                    color={
                                        social.Name === "Github"
                                            ? (mode ? "#000" : "#fff")
                                            : social.Color
                                    }
                                />
                            </a>
                        ))
                    }
                </div>

                {/* Divider */}
                <div
                    className={`w-40 h-px ${mode
                        ? "bg-linear-to-r from-transparent via-black/30 to-transparent"
                        : "bg-linear-to-r from-transparent via-white/30 to-transparent"
                        }`}
                ></div>

                {/* Developer Badge */}
                <div
                    className={`px-5 py-2 rounded-full text-xs font-semibold border ${mode
                        ? "bg-black/5 border-black/10 text-black/70"
                        : "bg-white/5 border-white/10 text-white/70"
                        }`}
                >
                    Designed & Developed by Sagar 🚀
                </div>

                {/* Copyright */}
                <p
                    className={`text-sm tracking-wider font-medium text-center ${mode
                        ? "text-black/60"
                        : "text-white/50"
                        }`}
                >
                    © {year} Sagar Singh • Built with React & Tailwind CSS
                </p>

            </div>
        </footer>
    );
};

export default Footer;