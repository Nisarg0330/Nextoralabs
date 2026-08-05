import type { Metadata } from "next";
import Link from "next/link";

const title = "About — Nextora Labs";
const description =
  "Nextora Labs is a founder-led software engineering company run by Arpit Barot and Nisarg Patel from Toronto, Canada. Meet the founders and the principles behind how we build.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/about" },
  openGraph: { title, description, url: "/about" },
  twitter: { title, description },
};

export default function About() {
  return (
    <main id="main">
      <section className="phero">
        <div className="eclipse"></div>
        <div className="w">
          <div className="lb" data-r-fade="true"><i></i><b>NX—A1</b> About</div>
          <h1 className="h-el" data-r-fade="true" style={{ "--d": "80ms" } as React.CSSProperties}>Two engineers.<br />No layer in between.</h1>
          <p className="hsub h-el" data-r-fade="true" style={{ "--d": "180ms" } as React.CSSProperties}>Nextora Labs is founder-led — both Arpit and Nisarg work directly on client projects, every time. There is no account manager, and no junior team quietly inheriting the work once a contract is signed.</p>
          <div className="phero-meta h-el" data-r-fade="true" style={{ "--d": "260ms" } as React.CSSProperties}>
            <div className="bc"><Link href="/">Home</Link><span>/</span>About</div>
          </div>
        </div>
      </section>

      <section className="fnd" id="founders" style={{ paddingTop: 40 }}>
        <div className="w">
          <div className="per">
            <div className="pw">
              <div className="portrait ticks" data-por="true"><img src="/img/founder-arpit.jpg" alt="Arpit Barot, Co-founder and Technology Lead at Nextora Labs" loading="lazy" /></div>
              <div className="pcap"><span>FIG. 01</span><span>Co-founder</span></div>
            </div>
            <div className="px">
              <div data-r-fade="true" style={{ "--d": "250ms" } as React.CSSProperties}>
                <div className="pn">Arpit Barot</div>
                <div className="pt">Co-founder &amp; Technology Lead</div>
                <p className="pb">Arpit&apos;s route into software came through computer science and a long interest in how businesses actually decide things. At Nextora Labs he holds technology direction and product strategy — translating an early business problem into a technical position, including the unglamorous question of where AI and cloud genuinely belong and where they do not.</p>
              </div>
              <p className="pq" data-r-fade="true" style={{ "--d": "520ms" } as React.CSSProperties}>Technology should not feel complicated for businesses. A good technology partner understands the vision behind an idea, communicates clearly, and builds something that creates real value.</p>
            </div>
          </div>
          <div className="per rv">
            <div className="pw">
              <div className="portrait ticks" data-por="true"><img src="/img/founder-nisarg.jpg" alt="Nisarg Patel, Co-founder and Technology Lead at Nextora Labs" loading="lazy" /></div>
              <div className="pcap"><span>FIG. 02</span><span>Co-founder</span></div>
            </div>
            <div className="px">
              <div data-r-fade="true" style={{ "--d": "250ms" } as React.CSSProperties}>
                <div className="pn">Nisarg Patel</div>
                <div className="pt">Co-founder &amp; Technology Lead</div>
                <p className="pb">Nisarg holds implementation and product architecture — the engineering discipline behind what actually ships. A large share of his time goes to technical research and to improving how the two of them build, on the theory that how a team works determines what it&apos;s capable of building next.</p>
              </div>
              <p className="pq" data-r-fade="true" style={{ "--d": "520ms" } as React.CSSProperties}>Good technology happens where innovation meets simplicity. The goal is to build things that are powerful and reliable, and still easy for a person to use.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="stmt" style={{ paddingTop: 0 }}>
        <div className="w">
          <div className="stmt-in">
            <div className="lb" data-r-fade="true"><i></i><b>NX—A2</b> Why we exist</div>
            <h2 data-r-wipe="true" style={{ "--d": "100ms" } as React.CSSProperties}>
              We started this because good ideas<br />keep meeting the wrong <em>technical partner.</em>
            </h2>
            <div className="stmt-foot">
              <p data-r-fade="true" style={{ "--d": "420ms" } as React.CSSProperties}>Most businesses with a real idea don&apos;t need a bigger agency — they need someone who treats the business goal and the engineering decision as the same conversation, not two departments that occasionally sync up. That&apos;s the gap Nextora Labs was built to close. We&apos;re not trying to be the biggest technology company in Toronto. We&apos;re trying to be the one two people can point to and say: they understood what we were actually trying to do.</p>
              <div className="sig" data-r-fade="true" style={{ "--d": "540ms" } as React.CSSProperties}>
                <div className="q">&quot;We started Nextora Labs because businesses have good ideas and struggle to find partners who understand both the business goal and the engineering decision behind it.&quot;</div>
                <div className="by">— ARPIT BAROT &amp; NISARG PATEL</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="prin" id="principles">
        <div className="w">
          <div className="prin-head">
            <div className="lb" data-r-fade="true"><i></i><b>NX—A3</b> Engineering principles</div>
            <h2 data-r-wipe="true" style={{ "--d": "100ms" } as React.CSSProperties}>Three decisions that shape everything we ship.</h2>
          </div>
          <div className="spread">
            <div className="col" data-r-fade="true"><div className="num">01</div>
              <h4>Understand before building</h4>
              <p>Most failed projects were scoped before anyone understood the problem. Discovery is not a formality run to justify an estimate — it&apos;s where the requirement nobody mentioned surfaces, and that requirement is usually the one that changes the architecture.</p></div>
            <div className="col" data-r-fade="true" style={{ "--d": "130ms" } as React.CSSProperties}><div className="num">02</div>
              <h4>Design systems, not features</h4>
              <p>Features accumulate; systems absorb them. Before building we decide where a thing belongs — which service owns it, what it may touch, and what breaks when it fails. A feature built without those answers becomes somebody&apos;s problem in six months.</p></div>
            <div className="col" data-r-fade="true" style={{ "--d": "260ms" } as React.CSSProperties}><div className="num">03</div>
              <h4>Build for long-term ownership</h4>
              <p>You should be able to hire another engineer and have them productive within a week — including if that engineer is replacing us. We write things down, keep dependencies boring, and avoid clever solutions legible only to whoever wrote them.</p></div>
          </div>
          <div className="stds" data-r-fade="true">
            <div className="stdc"><div className="k">CODE QUALITY</div><p>Reviewed before merge, typed where types earn their keep, tested where failure is expensive.</p></div>
            <div className="stdc"><div className="k">ARCHITECTURE</div><p>Decisions recorded with the reasoning and the alternatives rejected, not only the outcome.</p></div>
            <div className="stdc"><div className="k">SECURITY</div><p>Secrets out of source control, least-privilege access, dependency scanning in CI as routine.</p></div>
            <div className="stdc"><div className="k">SCALABILITY</div><p>Built for the load you&apos;ll realistically carry next year, not the load of a perfect outcome.</p></div>
            <div className="stdc"><div className="k">COMMUNICATION</div><p>Weekly working software and bad news delivered early. You hear about a slip from us first.</p></div>
          </div>
        </div>
      </section>

      <section className="fit" id="fit">
        <div className="w">
          <div className="fit-top">
            <div>
              <div className="lb dk" data-r-fade="true"><i></i><b>NX—A4</b> Where we fit</div>
              <h2 data-r-wipe="true" style={{ "--d": "100ms" } as React.CSSProperties}>Four problems we are genuinely good at.</h2>
            </div>
            <p data-r-fade="true" style={{ "--d": "260ms" } as React.CSSProperties}>Not industries — problem shapes. These are the situations where a two-person team that makes its own architecture decisions is an advantage rather than a limitation.</p>
          </div>
          <div className="fgrid">
            <div className="fc" data-r-rise="true"><div className="fk">TYPE 01</div>
              <h4>First product, no engineering team yet</h4>
              <p>A founder with a clear idea and nobody in-house to make technical decisions. Everything is still reversible, which is precisely when the decisions matter most.</p>
              <div className="nd2">→ Architecture chosen for year two, not the first demo.</div></div>
            <div className="fc" data-r-rise="true" style={{ "--d": "110ms" } as React.CSSProperties}><div className="fk">TYPE 02</div>
              <h4>A working product that stopped scaling</h4>
              <p>Something real is live and earning, but adding to it has become slow and risky. Usually a structural problem wearing a performance costume.</p>
              <div className="nd2">→ Diagnosis before rewrite. Most of these need no rewrite.</div></div>
            <div className="fc" data-r-rise="true" style={{ "--d": "220ms" } as React.CSSProperties}><div className="fk">TYPE 03</div>
              <h4>Operations running on manual work</h4>
              <p>A team spending hours on work a system should do — spreadsheets holding a process together, data re-keyed between four tools that don&apos;t speak.</p>
              <div className="nd2">→ One workflow automated, proven, then extended.</div></div>
            <div className="fc wide" data-r-fade="true" style={{ "--d": "300ms" } as React.CSSProperties}>
              <div className="say">If none of these describe you, we will say so on the first call rather than in month three.</div></div>
          </div>
        </div>
      </section>

      <section className="cta"><div className="eclipse-soft"></div>
        <div className="w"><div className="cta-in" data-r-fade="true">
          <div className="lb dk" style={{ justifyContent: "center" }} data-r-fade="true"><i></i><b>NX—A5</b> Next step</div>
          <h2>Talk to the people who&apos;ll build it.</h2>
          <p>Not a salesperson, not an account manager — Arpit or Nisarg, directly.</p>
          <div><Link href="/contact" className="btn b3" style={{ padding: "18px 36px", fontSize: 15 }}>Start a conversation <span className="ar">→</span></Link></div>
        </div></div>
      </section>
    </main>
  );
}
