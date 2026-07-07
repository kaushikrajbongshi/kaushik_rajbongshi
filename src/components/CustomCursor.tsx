"use client";

import { useEffect, useRef } from "react";

interface CustomCursorProps {
  accent?: string;
  ringColor?: string;
  withGlow?: boolean;
  glowColor?: string;
}

export default function CustomCursor({
  accent = "#c8ff00",
  ringColor,
  withGlow = false,
  glowColor,
}: CustomCursorProps) {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mx = 0,
      my = 0,
      rx = 0,
      ry = 0;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.left = `${mx}px`;
        dotRef.current.style.top = `${my}px`;
      }
      if (glowRef.current) {
        glowRef.current.style.left = `${mx}px`;
        glowRef.current.style.top = `${my}px`;
      }
    };

    const loop = () => {
      rx += (mx - rx) * 0.13;
      ry += (my - ry) * 0.13;
      if (ringRef.current) {
        ringRef.current.style.left = `${rx}px`;
        ringRef.current.style.top = `${ry}px`;
      }
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      {withGlow && (
        <div
          ref={glowRef}
          className="cursor-glow"
          style={{
            background: `radial-gradient(circle, ${
              glowColor ?? "rgba(200,255,0,0.032)"
            } 0%, transparent 70%)`,
          }}
        />
      )}
      <div ref={dotRef} className="cursor-dot" style={{ background: accent }} />
      <div
        ref={ringRef}
        className="cursor-ring"
        style={{ borderColor: ringColor ?? accent }}
      />
      <div className="noise-overlay" />
    </>
  );
}
