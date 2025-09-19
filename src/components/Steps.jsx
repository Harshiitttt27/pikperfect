import React from 'react';
import { motion } from 'framer-motion';

const Steps = () => {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <motion.section
      className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 text-center bg-brand-bg"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.h2
        className="font-serif text-4xl sm:text-5xl font-normal text-black mb-16 sm:mb-24"
        variants={itemVariants}
      >
        Get Album in 4 Easy Steps
      </motion.h2>

      <motion.div
        className="flex justify-center items-center"
        variants={sectionVariants}
      >
        <motion.img
          src="/steps.png"  // your single steps image
          alt="Steps to Get Your Album"
          className="w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl object-contain"
          variants={itemVariants}
        />
      </motion.div>
    </motion.section>
  );
};

export default Steps;
