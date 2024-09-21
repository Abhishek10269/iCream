/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"], // Enables dark mode using class strategy
	content: [
	  "./pages/**/*.{js,ts,jsx,tsx,mdx}",   // Includes Next.js page files
	  "./components/**/*.{js,ts,jsx,tsx,mdx}", // Includes components directory
	  "./app/**/*.{js,ts,jsx,tsx,mdx}",    // Includes Next.js app directory (if using app directory structure)
	  "./src/**/*.{js,ts,jsx,tsx,mdx}",    // Extends support for any src folder components
	],
	prefix: "", // No prefix added to class names
	theme: {
	  extend: {
		colors: {
		 primary:"#1c1c22",
		 accent: {
			DEFAULT: "#a855f7", // Light purple
			hover: "#9333ea",   // Darker purple for hover
		  },
		  
		},
		borderRadius: {
		  lg: 'var(--radius)',  // Custom border radius values based on CSS variables
		  md: 'calc(var(--radius) - 2px)',
		  sm: 'calc(var(--radius) - 4px)',
		},
		screens: {
		  sm: '640px',  // Small devices (landscape phones)
		  md: '768px',  // Medium devices (tablets)
		  lg: '960px', // Large devices (desktops)
		  xl: '1200px', // Extra large devices (large desktops)
		},
		fontFamily:{
			primary: "var(--font-jetbrainsMono)",
		},
		keyframes: {
		  accordionDown: {
			from: { height: '0' },
			to: { height: 'var(--accordion-content-height)' },
		  },
		  accordionUp: {
			from: { height: 'var(--accordion-content-height)' },
			to: { height: '0' },
		  },
		  fadeIn: {
			from: { opacity: 0 },
			to: { opacity: 1 },
		  },
		},
		// animation: {
		//   'accordion-down': 'accordionDown 0.3s ease-out', // Accordion down animation
		//   'accordion-up': 'accordionUp 0.3s ease-out',     // Accordion up animation
		//   'fade-in': 'fadeIn 0.5s ease-in',               // Fade-in animation
		// },
	  },
	  container: {
		center: true, // Centering the container by default
		padding: '15px', // Default padding of 15px for all screens
	  },
	},
	plugins: [
	  require("tailwindcss-animate"), // Including tailwind animation plugin
	],
  };
  