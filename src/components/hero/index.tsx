import { Button } from '@/components/ui/button';
import Section from '@/components/ui/section';
import TypingAnimation from '@/components/ui/typing-animation';

const HeroSection = () => {
  return (
    // <Section className="items-center justify-center">
    //   <h1 className="text-lg text-[#5ceac9] font-semibold">Hi, My name is</h1>
    //   <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">Ravi Sharma</h2>
    //   <h4 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-400">
    //     I transform concepts into innovative digital experiences.
    //   </h4>
    //   <TypingAnimation
    //     duration={50}
    //     className="text-lg md:text-xl text-gray-500 max-w-2xl text-left"
    //     text="I’m a Senior Software Engineer specializing in crafting exceptional digital experiences, with expertise in both
    //     frontend and backend development. Currently, I’m focused on building business-standard web applications using
    //     Next.js, ReactJS, and NodeJS at Globant"
    //   />
    //   <a href="#contact">
    //     <Button variant="threeD" size="default">
    //       Get in Touch
    //     </Button>
    //   </a>
    // </Section>
    <Section className="items-center justify-center space-y-4">
      {/* Introduction */}
      <p className="flex flex-col space-y-4">
        <span className="text-sm sm:text-base text-[#5ceac9] font-semibold uppercase tracking-wide">
          Hi, My name is
        </span>
        <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">Ravi Sharma</span>
        <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-gray-400 leading-relaxed">
          I transform concepts into innovative digital experiences.
        </span>
      </p>

      {/* Typing Animation */}
      <TypingAnimation
        duration={50}
        className="text-sm text-left sm:text-base md:text-lg lg:text-xl text-gray-500 max-w-3xl"
        text="I’m a Senior Software Engineer specializing in crafting exceptional digital experiences, with expertise in both
    frontend and backend development. Currently, I’m focused on building business-standard web applications using
    Next.js, ReactJS, and NodeJS at Globant."
      />

      {/* Call to Action Button */}
      <a href="#contact">
        <Button variant="threeD" size="default" className="mt-4">
          Get in Touch
        </Button>
      </a>
    </Section>
  );
};

export default HeroSection;
