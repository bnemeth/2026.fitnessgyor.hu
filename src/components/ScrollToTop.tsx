import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

const restoreScroll = (target: number, attempts = 0) => {
  window.scrollTo(0, target);
  // Ha nem sikerült (pl. a tartalom még nem renderelődött), próbáljuk újra
  if (Math.abs(window.scrollY - target) > 10 && attempts < 10) {
    setTimeout(() => restoreScroll(target, attempts + 1), 30);
  }
};

const ScrollToTop = () => {
  const { pathname, key } = useLocation();
  const navType = useNavigationType();

  // Folyamatosan mentjük az aktuális scroll pozíciót
  useEffect(() => {
    const save = () => {
      sessionStorage.setItem(`scroll:${key}`, String(window.scrollY));
    };
    window.addEventListener("scroll", save, { passive: true });
    return () => window.removeEventListener("scroll", save);
  }, [key]);

  // Oldalváltásnál: PUSH → tetejére, POP → mentett pozíció visszaállítása
  useEffect(() => {
    if (navType === "POP") {
      const saved = sessionStorage.getItem(`scroll:${key}`);
      if (saved) {
        restoreScroll(parseInt(saved));
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, navType, key]);

  return null;
};

export default ScrollToTop;
