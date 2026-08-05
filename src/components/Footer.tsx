import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="w">
        <div className="ft">
          <div>
            <Link href="/" className="logo">
              <img src="/img/logo-mark.png" alt="Nextora Labs" style={{ height: 20, width: "auto", display: "block" }} />
              Nextora Labs
            </Link>
            <p className="ftg">A two-founder software engineering company building web, mobile and AI systems from Toronto, Canada.</p>
            <div className="fso">
              <a href="https://linkedin.com" target="_blank" rel="noopener">LinkedIn</a>
            </div>
          </div>
          <div className="fcol">
            <h5>Company</h5>
            <ul>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/process">Process</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/blog">Writing</Link></li>
            </ul>
          </div>
          <div className="fcol">
            <h5>Contact</h5>
            <ul>
              <li><a href="mailto:info@nextoralabs.com">info@nextoralabs.com</a></li>
              <li><Link href="/contact">Start a conversation</Link></li>
              <li><Link href="/privacy">Privacy</Link></li>
              <li><Link href="/terms">Terms</Link></li>
            </ul>
          </div>
        </div>
        <div className="fbot">
          <span>© 2026 NEXTORA LABS</span>
          <span>TORONTO · CANADA</span>
        </div>
      </div>
    </footer>
  );
}
