// src/components/SaleNewLaunches.jsx
import React from "react";
import "../styles/SaleNewLaunches.css";

const items = [
  {
    id: 1,
    title: "Chia seeds | Half Roasted 500g",
    img: "/newlaunch/product1.png",
    mrp: 499,
    price: 449,
    badge: "New",
    sale: true,
  },
  {
    id: 2,
    title: "Flax seeds | Half Roasted 500g",
    img: "/newlaunch/product2.png",
    mrp: 499,
    price: 449,
    badge: "New",
    sale: true,
  },
  {
    id: 3,
    title: "Sunflower Seeds | Half-Roasted 500g",
    img: "/newlaunch/product3.png",
    mrp: 499,
    price: 449,
    badge: "New",
    sale: true,
  },
  {
    id: 4,
    title: "Watermelon seeds | Half Roasted 500g",
    img: "/newlaunch/product4.png",
    mrp: 899,
    price: 799,
    badge: "New",
    sale: true,
  },
];

export default function SaleNewLaunches(){
  return (
    <section className="newl-wrap">
      <div className="newl container">
        <h3 className="newl-title">Sale on New Launches</h3>

        <div className="newl-grid">
          {items.map(p => (
            <article key={p.id} className="newl-card">
              <div className="newl-visual">
                {p.badge && <span className="pill pill-new">{p.badge}</span>}
                {p.sale && <span className="pill pill-sale">Sale</span>}
                <img src={p.img} alt={p.title} loading="lazy" />
              </div>

              <div className="newl-info">
                <p className="newl-name">{p.title}</p>
                <div className="newl-price">
                  <span className="mrp">Rs. {p.mrp}.00</span>
                  <span className="price">Rs. {p.price}.00</span>
                </div>
                <button className="add-btn" type="button">Add to cart</button>
              </div>
            </article>
          ))}
        </div>

        <button className="newl-viewall" type="button">View all</button>
      </div>
    </section>
  );
}
