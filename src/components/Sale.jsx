// src/pages/Sale.jsx
import React from "react";
import "../styles/sale.css";
import SaleSection from "../components/SaleSection";
import SaleCategories from "../components/SaleCategories";
import SaleNewLaunches from "../components/SaleNewLaunches";
import AuthFooter from "../components/AuthFooter";

export default function Sale(){
  return (
    <main className="sale-page">
      <section className="sale-hero">
        <img src="/banners/sale-hero.png" alt="Mega Sale" />
      </section>

      <div style={{ height:"clamp(12px, 2.5vw, 28px)" }} />
      <SaleSection />

      <div style={{ height:"clamp(16px, 3vw, 36px)" }} />
      <SaleCategories />

      <div style={{ height:"clamp(16px, 3vw, 36px)" }} />
      <SaleNewLaunches />

      {/* Remove any spacer here */}
      <AuthFooter />
    </main>
  );
}
