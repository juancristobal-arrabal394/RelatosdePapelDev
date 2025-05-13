// src/components/Layout/Layout.jsx
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import './Layout.css';
import CartWidget from '../CartWidget/CartWidget';

export default function Layout() {
    return (
        <div className="layout">
            <Header />
            <main className="layout__content">
                <Outlet />
            </main>
            {/* Footer */}
            <CartWidget />
            {/*Igual tambien el widget del carrito*/}
        </div>
    );
}
