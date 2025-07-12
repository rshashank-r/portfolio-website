"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Download } from 'lucide-react';

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex items-center justify-center h-screen min-h-[700px] overflow-hidden"
    >
      <div className="absolute inset-0 z-0 bg-background">
         <div 
           className="absolute inset-0 opacity-10 dark:opacity-20"
           style={{
             backgroundImage: "radial-gradient(circle, hsl(var(--primary) / 0.3) 0%, transparent 60%)",
           }}
         />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center px-4"
      >
        <motion.h1 
          className="text-5xl md:text-7xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-br from-foreground to-muted-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          SHASHANK GOWDA L R
        </motion.h1>

        <motion.p 
          className="text-xl md:text-2xl font-medium text-primary mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          CSE Student 
        </motion.p>
        
        <motion.p 
          className="max-w-2xl mx-auto text-md md:text-lg text-muted-foreground mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Building intuitive web interfaces and scalable applications that solve real-world problems.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <a href="#projects">
            <Button size="lg" className="w-full sm:w-auto">
              View Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
          <a href="https://drive.google.com/file/d/1im3Ljfx1hDgmMpPwsjXvOcSc82fRJ0Fk/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              Download Resume
              <Download className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};
