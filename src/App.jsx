// src/App.jsx
import "./styles/slider.css";
import "./styles/category-strip.css";
import "./styles/product-grid.css";
import "./styles/marquee-row.css";
import "./styles/scroll-swap-row.css";
import "./styles/pumpkin-hero.css";
import "./styles/vedic-ticker.css";
import "./styles/video-banner.css";          // NEW

import Navbar from "./components/Navbar";
import HeroSlider from "./components/HeroSlider";
import CategoryStrip from "./components/CategoryStrip";
import ProductGrid from "./components/ProductGrid";
import MarqueeRow from "./components/MarqueeRow";
import ScrollSwapRow from "./components/ScrollSwapRow";
import PumpkinHero from "./components/PumpkinHero";
import VedicTicker from "./components/VedicTicker";
import VideoBanner from "./components/VideoBanner"; // NEW

const slides = [
  { img: "/banners/banner-1.png", cta:{ href:"#", label:"Shop Now" } },
  { img: "/banners/banner-2.png", cta:{ href:"#", label:"Shop Now" } },
  { img: "/banners/banner-3.png", cta:{ href:"#", label:"Shop Now" } },
  { img: "/banners/banner-4.png", cta:{ href:"#", label:"Shop Now" } }
];

export default function App(){
  return (
    <>
      <Navbar />
      <HeroSlider slides={slides} autoMs={5000} />

      <div style={{ height: "clamp(16px, 4vw, 40px)" }} />
      <CategoryStrip />

      <ProductGrid />                 {/* hover-swap cards */}

      <MarqueeRow />                  {/* mouse/drag horizontal slider */}

      <div style={{ height: "clamp(16px, 3vw, 32px)" }} />
      <ScrollSwapRow heading="POCKET SNACKS" />  {/* wheel/drag + hover swap */}

      {/* Ticker must be just above Pumpkin section */}
      <VedicTicker />

      <div style={{ height: "clamp(12px, 2.5vw, 28px)" }} />
      <PumpkinHero />                 {/* Yogi-themed pumpkin seeds section */}

      {/* NEW: Continuous video banner right below pumpkin */}
      <VideoBanner
        src="/video/pumpkin-hero.mp4"
        poster="/video/pumpkin-hero.jpg"
        heightClamp="clamp(280px, 42vw, 800px)"  // ~1920×800
      />
    </>
  );
}
