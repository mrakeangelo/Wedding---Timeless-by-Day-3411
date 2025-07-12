import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HashRouter } from 'react-router-dom';
import SafeIcon from '../../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiSun, FiMenu, FiX } = FiIcons;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Our Story', href: '#story' },
    { name: 'Details', href: '#details' },
    { name: 'Menu', href: '#menu' },
    { name: 'Schedule', href: '#schedule' },
    { name: 'RSVP', href: '#rsvp' },
    { name: 'Guestbook', href: '#guestbook' }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-morning-gold/20"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-8 h-8 bg-sunrise-gradient rounded-full flex items-center justify-center">
              <SafeIcon icon={FiSun} className="w-5 h-5 text-white animate-rotate-slow" />
            </div>
            <span className="font-serif text-xl font-semibold text-dusk">S & M</span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-dusk hover:text-sunrise transition-colors duration-300 font-medium"
                whileHover={{ y: -2 }}
              >
                {item.name}
              </motion.button>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-dusk hover:text-sunrise transition-colors"
          >
            <SafeIcon icon={isMenuOpen ? FiX : FiMenu} className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-4 py-4 border-t border-morning-gold/20"
          >
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left py-2 text-dusk hover:text-sunrise transition-colors duration-300"
                whileHover={{ x: 10 }}
              >
                {item.name}
              </motion.button>
            ))}
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
};

export default Header;