import {useEffect, useRef} from "react";

export default function ScrollSwapRow({heading="POCKET SNACKS"}){
  const ref = useRef(null);

  // Mouse wheel horizontal scroll
  useEffect(()=>{
    const el = ref.current;
    if(!el) return;
    const onWheel = e => {
      if(Math.abs(e.deltaY) > Math.abs(e.deltaX)){
        el.scrollLeft += e.deltaY;
        e.preventDefault();
      }
    };
    el.addEventListener("wheel", onWheel, {passive:false});
    return ()=> el.removeEventListener("wheel", onWheel);
  },[]);

  // Drag scroll for desktop + touch
  useEffect(()=>{
    const el = ref.current;
    let down=false, sx=0, sl=0;
    const start = e=>{ down=true; sx=(e.pageX||e.touches[0].pageX); sl=el.scrollLeft; el.classList.add("dragging"); };
    const move  = e=>{ if(!down) return; const x=(e.pageX||e.touches[0].pageX); el.scrollLeft = sl - (x - sx); };
    const end   = ()=>{ down=false; el.classList.remove("dragging"); };
    el.addEventListener("mousedown", start);
    el.addEventListener("mousemove", move);
    window.addEventListener("mouseup", end);
    el.addEventListener("touchstart", start, {passive:true});
    el.addEventListener("touchmove", move, {passive:true});
    window.addEventListener("touchend", end);
    return ()=>{ el.removeEventListener("mousedown", start); el.removeEventListener("mousemove", move);
      window.removeEventListener("mouseup", end); el.removeEventListener("touchstart", start);
      el.removeEventListener("touchmove", move); window.removeEventListener("touchend", end); };
  },[]);

  const items = [
    { title:"Royal Trail Mix | 10x",    price:"Rs. 480.00", primary:"/scrollswap/scroll1.png",     hover:"/scrollswap/trail-royal-hover.png", href:"#"},
    { title:"Seed Mix Choco | 10x",     price:"Rs. 380.00", primary:"/scrollswap/scroll2.png",     hover:"/scrollswap/seed-choco-hover.png", href:"#"},
    { title:"Spicy Trail Mix | 10x",    price:"Rs. 480.00", primary:"/scrollswap/scroll3.png",     hover:"/scrollswap/trail-spicy-hover.png", href:"#"},
    { title:"Crunchy Choco Nuts | 10x", price:"Rs. 480.00", primary:"/scrollswap/scroll4.png",      hover:"/scrollswap/choco-nuts-hover.png", href:"#"},
    // add more items...
  ];

  return (
    <section className="scrollswap">
      <div className="container">
        <h2 className="ss-heading">{heading}</h2>
      </div>
      <div className="ss-track" ref={ref}>
        {items.map((p,i)=>(
          <a key={i} className="ss-card" href={p.href}>
            <div className="ss-media">
              <img className="ss-img base"  src={p.primary} alt={p.title} loading="lazy" />
              <img className="ss-img hover" src={p.hover}   alt=""        loading="lazy" />
            </div>
            <div className="ss-title">{p.title}</div>
            <div className="ss-price">{p.price}</div>
            <div className="ss-actions">
              <button className="btn">Add to cart</button>
              <span className="btn outline">Choose options</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
