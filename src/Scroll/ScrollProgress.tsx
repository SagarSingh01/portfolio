import { motion, useScroll, useSpring } from "framer-motion";

const ScrollProgress = () => {
    const { scrollYProgress } = useScroll();

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 120,
        damping: 30,
        mass: 0.2,
    });

    return (
        <motion.div
            aria-hidden="true"
            className="absolute bottom-0 left-0 right-0 z-9999 h-0.5 origin-left pointer-events-none"
            style={{ scaleX }}
        >
            <div className="relative h-full w-full bg-linear-to-r from-yellow-400 via-orange-500 to-pink-500">

                {/* Progress glow */}
                <div
                    className="
                        absolute right-0 top-1/2
                        h-2 w-10
                        -translate-y-1/2
                        rounded-full
                        bg-orange-400/70
                        blur-md
                    "
                />
            </div>
        </motion.div>
    );
};

export default ScrollProgress;