import { Button } from '@/components/ui/button';
import Section from '@/components/ui/section';

const AboutSection = () => {
  return (
    <Section id="about" title="About" className="justify-center">
      <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
        I’m a Senior Software Engineer specializing in crafting exceptional digital experiences, with expertise in both
        frontend and backend development. Currently, I’m focused on building business-standard web applications using
        Next.js, ReactJS, and NodeJS at <span className="text-[#5ceac9]">Globant</span>
      </p>
      <a href="#contact">
        <Button variant="threeD" size="default">
          Get in Touch
        </Button>
      </a>
    </Section>
  );
};

export default AboutSection;
