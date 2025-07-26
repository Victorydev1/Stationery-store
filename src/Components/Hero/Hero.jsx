import React from 'react';
import './Hero.css';
import { motion } from 'framer-motion';
import arrow_icon from '../Assets/arrow.png';
import hero_image from '../Assets/hero_image.png';

const Hero = () => {
  return (
    <section className="hero">
      <motion.div
        className="hero-left"
        initial={{ x: -80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }} 
        transition={{ duration: 0.8 }}
      >
        <h1 className="hero-heading">Essential Tools for Inspired Work</h1>
        <div className="hero-text">
          <p className="highlight">Notebooks. Pens. Office must-haves.</p>
          <p>Discover beautifully designed stationery</p>
          <p>that keeps your ideas flowing and space organized.</p>
        </div>
        <motion.div
          className="hero-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span>Start Shopping</span>
          <img src={arrow_icon} alt="arrow icon" />
        </motion.div>
      </motion.div>

      <motion.div
        className="hero-right"
        initial={{ x: 80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <img src={hero_image} alt="Hero stationery display" />
      </motion.div>
    </section>
  );
};

export default Hero;
