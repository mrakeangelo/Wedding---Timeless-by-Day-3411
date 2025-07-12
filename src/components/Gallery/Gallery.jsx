import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiSun, FiHeart, FiCamera, FiX } = FiIcons;

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const photos = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      alt: "Sarah and Michael engagement photo",
      title: "Our Engagement"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      alt: "Morning coffee date",
      title: "First Coffee Date"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      alt: "Beach sunrise",
      title: "Sunrise Adventures"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      alt: "Picnic proposal",
      title: "The Proposal"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1518568814500-bf0f8d125718?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      alt: "Garden party",
      title: "Garden Moments"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1529634597169-4d8f0ff08e58?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      alt: "Brunch together",
      title: "Sunday Brunch"
    }
  ];

  return (
    <section className="py-20 bg-morning-gradient">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-dusk mb-4">
            Morning Memories
          </h2>
          <div className="flex items-center justify-center space-x-2 text-sunrise">
            <SafeIcon icon={FiCamera} className="w-5 h-5" />
            <span className="text-lg font-medium">Our Journey Together</span>
            <SafeIcon icon={FiCamera} className="w-5 h-5" />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              onClick={() => setSelectedImage(photo)}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              
              {/* Sunrise Filter Overlay */}
              <div className="absolute inset-0 bg-sunrise/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Title Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 text-white">
                  <h3 className="font-serif text-lg font-semibold">{photo.title}</h3>
                </div>
              </div>

              {/* Floating Heart */}
              <motion.div 
                className="absolute top-4 right-4 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                whileHover={{ scale: 1.2 }}
              >
                <SafeIcon icon={FiHeart} className="w-4 h-4 text-sunrise" />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Decorative Elements */}
        <motion.div 
          className="flex justify-center mt-12 space-x-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.div
            animate={{ 
              rotate: [0, 360],
              y: [0, -10, 0]
            }}
            transition={{ 
              rotate: { duration: 15, repeat: Infinity, ease: "linear" },
              y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
            }}
          >
            <SafeIcon icon={FiSun} className="w-12 h-12 text-sunrise/60" />
          </motion.div>
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.6, 1, 0.6]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <SafeIcon icon={FiHeart} className="w-8 h-8 text-sunrise/60" />
          </motion.div>
          <motion.div
            animate={{ 
              rotate: [0, -360],
              y: [0, 10, 0]
            }}
            transition={{ 
              rotate: { duration: 12, repeat: Infinity, ease: "linear" },
              y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
            }}
          >
            <SafeIcon icon={FiSun} className="w-12 h-12 text-sunrise/60" />
          </motion.div>
        </motion.div>
      </div>

      {/* Modal for enlarged image */}
      {selectedImage && (
        <motion.div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
        >
          <motion.div 
            className="relative max-w-4xl max-h-[90vh] w-full"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-full object-contain rounded-2xl"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors"
            >
              <SafeIcon icon={FiX} className="w-5 h-5 text-dusk" />
            </button>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="font-serif text-xl font-semibold">{selectedImage.title}</h3>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Gallery;