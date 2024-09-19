"use client"

import { FaHtml5, FaCss3, FaJs, FaNodeJs, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress, SiNextdotjs } from "react-icons/si";

// about data

const about = [
    {
        fieldName: "Name",
        fieldValue: "Abhishek kumar"
    },
    {
        fieldName: "Phone",
        fieldValue: "+917678574104"
    },
    {
        fieldName: "Email",
        fieldValue: "shakeabhi403@gmail.com"
    },
    {
        fieldName: "Experience",
        fieldValue: "2+ Year"
    },
    {
        fieldName: "Nationality",
        fieldValue: "Indian"
    },
    {
        fieldName: "Freelance",
        fieldValue: "Available"
    },
    {
        fieldName: "Languages",
        fieldValue: "English,Hindi"
    },
];

const experience = {
    icon: "/asset/resume/badge.svg",
    title: "My experience",
    description:
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit tempora Lorem ipsum dolor sit amet facilis.",
    items: [
        {
            company: "XYZ",
            position: "Full Stack Developer",
            duration: "2024-Present"
        },
        {
            company: "ABC",
            position: "Freelance Web Developer",
            duration: "Winter 2023"
        },
        {
            company: "PQR",
            position: "Full Stack Developer",
            duration: "Summer 2022"
        },
        {
            company: "XYZ",
            position: "Full Stack Developer",
            duration: "2024-Present"
        },
        {
            company: "ABC",
            position: "Freelance Web Developer",
            duration: "Winter 2023"
        },
    ],
};

{/* education background*/ }

const education = {
    icon: "/asset/resume/cap.svg",
    title: "My Education",
    description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis dolore dolorem, minus numquam placeat optio.",

    items: [
        {
            institution: "Maharaja Agrasen Institute Of Technology",
            degree: "Information Technology",
            duration: "2021-Present"
        },
        {
            institution: "Udemy",
            degree: "Full Stack Web Development Bootcamp",
            duration: "2023"
        },
        {
            institution: "100x Dev Cohort",
            degree: "Full Stack Web Development Cohort",
            duration: "2023-2024"
        },

    ],
};

{/*Skills */ }

const skill = {
    title: "My Skills",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste aspernatur neque consectetur est velit.",

    items: [
        {
            icon: <FaCss3 />,
            name: "Css 3"
        },
        {
            icon: <FaHtml5 />,
            name: "Html 5"
        },
        {
            icon: <FaNodeJs />,
            name: "node.js"
        },
        {
            icon: <FaReact />,
            name: "react.js"
        },
        {
            icon: <SiNextdotjs />,
            name: "next.js"
        },
        {
            icon: <SiExpress />,
            name: "express.js"
        },
        {
            icon: <SiMongodb />,
            name: "MongoDb"
        },
        {
            icon: <SiTailwindcss />,
            name: "Tailwind CSS"
        }
    ],

};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";


const Resume = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
            }}
            className="min-h-[80vh] flex items-center justify-center py-12  xl:py-0"
        >
            <div className="container mx-auto">
                <Tabs
                    defaultValue="experience"
                    className="flex flex-col xl:flex-row gap-[60px]">
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0
                    gap-6">
                        <TabsTrigger value="experience">Experience</TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="about">About me</TabsTrigger>
                    </TabsList>
                    {/* content */}
                    <div className="min-h-[70vh] w-full">
                        {/* experience */}
                        <TabsContent value="experience" className="w-full">
                            experience
                        </TabsContent>
                    </div>
                </Tabs>

            </div>

        </motion.div>

    );
}

export default Resume;