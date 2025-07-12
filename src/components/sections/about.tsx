"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  return (
    <section id="about" className="container mx-auto px-4 py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          About <span className="text-primary">Me</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-12 items-center">
          <motion.div 
            className="md:col-span-1 flex justify-center"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/images/dp.png"
              alt="Shashank"
              width={300}
              height={300}
              className="rounded-full border-4 border-primary shadow-lg"
              data-ai-hint="professional developer portrait"
            />
          </motion.div>
          <motion.div className="md:col-span-2" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
            <motion.p className="text-lg text-muted-foreground mb-6" variants={itemVariants}>
              I’m Shashank, a web developer experienced in crafting responsive UIs and building scalable backend services. I’m passionate about cloud technologies like Google Cloud and Firebase and enjoy developing intelligent, full-stack web solutions.
            </motion.p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
