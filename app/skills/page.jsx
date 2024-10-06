"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import {
    SiJavascript, SiReact, SiNodeDotJs, SiExpress,
    SiMongodb, SiPostgresql, SiPython, SiGit,
    SiDocker, SiAmazonaws, SiTailwindcss, SiTypescript, SiRecoil, SiNextdotjs
} from "react-icons/si";

const skillsData = [
    { name: "JavaScript", color: "#F7DF1E", icon: SiJavascript },
    { name: "React", color: "#61DAFB", icon: SiReact },
    { name: "Node.js", color: "#339933", icon: SiNodeDotJs },
    { name: "Express", color: "#000000", icon: SiExpress },
    { name: "MongoDB", color: "#47A248", icon: SiMongodb },
    { name: "PostgreSQL", color: "#4169E1", icon: SiPostgresql },
    { name: "Python", color: "#3776AB", icon: SiPython },
    { name: "Git", color: "#F05032", icon: SiGit },
    { name: "Docker", color: "#2496ED", icon: SiDocker },
    { name: "AWS", color: "#FF9900", icon: SiAmazonaws },
    { name: "Tailwind CSS", color: "#06B6D4", icon: SiTailwindcss },
    { name: "TypeScript", color: "#3178C6", icon: SiTypescript },
    { name: "Recoil", color: "#764ABC", icon: SiRecoil },
    { name: "Next.js", color: "#000000", icon: SiNextdotjs }
].map(skill => ({
    ...skill,
    level: Math.floor(Math.random() * 30) + 70, // Random level between 70-100
    description: `Advanced proficiency in ${skill.name} development`
}));

const SkillCard = ({ skill, isSelected, onSelect }) => {
    if (!skill || !skill.icon) return null;

    const IconComponent = skill.icon;

    return (
        <motion.div
            layout
            onClick={() => onSelect(skill)}
            className={`relative flex flex-col items-center justify-center p-6 rounded-lg cursor-pointer transform transition-transform duration-300
                       ${isSelected ? 'scale-110 shadow-xl' : 'shadow-lg'}`}
            style={{ backgroundColor: `${skill.color}20` }}
            whileHover={{ scale: 1.05, rotateY: 10 }}
            whileTap={{ scale: 0.95 }}
        >
            <div
                className={`w-16 h-16 flex items-center justify-center rounded-full shadow-lg mb-4 transition-transform duration-300
                           ${isSelected ? 'scale-125' : ''}`}
                style={{ backgroundColor: skill.color }}
            >
                <IconComponent className={`text-white ${isSelected ? 'text-5xl' : 'text-4xl'}`} />
            </div>

            <span className="text-lg font-semibold text-gray-200">{skill.name}</span>

            <AnimatePresence>
                {isSelected && (
                    <motion.div
                        initial={{ opacity: 0, translateY: -20 }}
                        animate={{ opacity: 1, translateY: 0 }}
                        exit={{ opacity: 0, translateY: -20 }}
                        className="absolute bottom-0 left-0 right-0 bg-gray-800 rounded-b-lg p-4"
                    >
                        <div className="w-full bg-gray-700 rounded-full h-2 mb-4">
                            <div
                                className="h-2 rounded-full transition-all duration-1000"
                                style={{
                                    backgroundColor: skill.color,
                                    width: `${skill.level}%`
                                }}
                            />
                        </div>
                        <p className="text-sm text-gray-300">{skill.description}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

const Skills = () => {
    const [selectedSkill, setSelectedSkill] = useState(null);

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="min-h-screen bg-gradient-to-b from-primary to-gray-900 py-10 sm:py-20 mt-10 relative overflow-hidden"
        >
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl sm:text-5xl font-bold text-white mb-10 text-center"
                >
                    My Skills
                </motion.h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
                    {skillsData.map((skill) => (
                        <SkillCard
                            key={skill.name}
                            skill={skill}
                            isSelected={selectedSkill?.name === skill.name}
                            onSelect={setSelectedSkill}
                        />
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

export default Skills;
