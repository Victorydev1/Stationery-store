import React, { useContext, useState } from 'react';
import { Link } from "react-router-dom";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import "./Navbar.css";
import { ShopContext } from '../Context/ShopContext';
import { motion } from 'framer-motion';



const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { getTotalCartItems } = useContext(ShopContext);
  const toggleMenu = () => setOpen((p) => !p);
  const closeMenu = () => setOpen(false);

  return (
    <>
      <nav className="navbar">
        
        <Link to="/" className="nav-logo">
          <img src={logo} alt="logo" />
          <p>STORE</p>
        </Link>

        
      
         <ul className={`nav-menu ${open ? 'open' : ''}`}>
         <li onClick={() => setMenu('shop')}>
           <Link to="/" className="nav-link">Products</Link>
         </li>
         <li onClick={() => setMenu('men')}>
           <Link to="/men" className="nav-link">Office Essentials</Link>
         </li>
         <li onClick={() => setMenu('women')}>
           <Link to="/women" className="nav-link">Creative Supplies</Link>
         </li>
         <li onClick={() => setMenu('kids')}>
           <Link to="/kids" className="nav-link">School Supplies</Link>
         </li>
       </ul>

    
        <div className="nav-right">
          <Link to="/login">
            <motion.button className='login-btn'
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

          <button
            className={`hamburger ${open ? "is-open" : ""}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      <div className={`backdrop ${open ? "show" : ""}`} onClick={closeMenu} />
    </>
  );
};

export default Navbar;

