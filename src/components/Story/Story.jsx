import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiHeart, FiSun, FiCoffee } = FiIcons;

const Story = () => {
  return (
    <section id="story" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-dusk mb-4">
            The Morning We Said Yes
          </h2>
          <div className="flex items-center justify-center space-x-2 text-sunrise">
            <SafeIcon icon={FiSun} className="w-5 h-5" />
            <span className="text-lg font-medium">Our Love Story</span>
            <SafeIcon icon={FiSun} className="w-5 h-5" />
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Story Content */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-lemon-cream/50 p-6 rounded-2xl">
              <div className="flex items-center space-x-3 mb-4">
                <SafeIcon icon={FiCoffee} className="w-6 h-6 text-sunrise" />
                <h3 className="font-serif text-xl font-semibold text-dusk">How We Met</h3>
              </div>
              <p className="text-dusk/80 leading-relaxed">
                It was a bright Tuesday morning at our favorite coffee shop on Fifth Street. 
                Sarah was reading her book by the window, and Michael was sketching at the 
                corner table. When the barista called out "Oat milk latte for Sarah," 
                Michael looked up and smiled. That was the beginning of everything.
              </p>
            </div>

            <div className="bg-sky-soft/50 p-6 rounded-2xl">
              <div className="flex items-center space-x-3 mb-4">
                <SafeIcon icon={FiHeart} className="w-6 h-6 text-sunrise" />
                <h3 className="font-serif text-xl font-semibold text-dusk">The Proposal</h3>
              </div>
              <p className="text-dusk/80 leading-relaxed">
                Two years later, on a golden Sunday morning in Central Park, Michael 
                surprised Sarah with a picnic basket and a ring hidden inside her 
                favorite croissant. She said yes before he could even finish asking 
                the question. The morning sun witnessed our promise to love each other 
                through every sunrise.
              </p>
            </div>

            <div className="bg-sage/50 p-6 rounded-2xl">
              <div className="flex items-center space-x-3 mb-4">
                <SafeIcon icon={FiSun} className="w-6 h-6 text-sunrise" />
                <h3 className="font-serif text-xl font-semibold text-dusk">Why Morning?</h3>
              </div>
              <p className="text-dusk/80 leading-relaxed">
                Every beautiful moment in our relationship has happened in the morning light. 
                Our first date was brunch, our first "I love you" was over pancakes, 
                and our engagement was at sunrise. We wanted to start our marriage 
                the same way we started our love story – with the promise of a new day.
              </p>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Sarah and Michael"
                className="w-full h-[500px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-morning-gold/20"></div>
            </div>
            
            {/* Floating Elements */}
            <motion.div 
              className="absolute -top-4 -right-4 w-16 h-16 bg-sunrise-gradient rounded-full opacity-80"
              animate={{ y: [0, -10, 0], rotate: [0, 180, 360] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
              className="absolute -bottom-4 -left-4 w-12 h-12 bg-morning-gold/60 rounded-full"
              animate={{ y: [0, 10, 0], x: [0, 5, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Story;