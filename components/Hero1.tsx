"use client"
import React from 'react'
import { LampContainer } from './ui/lamp';
import { motion } from "framer-motion";
import Grid from './Grid';
import Hero from './Hero';


export function LampDemo() {
    return (
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.2,
            duration: 0.4,
            ease: "easeIn",
          }}
        //   className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"

        >
          {/* Build lamps <br /> the right way */}
        
        {/* <Grid/> */}
        </motion.h1>
      
      </LampContainer>
    );
  }
  export default LampDemo
