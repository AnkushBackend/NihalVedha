// src/components/Login.jsx
import "../styles/login.css";            // ensure file exists with exact casing
import AuthFooter from "../components/AuthFooter";
import { useState } from "react";

export default function Login(){
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  const onSubmit = async (e)=>{
    e.preventDefault();
    setErr("");
    setLoading(true);
    try{
      await new Promise(r=> setTimeout(r, 600));
      if(!/^\S+@\S+\.\S+$/.test(email)) throw new Error("Invalid email");
      if(pw.length < 6) throw new Error("Password too short");
      alert("Logged in mock");
    }catch(x){ setErr(x.message); }
    finally{ setLoading(false); }
  };

  return (
    <>
      <div className="login-wrap">
        <form className="card" onSubmit={onSubmit}>
          <h1 className="title">Welcome back</h1>
          <p className="subtitle">Sign in with email and password</p>

          <label className="lbl">Email</label>
          <div className="input-row">
            <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="#7a5a48" strokeWidth="1.8">
              <path d="M4 6h16v12H4z"/><path d="M4 7l8 6 8-6"/>
            </svg>
            <input
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e)=> setEmail(e.target.value)}
              required
            />
          </div>

          <label className="lbl">Password</label>
          <div className="input-row">
            <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="#7a5a48" strokeWidth="1.8">
              <rect x="4" y="10" width="16" height="9" rx="2"/>
              <path d="M8 10V7a4 4 0 0 1 8 0v3"/>
            </svg>
            <input
              type={show ? "text" : "password"}
              placeholder="Enter password"
              value={pw}
              onChange={(e)=> setPw(e.target.value)}
              minLength={6}
              required
            />
          </div>

          <div className="row">
            <label style={{display:"flex", alignItems:"center", gap:8}}>
              <input type="checkbox" onChange={(e)=> setShow(e.target.checked)} />
              Show password
            </label>
            <button type="button" className="link">Forgot password?</button>
          </div>

          {err && <div className="help" style={{color:"#b00020"}}>{err}</div>}

          <button className="btn" disabled={loading}>
            {loading ? "Signing in…" : "Login"}
          </button>

          <div className="divider">or</div>

          <div className="socials">
            <button type="button" className="social">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#1877F2"><path d="M22 12a10 10 0 1 0-11.6 9.9v-7h-2.5V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.6V12h2.7l-.4 2.9h-2.3v7A10 10 0 0 0 22 12"/></svg>
              Continue
            </button>
            <button type="button" className="social">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#000"><path d="M21.35 11.1c0-.76-.07-1.52-.2-2.25H12v4.26h5.28c-.23 1.22-.94 2.3-2 3v2.5h3.22c1.88-1.73 2.95-4.28 2.95-7.51z"/><path d="M12 22c2.7 0 4.96-.9 6.62-2.43L15.4 17.1a6.46 6.46 0 0 1-3.4.94c-2.62 0-4.83-1.77-5.62-4.16H2.98v2.61A10 10 0 0 0 12 22z"/><path d="M6.38 13.88A6.01 6.01 0 0 1 6.02 12c0-.65.1-1.28.28-1.88V7.51H2.98a10 10 0 0 0 0 8.98l3.4-2.61z"/><path d="M12 6.38c1.47 0 2.8.5 3.85 1.49l2.88-2.88A10 10 0 0 0 12 2a10 10 0 0 0-9.02 5.51l3.4 2.61C7.17 8.15 9.38 6.38 12 6.38z"/></svg>
              Continue
            </button>
          </div>

          <p className="help">New here? <a className="link" href="/register">Create account</a></p>
        </form>
      </div>

      <AuthFooter />
    </>
  );
}
