// src/App.jsx
// Componente raíz.
import AppRouter from './routes/AppRouter';
import React, { useState } from 'react';
import { CartProvider } from './context/CartContext';
import CartWidget from './components/CartWidget/CartWidget';
import Cart from './components/Cart/Cart';

function App() {
    const [isCartOpen, setIsCartOpen] = useState(false);
    return (
        <CartProvider>
        <CartWidget onCartClick={() => setIsCartOpen(true)} />
        <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
        <AppRouter />
         {/* otros componentes */}
      </CartProvider>
        
    );
}

export default App;
