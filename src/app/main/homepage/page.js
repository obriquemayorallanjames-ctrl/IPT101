import React, { useState } from "react";
import CardList from "./components/cardlist";

const styles = `
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Segoe UI', sans-serif;
        background: #f9f9f9;
        color: #222;
    }

    /* --- NAVBAR --- */
    .navbar {
        background: #fff;
        border-bottom: 1px solid #e0e0e0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 40px;
        height: 60px;
        position: sticky;
        top: 0;
        z-index: 100;
    }

    .navbar-logo {
        font-size: 20px;
        font-weight: 800;
        color: #222;
        letter-spacing: 1px;
    }

    .navbar-logo span {
        color: #e74c3c;
    }

    .navbar-links {
        display: flex;
        list-style: none;
        gap: 4px;
    }

    .navbar-links a {
        display: block;
        padding: 6px 14px;
        font-size: 13px;
        font-weight: 500;
        color: #555;
        border-radius: 4px;
        text-decoration: none;
        transition: color 0.2s, background 0.2s;
    }

    .navbar-links a:hover {
        color: #e74c3c;
        background: #fdf0ef;
    }

    .hamburger {
        display: none;
        background: none;
        border: 1px solid #ddd;
        color: #555;
        width: 36px;
        height: 36px;
        border-radius: 6px;
        font-size: 18px;
        cursor: pointer;
    }

    .mobile-nav {
        display: none;
        flex-direction: column;
        background: #fff;
        border-bottom: 1px solid #e0e0e0;
        position: sticky;
        top: 60px;
        z-index: 99;
    }

    .mobile-nav.open {
        display: flex;
    }

    .mobile-nav a {
        padding: 12px 24px;
        font-size: 13px;
        font-weight: 500;
        color: #555;
        border-bottom: 1px solid #f0f0f0;
        text-decoration: none;
    }

    .mobile-nav a:hover {
        color: #e74c3c;
    }

    /* --- HERO --- */
    .hero {
        background: #fff;
        display: grid;
        grid-template-columns: 1fr 1fr;
        min-height: 460px;
        overflow: hidden;
    }

    .hero-text {
        padding: 60px 50px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .hero-tag {
        font-size: 12px;
        color: #e74c3c;
        font-weight: 600;
        letter-spacing: 2px;
        text-transform: uppercase;
        margin-bottom: 14px;
    }

    .hero-text h1 {
        font-size: clamp(32px, 5vw, 54px);
        font-weight: 800;
        color: #1a1a1a;
        line-height: 1.1;
        margin-bottom: 16px;
    }

    .hero-text p {
        font-size: 15px;
        color: #777;
        line-height: 1.7;
        margin-bottom: 28px;
        max-width: 380px;
    }

    .hero-buttons {
        display: flex;
        gap: 12px;
        flex-wrap: wrap;
    }

    .btn-red {
        background: #e74c3c;
        color: #fff;
        border: none;
        padding: 12px 28px;
        font-size: 13px;
        font-weight: 600;
        border-radius: 6px;
        cursor: pointer;
        font-family: inherit;
        transition: background 0.2s;
    }

    .btn-red:hover {
        background: #c0392b;
    }

    .btn-outline {
        background: #fff;
        color: #333;
        border: 1px solid #ddd;
        padding: 12px 28px;
        font-size: 13px;
        font-weight: 600;
        border-radius: 6px;
        cursor: pointer;
        font-family: inherit;
        transition: border-color 0.2s;
    }

    .btn-outline:hover {
        border-color: #e74c3c;
        color: #e74c3c;
    }

    .hero-image {
        overflow: hidden;
    }

    .hero-image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    /* --- STATS --- */
    .stats-bar {
        background: #f0f0f0;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        border-top: 1px solid #e0e0e0;
        border-bottom: 1px solid #e0e0e0;
    }

    .stat-item {
        text-align: center;
        padding: 20px 40px;
        border-right: 1px solid #e0e0e0;
        flex: 1;
        min-width: 130px;
    }

    .stat-item:last-child {
        border-right: none;
    }

    .stat-num {
        font-size: 28px;
        font-weight: 800;
        color: #1a1a1a;
    }

    .stat-num span {
        color: #e74c3c;
    }

    .stat-label {
        font-size: 11px;
        color: #999;
        letter-spacing: 1px;
        margin-top: 3px;
    }

    /* --- SECTION TITLE --- */
    .section-title {
        text-align: center;
        padding: 50px 20px 28px;
    }

    .section-title p {
        font-size: 12px;
        color: #e74c3c;
        font-weight: 600;
        letter-spacing: 2px;
        text-transform: uppercase;
        margin-bottom: 8px;
    }

    .section-title h2 {
        font-size: clamp(24px, 4vw, 38px);
        font-weight: 800;
        color: #1a1a1a;
    }

    /* --- CATEGORIES --- */
    .categories {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 16px;
        padding: 0 40px 40px;
        max-width: 1200px;
        margin: 0 auto;
    }

    .cat-card {
        position: relative;
        border-radius: 10px;
        overflow: hidden;
        cursor: pointer;
        min-height: 200px;
        display: flex;
        align-items: flex-end;
        padding: 20px;
    }

    .cat-card.tall {
        min-height: 400px;
    }

    .cat-card img {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.3s;
    }

    .cat-card:hover img {
        transform: scale(1.04);
    }

    .cat-overlay {
        position: absolute;
        inset: 0;
        background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.1) 60%);
        border-radius: 10px;
    }

    .cat-label {
        position: relative;
        z-index: 2;
    }

    .cat-label h3 {
        font-size: 20px;
        font-weight: 700;
        color: #fff;
        margin-bottom: 8px;
    }

    .cat-label button {
        background: #e74c3c;
        color: #fff;
        border: none;
        padding: 7px 16px;
        font-size: 12px;
        font-weight: 600;
        border-radius: 4px;
        cursor: pointer;
        font-family: inherit;
    }

    .right-grid {
        display: grid;
        grid-template-rows: 1fr 1fr;
        gap: 16px;
    }

    .bottom-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 16px;
    }

    /* --- DEAL SECTION --- */
    .deal-section {
        background: #fff;
        display: grid;
        grid-template-columns: 1fr 1fr;
        border-top: 1px solid #e0e0e0;
        border-bottom: 1px solid #e0e0e0;
        margin: 40px 0;
        overflow: hidden;
    }

    .deal-text {
        padding: 50px 44px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .deal-tag {
        font-size: 11px;
        color: #e74c3c;
        font-weight: 600;
        letter-spacing: 2px;
        text-transform: uppercase;
        margin-bottom: 12px;
    }

    .deal-text h2 {
        font-size: clamp(24px, 4vw, 40px);
        font-weight: 800;
        color: #1a1a1a;
        margin-bottom: 12px;
        line-height: 1.1;
    }

    .deal-text h2 span {
        color: #e74c3c;
    }

    .deal-text p {
        font-size: 14px;
        color: #777;
        line-height: 1.7;
        margin-bottom: 24px;
        max-width: 340px;
    }

    .deal-img {
        overflow: hidden;
    }

    .deal-img img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    /* --- TRUST --- */
    .trust-section {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        border-top: 1px solid #e0e0e0;
        background: #fff;
    }

    .trust-item {
        text-align: center;
        padding: 32px 24px;
        border-right: 1px solid #e0e0e0;
        flex: 1;
        min-width: 150px;
    }

    .trust-item:last-child {
        border-right: none;
    }

    .trust-icon {
        font-size: 26px;
        margin-bottom: 10px;
    }

    .trust-item h4 {
        font-size: 13px;
        font-weight: 700;
        color: #222;
        margin-bottom: 5px;
    }

    .trust-item p {
        font-size: 12px;
        color: #999;
        line-height: 1.6;
    }

    /* --- FOOTER --- */
    .footer {
        background: #1a1a1a;
        color: #ccc;
        display: grid;
        grid-template-columns: 2fr 1fr 1fr 1fr 1.5fr;
        gap: 30px;
        padding: 50px 40px 36px;
    }

    .footer-logo {
        font-size: 20px;
        font-weight: 800;
        letter-spacing: 1px;
        margin-bottom: 12px;
        color: #fff;
    }

    .footer-logo span {
        color: #e74c3c;
    }

    .footer-brand p {
        font-size: 13px;
        color: #777;
        line-height: 1.8;
        max-width: 220px;
    }

    .footer-col h4 {
        font-size: 12px;
        font-weight: 700;
        color: #fff;
        letter-spacing: 1px;
        margin-bottom: 14px;
    }

    .footer-col ul {
        list-style: none;
    }

    .footer-col ul li {
        font-size: 13px;
        color: #777;
        margin-bottom: 8px;
        cursor: pointer;
        transition: color 0.2s;
    }

    .footer-col ul li:hover {
        color: #e74c3c;
    }

    .footer-newsletter p {
        font-size: 13px;
        color: #777;
        margin-bottom: 12px;
        line-height: 1.6;
    }

    .newsletter-row {
        display: flex;
    }

    .newsletter-input {
        background: #2a2a2a;
        border: 1px solid #333;
        border-right: none;
        color: #fff;
        padding: 9px 12px;
        font-size: 12px;
        flex: 1;
        outline: none;
        border-radius: 4px 0 0 4px;
        font-family: inherit;
    }

    .newsletter-input::placeholder {
        color: #555;
    }

    .newsletter-btn {
        background: #e74c3c;
        color: #fff;
        border: none;
        padding: 9px 14px;
        font-size: 12px;
        font-weight: 600;
        cursor: pointer;
        border-radius: 0 4px 4px 0;
        font-family: inherit;
    }

    .footer-bottom {
        background: #111;
        border-top: 1px solid #2a2a2a;
        text-align: center;
        padding: 14px;
        font-size: 12px;
        color: #555;
    }

    /* --- RESPONSIVE --- */
    @media (max-width: 900px) {
        .navbar { padding: 0 20px; }
        .navbar-links { display: none; }
        .hamburger { display: block; }

        .hero { grid-template-columns: 1fr; }
        .hero-image { height: 250px; }
        .hero-text { padding: 36px 24px; }

        .categories { grid-template-columns: 1fr; padding: 0 20px 30px; }
        .cat-card.tall { min-height: 240px; }
        .right-grid { grid-template-rows: auto auto; }

        .deal-section { grid-template-columns: 1fr; }
        .deal-img { height: 220px; }
        .deal-text { padding: 36px 24px; }

        .trust-item { border-right: none; border-bottom: 1px solid #e0e0e0; }
        .trust-item:last-child { border-bottom: none; }

        .footer {
            grid-template-columns: 1fr 1fr;
            gap: 24px;
            padding: 36px 24px 24px;
        }
        .footer-brand { grid-column: span 2; }
    }

    @media (max-width: 560px) {
        .navbar { padding: 0 14px; }
        .hero-text { padding: 28px 16px; }
        .hero-buttons { flex-direction: column; }
        .categories { padding: 0 14px 24px; gap: 12px; }
        .bottom-grid { grid-template-columns: 1fr; }
        .deal-text { padding: 28px 16px; }
        .footer { grid-template-columns: 1fr; }
        .footer-brand { grid-column: span 1; }
        .stats-bar { gap: 0; }
        .stat-item { border-right: none; border-bottom: 1px solid #e0e0e0; }
        .stat-item:last-child { border-bottom: none; }
    }
`;

