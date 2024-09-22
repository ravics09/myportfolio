import { Button } from '@/components/ui/button';
import Section from '@/components/ui/section';

const AboutSection = () => {
  return (
    <Section id="about" title="About" className="bg-red-500">
      <p>This is the about section content.</p>
      <Button variant="threeD" size="default">
        Explore more
      </Button>
    </Section>
  );
};

export default AboutSection;
