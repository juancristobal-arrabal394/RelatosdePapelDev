import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
    return (
        <div className="not-found">
            <h2 className="not-found__title">404 - Página no encontrada</h2>
            <p className="not-found__text">
                Lo sentimos, la página que estás buscando no existe.
            </p>
            <Link to="/home" className="not-found__link">Volver al inicio</Link>
        </div>
    );
}

export default NotFound;
