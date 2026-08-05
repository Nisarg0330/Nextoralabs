import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

const title = "Writing — Nextora Labs";
const description =
  "Engineering and product notes from Nextora Labs — a founder-led software engineering company in Toronto, Canada.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/blog" },
  openGraph: { title, description, url: "/blog" },
  twitter: { title, description },
};

export default function Blog() {
  return (
    <>
      <main id="main">
        <section className="phero" style={{ paddingBottom: 60 }}>
          <div className="eclipse"></div>
          <div className="w">
            <div className="lb" data-r-fade="true"><i></i><b>NX—B1</b> Writing</div>
            <h1 className="h-el" data-r-fade="true" style={{ "--d": "80ms" } as React.CSSProperties}>Notes on building software.</h1>
            <p className="hsub h-el" data-r-fade="true" style={{ "--d": "180ms" } as React.CSSProperties}>Short, specific pieces on the engineering and product decisions we run into. No listicles, no &quot;10 tips&quot; — just what we&apos;ve actually found true.</p>
            <div className="phero-meta h-el" data-r-fade="true" style={{ "--d": "260ms" } as React.CSSProperties}>
              <div className="bc"><Link href="/">Home</Link><span>/</span>Writing</div>
            </div>
          </div>
        </section>

        <section className="wrt" style={{ paddingTop: 0 }}>
          <div className="w">
            <div className="filter-row" id="filterRow" data-r-fade="true">
              <button className="chip on" data-f="all">All</button>
              <button className="chip" data-f="Product">Product</button>
              <button className="chip" data-f="AI">AI</button>
              <button className="chip" data-f="Engineering">Engineering</button>
            </div>

            <Link href="/blog/what-makes-an-mvp-worth-building" style={{ textDecoration: "none", color: "inherit" }}>
              <div className="feat" data-cat="Product" data-r-fade="true">
                <div className="wc">Product</div>
                <div><h2>What actually makes an MVP worth building</h2>
                  <p>Most &quot;minimum viable products&quot; are either too minimal to prove anything or not viable enough to matter. Here&apos;s how we scope the middle ground, and the one question every MVP should be built to answer.</p></div>
                <div className="wm">6 MIN · JUL 2026</div>
              </div>
            </Link>

            <div id="blogList">
              <Link href="/blog/where-ai-automation-saves-time" style={{ textDecoration: "none", color: "inherit" }}>
                <div className="wr" data-cat="AI" data-r-fade="true">
                  <div className="wc">AI</div>
                  <div><div className="wt">Where AI automation actually saves teams time</div><p className="wx">A practical look at which workflows are worth automating first — and which aren&apos;t ready yet.</p></div>
                  <div className="wm">5 MIN · JUN 2026</div>
                </div>
              </Link>
              <Link href="/blog/choosing-a-tech-stack" style={{ textDecoration: "none", color: "inherit" }}>
                <div className="wr" data-cat="Engineering" data-r-fade="true">
                  <div className="wc">Engineering</div>
                  <div><div className="wt">Choosing a tech stack you won&apos;t regret in a year</div><p className="wx">The frameworks we reach for by default, and the questions that change our answer.</p></div>
                  <div className="wm">7 MIN · JUN 2026</div>
                </div>
              </Link>
            </div>
            <div id="emptyState" style={{ display: "none", padding: "60px 0", textAlign: "center", color: "var(--t3)", fontFamily: "'JetBrains Mono',monospace", fontSize: 13 }}>
              No posts in this category yet.
            </div>
          </div>
        </section>

        <section className="cta"><div className="eclipse-soft"></div>
          <div className="w"><div className="cta-in" data-r-fade="true">
            <div className="lb dk" style={{ justifyContent: "center" }} data-r-fade="true"><i></i><b>NX—B2</b> Next step</div>
            <h2>Have an idea? Let&apos;s build it together.</h2>
            <p>One conversation is enough for both of us to know whether this is a fit.</p>
            <div><Link href="/contact" className="btn b3" style={{ padding: "18px 36px", fontSize: 15 }}>Start a conversation <span className="ar">→</span></Link></div>
          </div></div>
        </section>
      </main>
      <Script src="/js/blog-filter.js" strategy="afterInteractive" />
    </>
  );
}
