import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="page">

      {/* HERO */}
    <div className="hero" style={{ backgroundImage: "url('/photos/hero-bg.jpg')" }}>
        <div className="hero-beads" />
        <div className="hero-content">
          <h1>GAMDLE</h1>
          <h2>Elegant Accessories</h2>
          <p>Discover your unique style ✨</p>
          <Link to="/products" className="hero-btn">Shop Now</Link>
        </div>
      </div>

      {/* WHY GAMDLE */}
      <section className="section">
        <h2 className="section-title">Why GAMDLE?</h2>
        <div className="section-divider" />
        <div className="featured-grid">
          {[
            { icon:'📿', title:'Handcrafted',     desc:'Every piece is carefully crafted by hand with Miyuki beads and love.' },
            { icon:'🌸', title:'Unique Designs',  desc:"One-of-a-kind accessories you won't find anywhere else." },
            { icon:'✨', title:'Premium Quality', desc:'We use only the finest Japanese Miyuki beads for lasting elegance.' },
            { icon:'💌', title:'Made with Care',  desc:'Each order is packed with personal attention and a touch of warmth.' },
          ].map((f, i) => (
            <div className="feature-card" key={i}>
              <div className="feature-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT STRIP */}
      <div className="about-strip">
        <h2>Born from Resilience, Crafted with Love</h2>
        <p>
          GAMDLE started in 2021 — a time when the world slowed down and creativity bloomed.
          We believe in accessories that tell a story and reflect your personality.
        </p>
      </div>

      {/* EXPLORE */}
      <section className="section" style={{ textAlign: 'center' }}>
        <h2 className="section-title">Explore Our Collection</h2>
        <div className="section-divider" />
        <Link to="/gallery" className="hero-btn">View Gallery</Link>
      </section>

      {/* FOOTER */}
      <footer className="footer">© 2026 GAMDLE — SIMA AL RIFAI</footer>

    </div>
  );
}

export default Home;