import { useEffect, useRef, useState } from "react";

export default function HeroSlider({ slides, autoMs=5000 }){
  const [i,setI]=useState(0);
  const t=useRef();

  const go = (n)=>{ if(n===i) return; setI(n); };

  useEffect(()=>{
    clearInterval(t.current);
    t.current = setInterval(()=>go((i+1)%slides.length), autoMs);
    return ()=>clearInterval(t.current);
  }, [i, slides.length, autoMs]);

  return (
    <section className="hero-slider" aria-label="Promotions">
      <div className="slides">
        {slides.map((s,idx)=>(
          <div key={idx} className={`slide ${idx===i?'is-active':''}`}>
            <img src={s.img} alt={s.alt||`Banner ${idx+1}`} />
            {s.cta && <a className="cta" href={s.cta.href}>{s.cta.label}</a>}
          </div>
        ))}
      </div>
      <button className="nav prev" onClick={()=>go((i-1+slides.length)%slides.length)} aria-label="Previous">&#10094;</button>
      <button className="nav next" onClick={()=>go((i+1)%slides.length)} aria-label="Next">&#10095;</button>
      <div className="dots">
        {slides.map((_,idx)=>(
          <button key={idx} className={`dot ${idx===i?'is-active':''}`} onClick={()=>go(idx)} aria-label={`Slide ${idx+1}`} />
        ))}
      </div>
    </section>
  );
}
