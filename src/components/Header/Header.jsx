// src/components/Header/Header.jsx
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
    return (
        <header className="header">
            <Link to="/home" className="header__logo">Relatos de Papel</Link>
            <nav className="header__nav">
                <Link to="/home" className="header__link">Inicio</Link>
                <Link to="/cart" className="header__link">Carrito</Link>
            </nav>
        </header>
    );
}
