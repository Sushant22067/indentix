import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/project-card";

export const metadata = { title: "Work — Indentix Studio" };

export default function Work() {
  const shippedProjects = projects.filter((p) => Boolean(p.url));
  const conceptProjects = projects.filter((p) => !p.url);

  return (
    <main className="page wrap">
      <div className="page-heading">
        <p className="eyebrow">SHIPPED WORK / 2026</p>
        <h1>
          Real builds with
          <br />
          <em>a point of view.</em>
        </h1>
        <p>
          Production websites, full-stack platforms, and interactive digital
          experiences we&apos;ve designed, engineered, and launched.
        </p>
      </div>

      {/* Primary Section: Live Shipped Projects */}
      <div className="work-grid">
        {shippedProjects.map((p, i) => (
          <ProjectCard key={p.slug} project={p} index={i} />
        ))}
      </div>

      {/* Optional Secondary Section: Only renders if you keep any concept projects */}
      {conceptProjects.length > 0 && (
        <section style={{ marginTop: "6rem" }}>
          <div className="page-heading" style={{ marginBottom: "2.5rem" }}>
            <p className="eyebrow">LAB & CONCEPTS</p>
            <h2>
              Design explorations
              <br />
              <em>&amp; prototypes.</em>
            </h2>
          </div>
          <div className="work-grid">
            {conceptProjects.map((p, i) => (
              <ProjectCard key={p.slug} project={p} index={i} />
            ))}
          </div>
        </section>
      )}

      <p className="fine-print" style={{ marginTop: "3rem" }}>
        Every shipped project links directly to its live production deployment.
        Concept explorations are separated above.
      </p>
    </main>
  );
}