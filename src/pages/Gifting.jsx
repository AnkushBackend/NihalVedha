import React from "react";
import "../styles/gifting.css";
import AuthFooter from "../components/AuthFooter"; // add this

const products = [
  { id: 1, title: "Flavours for Every Mood — Tharo’s 8-in-1 Gourmet Gifting Hamper", img: "/gifting/gift-1.png", mrp: 867, price: 780, sale: true },
  { id: 2, title: "Zesty, Spicy & Gift-Ready — Tharo’s Bright & Bold Snack Box", img: "/gifting/gift-2.png", mrp: 1059, price: 929, sale: true },
  { id: 3, title: "Ghee, Spice & Everything Nice — Tharo’s 7‑in‑1 Gifting Hamper", img: "/gifting/gift-3.png", mrp: 999, price: 899, sale: true },
  { id: 4, title: "A Little Sweet, A Little Heat — Tharo’s Signature Snack Box", img: "/gifting/gift-4.png", mrp: 899, price: 789, sale: true },
];

export default function Gifting(){
  return (
    <main className="gifting-page">
      <header className="gift-hero">
        <div className="container">
          <h1>GIFTING</h1>
          <p>Carefully curated hampers for every occasion.</p>
        </div>
      </header>

      <section className="gift-grid container">
        {products.map(p => (
          <article key={p.id} className="gift-card">
            <div className="gift-visual">
              {p.sale && <span className="gift-badge">Sale</span>}
              <img src={p.img} alt={p.title} loading="lazy" />
            </div>
            <div className="gift-info">
              <h3 className="gift-title">{p.title}</h3>
              <div className="gift-price">
                <span className="mrp">Rs. {p.mrp}.00</span>
                <span className="price">Rs. {p.price}.00</span>
              </div>
              <button className="gift-btn">Add to cart</button>
            </div>
          </article>
        ))}
      </section>

      {/* Footer flush at bottom */}
      <AuthFooter />
    </main>
  );
}
