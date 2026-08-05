"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { href: "/services", label: "Services" },
  { href: "/process", label: "Process" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Writing" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const isOn = (href: string) => pathname === href || pathname.startsWith(href + "/");

  return (
    <>
      <header id="hd">
        <div className="w">
          <Link href="/" className="logo nva" style={{ "--d": "0ms" } as React.CSSProperties}>
            <img
              src="/img/logo-lockup.png"
              alt="Nextora Labs"
              width={128}
              height={32}
              style={{ height: 32, width: "auto", display: "block" }}
            />
          </Link>
          <div className="nr">
            <nav>
              <ul>
                {NAV_ITEMS.map((item, i) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={isOn(item.href) ? "page" : undefined}
                      className={isOn(item.href) ? "nva on" : "nva"}
                      style={{ "--d": `${60 + i * 40}ms` } as React.CSSProperties}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <Link href="/contact" className="btn b1 nva" id="magnet" style={{ "--d": "280ms" } as React.CSSProperties}>
              Start a conversation <span className="ar">→</span>
            </Link>
            <button className="menu-btn nva" id="menuBtn" style={{ "--d": "280ms" } as React.CSSProperties} aria-label="Open menu">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      {/* RouteBoot clears nav-open on route change; this also covers tapping
          the link for the page you are already on, where it never fires. */}
      <div
        className="mobile-panel"
        id="mobilePanel"
        onClick={() => document.body.classList.remove("nav-open")}
      >
        <ul>
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={isOn(item.href) ? "page" : undefined}
                className={isOn(item.href) ? "on" : undefined}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/contact" className="btn b1 mp-cta">
          Start a conversation <span className="ar">→</span>
        </Link>
      </div>
    </>
  );
}
