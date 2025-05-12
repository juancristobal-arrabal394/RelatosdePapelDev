import React from 'react';
import './CartWidget.css';
import { useCart } from '../context/CartContext';

const CartWidget = ({ onCartClick }) => {
  const { totalItems } = useCart();

  
  return (
    <header className="header">
       <button className="cart-btn" onClick={onCartClick}>
        🛒 Carrito ({totalItems})
      </button>
    </header>
  );

};

export default CartWidget;
  