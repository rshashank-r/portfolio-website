"use client";

import * as React from 'react';
import Link from 'next/link';
import { ThemeToggle } from './theme-toggle';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Certs', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
];

export const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const isMobile = useIsMobile();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  const closeMenu = () => {
    setIsOpen(false);
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm"
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="text-xl font-bold text-primary">
          Shashank
        </Link>
        
        {isMobile ? (
          <>
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-sm p-4"
              >
                <nav className="flex flex-col items-center gap-4">
                  {navItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                      onClick={closeMenu}
                    >
                      {item.name}
                    </a>
                  ))}
                  <ThemeToggle />
                </nav>
              </motion.div>
            )}
          </>
        ) : (
          <div className="flex items-center gap-4">
            <nav className="flex items-center gap-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="font-medium text-foreground hover:text-primary transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </nav>
            <ThemeToggle />
          </div>
        )}
      </div>
    </motion.header>
  );
};
