import type { Metadata } from "next";
import Link from "next/link";

const title = "No charge was made. — Nextora Labs";
const description =
  "Your checkout was cancelled and nothing was billed. If that wasn't intentional, or you have a question about pricing, we're happy to help directly.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/cancel" },
  openGraph: { title, description, url: "/cancel" },
  twitter: { title, description },
};

export default function Cancel() {
  return (
    <main id="main">
      <section className="outcome">
        <div className="eclipse-soft"></div>
        <div className="w"><div className="outcome-in" data-r-fade="true">
          <div className="lb" style={{ justifyContent: "center" }} data-r-fade="true"><i></i><b>NX—T3</b> Checkout cancelled</div>
          <h1>No charge was made.</h1>
          <p>Your checkout was cancelled and nothing was billed. If that wasn&apos;t intentional, or you have a question about pricing, we&apos;re happy to help directly.</p>
          <div className="hcta" style={{ marginTop: 10 }}>
            <Link href="/services#pricing" className="btn b1">View pricing <span className="ar">→</span></Link>
            <Link href="/contact" className="btn b2">Contact us</Link>
          </div>
        </div></div>
      </section>
    </main>
  );
}
