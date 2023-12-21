
// AddProduct.js
import React, { useState } from 'react';
import './AddProduct.css'// Import the CSS file

const AddProduct = ({ onAddProduct }) => {
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: 0,
    image: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddProduct(newProduct);
    setNewProduct({
      name: '',
      price: 0,
      image: '',
    });
  };

  return (
    <form className="add-product-form" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={newProduct.name} onChange={handleChange} />
      </label>
      <label>
        Price:
        <input type="number" name="price" value={newProduct.price} onChange={handleChange} />
      </label>
      <label>
        Image URL:
        <input type="text" name="image" value={newProduct.image} onChange={handleChange} />
      </label>
      <button type="submit">Add Product</button>
    </form>
  );
};

export default AddProduct;
