"use client";

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { useForm, ValidationError } from '@formspree/react';

const contactLinks = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/shashank-gowda-l-r-8896a6268?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    icon: <Linkedin className="h-6 w-6" />,
  },
  {
    name: 'GitHub',
    href: 'https://github.com/rshashank-r',
    icon: <Github className="h-6 w-6" />,
  },
  {
    name: 'Email',
    href: 'mailto:your.shashankgowdar2406@gmail.com',
    icon: <Mail className="h-6 w-6" />,
  },
];

export const Contact = () => {
  const [state, handleSubmit] = useForm("xpwlaalq");

  return (
    <section id="contact" className="container mx-auto px-4 py-8 md:py-12">
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
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
        I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of an amazing team. Feel free to send me a message.
        </p>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div className="flex flex-col items-center justify-center gap-6">
                <h3 className="text-2xl font-semibold">Connect with me</h3>
                 <div className="flex justify-center items-center gap-4">
                    {contactLinks.map((link) => (
                        <motion.a
                        key={link.name}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, y: -5 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                        >
                        <Button variant="outline" size="icon" aria-label={link.name}>
                            {link.icon}
                        </Button>
                        </motion.a>
                    ))}
                </div>
            </div>

            <div>
                 <Card>
                    <CardContent className="p-6 md:p-8">
                       {state.succeeded ? (
                          <div className="text-center">
                            <h3 className="text-xl font-semibold mb-2">Thank you!</h3>
                            <p className="text-muted-foreground">Your message has been sent successfully. I'll get back to you soon.</p>
                          </div>
                        ) : (
                          <form onSubmit={handleSubmit} className="space-y-4 text-left">
                              <div className="space-y-2">
                                  <label htmlFor="name" className="text-sm font-medium">Name</label>
                                  <Input id="name" name="name" placeholder="Your Name" required />
                              </div>
                              <div className="space-y-2">
                                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                                  <Input id="email" name="email" type="email" placeholder="Your Email" required />
                                  <ValidationError 
                                    prefix="Email" 
                                    field="email"
                                    errors={state.errors}
                                    className="text-destructive text-sm"
                                  />
                              </div>
                              <div className="space-y-2">
                                  <label htmlFor="message" className="text-sm font-medium">Message</label>
                                  <Textarea id="message" name="message" placeholder="Your Message" required minLength={10} rows={4} />
                                  <ValidationError 
                                    prefix="Message" 
                                    field="message"
                                    errors={state.errors}
                                    className="text-destructive text-sm"
                                  />
                              </div>
                              <Button type="submit" disabled={state.submitting} className="w-full">
                                {state.submitting ? 'Sending...' : 'Send Message'}
                                <Send className="ml-2 h-4 w-4" />
                              </Button>
                          </form>
                        )}
                    </CardContent>
                </Card>
            </div>
        </div>
      </motion.div>
    </section>
  );
};
