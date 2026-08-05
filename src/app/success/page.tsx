import type { Metadata } from "next";
import Link from "next/link";

const title = "You're all set. — Nextora Labs";
const description =
  "Your payment went through successfully. A confirmation has been sent to your email, and we'll follow up shortly with next steps.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/success" },
  openGraph: { title, description, url: "/success" },
  twitter: { title, description },
};

export default function Success() {
  return (
    <main id="main">
      <section className="outcome">
        <div className="eclipse-soft"></div>
        <div className="w"><div className="outcome-in" data-r-fade="true">
          <div className="lb" style={{ justifyContent: "center" }} data-r-fade="true"><i></i><b>NX—T2</b> Payment confirmed</div>
          <h1>You&apos;re all set.</h1>
          <p>Your payment went through successfully. A confirmation has been sent to your email, and we&apos;ll follow up shortly with next steps.</p>
          <div className="hcta" style={{ marginTop: 10 }}>
            <Link href="/" className="btn b1">Back to home <span className="ar">→</span></Link>
            <Link href="/contact" className="btn b2">Contact us</Link>
          </div>
        </div></div>
      </section>
    </main>
  );
}
