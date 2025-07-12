import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiCoffee, FiHeart, FiSun, FiUser, FiMessageCircle, FiSend } = FiIcons;

const Guestbook = () => {
  const [newMessage, setNewMessage] = useState({ name: '', message: '' });
  const [messages, setMessages] = useState([
    {
      id: 1,
      name: "Emily & James",
      message: "Can't wait to celebrate your beautiful morning wedding! Sarah, you're going to look absolutely radiant in the morning light. Love you both! ☀️",
      timestamp: "2 days ago"
    },
    {
      id: 2,
      name: "The Johnson Family",
      message: "What a perfect way to start your marriage - with the sunrise! We're so excited to share croissants and mimosas with you. Congratulations! 🥐",
      timestamp: "1 week ago"
    },
    {
      id: 3,
      name: "Lisa & Mark",
      message: "A morning wedding is such a beautiful idea! We love how this reflects your relationship - bright, fresh, and full of new beginnings. See you at 10 AM sharp! ☕",
      timestamp: "2 weeks ago"
    }
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newMessage.name && newMessage.message) {
      const message = {
        id: messages.length + 1,
        name: newMessage.name,
        message: newMessage.message,
        timestamp: "Just now"
      };
      setMessages([message, ...messages]);
      setNewMessage({ name: '', message: '' });
    }
  };

  return (
    <section id="guestbook" className="py-20 bg-morning-gradient">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-dusk mb-4">
            A Note With Your Coffee
          </h2>
          <div className="flex items-center justify-center space-x-2 text-sunrise mb-4">
            <SafeIcon icon={FiCoffee} className="w-5 h-5" />
            <span className="text-lg font-medium">Share Your Thoughts</span>
            <SafeIcon icon={FiCoffee} className="w-5 h-5" />
          </div>
          <p className="text-dusk/70 max-w-2xl mx-auto">
            Leave us a sweet message to start our day with even more joy. 
            Your words will warm our hearts like the morning sun.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Message Form */}
          <motion.div 
            className="bg-white/80 p-8 rounded-3xl shadow-lg mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-dusk font-medium mb-2">
                  <SafeIcon icon={FiUser} className="inline w-4 h-4 mr-2" />
                  Your Name
                </label>
                <input
                  type="text"
                  value={newMessage.name}
                  onChange={(e) => setNewMessage({...newMessage, name: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-sunrise/20 focus:border-sunrise focus:outline-none focus:ring-2 focus:ring-sunrise/20 transition-all duration-300"
                  placeholder="Your name or family name"
                  required
                />
              </div>

              <div>
                <label className="block text-dusk font-medium mb-2">
                  <SafeIcon icon={FiMessageCircle} className="inline w-4 h-4 mr-2" />
                  Your Message
                </label>
                <textarea
                  value={newMessage.message}
                  onChange={(e) => setNewMessage({...newMessage, message: e.target.value})}
                  rows="4"
                  className="w-full px-4 py-3 rounded-xl border border-sunrise/20 focus:border-sunrise focus:outline-none focus:ring-2 focus:ring-sunrise/20 transition-all duration-300 resize-none"
                  placeholder="Share your well wishes, favorite memories, or morning thoughts..."
                  required
                />
              </div>

              <motion.button
                type="submit"
                className="bg-sunrise-gradient text-white px-8 py-3 rounded-xl font-semibold flex items-center space-x-2 hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <SafeIcon icon={FiSend} className="w-5 h-5" />
                <span>Send Message</span>
              </motion.button>
            </form>
          </motion.div>

          {/* Messages Display */}
          <div className="space-y-6">
            {messages.map((message, index) => (
              <motion.div
                key={message.id}
                className="bg-white/80 p-6 rounded-2xl shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -2, shadow: "0 10px 30px rgba(0,0,0,0.1)" }}
              >
                <div className="flex items-start space-x-4">
                  <motion.div 
                    className="w-12 h-12 bg-sunrise-gradient rounded-full flex items-center justify-center flex-shrink-0"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <SafeIcon icon={FiHeart} className="w-6 h-6 text-white" />
                  </motion.div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-dusk">{message.name}</h4>
                      <span className="text-sm text-dusk/60">{message.timestamp}</span>
                    </div>
                    <p className="text-dusk/80 leading-relaxed">{message.message}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Decorative Elements */}
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center space-x-4">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                <SafeIcon icon={FiSun} className="w-8 h-8 text-sunrise/60" />
              </motion.div>
              <div className="flex space-x-2">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-2 h-2 bg-sunrise/40 rounded-full"
                    animate={{ 
                      y: [0, -8, 0],
                      opacity: [0.4, 1, 0.4]
                    }}
                    transition={{ 
                      duration: 2,
                      delay: i * 0.2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </div>
              <motion.div
                animate={{ rotate: [0, -360] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <SafeIcon icon={FiSun} className="w-8 h-8 text-sunrise/60" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Guestbook;