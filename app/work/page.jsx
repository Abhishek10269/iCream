"use client"

import { motion } from "framer-motion";
 import React, {useState} from "react";
 import {BsArrowUpRight,BsGithub} from "react-icons/bs";
 import "swiper/css";

 import{Tooltip,TooltipContent,TooltipTrigger,TooltipProvider} from "@/components/ui/tooltip";
 import Link from "next/link";
 import Image from "next/image";
import { Description } from "@radix-ui/react-dialog";

 const projects = [
    {
        num: '01',
        category: 'frontend',
        title: 'project 1',
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste, dolores!",
        stack: [{name:'Html 5'},{name:'Next.js'},{name:'Tailwind CSS'},{name:'Javascript'},],
        image:'/',
        live: "",
        github: ""
    },
    {
        num: '01',
        category: 'frontend',
        title: 'project 1',
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste, dolores!",
        stack: [{name:'Html 5'},{name:'Next.js'},{name:'Tailwind CSS'},{name:'Javascript'},],
        image:'/',
        live: "",
        github: ""
    },
    {
        num: '01',
        category: 'frontend',
        title: 'project 1',
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste, dolores!",
        stack: [{name:'Html 5'},{name:'Next.js'},{name:'Tailwind CSS'},{name:'Javascript'},],
        image:'/',
        live: "",
        github: ""
    },
 ];


const Work = ()=>{
    return(
        <div>
            this is  page
        </div>
    )
}

export default Work;