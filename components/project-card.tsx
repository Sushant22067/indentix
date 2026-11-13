"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

function ScaledLiveFrame({ url, title }: { url: string; title: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.5);

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
      ref={containerRef}
      className="browser-body"
      style={{
        padding: 0,
        overflow: "hidden",
        position: "relative",
        minHeight: "260px",
      }}
    >
      <iframe
        src={url}
        title={`${title} live preview`}
        loading="lazy"
        tabIndex={-1}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "1280px",
          height: `${Math.ceil(900 / scale)}px`,
          border: "0",
          transform: `scale(${scale})`,
          transformOrigin: "top left",
          pointerEvents: "none",
          display: "block",
        }}
      />
    </div>
  );
}

export function ProjectCard({
  project,
  index = 0,
}: {
  project: any;
  index?: number;
}) {
  const displayHost = project.url
    ? project.url.replace(/^https?:\/\//, "").replace(/\/$/, "")
    : `${project.name.toLowerCase().replace(/\s+/g, "")}.studio`;

  return (
    <article className={`work-card ${index % 2 ? "offset" : ""}`}>
      <Link
        href={`/work/${project.slug}`}
        className={`work-art art-${project.tone}`}
      >
        <span className="art-index">
          0{index + 1} / {project.url ? "LIVE PROJECT" : "SELECTED WORK"}
        </span>

        <div className="art-browser">
          <div className="browser-top">
            <i />
            <i />
            <i />
            <span>{displayHost}</span>
          </div>

          {project.url ? (
            <ScaledLiveFrame url={project.url} title={project.name} />
          ) : project.coverImage ? (
            <div
              className="browser-body"
              style={{ padding: 0, overflow: "hidden", position: "relative" }}
            >
              <img
                src={project.coverImage}
                alt={`${project.name} website preview`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "top center",
                  display: "block",
                }}
              />
            </div>
          ) : (
            <div className="browser-body">
              <small>{project.note}</small>
              <strong>
                {project.line.split("\n").map((x: string) => (
                  <span key={x}>{x}</span>
                ))}
              </strong>
              <em>{project.name.toUpperCase()}</em>
            </div>
          )}
        </div>

        <span className="art-arrow">↗</span>
      </Link>

      <div className="work-meta">
        <div>
          <span>{project.type}</span>
          <h3>
            <Link href={`/work/${project.slug}`}>{project.name}</Link>
          </h3>
        </div>

        <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="fine-print"
              style={{
                textDecoration: "underline",
                textUnderlineOffset: "3px",
                marginRight: "0.25rem",
              }}
            >
              Live ↗
            </a>
          )}
          <Link
            href={`/work/${project.slug}`}
            className="round-arrow"
            aria-label={`View ${project.name}`}
          >
            ↗
          </Link>
        </div>
      </div>

      <p>{project.description}</p>
    </article>
  );
}