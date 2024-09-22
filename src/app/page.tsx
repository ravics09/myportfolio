'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Navbar from '@/components/navbar/navbar';
import Logo from '@/components/ui/logo';
import Footer from '@/components/ui/footer';

import AboutSection from '@/components/about';
import HeroSection from '@/components/hero';
import ExperienceSection from '@/components/experience';
import WorkSection from '@/components/work';
import ContactSection from '@/components/contact';

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
        <main>
          <Navbar />
          <HeroSection />
          <AboutSection />
          <ExperienceSection />
          <WorkSection />
          <ContactSection />
          <Footer />
        </main>
      )}
    </div>
  );
};
export default Home;
