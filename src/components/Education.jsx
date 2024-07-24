import React from 'react'
import { EDUCATION } from "../constants";
import { motion } from "framer-motion";

const Education = () => {
  return (
      <div className="border-b border-neutral-900 pb-4">
        <motion.h1
        whileInView={{opacity: 1, y:0}}
        initial={{opacity: 0, y: -100}}
        transition={{duration: 0.5}}  
        className="my-20 text-center text-4xl">
          Education <span className="text-neutral-500">Details</span>
        </motion.h1>

        <div className="flex flex-col">
          {EDUCATION.map((edu, index) => (
            <motion.div
              key={index}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 100 }}
              transition={{ duration: 0.5 }}
              className="my-4 flex flex-col lg:flex-row lg:justify-between"
            >
              <div className="lg:w-1/2">
                <h2 className="text-xl font-bold">{edu.degree}</h2>
                <p className="text-neutral-500">{edu.institution}</p>
              </div>
              <div className="lg:w-1">
                <p className="text-neutral-700">{edu.description}</p>
              </div>
              <div className="text-neutral-500">{edu.year}</div>
            </motion.div>
          ))}
        </div>
      </div>
  )
}

export default Education