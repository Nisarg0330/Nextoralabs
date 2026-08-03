const CONTACT_EMAIL = "info@nextoralabs.ca";
// Placeholder — replace with the real company page before deploying.
const LINKEDIN_URL = "https://www.linkedin.com/company/nextoralabs";

/** Logomark: the page composition in miniature — an accent arc rising through a horizon. */
function Logomark() {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      aria-hidden="true"
    >
      <rect x="0.5" y="0.5" width="25" height="25" rx="7" stroke="#1B2333" />
      <path d="M4 18.5h18" stroke="#F5F4F1" strokeOpacity="0.16" />
      <path
        d="M6 18.5a7 7 0 0 1 14 0"
        stroke="#4C6FFF"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function ComingSoon() {
  const year = new Date().getFullYear();

  return (
    <div className="relative flex min-h-dvh flex-col overflow-hidden bg-ink-900">
      {/* Ambient layers */}
      <div className="field-grid pointer-events-none absolute inset-0" />
      <div className="field-grain pointer-events-none absolute inset-0" />

      {/* Top rail */}
      <header className="rise relative z-10 flex items-center justify-between px-5 py-8 md:px-16">
        <span role="img" aria-label="Nextora Labs">
          <Logomark />
        </span>
        <span className="micro">Canada · North America</span>
      </header>

      {/* Centre stack */}
      <main className="relative z-10 flex flex-1 flex-col items-center justify-center">
        <div
          className="rise w-full"
          style={{ animationDelay: "120ms" }}
          aria-hidden="true"
        >
          <div className="dome-stage">
            <div className="dome-horizon" />
            <div className="dome" />
          </div>
        </div>

        <div className="flex flex-col items-center px-5 text-center md:px-16">
          <h1 className="statement rise" style={{ animationDelay: "320ms" }}>
            COMING SOON
          </h1>

          <p
            className="wordmark rise mt-6"
            style={{ animationDelay: "440ms" }}
          >
            NEXTORA LABS
          </p>

          <p
            className="lede rise mt-10 max-w-[46ch] text-balance"
            style={{ animationDelay: "560ms" }}
          >
            A founder-led Canadian technology company building web, mobile, and
            AI products for startups across North America. The site is on its
            way — we&rsquo;re already taking on new projects.
          </p>

          <div
            className="rise mt-12 flex flex-col items-center gap-5 text-sm sm:flex-row sm:gap-8"
            style={{ animationDelay: "680ms" }}
          >
            <a className="contact-link" href={`mailto:${CONTACT_EMAIL}`}>
              {CONTACT_EMAIL}
            </a>
            <span
              className="hidden h-3 w-px bg-ink-700 sm:block"
              aria-hidden="true"
            />
            <a
              className="contact-link"
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </main>

      {/* Bottom rail */}
      <footer
        className="rise relative z-10 flex items-center justify-between px-5 py-8 md:px-16"
        style={{ animationDelay: "800ms" }}
      >
        <span className="micro">© {year} Nextora Labs</span>
        <span className="micro flex items-center gap-2.5">
          <span
            className="status-dot size-1.5 rounded-full bg-accent-violet"
            aria-hidden="true"
          />
          Site in development
        </span>
      </footer>
    </div>
  );
}
