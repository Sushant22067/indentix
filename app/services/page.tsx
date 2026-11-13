import Link from "next/link";

export const metadata = { title: "Services — Indentix Studio" };

const items = [
  [
    "01",
    "Brand & creative direction",
    "Find the character of your brand. We shape the visual language, typography, color system, and tone that make your digital presence unmistakable.",
  ],
  [
    "02",
    "Website design",
    "Thoughtful layouts, confident typography, and intuitive user journeys. Designed around how real customers browse, decide, and take action.",
  ],
  [
    "03",
    "Web & full-stack development",
    "Fast, responsive Next.js & React websites engineered for real-world speed, clean SEO, and rock-solid reliability from day one.",
  ],
  [
    "04",
    "Custom portals & web apps",
    "Beyond brochure sites—student dashboards, booking flows, test engines, interactive tools, and database-backed platforms tailored to your workflow.",
  ],
  [
    "05",
    "E-commerce storefronts",
    "Product-led online stores with clear discovery, fast mobile checkout, and a shopping experience that turns visitors into repeat buyers.",
  ],
  [
    "06",
    "Website care & growth",
    "Launch is just the start. We handle updates, feature rollouts, performance tuning, and ongoing support as your business scales.",
  ],
];

export default function Services() {
  return (
    <main className="page wrap">
      <div className="page-heading">
        <p className="eyebrow">WHAT WE DO / THE TOOLKIT</p>
        <h1>
          Good ideas.
          <br />
          <em>Properly made.</em>
        </h1>
        <p>
          Sharp design and full-stack engineering under one roof. Pick a single
          deliverable or bring us an idea from scratch—we&apos;ll help map out
          and build the rest.
        </p>
      </div>

      <div className="service-list">
        {items.map(([n, t, d]) => (
          <article key={n}>
            <span>{n}</span>
            <h2>{t}</h2>
            <p>{d}</p>
            <b>↗</b>
          </article>
        ))}
      </div>

      <div className="page-cta">
        <div>
          <h2>Not sure what you need?</h2>
          <p className="fine-print" style={{ marginTop: "0.4rem" }}>
            Write to us directly at{" "}
            <a
              href="mailto:indentixstudio@gmail.com"
              style={{ textDecoration: "underline", textUnderlineOffset: "3px" }}
            >
              indentixstudio@gmail.com
            </a>{" "}
            or start a quick brief.
          </p>
        </div>

        <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
          <Link className="btn btn-red" href="/contact">
            Talk it through ↗
          </Link>
          <a
            className="btn btn-white"
            href="mailto:indentixstudio@gmail.com?subject=Project%20Inquiry%20%E2%80%94%20Indentix%20Studio"
          >
            Email us ↗
          </a>
        </div>
      </div>
    </main>
  );
}