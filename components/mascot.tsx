"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const MESSAGES = [
  "Psst… nice to meet you.",
  "Keep going. The real builds are below.",
  "Have a project? Let's make noise ↗",
];

export function Mascot() {
  const [y, setY] = useState(0);
  const [talk, setTalk] = useState(false);

  useEffect(() => {
    const fn = () => setY(window.scrollY);
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    if (!talk) return;
    const timer = setTimeout(() => setTalk(false), 5000);
    return () => clearTimeout(timer);
  }, [talk]);

  const msgIndex = Math.min(Math.floor(y / 950), MESSAGES.length - 1);
  const isFinalPrompt = msgIndex === MESSAGES.length - 1;

  return (
    <div
      className="mascot-wrap"
      style={{ transform: `translateY(${Math.min(y * 0.1, 190)}px)` }}
    >
      {talk && (
        <div className="mascot-bubble">
          {isFinalPrompt ? (
            <Link
              href="/contact"
              onClick={() => setTalk(false)}
              style={{ color: "inherit", textDecoration: "none" }}
            >
              {MESSAGES[msgIndex]}
            </Link>
          ) : (
            MESSAGES[msgIndex]
          )}
        </div>
      )}

      <button
        type="button"
        className="mascot"
        onClick={() => setTalk((prev) => !prev)}
        aria-label="Say hello"
        aria-expanded={talk}
      >
        <span className="mascot-shine" />
        <span className="eyes">
          <i />
          <i />
        </span>
        <span className="mouth" />
      </button>
    </div>
  );
}