"use client"

import React, { useState, useEffect } from 'react';
import Link from "next/link";
import { Button } from "./ui/button";
import { motion, useAnimation } from "framer-motion";

// components
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    // Immediately show the header
    controls.start({ opacity: 1, y: 0 });

    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [controls]);

  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={controls}
      transition={{ duration: 0.5 }}
      className={`py-6 bg-gradient-to-r from-primary to-primary-dark text-white
                  fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out
                  ${isScrolled ? 'shadow-lg' : ''}`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/*logo*/}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link href="/">
            <h1 className="text-4xl font-semibold">
              Abhi<span className="text-accent">.</span>
            </h1>
          </Link>
        </motion.div>
        
        {/* desktop nav */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/contact">
              <Button className="bg-accent hover:bg-accent-light text-primary font-semibold py-2 px-4 rounded-full transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
                Hire me
              </Button>
            </Link>
          </motion.div>
        </div>
        
        {/* Mobile navbar */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </motion.header>
  );
};

export default Header;