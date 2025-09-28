// src/components/ProductGrid.jsx
export default function ProductGrid(){
  const items = [
    { title:"Peri-Peri Roasted Cashews | 95g", price:"Rs. 219.00", primary:"/products/ONE.png", hover:"/products/TWO.png", href:"#"},
    { title:"Premium Dried Blueberry | 95g",   price:"From Rs. 299.00", primary:"/products/THREE.png", hover:"/products/FOUR.png", href:"#"},
    { title:"Chocolate Roasted Cashews | 95g",price:"Rs. 219.00", primary:"/products/SIX.png", hover:"/products/FIVE.png", href:"#"},
    { title:"Premium Dried Cranberries | 95g",price:"From Rs. 199.00", primary:"/products/SEVEN.png", hover:"/products/EIGHT.png", href:"#"},
  ];
  return (
    <section className="products">
      <div className="container">
        <h2 className="prod-heading">NEW LAUNCHES</h2>
        <ul className="prod-grid">
          {items.map((p,i)=>(
            <li key={i} className="prod-card">
              <a className="prod-link" href={p.href}>
                <div className="prod-media">
                  <img className="img-base"  src={p.primary} alt={p.title} loading="lazy" />
                  <img className="img-hover" src={p.hover}   alt=""        loading="lazy" />
                </div>
                <h3 className="prod-title">{p.title}</h3>
                <div className="prod-price">{p.price}</div>
              </a>
              <div className="prod-actions">
                <button className="btn">Add to cart</button>
                <a className="btn outline" href={p.href}>Choose options</a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
