import type { Metadata } from "next";
import Link from "next/link";

const title = "Choosing a tech stack you won't regret in a year — Nextora Labs";
const description =
  "The frameworks Nextora Labs reaches for by default, and the three questions that actually change the answer when choosing a technology stack.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/blog/choosing-a-tech-stack" },
  openGraph: { title, description, url: "/blog/choosing-a-tech-stack" },
  twitter: { title, description },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Choosing a tech stack you won't regret in a year",
  author: { "@type": "Person", name: "Arpit Barot" },
  publisher: { "@type": "Organization", name: "Nextora Labs" },
  datePublished: "2026-06-05",
  dateModified: "2026-06-05",
  image: "https://nextoralabs.ca/assets/img/og-image.png",
};

export default function ChoosingATechStack() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main id="main">
        <section className="article-head">
          <div className="w">
            <div className="wc" style={{ marginBottom: 18 }}>ENGINEERING</div>
            <h1>Choosing a tech stack you won&apos;t regret in a year</h1>
            <div className="article-meta">
              <div className="a-author">
                <img src="/img/founder-arpit.jpg" alt="Arpit Barot" />
                <div><div className="nm">Arpit Barot</div><div className="rl">Co-founder</div></div>
              </div>
              <span className="a-dot">·</span>
              <span className="a-meta-mono">JUN 2026</span>
              <span className="a-dot">·</span>
              <span className="a-meta-mono">7 MIN READ</span>
            </div>
          </div>
        </section>

        <article className="prose">
          <p>Stack decisions get treated like brand decisions — a statement about who you are. That&apos;s backwards. A stack is a set of trade-offs you&apos;re agreeing to live with, and the only question worth asking is whether those trade-offs match the problem you actually have.</p>

          <h2>Our defaults, and why</h2>
          <p>Left alone, we reach for <strong>React</strong> and <strong>Next.js</strong> on the web, <strong>TypeScript</strong> everywhere, <strong>Node.js</strong> for services that don&apos;t need something else, and <strong>Postgres</strong> until there&apos;s a specific reason it won&apos;t do. Not because these are the best tools in the abstract — there is no such thing — but because they&apos;re boring in the specific way that matters: well-documented, easy to hire for, and unlikely to disappear in three years.</p>

          <h2>The three questions that actually change our answer</h2>
          <h3>1. Who maintains this after us?</h3>
          <p>If you have (or plan to hire) a team that already knows a different stack well, matching it usually beats our default. A slightly-worse-fit technology your team already understands beats a theoretically-better one nobody can debug at 2am.</p>
          <h3>2. What&apos;s the actual load shape?</h3>
          <p>Most products never come close to needing the scalability story vendors sell. We size for the traffic you&apos;ll realistically have in eighteen months, not the traffic you&apos;d have if everything went perfectly — over-provisioning for a hypothetical is its own kind of technical debt.</p>
          <h3>3. What does &quot;wrong&quot; cost here?</h3>
          <p>A stack choice for a payments system and a stack choice for an internal admin tool are different decisions, even if the traffic looks similar. Where the cost of a mistake is high, we lean toward boring and battle-tested. Where it&apos;s low, we&apos;re more willing to try something newer.</p>

          <blockquote>The best stack is the one whose failure modes you already understand.</blockquote>

          <h2>What we actively avoid</h2>
          <ul>
            <li>Adopting something because it was the top post on a forum last month</li>
            <li>Microservices for a team of two, before there&apos;s a real reason to split</li>
            <li>A framework with a maintainer count you could list from memory</li>
          </ul>

          <pre><code dangerouslySetInnerHTML={{ __html:
`<span class="tok-cm">// the question we actually ask, most of the time</span>
<span class="tok-kw">const</span> choice = pickStack({
  teamFamiliarity: <span class="tok-str">'high'</span>,
  expectedLoad:    <span class="tok-str">'moderate'</span>,
  costOfMistake:   <span class="tok-str">'high'</span>,
});
<span class="tok-cm">// -&gt; boring, well-documented, widely hireable</span>`
          }} /></pre>

          <h2>The short version</h2>
          <p>A tech stack is a set of trade-offs, not an identity. Match it to who&apos;ll maintain it, what load it&apos;ll actually see, and what a mistake would cost — and you&apos;ll rarely need to regret it a year later.</p>
        </article>

        <div className="share-row">
          <Link href="/blog" className="lnk">← All notes</Link>
          <div style={{ display: "flex", gap: 16 }}>
            <a href="https://twitter.com/intent/tweet?url=https://nextoralabs.ca" className="lnk" target="_blank" rel="noopener">Share on X</a>
            <a href="https://www.linkedin.com/sharing/share-offsite/?url=https://nextoralabs.ca" className="lnk" target="_blank" rel="noopener">Share on LinkedIn</a>
          </div>
        </div>

        <section className="related">
          <div className="w">
            <div className="lb" style={{ marginBottom: 40 }}><i></i><b>NX—B3</b> Related reading</div>
            <Link href="/blog/what-makes-an-mvp-worth-building" style={{ textDecoration: "none", color: "inherit" }}><div className="wr" data-r-fade="true">
              <div className="wc">Product</div>
              <div><div className="wt">What actually makes an MVP worth building</div><p className="wx">How we scope the middle ground between too minimal and not viable.</p></div>
              <div className="wm">6 MIN · JUL 26</div></div></Link>
            <Link href="/blog/where-ai-automation-saves-time" style={{ textDecoration: "none", color: "inherit" }}><div className="wr" data-r-fade="true">
              <div className="wc">AI</div>
              <div><div className="wt">Where AI automation actually saves teams time</div><p className="wx">Which workflows are worth automating first — and which aren&apos;t ready yet.</p></div>
              <div className="wm">5 MIN · JUN 26</div></div></Link>
          </div>
        </section>
      </main>
    </>
  );
}
