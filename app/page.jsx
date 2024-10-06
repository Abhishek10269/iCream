 
import { Button } from "@/components/ui/button";
import {FiDownload} from "react-icons/fi";
import Social from "@/components/Socials";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import Work from "./work/page";
import Resume from "./resume/page";
import Contact  from "./contact/page";
import Skills from "./skills/page";

 const Home =()=> {
  return (
   <section className="h-full mt-20">
    <div className="container mx-auto h-full">
      <div className="flex flex-col xl:flex-row items-center justify-between xl:pb-24 xl:pt-8">
        {/* text */}
        <div className="text-center xl:text-left order-2 xl:order-none">
          <span className="text-xl">Software Developer</span>
          <h1 className="h1 mb-6">Hello I'm <br/> <span className="text-accent">Abhishek Kumar</span>
          </h1>
          <p className="max-w-[500px] mb-9 text-white/80">I excel at crafting elegant digital experiences and I am
            proficient in various programming languages and technologies.
          </p>
          {/* button and socials */}
          <div className="flex flex-col xl:flex-row items-center gap-8">
            <Button variant="outline" size="lg" className="flex items-center gap-2 hover:text-black">
              <span>Download CV</span>
              <FiDownload className="text-xl"/>
            </Button>
            <div className="mb-8 xl:mb-0">
              <Social 
              containerStyles="flex gap-6"
              iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent
              hover:text-primary hover:transition-all duration-500"
              />
            </div>
          </div>
        </div>
        {/* photo */}
        <div className="order-1 xl:order-none mb-8  xl:mb-0">
          <Photo/>
        </div>
      </div>
    </div>
    <Stats/>
    <hr className="border-t-4 border-accent w-1/2 mx-auto mt-12 rounded-lg shadow-lg opacity-80"/>
    <Work/>
    <hr className="border-t-4 border-accent w-1/2 mx-auto mt-2 rounded-lg shadow-lg opacity-80"/>
    <Skills/>
    <hr className="border-t-4 border-accent w-1/2 mx-auto mt-2 rounded-lg shadow-lg opacity-80"/>

    <Resume/>
    <hr className="border-t-4 border-accent w-1/2 mx-auto mt-2 rounded-lg shadow-lg opacity-80"/>
    <Contact/>
   </section>
  );
}


export default Home;
