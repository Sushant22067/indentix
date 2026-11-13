import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { LiveCaseFrame } from "@/components/live-case-frame";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function CaseStudy({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const currentIndex = projects.findIndex((x) => x.slug === slug);
  if (currentIndex === -1) notFound();

  const p = projects[currentIndex];
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <main className="page wrap case">
      <Link href="/work" className="back">
        ← ALL WORK
      </Link>

      <p className="eyebrow">
        {p.type} / {p.year}
      </p>

      <h1>
        {p.name}
        <span className="red-dot">.</span>
      </h1>

      <p className="case-lead">{p.description}</p>

      {/* Hero Showcase: Live scalable website if URL exists, otherwise original typographic card */}
      <div className={`case-art art-${p.tone}`}>
        {p.url ? (
          <LiveCaseFrame url={p.url} name={p.name} />
        ) : (
          <div className="case-window">
            <small>{p.note}</small>
            <strong>
              {p.line.split("\n").map((x) => (
                <span key={x}>{x}</span>
              ))}
            </strong>
            <b>{p.name.toUpperCase()}</b>
          </div>
        )}
        <span className="case-stamp">
          INDENTIX
          <br />
          {p.url ? "LIVE BUILD" : "SELECTED WORK"}
        </span>
      </div>

      {/* Case Breakdown */}
      <div className="case-info">
        <div>
          <p className="eyebrow">THE THINKING</p>
          <h2>
            Built around
            <br />
            <em>the right idea.</em>
          </h2>
        </div>

        <div>
          <p>{p.detail}</p>

          {p.deliverables && p.deliverables.length > 0 && (
            <ul
              style={{
                paddingLeft: "1.1rem",
                margin: "1.25rem 0",
                display: "grid",
                gap: "0.45rem",
              }}
            >
              {p.deliverables.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}

          <p>
            <b>Focus:</b> {p.services.join(" · ")}
          </p>

          {p.stack && p.stack.length > 0 && (
            <p>
              <b>Stack:</b> {p.stack.join(" · ")}
            </p>
          )}

          <p>
            <b>Project type:</b> {p.tag}
          </p>

          {p.url ? (
            <a
              className="btn btn-white"
              href={p.url}
              target="_blank"
              rel="noreferrer"
            >
              Visit live website ↗
            </a>
          ) : (
            <p className="fine-print">
              Live project link will be added when the deployment is ready.
            </p>
          )}
        </div>
      </div>

      <Link className="next-link" href={`/work/${nextProject.slug}`}>
        Next: {nextProject.name} ↗
      </Link>
    </main>
  );
}