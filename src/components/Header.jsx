import React, { useState, useEffect } from 'react';
import { Search, User, ShoppingCart, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const NavLink = ({ children, href, isRed = false, onClick }) => (
  <li>
    <a
      href={href}
      onClick={onClick}
      className={`transition-colors duration-300 hover:text-gray-500 font-normal ${
        isRed ? 'text-red-600 font-semibold' : 'text-gray-600'
      }`}
    >
      {children}
    </a>
  </li>
);

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'PHOTO BOOKS', href: '#' },
    { name: 'WEDDING ALBUMS', href: '#' },
    { name: 'DESIGN SERVICE', href: '#' },
    { name: 'CHRISTMAS DEADLINES', href: '#', isRed: true },
  ];

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.05 } },
    exit: { opacity: 0, y: -20 },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-brand-bg shadow-md backdrop-blur-sm' : 'bg-brand-bg'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="container mx-auto flex justify-between items-center py-6 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="#">
          <img
            src="/logo.png"
            alt="PikPerfect Logo"
            className="h-10 w-auto object-contain"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:block">
          <ul className="flex list-none gap-10 xl:gap-14 m-0 p-0 font-medium text-[15px] tracking-wide">
            {navLinks.map((link) => (
              <NavLink key={link.name} href={link.href} isRed={link.isRed}>
                {link.name}
              </NavLink>
            ))}
          </ul>
        </nav>

        {/* Right Section with icons + rating */}
        <div className="hidden lg:flex flex-col items-center gap-2">
          <div className="flex items-center gap-6">
            <Search className="cursor-pointer text-brand-dark h-5 w-5 transition-colors duration-300 hover:text-brand-perfect" />
            <User className="cursor-pointer text-brand-dark h-5 w-5 transition-colors duration-300 hover:text-brand-perfect" />
            <ShoppingCart className="cursor-pointer text-brand-dark h-5 w-5 transition-colors duration-300 hover:text-brand-perfect" />
          </div>
          <div className="mt-4">
            <img
              src="/rating.png"
              alt="Customer Rating"
              className="h-14 w-auto object-contain"
            />
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-brand-dark"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="lg:hidden bg-white/95 backdrop-blur-sm absolute top-full left-0 w-full shadow-lg"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
          >
            <nav>
              <ul className="flex flex-col items-center gap-6 p-6">
                {navLinks.map((link) => (
                  <motion.li key={link.name} variants={linkVariants}>
                    <NavLink
                      href={link.href}
                      isRed={link.isRed}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.name}
                    </NavLink>
                  </motion.li>
                ))}
              </ul>
              {/* Rating image also visible in mobile */}
              <div className="mt-4 flex justify-center">
                <img
                  src="/rating.png"
                  alt="Customer Rating"
                  className="h-6 w-auto object-contain"
                />
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
