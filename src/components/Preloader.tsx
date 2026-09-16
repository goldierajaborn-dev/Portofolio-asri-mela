"use client";

import { useEffect, useState } from "react";

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoaded(true), 200);
          setTimeout(() => setShouldRender(false), 700);
          return 100;
        }
        const diff = Math.floor(Math.random() * 25) + 15;
        return Math.min(prev + diff, 100);
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  if (!shouldRender) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-white dark:bg-[#0f172a] transition-opacity duration-700 ${
        isLoaded ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: "40vw",
          height: "40vw",
          maxWidth: "500px",
          maxHeight: "500px",
          top: "-15%",
          left: "-10%",
          background: "var(--accent)",
          opacity: 0.08,
          filter: "blur(100px)",
        }}
      />
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: "36vw",
          height: "36vw",
          maxWidth: "460px",
          maxHeight: "460px",
          bottom: "-15%",
          right: "-10%",
          background: "var(--mauve)",
          opacity: 0.08,
          filter: "blur(100px)",
        }}
      />

      <div className="relative text-center px-6">
        <p
          className="text-[10px] tracking-[0.5em] uppercase mb-6 font-semibold"
          style={{ color: "var(--text-muted)" }}
        >
          Portfolio
        </p>
        <h1
          className="text-4xl sm:text-5xl lg:text-6xl font-medium leading-[1.1]"
          style={{ fontFamily: "var(--font-cormorant)", color: "var(--text)" }}
        >
          Asri<br />
          <span style={{ color: "var(--accent)" }}>Mela</span>{" "}
          <span className="italic" style={{ color: "var(--text-muted)" }}>
            Aldian Syah
          </span>
        </h1>
        <div className="flex items-center justify-center gap-2 mt-6 mb-8">
          <span className="w-8 h-[1px] border-t" style={{ borderColor: "var(--border)" }} />
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--accent)" }} />
          <span className="w-8 h-[1px] border-t" style={{ borderColor: "var(--border)" }} />
        </div>
        <p
          className="text-xs sm:text-sm tracking-[0.2em] uppercase font-medium"
          style={{ color: "var(--text-muted)" }}
        >
          Personal Portfolio
        </p>
        <div
          className="mt-10 mx-auto w-32 h-[3px] rounded-full overflow-hidden"
          style={{ background: "var(--border)" }}
        >
          <div
            className="h-full rounded-full transition-all duration-200"
            style={{ width: `${progress}%`, background: "var(--accent)" }}
          />
        </div>
      </div>
    </div>
  );
}
