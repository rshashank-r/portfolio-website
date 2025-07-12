"use client";

import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award } from 'lucide-react';
import Image from 'next/image';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

const certifications = [
  {
    title: 'Oops With Python ',
    platform: 'Udemy',
    type: 'Certification',
    image: '/images/UC-890b69a6-f1c4-465b-aaee-508ea6e968ab.jpg',
    aiHint: 'certificate'
  },
  {
    title: 'Full Stack Development Intership ',
    platform: 'Runshaw Technologies',
    type: 'Certification',
    image: '/images/internship_certificate.jpg',
    aiHint: 'design award'
  },
 
];

export const Certifications = () => {
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
    <section id="certifications" className="container mx-auto px-4 py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Certifications & <span className="text-primary">Skill Badges</span>
        </h2>
        <motion.div 
          className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {certifications.map((cert, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Dialog>
                <DialogTrigger asChild>
                  <Card className="h-full flex flex-col group hover:shadow-lg hover:border-primary transition-all duration-300 bg-card/50 cursor-pointer">
                    <div className="relative h-48 w-full overflow-hidden">
                       <Image
                          src={cert.image}
                          alt={`${cert.title} certificate`}
                          layout="fill"
                          objectFit="cover"
                          className="group-hover:scale-105 transition-transform duration-300"
                          data-ai-hint={cert.aiHint}
                        />
                    </div>
                    <div className="flex flex-col flex-grow p-6">
                      <CardHeader className="p-0 mb-4">
                        <div className="flex items-start justify-between">
                          <div>
                            <CardTitle className="text-xl">{cert.title}</CardTitle>
                            <CardDescription>{cert.platform}</CardDescription>
                          </div>
                          <Award className="h-8 w-8 text-primary flex-shrink-0 ml-4"/>
                        </div>
                      </CardHeader>
                      <CardContent className="p-0 flex-grow">
                        <Badge variant="secondary">{cert.type}</Badge>
                      </CardContent>
                    </div>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-3xl">
                  <DialogHeader>
                    <DialogTitle>{cert.title}</DialogTitle>
                    <DialogDescription>{cert.platform}</DialogDescription>
                  </DialogHeader>
                  <div className="relative aspect-video mt-4">
                    <Image 
                      src={cert.image} 
                      alt={`${cert.title} certificate`}
                      layout="fill"
                      objectFit="contain" 
                      data-ai-hint={cert.aiHint}
                    />
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
