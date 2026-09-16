"use client";

import { useState } from "react";
import { Check, Copy, Mail, Send } from "lucide-react";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const email = "asrimela14410@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(
      formData.subject || "Pesan dari Portofolio"
    )}&body=${encodeURIComponent(
      `Nama: ${formData.name}\nEmail: ${formData.email}\n\nPesan:\n${formData.message}`
    )}`;
    window.open(mailtoUrl, "_blank");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="section-pad relative overflow-hidden bg-slate-50/50 dark:bg-slate-900/40">
      <div className="container-custom relative">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14">
          <span
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3 border"
            style={{
              background: "var(--surface)",
              borderColor: "var(--border)",
              color: "var(--accent)",
            }}
          >
            Get In Touch
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight"
            style={{ fontFamily: "var(--font-cormorant)", color: "var(--text)" }}
          >
            Hubungi <span style={{ color: "var(--accent)" }}>Saya</span>
          </h2>
          <p
            className="mt-2 text-sm max-w-xl mx-auto leading-relaxed"
            style={{ color: "var(--text-muted)" }}
          >
            Punya ide proyek, tawaran magang, atau sekadar ingin menyapa? Jangan ragu untuk terhubung.
          </p>
        </div>

        {/* 2-Column Contact Layout */}
        <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto items-start">
          {/* Left Column: Let's Talk & Info Cards */}
          <div className="space-y-6">
            <div>
              <h3
                className="text-2xl font-semibold mb-2"
                style={{ fontFamily: "var(--font-cormorant)", color: "var(--text)" }}
              >
                Let&apos;s Talk
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                Saya selalu terbuka untuk mendiskusikan proyek baru, ide pengembangan website,
                peluang magang, maupun kerja sama tim.
              </p>
            </div>

            <div className="space-y-3">
              {/* Email Card with Copy */}
              <div
                className="flex items-center justify-between p-4 rounded-2xl border shadow-sm transition-all hover:scale-102"
                style={{
                  background: "var(--surface)",
                  borderColor: "var(--border)",
                }}
              >
                <a
                  href={`mailto:${email}`}
                  className="flex items-center gap-3.5 flex-1 min-w-0"
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                    style={{
                      background: "var(--accent-soft)",
                      color: "var(--accent)",
                    }}
                  >
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs uppercase font-medium tracking-wider" style={{ color: "var(--text-muted)" }}>
                      Email Langsung
                    </p>
                    <p className="text-sm font-semibold truncate" style={{ color: "var(--text)" }}>
                      {email}
                    </p>
                  </div>
                </a>

                <button
                  type="button"
                  onClick={handleCopy}
                  className="ml-2 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-semibold transition-all hover:bg-slate-100 dark:hover:bg-slate-800"
                  style={{ borderColor: "var(--border)", color: "var(--text)" }}
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Tersalin!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Salin</span>
                    </>
                  )}
                </button>
              </div>

              {/* Status Ketersediaan Card */}
              <div
                className="p-4 rounded-2xl border shadow-sm"
                style={{
                  background: "var(--surface)",
                  borderColor: "var(--border)",
                }}
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                    Status Ketersediaan
                  </span>
                </div>
                <p className="text-sm font-medium" style={{ color: "var(--text)" }}>
                  Terbuka untuk kesempatan magang (PKL), kolaborasi proyek, dan eksplorasi teknologi baru.
                </p>
              </div>

              {/* Fast Response Card */}
              <div
                className="p-4 rounded-2xl border shadow-sm"
                style={{
                  background: "var(--surface)",
                  borderColor: "var(--border)",
                }}
              >
                <p className="text-xs uppercase font-medium tracking-wider mb-1" style={{ color: "var(--text-muted)" }}>
                  Waktu Respon &amp; Lokasi
                </p>
                <p className="text-sm font-medium" style={{ color: "var(--text)" }}>
                  Indonesia (WIB / UTC+7) • Membalas surat elektronik dalam 1x24 jam kerja.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div
            className="rounded-3xl border p-6 sm:p-8 shadow-sm"
            style={{
              background: "var(--surface)",
              borderColor: "var(--border)",
            }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs font-semibold" style={{ color: "var(--text)" }}>
                    Nama Lengkap
                  </label>
                  <input
                    id="name"
                    required
                    placeholder="Nama Anda"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full rounded-xl border px-3.5 py-2.5 text-sm outline-none transition-colors"
                    style={{
                      borderColor: "var(--border)",
                      background: "var(--bg-soft)",
                      color: "var(--text)",
                    }}
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-semibold" style={{ color: "var(--text)" }}>
                    Alamat Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full rounded-xl border px-3.5 py-2.5 text-sm outline-none transition-colors"
                    style={{
                      borderColor: "var(--border)",
                      background: "var(--bg-soft)",
                      color: "var(--text)",
                    }}
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="subject" className="text-xs font-semibold" style={{ color: "var(--text)" }}>
                  Subjek Pesan
                </label>
                <input
                  id="subject"
                  required
                  placeholder="Penawaran Proyek / Pertanyaan"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full rounded-xl border px-3.5 py-2.5 text-sm outline-none transition-colors"
                  style={{
                    borderColor: "var(--border)",
                    background: "var(--bg-soft)",
                    color: "var(--text)",
                  }}
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs font-semibold" style={{ color: "var(--text)" }}>
                  Pesan
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  placeholder="Tuliskan pesan atau detail kebutuhan proyek Anda..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full rounded-xl border px-3.5 py-2.5 text-sm outline-none transition-colors resize-none"
                  style={{
                    borderColor: "var(--border)",
                    background: "var(--bg-soft)",
                    color: "var(--text)",
                  }}
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-semibold text-sm text-white shadow-sm transition-all hover:opacity-95 active:scale-98"
                style={{ background: "var(--accent)" }}
              >
                {submitted ? (
                  <>
                    <Check className="w-4 h-4" />
                    Pesan Disiapkan!
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Kirim Pesan
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
