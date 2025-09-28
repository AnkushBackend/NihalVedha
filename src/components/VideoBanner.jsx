// Autoplaying, looping, muted video banner 1920×800
export default function VideoBanner({
  src="/video/pumpkin-hero.mp4",
  poster="/public/video/pumpkin-hero.jpg",
  heightClamp="clamp(280px, 42vw, 800px)"  // keeps ~1920×800 ratio
}){
  return (
    <section className="video-banner" aria-label="Pumpkin video banner" style={{"--vh": heightClamp}}>
      <div className="vb-wrap">
        <video
          className="vb-video"
          src={src}
          poster={poster}
          autoPlay
          playsInline
          muted
          loop
          preload="auto"
        />
        {/* Optional overlay content */}
        <div className="vb-overlay">
          {/* <h2>Pure. Roasted. Powerful.</h2> */}
        </div>
      </div>
    </section>
  );
}
