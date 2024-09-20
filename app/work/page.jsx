"use client"

import React from "react";
import { motion } from "framer-motion";
import {BsGithub } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const projects = [
    {
        num: "01",
        title: "Frontend Project ",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque consequat, faucibus et, et.",
        stack: ["Html 5", "Css 3", "Javascript"],
        images: ["/assets/2.jpg", "/assets/1.webp"], // Add more image paths as needed
        live: "https://Frontend Project-demo.com",
        github: "https://github.com/username/Frontend Project"
    },
    {
        num: "02",
        title: "Frontend Project",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque consequat, faucibus et, et.",
        stack: ["Html 5", "Css 3", "Javascript"],
        images: ["/assets/2.jpg", "/assets/3.webp"], // Add more image paths as needed
        live: "https://Frontend Project-demo.com",
        github: "https://github.com/username/Frontend Project"
    },
    {
        num: "03",
        title: "Frontend Project",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque consequat, faucibus et, et.",
        stack: ["Html 5", "Css 3", "Javascript"],
        images: ["/assets/2.jpg", "/assets/1.webp"], // Add more image paths as needed
        live: "https://Frontend Project-demo.com",
        github: "https://github.com/username/Frontend Project"
    },
    {
        num: "01",
        title: "Frontend Project",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque consequat, faucibus et, et.",
        stack: ["Html 5", "Css 3", "Javascript"],
        images: ["/assets/1.webp", "/assets/1.webp"], // Add more image paths as needed
        live: "https://Frontend Project-demo.com",
        github: "https://github.com/username/Frontend Project"
    },
    {
        num: "01",
        title: "Frontend Project",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque consequat, faucibus et, et.",
        stack: ["Html 5", "Css 3", "Javascript"],
        images: ["/assets/1.webp", "/assets/1.webp"], // Add more image paths as needed
        live: "https://Frontend Project-demo.com",
        github: "https://github.com/username/Frontend Project"
    },
    {
        num: "01",
        title: "Frontend Project",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque consequat, faucibus et, et.",
        stack: ["Html 5", "Css 3", "Javascript"],
        images: ["/assets/1.webp", "/assets/1.webp"], // Add more image paths as needed
        live: "https://Frontend Project-demo.com",
        github: "https://github.com/username/Frontend Project"
    },
    {
        num: "01",
        title: "Frontend Project",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque consequat, faucibus et, et.",
        stack: ["Html 5", "Css 3", "Javascript"],
        images: ["/assets/1.webp", "/assets/1.webp"], // Add more image paths as needed
        live: "https://Frontend Project-demo.com",
        github: "https://github.com/username/Frontend Project"
    },
    {
        num: "01",
        title: "Frontend Project",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque consequat, faucibus et, et.",
        stack: ["Html 5", "Css 3", "Javascript"],
        images: ["/assets/1.webp", "/assets/1.webp"], // Add more image paths as needed
        live: "https://Frontend Project-demo.com",
        github: "https://github.com/username/Frontend Project"
    },

    // Add more projects here...
];

const ProjectCard = ({ project }) => (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.5 }}
        className="mb-10 bg-[#27272c] rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:shadow-2xl"
    >
        <div className="p-6">
            <div className="flex justify-between items-center mb-4">
                <span className="text-3xl  font-extrabold text-outline
                            text-transparent">{project.num}</span>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-white">{project.title}</h3>
            <p className="text-sm text-gray-400 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-2">
                {project.stack.map((tech, index) => (
                    <span
                        key={index}
                        className="px-3 py-1 bg-gray-700 text-md rounded-full text-accent"
                    >
                        {tech}
                    </span>
                ))}
            </div>
        </div>

        <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            className="mySwiper"
        >
            {project.images.map((image, index) => (
                <SwiperSlide key={index}>
                    <Image
                        src={image}
                        alt={`${project.title} - Image ${index + 1}`}
                        width={600}
                        height={350}
                        objectFit="cover"
                        className="rounded-lg"
                    />
                </SwiperSlide>
            ))}
        </Swiper>

        <div className="p-6 flex justify-between items-center border-t border-gray-700">
        <Link
    href={project.github}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center bg-gray-800 text-gray-400 font-semibold px-4 py-2 rounded-full hover:text-white hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
  >
    <BsGithub size={24} className="mr-2" />
    View on GitHub
  </Link>
  
  <Link
    href={project.live}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center bg-gradient-to-r from-green-400 to-green-600 text-black font-semibold px-4 py-2 rounded-full hover:from-green-500 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
  >
    {/* {<MdOutlineKeyboardDoubleArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />} */}
    Live Demo
    <MdOutlineKeyboardDoubleArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
  </Link>
</div>

    </motion.div>
);


const Work = () => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="min-h-screen bg-primary py-12"
        >
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-4xl font-bold text-white mb-10 uppercase tracking-wide">
                "A Showcase of Featured Projects"
                </h2>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

export default Work;