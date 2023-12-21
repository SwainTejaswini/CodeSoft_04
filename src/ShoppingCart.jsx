// ShoppingCart.js
import React from 'react';

const ShoppingCart = ({ cart, onRemoveFromCart }) => {
  const getTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div>
      <center><h2>Shopping Cart</h2></center>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            <p>{item.name}</p>
            <p>${item.price}</p>
            <button onClick={() => onRemoveFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      
    </div>
  );
};

export default ShoppingCart;
