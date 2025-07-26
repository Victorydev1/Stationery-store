import React from 'react';
import './RelatedProduct.css';
import data_product from '../Assets/data';
import Item from '../Item/Item';

const RelatedProduct = () => {
  const relatedItems = data_product.slice(0, 4); 

  return (
    <section className="relatedproducts">
      <h1>Related Products</h1>
      <p>Customers also viewed</p>
      <hr />
      <div className="relatedproducts-item">
        {relatedItems.length > 0 ? (
          relatedItems.map((item, i) => (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          ))
        ) : (
          <p className="no-products">No related products available.</p>
        )}
      </div>
    </section>
  );
};

export default RelatedProduct;
