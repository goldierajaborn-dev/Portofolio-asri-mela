import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="min-h-[75vh] flex items-center justify-center px-4 py-28">
        <div
          className="max-w-md w-full text-center space-y-6 p-8 rounded-3xl border shadow-xl backdrop-blur-md"
          style={{ background: "var(--surface)", borderColor: "var(--border)" }}
        >
          <div
            className="inline-flex items-center justify-center w-20 h-20 rounded-2xl border"
            style={{
              borderColor: "var(--border)",
              background: "var(--bg-soft)",
            }}
          >
            <span
              className="text-4xl font-extrabold font-mono"
              style={{ color: "var(--accent)" }}
            >
              404
            </span>
          </div>

          <div className="space-y-2">
            <h1
              className="text-2xl sm:text-3xl font-medium tracking-tight"
              style={{ fontFamily: "var(--font-cormorant)", color: "var(--text)" }}
            >
              Halaman Tidak Ditemukan
            </h1>
            <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
              Halaman atau ID proyek yang kamu cari tidak tersedia di portofolio ini.
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/project"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all hover:scale-105"
              style={{ background: "var(--accent)", color: "#fff" }}
            >
              <ArrowLeft className="w-4 h-4" />
              Lihat Proyek
            </Link>
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold border transition-all hover:scale-105"
              style={{
                borderColor: "var(--border)",
                background: "var(--surface)",
                color: "var(--text)",
              }}
            >
              <Home className="w-4 h-4" />
              Kembali ke Beranda
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
