"use client";

import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, Link as LinkIcon } from 'lucide-react';
import Image from 'next/image';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

const projects = [
  {
    title: 'Littering Management Using Ai',
    description: 'An AI-powered system that detects littering from vehicles and uses OCR to recognize license plates for reporting.',
    tech: ['AI', 'Computer Vision', 'OpenCV', 'Python', 'Yolo'],
    image: '/images/litter management.png',
    github: 'https://github.com/rshashank-r/littering-management-system',
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
    <section id="projects" className="container mx-auto px-4 py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
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
              <Dialog>
                <DialogTrigger asChild>
                  <Card className="h-full flex flex-col overflow-hidden group hover:border-primary transition-all duration-300 bg-card/50 cursor-pointer">
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        layout="fill"
                        objectFit="cover"
                        className="group-hover:scale-105 transition-transform duration-300"
                        data-ai-hint={project.aiHint}
                      />
                    </div>
                    <div className="flex flex-col flex-grow">
                      <CardHeader>
                        <CardTitle className="text-xl">{project.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                         <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech) => (
                            <Badge key={tech} variant="secondary">{tech}</Badge>
                          ))}
                        </div>
                      </CardContent>
                      <CardFooter className="mt-auto">
                        <span className="text-xs text-muted-foreground">Click to learn more</span>
                      </CardFooter>
                    </div>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-3xl">
                  <DialogHeader>
                    <DialogTitle>{project.title}</DialogTitle>
                  </DialogHeader>
                  <div className="grid md:grid-cols-2 gap-8 py-4">
                    <div className="relative aspect-video">
                       <Image
                          src={project.image}
                          alt={project.title}
                          layout="fill"
                          objectFit="cover"
                          className="rounded-md"
                          data-ai-hint={project.aiHint}
                        />
                    </div>
                    <div className="flex flex-col">
                      <DialogDescription className="flex-grow">{project.description}</DialogDescription>
                       <div className="flex flex-wrap gap-2 my-4">
                        {project.tech.map((tech) => (
                          <Badge key={tech} variant="secondary">{tech}</Badge>
                        ))}
                      </div>
                      <div className="flex gap-2 mt-auto">
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
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};
