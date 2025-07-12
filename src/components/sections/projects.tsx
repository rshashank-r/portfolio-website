"use client";

import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, Link as LinkIcon } from 'lucide-react';
import Image from 'next/image';

const projects = [
  {
    title: 'Fraud Detection in Banking Transactions',
    description: 'A machine learning model integrated with a web interface to provide real-time fraud alerts in banking.',
    tech: ['Machine Learning', 'Python', 'Flask', 'React', 'WebSockets'],
    image: 'https://placehold.co/600x400.png',
    github: 'https://github.com/your-username/fraud-detection',
    live: '#',
    aiHint: 'financial security'
  },
  {
    title: 'Newspaper Billing System',
    description: 'A comprehensive billing and subscription management system for local newspaper vendors, featuring SMS notifications.',
    tech: ['React', 'Flask', 'SQLite', 'Twilio API'],
    image: 'https://placehold.co/600x400.png',
    github: 'https://github.com/your-username/newspaper-billing',
    live: '#',
    aiHint: 'billing system'
  },
  {
    title: 'Vehicle Litter Detection System',
    description: 'An AI-powered system that detects littering from vehicles and uses OCR to recognize license plates for reporting.',
    tech: ['AI', 'Computer Vision', 'OpenCV', 'Python', 'FastAPI'],
    image: 'https://placehold.co/600x400.png',
    github: 'https://github.com/your-username/litter-detection',
    live: '#',
    aiHint: 'vehicle recognition'
  },
];

export const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="projects" className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          My <span className="text-primary">Projects</span>
        </h2>
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map((project) => (
            <motion.div key={project.title} variants={itemVariants}>
              <Card className="h-full flex flex-col overflow-hidden group hover:border-primary transition-all duration-300">
                <div className="overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="group-hover:scale-105 transition-transform duration-300"
                    data-ai-hint={project.aiHint}
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary">{tech}</Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex gap-2">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button variant="outline" className="w-full">
                      <Github className="mr-2 h-4 w-4" /> GitHub
                    </Button>
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button className="w-full">
                      <LinkIcon className="mr-2 h-4 w-4" /> Live Demo
                    </Button>
                  </a>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};
