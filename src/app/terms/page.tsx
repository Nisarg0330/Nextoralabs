import type { Metadata } from "next";

const title = "Terms & Conditions — Nextora Labs";
const description =
  "Terms & Conditions for Nextora Labs, a software engineering company based in Toronto, Canada.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/terms" },
  openGraph: { title, description, url: "/terms" },
  twitter: { title, description },
};

export default function Terms() {
  return (
    <main id="main">
      <section className="phero" style={{ paddingBottom: 20 }}>
        <div className="w">
          <div className="lb" data-r-fade="true"><i></i><b>NX—L2</b> Terms &amp; Conditions</div>
          <h1 className="h-el" data-r-fade="true" style={{ "--d": "80ms" } as React.CSSProperties}>Terms &amp; Conditions</h1>
          <p className="hsub h-el" data-r-fade="true" style={{ "--d": "180ms" } as React.CSSProperties}>Last updated August 2026.</p>
        </div>
      </section>
      <section><div className="w"><div className="prose" style={{ margin: 0, maxWidth: 760 }} data-r-fade="true">

        <p>These Terms and Conditions govern your use of nextoralabs.ca and any services described on it. By using this site or engaging Nextora Labs for services, you agree to the terms below.</p>

        <h2>Services</h2>
        <p>Nextora Labs provides custom software engineering services, including web development, mobile development, AI and automation, product design, and MVP development. The specific scope, timeline, and cost of any engagement are defined in a separate written agreement between Nextora Labs and the client before work begins.</p>

        <h2>The 30-day trial</h2>
        <p>New engagements typically include a 30-day trial period consisting of a working preview on a dedicated trial domain. Unless otherwise agreed in writing, the trial period carries no long-term commitment; either party may choose not to proceed beyond it. Specific terms for a given engagement are set out in that engagement&apos;s agreement, which takes precedence over this general description.</p>

        <h2>Payments</h2>
        <p>Where online payment is used, transactions are processed by Stripe, a third-party payment processor. Nextora Labs does not store your full payment card details. Pricing shown on this site is indicative and in Canadian dollars unless stated otherwise; final pricing for an engagement is confirmed in a written proposal.</p>

        <h2>Intellectual property</h2>
        <p>Unless otherwise agreed in a signed engagement agreement, work product delivered as part of a completed and paid engagement transfers to the client upon final payment. Nextora Labs retains the right to reuse general knowledge, techniques, and non-confidential approaches developed during an engagement.</p>

        <h2>Limitation of liability</h2>
        <p>Nextora Labs provides services on a professional, best-efforts basis. To the maximum extent permitted by law, Nextora Labs is not liable for indirect, incidental, or consequential damages arising from use of this website or from services rendered, beyond the amount paid for the specific engagement in question.</p>

        <h2>Governing law</h2>
        <p>These terms are governed by the laws of the Province of Ontario and the federal laws of Canada applicable therein.</p>

        <h2>Changes</h2>
        <p>We may update these terms from time to time; the current version will always be posted at this URL.</p>

        <hr />
        <p style={{ fontSize: 13, color: "var(--t3)" }}>This is a general-purpose draft provided for a template website and has not been reviewed by a lawyer. Consult qualified legal counsel before relying on it for a live business.</p>

      </div></div></section>
    </main>
  );
}
