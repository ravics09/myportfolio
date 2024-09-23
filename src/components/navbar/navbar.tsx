import Link from 'next/link';
import { motion } from 'framer-motion';
import Logo from '@/components/ui/logo';
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
  const navItems = [
    { name: '01. About', href: '#about' },
    { name: '02. Experience', href: '#experience' },
    { name: '03. Work', href: '#work' },
    { name: '04. Achievements', href: '#achievements' },
    { name: '05. Social', href: '#social' },
    { name: '06. Contact', href: '#contact' },
  ];

  const sectionIds = navItems.map((item) => item.href.slice(1)); // Extract section IDs from hrefs
  const activeSection = useActiveSection(sectionIds); // Use the custom hook to track the active section

  return (
    <header className="w-full fixed top-0 left-0 bg-[#091930] shadow-md z-50">
      <nav className="w-full h-[70px] px-10 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" aria-label="Home">
            <Logo size="w-12 h-12" animate={false} />
          </Link>
        </div>

        {/* Right side: Nav Items with Animation */}
        <div className="flex items-center space-x-8">
          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={navItemVariants}
              className={`relative transition duration-300 `} // Add bottom border to the active nav item
            >
              <Link href={item.href}>
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
            custom={navItems.length} // Index for animation
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
      </nav>
    </header>
  );
};

export default Navbar;
