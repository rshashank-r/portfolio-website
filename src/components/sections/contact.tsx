"use client";

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useFormState, useFormStatus } from 'react-dom';
import { sendEmail } from '@/app/actions';
import { useEffect, useRef } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent } from '@/components/ui/card';

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

const initialState = {
  success: false,
  message: '',
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? 'Sending...' : 'Send Message'}
      <Send className="ml-2 h-4 w-4" />
    </Button>
  );
}


export const Contact = () => {
  const [state, formAction] = useFormState(sendEmail, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.message) {
      toast({
        title: state.success ? 'Success!' : 'Error',
        description: state.message,
        variant: state.success ? 'default' : 'destructive',
      });
      if (state.success) {
        formRef.current?.reset();
      }
    }
  }, [state, toast]);

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

        <div className="grid md:grid-cols-5 gap-8">
            <div className="md:col-span-2 flex flex-col items-center justify-center gap-6 text-left">
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

            <div className="md:col-span-3">
                 <Card>
                    <CardContent className="p-6">
                        <form ref={formRef} action={formAction} className="space-y-4 text-left">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium">Name</label>
                                <Input id="name" name="name" placeholder="Your Name" required />
                            </div>
                             <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium">Email</label>
                                <Input id="email" name="email" type="email" placeholder="Your Email" required />
                            </div>
                             <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium">Message</label>
                                <Textarea id="message" name="message" placeholder="Your Message" required minLength={10} />
                            </div>
                            <SubmitButton />
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>
      </motion.div>
    </section>
  );
};
