'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Navbar from '@/components/navbar/navbar';
import Section from '@/components/ui/section';
import Logo from '@/components/ui/logo';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-[#091930]">
      {isLoading ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed inset-0 flex items-center justify-center bg-[#091930] z-50"
        >
          <Logo size="w-16 h-16" animate={true} />
        </motion.div>
      ) : (
        <>
          <Navbar />
          <main className="mt-16">
            <Section id="about" title="About">
              <p>This is the about section content.</p>
            </Section>
            <Section id="experience" title="Experience">
              <p>This is the experience section content.</p>
            </Section>
            <Section id="work" title="Work">
              <p>This is the work section content.</p>
            </Section>
            <Section id="contact" title="Contact">
              <p>This is the contact section content.</p>
            </Section>
          </main>
        </>
      )}
    </div>
  );
};
export default Home;
