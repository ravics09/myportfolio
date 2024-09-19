import Link from 'next/link';
import { motion } from 'framer-motion';
import Logo from '@/components/ui/logo';

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
    { name: '04. Contact', href: '#contact' },
  ];

  return (
    <header className="w-full fixed top-0 left-0 bg-[#091930] shadow-md z-50">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" aria-label="Home">
            <Logo size="w-9 h-9" animate={false} />
          </Link>
        </div>

        {/* Right side: Nav Items with Animation */}
        <div className="flex space-x-8">
          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={navItemVariants}
              className="transition duration-300"
            >
              <Link href={item.href}>
                <span className="text-[#5ceac9]">{item.name.split(' ')[0]}</span>
                <span className="hover:text-[#5ceac9]">{item.name.slice(item.name.indexOf(' '))}</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
