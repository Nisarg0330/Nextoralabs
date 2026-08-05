import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

const title = "Nextora Labs — Software Engineering, Toronto, Canada";
const description =
  "A two-founder software engineering company building web, mobile, and AI systems for startups and growing companies across North America.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: { title, description, url: "/" },
  twitter: { title, description },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Nextora Labs",
  url: "https://nextoralabs.ca",
  logo: "https://nextoralabs.ca/img/logo-mark.png",
  description: "A two-founder software engineering company building web, mobile, and AI systems from Toronto, Canada.",
  founder: [{ "@type": "Person", name: "Arpit Barot" }, { "@type": "Person", name: "Nisarg Patel" }],
  address: { "@type": "PostalAddress", addressLocality: "Toronto", addressRegion: "ON", addressCountry: "CA" },
  sameAs: ["https://linkedin.com"],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main id="main">
        {/* ============ 01 HERO ============ */}
        <section className="hero">
          <div className="eclipse"></div>
          <div className="w">
            <div className="lb h-el" data-r-fade="true"><i></i><b>NX—00</b> Software Engineering · Toronto, Canada</div>
            <h1 style={{ marginTop: 34 }}>
              <span className="msk hl" style={{ "--d": "120ms" } as React.CSSProperties}><span>We decide how it</span></span>
              <span className="msk hl" style={{ "--d": "250ms" } as React.CSSProperties}><span>should be built,</span></span>
              <span className="msk hl" style={{ "--d": "380ms" } as React.CSSProperties}><span><em>then we build it.</em></span></span>
            </h1>
            <div className="horizon"></div>

            <div className="hero-meta">
              <p className="hero-sub h-el" data-r-fade="true" style={{ "--d": "560ms" } as React.CSSProperties}>A two-founder software engineering company. We design the system before writing it — and hand it over documented well enough that someone else could take it from here.</p>
              <div className="hero-act h-el" data-r-fade="true" style={{ "--d": "640ms" } as React.CSSProperties}>
                <Link href="/contact" className="btn b1">Start a conversation <span className="ar">→</span></Link>
                <a href="#work" className="btn b2">See how we work</a>
              </div>
            </div>

            <div className="sheet h-el" data-r-rise="true" style={{ "--d": "700ms" } as React.CSSProperties}>
              <div className="sh-bar">
                <span>Reference architecture — hover a discipline to trace its path</span>
                <span id="clock">SYS · READY</span>
              </div>
              <div className="sh-body">
                <div className="rail" id="rail">
                  <button className="ri on" data-i="0"><span className="n">01</span><span className="t">Web Development</span></button>
                  <button className="ri" data-i="1"><span className="n">02</span><span className="t">Mobile Development</span></button>
                  <button className="ri" data-i="2"><span className="n">03</span><span className="t">AI &amp; Automation</span></button>
                  <button className="ri" data-i="3"><span className="n">04</span><span className="t">Product Design</span></button>
                  <button className="ri" data-i="4"><span className="n">05</span><span className="t">MVP Development</span></button>
                </div>

                <div className="stage">
                  <svg viewBox="0 0 720 316" fill="none" id="arch">
                    {/* edges */}
                    <path className="ed" id="e-br-gw" data-r-draw="true" d="M360 46 L360 84" stroke="#313A55" strokeWidth="1.2" />
                    <path className="ed" id="e-gw-core" data-r-draw="true" d="M360 122 L360 146 L150 146 L150 172" stroke="#313A55" strokeWidth="1.2" />
                    <path className="ed" id="e-gw-auth" data-r-draw="true" d="M360 122 L360 172" stroke="#313A55" strokeWidth="1.2" />
                    <path className="ed" id="e-gw-ai" data-r-draw="true" d="M360 122 L360 146 L570 146 L570 172" stroke="#313A55" strokeWidth="1.2" />
                    <path className="ed" id="e-core-db" data-r-draw="true" d="M150 210 L150 236 L360 236 L360 262" stroke="#313A55" strokeWidth="1.2" />
                    <path className="ed" id="e-ai-db" data-r-draw="true" d="M570 210 L570 236 L360 236" stroke="#313A55" strokeWidth="1.2" />
                    <path className="ed" id="e-auth-db" data-r-draw="true" d="M360 210 L360 262" stroke="#313A55" strokeWidth="1.2" />

                    {/* nodes */}
                    <g className="nd" id="n-br" data-r-pop="true">
                      <rect x="278" y="16" width="164" height="30" rx="1.5" fill="#10141F" stroke="#313A55" />
                      <text className="nl dec" data-t="Browser / Mobile App" x="360" y="35" textAnchor="middle"
                        fontFamily="JetBrains Mono,monospace" fontSize="10.5" fill="#9AA5B8">Browser / Mobile App</text>
                    </g>
                    <g className="nd" id="n-gw" data-r-pop="true">
                      <rect x="288" y="92" width="144" height="30" rx="1.5" fill="#10141F" stroke="#313A55" />
                      <text className="nl dec" data-t="API Gateway" x="360" y="111" textAnchor="middle"
                        fontFamily="JetBrains Mono,monospace" fontSize="10.5" fill="#9AA5B8">API Gateway</text>
                    </g>
                    <g className="nd" id="n-core" data-r-pop="true">
                      <rect x="72" y="172" width="156" height="30" rx="1.5" fill="#10141F" stroke="#313A55" />
                      <text className="nl dec" data-t="Core Services" x="150" y="191" textAnchor="middle"
                        fontFamily="JetBrains Mono,monospace" fontSize="10.5" fill="#9AA5B8">Core Services</text>
                    </g>
                    <g className="nd" id="n-auth" data-r-pop="true">
                      <rect x="288" y="172" width="144" height="30" rx="1.5" fill="#10141F" stroke="#313A55" />
                      <text className="nl dec" data-t="Identity" x="360" y="191" textAnchor="middle"
                        fontFamily="JetBrains Mono,monospace" fontSize="10.5" fill="#9AA5B8">Identity</text>
                    </g>
                    <g className="nd" id="n-ai" data-r-pop="true">
                      <rect x="492" y="172" width="156" height="30" rx="1.5" fill="#10141F" stroke="#313A55" />
                      <text className="nl dec" data-t="Model Runtime" x="570" y="191" textAnchor="middle"
                        fontFamily="JetBrains Mono,monospace" fontSize="10.5" fill="#9AA5B8">Model Runtime</text>
                    </g>
                    <g className="nd" id="n-db" data-r-pop="true">
                      <rect x="288" y="262" width="144" height="30" rx="1.5" fill="#10141F" stroke="#313A55" />
                      <text className="nl dec" data-t="Postgres" x="360" y="281" textAnchor="middle"
                        fontFamily="JetBrains Mono,monospace" fontSize="10.5" fill="#9AA5B8">Postgres</text>
                    </g>

                    <text x="16" y="35" fontFamily="JetBrains Mono,monospace" fontSize="9" fill="#667085" letterSpacing="1.4">CLIENT</text>
                    <text x="16" y="111" fontFamily="JetBrains Mono,monospace" fontSize="9" fill="#667085" letterSpacing="1.4">EDGE</text>
                    <text x="16" y="252" fontFamily="JetBrains Mono,monospace" fontSize="9" fill="#667085" letterSpacing="1.4">DATA</text>
                  </svg>

                  <div className="stage-foot">
                    <div className="note" id="note">{"// tracing: browser → gateway → core services → postgres"}</div>
                    <div className="chips" id="chips"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="credline h-el" data-r-fade="true" style={{ "--d": "820ms" } as React.CSSProperties}>
              <span>Founded and run by <b>Arpit Barot</b> &amp; <b>Nisarg Patel</b></span>
              <span className="mn" style={{ fontSize: "10.5px", letterSpacing: ".1em" }}>EST. 2026 · TORONTO</span>
            </div>
          </div>
        </section>

        {/* ============ 02 MONOGRAPH ============ */}
        <section className="mono" id="work">
          <div className="w">
            <div className="mono-head">
              <div data-r-slide="true">
                <div className="lb" style={{ marginBottom: 26 }}><i></i><b>NX—01</b> Disciplines</div>
                <h2>Five disciplines,<br />two people, one<br />set of decisions.</h2>
              </div>
              <p data-r-fade="true" style={{ "--d": "160ms" } as React.CSSProperties}>The people who scope the work write the code. Below is what each discipline actually involves — and what we typically find when we open a codebase for the first time.</p>
            </div>

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

        {/* ============ 03 REQUEST ============ */}
        <section className="req" id="request">
          <div className="w">
            <div className="req-head">
              <div className="lb dk" style={{ marginBottom: 28 }} data-r-fade="true"><i></i><b>NX—02</b> Anatomy of a request</div>
              <h2 data-r-wipe="true" style={{ "--d": "100ms" } as React.CSSProperties}>Where the milliseconds<br />actually go.</h2>
              <p data-r-fade="true" style={{ "--d": "280ms" } as React.CSSProperties}>Performance is not a setting switched on near the end. It is a budget spent across five hops, and it is decided while the architecture is still on paper. This is the budget we design against.</p>
            </div>

            <div className="track" id="track">
              <svg viewBox="0 0 880 128" fill="none">
                <line x1="24" y1="44" x2="856" y2="44" stroke="#232B3A" strokeWidth="1" />
                <g className="hop"><rect x="24" y="28" width="116" height="32" rx="1.5" fill="#10141F" stroke="#2A3348" />
                  <text className="hl" x="82" y="48" textAnchor="middle" fontFamily="JetBrains Mono,monospace" fontSize="10.5" fill="#9AA5B8">Browser</text>
                  <text x="82" y="82" textAnchor="middle" fontFamily="JetBrains Mono,monospace" fontSize="9.5" fill="#667085" letterSpacing="1">RENDER</text>
                  <text x="82" y="100" textAnchor="middle" fontFamily="JetBrains Mono,monospace" fontSize="12" fill="#7C93FF">200ms</text></g>
                <g className="hop"><rect x="204" y="28" width="116" height="32" rx="1.5" fill="#10141F" stroke="#2A3348" />
                  <text className="hl" x="262" y="48" textAnchor="middle" fontFamily="JetBrains Mono,monospace" fontSize="10.5" fill="#9AA5B8">CDN edge</text>
                  <text x="262" y="82" textAnchor="middle" fontFamily="JetBrains Mono,monospace" fontSize="9.5" fill="#667085" letterSpacing="1">CACHE HIT</text>
                  <text x="262" y="100" textAnchor="middle" fontFamily="JetBrains Mono,monospace" fontSize="12" fill="#7C93FF">15ms</text></g>
                <g className="hop"><rect x="384" y="28" width="116" height="32" rx="1.5" fill="#10141F" stroke="#2A3348" />
                  <text className="hl" x="442" y="48" textAnchor="middle" fontFamily="JetBrains Mono,monospace" fontSize="10.5" fill="#9AA5B8">Gateway</text>
                  <text x="442" y="82" textAnchor="middle" fontFamily="JetBrains Mono,monospace" fontSize="9.5" fill="#667085" letterSpacing="1">AUTHN + LIMITS</text>
                  <text x="442" y="100" textAnchor="middle" fontFamily="JetBrains Mono,monospace" fontSize="12" fill="#7C93FF">10ms</text></g>
                <g className="hop"><rect x="564" y="28" width="116" height="32" rx="1.5" fill="#10141F" stroke="#2A3348" />
                  <text className="hl" x="622" y="48" textAnchor="middle" fontFamily="JetBrains Mono,monospace" fontSize="10.5" fill="#9AA5B8">Service</text>
                  <text x="622" y="82" textAnchor="middle" fontFamily="JetBrains Mono,monospace" fontSize="9.5" fill="#667085" letterSpacing="1">BUSINESS LOGIC</text>
                  <text x="622" y="100" textAnchor="middle" fontFamily="JetBrains Mono,monospace" fontSize="12" fill="#7C93FF">40ms</text></g>
                <g className="hop"><rect x="744" y="28" width="112" height="32" rx="1.5" fill="#10141F" stroke="#2A3348" />
                  <text className="hl" x="800" y="48" textAnchor="middle" fontFamily="JetBrains Mono,monospace" fontSize="10.5" fill="#9AA5B8">Postgres</text>
                  <text x="800" y="82" textAnchor="middle" fontFamily="JetBrains Mono,monospace" fontSize="9.5" fill="#667085" letterSpacing="1">INDEXED READ</text>
                  <text x="800" y="100" textAnchor="middle" fontFamily="JetBrains Mono,monospace" fontSize="12" fill="#7C93FF">8ms</text></g>
                <circle className="trace" cx="82" cy="44" r="4.5" fill="#7C93FF" />
              </svg>
            </div>

            <div className="req-notes">
              <div data-r-fade="true"><h6>Cache first</h6><p>Anything answerable at the edge never reaches your servers — or your invoice.</p></div>
              <div data-r-fade="true" style={{ "--d": "100ms" } as React.CSSProperties}><h6>One door</h6><p>Auth and rate limiting live in the gateway, so five services don&apos;t implement them five ways.</p></div>
              <div data-r-fade="true" style={{ "--d": "200ms" } as React.CSSProperties}><h6>Boring queries</h6><p>Indexed reads, no N+1s. Most &quot;we need to scale&quot; turns out to be a missing index.</p></div>
              <div data-r-fade="true" style={{ "--d": "300ms" } as React.CSSProperties}><h6>Budget, not hope</h6><p>Each hop is allocated up front. Exceeding it is a design bug, caught in review.</p></div>
            </div>
          </div>
        </section>

        {/* ============ 04 STATEMENT ============ */}
        <section className="stmt">
          <div className="w">
            <div className="stmt-in">
              <div className="lb" style={{ marginBottom: 48 }} data-r-fade="true"><i></i><b>NX—03</b> How we&apos;re set up</div>
              <h2>
                <span className="msk sm"><span>Your project is not</span></span>
                <span className="msk sm" style={{ "--d": "130ms" } as React.CSSProperties}><span>handed between</span></span>
                <span className="msk sm" style={{ "--d": "260ms" } as React.CSSProperties}><span><em>departments.</em></span></span>
              </h2>
              <div className="stmt-foot">
                <p data-r-fade="true" style={{ "--d": "420ms" } as React.CSSProperties}>Every engagement is shaped directly by the founders — from the first architecture decision through to final delivery. No account manager relaying your requirements to an engineer you will never meet. No junior team quietly inheriting the work once the contract is signed. The constraint is that there are two of us. That is also the entire point.</p>
                <div className="sig" data-r-fade="true" style={{ "--d": "540ms" } as React.CSSProperties}>
                  <div className="q">&quot;We started Nextora Labs because businesses have good ideas and struggle to find partners who understand both the business goal and the engineering decision behind it.&quot;</div>
                  <div className="by">— ARPIT BAROT &amp; NISARG PATEL</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ 05 PRINCIPLES ============ */}
        <section className="prin">
          <div className="w">
            <div className="prin-head">
              <div className="lb" style={{ marginBottom: 26 }} data-r-fade="true"><i></i><b>NX—04</b> Engineering principles</div>
              <h2 data-r-wipe="true" style={{ "--d": "100ms" } as React.CSSProperties}>Three decisions that shape<br />everything we ship.</h2>
            </div>
            <div className="spread">
              <div className="col" data-r-fade="true">
                <div className="num">01</div>
                <h4>Understand before building</h4>
                <p>Most failed projects were scoped before anyone understood the problem. Discovery is not a formality run to justify an estimate — it is where the requirement nobody mentioned surfaces, and that requirement is usually the one that changes the architecture.</p>
              </div>
              <div className="col" data-r-fade="true" style={{ "--d": "130ms" } as React.CSSProperties}>
                <div className="num">02</div>
                <h4>Design systems, not features</h4>
                <p>Features accumulate; systems absorb them. Before building we decide where a thing belongs — which service owns it, what it may touch, and what breaks when it fails. A feature built without those answers becomes somebody&apos;s problem in six months.</p>
              </div>
              <div className="col" data-r-fade="true" style={{ "--d": "260ms" } as React.CSSProperties}>
                <div className="num">03</div>
                <h4>Build for long-term ownership</h4>
                <p>You should be able to hire another engineer and have them productive within a week — including if that engineer is replacing us. We write things down, keep dependencies boring, and avoid clever solutions legible only to whoever wrote them.</p>
              </div>
            </div>

            <div className="stds">
              <div className="stdc" data-r-fade="true"><div className="k">CODE QUALITY</div><p>Reviewed before merge, typed where types earn their keep, tested where failure is expensive.</p></div>
              <div className="stdc" data-r-fade="true" style={{ "--d": "80ms" } as React.CSSProperties}><div className="k">ARCHITECTURE</div><p>Decisions recorded with the reasoning and the alternatives rejected, not only the outcome.</p></div>
              <div className="stdc" data-r-fade="true" style={{ "--d": "160ms" } as React.CSSProperties}><div className="k">SECURITY</div><p>Secrets out of source control, least-privilege access, dependency scanning in CI as routine.</p></div>
              <div className="stdc" data-r-fade="true" style={{ "--d": "240ms" } as React.CSSProperties}><div className="k">SCALABILITY</div><p>Built for the load you will realistically carry next year, not the load of a perfect outcome.</p></div>
              <div className="stdc" data-r-fade="true" style={{ "--d": "320ms" } as React.CSSProperties}><div className="k">COMMUNICATION</div><p>Weekly working software and bad news delivered early. You hear about a slip from us first.</p></div>
            </div>
          </div>
        </section>

        {/* ============ 06 DELIVERY ============ */}
        <section className="del" id="delivery">
          <div className="w">
            <div className="del-grid">
              <div className="del-left">
                <div className="lb" style={{ marginBottom: 26 }} data-r-fade="true"><i></i><b>NX—05</b> Delivery</div>
                <h2 data-r-wipe="true" style={{ "--d": "100ms" } as React.CSSProperties}>Nothing reaches<br />production by hand.</h2>
                <p data-r-fade="true" style={{ "--d": "260ms" } as React.CSSProperties}>Every change takes the same path, and every gate must pass before the next opens. This is what &quot;we&apos;ll be careful&quot; looks like once it has been written down.</p>
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
                  <h4>Preview environment</h4><p>A disposable environment per branch, so review happens against the real thing rather than a screenshot.</p></div>
                <div className="stp"><div className="dot" style={{ "--d": "1400ms" } as React.CSSProperties}></div><div className="sn">STAGE 04</div>
                  <h4>Staging</h4><p>Production-shaped data and configuration. Migrations are rehearsed here before they are trusted anywhere else.</p></div>
                <div className="stp"><div className="dot" style={{ "--d": "1800ms" } as React.CSSProperties}></div><div className="sn">STAGE 05</div>
                  <h4>Production</h4><p>Released behind a flag where it matters, with a rollback path that has actually been tested.</p></div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ 07 FIT ============ */}
        <section className="fit">
          <div className="w">
            <div className="fit-top">
              <div>
                <div className="lb dk" style={{ marginBottom: 28 }} data-r-fade="true"><i></i><b>NX—06</b> Where we fit</div>
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

        {/* ============ 08 FOUNDERS ============ */}
        <section className="fnd" id="founders">
          <div className="w">
            <div className="fnd-head">
              <div className="lb" style={{ marginBottom: 28 }} data-r-fade="true"><i></i><b>NX—07</b> The founders</div>
              <h2 data-r-wipe="true" style={{ "--d": "100ms" } as React.CSSProperties}>Two engineers.<br />No layer in between.</h2>
            </div>

            <div className="per">
              <div className="pw">
                <div className="portrait" data-por="true"><img src="/img/founder-arpit.jpg" alt="Arpit Barot, Co-founder and Technology Lead at Nextora Labs" loading="lazy" /></div>
                <div className="pcap"><span>Fig. 01</span><span>Co-founder</span></div>
              </div>
              <div className="px">
                <div data-r-fade="true" style={{ "--d": "260ms" } as React.CSSProperties}>
                  <div className="pn">Arpit Barot</div>
                  <div className="pt">Co-founder &amp; Technology Lead</div>
                  <p className="pb">Arpit&apos;s route into software came through computer science and a long interest in how businesses actually decide things. At Nextora Labs he holds technology direction and product strategy — translating an early business problem into a technical position, including the unglamorous question of where AI and cloud genuinely belong and where they do not.</p>
                </div>
                <div className="pq" data-r-fade="true" style={{ "--d": "520ms" } as React.CSSProperties}>Technology should not feel complicated for businesses. A good technology partner understands the vision behind an idea, communicates clearly, and builds something that creates real value.</div>
              </div>
            </div>

            <div className="per rv">
              <div className="pw">
                <div className="portrait" data-por="true"><img src="/img/founder-nisarg.jpg" alt="Nisarg Patel, Co-founder and Technology Lead at Nextora Labs" loading="lazy" /></div>
                <div className="pcap"><span>Fig. 02</span><span>Co-founder</span></div>
              </div>
              <div className="px">
                <div data-r-fade="true" style={{ "--d": "260ms" } as React.CSSProperties}>
                  <div className="pn">Nisarg Patel</div>
                  <div className="pt">Co-founder &amp; Technology Lead</div>
                  <p className="pb">Nisarg holds implementation and product architecture — the engineering discipline behind what actually ships. A large share of his time goes to technical research and to improving how the two of them build, on the theory that how a team works determines what it is capable of building next.</p>
                </div>
                <div className="pq" data-r-fade="true" style={{ "--d": "520ms" } as React.CSSProperties}>Good technology happens where innovation meets simplicity. The goal is to build things that are powerful and reliable, and still easy for a person to use.</div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ 09 WRITING ============ */}
        <section className="wrt" id="writing">
          <div className="w">
            <div className="wrt-head">
              <div data-r-fade="true">
                <div className="lb" style={{ marginBottom: 24 }}><i></i><b>NX—08</b> Writing</div>
                <h2>Notes on building software</h2>
              </div>
              <Link href="/blog" className="lnk" data-r-fade="true" style={{ "--d": "140ms" } as React.CSSProperties}>All notes <span className="ar">→</span></Link>
            </div>
            <div className="wr" data-r-fade="true"><div className="wc">Product</div>
              <div><Link href="/blog/what-makes-an-mvp-worth-building" style={{ textDecoration: "none" }}><div className="wt">What actually makes an MVP worth building</div><p className="wx">Most minimum viable products are either too minimal or not viable. How we scope the middle ground.</p></Link></div>
              <div className="wm">6 MIN · JUL 26</div></div>
            <div className="wr" data-r-fade="true" style={{ "--d": "90ms" } as React.CSSProperties}><div className="wc">AI</div>
              <div><Link href="/blog/where-ai-automation-saves-time" style={{ textDecoration: "none" }}><div className="wt">Where AI automation actually saves a team time</div><p className="wx">Which workflows are worth automating first, and which are not ready yet.</p></Link></div>
              <div className="wm">5 MIN · JUN 26</div></div>
            <div className="wr" data-r-fade="true" style={{ "--d": "180ms" } as React.CSSProperties}><div className="wc">Engineering</div>
              <div><Link href="/blog/choosing-a-tech-stack" style={{ textDecoration: "none" }}><div className="wt">Choosing a stack you won&apos;t regret in a year</div><p className="wx">The defaults we reach for, and the questions that change our answer.</p></Link></div>
              <div className="wm">7 MIN · JUN 26</div></div>
          </div>
        </section>

        {/* ============ 10 CTA ============ */}
        <section className="cta">
          <div className="eclipse-soft"></div>
          <div className="w"><div className="cta-in">
            <div className="lb dk" style={{ justifyContent: "center", marginBottom: 38 }} data-r-fade="true"><i></i><b>NX—09</b> Next step</div>
            <h2>
              <span className="msk cm"><span>Tell us what you&apos;re</span></span>
              <span className="msk cm" style={{ "--d": "130ms" } as React.CSSProperties}><span><em>trying to build.</em></span></span>
            </h2>
            <p data-r-fade="true" style={{ "--d": "340ms" } as React.CSSProperties}>One conversation is enough for both of us to know whether this is a fit. No pitch deck, no discovery fee, and an honest answer if we&apos;re the wrong people for it.</p>
            <Link href="/contact" className="btn b3" style={{ padding: "18px 36px", fontSize: 15 }} data-r-fade="true">Start a conversation <span className="ar">→</span></Link>
          </div></div>
        </section>
      </main>
      <Script src="/js/home.js" strategy="afterInteractive" />
    </>
  );
}
