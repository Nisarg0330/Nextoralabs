import type { Metadata } from "next";

const title = "Privacy Policy — Nextora Labs";
const description =
  "Privacy Policy for Nextora Labs, a software engineering company based in Toronto, Canada.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/privacy" },
  openGraph: { title, description, url: "/privacy" },
  twitter: { title, description },
};

export default function Privacy() {
  return (
    <main id="main">
      <section className="phero" style={{ paddingBottom: 20 }}>
        <div className="w">
          <div className="lb" data-r-fade="true"><i></i><b>NX—L1</b> Privacy Policy</div>
          <h1 className="h-el" data-r-fade="true" style={{ "--d": "80ms" } as React.CSSProperties}>Privacy Policy</h1>
          <p className="hsub h-el" data-r-fade="true" style={{ "--d": "180ms" } as React.CSSProperties}>Last updated August 2026.</p>
        </div>
      </section>
      <section><div className="w"><div className="prose" style={{ margin: 0, maxWidth: 760 }} data-r-fade="true">

        <p>Nextora Labs (&quot;we,&quot; &quot;us,&quot; &quot;our&quot;) operates nextoralabs.ca. This policy explains what information we collect, why, and how it&apos;s handled. We&apos;re a small, founder-led company based in Toronto, Canada, and we try to collect no more than we actually need.</p>

        <h2>Information we collect</h2>
        <p>When you use our contact form or book a call, we collect what you provide directly: name, email, company, and the details of your inquiry. Our website may also collect standard technical information automatically — browser type, general location at the country/region level, and pages visited — via server logs or analytics tools, where enabled.</p>

        <h2>How we use it</h2>
        <ul>
          <li>To respond to inquiries and discuss potential engagements</li>
          <li>To deliver services if we enter into an agreement together</li>
          <li>To improve this website and understand how it&apos;s used, in aggregate</li>
        </ul>
        <p>We do not sell personal information, and we do not share it with third parties except service providers who help us operate (such as email delivery or payment processing), under agreements that require them to protect it.</p>

        <h2>Data retention</h2>
        <p>We retain inquiry and client information for as long as reasonably necessary for the purposes above, or as required by law or accounting obligations.</p>

        <h2>Your rights</h2>
        <p>Under Canadian privacy law (PIPEDA) and applicable provincial legislation, you may request access to, correction of, or deletion of your personal information by contacting us at <a href="mailto:info@nextoralabs.com">info@nextoralabs.com</a>.</p>

        <h2>Cookies</h2>
        <p>This site may use minimal, privacy-respecting analytics cookies to understand aggregate traffic. No cross-site advertising trackers are used.</p>

        <h2>Contact</h2>
        <p>Questions about this policy can be sent to <a href="mailto:info@nextoralabs.com">info@nextoralabs.com</a>.</p>

        <hr />
        <p style={{ fontSize: 13, color: "var(--t3)" }}>This is a general-purpose draft policy provided for a template website and has not been reviewed by a lawyer. Consult qualified legal counsel before relying on it for a live business.</p>

      </div></div></section>
    </main>
  );
}
