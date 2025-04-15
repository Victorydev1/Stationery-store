import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import './Product.css';
import { ShopContext } from '../../Context/ShopContext';
import Breadcrumb from '../../Breadcrumb/Breadcrumb';
import ProductDisplay from '../../ProductDisplay/ProductDisplay';
import DescriptionBox from '../../DescriptionBox/DescriptionBox';
import RelatedProduct from '../../RelatedProduct/RelatedProduct';
const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();

  const product = all_product ? all_product.find((e) => e.id === Number(productId)) : null;

  if (!product) {
    return <p>Product not found!</p>;
  }

  return (
    <div>
      <Breadcrumb product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox />
      <RelatedProduct />
    </div>
  );
};

export default Product;
