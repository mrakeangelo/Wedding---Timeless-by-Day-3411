import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiCoffee, FiSun, FiHeart } = FiIcons;

const Menu = () => {
  const menuCategories = [
    {
      title: "Morning Beverages",
      icon: FiCoffee,
      items: [
        "Artisan Coffee & Espresso Bar",
        "Fresh Squeezed Orange Juice",
        "Champagne & Mimosas",
        "Herbal Tea Selection",
        "Sparkling Water & Lemonades"
      ]
    },
    {
      title: "Brunch Favorites",
      icon: FiSun,
      items: [
        "Avocado Toast with Heirloom Tomatoes",
        "Buttermilk Pancakes with Berry Compote",
        "Smoked Salmon Bagels",
        "Quiche Lorraine & Garden Frittata",
        "French Toast with Maple Syrup"
      ]
    },
    {
      title: "Sweet Treats",
      icon: FiHeart,
      items: [
        "Mini Croissants & Danish Pastries",
        "Fresh Fruit & Yogurt Parfaits",
        "Wedding Cake (Lemon & Vanilla)",
        "Macarons & Petit Fours",
        "Chocolate Covered Strawberries"
      ]
    }
  ];

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-dusk mb-4">
            Brunch Menu
          </h2>
          <div className="flex items-center justify-center space-x-2 text-sunrise">
            <SafeIcon icon={FiSun} className="w-5 h-5" />
            <span className="text-lg font-medium">A Morning Feast</span>
            <SafeIcon icon={FiSun} className="w-5 h-5" />
          </div>
          <p className="text-dusk/70 mt-4 max-w-2xl mx-auto">
            Join us for a delightful brunch celebration featuring fresh, seasonal ingredients 
            and all your morning favorites prepared with love.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {menuCategories.map((category, index) => (
            <motion.div
              key={index}
              className="bg-lemon-cream/30 p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="text-center mb-6">
                <motion.div 
                  className="inline-flex items-center justify-center w-16 h-16 bg-sunrise-gradient rounded-full mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <SafeIcon icon={category.icon} className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="font-serif text-2xl font-semibold text-dusk">{category.title}</h3>
              </div>
              
              <ul className="space-y-3">
                {category.items.map((item, itemIndex) => (
                  <motion.li
                    key={itemIndex}
                    className="flex items-start space-x-3 text-dusk/80"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: (index * 0.2) + (itemIndex * 0.1) }}
                    viewport={{ once: true }}
                  >
                    <div className="w-2 h-2 bg-sunrise rounded-full mt-2 flex-shrink-0"></div>
                    <span className="leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Dietary Info */}
        <motion.div 
          className="mt-16 text-center bg-sage/30 p-8 rounded-3xl max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="font-serif text-2xl font-semibold text-dusk mb-4">
            Dietary Accommodations
          </h3>
          <p className="text-dusk/80 mb-4">
            We're happy to accommodate dietary restrictions and preferences. 
            Please let us know about any allergies or special needs when you RSVP.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="bg-white/80 px-4 py-2 rounded-full text-dusk">Vegetarian Options</span>
            <span className="bg-white/80 px-4 py-2 rounded-full text-dusk">Vegan Options</span>
            <span className="bg-white/80 px-4 py-2 rounded-full text-dusk">Gluten-Free Options</span>
            <span className="bg-white/80 px-4 py-2 rounded-full text-dusk">Dairy-Free Options</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Menu;