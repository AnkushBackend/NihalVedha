// src/components/SaleCategories.jsx
import React from "react";
import "../styles/SaleCategories.css";

const items = [
  {
    id: 1,
    title: "ROASTED CASHEWS",
    href: "/category/roasted-cashews",
    img: "/salecategories/cat.png",
  },
  {
    id: 2,
    title: "TRAIL MIX",
    href: "/category/trail-mix",
    img: "/salecategories/cat2.png",
  },
  {
    id: 3,
    title: "ROASTED MAKHANA",
    href: "/category/makhana",
    img: "/salecategories/cat3.png",
  },
  {
    id: 4,
    title: "GIFTING",
    href: "/category/gifting",
    img: "/salecategories/cat4.png",
  },
];

export default function SaleCategories(){
  return (
    <section className="sale-cats-wrap">
      <div className="sale-cats container">
        <h3 className="sale-cats-title">Huge Sale on all categories</h3>
        <div className="sale-cats-grid">
          {items.map(it => (
            <a key={it.id} href={it.href} className="cat-card" aria-label={it.title}>
              <div className="cat-frame">
                <img src={it.img} alt={it.title} loading="lazy" />
              </div>
              <div className="cat-cta">
                <span>{it.title}</span>
                <span className="arrow">→</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
