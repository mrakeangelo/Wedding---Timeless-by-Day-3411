import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiHeart, FiSun, FiUser, FiMail, FiPhone, FiMessageCircle, FiCheck } = FiIcons;

const RSVP = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    attendance: '',
    guests: '1',
    dietary: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend/Supabase
    console.log('RSVP Data:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        attendance: '',
        guests: '1',
        dietary: '',
        message: ''
      });
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <section id="rsvp" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-morning-gradient p-12 rounded-3xl shadow-2xl">
              <motion.div 
                className="w-20 h-20 bg-sunrise-gradient rounded-full flex items-center justify-center mx-auto mb-6"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 2, ease: "easeInOut" }}
              >
                <SafeIcon icon={FiCheck} className="w-10 h-10 text-white" />
              </motion.div>
              
              <h2 className="font-serif text-4xl font-bold text-dusk mb-4">
                Thank You!
              </h2>
              
              <p className="text-dusk/80 text-lg mb-6">
                Your RSVP has been received! We can't wait to celebrate with you 
                on our special morning.
              </p>
              
              <div className="flex justify-center space-x-2">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-3 h-3 bg-sunrise rounded-full"
                    animate={{ 
                      y: [0, -10, 0],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{ 
                      duration: 1,
                      delay: i * 0.2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="rsvp" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-dusk mb-4">
            RSVP
          </h2>
          <div className="flex items-center justify-center space-x-2 text-sunrise mb-4">
            <SafeIcon icon={FiSun} className="w-5 h-5" />
            <span className="text-lg font-medium">Join Our Morning Celebration</span>
            <SafeIcon icon={FiSun} className="w-5 h-5" />
          </div>
          <p className="text-dusk/70 max-w-2xl mx-auto">
            Please respond by <strong>May 15th, 2024</strong> so we can prepare 
            the perfect brunch for all our loved ones.
          </p>
        </motion.div>

        <motion.div 
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <form onSubmit={handleSubmit} className="bg-lemon-cream/20 p-8 rounded-3xl shadow-lg">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-dusk font-medium mb-2">
                  <SafeIcon icon={FiUser} className="inline w-4 h-4 mr-2" />
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-sunrise/20 focus:border-sunrise focus:outline-none focus:ring-2 focus:ring-sunrise/20 transition-all duration-300"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label className="block text-dusk font-medium mb-2">
                  <SafeIcon icon={FiMail} className="inline w-4 h-4 mr-2" />
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-sunrise/20 focus:border-sunrise focus:outline-none focus:ring-2 focus:ring-sunrise/20 transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-dusk font-medium mb-2">
                  <SafeIcon icon={FiPhone} className="inline w-4 h-4 mr-2" />
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-sunrise/20 focus:border-sunrise focus:outline-none focus:ring-2 focus:ring-sunrise/20 transition-all duration-300"
                  placeholder="(555) 123-4567"
                />
              </div>

              <div>
                <label className="block text-dusk font-medium mb-2">
                  Number of Guests *
                </label>
                <select
                  name="guests"
                  value={formData.guests}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-sunrise/20 focus:border-sunrise focus:outline-none focus:ring-2 focus:ring-sunrise/20 transition-all duration-300"
                >
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  <option value="3">3 Guests</option>
                  <option value="4">4 Guests</option>
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-dusk font-medium mb-4">
                <SafeIcon icon={FiHeart} className="inline w-4 h-4 mr-2" />
                Will you be attending? *
              </label>
              <div className="grid grid-cols-2 gap-4">
                <motion.label 
                  className={`flex items-center justify-center p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                    formData.attendance === 'yes' 
                      ? 'border-sunrise bg-sunrise/10 text-sunrise' 
                      : 'border-sunrise/20 hover:border-sunrise/50'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <input
                    type="radio"
                    name="attendance"
                    value="yes"
                    checked={formData.attendance === 'yes'}
                    onChange={handleInputChange}
                    className="sr-only"
                  />
                  <SafeIcon icon={FiHeart} className="w-5 h-5 mr-2" />
                  Yes, I'll be there!
                </motion.label>

                <motion.label 
                  className={`flex items-center justify-center p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                    formData.attendance === 'no' 
                      ? 'border-sunrise bg-sunrise/10 text-sunrise' 
                      : 'border-sunrise/20 hover:border-sunrise/50'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <input
                    type="radio"
                    name="attendance"
                    value="no"
                    checked={formData.attendance === 'no'}
                    onChange={handleInputChange}
                    className="sr-only"
                  />
                  Sorry, can't make it
                </motion.label>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-dusk font-medium mb-2">
                Dietary Restrictions or Allergies
              </label>
              <input
                type="text"
                name="dietary"
                value={formData.dietary}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl border border-sunrise/20 focus:border-sunrise focus:outline-none focus:ring-2 focus:ring-sunrise/20 transition-all duration-300"
                placeholder="Any dietary needs we should know about?"
              />
            </div>

            <div className="mb-8">
              <label className="block text-dusk font-medium mb-2">
                <SafeIcon icon={FiMessageCircle} className="inline w-4 h-4 mr-2" />
                Message for the Couple
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows="4"
                className="w-full px-4 py-3 rounded-xl border border-sunrise/20 focus:border-sunrise focus:outline-none focus:ring-2 focus:ring-sunrise/20 transition-all duration-300 resize-none"
                placeholder="Share your excitement or well wishes..."
              />
            </div>

            <motion.button
              type="submit"
              className="w-full bg-sunrise-gradient text-white py-4 px-8 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Send RSVP
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default RSVP;