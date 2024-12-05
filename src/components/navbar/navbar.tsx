import Link from 'next/link';
import { motion } from 'framer-motion';
import Logo from '@/components/ui/logo';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useActiveSection } from '@/hooks/useActiveSection';

const navItemVariants = {
  hidden: { opacity: 0 },
  visible: (i: number) => ({
    opacity: 1,
    transition: {
      delay: i * 0.3, // 0.3 seconds delay between items
      duration: 0.5,
    },
  }),
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: '01. About', href: '#about' },
    { name: '02. Experience', href: '#experience' },
    { name: '03. Projects', href: '#projects' },
    { name: '04. Achievements', href: '#achievements' },
    { name: '05. Contact', href: '#contact' },
    { name: '06. Blog', href: '#blog' },
  ];

  const sectionIds = navItems.map((item) => item.href.slice(1)); // Extract section IDs from hrefs
  const activeSection = useActiveSection(sectionIds); // Use the custom hook to track the active section

  // Function to close the mobile menu when a nav item is clicked
  const handleNavItemClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="flex mx-auto shadow-md z-50 fixed top-0 left-0 right-0 bg-[#091930]">
      <nav className="w-full h-[70px] flex justify-between items-center px-5 md:px-5">
        {/* Logo Section */}
        <div className="flex items-center pr-5">
          <Link href="/" aria-label="Home">
            <Logo size="w-12 h-12" animate={false} />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={navItemVariants}
              className={`relative transition duration-300`}
            >
              <Link
                href={item.href === '#blog' ? 'https://javascriptcentric.medium.com/' : item.href}
                target={item.href === '#blog' ? '_blank' : undefined}
                rel={item.href === '#blog' ? 'noopener noreferrer' : undefined}
              >
                <span className="text-[#5ceac9]">{item.name.split(' ')[0]}</span>
                <span className="hover:text-[#5ceac9]">{item.name.slice(item.name.indexOf(' '))}</span>
              </Link>
              {activeSection === item.href.slice(1) && (
                <motion.div
                  className="absolute bottom-0 left-0 h-[2px] bg-[#5ceac9]"
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 0.6 }}
                />
              )}
            </motion.div>
          ))}

          {/* Resume Button */}
          <motion.div
            custom={navItems.length}
            initial="hidden"
            animate="visible"
            variants={navItemVariants}
            className="transition duration-300"
          >
            <a
              href="https://drive.google.com/file/d/your-pdf-id/view" // Replace with your PDF link
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="threeD" size="sm">
                Resume
              </Button>
            </a>
          </motion.div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            <svg
              className="h-6 w-6 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMenuOpen
                    ? 'M6 18L18 6M6 6l12 12' // Close icon
                    : 'M4 6h16M4 12h16m-7 6h7' // Hamburger icon
                }
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#091930] px-5 py-4 space-y-2">
          {navItems.map((item, index) => (
            <Link
              key={item.name}
              href={item.href === '#blog' ? 'https://javascriptcentric.medium.com/' : item.href}
              target={item.href === '#blog' ? '_blank' : undefined}
              rel={item.href === '#blog' ? 'noopener noreferrer' : undefined}
              className="block text-[#5ceac9] hover:text-white"
            >
              <span onClick={handleNavItemClick}>{item.name}</span>
            </Link>
          ))}

          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/your-pdf-id/view" // Replace with your PDF link
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center"
          >
            <Button variant="threeD" size="sm" className="w-full">
              Resume
            </Button>
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
