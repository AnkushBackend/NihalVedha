export default function VedicTicker(){
  const lines = [
    "Vedic Hub: Pop. Crunch. Repeat.",
    "Fuel your day, naturally — The Vedic Hub.",
    "Snack smarter with The Vedic Hub."
  ];

  // Duplicate content for seamless loop
  const repeat = [...lines, ...lines, ...lines];

  return (
    <section className="vedic-ticker" aria-label="Vedic Hub ticker">
      <div className="vt-track">
        {repeat.map((t,i)=>(
          <span key={i} className="vt-item">
            <span className="vt-emoji">🔥</span> {t}
          </span>
        ))}
      </div>
    </section>
  );
}