export default function HomePage() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <main>
            <style>{styles}</style>

            {/* NAVBAR */}
            <nav className="navbar">
                <div className="navbar-logo">Motor<span>X</span></div>

                <ul className="navbar-links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Shop</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Pages</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>

                <button
                    className="hamburger"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? "✕" : "☰"}
                </button>
            </nav>

            {/* MOBILE MENU */}
            <div className={`mobile-nav${menuOpen ? " open" : ""}`}>
                <a href="#">Home</a>
                <a href="#">Shop</a>
                <a href="#">Blog</a>
                <a href="#">Pages</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
            </div>

            {/* HERO */}
            <section className="hero">
                <div className="hero-text">
                    <p className="hero-tag">Premium Automotive</p>
                    <h1>Find Your Perfect Car</h1>
                    <p>Browse our collection of certified supercars and luxury vehicles. Every car inspected and ready to drive.</p>
                    <div className="hero-buttons">
                        <button className="btn-red">Browse Cars</button>
                        <button className="btn-outline">Book Test Drive</button>
                    </div>
                </div>
                <div className="hero-image">
                    <img src="https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=900&q=80" alt="Hero car" />
                </div>
            </section>

            {/* STATS */}
            <div className="stats-bar">
                <div className="stat-item">
                    <div className="stat-num">500<span>+</span></div>
                    <div className="stat-label">CARS IN STOCK</div>
                </div>
                <div className="stat-item">
                    <div className="stat-num">12</div>
                    <div className="stat-label">BRANDS</div>
                </div>
                <div className="stat-item">
                    <div className="stat-num">98<span>%</span></div>
                    <div className="stat-label">HAPPY CUSTOMERS</div>
                </div>
                <div className="stat-item">
                    <div className="stat-num">10<span>+</span></div>
                    <div className="stat-label">YEARS EXPERIENCE</div>
                </div>
            </div>

            {/* CATEGORIES */}
            <div className="section-title">
                <p>Shop by Type</p>
                <h2>Browse Categories</h2>
            </div>

            <div className="categories">
                <div className="cat-card tall">
                    <img src="https://images.unsplash.com/photo-1592198084033-aade902d1aae?w=800&q=80" alt="Supercars" />
                    <div className="cat-overlay" />
                    <div className="cat-label">
                        <h3>Supercars</h3>
                        <button>Browse</button>
                    </div>
                </div>
                <div className="right-grid">
                    <div className="cat-card">
                        <img src="https://images.unsplash.com/photo-1555215695-3004980ad54e?w=700&q=80" alt="Luxury Sedans" />
                        <div className="cat-overlay" />
                        <div className="cat-label">
                            <h3>Luxury Sedans</h3>
                            <button>Browse</button>
                        </div>
                    </div>
                    <div className="bottom-grid">
                        <div className="cat-card">
                            <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=500&q=80" alt="Sports GT" />
                            <div className="cat-overlay" />
                            <div className="cat-label">
                                <h3>Sports GT</h3>
                                <button>View</button>
                            </div>
                        </div>
                        <div className="cat-card">
                            <img src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=500&q=80" alt="Rare Finds" />
                            <div className="cat-overlay" />
                            <div className="cat-label">
                                <h3>Rare Finds</h3>
                                <button>View</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* FEATURED VEHICLES */}
            <div className="section-title">
                <p>Hand Picked</p>
                <h2>Featured Vehicles</h2>
            </div>
            <CardList />

            {/* DEAL OF THE WEEK */}
            <div className="deal-section">
                <div className="deal-text">
                    <p className="deal-tag">Deal of the Week</p>
                    <h2>Porsche 911 <span>GT3 RS</span></h2>
                    <p>2022 · 518 HP · Only 4,100 miles. A rare opportunity at a great price — available this week only.</p>
                    <button className="btn-red" style={{ width: "fit-content" }}>See This Deal</button>
                </div>
                <div className="deal-img">
                    <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80" alt="Deal car" />
                </div>
            </div>

            {/* TRUST */}
            <div className="trust-section">
                <div className="trust-item">
                    <div className="trust-icon">🔍</div>
                    <h4>Full Inspection</h4>
                    <p>150-point check on every car before we list it.</p>
                </div>
                <div className="trust-item">
                    <div className="trust-icon">📜</div>
                    <h4>Clean Title</h4>
                    <p>No hidden history. Every vehicle is verified clean.</p>
                </div>
                <div className="trust-item">
                    <div className="trust-icon">🚗</div>
                    <h4>Test Drives</h4>
                    <p>We bring the car to you. Book anytime.</p>
                </div>
                <div className="trust-item">
                    <div className="trust-icon">🛡</div>
                    <h4>Warranty</h4>
                    <p>Extended warranty plans available on all cars.</p>
                </div>
            </div>

            {/* FOOTER */}
            <footer className="footer">
                <div className="footer-brand">
                    <div className="footer-logo">Motor<span>X</span></div>
                    <p>Trusted exotic and luxury car dealership. Transparent pricing, certified inventory.</p>
                </div>
                <div className="footer-col">
                    <h4>INVENTORY</h4>
                    <ul>
                        <li>Supercars</li>
                        <li>Luxury Sedans</li>
                        <li>Sports GT</li>
                        <li>Rare Finds</li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>COMPANY</h4>
                    <ul>
                        <li>About Us</li>
                        <li>Blog</li>
                        <li>Careers</li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>SUPPORT</h4>
                    <ul>
                        <li>Test Drives</li>
                        <li>Financing</li>
                        <li>Warranties</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className="footer-col footer-newsletter">
                    <h4>NEWSLETTER</h4>
                    <p>Get first access to new arrivals and special deals.</p>
                    <div className="newsletter-row">
                        <input className="newsletter-input" placeholder="Your email" />
                        <button className="newsletter-btn">Join</button>
                    </div>
                </div>
            </footer>
            <div className="footer-bottom">
                © 2026 MotorX Automotive. All rights reserved.
            </div>
        </main>
    );
}