// App.js
import React, { useState } from 'react';
import ProductCatalog from './ProductCatalog';
import ShoppingCart from './ShoppingCart';
import AddProduct from './AddProduct';
import './App.css'; // Import the CSS file

const App = () => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([
    { id: 1, name: 'Rice', price: 50, image: 'rice.jpeg' },
    { id: 2, name: 'Oil', price: 150, image: 'oil.jpeg' }
    // Add more products as needed
  ]);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  const handleRemoveFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  };

  const handleAddProduct = (newProduct) => {
    setProducts((prevProducts) => [...prevProducts, newProduct]);
  };

  const handleRemoveFromCatalog = (productId) => {
    const updatedProducts = products.filter((product) => product.id !== productId);
    setProducts(updatedProducts);
  };

  const calculateTotal = () => {
    const total = cart.reduce((accumulator, item) => {
      const itemPrice = parseFloat(item.price);
      return isNaN(itemPrice) ? accumulator : accumulator + itemPrice;
    }, 0);
    return total.toFixed(2);
  };

  return (
    <div className="app-container">
      <AddProduct onAddProduct={handleAddProduct} />
      <ProductCatalog products={products} onAddToCart={handleAddToCart} onRemoveFromCatalog={handleRemoveFromCatalog} />
      <ShoppingCart cart={cart} onRemoveFromCart={handleRemoveFromCart} />
      
      {/* Display the total */}
      <div className="total">
        <p>Total: ${calculateTotal()}</p>
      </div>
    </div>
  );
};

export default App;
