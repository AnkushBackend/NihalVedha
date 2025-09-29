// src/pages/Register.jsx
import "../styles/login.css";          // reuse same form styles
import AuthFooter from "../components/AuthFooter";
import { useState } from "react";

export default function Register(){
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [cpw, setCpw] = useState("");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  const onSubmit = async (e)=>{
    e.preventDefault();
    setErr("");
    if(pw !== cpw){ setErr("Passwords do not match"); return; }
    if(pw.length < 6){ setErr("Password must be at least 6 characters"); return; }
    setLoading(true);
    try{
      // TODO: call signup API
      await new Promise(r=> setTimeout(r, 700));
      alert("Account created!");
      // navigate("/login");
    }catch(x){ setErr(x.message || "Failed to register"); }
    finally{ setLoading(false); }
  };

  return (
    <>
      <div className="login-wrap">
        <form className="card" onSubmit={onSubmit}>
          <h1 className="title">Create account</h1>
          <p className="subtitle">Join THARO to save orders and track delivery</p>

          <label className="lbl">Full name</label>
          <div className="input-row">
            <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="#7a5a48" strokeWidth="1.8">
              <path d="M4 20c0-3.9 3.1-7 7-7s7 3.1 7 7"/><circle cx="11" cy="8" r="3.5"/>
            </svg>
            <input type="text" placeholder="Your name" value={name} onChange={(e)=> setName(e.target.value)} required />
          </div>

          <label className="lbl">Email</label>
          <div className="input-row">
            <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="#7a5a48" strokeWidth="1.8">
              <path d="M4 6h16v12H4z"/><path d="M4 7l8 6 8-6"/>
            </svg>
            <input type="email" placeholder="name@example.com" value={email} onChange={(e)=> setEmail(e.target.value)} required />
          </div>

          <label className="lbl">Password</label>
          <div className="input-row">
            <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="#7a5a48" strokeWidth="1.8">
              <rect x="4" y="10" width="16" height="9" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/>
            </svg>
            <input type="password" placeholder="Create password" value={pw} onChange={(e)=> setPw(e.target.value)} minLength={6} required />
          </div>

          <label className="lbl">Confirm password</label>
          <div className="input-row">
            <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="#7a5a48" strokeWidth="1.8">
              <rect x="4" y="10" width="16" height="9" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/>
            </svg>
            <input type="password" placeholder="Re-enter password" value={cpw} onChange={(e)=> setCpw(e.target.value)} minLength={6} required />
          </div>

          {err && <div className="help" style={{color:"#b00020"}}>{err}</div>}

          <button className="btn" disabled={loading}>{loading ? "Creating..." : "Create account"}</button>

          <div className="row">
            <span className="help">Already have an account?</span>
            <a className="link" href="/login">Login</a>
          </div>
        </form>
      </div>

      <AuthFooter />
    </>
  );
}
