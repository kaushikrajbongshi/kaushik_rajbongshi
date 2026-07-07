"use client";

import { useEffect, useRef, useState } from "react";

export default function Counter({ target }: { target: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            let c = 0;
            const iv = setInterval(() => {
              c = Math.min(c + target / 45, target);
              setValue(Math.floor(c));
              if (c >= target) clearInterval(iv);
            }, 35);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [target]);

  return <span ref={ref}>{value}</span>;
}
