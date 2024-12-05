import Section from '@/components/ui/section';
import { ArrowRightIcon } from '@radix-ui/react-icons';

const AboutSection = () => {
  return (
    <Section id="about" title="About Me" className="justify-center items-center">
      <div className="flex flex-col space-y-6 text-base sm:text-lg md:text-xl">
        {/* Profile Section */}
        <div className="flex flex-col md:flex-row md:space-x-10 space-y-6 md:space-y-0 text-gray-500">
          <div className="flex-1">
            <p>
              Hello! I&apos;m <span className="text-[#5ceac9]">Ravi</span>. I&apos;m a passionate MERN full stack
              developer based in the vibrant city of Bangalore, India. I thrive on crafting exceptional websites and web
              applications that come to life on the internet. By harnessing cutting-edge technologies, I create not only
              visually stunning but also highly efficient and modern backends.
              <br />
              <br />
              My primary focus right now is on building accessible and inclusive digital products and experiences at{' '}
              <span className="text-[#5ceac9]">Globant</span>, serving a diverse range of clients.
            </p>
          </div>
          <div className="hidden md:block">
            {/* Image is hidden on small screens */}
            <img
              src="/images/profile.png" // Replace with your image path
              alt="Ravi"
              className="w-40 h-40 sm:w-60 sm:h-60 rounded-lg transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            />
          </div>
        </div>

        {/* Technology Section */}
        <div className="text-gray-500">
          <p className="mb-4">Here are a few technologies I&apos;ve been working with recently:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <div className="flex items-center">
              <ArrowRightIcon className="mr-2 text-[#5ceac9]" />
              <span>Next.js</span>
            </div>
            <div className="flex items-center">
              <ArrowRightIcon className="mr-2 text-[#5ceac9]" />
              <span>Node.js</span>
            </div>
            <div className="flex items-center">
              <ArrowRightIcon className="mr-2 text-[#5ceac9]" />
              <span>React</span>
            </div>
            <div className="flex items-center">
              <ArrowRightIcon className="mr-2 text-[#5ceac9]" />
              <span>MongoDB</span>
            </div>
            <div className="flex items-center">
              <ArrowRightIcon className="mr-2 text-[#5ceac9]" />
              <span>TypeScript</span>
            </div>
            <div className="flex items-center">
              <ArrowRightIcon className="mr-2 text-[#5ceac9]" />
              <span>Nest.js</span>
            </div>
            {/* Add more skills as needed */}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;
