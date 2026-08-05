import type { Metadata } from "next";
import Link from "next/link";

const title = "Process — Nextora Labs";
const description =
  "How Nextora Labs works: discovery, strategy, design, development, and launch — with every new engagement including a 30-day working trial on a dedicated domain.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/process" },
  openGraph: { title, description, url: "/process" },
  twitter: { title, description },
};

export default function Process() {
  return (
    <main id="main">
      <section className="phero">
        <div className="eclipse"></div>
        <div className="w">
          <div className="lb" data-r-fade="true"><i></i><b>NX—P1</b> How we work</div>
          <h1 className="h-el" data-r-fade="true" style={{ "--d": "80ms" } as React.CSSProperties}>A clear path from<br />idea to launch.</h1>
          <p className="hsub h-el" data-r-fade="true" style={{ "--d": "180ms" } as React.CSSProperties}>Five stages, the same two people throughout, and a working preview you can test before committing to anything beyond it.</p>
          <div className="phero-meta h-el" data-r-fade="true" style={{ "--d": "260ms" } as React.CSSProperties}>
            <div className="bc"><Link href="/">Home</Link><span>/</span>Process</div>
          </div>
        </div>
      </section>

      <section className="process" id="stages" style={{ borderTop: "none" }}>
        <div className="w">
          <div className="pw" id="pw">
            <div className="pl"></div>
            <div className="pstep"><div className="pdot" style={{ "--d": "120ms" } as React.CSSProperties}></div>
              <div className="pnum" data-r-fade="true" style={{ "--d": "120ms" } as React.CSSProperties}>01</div>
              <div className="pbody" data-r-fade="true" style={{ "--d": "150ms" } as React.CSSProperties}><h4>Discovery</h4><p>We learn your business, your users, and what &quot;done&quot; actually needs to mean before any architecture gets decided. This is where the requirement nobody mentioned in the first email usually surfaces — and it&apos;s often the one that changes everything downstream. Typically one to two working sessions, not a questionnaire.</p></div></div>
            <div className="pstep"><div className="pdot" style={{ "--d": "380ms" } as React.CSSProperties}></div>
              <div className="pnum" data-r-fade="true" style={{ "--d": "380ms" } as React.CSSProperties}>02</div>
              <div className="pbody" data-r-fade="true" style={{ "--d": "410ms" } as React.CSSProperties}><h4>Strategy</h4><p>Technical approach, scope, and sequencing get set on paper — so the build has a plan, not just a backlog. This is also where we scope the 30-day trial: what gets built first, what &quot;proof&quot; looks like for your specific product, and what the dedicated trial domain will actually demonstrate.</p></div></div>
            <div className="pstep"><div className="pdot" style={{ "--d": "640ms" } as React.CSSProperties}></div>
              <div className="pnum" data-r-fade="true" style={{ "--d": "640ms" } as React.CSSProperties}>03</div>
              <div className="pbody" data-r-fade="true" style={{ "--d": "670ms" } as React.CSSProperties}><h4>Design</h4><p>Interface and product decisions get made in prototype form, reviewed together, before development begins. Every screen is designed against the real data model, not an idealized one — so nothing gets built that the system can&apos;t actually support.</p></div></div>
            <div className="pstep"><div className="pdot" style={{ "--d": "900ms" } as React.CSSProperties}></div>
              <div className="pnum" data-r-fade="true" style={{ "--d": "900ms" } as React.CSSProperties}>04</div>
              <div className="pbody" data-r-fade="true" style={{ "--d": "930ms" } as React.CSSProperties}><h4>Development</h4><p>Engineering happens in short, visible cycles, with working software to review every week, not every quarter. This is when your 30-day trial goes live on its dedicated domain — you&apos;re testing something real, not a slide deck, and giving feedback while there&apos;s still time to act on it.</p></div></div>
            <div className="pstep"><div className="pdot" style={{ "--d": "1160ms" } as React.CSSProperties}></div>
              <div className="pnum" data-r-fade="true" style={{ "--d": "1160ms" } as React.CSSProperties}>05</div>
              <div className="pbody" data-r-fade="true" style={{ "--d": "1190ms" } as React.CSSProperties}><h4>Launch &amp; Improvement</h4><p>We ship deliberately and stay involved after — products need care once real users start using them. If the trial period confirmed the fit, this is where the engagement continues under the plan that matches what you&apos;re building.</p></div></div>
          </div>
        </div>
      </section>

      <section className="labs">
        <div className="w"><div className="labs-inner" data-r-fade="true">
          <div className="lb" data-r-fade="true"><i></i><b>NX—P2</b> The 30-day trial</div>
          <h3>Why a trial instead of a proposal</h3>
          <p>Proposals are a bet on a document. A working product on a dedicated domain is a bet on something you can actually click through, test with real users, and give feedback on. Every new client gets 30 days of exactly that — a live preview, a real feedback cycle, and no long-term commitment attached to it. If it isn&apos;t working for you by day 30, you owe us nothing beyond that period. If it is, we move into the plan that fits what you&apos;re building.</p>
        </div></div>
      </section>

      <section className="del" id="delivery" style={{ borderTop: "1px solid var(--hair)" }}>
        <div className="w">
          <div className="del-grid">
            <div className="del-left">
              <div className="lb" data-r-fade="true"><i></i><b>NX—P3</b> Delivery</div>
              <h2 data-r-wipe="true" style={{ "--d": "100ms" } as React.CSSProperties}>Nothing reaches<br />production by hand.</h2>
              <p data-r-fade="true" style={{ "--d": "260ms" } as React.CSSProperties}>Every change — trial or not — takes the same path, and every gate must pass before the next opens.</p>
              <div className="gates">
                <div className="gate" data-r-fade="true" style={{ "--d": "340ms" } as React.CSSProperties}><div className="g">GATE — AUTOMATED</div><p>A red build blocks the merge. Nobody gets to decide it&apos;s fine just this once.</p></div>
                <div className="gate" data-r-fade="true" style={{ "--d": "400ms" } as React.CSSProperties}><div className="g">GATE — HUMAN</div><p>A founder reviews every change. Two people have read every line that ships.</p></div>
                <div className="gate" data-r-fade="true" style={{ "--d": "460ms" } as React.CSSProperties}><div className="g">GATE — REVERSIBLE</div><p>If it cannot be rolled back in minutes, it is not ready to go out.</p></div>
              </div>
            </div>
            <div className="steps" id="steps">
              <div className="sline"></div><div className="sfill"></div>
              <div className="stp"><div className="dot" style={{ "--d": "200ms" } as React.CSSProperties}></div><div className="sn">STAGE 01</div>
                <h4>Commit</h4><p>Small, reviewable changes on a branch. No direct pushes to main, at any point, by anyone.</p></div>
              <div className="stp"><div className="dot" style={{ "--d": "600ms" } as React.CSSProperties}></div><div className="sn">STAGE 02</div>
                <h4>Continuous integration</h4><p>Types, tests, lint and dependency scanning all run before a human is asked to look at it.</p></div>
              <div className="stp"><div className="dot" style={{ "--d": "1000ms" } as React.CSSProperties}></div><div className="sn">STAGE 03</div>
                <h4>Preview environment</h4><p>A disposable environment per branch — the same mechanism your 30-day trial domain runs on.</p></div>
              <div className="stp"><div className="dot" style={{ "--d": "1400ms" } as React.CSSProperties}></div><div className="sn">STAGE 04</div>
                <h4>Staging</h4><p>Production-shaped data and configuration. Migrations are rehearsed here before they&apos;re trusted anywhere else.</p></div>
              <div className="stp"><div className="dot" style={{ "--d": "1800ms" } as React.CSSProperties}></div><div className="sn">STAGE 05</div>
                <h4>Production</h4><p>Released behind a flag where it matters, with a rollback path that has actually been tested.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta"><div className="eclipse-soft"></div>
        <div className="w"><div className="cta-in" data-r-fade="true">
          <div className="lb dk" style={{ justifyContent: "center" }} data-r-fade="true"><i></i><b>NX—P4</b> Next step</div>
          <h2>Ready to see it working?</h2>
          <p>Book a call and we&apos;ll scope what your 30-day trial should prove before we write a line of code.</p>
          <div><Link href="/contact" className="btn b3" style={{ padding: "18px 36px", fontSize: 15 }}>Start a conversation <span className="ar">→</span></Link></div>
        </div></div>
      </section>
    </main>
  );
}
