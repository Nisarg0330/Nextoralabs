import type { Metadata } from "next";
import Script from "next/script";

const title = "Contact — Nextora Labs";
const description =
  "Get in touch with Nextora Labs. Book a discovery call or send a project brief — every new engagement includes a 30-day working trial.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/contact" },
  openGraph: { title, description, url: "/contact" },
  twitter: { title, description },
};

export default function Contact() {
  return (
    <>
      <main id="main">
        <section className="phero" style={{ paddingBottom: 0 }}>
          <div className="eclipse"></div>
          <div className="w">
            <div className="lb" data-r-fade="true"><i></i><b>NX—C1</b> Contact</div>
            <h1 className="h-el" data-r-fade="true" style={{ "--d": "80ms" } as React.CSSProperties}>Tell us what<br />you&apos;re building.</h1>
            <p className="hsub h-el" data-r-fade="true" style={{ "--d": "180ms" } as React.CSSProperties}>One conversation is enough for both of us to know whether this is a fit. No pitch deck, no discovery fee, and an honest answer if we&apos;re the wrong people for it.</p>
          </div>
        </section>

        <section className="contact-grid w" style={{ paddingTop: 60 }}>
          <div className="c-side" data-r-fade="true">
            <h2>Two ways to reach us</h2>
            <p>Book a discovery call directly, or send a short brief through the form and we&apos;ll reply within one business day.</p>

            <div id="booking-embed" className="sheet" style={{ padding: 28 }}>
              <div className="sh-bar" style={{ margin: "-28px -28px 20px", padding: "15px 26px" }}>
                <span>Book a discovery call</span><span>30 MIN</span>
              </div>
              {/* TODO: replace with a real scheduling embed (Cal.com / Calendly).
                  <div className="calendly-inline-widget" data-url="https://cal.com/nextoralabs/discovery"></div>
                  Until that's wired in, this links out to an email with a
                  pre-filled subject so booking still works today. */}
              <p style={{ fontSize: 14, marginBottom: 18 }}>Pick a time directly, or email us and we&apos;ll send options within one business day.</p>
              <a href="mailto:info@nextoralabs.com?subject=Discovery%20call%20request" className="btn b2" style={{ width: "100%", justifyContent: "center" }}>Request a time <span className="ar">→</span></a>
            </div>

            <div className="c-detail">
              <div><div className="ck">Email</div><a className="cv" href="mailto:info@nextoralabs.com">info@nextoralabs.com</a></div>
              <div><div className="ck">Location</div><div className="cv">Toronto, Canada</div></div>
              <div><div className="ck">Response time</div><div className="cv">Within one business day</div></div>
              <div><div className="ck">Every engagement includes</div><div className="cv">A 30-day working trial on a dedicated domain</div></div>
            </div>

            <div className="faq">
              <details className="faq-item">
                <summary>Do you work with pre-funding startups?<span className="pm">+</span></summary>
                <p>Yes — the Starter plan is built for exactly this. We&apos;ll tell you honestly if your idea needs more validation before an engineering engagement makes sense.</p>
              </details>
              <details className="faq-item">
                <summary>What&apos;s included in the 30-day trial?<span className="pm">+</span></summary>
                <p>A dedicated trial domain, a working product preview, live testing with real users, a structured feedback cycle, and no long-term commitment attached to the period itself.</p>
              </details>
              <details className="faq-item">
                <summary>Do you sign NDAs?<span className="pm">+</span></summary>
                <p>Yes, routinely, before any detailed discovery conversation if you&apos;d like one in place.</p>
              </details>
              <details className="faq-item">
                <summary>What&apos;s a typical engagement length?<span className="pm">+</span></summary>
                <p>Four to fourteen weeks for most projects, depending on scope — see the Pricing section on our Services page for typical ranges per plan.</p>
              </details>
            </div>
          </div>

          <div data-r-fade="true" style={{ "--d": "120ms" } as React.CSSProperties}>
            <form id="contactForm" className="sheet" style={{ padding: 36 }} noValidate>
              <div className="form-grid">
                <div className="field" data-field="name">
                  <label htmlFor="f-name">Name</label>
                  <input id="f-name" name="name" type="text" autoComplete="name" />
                  <span className="err">Please enter your name.</span>
                </div>
                <div className="field" data-field="email">
                  <label htmlFor="f-email">Email</label>
                  <input id="f-email" name="email" type="email" autoComplete="email" />
                  <span className="err">Please enter a valid email address.</span>
                </div>
                <div className="field" data-field="company">
                  <label htmlFor="f-company">Company <span style={{ textTransform: "none" }}>(optional)</span></label>
                  <input id="f-company" name="company" type="text" autoComplete="organization" />
                </div>
                <div className="field" data-field="service">
                  <label htmlFor="f-service">Interested in</label>
                  <select id="f-service" name="service">
                    <option value="">Select one</option>
                    <option>Web Development</option>
                    <option>Mobile Development</option>
                    <option>AI &amp; Automation</option>
                    <option>Product Design</option>
                    <option>MVP Development</option>
                    <option>Not sure yet</option>
                  </select>
                </div>
                <div className="field full" data-field="message">
                  <label htmlFor="f-message">Tell us about the project</label>
                  <textarea id="f-message" name="message" rows={6}></textarea>
                  <span className="err">A short description helps us reply usefully — a sentence or two is fine.</span>
                </div>
              </div>
              <div className="form-foot">
                <button type="submit" className="btn b1" id="submitBtn">
                  <span className="spin"></span><span className="btxt">Send message</span><span className="ar">→</span>
                </button>
                <span className="form-note">We&apos;ll reply within one business day.</span>
              </div>
              <div className="form-msg" id="formMsg"></div>
            </form>
          </div>
        </section>

        <section className="cta" style={{ marginTop: 60 }}>
          <div className="eclipse-soft"></div>
          <div className="w"><div className="cta-in" data-r-fade="true">
            <div className="lb dk" style={{ justifyContent: "center" }} data-r-fade="true"><i></i><b>NX—C2</b> Prefer email</div>
            <h2>info@nextoralabs.com</h2>
            <p>Direct to both founders — no ticketing system in between.</p>
          </div></div>
        </section>
      </main>
      <Script src="/js/contact-form.js" strategy="afterInteractive" />
    </>
  );
}
