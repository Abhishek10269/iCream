"use client"

import React from "react";
import { motion } from "framer-motion";
import { BsGithub } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineKeyboardDoubleArrowRight, MdOutlineFolderOpen } from "react-icons/md";

const projects = [
    {
        num: "01",
        title: "Swift Wallet",
        description: "Your wallet app for a risk-free, fun financial adventure! Experience seamless transactions and intuitive money management.",
        stack: ["React", "Node.js", "MongoDB"],
        images: ["/assets/wallet1.png", "/assets/wallet2.png"],
        live: "https://Frontend Project-demo.com",
        github: "https://github.com/username/Frontend Project"
    },
    {
        num: "02",
        title: "E-Commerce Platform",
        description: "A modern e-commerce solution with real-time inventory tracking and AI-powered recommendations.",
        stack: ["Next.js", "Prisma", "PostgreSQL"],
        images: ["/assets/2.jpg", "/assets/3.webp"],
        live: "https://Frontend Project-demo.com",
        github: "https://github.com/username/Frontend Project"
    },
    {
        num: "03",
        title: "AI Content Generator",
        description: "Revolutionize content creation with our AI-powered tool. Generate engaging blog posts, social media content, and more.",
        stack: ["Python", "TensorFlow", "Flask"],
        images: ["/assets/2.jpg", "/assets/1.webp"],
        live: "https://Frontend Project-demo.com",
        github: "https://github.com/username/Frontend Project"
    }
];

const ProjectCard = ({ project }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ y: -5, transition: { duration: 0.2 } }}
        className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-accent/20 transition-all duration-300"
    >
        <div className="relative h-48 sm:h-56">
            <Image
                src={project.images[0]}
                alt={project.title}
                layout="fill"
                objectFit="cover"
                className="transition-all duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
        </div>

        <div className="p-6">
            <div className="flex items-center justify-between mb-4">
                <span className="text-accent font-mono text-sm">{project.num}</span>
                <MdOutlineFolderOpen className="text-accent text-xl" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
            <p className="text-gray-400 text-sm mb-4 line-clamp-2">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
                {project.stack.map((tech, index) => (
                    <span
                        key={index}
                        className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-full"
                    >
                        {tech}
                    </span>
                ))}
            </div>
        </div>

        <div className="p-6 pt-0 flex justify-between items-center">
            <Link
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center text-gray-400 hover:text-white transition-colors"
            >
                <BsGithub size={20} className="mr-2 transition-transform group-hover:rotate-12" />
                <span className="text-sm">Source</span>
            </Link>
            
            <Link
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-accent group"
            >
                <span className="text-sm mr-1">Demo</span>
                <MdOutlineKeyboardDoubleArrowRight className="transition-transform group-hover:translate-x-1" />
            </Link>
        </div>
    </motion.div>
);

const Work = () => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="min-h-screen bg-primary py-20"
        >
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl font-bold text-white mb-4"
                    >
                        Featured Projects
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 max-w-2xl mx-auto"
                    >
                        Discover some of my recent work. Each project is crafted with attention to detail and a passion for creating exceptional user experiences.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

export default Work;