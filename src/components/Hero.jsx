import { HERO_CONTENT } from "../constants"
import profilePic from "../assets/kevinRushProfile.png"
import {motion } from "framer-motion"

// const container = (delay)=>({
//     hidden: {x: -100, opacity: 0},
//     vasible: {
//         x: 0,
//         opacity: 1,
//         transition: { duration: 0.5, delay: delay },
//     },
// });

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col item-center lg:item-start">
                    <motion.h1 
                    // variants={container(0)}  there is some issue
                    initial = {{x:-100, opacity: 0}}
                    animate = {{x: 0, opacity: 1}}
                    transition={{duration: 0.5, delay: 0}}
                    className="pb-16 text-6xl font-thin traking-tight lg:mt-16
                    lg:text-8xl"
                    >
                    Gayatri Rajguru
                    </motion.h1>

                    <motion.span
                    initial = {{x:-100, opacity: 0}}        
                    animate = {{x: 0, opacity: 1}}
                    transition={{duration:0.5, delay: 0.5}} 
                    className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl traking-tight text-transparent">
                    Full Stack Developer
                    </motion.span>
                    <motion.p
                    initial = {{x:-100, opacity: 0}}
                    animate = {{x: 0, opacity: 1}}
                    transition={{duration:0.5, delay: 1}} 
                    className="my-2 max-w-xl py-6 font-light tracking-tighter"> 
                    {HERO_CONTENT}
                    </motion.p>
                </div>
            </div>
            <div className="w-full lg:w-1/2 lg:p-8">
                <div className="flex justify-center">
                    <motion.img 
                    initial = {{x:100, opacity: 0}}
                    animate = {{x: 0, opacity: 1}}
                    transition={{duration:1, delay: 1.2}}
                    src={profilePic} alt="Gayatri Profile" />
                </div>
            </div>
        </div>
    </div>
  );
}

export default Hero
