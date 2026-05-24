import React from 'react';

function About() {
  return (
    <div className="page">

      {/* HEADER */}
      <div className="about-hero">
        <h1>About GAMDLE</h1>
        <p>A story of creativity, resilience, and elegant craftsmanship</p>
      </div>

      <div className="about-section">

        {/* WHO WE ARE */}
        <h2>Who We Are</h2>
        <p>
          GAMDLE is a modern accessories brand that focuses on elegance and simplicity.
          We provide unique jewelry pieces designed to match your style and tell your story.
        </p>
        <p>
          Our mission is to help you express your personality through simple, elegant designs —
          crafted by hand, one bead at a time.
        </p>

        {/* MIYUKI */}
        <h2 style={{ marginTop: '48px' }}>The Legacy of Miyuki</h2>
        <p>
          The inspiration behind our designs comes from Miyuki beads, first developed
          in Japan in the mid-20th century. These beads are celebrated for their high
          quality, precise shape, and smooth finish.
        </p>
        <p>
          The iconic Delica bead — uniform, cylindrical, and beautifully consistent —
          forms the foundation of our most intricate designs. Its precision allows us
          to create patterns that feel both timeless and contemporary.
        </p>

        {/* TIMELINE */}
        <h2 style={{ marginTop: '48px' }}>Our Journey</h2>
        <div className="timeline">
          {[
            { year:'2021', text:'GAMDLE was born during a global slowdown. We found beauty in stillness and creativity in patience.' },
            { year:'2022', text:'Expanded our collection to include brooches, keychains, and embroidery pieces.' },
            { year:'2023', text:'Reached customers across Lebanon and beyond with our handmade accessories.' },
            { year:'2026', text:'Launching our digital storefront — bringing GAMDLE to the world.' },
          ].map((t, i) => (
            <div className="timeline-item" key={i}>
              <h3>{t.year}</h3>
              <p>{t.text}</p>
            </div>
          ))}
        </div>

      </div>

      <footer className="footer">© 2026 GAMDLE — All Rights Reserved</footer>

    </div>
  );
}

export default About;