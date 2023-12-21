
// ProductCatalog.js
import React from 'react';

const ProductCatalog = ({ products, onAddToCart,onRemoveFromCatalog }) => {
  return (
    <div>
      <center><h2>Product Catalog</h2></center>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <img src={`/images/${product.image}`} alt={product.name} />
            <p>{product.name}</p>
            <p>${product.price}</p>
            <button onClick={() => onAddToCart(product)}>Add to Cart</button>
            <button onClick={() => onRemoveFromCatalog(product.id)}>Remove from Catalog</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductCatalog;
