"use client"

import React from "react";
import { motion } from "framer-motion";
import { BsGithub } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const projects = [
    {
        title: "Swift Wallet",
        description: "Your wallet app for a risk-free, fun financial adventure! Experience seamless transactions and intuitive money management.",
        stack: ["React", "Node.js", "MongoDB","Express.js"],
        images: ["/assets/wallet.webp"],
        live: "https://Frontend Project-demo.com",
        github: "https://github.com/username/Frontend Project"
    },
    {
        title: "Exchange Platform",
        description: "Developed an advanced online exchange platform that facilitates seamless currency conversions with real-time exchange rates.",
        stack: ["Next.js", "Prisma", "PostgreSQL"],
        images: ["/assets/exchange.png"],
        live: "https://Frontend Project-demo.com",
        github: "https://github.com/username/Frontend Project"
    },
    {
        title: "Bloggin Platform",
        description: "Created a feature-rich blogging platform that enables users to publish, manage, and share content seamlessly in a modern, user-friendly interface.",
        stack: ["React", "Typescript","Cloudflare Workers","Postgres","Prisma","JWT"],
        images: ["/assets/blog.png"],
        live: "https://Frontend Project-demo.com",
        github: "https://github.com/username/Frontend Project"
    }
];

const ProjectCard = ({ project }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ y: -5, transition: { duration: 0.2 } }}
        className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-accent/20 transition-all duration-300 border border-accent/50"
    >
        <div className="relative h-56 sm:h-64">
            <Image
                src={project.images[0]}
                alt={project.title}
                layout="fill"
                className="transition-all duration-500 hover:scale-105 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-lg">{project.title}</h3>
                <div className="flex flex-wrap gap-2 mb-2">
                    {project.stack.map((tech, index) => (
                       <span
                       key={index}
                       className="px-3 py-1.5 bg-accent/30 text-white text-xs font-semibold rounded-full backdrop-blur-sm shadow-md"
                   >
                       {tech}
                   </span>
                    ))}
                </div>
            </div>
        </div>

        <div className="p-6">
            <p className="text-gray-300 text-lg mb-4 line-clamp-4">{project.description}</p>
            <div className="flex justify-between items-center">
                <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center text-gray-400 hover:text-white transition-colors"
                >
                    <BsGithub size={20} className="mr-2 transition-transform group-hover:rotate-12" />
                    <span className="text-sm">Source Code</span>
                </Link>
                
                <Link
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-accent group bg-accent/10 px-3 py-2 rounded-full hover:bg-accent/20 transition-all duration-300"
                >
                    <span className="text-sm mr-1">Live Demo</span>
                    <MdOutlineKeyboardDoubleArrowRight className="transition-transform group-hover:translate-x-1" />
                </Link>
            </div>
        </div>
    </motion.div>
);

const Work = () => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="min-h-screen bg-primary py-10"
        >
            <div className="container mx-auto px-4">
                <div className="text-center mb-10">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl font-bold text-accent"
                    >
                       Display of Featured Projects
                    </motion.h2>
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