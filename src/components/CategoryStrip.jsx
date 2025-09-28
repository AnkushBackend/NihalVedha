import { memo } from "react";
import "./../styles/category-strip.css";

const data = [
  { title: "TRAIL MIX", img: "/categories/CARDONE.png", href: "/shop/trail-mix" },
  { title: "BERRIES", img: "/categories/CARDTWO.png", href: "/shop/berries" },
  { title: "ROASTED MAKHANA", img: "/categories/CARDTHREE.png", href: "/shop/makhana" },
  { title: "ROASTED CASHEWS", img: "/categories/CARDFOUR.png", href: "/shop/cashews" },
  { title: "ROASTED CHANA", img: "/categories/CARDFIVE.png", href: "/shop/chana" },
];

function CategoryStrip({ items=data, heading="Choose it from “VEDIC HUB” section" }){
  return (
    <section className="category-strip">
      <div className="container">
        <h2 className="cat-heading">{heading}</h2>
        <ul className="cat-grid">
          {items.map((c,idx)=>(
            <li key={idx} className="cat-card">
              <a href={c.href} className="card-link" aria-label={c.title}>
                <div className="card-media">
                  <img src={c.img} alt={c.title} loading="lazy" />
                </div>
                <div className="card-title">
                  {c.title} <span aria-hidden="true">→</span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default memo(CategoryStrip);
