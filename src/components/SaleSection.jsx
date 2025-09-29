// src/components/SaleSection.jsx
import React from "react";
import "../styles/SaleSection.css";

const products = [
  { id: 1, title: "Tharo's Cheesy Peezy roasted makhana · 70gm", price: 219, mrp: null, img: "/sale/sale1.png", badge: null, shape: "tall" },
  { id: 2, title: "Premium Dried Blueberry | 95 grams", price: 299, mrp: null, img: "/sale/sale2.png", badge: null, shape: "tall" },
  { id: 3, title: "Tharo Panchmeva – Fasting Dry Fruit Mix 450g", price: 599, mrp: 699, img: "/sale/sale3.png", badge: "Sale", shape: "wide" },
  { id: 4, title: "Peri-Peri Roasted Cashews | 95 grams", price: 219, mrp: null, img: "/sale/sale4.png", badge: null, shape: "tall" }, // moved into /sale for consistency
];

export default function SaleSection(){
  const onImgError = (e)=>{ e.currentTarget.src = "/fallback.png"; };

  return (
    <section className="sale-wrap">
      <div className="sale-container">
        <h2 className="sale-title">Snacks Worth Drooling Over — Now 35% Off</h2>
        <div className="sale-grid">
          {products.map(p => (
            <article key={p.id} className={`sale-card ${p.shape || ""}`}>
              <div className="card-visual">
                {p.badge && <span className="badge">{p.badge}</span>}
                <div className="blob" />
                <img src={p.img} alt={p.title} onError={onImgError} className="card-img" loading="lazy" />
              </div>
              <div className="card-info">
                <p className="card-title">{p.title}</p>
                <div className="price-row">
                  {p.mrp && <span className="mrp">Rs. {p.mrp}.00</span>}
                  <span className="price">Rs. {p.price}.00</span>
                </div>
              </div>
            </article>
          ))}
        </div>
        <button className="view-all" type="button">View all</button>
      </div>
    </section>
  );
}
