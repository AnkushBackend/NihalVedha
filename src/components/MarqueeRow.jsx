// Horizontal scroll on wheel + drag; theme matches cream/burgundy
import { useEffect, useRef } from "react";

export default function MarqueeRow(){
  const listRef = useRef(null);

  // Mouse wheel horizontal
  useEffect(() => {
    const el = listRef.current;
    if (!el) return;
    const onWheel = (e) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        el.scrollLeft += e.deltaY;
        e.preventDefault();
      }
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  // Drag to scroll
  useEffect(() => {
    const el = listRef.current;
    let isDown = false, startX = 0, startLeft = 0;
    const pageX = (e) => e.touches ? e.touches[0].pageX : e.pageX;

    const down = (e) => { isDown = true; startX = pageX(e); startLeft = el.scrollLeft; el.classList.add("dragging"); };
    const move = (e) => { if (!isDown) return; el.scrollLeft = startLeft - (pageX(e) - startX); };
    const up   = ()  => { isDown = false; el.classList.remove("dragging"); };

    el.addEventListener("mousedown", down);
    el.addEventListener("mousemove", move);
    window.addEventListener("mouseup", up);
    el.addEventListener("touchstart", down, { passive: true });
    el.addEventListener("touchmove", move, { passive: true });
    window.addEventListener("touchend", up);

    return () => {
      el.removeEventListener("mousedown", down);
      el.removeEventListener("mousemove", move);
      window.removeEventListener("mouseup", up);
      el.removeEventListener("touchstart", down);
      el.removeEventListener("touchmove", move);
      window.removeEventListener("touchend", up);
    };
  }, []);

  const items = [
    { title:"CHIA SEEDS 500g",        price:"Rs. 449.00", primary:"/marquee/mark1.png" },
    { title:"FLAX SEEDS 500g",        price:"Rs. 449.00", primary:"/marquee/mark2.png" },
    { title:"SUNFLOWER SEEDS 500g",   price:"Rs. 449.00", primary:"/marquee/mark3.png" },
    { title:"WATERMELON SEEDS 500g",  price:"Rs. 799.00", primary:"/marquee/mark4.png" },
    { title:"PUMPKIN SEEDS 500g",     price:"Rs. 649.00", primary:"/marquee/mark5.png" },
  ];

  return (
    <section className="marquee">
      <div className="container">
        <h2 className="marquee-heading">THE RAW EDIT</h2>
      </div>
      <div className="marquee-track" ref={listRef} aria-label="Scrollable product row">
        {items.map((p, i) => (
          <div key={i} className="marq-card">
            <div className="m-media">
              <img className="m-img" src={p.primary} alt={p.title} loading="lazy" />
            </div>
            <div className="m-title">{p.title}</div>
            <div className="m-price">{p.price}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
