import type { Metadata } from "next";
import Link from "next/link";

const title = "Thanks — we've got it. — Nextora Labs";
const description =
  "Your message has reached us directly. We reply to every inquiry within one business day, usually sooner.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/thank-you" },
  openGraph: { title, description, url: "/thank-you" },
  twitter: { title, description },
};

export default function ThankYou() {
  return (
    <main id="main">
      <section className="outcome">
        <div className="eclipse-soft"></div>
        <div className="w"><div className="outcome-in" data-r-fade="true">
          <div className="lb" style={{ justifyContent: "center" }} data-r-fade="true"><i></i><b>NX—T1</b> Message received</div>
          <h1>Thanks — we&apos;ve got it.</h1>
          <p>Your message has reached us directly. We reply to every inquiry within one business day, usually sooner.</p>
          <div className="hcta" style={{ marginTop: 10 }}>
            <Link href="/" className="btn b1">Back to home <span className="ar">→</span></Link>
            <Link href="/blog" className="btn b2">Read our writing</Link>
          </div>
        </div></div>
      </section>
    </main>
  );
}
