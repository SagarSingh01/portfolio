import React, { useContext } from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import Accounts from "../SocialAccounts/account.js";
import { themeContext } from "../Context/Context.js";
import { motion } from "framer-motion";

const Contact = () => {
    const context = useContext(themeContext);
    if (!context) return null;

    const { mode } = context;

    return (
        <section
            id="contact"
            className="min-h-screen border-t border-t-slate-700 px-6 py-20 md:px-20 flex flex-col items-center justify-center gap-12 relative overflow-hidden"
        >
            {/* Background glow */}
            <div className="absolute w-96 h-96 bg-yellow-400/10 blur-3xl top-10 left-1/2 -translate-x-1/2"></div>

            {/* Title */}
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-5xl md:text-6xl font-bold text-center bg-linear-to-r from-yellow-400 via-pink-500 to-purple-500 text-transparent bg-clip-text"
            >
                Contact Me
            </motion.h2>

            {/* Card (NO VARIANTS - SAFE MODE) */}
            <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="w-full max-w-2xl p-10 md:p-12 bg-zinc-900/80 backdrop-blur-xl text-white rounded-2xl border border-white/10 shadow-xl"
            >
                {/* Heading */}
                <div className="text-center md:text-left mb-8">
                    <h3 className="text-2xl md:text-3xl font-semibold text-yellow-400">
                        Let’s Connect 🚀
                    </h3>
                    <p className="text-sm md:text-base text-white/70 mt-2 leading-relaxed">
                        I’m a BCA student passionate about web development. Reach out for
                        projects, collaborations, or opportunities.
                    </p>
                </div>

                {/* Social Buttons */}
                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                    {
                        Accounts.map((acc, key) => (
                            <motion.a
                                key={key}
                                href={acc.Link}
                                target="_blank"
                                rel="noreferrer"
                                whileHover={{ scale: 1.08, y: -3 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ type: "spring", stiffness: 300 }}
                                className={`flex items-center gap-3 
                                ${mode ? "hover:bg-yellow-400 hover:text-black shadow-[0_0_20px_black]"
                                        : "hover:bg-yellow-400 hover:text-black shadow-[0_0_20px_white]"} 
                                        transition px-6 py-3 rounded-full shadow font-semibold text-lg`}
                            >
                                {acc.Name}
                                <acc.Icon
                                    size={18}
                                    color={acc.Name === "Github" ? "#fff" : acc.Color}
                                />
                            </motion.a>
                        ))
                    }
                </div>
            </motion.div>
        </section>
    );
};

export default Contact;