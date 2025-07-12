import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiClock, FiMapPin, FiCar, FiInfo, FiSun, FiCamera } = FiIcons;

const Details = () => {
  const detailCards = [
    {
      icon: FiClock,
      title: "Ceremony Time",
      content: "10:00 AM Sharp",
      subtitle: "Please arrive by 9:45 AM",
      color: "bg-lemon-cream/50"
    },
    {
      icon: FiMapPin,
      title: "Location",
      content: "Sunrise Garden Venue",
      subtitle: "1234 Coastal Highway, Malibu, CA 90265",
      color: "bg-sky-soft/50"
    },
    {
      icon: FiCar,
      title: "Parking",
      content: "Valet Available",
      subtitle: "Free parking in the main lot",
      color: "bg-sage/50"
    },
    {
      icon: FiInfo,
      title: "What to Expect",
      content: "30-min Ceremony",
      subtitle: "Followed by brunch reception until 2 PM",
      color: "bg-butter-white/50"
    }
  ];

  return (
    <section id="details" className="py-20 bg-morning-gradient">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-dusk mb-4">
            Wedding Details
          </h2>
          <div className="flex items-center justify-center space-x-2 text-sunrise">
            <SafeIcon icon={FiSun} className="w-5 h-5" />
            <span className="text-lg font-medium">Everything You Need to Know</span>
            <SafeIcon icon={FiSun} className="w-5 h-5" />
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {detailCards.map((card, index) => (
            <motion.div
              key={index}
              className={`${card.color} p-6 rounded-2xl text-center shadow-lg hover:shadow-xl transition-all duration-300`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-sunrise-gradient rounded-full flex items-center justify-center">
                  <SafeIcon icon={card.icon} className="w-6 h-6 text-white" />
                </div>
              </div>
              <h3 className="font-serif text-xl font-semibold text-dusk mb-2">{card.title}</h3>
              <p className="text-dusk font-medium text-lg mb-1">{card.content}</p>
              <p className="text-dusk/70 text-sm">{card.subtitle}</p>
            </motion.div>
          ))}
        </div>

        {/* Additional Info Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div 
            className="bg-white/80 p-8 rounded-3xl shadow-lg"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3 mb-4">
              <SafeIcon icon={FiCamera} className="w-6 h-6 text-sunrise" />
              <h3 className="font-serif text-2xl font-semibold text-dusk">What to Wear</h3>
            </div>
            <div className="space-y-3 text-dusk/80">
              <p><strong>Dress Code:</strong> Garden Chic & Morning Casual</p>
              <p><strong>Colors:</strong> Soft pastels, florals, and light fabrics</p>
              <p><strong>Suggestions:</strong> Sundresses, linen suits, comfortable shoes</p>
              <p><strong>Weather:</strong> Expect sunny skies and 72°F</p>
            </div>
          </motion.div>

          <motion.div 
            className="bg-white/80 p-8 rounded-3xl shadow-lg"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3 mb-4">
              <SafeIcon icon={FiInfo} className="w-6 h-6 text-sunrise" />
              <h3 className="font-serif text-2xl font-semibold text-dusk">Good to Know</h3>
            </div>
            <div className="space-y-3 text-dusk/80">
              <p><strong>Ceremony:</strong> Outdoor garden setting</p>
              <p><strong>Reception:</strong> Covered patio with garden views</p>
              <p><strong>Kids:</strong> Children are welcome!</p>
              <p><strong>Accessibility:</strong> Fully wheelchair accessible</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Details;