import React, { useContext, useState } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [menu, setMenu] = useState('shop');
  const { getTotalCartItems } = useContext(ShopContext);

  return (
    <motion.div
      className="navbar"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="nav-logo">
        <img src={logo} alt="Store logo" />
        <p>STORE</p>
      </div>
      <ul className="nav-menu">
        <li onClick={() => setMenu('shop')}>
          <Link to="/" className="nav-link">
            Products
          </Link>
          {menu === 'shop' && <div className="active-indicator" />}
        </li>
        <li onClick={() => setMenu('men')}>
          <Link to="/men" className="nav-link">
            Office Essentials
          </Link>
          {menu === 'men' && <div className="active-indicator" />}
        </li>
        <li onClick={() => setMenu('women')}>
          <Link to="/women" className="nav-link">
            Creative Supplies
          </Link>
          {menu === 'women' && <div className="active-indicator" />}
        </li>
        <li onClick={() => setMenu('kids')}>
          <Link to="/kids" className="nav-link">
            School Supplies
          </Link>
          {menu === 'kids' && <div className="active-indicator" />}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/login">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.3 }}
          >
            Login
          </motion.button>
        </Link>
        <Link to="/cart">
          <div className="cart-icon-container">
            <img src={cart_icon} alt="Cart" />
            <div className="nav-cart-count">{getTotalCartItems()}</div>
          </div>
        </Link>
      </div>
    </motion.div>
  );
};

export default Navbar;
