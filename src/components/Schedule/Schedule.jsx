import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiClock, FiHeart, FiCoffee, FiMusic, FiSun, FiSmile } = FiIcons;

const Schedule = () => {
  const scheduleItems = [
    {
      time: "9:45 AM",
      title: "Welcome & Seating",
      description: "Arrive and find your seats in the garden",
      icon: FiSmile,
      color: "bg-lemon-cream/50"
    },
    {
      time: "10:00 AM",
      title: "Ceremony Begins",
      description: "Sarah & Michael exchange vows under the morning sun",
      icon: FiHeart,
      color: "bg-sky-soft/50"
    },
    {
      time: "10:30 AM",
      title: "Cocktail Hour",
      description: "Mimosas and light bites on the patio",
      icon: FiCoffee,
      color: "bg-sage/50"
    },
    {
      time: "11:00 AM",
      title: "Brunch Reception",
      description: "Delicious brunch buffet opens",
      icon: FiSun,
      color: "bg-butter-white/50"
    },
    {
      time: "12:00 PM",
      title: "Toasts & Speeches",
      description: "Heartfelt words from family and friends",
      icon: FiMusic,
      color: "bg-lemon-cream/50"
    },
    {
      time: "2:00 PM",
      title: "Farewell",
      description: "Send-off with bubbles and sunshine",
      icon: FiSun,
      color: "bg-sky-soft/50"
    }
  ];

  return (
    <section id="schedule" className="py-20 bg-morning-gradient">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-dusk mb-4">
            Schedule Timeline
          </h2>
          <div className="flex items-center justify-center space-x-2 text-sunrise">
            <SafeIcon icon={FiClock} className="w-5 h-5" />
            <span className="text-lg font-medium">Our Morning Celebration</span>
            <SafeIcon icon={FiClock} className="w-5 h-5" />
          </div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-sunrise/30 hidden md:block"></div>
            
            {scheduleItems.map((item, index) => (
              <motion.div
                key={index}
                className="relative flex items-center mb-8 last:mb-0"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Timeline Dot */}
                <motion.div 
                  className="hidden md:flex absolute left-6 w-4 h-4 bg-sunrise rounded-full border-4 border-white shadow-lg z-10"
                  whileHover={{ scale: 1.2 }}
                />
                
                {/* Content Card */}
                <motion.div 
                  className={`${item.color} p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 w-full md:ml-16`}
                  whileHover={{ y: -3, scale: 1.02 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-sunrise-gradient rounded-full flex items-center justify-center">
                        <SafeIcon icon={item.icon} className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="text-sunrise font-bold text-xl">{item.time}</span>
                        <div className="h-px bg-sunrise/30 flex-1"></div>
                      </div>
                      <h3 className="font-serif text-xl font-semibold text-dusk mb-2">{item.title}</h3>
                      <p className="text-dusk/70">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <motion.div 
          className="mt-16 text-center bg-white/80 p-8 rounded-3xl max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="font-serif text-2xl font-semibold text-dusk mb-4">
            A Note About Timing
          </h3>
          <p className="text-dusk/80 leading-relaxed">
            We've planned a relaxed morning celebration that flows naturally from ceremony to reception. 
            Feel free to mingle, enjoy the beautiful garden setting, and celebrate with us at your own pace. 
            This is a time for joy, laughter, and creating beautiful memories together.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Schedule;