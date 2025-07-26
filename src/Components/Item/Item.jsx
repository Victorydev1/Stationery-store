import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Item = (props) => {
  return (
    <motion.div
      className="item"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.3 }}
    >
      <Link to={`/product/${props.id}`}>
        <img
          onClick={window.scrollTo(0, 0)}
          src={props.image}
          alt={props.name}
          className="item-image"
        />
      </Link>
      <p className="item-name">{props.name}</p>
      <div className="item-prices">
        <div className="item-price-new">{props.new_price}</div>
        <div className="item-price-old">{props.old_price}</div>
      </div>
    </motion.div>
  );
};

export default Item;
