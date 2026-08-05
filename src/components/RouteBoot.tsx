"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

declare global {
  interface Window {
    nx?: Array<() => void>;
  }
}

/* next/script loads each /js file once per session, so on client-side
   navigation the new page's [data-r-fade] elements were never observed
   and stayed at opacity:0 until a full reload. Each script registers its
   per-page work on window.nx; this re-runs all of them per route. */
export default function RouteBoot() {
  const pathname = usePathname();

  useEffect(() => {
    document.body.classList.remove("nav-open");
    window.nx?.forEach((fn) => fn());
  }, [pathname]);

  return null;
}
