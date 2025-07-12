import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiHeart, FiSun } = FiIcons;

const Footer = () => {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="bg-morning-gradient py-12 mt-20"
    >
      <div className="container mx-auto px-4 text-center">
        <motion.div 
          className="flex items-center justify-center space-x-2 mb-4"
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <SafeIcon icon={FiSun} className="w-6 h-6 text-sunrise animate-rotate-slow" />
          <SafeIcon icon={FiHeart} className="w-5 h-5 text-sunrise animate-bounce-gentle" />
          <SafeIcon icon={FiSun} className="w-6 h-6 text-sunrise animate-rotate-slow" />
        </motion.div>
        
        <p className="text-dusk/80 text-sm mb-2">
          Made with love for Sarah & Michael's special day
        </p>
        
        <p className="text-dusk/60 text-xs">
          <span className="font-semibold">Timeless by Day</span> – A Brunch Wedding Template by{' '}
          <span className="font-semibold text-sunrise">Mrake Agency</span>
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;