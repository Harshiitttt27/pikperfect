import React from 'react';
import { motion } from 'framer-motion';

const Featured = () => {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.section
      className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-brand-bg"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div
        className="flex justify-center items-center"
        variants={sectionVariants}
      >
        <motion.img
          src="/featured image.png"  // ✅ rename file to avoid spaces
          alt="Featured Logo"
          className="max-h-12 sm:max-h-16 lg:max-h-20 w-auto opacity-80 transition-all duration-300 hover:opacity-100"
          variants={itemVariants}
        />
      </motion.div>
    </motion.section>
  );
};

export default Featured;
