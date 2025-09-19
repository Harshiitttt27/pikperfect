import React from 'react';
import { motion } from 'framer-motion';

const premiumAlbums = [
  { src: '/premium album 1.png', alt: 'Premium Album 1', title: 'Premium Layflat Album', subtitle: 'Linen Cover', price: 'from $129' },
  { src: '/premium album 2.png', alt: 'Premium Album 2', title: 'Premium Layflat Album', subtitle: 'Leather Cover', price: 'from $159' },
  { src: '/premium album 3.png', alt: 'Premium Album 3', title: 'Premium Layflat Album', subtitle: 'Hardcover', price: 'from $179' },
];

const PremiumAlbum = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.section
      className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 text-center bg-brand-bg"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <div className="container mx-auto">
        <motion.h2
          className="font-serif text-4xl sm:text-5xl font-normal text-black leading-tight mb-6"
          variants={itemVariants}
        >
          Value to Luxury: Products That Fit Every Budget
        </motion.h2>
        <motion.p
          className="max-w-2xl mx-auto text-base lg:text-lg text-gray-600 leading-relaxed mb-16"
          variants={itemVariants}
        >
          From Photobooks to Premium Layflat Albums, our range of albums are suited for any occasion or budget. Learn more about the differences between a photo book and a photo album.
        </motion.p>

        {/* Vertical stacked albums */}
        <motion.div
          className="flex flex-col items-center gap-12"
          variants={itemVariants}
        >
          {premiumAlbums.map((album, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="w-full max-w-md relative"
            >
              <motion.img
                src={album.src}
                alt={album.alt}
                className="w-full rounded-lg object-contain cursor-pointer"
                style={{ backgroundColor: 'transparent', zIndex: 1 }}
                whileHover={{ scale: 1.7, zIndex: 10 }} // desktop hover
                whileTap={{ scale: 1.7, zIndex: 10 }}   // mobile tap
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              />
              <div className="flex justify-center items-center gap-2 sm:gap-3 mt-4 text-sm sm:text-base">
                <span className="font-semibold text-black">{album.title}</span>
                <span className="text-gray-400">|</span>
                <span className="italic text-gray-600">{album.subtitle}</span>
                <span className="text-gray-400">|</span>
                <span className="text-gray-500">{album.price}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default PremiumAlbum;
