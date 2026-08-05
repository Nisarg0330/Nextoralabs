import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found — Nextora Labs",
  description: "This page could not be found.",
};

export default function NotFound() {
  return (
    <main id="main">
      <section className="outcome">
        <div className="eclipse-soft"></div>
        <div className="w"><div className="outcome-in" data-r-fade="true">
          <div className="lb" style={{ justifyContent: "center" }} data-r-fade="true"><i></i><b>NX—404</b> Not found</div>
          <h1>This page doesn&apos;t exist.</h1>
          <p>The link may be outdated, or the page may have moved. Here&apos;s how to get back on track.</p>
          <div className="hcta" style={{ marginTop: 10 }}>
            <Link href="/" className="btn b1">Back to home <span className="ar">→</span></Link>
            <Link href="/contact" className="btn b2">Contact us</Link>
          </div>
        </div></div>
      </section>
    </main>
  );
}
