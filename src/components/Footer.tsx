import { Mail, MessageCircle } from "lucide-react";
import { SiGithub } from "react-icons/si";

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

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/628817047793"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="w-10 h-10 rounded-full border flex items-center justify-center transition-all hover:-translate-y-0.5"
              style={{
                background: "var(--surface)",
                borderColor: "var(--border)",
                color: "var(--text)",
              }}
            >
              <MessageCircle className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/goldierajaborn-dev"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-10 h-10 rounded-full border flex items-center justify-center transition-all hover:-translate-y-0.5"
              style={{
                background: "var(--surface)",
                borderColor: "var(--border)",
                color: "var(--text)",
              }}
            >
              <SiGithub className="w-4 h-4" />
            </a>
            <a
              href="mailto:asrimela14410@gmail.com"
              aria-label="Email"
              className="w-10 h-10 rounded-full border flex items-center justify-center transition-all hover:-translate-y-0.5"
              style={{
                background: "var(--surface)",
                borderColor: "var(--border)",
                color: "var(--text)",
              }}
            >
              <Mail className="w-4 h-4" />
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
