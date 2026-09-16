import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight, Filter, Sparkles } from "lucide-react";
import { SiGithub } from "react-icons/si";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { projects } from "../../../data";

export const metadata = {
  title: "Katalog Proyek & Karya — Asri Mela",
  description: "Daftar lengkap karya kejuruan dan proyek pengembangan web oleh Asri Mela Aldian Syah.",
};

const CATEGORIES = [
  { label: "Semua", value: "all", href: "/project" },
  { label: "Web", value: "web", href: "/project?category=web" },
  { label: "Fullstack", value: "fullstack", href: "/project?category=fullstack" },
  { label: "Frontend", value: "frontend", href: "/project?category=frontend" },
];

export default async function ProjectCatalogPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const resolvedParams = await searchParams;
  const activeCategory = resolvedParams.category?.toLowerCase() || "all";

  const filteredProjects = activeCategory === "all"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <>
      <Navbar />

      <main className="min-h-screen pt-28 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="container-custom space-y-10">
          
          {/* Header & Back Action */}
          <div className="space-y-4">
            <Link
              href="/#projects"
              className="group inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-sm font-medium transition-all hover:scale-105"
              style={{
                borderColor: "var(--border)",
                background: "var(--surface)",
                color: "var(--text)",
              }}
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Kembali ke Beranda
            </Link>

            <div>
              <div
                className="inline-flex items-center gap-2 rounded-full border px-3.5 py-1 text-xs font-semibold uppercase tracking-wider mb-3"
                style={{
                  borderColor: "var(--border)",
                  background: "var(--bg-soft)",
                  color: "var(--accent)",
                }}
              >
                <Sparkles className="h-3.5 w-3.5" />
                Arsip Karya Kejuruan
              </div>
              <h1
                className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight"
                style={{ fontFamily: "var(--font-cormorant)", color: "var(--text)" }}
              >
                Katalog Proyek &amp; Studi Kasus
              </h1>
              <p className="mt-2 text-sm max-w-2xl leading-relaxed" style={{ color: "var(--text-muted)" }}>
                Kumpulan proyek pengembangan perangkat lunak, sistem administrasi sekolah, dan eksperimen antarmuka frontend interaktif oleh Asri Mela.
              </p>
            </div>
          </div>

          {/* Filter Pills with Count */}
          <div className="flex flex-wrap items-center gap-2 pt-2">
            <span
              className="flex items-center gap-1.5 text-xs font-semibold mr-2"
              style={{ color: "var(--text-muted)" }}
            >
              <Filter className="w-3.5 h-3.5" />
              Filter Kategori:
            </span>
            {CATEGORIES.map((cat) => {
              const isSelected = activeCategory === cat.value;
              const count = cat.value === "all"
                ? projects.length
                : projects.filter((p) => p.category === cat.value).length;

              return (
                <Link
                  key={cat.value}
                  href={cat.href}
                  className={`px-4 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 border flex items-center gap-1.5 ${
                    isSelected ? "shadow-md scale-105" : "hover:scale-102"
                  }`}
                  style={{
                    background: isSelected ? "var(--accent)" : "var(--surface)",
                    borderColor: isSelected ? "var(--accent)" : "var(--border)",
                    color: isSelected ? "#ffffff" : "var(--text)",
                  }}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                      isSelected ? "bg-white/20 text-white" : "bg-slate-100 dark:bg-slate-800 text-slate-500"
                    }`}
                  >
                    {count}
                  </span>
                </Link>
              );
            })}
          </div>

          {/* Projects Catalog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 pt-2">
            {filteredProjects.map((project) => (
              <article
                key={project.id}
                className="rounded-3xl border p-6 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 group"
                style={{
                  background: "var(--surface)",
                  borderColor: "var(--border)",
                }}
              >
                <div className="space-y-4">
                  {/* Thumbnail Frame */}
                  <div
                    className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border bg-slate-900"
                    style={{ borderColor: "var(--border)" }}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div
                      className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase backdrop-blur-md border text-white"
                      style={{
                        background: "rgba(15, 23, 42, 0.75)",
                        borderColor: "rgba(255, 255, 255, 0.2)",
                      }}
                    >
                      {project.categoryLabel}
                    </div>

                    <span className="absolute top-3 right-3 text-xs font-mono font-bold text-white/80 bg-black/40 px-2 py-0.5 rounded-md backdrop-blur-sm">
                      #{project.id}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h2
                      className="text-xl sm:text-2xl font-medium transition-colors group-hover:text-indigo-600 dark:group-hover:text-indigo-400"
                      style={{ fontFamily: "var(--font-cormorant)", color: "var(--text)" }}
                    >
                      {project.title}
                    </h2>
                    <p
                      className="mt-2 text-sm line-clamp-2 leading-relaxed"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {project.description}
                    </p>
                  </div>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="text-[11px] px-2.5 py-0.5 rounded-lg border font-medium"
                        style={{
                          borderColor: "var(--border)",
                          background: "var(--bg-soft)",
                          color: "var(--text)",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Detail Trigger & Github */}
                <div
                  className="mt-6 pt-4 border-t flex items-center justify-between"
                  style={{ borderColor: "var(--border)" }}
                >
                  <Link
                    href={`/project/${project.id}`}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold transition-all hover:gap-2"
                    style={{ color: "var(--accent)" }}
                  >
                    <span>Studi Kasus Lengkap</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg border text-slate-500 hover:text-indigo-600 transition-colors"
                    style={{ borderColor: "var(--border)" }}
                    aria-label="GitHub Repository"
                  >
                    <SiGithub className="w-4 h-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div
              className="text-center py-16 rounded-3xl border"
              style={{ background: "var(--surface)", borderColor: "var(--border)" }}
            >
              <p style={{ color: "var(--text-muted)" }}>
                Tidak ada proyek yang sesuai dengan kategori ini.
              </p>
              <Link
                href="/project"
                className="mt-3 inline-block text-xs font-semibold underline"
                style={{ color: "var(--accent)" }}
              >
                Tampilkan Semua Proyek
              </Link>
            </div>
          )}

        </div>
      </main>

      <Footer />
    </>
  );
}
