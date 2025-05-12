// src/context/CartContext.js
import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (libro) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.título === libro.título);
      if (existing) {
        return prev.map(item =>
          item.título === libro.título
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prev, { ...libro, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (título) => {
    setCartItems(prev => prev.filter(item => item.título !== título));
  };

  const updateQuantity = (título, quantity) => {
    if (quantity <= 0) {
      removeFromCart(título);
    } else {
      setCartItems(prev =>
        prev.map(item =>
          item.título === título ? { ...item, quantity } : item
        )
      );
    }
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, updateQuantity, totalItems }}
    >
      {children}
    </CartContext.Provider>
  );
};
