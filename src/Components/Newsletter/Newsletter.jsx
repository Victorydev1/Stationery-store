import React from 'react';
import './Newsletter.css';
import { motion } from 'framer-motion';

const Newsletter = () => {
  return (
    <motion.div 
      className="newsletter"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1>Exclusive Offers, Right to Your Inbox</h1>
      <p>Stay updated with our latest stationery collections, offers, and more!</p>
      <div className="newsletter-input-container">
        <input type="email" placeholder="Your Email Address" />
        <button>Subscribe</button>
      </div>
    </motion.div>
  );
};

export default Newsletter;
