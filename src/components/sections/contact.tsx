"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail } from 'lucide-react';

const contactLinks = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/your-profile',
    icon: <Linkedin className="h-6 w-6" />,
  },
  {
    name: 'GitHub',
    href: 'https://github.com/your-username',
    icon: <Github className="h-6 w-6" />,
  },
  {
    name: 'Email',
    href: 'mailto:your.email@gmail.com',
    icon: <Mail className="h-6 w-6" />,
  },
];

export const Contact = () => {
  return (
    <section id="contact" className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          I&apos;m currently open to new opportunities and collaborations. Feel free to reach out!
        </p>
        <div className="flex justify-center items-center gap-4">
          {contactLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -5 }}
              transition={{ type: 'spring', stiffness: 300 }}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <Button variant="outline" size="icon" aria-label={link.name}>
                {link.icon}
              </Button>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
