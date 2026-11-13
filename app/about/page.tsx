import Link from "next/link";

export const metadata = { title: "About — Indentix Studio" };

export default function About() {
  return (
    <main className="page wrap">
      <div className="page-heading">
        <p className="eyebrow">THE PEOPLE &amp; THE POINT OF VIEW</p>
        <h1>
          Curious minds.
          <br />
          <em>Useful mischief.</em>
        </h1>
        <p>
          Indentix Studio exists for one reason: to build digital products and
          websites that have a little more thought, a little more character, and
          a lot more real-world utility.
        </p>
      </div>

      <section className="about-manifesto">
        <div className="about-mark">
          IX<span>✳</span>
        </div>
        <div>
          <p className="eyebrow">NOT A FACTORY. A STUDIO.</p>
          <h2>
            We believe the web
            <br />
            can still surprise you.
          </h2>
          <p>
            Good websites should do more than look current. They should make a
            business easier to understand, a product easier to use, and a
            brand harder to forget—backed by clean, full-stack engineering that
            holds up in production. That&apos;s the standard we build to.
          </p>
        </div>
      </section>

      <div className="values">
        <article>
          <b>01</b>
          <h3>Curiosity</h3>
          <p>
            We understand the real problem and workflow before jumping into
            pixels or code.
          </p>
        </article>

        <article>
          <b>02</b>
          <h3>Craft</h3>
          <p>
            Typography, motion, and interface details matter—and so does the
            architecture beneath them.
          </p>
        </article>

        <article>
          <b>03</b>
          <h3>Honesty</h3>
          <p>
            Clear scope, realistic timelines, live working demos, and zero
            made-up case studies.
          </p>
        </article>
      </div>

      <div className="page-cta">
        <div>
          <h2>
            Want to make
            <br />
            something memorable?
          </h2>
          <p className="fine-print" style={{ marginTop: "0.4rem" }}>
            Reach us directly at{" "}
            <a
              href="mailto:indentixstudio@gmail.com"
              style={{ textDecoration: "underline", textUnderlineOffset: "3px" }}
            >
              indentixstudio@gmail.com
            </a>
          </p>
        </div>

        <Link className="btn btn-red" href="/contact">
          Say hello ↗
        </Link>
      </div>
    </main>
  );
}