import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiSun, FiHeart, FiCalendar, FiMapPin } = FiIcons;

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-morning-gradient">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-20"></div>
      </div>

      {/* Floating Sun Elements */}
      <motion.div 
        className="absolute top-20 right-20 w-16 h-16 bg-sunrise-gradient rounded-full opacity-30"
        animate={{ y: [0, -20, 0], rotate: [0, 360] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-40 left-20 w-12 h-12 bg-morning-gold/40 rounded-full"
        animate={{ y: [0, 15, 0], x: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Sun Flare */}
        <motion.div 
          className="flex justify-center mb-8"
          initial={{ scale: 0, rotate: 0 }}
          animate={{ scale: 1, rotate: 360 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <div className="relative">
            <SafeIcon icon={FiSun} className="w-16 h-16 text-sunrise animate-rotate-slow" />
            <div className="absolute inset-0 bg-sunrise-gradient rounded-full opacity-20 animate-ping"></div>
          </div>
        </motion.div>

        {/* Names */}
        <motion.div 
          className="mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-dusk mb-4">
            Sarah <span className="text-sunrise">&</span> Michael
          </h1>
          <motion.div 
            className="flex items-center justify-center space-x-4 text-dusk/80"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <SafeIcon icon={FiHeart} className="w-6 h-6 text-sunrise" />
            <span className="text-lg font-medium">are getting married</span>
            <SafeIcon icon={FiHeart} className="w-6 h-6 text-sunrise" />
          </motion.div>
        </motion.div>

        {/* Date & Location */}
        <motion.div 
          className="space-y-4 mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <div className="flex items-center justify-center space-x-2 text-dusk">
            <SafeIcon icon={FiCalendar} className="w-5 h-5 text-sunrise" />
            <span className="text-xl font-medium">Saturday, June 15th, 2024</span>
          </div>
          <div className="flex items-center justify-center space-x-2 text-dusk/80">
            <SafeIcon icon={FiMapPin} className="w-5 h-5 text-sunrise" />
            <span className="text-lg">Sunrise Garden Venue, Malibu</span>
          </div>
          <p className="text-dusk/70 text-lg">10:00 AM Ceremony • 11:00 AM Brunch Reception</p>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <motion.button
            onClick={() => document.querySelector('#rsvp').scrollIntoView({ behavior: 'smooth' })}
            className="bg-sunrise-gradient text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            RSVP for Our Morning Celebration
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-6 h-10 border-2 border-sunrise rounded-full flex justify-center">
          <div className="w-1 h-3 bg-sunrise rounded-full mt-2 animate-bounce"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;