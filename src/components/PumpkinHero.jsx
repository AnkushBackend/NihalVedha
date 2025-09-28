// Yoga vibe promo section (image + copy + CTA)
export default function PumpkinHero(){
  return (
    <section className="pumpkin-hero">
      <div className="ph-container">
        <div className="ph-art">
          <img src="/PUMPKIN/pumpkin-yogi.png" alt="Yogi approved pumpkin seeds" />
        </div>

        <div className="ph-copy">
          <h2 className="ph-title">Feel the power—Yogi approved!</h2>
          <p className="ph-sub">
            Crunchy, clean and packed with plant protein, these pumpkin seeds keep energy steady and
            snack cravings calm—perfect for mindful munching. 
          </p>
          <ul className="ph-bullets">
            <li>Rich in magnesium, zinc and good fats</li>
            <li>Lightly roasted for extra crunch, no guilt</li>
            <li>Anytime snack—before yoga, during work, after gym</li>
          </ul>
          <div className="ph-ctas">
            <a className="btn primary" href="#shop-pumpkin">Shop Pumpkin Seeds</a>
            <a className="btn ghost" href="#learn-pumpkin">Know benefits</a>
          </div>
        </div>
      </div>
    </section>
  );
}
