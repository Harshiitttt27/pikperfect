import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 px-4 sm:px-6 lg:px-8 bg-brand-bg relative overflow-hidden">
      <motion.div
        className="absolute top-10 right-4 sm:right-6 lg:right-8 z-10"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <div className="flex items-center gap-2 bg-white/95 p-3 px-4 rounded-full shadow-lg">
          <Star className="text-yellow-500 fill-current" size={16} />
          <span className="font-semibold text-sm text-gray-800">4.8/5</span>
          <span className="text-sm text-gray-500">(12k reviews)</span>
        </div>
      </motion.div>

      <motion.div
        className="container mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          <motion.div className="lg:flex-1 max-w-xl text-center lg:text-left" variants={itemVariants}>
            <p className="text-base text-gray-600 mb-5 tracking-wider"> Professional Photo Books & Albums</p>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-normal text-black leading-tight mb-6">
              Made for Keeps!
            </h1>
            <p className="text-base lg:text-lg text-gray-600 leading-relaxed mb-8">
              Each album is lovingly handcrafted with the finest materials, creating a timeless keepsake.
              An unforgettable gift to hold your most joyful holiday memories for years to come.
            </p>
            <motion.button
              className="bg-gray-800 text-white text-base font-medium py-4 px-8 rounded-md shadow-lg transition-transform transform hover:scale-105 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>
          </motion.div>

          <motion.div className="lg:flex-1 w-full" variants={itemVariants}>
  <div className="relative rounded-lg shadow-2xl">
    <img
      src="/album.png"
      alt="Beautifully crafted wedding photo album"
      className="w-full h-auto object-contain rounded-lg bg-transparent"
      style={{
         filter: 'drop-shadow(0 20px 40px rgba(0, 0, 0, 0.15))'}}
    />
  </div>
</motion.div>


        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
