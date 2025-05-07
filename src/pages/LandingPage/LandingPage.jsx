// src/pages/LandingPage/LandingPage.jsx
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

export default function LandingPage() {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/home');
        }, 5000);
        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div className="landing">
            <h1 className="landing__title">Bienvenido a Relatos de Papel</h1>
            <p className="landing__description">Explora y compra libros únicos.</p>
        </div>
    );
}
