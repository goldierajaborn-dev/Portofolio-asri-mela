import Link from "next/link";
import { ArrowRight, Compass, Home } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Navbar />

      <main className="min-h-[85vh] flex items-center justify-center px-4 py-32 relative overflow-hidden">
        {/* Ambient background glow */}
        <div
          className="absolute -top-32 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none opacity-40 dark:opacity-20"
          style={{ background: "radial-gradient(circle, var(--accent) 0%, transparent 70%)" }}
        />

        {/* Decorative Floating Origami Paper Plane */}
        <div className="absolute top-24 right-[15%] pointer-events-none hidden md:block animate-float-plane opacity-60">
          <svg width="44" height="44" viewBox="0 0 64 64" fill="none">
            <path
              d="M60 4 L4 32 L26 38 L38 60 L60 4 Z"
              fill="currentColor"
              className="text-amber-500/20 dark:text-amber-300/20"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinejoin="round"
            />
            <path
              d="M60 4 L26 38"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <div
          className="max-w-lg w-full text-center space-y-8 p-8 sm:p-12 rounded-3xl border shadow-xl relative z-10 backdrop-blur-md"
          style={{ background: "var(--surface)", borderColor: "var(--border)" }}
        >
          {/* Butterfly Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-semibold"
            style={{
              borderColor: "var(--border)",
              background: "var(--bg-soft)",
              color: "var(--accent)",
            }}
          >
            {/* Animated mini butterfly */}
            <svg
              width="16"
              height="16"
              viewBox="0 0 32 32"
              fill="none"
              className="inline-block animate-flutter-butterfly"
            >
              <path
                className="animate-wing"
                d="M16 16 C11 7, 3 8, 4 17 C5 23, 14 20, 16 16 Z"
                fill="currentColor"
                fillOpacity="0.75"
                stroke="currentColor"
                strokeWidth="1.2"
              />
              <path
                className="animate-wing"
                d="M16 16 C21 7, 29 8, 28 17 C27 23, 18 20, 16 16 Z"
                fill="currentColor"
                fillOpacity="0.75"
                stroke="currentColor"
                strokeWidth="1.2"
              />
              <circle cx="16" cy="16" r="1.5" fill="currentColor" />
            </svg>
            <span>Error 404 • Not Found</span>
          </div>

          {/* Large Serif 404 Typography */}
          <div>
            <h1
              className="text-7xl sm:text-8xl font-light tracking-tight select-none"
              style={{ fontFamily: "var(--font-cormorant)", color: "var(--text)" }}
            >
              4<span style={{ color: "var(--accent)" }}>0</span>4
            </h1>
            <h2
              className="text-2xl sm:text-3xl font-medium mt-2 tracking-tight"
              style={{ fontFamily: "var(--font-cormorant)", color: "var(--text)" }}
            >
              Halaman Tidak Ditemukan
            </h2>
            <p className="mt-3 text-sm leading-relaxed max-w-sm mx-auto" style={{ color: "var(--text-muted)" }}>
              Halaman atau rute yang Anda tuju belum tersedia, mungkin telah dipindahkan, atau tautan yang dimasukkan keliru.
            </p>
          </div>

          {/* Action Navigation Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Link
              href="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white shadow-sm transition-all hover:opacity-95 hover:scale-[1.02] active:scale-98"
              style={{ background: "var(--accent)" }}
            >
              <Home className="w-4 h-4" />
              <span>Kembali ke Beranda</span>
            </Link>

            <Link
              href="/project"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold border transition-all hover:bg-slate-100 dark:hover:bg-slate-800 active:scale-98"
              style={{
                borderColor: "var(--border)",
                background: "var(--surface)",
                color: "var(--text)",
              }}
            >
              <Compass className="w-4 h-4" />
              <span>Jelajahi Proyek</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
