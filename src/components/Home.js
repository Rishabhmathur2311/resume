import React from "react";
import Computers from "./Computers";
import ComputerCanvas from "./Computers";
import {motion} from "framer-motion"
import {SectionWrapper} from "../hoc";

const About=()=>{
    return (
        <div>
        <motion.div
        initial={{ scale: 0 }}
        animate={{ rotate: 0 , scale: 1}}
        transition={{
            type: "spring",
            stiffness: 260,
            damping: 20
        }}
        >
            <div className="flex flex-row gap-5 mt-[10%]">
                <div className="flex flex-col justify-center items-center ml-[18%]">
                    <div className="w-5 h-5 rounded-full bg-blue-500" />
                    <div className="w-1 sm:h-30 h-40 bg-gradient-to-b from-blue-500 to-transparent"></div>
                </div>
                <div>
                <div className="font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2">
                Hi, I'm <span className="text-blue-500">Rishabh</span>
            </div>
                    <p className="text-white mt-8 sm: max-w-[45%] md: max-w-[70%] max-w-[45%] ">
                    I am pursuing B.Tech. from MNIT Jaipur in Electronics and communication engineering have maintained a CGPA of 9.20, I've have strong grasp over operating systems, Object Oriented Programming and data structure and algorithms and have solved more than 650+ questions on leetcode using C++.
                    </p>
                </div>
            </div>
            </motion.div>
            <div className="mt-8">
                <ComputerCanvas />
            </div>
            
        
        </div>
    );
}

export default SectionWrapper(About, "about");
// export default Home;