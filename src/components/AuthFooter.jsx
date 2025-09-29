// src/components/AuthFooter.jsx
import "../styles/auth-footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebookF, faXTwitter, faYoutube, faPinterest } from "@fortawesome/free-brands-svg-icons";

export default function AuthFooter(){
  return (
    <footer className="auth-foot">
      <div className="auth-container">
        <div className="col brand">
          {/* Place logo at public/PUMPKIN/logo-tharo.png */}
          <img src="/PUMPKIN/logo-tharo.png" alt="THARO" className="logo" />

          <h3>THARO SNACKS</h3>
          <p>
            We are THARO, the healthiest and most flavorful choice of snacks to fulfill your
            cravings and make you feel satisfied.
          </p>
        </div>

        <nav className="col legal">
          <h4>LEGAL LINGO</h4>
          <ul>
            <li><a href="/about">WHO WE ARE</a></li>
            <li><a href="/contact">CONTACT US</a></li>
            <li><a href="/privacy">PRIVACY POLICY</a></li>
            <li><a href="/shipping">SHIPPING POLICY</a></li>
            <li><a href="/terms">TERMS & CONDITIONS</a></li>
            <li><a href="/tos">TERMS OF SERVICE</a></li>
            <li><a href="/refund">REFUND & RETURN</a></li>
          </ul>
        </nav>

        <div className="col subscribe">
          <p className="lead">Get the latest scoop—subscribe now!</p>
          <form className="sub-form" onSubmit={(e)=> e.preventDefault()}>
            <input type="email" placeholder="Email" required />
            <button aria-label="Subscribe">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
                <path d="M5 12h14"/><path d="M13 5l7 7-7 7"/>
              </svg>
            </button>
          </form>

          <div className="socials">
            <a aria-label="Facebook" href="https://facebook.com/THAROSNACKS" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a
              aria-label="Instagram"
              href="https://www.instagram.com/nihalshankwar?utm_source=ig_web_button_share_sheet&igsh=Z2cwNGUwdXBtbHdm"
              target="_blank" rel="noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a aria-label="YouTube" href="https://youtube.com/@THAROSNACKS" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
            <a aria-label="Twitter" href="https://x.com/THAROSNACKS" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faXTwitter} />
            </a>
            <a aria-label="Pinterest" href="https://pinterest.com/THAROSNACKS" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faPinterest} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
