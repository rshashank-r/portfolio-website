"use client";

import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award } from 'lucide-react';

const certifications = [
  {
    title: 'Prompt Design in Vertex AI',
    platform: 'Google Cloud Skills Boost',
    type: 'Skill Badge',
  },
  {
    title: 'Responsive Web Design',
    platform: 'freeCodeCamp',
    type: 'Certification',
  },
  {
    title: 'Spring Boot Essentials',
    platform: 'Udemy',
    type: 'Certification',
  },
  {
    title: 'Java Programming',
    platform: 'Coursera',
    type: 'Certification',
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
    <section id="certifications" className="container mx-auto px-4 py-16">
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
          viewport={{ once: true, amount: 0.2 }}
        >
          {certifications.map((cert, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full hover:shadow-lg hover:border-primary transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle>{cert.title}</CardTitle>
                      <CardDescription>{cert.platform}</CardDescription>
                    </div>
                    <Award className="h-8 w-8 text-accent"/>
                  </div>
                </CardHeader>
                <CardContent>
                  <Badge variant="default" className="bg-accent text-accent-foreground">{cert.type}</Badge>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};
