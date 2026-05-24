import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Cart() {
  const navigate = useNavigate();
  const stored = localStorage.getItem('gamdle-cart');
  const cartItems = stored ? JSON.parse(stored) : [];

  const [paid, setPaid] = useState(false);
  const [method, setMethod] = useState('');
  const [form, setForm] = useState({
    name: '', card: '', expiry: '', cvv: ''
  });

  const getPrice = (priceStr) => {
    const match = priceStr.match(/\d+/);
    return match ? parseInt(match[0]) : 0;
  };

  const total = cartItems.reduce((sum, p) => sum + getPrice(p.price), 0);

  const handle = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitPayment = (e) => {
    e.preventDefault();
    setPaid(true);
  };

  if (cartItems.length === 0) {
    return (
      <div className="page">
        <div className="contact-hero">
          <h1>Your Cart</h1>
          <p>Review your selected items</p>
        </div>
        <div style={{ textAlign:'center', padding:'80px 24px' }}>
          <div style={{ fontSize:'5rem', marginBottom:'24px' }}>🛒</div>
          <h2 style={{ fontFamily:'Playfair Display, serif', color:'var(--crimson)', marginBottom:'16px' }}>
            Your cart is empty
          </h2>
          <p style={{ color:'#666', marginBottom:'32px' }}>
            Go back and add some beautiful pieces!
          </p>
          <button className="hero-btn" onClick={() => navigate('/products')}>
            Shop Now
          </button>
        </div>
        <footer className="footer">© 2026 GAMDLE — All Rights Reserved</footer>
      </div>
    );
  }

  return (
    <div className="page">

      {/* HEADER */}
      <div className="contact-hero">
        <h1>Your Cart</h1>
        <p>Review your selected items 🛒</p>
      </div>

      <div style={{ maxWidth:'900px', margin:'48px auto', padding:'0 24px' }}>

        {paid ? (
          /* SUCCESS */
          <div style={{ textAlign:'center', padding:'60px 24px' }}>
            <div style={{ fontSize:'5rem', marginBottom:'24px' }}>🎉</div>
            <h2 style={{
              fontFamily:'Playfair Display, serif',
              color:'var(--crimson)', fontSize:'2rem',
              marginBottom:'16px'
            }}>
              Order Confirmed!
            </h2>
            <p style={{ color:'#666', fontSize:'1.1rem', marginBottom:'8px' }}>
              Thank you for your purchase 🌸
            </p>
            <p style={{ color:'#666', marginBottom:'32px' }}>
              Total paid: <strong style={{ color:'var(--olive)' }}>${total}</strong>
            </p>
            <button className="hero-btn" onClick={() => navigate('/')}>
              Back to Home
            </button>
          </div>

        ) : (
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'40px' }}>

            {/* LEFT — CART ITEMS */}
            <div>
              <h2 style={{
                fontFamily:'Playfair Display, serif',
                color:'var(--crimson)', marginBottom:'24px',
                fontSize:'1.5rem', letterSpacing:'2px'
              }}>
                Order Summary
              </h2>

              {cartItems.map(p => (
                <div key={p.id} style={{
                  display:'flex', alignItems:'center', gap:'16px',
                  padding:'16px 0', borderBottom:'1px solid var(--border)'
                }}>
                  <div style={{
                    width:'70px', height:'70px', overflow:'hidden',
                    border:'1px solid var(--border)', flexShrink:0
                  }}>
                    <img src={p.img} alt={p.name}
                      style={{ width:'100%', height:'100%', objectFit:'cover' }}
                      onError={e => { e.target.style.display='none'; }}
                    />
                  </div>
                  <div style={{ flex:1 }}>
                    <div style={{
                      fontFamily:'Playfair Display, serif',
                      color:'var(--crimson)', fontSize:'1rem'
                    }}>
                      {p.name}
                    </div>
                    <div style={{ color:'var(--olive)', fontWeight:'600' }}>
                      {p.price}
                    </div>
                  </div>
                </div>
              ))}

              {/* TOTAL */}
              <div style={{
                marginTop:'24px', padding:'20px',
                background:'var(--crimson)', color:'var(--cream)',
                display:'flex', justifyContent:'space-between', alignItems:'center'
              }}>
                <span style={{
                  fontFamily:'Playfair Display, serif',
                  fontSize:'1.2rem', letterSpacing:'2px'
                }}>
                  TOTAL
                </span>
                <span style={{
                  fontFamily:'Playfair Display, serif',
                  fontSize:'1.8rem', fontWeight:'700'
                }}>
                  ${total}
                </span>
              </div>

              <button
                style={{ marginTop:'16px', background:'none', border:'none',
                  color:'var(--crimson)', cursor:'pointer', fontSize:'0.9rem',
                  letterSpacing:'1px', textDecoration:'underline'
                }}
                onClick={() => navigate('/products')}
              >
                ← Continue Shopping
              </button>
            </div>

            {/* RIGHT — PAYMENT */}
            <div>
              <h2 style={{
                fontFamily:'Playfair Display, serif',
                color:'var(--crimson)', marginBottom:'24px',
                fontSize:'1.5rem', letterSpacing:'2px'
              }}>
                Payment
              </h2>

              {/* PAYMENT METHOD */}
              <div style={{ display:'flex', gap:'12px', marginBottom:'28px' }}>
                {['💳 Card', '💵 Cash', '📱 OMT'].map(m => (
                  <button key={m}
                    onClick={() => setMethod(m)}
                    style={{
                      flex:1, padding:'12px 8px',
                      border: method === m ? '2px solid var(--crimson)' : '1px solid var(--border)',
                      background: method === m ? 'var(--crimson)' : 'var(--light)',
                      color: method === m ? '#fff' : 'var(--text)',
                      cursor:'pointer', fontFamily:'Cormorant Garamond, serif',
                      fontSize:'1rem', letterSpacing:'1px',
                      transition:'all 0.2s'
                    }}>
                    {m}
                  </button>
                ))}
              </div>

              {/* CARD FORM */}
              {method === '💳 Card' && (
                <form className="contact-form" onSubmit={submitPayment}>
                  <div className="form-group">
                    <label>Cardholder Name</label>
                    <input name="name" value={form.name}
                      onChange={handle} placeholder="Sima Al Rifai" required />
                  </div>
                  <div className="form-group">
                    <label>Card Number</label>
                    <input name="card" value={form.card}
                      onChange={handle} placeholder="1234 5678 9012 3456"
                      maxLength="19" required />
                  </div>
                  <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'16px' }}>
                    <div className="form-group">
                      <label>Expiry</label>
                      <input name="expiry" value={form.expiry}
                        onChange={handle} placeholder="MM/YY" required />
                    </div>
                    <div className="form-group">
                      <label>CVV</label>
                      <input name="cvv" value={form.cvv}
                        onChange={handle} placeholder="123"
                        maxLength="3" required />
                    </div>
                  </div>
                  <button type="submit" className="submit-btn">
                    Pay ${total}
                  </button>
                </form>
              )}

              {/* CASH */}
              {method === '💵 Cash' && (
                <div>
                  <div style={{
                    background:'var(--light)', border:'1px solid var(--border)',
                    padding:'24px', marginBottom:'20px', lineHeight:'1.8'
                  }}>
                    <p>📍 <strong>Pay on delivery</strong></p>
                    <p style={{ color:'#666', marginTop:'8px' }}>
                      Your order will be delivered and you pay in cash upon receipt.
                      We will contact you to confirm your address.
                    </p>
                  </div>
                  <button className="submit-btn" onClick={() => setPaid(true)}>
                    Confirm Order — ${total}
                  </button>
                </div>
              )}

              {/* OMT */}
              {method === '📱 OMT' && (
                <div>
                  <div style={{
                    background:'var(--light)', border:'1px solid var(--border)',
                    padding:'24px', marginBottom:'20px', lineHeight:'1.8'
                  }}>
                    <p>📱 <strong>Pay via OMT</strong></p>
                    <p style={{ color:'#666', marginTop:'8px' }}>
                      Send the total amount of <strong>${total}</strong> via OMT
                      to the number below, then send us the receipt on Instagram.
                    </p>
                    <p style={{
                      marginTop:'16px', fontFamily:'Playfair Display, serif',
                      color:'var(--crimson)', fontSize:'1.3rem', letterSpacing:'2px'
                    }}>
                      📞 +961 XX XXX XXX
                    </p>
                  </div>
                  <button className="submit-btn" onClick={() => setPaid(true)}>
                    I've Sent the Payment
                  </button>
                </div>
              )}

              {/* NO METHOD SELECTED */}
              {!method && (
                <div style={{
                  background:'var(--light)', border:'1px solid var(--border)',
                  padding:'24px', textAlign:'center', color:'#888'
                }}>
                  Please select a payment method above 👆
                </div>
              )}

            </div>
          </div>
        )}
      </div>

      <footer className="footer" style={{ marginTop:'80px' }}>
        © 2026 GAMDLE — All Rights Reserved
      </footer>

    </div>
  );
}

export default Cart;