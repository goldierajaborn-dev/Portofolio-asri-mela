import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Code2,
  ExternalLink,
  FolderGit2,
  Layers,
  Sparkles,
  Terminal,
} from "lucide-react";
import { SiGithub } from "react-icons/si";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { projects } from "../../../../data";

export async function generateStaticParams() {
  const paths: { id: string }[] = [];
  projects.forEach((p) => {
    paths.push({ id: p.id });
    paths.push({ id: p.slug });
  });
  return paths;
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id || p.slug === id);

  if (!project) {
    notFound();
  }

  // Other projects for seamless switching
  const otherProjects = projects.filter((p) => p.id !== project.id);

  return (
    <>
      <Navbar />

      <main className="min-h-screen pt-28 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl space-y-8">
          
          {/* Top Breadcrumbs & Navigation Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm">
            <div className="flex items-center gap-2" style={{ color: "var(--text-muted)" }}>
              <Link href="/" className="hover:underline">
                Beranda
              </Link>
              <span>/</span>
              <Link href="/project" className="hover:underline">
                Katalog Proyek
              </Link>
              <span>/</span>
              <span className="font-semibold truncate max-w-[200px]" style={{ color: "var(--accent)" }}>
                {project.title}
              </span>
            </div>

            <Link
              href="/project"
              className="inline-flex items-center gap-1.5 font-medium hover:underline"
              style={{ color: "var(--accent)" }}
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Kembali ke Katalog
            </Link>
          </div>

          {/* Project Title & Meta Banner */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border" style={{ borderColor: "var(--border)", background: "var(--bg-soft)", color: "var(--accent)" }}>
              <Sparkles className="w-3.5 h-3.5" />
              <span>Studi Kasus • Proyek #{project.id}</span>
            </div>

            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-tight"
              style={{ fontFamily: "var(--font-cormorant)", color: "var(--text)" }}
            >
              {project.title}
            </h1>

            <p className="text-sm sm:text-base leading-relaxed max-w-3xl" style={{ color: "var(--text-muted)" }}>
              {project.description}
            </p>

            {/* Quick Specification Grid */}
            <div
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 sm:p-5 rounded-2xl border"
              style={{
                background: "var(--surface)",
                borderColor: "var(--border)",
              }}
            >
              <div>
                <p className="text-[10px] uppercase font-bold tracking-wider" style={{ color: "var(--text-muted)" }}>
                  Kategori
                </p>
                <p className="text-xs sm:text-sm font-semibold mt-0.5" style={{ color: "var(--text)" }}>
                  {project.categoryLabel}
                </p>
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold tracking-wider" style={{ color: "var(--text-muted)" }}>
                  Peran
                </p>
                <p className="text-xs sm:text-sm font-semibold mt-0.5" style={{ color: "var(--text)" }}>
                  Siswi RPL / Developer
                </p>
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold tracking-wider" style={{ color: "var(--text-muted)" }}>
                  Tahun
                </p>
                <p className="text-xs sm:text-sm font-semibold mt-0.5" style={{ color: "var(--text)" }}>
                  2025
                </p>
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold tracking-wider" style={{ color: "var(--text-muted)" }}>
                  Status
                </p>
                <p className="text-xs sm:text-sm font-semibold mt-0.5 text-emerald-600 dark:text-emerald-400">
                  Completed / Ready
                </p>
              </div>
            </div>
          </div>

          {/* Browser Mockup Showcase Frame */}
          <div
            className="rounded-2xl sm:rounded-3xl border overflow-hidden shadow-xl bg-slate-950"
            style={{ borderColor: "var(--border)" }}
          >
            {/* Window Titlebar */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-800 bg-slate-900">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              </div>
              <div className="flex-1 mx-3 px-3 py-1 rounded-md bg-slate-800/80 text-center text-xs font-mono text-slate-400 truncate">
                mela-portfolio.local/showcase/{project.slug}
              </div>
            </div>

            {/* High-Resolution Screenshot */}
            <div className="relative aspect-[16/9] w-full overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 900px"
                className="object-cover"
              />
            </div>
          </div>

          {/* Detailed Narrative Section */}
          <div className="grid md:grid-cols-3 gap-8 pt-4">
            {/* Left 2 Cols: Story & Features */}
            <div className="md:col-span-2 space-y-8">
              {/* Latar Belakang & Solusi */}
              <div
                className="rounded-3xl border p-6 sm:p-8 space-y-3"
                style={{
                  background: "var(--surface)",
                  borderColor: "var(--border)",
                }}
              >
                <h2
                  className="text-lg font-bold uppercase tracking-wider flex items-center gap-2"
                  style={{ color: "var(--accent)" }}
                >
                  <Code2 className="w-4 h-4" />
                  Latar Belakang &amp; Solusi
                </h2>
                <p className="text-sm sm:text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  {project.fullDescription}
                </p>
              </div>

              {/* Fitur Unggulan (Feature Grid) */}
              <div
                className="rounded-3xl border p-6 sm:p-8 space-y-4"
                style={{
                  background: "var(--surface)",
                  borderColor: "var(--border)",
                }}
              >
                <h2
                  className="text-lg font-bold uppercase tracking-wider flex items-center gap-2"
                  style={{ color: "var(--text)" }}
                >
                  <Layers className="w-4 h-4" style={{ color: "var(--accent)" }} />
                  Fitur Unggulan Sistem
                </h2>

                <div className="grid sm:grid-cols-2 gap-3 pt-1">
                  {project.features.map((feat, i) => (
                    <div
                      key={i}
                      className="p-3.5 rounded-xl border flex items-start gap-3 text-xs sm:text-sm leading-relaxed"
                      style={{
                        background: "var(--bg-soft)",
                        borderColor: "var(--border)",
                        color: "var(--text)",
                      }}
                    >
                      <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" style={{ color: "var(--accent)" }} />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right 1 Col: Tech Stack & Actions */}
            <div className="space-y-6">
              {/* Tech Stack Box */}
              <div
                className="rounded-3xl border p-6 space-y-4"
                style={{
                  background: "var(--surface)",
                  borderColor: "var(--border)",
                }}
              >
                <h3 className="text-xs font-bold uppercase tracking-wider" style={{ color: "var(--text)" }}>
                  Teknologi Terapan
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1.5 rounded-xl border font-medium flex items-center gap-1.5"
                      style={{
                        borderColor: "var(--border)",
                        background: "var(--bg-soft)",
                        color: "var(--text)",
                      }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--accent)" }} />
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Links Box */}
              <div
                className="rounded-3xl border p-6 space-y-3"
                style={{
                  background: "var(--surface)",
                  borderColor: "var(--border)",
                }}
              >
                <h3 className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: "var(--text)" }}>
                  Tautan Proyek
                </h3>

                {project.githubUrl !== "#" && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold border transition-all hover:bg-slate-50 dark:hover:bg-slate-800"
                    style={{
                      borderColor: "var(--border)",
                      color: "var(--text)",
                    }}
                  >
                    <SiGithub className="w-4 h-4" />
                    Buka Source Code
                  </a>
                )}

                {project.demoUrl !== "#" && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white transition-all hover:opacity-90"
                    style={{ background: "var(--accent)" }}
                  >
                    <ExternalLink className="w-4 h-4" />
                    Kunjungi Demo
                  </a>
                )}

                <Link
                  href="/project"
                  className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold text-center border transition-all hover:scale-102"
                  style={{
                    borderColor: "var(--border)",
                    color: "var(--text-muted)",
                  }}
                >
                  Lihat Seluruh Proyek
                </Link>
              </div>
            </div>
          </div>

          {/* Interactive Switcher to other projects */}
          <div className="pt-8 border-t" style={{ borderColor: "var(--border)" }}>
            <h3 className="text-xs uppercase font-bold tracking-wider mb-4" style={{ color: "var(--text-muted)" }}>
              Eksplorasi Karya Lainnya:
            </h3>

            <div className="grid sm:grid-cols-2 gap-4">
              {otherProjects.map((item) => (
                <Link
                  key={item.id}
                  href={`/project/${item.id}`}
                  className="group rounded-2xl border p-4 flex items-center gap-4 transition-all hover:shadow-md hover:-translate-y-0.5"
                  style={{
                    background: "var(--surface)",
                    borderColor: "var(--border)",
                  }}
                >
                  <div className="relative w-16 h-14 rounded-xl overflow-hidden shrink-0 border" style={{ borderColor: "var(--border)" }}>
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="64px"
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] uppercase font-semibold" style={{ color: "var(--accent)" }}>
                      Proyek #{item.id} • {item.categoryLabel}
                    </p>
                    <h4 className="text-sm font-bold truncate mt-0.5" style={{ color: "var(--text)" }}>
                      {item.title}
                    </h4>
                  </div>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 shrink-0" style={{ color: "var(--accent)" }} />
                </Link>
              ))}
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}
