import React from 'react';
import { motion } from 'framer-motion';
import './Offers.css';
import exclusive_image from '../Assets/exclusive_image.png';

const Offers = () => {
  return (
    <motion.div 
      className="offers"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <motion.div 
        className="offers-left"
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <p>Only on our best-selling products</p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Check Now
        </motion.button>
      </motion.div>
      
      <motion.div 
        className="offers-right"
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        viewport={{ once: true }}
      >
        <img src={exclusive_image} alt="Exclusive Offer" />
      </motion.div>
    </motion.div>
  );
};

export default Offers;
