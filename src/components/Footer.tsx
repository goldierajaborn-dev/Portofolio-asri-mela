import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t py-12" style={{ borderColor: "var(--border)" }}>
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p
              className="text-2xl font-semibold mb-1"
              style={{ fontFamily: "var(--font-cormorant)", color: "var(--text)" }}
            >
              Mela<span style={{ color: "var(--accent)" }}>.</span>
            </p>
            <p className="text-xs" style={{ color: "var(--text-muted)" }}>
              Designed &amp; developed with curiosity.
            </p>
          </div>

          {/* Direct Email Contact Link */}
          <div className="flex items-center gap-3">
            <a
              href="mailto:asrimela14410@gmail.com"
              aria-label="Email"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-semibold transition-all hover:-translate-y-0.5 shadow-sm"
              style={{
                background: "var(--surface)",
                borderColor: "var(--border)",
                color: "var(--text)",
              }}
            >
              <Mail className="w-3.5 h-3.5 text-amber-600" />
              <span>asrimela14410@gmail.com</span>
            </a>
          </div>
        </div>

        {/* Bottom Credits */}
        <div
          className="mt-8 pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-3 text-xs"
          style={{ borderColor: "var(--border)", color: "var(--text-muted)" }}
        >
          <p>© 2026 Asri Mela Aldian Syah. All rights reserved.</p>
          <p>Made with passion in Indonesia.</p>
        </div>
      </div>
    </footer>
  );
}
