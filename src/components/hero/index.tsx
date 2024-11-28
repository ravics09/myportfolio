import { Button } from '@/components/ui/button';
import Section from '@/components/ui/section';

const HeroSection = () => {
  return (
    <Section className="items-center justify-center">
      <h1 className="text-lg text-[#5ceac9] font-semibold">Hi, My name is</h1>
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">Ravi Sharma</h2>
      <h4 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-400">
        I transform concepts into innovative digital experiences.
      </h4>
      <p className="text-lg md:text-xl text-gray-500 max-w-2xl">
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

export default HeroSection;
