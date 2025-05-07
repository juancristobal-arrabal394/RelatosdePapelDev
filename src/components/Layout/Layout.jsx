// src/components/Layout/Layout.jsx
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import './Layout.css';

export default function Layout() {
    return (
        <div className="layout">
            <Header />
            <main className="layout__content">
                <Outlet />
            </main>
            {/* Footer */}
            {/*Igual tambien el widget del carrito*/}
        </div>
    );
}
