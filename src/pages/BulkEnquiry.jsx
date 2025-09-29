import React, { useState } from "react";
import "../styles/bulk.css";
import AuthFooter from "../components/AuthFooter";

export default function BulkEnquiry(){
  const [form, setForm] = useState({
    company: "", name: "", email: "", phone: "", purpose: ""
  });

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    // TODO: hook to backend or Google Sheet
    alert("Thanks! We’ll reach out shortly.");
  };

  return (
    <main className="bulk-page">
      <div className="container">
        <h1 className="bulk-title">Bulk Order Enquiry</h1>

        <form className="bulk-form" onSubmit={submit}>
          <input
            className="input"
            type="text" name="company" placeholder="Company Name"
            value={form.company} onChange={update} required
          />
          <input
            className="input"
            type="text" name="name" placeholder="Your Name"
            value={form.name} onChange={update} required
          />
          <input
            className="input"
            type="email" name="email" placeholder="Email"
            value={form.email} onChange={update} required
          />

          <div className="phone-row">
            <span className="flag">🇮🇳</span>
            <input
              className="input phone" type="tel" name="phone"
              placeholder="+91 9XXXXXXXXX" value={form.phone}
              onChange={update} required
            />
          </div>

          <fieldset className="purpose">
            <legend>Purpose Of Enquiry</legend>
            {[
              "Festive gifting",
              "Wholesale/Retail",
              "Wedding gifting",
              "Corporate gifting",
              "Personal gifting",
              "Other",
            ].map(v => (
              <label key={v} className="radio">
                <input
                  type="radio" name="purpose" value={v}
                  checked={form.purpose === v}
                  onChange={update}
                  required
                />
                <span>{v}</span>
              </label>
            ))}
          </fieldset>

          <button type="submit" className="bulk-submit">Submit</button>
          <p className="note">
            By signing up, you agree to receive marketing messages at the phone number
            or email provided. Msg and data rates may apply.
          </p>
        </form>
      </div>

      <AuthFooter />
    </main>
  );
}
