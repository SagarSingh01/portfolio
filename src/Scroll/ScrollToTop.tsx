import React, { useEffect, useState, useContext } from "react";
import { FaArrowUp } from "react-icons/fa";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { themeContext } from "../Context/Context.js";

function ScrollToTop() {
    const [showButton, setShowButton] = useState(false);

    const context = useContext(themeContext);
    if (!context) return null;

    const { mode } = context;

    useEffect(() => {
        const handleScroll = () => {
            setShowButton(window.scrollY > 300);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <AnimatePresence>
            {
                showButton && (
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 50, scale: 0.8 }}
                        transition={{ duration: 0.3 }}
                        className="fixed bottom-8 right-8 z-999"
                    >
                        <Link
                            to="home"
                            duration={600}
                            className={`cursor-pointer h-14 w-14 rounded-2xl flex items-center justify-center 
                                        backdrop-blur-xl border transition-all duration-500
                                        hover:scale-110 hover:-translate-y-2 hover:rotate-6
                                    ${mode
                                    ? "bg-white/90 text-black border-black/10 shadow-[0_0_30px_rgba(0,0,0,0.15)]"
                                    : "bg-black/60 text-yellow-400 border-yellow-400/20 shadow-[0_0_30px_rgba(250,204,21,0.25)]"
                                }`}
                        >
                            <FaArrowUp size={18} />
                        </Link>
                    </motion.div>
                )
            }
        </AnimatePresence>
    );
}

export default ScrollToTop;