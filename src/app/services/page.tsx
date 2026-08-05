import type { Metadata } from "next";
import Link from "next/link";

const title = "Services — Nextora Labs";
const description =
  "Web development, mobile development, AI & automation, product design, and MVP development. Practical pricing, no fake enterprise numbers, every engagement includes a 30-day trial.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/services" },
  openGraph: { title, description, url: "/services" },
  twitter: { title, description },
};

export default function Services() {
  return (
    <main id="main">
      <section className="phero">
        <div className="eclipse"></div>
        <div className="w">
          <div className="lb" data-r-fade="true"><i></i><b>NX—S1</b> Services</div>
          <h1 className="h-el" data-r-fade="true" style={{ "--d": "80ms" } as React.CSSProperties}>Five disciplines.<br />No handoffs.</h1>
          <p className="hsub h-el" data-r-fade="true" style={{ "--d": "180ms" } as React.CSSProperties}>Web, mobile, AI, design, and MVP delivery — held by the same two people from the first architecture decision through to what happens after launch. Below is what each discipline actually involves, and what we typically find when we open a codebase for the first time.</p>
          <div className="phero-meta h-el" data-r-fade="true" style={{ "--d": "260ms" } as React.CSSProperties}>
            <div className="bc"><Link href="/">Home</Link><span>/</span>Services</div>
            <div className="badge"><span className="dot"></span>Every engagement opens with a 30-day trial</div>
          </div>
        </div>
      </section>

      <section className="mono" id="work" style={{ paddingTop: 0 }}>
        <div className="w">
          <div className="entry" data-r-fade="true">
            <div className="idx">01</div>
            <div><h3>Web<br />Development</h3><p className="lead">Applications that hold up under real traffic and real business logic — not demo-ready prototypes.</p></div>
            <div className="right">
              <p className="cap">Server- and client-rendered architectures in <b>React</b>, <b>Next.js</b> and <b>TypeScript</b>. API design in <b>Node.js</b>. Performance and accessibility treated as requirements with numbers attached, not as a pass at the end.</p>
              <div className="found"><div className="h">What we usually find</div><ul>
                <li>Pages slow enough to measurably lose signups</li>
                <li>No boundary between interface and business logic</li>
                <li>A codebase exactly one person can safely change</li></ul></div>
            </div>
          </div>
          <div className="entry" data-r-fade="true">
            <div className="idx">02</div>
            <div><h3>Mobile<br />Development</h3><p className="lead">iOS and Android products that feel native, from a codebase a small team can still maintain.</p></div>
            <div className="right">
              <p className="cap">Cross-platform delivery in <b>React Native</b> where it fits; native <b>Swift</b> or <b>Kotlin</b> where performance genuinely demands it. Store submission automated, not performed by hand each release.</p>
              <div className="found"><div className="h">What we usually find</div><ul>
                <li>Two codebases quietly drifting apart</li>
                <li>A release process nobody wants to touch</li>
                <li>Offline and error states postponed indefinitely</li></ul></div>
            </div>
          </div>
          <div className="entry" data-r-fade="true">
            <div className="idx">03</div>
            <div><h3>AI &amp;<br />Automation</h3><p className="lead">A model applied to one defined operational problem — not added because it was expected.</p></div>
            <div className="right">
              <p className="cap">LLM integration, retrieval pipelines and workflow automation built around the data you already hold, with explicit ceilings on cost and latency and a defined answer for what happens when the model is wrong.</p>
              <div className="found"><div className="h">What we usually find</div><ul>
                <li>A model chosen before the problem was written down</li>
                <li>Costs that scale faster than usage does</li>
                <li>No mechanism for detecting a wrong answer</li></ul></div>
            </div>
          </div>
          <div className="entry" data-r-fade="true">
            <div className="idx">04</div>
            <div><h3>Product<br />Design</h3><p className="lead">Interface decisions made by the people who then have to build them.</p></div>
            <div className="right">
              <p className="cap">Research, structure and interface design delivered as implementation-ready specification — with states, edge cases and data shapes defined, so nothing is designed that the system cannot actually supply.</p>
              <div className="found"><div className="h">What we usually find</div><ul>
                <li>Designs assuming data the system does not have</li>
                <li>Every screen solved as a one-off</li>
                <li>Empty, loading and error states missing entirely</li></ul></div>
            </div>
          </div>
          <div className="entry" data-r-fade="true">
            <div className="idx">05</div>
            <div><h3>MVP<br />Development</h3><p className="lead">A working product in front of real users, scoped to answer one question.</p></div>
            <div className="right">
              <p className="cap">Architecture chosen to extend rather than to be discarded the moment you raise, hire, or grow past version one. Shortcuts are taken deliberately and written down where the next engineer will find them.</p>
              <div className="found"><div className="h">What we usually find</div><ul>
                <li>Scope that grew before anything shipped</li>
                <li>Throwaway code that never did get thrown away</li>
                <li>No agreed definition of what would count as proof</li></ul></div>
            </div>
          </div>
        </div>
      </section>

      <section className="pricing" id="pricing">
        <div className="w">
          <div className="stop" data-r-fade="true">
            <div className="lb" data-r-fade="true"><i></i><b>NX—S2</b> Pricing</div>
            <h2>Practical plans, not fake enterprise numbers</h2>
            <p>Every plan below starts with the same 30-day trial: a dedicated trial domain, a working preview, and a feedback cycle — so you&apos;re evaluating a real product before committing to anything longer.</p>
          </div>

          <div className="price-grid" data-r-fade="true">
            <div className="price-card">
              <div className="price-name">Starter</div>
              <div className="price-for">A single product, scoped tightly — usually an MVP or a first version.</div>
              <div className="price-num">From CA$1,199</div>
              <ul className="price-feat">
                <li>One core product surface (web or mobile)</li>
                <li>Discovery, architecture, and one build cycle</li>
                <li>30-day trial on a dedicated domain</li>
                <li>Direct founder involvement throughout</li>
              </ul>
              <div className="price-meta"><span>IDEAL FOR: pre-seed / first product</span><span>TIMELINE: 4–7 weeks</span><span>SUPPORT: async, business hours</span></div>
              <Link href="/contact" className="btn b2">Start a conversation</Link>
            </div>

            <div className="price-card hi">
              <div className="price-name">Growth</div>
              <div className="price-for">An existing product that needs to scale, or a second surface added.</div>
              <div className="price-num">From CA$2,999</div>
              <ul className="price-feat">
                <li>Web + mobile, or a major feature build-out</li>
                <li>Architecture review and remediation plan</li>
                <li>30-day trial + staged rollout plan</li>
                <li>Weekly working software, direct communication</li>
              </ul>
              <div className="price-meta"><span>IDEAL FOR: funded startups, post-MVP</span><span>TIMELINE: 8–14 weeks</span><span>SUPPORT: priority, same-day</span></div>
              <Link href="/contact" className="btn b1">Start a conversation</Link>
            </div>

            <div className="price-card">
              <div className="price-name">Business</div>
              <div className="price-for">Multi-system work — integrations, migrations, or a full platform rebuild.</div>
              <div className="price-num">From CA$3,999</div>
              <ul className="price-feat">
                <li>Multiple services, integrations, or data migration</li>
                <li>Formal architecture documentation and ADRs</li>
                <li>Security review as part of delivery</li>
                <li>Both founders engaged for the full engagement</li>
              </ul>
              <div className="price-meta"><span>IDEAL FOR: established companies</span><span>TIMELINE: 12+ weeks</span><span>SUPPORT: dedicated, SLA available</span></div>
              <Link href="/contact" className="btn b2">Start a conversation</Link>
            </div>

            <div className="price-card">
              <div className="price-name">Enterprise</div>
              <div className="price-for">Ongoing engineering capacity, retainer work, or something that doesn&apos;t fit a fixed scope.</div>
              <div className="price-num">Custom</div>
              <ul className="price-feat">
                <li>Monthly retainer or embedded engineering time</li>
                <li>Scope defined jointly before any commitment</li>
                <li>Same 30-day trial period applies</li>
                <li>Cancel or adjust scope with 30 days&apos; notice</li>
              </ul>
              <div className="price-meta"><span>IDEAL FOR: recurring or unusual needs</span><span>TIMELINE: ongoing</span><span>SUPPORT: as scoped</span></div>
              <Link href="/contact" className="btn b2">Start a conversation</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="cta"><div className="eclipse-soft"></div>
        <div className="w"><div className="cta-in" data-r-fade="true">
          <div className="lb dk" style={{ justifyContent: "center" }} data-r-fade="true"><i></i><b>NX—S3</b> Next step</div>
          <h2>Not sure which plan fits?</h2>
          <p>Tell us what you&apos;re building on the first call and we&apos;ll tell you honestly which of these — if any — is the right shape for it.</p>
          <div><Link href="/contact" className="btn b3" style={{ padding: "18px 36px", fontSize: 15 }}>Start a conversation <span className="ar">→</span></Link></div>
        </div></div>
      </section>
    </main>
  );
}
