"use client";

import { useEffect, useRef, useState } from "react";

export function LiveCaseFrame({
  url,
  name,
}: {
  url: string;
  name: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.75);
  const [interactive, setInteractive] = useState(false);

  const displayHost = url.replace(/^https?:\/\//, "").replace(/\/$/, "");

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const updateScale = () => {
      const width = el.offsetWidth;
      if (width > 0) {
        setScale(width / 1280);
      }
    };

    updateScale();
    const observer = new ResizeObserver(updateScale);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="case-window"
      style={{
        padding: 0,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        width: "100%",
        maxWidth: "960px",
      }}
    >
      {/* Browser Bar matching your .art-browser aesthetic */}
      <div
        className="browser-top"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0.6rem 0.9rem",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.35rem" }}>
          <i />
          <i />
          <i />
          <span style={{ marginLeft: "0.45rem" }}>{displayHost}</span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "0.85rem" }}>
          <button
            type="button"
            onClick={() => setInteractive((v) => !v)}
            style={{
              background: "transparent",
              border: "1px solid currentColor",
              borderRadius: "999px",
              padding: "0.15rem 0.6rem",
              fontSize: "0.7rem",
              cursor: "pointer",
              color: "inherit",
            }}
          >
            {interactive ? "Lock scroll" : "Interact live"}
          </button>

          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            style={{ fontSize: "0.75rem", textDecoration: "underline" }}
          >
            Open ↗
          </a>
        </div>
      </div>

      {/* Edge-to-edge Scaled Live Viewport */}
      <div
        ref={containerRef}
        onClick={() => {
          if (!interactive) setInteractive(true);
        }}
        style={{
          position: "relative",
          width: "100%",
          height: "520px",
          overflow: "hidden",
          cursor: interactive ? "auto" : "pointer",
        }}
      >
        <iframe
          src={url}
          title={`${name} live website`}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "1280px",
            height: `${Math.ceil(520 / scale)}px`,
            border: "0",
            transform: `scale(${scale})`,
            transformOrigin: "top left",
            pointerEvents: interactive ? "auto" : "none",
            display: "block",
          }}
        />
      </div>
    </div>
  );
}