"use client";

import { useState } from "react";

const STUDIO_EMAIL = "indentixstudio@gmail.com";

export function ContactForm() {
  const [status, setStatus] = useState("");
  const [copied, setCopied] = useState(false);

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const name = String(f.get("name") || "").trim();
    const email = String(f.get("email") || "").trim();
    const brief = String(f.get("brief") || "").trim();
    const service = String(f.get("service") || "Not specified");

    if (!name || !email || !brief) {
      setStatus("Please fill in your name, email and project brief.");
      return;
    }

    const subject = encodeURIComponent(`Project enquiry — ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nService: ${service}\n\nProject brief:\n${brief}`
    );

    window.location.href = `mailto:${STUDIO_EMAIL}?subject=${subject}&body=${body}`;
    setStatus(
      `Your email app should open with your message ready. If it doesn't, email ${STUDIO_EMAIL} directly.`
    );
  }

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(STUDIO_EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setStatus(`Email us directly at ${STUDIO_EMAIL}`);
    }
  }

  return (
    <form className="form" onSubmit={submit}>
      <label>
        Your name
        <input name="name" placeholder="What should we call you?" required />
      </label>

      <label>
        Email address
        <input
          name="email"
          type="email"
          placeholder="you@company.com"
          required
        />
      </label>

      <label>
        What are you looking for?
        <select
          name="service"
          defaultValue="Website design & development"
        >
          <option>Website design &amp; development</option>
          <option>Custom portal / web app</option>
          <option>E-commerce website</option>
          <option>Brand &amp; creative direction</option>
          <option>Website care &amp; growth</option>
          <option>Something else</option>
        </select>
      </label>

      <label>
        Give us the short version
        <textarea
          name="brief"
          rows={5}
          placeholder="The idea, the goal, the big dream…"
          required
        />
      </label>

      {status && <p className="form-status">{status}</p>}

      <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", alignItems: "center" }}>
        <button className="btn btn-red" type="submit">
          Send the brief <b>↗</b>
        </button>

        <button
          type="button"
          onClick={copyEmail}
          className="btn btn-white"
        >
          {copied ? "Copied email ✓" : `Copy ${STUDIO_EMAIL}`}
        </button>
      </div>

      <small>
        Opens your email app with a prepared message, or copy{" "}
        <a
          href={`mailto:${STUDIO_EMAIL}`}
          style={{ textDecoration: "underline", textUnderlineOffset: "3px" }}
        >
          {STUDIO_EMAIL}
        </a>{" "}
        to send directly.
      </small>
    </form>
  );
}