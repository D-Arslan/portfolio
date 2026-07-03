"use client";

import { useEffect, useRef, useState } from "react";

export function useInView(threshold = 0) {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      // threshold 0 + marge basse : se déclenche dès que la section entre à
      // l'écran, quelle que soit sa hauteur (une section haute en 1 colonne sur
      // mobile ne pouvait jamais atteindre 15% visibles → restait invisible).
      { threshold, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}
