// src/components/Navbar.jsx
import { useState } from "react";
// Import CSS once (choose one)
// import "../index.css";
import "../styles/navbar.css";

export default function Navbar(){
  const [open,setOpen]=useState(false);

  return(
    <header>
      <div className="top-strip">
        <div className="container">
          <span>Flat 35% OFF on orders above ₹999/-</span>
          <span aria-hidden>→</span>
        </div>
      </div>

      <div className="navbar">
        <nav className="bar">
          <ul className="nav-menu">
            <li className="nav-link">ABOUT US</li>
            <li className="nav-link sale">SALE</li>
            <li className="dropdown"
                onMouseEnter={()=>setOpen(true)}
                onMouseLeave={()=>setOpen(false)}>
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
            <li className="nav-link">GIFTING</li>
            <li className="nav-link">BULK ENQUIRY</li>
            <li className="nav-link">TRACK ORDER</li>
          </ul>

          <a href="/" className="brand">
            <img src="/logo.png" alt="Logo" />
          </a>

          <div className="actions">
            <button className="icon-btn" aria-label="Search">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="1.8">
                <circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/>
              </svg>
            </button>
            <button className="icon-btn" aria-label="Account">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="1.8">
                <path d="M4 20c0-3.866 3.134-7 7-7s7 3.134 7 7"/><circle cx="11" cy="8" r="3.5"/>
              </svg>
            </button>
            <button className="icon-btn" style={{position:"relative"}} aria-label="Cart">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="1.8">
                <path d="M6 7h12l-1 13H7L6 7z"/><path d="M9 7a3 3 0 0 1 6 0"/>
              </svg>
              {/* <span className="badge">2</span> */}
            </button>
            <button className="icon-btn burger" aria-label="Menu">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="1.8">
                <path d="M3 6h18M3 12h18M3 18h18"/>
              </svg>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
