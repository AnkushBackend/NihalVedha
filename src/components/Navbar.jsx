// src/components/Navbar.jsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

export default function Navbar(){
  const [open, setOpen] = useState(false);   // desktop dropdown
  const [mOpen, setMOpen] = useState(false); // mobile menu open

  // Close on ESC
  useEffect(() => {
    const closeOnEsc = (e) => { if (e.key === "Escape") setMOpen(false); };
    window.addEventListener("keydown", closeOnEsc);
    return () => window.removeEventListener("keydown", closeOnEsc);
  }, []);

  // Prevent scroll when mobile menu open
  useEffect(() => {
    if (mOpen) {
      document.body.classList.add("nav-open");
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      document.body.classList.remove("nav-open");
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    }
  }, [mOpen]);

  // Close if resized to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header>
      {/* Top strip */}
      <div className="top-strip">
        <div className="container">
          <span>Flat 35% OFF on orders above ₹999/-</span>
          <span aria-hidden>→</span>
        </div>
      </div>

      {/* Navbar bar */}
      <div className="navbar">
        <nav className="bar">
          {/* Desktop menu */}
          <ul className="nav-menu">
            <li className="nav-link"><Link to="/">Home</Link></li>
            <li className="nav-link">ABOUT US</li>

            <li className="nav-link sale"><Link to="/sale">SALE</Link></li>

            <li
              className="dropdown"
              onMouseEnter={() => setOpen(true)}
              onMouseLeave={() => setOpen(false)}
            >
              <span className="nav-link">SHOP ▾</span>
              {open && (
                <div className="dropdown-panel">
                  <div className="dropdown-item">Trail Mix</div>
                  <div className="dropdown-item">Berries</div>
                  <div className="dropdown-item">Roasted Makhana</div>
                  <div className="dropdown-item">Roasted Cashews</div>
                  <div className="dropdown-item">Roasted Chana</div>
                </div>
              )}
            </li>

            <li className="nav-link">BLOGS & COMMUNITY</li>

            <li className="nav-link"><Link to="/gifting">GIFTING</Link></li>

            {/* FIXED: make Bulk Enquiry a Link */}
            <li className="nav-link"><Link to="/bulk">BULK ENQUIRY</Link></li>

            <li className="nav-link">TRACK ORDER</li>
          </ul>

          {/* Brand */}
          <Link to="/" className="brand">
            <img src="/logo/logo.png" alt="Logo" />
          </Link>

          {/* Right actions */}
          <div className="actions">
            <Link className="icon-btn" aria-label="Search" to="/search">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="1.8">
                <circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/>
              </svg>
            </Link>

            <Link className="icon-btn" aria-label="Account" to="/login">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="1.8">
                <path d="M4 20c0-3.866 3.134-7 7-7s7 3.134 7 7"/><circle cx="11" cy="8" r="3.5"/>
              </svg>
            </Link>

            <Link className="icon-btn" style={{ position: "relative" }} aria-label="Cart" to="/cart">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="1.8">
                <path d="M6 7h12l-1 13H7L6 7z"/><path d="M9 7a3 3 0 0 1 6 0"/>
              </svg>
            </Link>

            {/* Burger toggles mobile nav */}
            <button
              className="icon-btn burger"
              aria-label="Menu"
              aria-expanded={mOpen}
              aria-controls="mobile-nav"
              onClick={() => setMOpen(v => !v)}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="1.8">
                <path d="M3 6h18M3 12h18M3 18h18"/>
              </svg>
            </button>
          </div>
        </nav>
      </div>

      {/* Dim overlay */}
      <div
        className="nav-dim"
        onClick={() => setMOpen(false)}
        style={{ display: mOpen ? "block" : undefined }}
      />

      {/* Mobile slide panel */}
      <div
        id="mobile-nav"
        className="mobile-nav"
        style={{ transform: mOpen ? "translateX(0)" : undefined }}
        onClick={(e) => {
          if (e.target.tagName === "A") setMOpen(false);
        }}
      >
        <Link to="/" onClick={() => setMOpen(false)}>Home</Link>
        <Link to="/sale" onClick={() => setMOpen(false)}>SALE</Link>
        <Link to="/category/trail-mix" onClick={() => setMOpen(false)}>Trail Mix</Link>
        <Link to="/category/berries" onClick={() => setMOpen(false)}>Berries</Link>
        <Link to="/category/makhana" onClick={() => setMOpen(false)}>Roasted Makhana</Link>
        <Link to="/category/cashews" onClick={() => setMOpen(false)}>Roasted Cashews</Link>
        <Link to="/blogs" onClick={() => setMOpen(false)}>BLOGS & COMMUNITY</Link>
        <Link to="/gifting" onClick={() => setMOpen(false)}>GIFTING</Link>
        <Link to="/bulk" onClick={() => setMOpen(false)}>BULK ENQUIRY</Link>
        <Link to="/track" onClick={() => setMOpen(false)}>TRACK ORDER</Link>
        <Link to="/login" onClick={() => setMOpen(false)}>Account / Login</Link>
      </div>
    </header>
  );
}
