// AddtoCartWidget.jsx
import React from 'react';

import { useCart } from '../context/CartContext';

const AddtoCartWidget = ({ titulo,  precio }) => {
    const { addToCart } = useCart();
  
    return (
      <div>
        <button onClick={() => addToCart({ titulo, precio })}>Agregar al carrito</button>
      </div>
    );
  };

export default AddtoCartWidget;