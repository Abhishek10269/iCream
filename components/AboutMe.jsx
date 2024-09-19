import React from 'react';
import { User, Phone, Calendar, Flag, Briefcase, Mail, Languages } from 'lucide-react';

const about = {
    title: "About Me",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quisquam itaque doloremque, laudantium ea molestias!",
    info: [
        { fieldName: "Name", fieldValue: "Abhishek kumar", icon: User },
        { fieldName: "Phone", fieldValue: "+917678574104", icon: Phone },
        { fieldName: "Experience", fieldValue: "2+ Year", icon: Calendar },
        { fieldName: "Nationality", fieldValue: "Indian", icon: Flag },
        { fieldName: "Freelance", fieldValue: "Available", icon: Briefcase },
        { fieldName: "Email", fieldValue: "shakeabhi403@gmail.com", icon: Mail },
        { fieldName: "Languages", fieldValue: "English, Hindi", icon: Languages },
        { fieldName: "Freelance", fieldValue: "Available", icon: Briefcase },
    ],
};

const AboutMe = () => {
    return (
        <div className="w-full bg-primary ">
            <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold text-white">{about.title}</h3>
                <p className="max-w-[600px] text-gray-400 mx-auto xl:mx-0">{about.description}</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[720px] mx-auto xl:mx-0">
                    {about.info.map((item, index) => (
                        <li key={index} 
                            className="flex items-center gap-4 bg-[#27272c] p-4 rounded-lg transition-all duration-300"
                        >
                            <span className="  text-accent hover:text-white">
                                <item.icon className="w-6 h-6" />
                            </span>
                            <div className="flex flex-col">
                                <span className="text-white text-md hover:text-accent transition-all">{item.fieldName}</span>
                                <span className="text-white text-lg hover:text-accent transition-all">{item.fieldValue}</span>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default AboutMe;