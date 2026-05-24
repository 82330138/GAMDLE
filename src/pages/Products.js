import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const PRODUCTS = [
  { id:1,  name:'Beaded Necklace',    price:'$50',      emoji:'📿', img:'/photos/photo.png' },
  { id:2,  name:'Delicate Ring',      price:'$15',      emoji:'💍', img:'/photos/photo2.png' },
  { id:3,  name:'Miyuki Bracelet',    price:'$18',      emoji:'✨', img:'/photos/photo3.png' },
  { id:4,  name:'Bird Brooch',        price:'$75',      emoji:'🐦', img:'/photos/diy bird from 🦪.jpg' },
  { id:5,  name:'Ring Set',           price:'$10 each', emoji:'💍', img:'/photos/download (1).jpg' },
  { id:6,  name:'Floral Brooch',      price:'$80',      emoji:'🌸', img:'/photos/download (3).jpg' },
  { id:7,  name:'Gold Brooch',        price:'$60 each', emoji:'⭐', img:'/photos/download (2).jpg' },
  { id:8,  name:'Statement Ring',     price:'$20',      emoji:'💍', img:'/photos/download.jpg' },
  { id:9,  name:'Duck Embroidery',    price:'$30',      emoji:'🦆', img:'/photos/bead embriodery duck 🦆.jpg' },
  { id:10, name:'Archive Embroidery', price:'$70',      emoji:'🧵', img:'/photos/From the archive.jpg' },
  { id:11, name:'Beaded Bouquet',     price:'$10',      emoji:'💐', img:'/photos/beaded bouquet flower 💐.jpg' },
  { id:12, name:'Kitchen Keychain',   price:'$15',      emoji:'🔑', img:'/photos/kitchen.jpg' },
];

function Products() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  const toggleCart = (id) => {
    setCart(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  return (
    <div className="page">

      {/* HEADER */}
      <div className="products-header">
        <h1>Our Products</h1>
        <p>Handmade with Miyuki beads · Each piece unique</p>
      </div>

      {/* GRID */}
      <div className="products-grid">
        {PRODUCTS.map(p => (
          <div className="product-card" key={p.id}>
           <div className="product-img">
  <img
    src={p.img}
    alt={p.name}
    onError={e => { e.target.style.display='none'; }}
  />
</div>
            <div className="product-info">
              <div className="product-name">{p.name}</div>
              <div className="product-price">{p.price}</div>
              <button
                className={`cart-btn ${cart.includes(p.id) ? 'added' : ''}`}
                onClick={() => toggleCart(p.id)}
              >
                {cart.includes(p.id) ? '✔ Added to Cart' : 'Add to Cart'}
              </button>
            </div>
          </div>
        ))}
      </div>

     {cart.length > 0 && (
  <div className="cart-badge" onClick={() => {
    localStorage.setItem('gamdle-cart', JSON.stringify(
      PRODUCTS.filter(p => cart.includes(p.id))
    ));
    navigate('/cart');
  }}>
    🛒 Cart: {cart.length} item{cart.length > 1 ? 's' : ''} — View Cart
  </div>
)}

      <footer className="footer">© 2026 GAMDLE — All Rights Reserved</footer>

    </div>
  );
}

export default Products;