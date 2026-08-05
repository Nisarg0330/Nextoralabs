import type { Metadata } from "next";
import Link from "next/link";

const title = "Where AI automation actually saves teams time — Nextora Labs";
const description =
  "A practical look at which workflows are worth automating with AI first, which aren't ready yet, and how Nextora Labs designs for the moments a model gets it wrong.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/blog/where-ai-automation-saves-time" },
  openGraph: { title, description, url: "/blog/where-ai-automation-saves-time" },
  twitter: { title, description },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Where AI automation actually saves teams time",
  author: { "@type": "Person", name: "Nisarg Patel" },
  publisher: { "@type": "Organization", name: "Nextora Labs" },
  datePublished: "2026-06-20",
  dateModified: "2026-06-20",
  image: "https://nextoralabs.ca/assets/img/og-image.png",
};

export default function WhereAiAutomationSavesTime() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main id="main">
        <section className="article-head">
          <div className="w">
            <div className="wc" style={{ marginBottom: 18 }}>AI</div>
            <h1>Where AI automation actually saves teams time</h1>
            <div className="article-meta">
              <div className="a-author">
                <img src="/img/founder-nisarg.jpg" alt="Nisarg Patel" />
                <div><div className="nm">Nisarg Patel</div><div className="rl">Co-founder</div></div>
              </div>
              <span className="a-dot">·</span>
              <span className="a-meta-mono">JUN 2026</span>
              <span className="a-dot">·</span>
              <span className="a-meta-mono">5 MIN READ</span>
            </div>
          </div>
        </section>

        <article className="prose">
          <p>We get asked to &quot;add AI&quot; to a product roughly as often as we get asked to fix a specific, named problem. Those are different requests, and only one of them reliably produces something worth shipping.</p>

          <h2>Start from the workflow, not the model</h2>
          <p>The automation work that actually saves time shares one trait: it replaces a specific, repeated, well-defined human task — not a vague category of &quot;make things smarter.&quot; Before we touch a model, we ask what a person currently does by hand, how often, and what it costs them in time or errors. If we can&apos;t answer that concretely, we don&apos;t have a project yet.</p>

          <h3>Good candidates we&apos;ve seen</h3>
          <ul>
            <li>Classifying and routing inbound support requests that currently get triaged manually</li>
            <li>Extracting structured data from unstructured documents (invoices, contracts, forms)</li>
            <li>Drafting first-pass responses that a human still reviews before sending</li>
          </ul>
          <h3>Poor candidates we&apos;ve seen</h3>
          <ul>
            <li>&quot;An AI assistant&quot; with no defined task, added because competitors have one</li>
            <li>Fully automating a decision with real financial or legal consequence, unsupervised</li>
            <li>Replacing a workflow nobody has actually measured the cost of yet</li>
          </ul>

          <h2>The part everyone forgets: what happens when it&apos;s wrong</h2>
          <p>Every model is wrong sometimes. The projects that hold up in production have an answer for that built in from day one — a confidence threshold that routes uncertain cases to a human, a way to flag and review bad outputs, a ceiling on how much autonomy the system has before someone checks its work.</p>
          <blockquote>The question isn&apos;t whether the model will be wrong. It&apos;s what your system does the moment it is.</blockquote>

          <h2>Cost discipline, from the start</h2>
          <p>LLM costs scale with usage in a way traditional software costs mostly don&apos;t. We set a cost ceiling before writing the integration, design caching so repeated queries don&apos;t repeatedly cost money, and pick the smallest model that reliably does the job rather than defaulting to the most capable one available.</p>

          <pre><code dangerouslySetInnerHTML={{ __html:
`<span class="tok-cm">// a shape we reuse often</span>
<span class="tok-kw">async function</span> classify(input) {
  <span class="tok-kw">const</span> cached = <span class="tok-kw">await</span> cache.get(hash(input));
  <span class="tok-kw">if</span> (cached) <span class="tok-kw">return</span> cached;
  <span class="tok-kw">const</span> result = <span class="tok-kw">await</span> model.run(input, { maxCost: <span class="tok-str">'$0.002'</span> });
  <span class="tok-kw">if</span> (result.confidence &lt; <span class="tok-str">0.85</span>) <span class="tok-kw">return</span> routeToHuman(input);
  <span class="tok-kw">await</span> cache.set(hash(input), result);
  <span class="tok-kw">return</span> result;
}`
          }} /></pre>

          <h2>The short version</h2>
          <p>Automation earns its place when it replaces a specific task you can already measure, has a defined path for when it&apos;s wrong, and has a cost ceiling before it ever touches a real user. Everything else is a demo, not a system.</p>
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
            <Link href="/blog/choosing-a-tech-stack" style={{ textDecoration: "none", color: "inherit" }}><div className="wr" data-r-fade="true">
              <div className="wc">Engineering</div>
              <div><div className="wt">Choosing a tech stack you won&apos;t regret in a year</div><p className="wx">The defaults we reach for, and the questions that change our answer.</p></div>
              <div className="wm">7 MIN · JUN 26</div></div></Link>
          </div>
        </section>
      </main>
    </>
  );
}
