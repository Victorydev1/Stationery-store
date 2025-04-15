import React, { useContext } from 'react'
import'./ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../Context/ShopContext'

const ProductDisplay = (props) => {
  const {addToCart} = useContext(ShopContext)
  const { product } = props;
  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
          <img className='productdisplay-main-img' src={product.image} alt="" />
        </div>
        <div className="productdisplay-right">
          <h1>{product.name}</h1>
          <div className="productdisplay-right-stars">
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_dull_icon} alt="" />
            <p>(122)</p>
          </div>
          <div className="productdisplay-right-prices">
            <div className="product-right-price-old">{product.old_price}</div>
            <div className="product-right-price-new">{product.new_price}</div>
          </div>
          <div className="productdisplay-right-description">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum alias voluptatem cupiditate excepturi consectetur voluptatum rem temporibus, laboriosam inventore animi?
          </div>
          <div className="productdisplay-right-size">
            <h1>Select Sizes</h1>
            <div className="productdisplay-right-sizes">
              <div>S</div>
              <div>M</div>
              <div>L</div>
              <div>XL</div>
              <div>XXL</div>
            </div>
          </div>
          <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
          <p className="productdisplay-right-category">Category : <span>Women, T-Shirt, Crop Top</span></p>
          <p className="productdisplay-right-category">Tags : <span>Modern, Latest</span></p>
        </div>
      </div>
    </div>
  )
}

export default ProductDisplay