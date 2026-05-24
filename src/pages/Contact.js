import React, { useState } from 'react';

function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [sent, setSent] = useState(false);

  const handle = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();
    if (form.name && form.email && form.message) {
      setSent(true);
    }
  };

  return (
    <div className="page">

      {/* HEADER */}
      <div className="contact-hero">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you 🌸</p>
      </div>

      <div className="contact-body">

        {/* SUCCESS MESSAGE */}
        {sent ? (
          <div className="success-msg">
            ✔ Thank you, {form.name}! Your message has been sent.
            We'll get back to you soon 🌸
          </div>
        ) : (

          /* FORM */
          <form className="contact-form" onSubmit={submit}>

            <div className="form-group">
              <label>Your Name</label>
              <input
                name="name"
                value={form.name}
                onChange={handle}
                placeholder="Sima Al Rifai"
                required
              />
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handle}
                placeholder="you@example.com"
                required
              />
            </div>

            <div className="form-group">
              <label>Subject</label>
              <select name="subject" value={form.subject} onChange={handle}>
                <option value="">Select a subject</option>
                <option>Order Inquiry</option>
                <option>Custom Design</option>
                <option>General Question</option>
                <option>Collaboration</option>
              </select>
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handle}
                placeholder="Tell us how we can help..."
                required
              />
            </div>

            <button type="submit" className="submit-btn">
              Send Message
            </button>

          </form>
        )}

        {/* INFO CARDS */}
        <div className="contact-info">
          {[
            { icon:'📍', title:'Location',      info:'Lebanon' },
            { icon:'📸', title:'Instagram',     info:'@gamdle_accessories' },
            { icon:'📧', title:'Email',         info:'gamdle@email.com' },
            { icon:'⏰', title:'Response Time', info:'Within 24 hours' },
          ].map((c, i) => (
            <div className="info-card" key={i}>
              <div className="icon">{c.icon}</div>
              <h3>{c.title}</h3>
              <p>{c.info}</p>
            </div>
          ))}
        </div>

      </div>

      <footer className="footer">© 2026 GAMDLE — All Rights Reserved</footer>

    </div>
  );
}

export default Contact;