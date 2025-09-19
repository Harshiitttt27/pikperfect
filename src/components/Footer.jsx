import React from 'react';
import { FaFacebookF, FaInstagram, FaPinterestP, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerVariants = {
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
    visible: { opacity: 1, y: 0 },
  };

  const socialIcons = [
    { icon: <FaFacebookF />, href: '#' },
    { icon: <FaInstagram />, href: '#' },
    { icon: <FaPinterestP />, href: '#' },
    { icon: <FaTwitter />, href: '#' },
  ];

  const footerLinks = [
    {
      title: 'Products',
      links: ['Photo Books', 'Wedding Albums', 'Calendars', 'Wall Art', 'Gifts'],
    },
    {
      title: 'Company',
      links: ['About Us', 'Careers', 'Press', 'Blog'],
    },
    {
      title: 'Support',
      links: ['Contact Us', 'FAQ', 'Shipping', 'Returns'],
    },
  ];

  return (
    <motion.footer
      className="bg-gray-800 text-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={footerVariants}
    >
      <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <motion.div className="md:col-span-2 lg:col-span-1" variants={itemVariants}>
            <h3 className="text-2xl font-normal tracking-tighter mb-4">
              <span className="text-brand-pik">Pik</span>
              <span className="text-brand-perfect">Perfect</span>
            </h3>
            <p className="text-gray-400 text-sm mb-6">
              Creating beautiful, high-quality photo products to preserve your memories.
            </p>
            <div className="flex space-x-4">
              {socialIcons.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {footerLinks.map((section) => (
            <motion.div key={section.title} variants={itemVariants}>
              <h4 className="font-semibold text-white mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div className="mt-16 pt-8 border-t border-gray-700 flex flex-col sm:flex-row justify-between items-center" variants={itemVariants}>
          <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} PikPerfect. All rights reserved.</p>
          <button
            onClick={scrollToTop}
            className="mt-4 sm:mt-0 flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
          >
            Back to Top <ArrowUp size={16} />
          </button>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
