import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Vistas
import HomePage from "../pages/HomePage/HomePage";
import BookDetail from "../pages/BookDetail/BookDetail";
import Checkout from "../pages/Checkout/Checkout";
import Cart from "../pages/Cart/Cart";
import NotFound from "../pages/NotFoundPage/NotFound.jsx";
// Layout
import LandingPage from "../pages/LandingPage/LandingPage.jsx";
import Layout from "../components/Layout/Layout.jsx";

function AppRouter() {
    return (
        <Router>
            <Routes>
                {/*sin layout: landingpage */}
                <Route path="/" element={<LandingPage />} />

                {/* con layout */}
                <Route element={<Layout />}>
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/book/:id" element={<BookDetail />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/checkout" element={<Checkout />} />
                </Route>

                {/* 404 */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}

export default AppRouter;
