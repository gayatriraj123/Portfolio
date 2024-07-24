import { RiReactjsLine } from "react-icons/ri"
import { FaCode } from 'react-icons/fa'; 
import { FaJava } from 'react-icons/fa';
import { SiJavascript } from 'react-icons/si';  // JavaScript
import { FaNodeJs } from 'react-icons/fa';
import { SiMongodb } from 'react-icons/si';
import { FaPython } from 'react-icons/fa';      // Python
import { animate, motion } from "framer-motion";

const iconVariants = (duration) => ({
    initial: {y: -10},
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat:Infinity,
            repeatType: "reverse",
        },
    },
});


const Tecnologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <motion.h2
        whileInView={{opacity: 1, y:0}}
        initial={{opacity: 0, y: -100}}
        transition={{duration: 1.5}}
        className="my-20 text-center text-4xl">Technologies</motion.h2>
        <motion.div
        whileInView={{opacity: 1, x:0}}
        initial={{opacity: 0, x: -100}}
        transition={{duration: 1.5}}
        className="flex flex-wrap items-center justify-center gap-4">
        {/* i have to add some languages that i want to added here */}
            <motion.div
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate" 
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className="text-7xl text-cyan-400" />
            </motion.div>
            {/* to here */}
            <motion.div
            variants={iconVariants(3)}
            initial="initial"
            animate="animate" 
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaCode className="text-7xl text-sky-600" />
            </motion.div>

            <motion.div
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate" 
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaJava className="text-7xl text-red-400" />
            </motion.div>

            <motion.div
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiJavascript className="text-7xl text-yellow-400" />
            </motion.div>

            <motion.div
            variants={iconVariants(6)}
            initial="initial"
            animate="animate"
             className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaPython className="text-7xl text-cyan-400" />
            </motion.div>

            <motion.div
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaNodeJs className="text-7xl text-green-500" />
            </motion.div>

            <motion.div
            variants={iconVariants(8)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiMongodb className="text-7xl text-green-400" />
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Tecnologies