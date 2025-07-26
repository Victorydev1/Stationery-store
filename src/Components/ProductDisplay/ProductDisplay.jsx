import React, { useContext, useState } from 'react';
import './ProductDisplay.css';
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';
import { ShopContext } from '../Context/ShopContext';

const ProductDisplay = ({ product }) => {
  const { addToCart } = useContext(ShopContext);
  const [selectedSize, setSelectedSize] = useState(null);
  const [mainImage, setMainImage] = useState(product.image);

  const sizes = ['S', 'M', 'L', 'XL', 'XXL'];

  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          {[...Array(4)].map((_, i) => (
            <img
              key={i}
              src={product.image}
              alt={`Thumbnail ${i + 1}`}
              onClick={() => setMainImage(product.image)}
            />
          ))}
        </div>
        <div className="productdisplay-img">
          <img className="productdisplay-main-img" src={mainImage} alt={product.name} />
        </div>
      </div>

      <div className="productdisplay-right">
        <h1>{product.name}</h1>

        <div className="productdisplay-right-stars">
          {[1, 2, 3, 4].map(i => (
            <img key={i} src={star_icon} alt="star" />
          ))}
          <img src={star_dull_icon} alt="unrated star" />
          <p>(122)</p>
        </div>

        <div className="productdisplay-right-prices">
          <div className="product-right-price-old">₦{product.old_price}</div>
          <div className="product-right-price-new">₦{product.new_price}</div>
        </div>

        <div className="productdisplay-right-description">
          This premium-quality product is part of our exclusive collection, designed for comfort, style, and durability.
        </div>

        <div className="productdisplay-right-size">
          <h1>Select Size</h1>
          <div className="productdisplay-right-sizes">
            {sizes.map(size => (
              <div
                key={size}
                className={selectedSize === size ? 'active-size' : ''}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={() => {
            if (selectedSize) {
              addToCart(product.id);
              alert(`Added to cart with size: ${selectedSize}`);
            } else {
              alert('Please select a size before adding to cart.');
            }
          }}
          aria-label="Add product to cart"
        >
          ADD TO CART
        </button>

        <p className="productdisplay-right-category">
          Category : <span>{product.category || 'Fashion, T-Shirt, Unisex'}</span>
        </p>
        <p className="productdisplay-right-category">
          Tags : <span>{product.tags || 'Trending, Comfortable, Stylish'}</span>
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
