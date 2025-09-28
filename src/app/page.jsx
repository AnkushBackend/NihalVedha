import "../styles/slider.css";
import Navbar from "../components/Navbar";
import HeroSlider from "../components/HeroSlider";

const slides = [
  { img: "/banners/banner-1.png", cta:{ href:"#", label:"Shop Now" } },
  { img: "/banners/banner-2.png", cta:{ href:"#", label:"Shop Now" } },
  { img: "/banners/banner-3.png", cta:{ href:"#", label:"Shop Now" } },
];

export default function Page(){
  return (
    <>
      <Navbar />
      <main>
        <HeroSlider slides={slides} autoMs={5000} />
      </main>
    </>
  );
}
import "../styles/category-strip.css";
import CategoryStrip from "../components/CategoryStrip";

export default function Page(){
  // ...Navbar + HeroSlider as before
  return (
    <>
      <Navbar />
      <main>
        <HeroSlider slides={slides} autoMs={5000} />
        <CategoryStrip />
        {/* more sections */}
      </main>
    </>
  );
}
