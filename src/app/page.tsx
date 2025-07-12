import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';
import { TechStack } from '@/components/sections/tech-stack';
import { Projects } from '@/components/sections/projects';
import { Certifications } from '@/components/sections/certifications';
import { Contact } from '@/components/sections/contact';

export default function Home() {
  return (
    <div className="flex flex-col gap-16 md:gap-24">
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Certifications />
      <Contact />
    </div>
  );
}
