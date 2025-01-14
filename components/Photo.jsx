"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
    return (
        <div className="w-full h-full relative flex items-center justify-center">
            {/* Outer animated glow effect */}
            <motion.div
                className="absolute w-[320px] h-[320px] xl:w-[520px] xl:h-[520px] rounded-full bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-500 opacity-50 blur-2xl"
                animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 360],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear",
                }}
            ></motion.div>

            {/* Inner rotating gradient ring */}
            <motion.div
                className="absolute w-[300px] h-[300px] xl:w-[500px] xl:h-[500px] rounded-full border-4 border-dashed border-gradient-to-r from-blue-400 to-teal-500"
                animate={{
                    rotate: [0, 360],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear",
                }}
            ></motion.div>

            {/* Photo with hover effect */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                    opacity: 1,
                    scale: 1,
                    transition: { delay: 1, duration: 0.8, ease: "easeOut" },
                }}
                whileHover={{
                    scale: 1.1,
                    boxShadow: "0px 0px 30px rgba(255, 105, 180, 0.8)",
                    transition: { duration: 0.4, ease: "easeInOut" },
                }}
                className="relative z-10 w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] rounded-full overflow-hidden shadow-2xl"
            >
                <Image
                    src="/assets/abhi.png"
                    priority
                    quality={100}
                    fill
                    alt="User Photo"
                    className="object-cover"
                />
            </motion.div>
        </div>
    );
};

export default Photo;
