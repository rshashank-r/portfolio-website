"use client";

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

const techIcons = {
  HTML5: (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} viewBox="0 0 24 24"><path fill="currentColor" d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438zM12 17.25l-4.25-1.438l-.25-2.812h2.125l.125 1.563L12 15.313v1.937zm2.938-7.688H8.063l.25-2.812h7.312l-.25 2.812zm.437 4.125l-.25 2.813L12 15.312V13.5l2.438-.813l.188-2.125H12V8.75h4.625l-.187 2.125h-2.125l.063.813z"/></svg>
  ),
  CSS3: (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} viewBox="0 0 24 24"><path fill="currentColor" d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438zM12 17.25v1.938l2.938-.813l.25-2.812H12zm0-1.875h2.813l.187-2.125H12V8.75h4.625l-.188 2.125h-2.125l.063.813l2.437-.813l.25-2.812H8.063l.25 2.812H12v1.875H9.187l-.125-1.563h-2.125L7.188 15.75H12z"/></svg>
  ),
  JavaScript: (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} viewBox="0 0 24 24"><path fill="currentColor" d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438zM17.625 17.25h-2.125v2.125L12 20.438v-2.125h-1.875v-1.875h1.875V14.5h2.125v1.875h1.875v1.875h-1.875V17.25zM15.5 12.25H9.625l-.25-2.812h6.375z"/></svg>
  ),
  TypeScript: (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} viewBox="0 0 24 24"><path fill="currentColor" d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438zM12 8.75h4.625l-.188 2.125h-2.125l.063.813l2.437-.813l.25-2.812H8.063l.25 2.812H12zm2.938 7.688l-.25 2.813L12 15.312V13.5l2.438-.813l.188-2.125H12v6.375l-2.938-.812l.188-2.125h2.125v-1.875H8.813l-.125-1.563h6.625z"/></svg>
  ),
  Bootstrap: (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} viewBox="0 0 24 24"><path fill="currentColor" d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438zM16.5 6.375H7.5v11.25h9V6.375zm-1.875 1.875v7.5h-5.25v-7.5z"/></svg>
  ),
  React: (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8zm-4.3-8.89l1.41-1.41l3.54 3.54l-1.41 1.41zM12 5c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3zm4.3 8.89l1.41-1.41l-3.54-3.54l-1.41 1.41z"/></svg>
  ),
  TailwindCSS: (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8zm-5.5-8.5h11v2h-11zm3-4h5v2h-5zm-3 8h11v2h-11z"/></svg>
  ),
  Java: (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} viewBox="0 0 24 24"><path fill="currentColor" d="M12 5.25c-1.34 0-2.48.83-2.86 2H12v1.5H8.75c0-2.25 1.5-3.5 3.25-3.5s3.25 1.25 3.25 3.5V12h-1.5V8.75c0-1.25-.5-2-1.75-2s-1.75.75-1.75 2V12h3.64c.38 1.17 1.52 2 2.86 2s2.48-.83 2.86-2H18v-1.5h-3.25c0-2.25-1.5-3.5-3.25-3.5zM12 18.75c1.34 0 2.48-.83 2.86-2H12v-1.5h3.25c0 2.25-1.5 3.5-3.25 3.5s-3.25-1.25-3.25-3.5V12h1.5v3.25c0 1.25.5 2 1.75 2s1.75-.75 1.75-2V12h-3.64c-.38-1.17-1.52-2-2.86-2s-2.48.83-2.86 2H6v1.5h3.25c0 2.25 1.5 3.5 3.25 3.5z"/></svg>
  ),
  SpringBoot: (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} viewBox="0 0 24 24"><path fill="currentColor" d="M18.8,7.1c-1.3-1.3-3-2.1-4.8-2.1c-1.8,0-3.5,0.8-4.8,2.1C7.8,8.4,7,10.1,7,11.9s0.8,3.5,2.1,4.8c1.3,1.3,3,2.1,4.8,2.1c1.8,0,3.5-0.8,4.8-2.1c1.3-1.3,2.1-3,2.1-4.8S20.1,8.4,18.8,7.1z M17,15.2c-0.8,0.8-2,1.5-3.2,1.8l-1.8-1.8c0.3-1.2,1-2.4,1.8-3.2c0.8-0.8,1.5-2,1.8-3.2l1.8,1.8C18.5,13.2,17.8,14.4,17,15.2z"/></svg>
  ),
  Python: (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} viewBox="0 0 24 24"><path fill="currentColor" d="M11 1.07C7.05 1.56 4 4.92 4 9v6c0 4.08 3.05 7.44 7 7.93V1h-1zM11 21c-3.31 0-6-2.69-6-6v-5h12v5c0 3.31-2.69 6-6 6zM13 1.07V8h8V4.07c-2.31-.45-4.36-1.8-5.83-3.58L13 1.07zM13 16h8v-6h-8v6z"/></svg>
  ),
  FastAPI: (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} viewBox="0 0 24 24"><path fill="currentColor" d="M12 2a10 10 0 100 20a10 10 0 000-20zm0 18a8 8 0 110-16a8 8 0 010 16z"/><path fill="currentColor" d="m14.53 9.47l-3.53 3.54l-1.06-1.06L13.47 8.4a1 1 0 000-1.42a1 1 0 00-1.42 0L8.5 10.53l1.06 1.06l3.54-3.53a1 1 0 000-1.42a1 1 0 00-1.42 0z"/><path fill="currentColor" d="M11 13H5v2h6v-2zm8-5h-6v2h6V8z"/></svg>
  ),
  Firebase: (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} viewBox="0 0 24 24"><path fill="currentColor" d="M5.13 2.92L4.06 4L12 10.44L14.78 4.2L12 2zM3 5.38L8.3 15.78L10.39 12.1L3 5.38zM9.06 16.5l2.94 6.5l3-5.34l-2.94-6.5zM13.12 11.39L14.47 9L21 21l-2.22-3.9z"/></svg>
  ),
  GoogleCloud: (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} viewBox="0 0 24 24"><path fill="currentColor" d="M19.1 11.2c0-1.2-.2-2.3-.5-3.3c-1.3-3.7-4.8-6.3-8.9-6.3C5.9 1.6 2.6 4.3 1.8 8.1c-.2.9-.3 1.8-.3 2.8c0 1.2.2 2.3.5 3.3c1.3 3.7 4.8 6.3 8.9 6.3c3.8 0 7-2.2 8.6-5.4c.5-1.1.8-2.2.8-3.5zm-8.4 6.7c-3.1 0-5.7-2.6-5.7-5.7s2.6-5.7 5.7-5.7s5.7 2.6 5.7 5.7s-2.6 5.7-5.7 5.7z"/></svg>
  ),
  GitHubActions: (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8z"/><path fill="currentColor" d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6s6-2.69 6-6s-2.69-6-6-6zm-1 9l-3-3l1.41-1.41L11 12.17l3.59-3.59L16 10l-5 5z"/></svg>
  ),
};

const techCategories = {
  'Frontend': ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'Bootstrap', 'React', 'TailwindCSS'],
  'Backend': ['Java', 'SpringBoot', 'Python', 'FastAPI'],
  'DevOps & Cloud': ['Firebase', 'GoogleCloud', 'GitHubActions']
};

export const TechStack = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0, scale: 0.8 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 120,
      },
    },
  };

  return (
    <section id="tech-stack" className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          My <span className="text-primary">Tech Stack</span>
        </h2>
        <div className="space-y-12">
          {Object.entries(techCategories).map(([category, techs]) => (
            <div key={category}>
              <h3 className="text-2xl font-semibold text-center mb-6">{category}</h3>
              <motion.div 
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                {techs.map((tech) => {
                  const Icon = techIcons[tech as keyof typeof techIcons];
                  return (
                    <motion.div key={tech} variants={itemVariants}>
                      <Card className="p-4 flex flex-col items-center justify-center gap-2 hover:shadow-md hover:border-accent transition-all duration-200 h-full">
                        <Icon className="h-12 w-12 text-accent" />
                        <p className="font-medium text-center">{tech.replace(/([A-Z])/g, ' $1').trim()}</p>
                      </Card>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
