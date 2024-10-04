"use client"
import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from "framer-motion";

import { SiJavascript, SiReact, SiNodeDotJs, SiExpress, SiMongodb, SiPostgresql, SiPython, SiGit, SiDocker, SiAmazonaws, SiTailwindcss, SiTypescript, SiFigma, SiRedux, SiNextdotjs, SiReactNative } from "react-icons/si";

const skillsData = [
    { name: "JavaScript", shorthand: "JS", color: "#F7DF1E", category: "Frontend", icon: SiJavascript },
    { name: "React", shorthand: "Re", color: "#61DAFB", category: "Frontend", icon: SiReact },
    { name: "Node.js", shorthand: "No", color: "#339933", category: "Backend", icon: SiNodeDotJs },
    { name: "Express", shorthand: "Ex", color: "#000000", category: "Backend", icon: SiExpress },
    { name: "MongoDB", shorthand: "Mo", color: "#47A248", category: "Database", icon: SiMongodb },
    { name: "PostgreSQL", shorthand: "Pg", color: "#4169E1", category: "Database", icon: SiPostgresql },
    { name: "Python", shorthand: "Py", color: "#3776AB", category: "Backend", icon: SiPython },
    { name: "Git", shorthand: "Gt", color: "#F05032", category: "Tools", icon: SiGit },
    { name: "Docker", shorthand: "Do", color: "#2496ED", category: "DevOps", icon: SiDocker },
    { name: "AWS", shorthand: "AW", color: "#FF9900", category: "Cloud", icon: SiAmazonaws },
    { name: "Tailwind CSS", shorthand: "TW", color: "#06B6D4", category: "Frontend", icon: SiTailwindcss },
    { name: "TypeScript", shorthand: "TS", color: "#3178C6", category: "Frontend", icon: SiTypescript },
    { name: "Figma", shorthand: "Fi", color: "#F24E1E", category: "Design", icon: SiFigma },
    { name: "Redux", shorthand: "Rx", color: "#764ABC", category: "Frontend", icon: SiRedux },
    { name: "Next.js", shorthand: "NJ", color: "#000000", category: "Frontend", icon: SiNextdotjs },
    { name: "React Native", shorthand: "RN", color: "#61DAFB", category: "Mobile", icon: SiReactNative }
];

const SkillCard = ({ skill, isSelected, onClick }) => {
    const controls = useAnimation();
    const IconComponent = skill.icon;  // Ensure this is correctly mapped to the icon

    useEffect(() => {
        controls.start({
            scale: isSelected ? 1.1 : 1,
            transition: { duration: 0.3 }
        });
    }, [isSelected, controls]);

    return (
        <motion.div
            layout
            animate={controls}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onClick(skill)}
            className={`bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 flex flex-col items-center justify-center cursor-pointer
                        ${isSelected ? 'ring-2 ring-accent shadow-lg shadow-accent/20' : 'shadow-md'}
                        transition-all duration-300`}
        >
            <div className="relative group">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 bg-accent/5 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"
                    style={{ backgroundColor: `${skill.color}20` }}
                />
                <div 
                    className="relative w-12 h-12 md:w-16 md:h-16 flex items-center justify-center text-4xl transition-transform duration-300 group-hover:scale-110" 
                    style={{ color: skill.color }}
                >
                    {IconComponent && <IconComponent />}  {/* Safeguard if IconComponent is undefined */}
                </div>
            </div>
            <span className="mt-4 text-sm text-gray-300 font-medium">{skill.name}</span>
            <span className="mt-1 text-xs text-accent/80">{skill.category}</span>
        </motion.div>
    );
};



const SkillDetails = ({ skill }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-gray-800/70 backdrop-blur-md rounded-xl p-6 mt-8"
        >
            <h3 className="text-2xl font-bold text-white mb-4">{skill.name}</h3>
            <p className="text-gray-300 mb-4">
                {skill.name} is a powerful {skill.category.toLowerCase()} technology used in modern web development.
            </p>
            <div className="flex items-center space-x-2">
                <span className="text-accent font-semibold">Category:</span>
                <span className="bg-accent/20 text-accent px-2 py-1 rounded-full text-sm">{skill.category}</span>
            </div>
        </motion.div>
    );
};

const Skills = () => {
    const [selectedSkill, setSelectedSkill] = useState(null);
    const [filteredSkills, setFilteredSkills] = useState(skillsData);
    const [activeFilter, setActiveFilter] = useState('All');

    const handleSkillClick = (skill) => {
        setSelectedSkill(skill);
    };

    const handleFilterClick = (category) => {
        setActiveFilter(category);
        if (category === 'All') {
            setFilteredSkills(skillsData);
        } else {
            setFilteredSkills(skillsData.filter(skill => skill.category === category));
        }
    };

    const uniqueCategories = ['All', ...new Set(skillsData.map(skill => skill.category))];

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="min-h-screen bg-primary py-20"
        >
            <div className="container mx-auto px-4">
                <motion.h2 
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-5xl font-bold text-white mb-8 text-center"
                >
                    Technical Skills
                </motion.h2>

                <div className="flex justify-center mb-8 space-x-4 overflow-x-auto pb-4">
                    {uniqueCategories.map((category) => (
                        <motion.button
                            key={category}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => handleFilterClick(category)}
                            className={`px-4 py-2 rounded-full text-sm font-medium
                                ${activeFilter === category 
                                    ? 'bg-accent text-primary' 
                                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}
                                transition-colors duration-200`}
                        >
                            {category}
                        </motion.button>
                    ))}
                </div>

                <motion.div 
                    layout
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
                >
                    {filteredSkills.map((skill, index) => (
                        <SkillCard 
                            key={skill.name} 
                            skill={skill} 
                            index={index} 
                            isSelected={selectedSkill === skill}
                            onClick={handleSkillClick}
                        />
                    ))}
                </motion.div>

                {selectedSkill && <SkillDetails skill={selectedSkill} />}
            </div>
        </motion.section>
    );
};

export default Skills;