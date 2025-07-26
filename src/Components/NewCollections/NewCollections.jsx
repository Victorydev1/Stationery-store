import React from 'react';
import './NewCollections.css';
import new_collections from '../Assets/new_collections';
import Item from '../Item/Item';
import { motion } from 'framer-motion';

const NewCollections = () => {
  return (
    <div className="new-collections">
      <h1>New Collections</h1>
      <hr />
      <motion.div 
        className="collections"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {new_collections.map((item, i) => {
          return (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Item
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default NewCollections;
