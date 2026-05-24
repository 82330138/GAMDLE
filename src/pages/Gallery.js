import React, { useState } from 'react';

const GALLERY_ITEMS = [
  { id:1,  label:'Miyuki Bracelet',     img:'/photos/WhatsApp Image 2026-04-01 at 5.41.58 PM (2).jpeg' },
  { id:2,  label:'Beaded Necklace',     img:'/photos/WhatsApp Image 2026-04-01 at 5.41.59 PM.jpeg' },
  { id:3,  label:'Ring Collection',     img:'/photos/WhatsApp Image 2026-04-01 at 5.41.58 PM.jpeg' },
  { id:4,  label:'Floral Brooch',       img:'/photos/WhatsApp Image 2026-04-01 at 5.41.59 PM (1).jpeg' },
  { id:5,  label:'Bird Brooch',         img:'/photos/WhatsApp Image 2026-04-01 at 5.41.58 PM (3).jpeg' },
  { id:6,  label:'Collection 1',        img:'/photos/WhatsApp Image 2026-04-01 at 9.14.42 PM (1).jpeg' },
  { id:7,  label:'Collection 2',        img:'/photos/WhatsApp Image 2026-04-01 at 9.14.42 PM (2).jpeg' },
  { id:8,  label:'Collection 3',        img:'/photos/WhatsApp Image 2026-04-01 at 9.14.42 PM.jpeg' },
  { id:9,  label:'Special Piece',       img:'/photos/I want you.jpg' },
  { id:10, label:'Soft Pink Necklace',  img:'/photos/Soft Pink Beaded Accessory – Versatile Handmade Necklace Bracelet Charm.jpg' },
  { id:11, label:'Beaded Bouquet',      img:'/photos/beaded bouquet flower 💐.jpg' },
  { id:12, label:'Duck Embroidery',     img:'/photos/bead embriodery duck 🦆.jpg' },
];

function Gallery() {
  const [lightbox, setLightbox] = useState(null);

  return (
    <div className="page">

      {/* HEADER */}
      <div className="gallery-header">
        <h1>Gallery</h1>
        <p>A glimpse into our handmade world</p>
      </div>

      {/* GRID */}
      <div className="gallery-grid">
        {GALLERY_ITEMS.map(item => (
          <div
            className="gallery-item"
            key={item.id}
            onClick={() => setLightbox(item)}
          >
            <img src={item.img} alt={item.label} />
            <div className="gallery-overlay">
              <span style={{ fontSize:'2.5rem', color:'#fff' }}>🔍</span>
            </div>
          </div>
        ))}
      </div>

      {/* LIGHTBOX */}
      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <span className="lightbox-close">×</span>
          <img src={lightbox.img} alt={lightbox.label} />
        </div>
      )}

      <footer className="footer">© 2026 GAMDLE — All Rights Reserved</footer>

    </div>
  );
}

export default Gallery;