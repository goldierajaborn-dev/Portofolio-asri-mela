"use client";

import Image from "next/image";
import { useEffect, useState, type FormEvent } from "react";
import { ArrowUpRight, Check, Heart, Send } from "lucide-react";
import {
  aboutMe,
  contactInfo,
  education,
  experiences,
  footerSocialLinks,
  highlights,
  projects,
  skillCategories,
  stats,
} from "../../data";

const navigation = [
  { id: "home", label: "Beranda" },
  { id: "about", label: "Tentang" },
  { id: "skills", label: "Keahlian" },
  { id: "projects", label: "Proyek" },
  { id: "contact", label: "Kontak" },
];

export default function ConsolePortfolio() {
  const [activeSection, setActiveSection] = useState("home");
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const splashTimer = window.setTimeout(() => setShowSplash(false), 1700);
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActiveSection(entry.target.id)),
      { rootMargin: "-35% 0px -55% 0px", threshold: 0 },
    );
    document.querySelectorAll<HTMLElement>(".page-section").forEach((section) => observer.observe(section));
    return () => {
      window.clearTimeout(splashTimer);
      observer.disconnect();
    };
  }, []);

  const jumpTo = (id: string) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleContactSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const body = `Nama: ${String(form.get("name") ?? "")}\nEmail: ${String(form.get("email") ?? "")}\n\n${String(form.get("message") ?? "")}`;
    window.location.href = `mailto:asrimela14410@gmail.com?subject=${encodeURIComponent(String(form.get("subject") ?? ""))}&body=${encodeURIComponent(body)}`;
  };

  return (
    <main className="portfolio-shell">
      {showSplash && <div className="splash-screen" role="status" aria-label="Memuat portfolio"><span>PORTFOLIO</span><h2>Asri Mela</h2><p>{aboutMe.role}</p></div>}
      <header className="site-header">
        <a className="site-logo" href="#home" onClick={() => setActiveSection("home")}>AM<span>.</span></a>
        <nav className="site-nav" aria-label="Navigasi utama">{navigation.map((item) => <button className={activeSection === item.id ? "active" : ""} key={item.id} onClick={() => jumpTo(item.id)}>{item.label}</button>)}</nav>
        <a className="header-cta" href="#contact">Hubungi saya <ArrowUpRight size={14} /></a>
      </header>

      <div className="page-content">
        <section className="page-section hero-section" id="home">
          <div className="hero-copy"><span className="section-overline">Halo, saya</span><h1>Asri Mela<br /><em>Aldian Syah</em></h1><p className="hero-role">{aboutMe.role}</p><p className="hero-description">{aboutMe.description}</p><div className="hero-actions"><a className="primary-action" href="#projects">Lihat karya <ArrowUpRight size={15} /></a><a className="text-action" href="#contact">Kontak saya <ArrowUpRight size={15} /></a></div></div>
          <div className="hero-visual"><div className="hero-orbit hero-orbit-one" /><div className="hero-orbit hero-orbit-two" /><div className="hero-portrait"><Image src="/images/mela 1.jpeg" alt={`Foto ${aboutMe.name}`} fill priority sizes="(max-width: 850px) 100vw, 440px" /></div><span className="hero-note">RPL student · web enthusiast</span></div>
          <div className="hero-stats">{stats.map((stat) => <div className="hero-stat" key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}</div>
        </section>

        <section className="page-section editorial-section about-section" id="about"><div className="section-heading"><span>01 — Tentang saya</span><h2>Mengenal saya<br /><em>lebih dekat</em></h2></div><div className="about-layout"><div className="about-visual"><div className="about-photo"><Image src="/images/mela 2.jpeg" alt={`Tentang ${aboutMe.name}`} fill sizes="(max-width: 850px) 100vw, 480px" /></div><span className="about-caption">Asri Mela · Indonesia</span></div><div className="about-copy"><p>{aboutMe.description}</p><p>{aboutMe.quote}</p><div className="highlight-grid">{highlights.map(({ icon: Icon, text }) => <span key={text}><Icon size={16} />{text}</span>)}</div></div></div><div className="profile-facts"><div><small>Nama lengkap</small><strong>{aboutMe.name}</strong></div><div><small>Lokasi</small><strong>{aboutMe.location}</strong></div><div><small>Fokus utama</small><strong>Frontend &amp; UI/UX</strong></div><div><small>Status</small><strong>Pelajar aktif</strong></div></div></section>

        <section className="page-section editorial-section skills-section" id="skills"><div className="section-heading"><span>02 — Keahlian</span><h2>Teknologi<br /><em>dan perangkat</em></h2></div><div className="skills-editorial">{skillCategories.map((category) => <article className="skill-panel" key={category.title}><span className="panel-label">{category.title}</span><div>{category.skills.map(({ icon: Icon, name }) => <span className="skill-pill" key={name}><Icon size={17} />{name}</span>)}</div></article>)}</div></section>

        <section className="page-section editorial-section projects-section" id="projects"><div className="section-heading section-heading-row"><div><span>03 — Proyek pilihan</span><h2>Hal-hal yang<br /><em>saya kerjakan</em></h2></div><p>Setiap project menjadi ruang untuk belajar, bereksperimen, dan menciptakan pengalaman digital yang lebih baik.</p></div><div className="projects-editorial">{projects.map((project, index) => <article className="project-card" key={project.title}><div className="project-card-image"><Image src={project.image} alt={project.title} fill sizes="(max-width: 850px) 100vw, 520px" /><span>Proyek {String(index + 1).padStart(2, "0")}</span></div><div className="project-card-body"><div><h3>{project.title}</h3><p>{project.description}</p><div className="project-tags">{project.techStack.map((tech) => <span key={tech}>{tech}</span>)}</div></div><a href={project.demoUrl} target={project.demoUrl === "#" ? undefined : "_blank"} rel="noreferrer" aria-label={`Buka ${project.title}`}><ArrowUpRight size={20} /></a></div></article>)}</div></section>

        <section className="page-section editorial-section experience-section" id="experience"><div className="section-heading"><span>04 — Perjalanan</span><h2>Pengalaman<br /><em>dan pendidikan</em></h2></div><div className="experience-list">{experiences.map((experience, index) => <article className={`experience-card ${index % 2 === 1 ? "experience-card-reverse" : ""}`} key={`${experience.title}-${experience.period}`}><div className="experience-period"><small>0{index + 1}</small>{experience.period}</div><div className="experience-detail"><span className="experience-type">{experience.type}</span><h3>{experience.title}</h3><strong>{experience.company}</strong><p>{experience.description}</p><div className="project-tags">{experience.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div></div></article>)}</div><div className="education-line"><Check size={16} /><span><strong>{education[0].major}</strong> · {education[0].school}</span><time>{education[0].startYear} — {education[0].endYear}</time></div></section>

        <section className="page-section editorial-section contact-section" id="contact"><div className="contact-editorial"><div className="section-heading"><span>05 — Kontak</span><h2>Mari buat sesuatu<br /><em>yang luar biasa.</em></h2><p>Tertarik untuk berkolaborasi atau punya pertanyaan? Silakan hubungi saya melalui saluran di bawah ini.</p></div><div className="contact-side"><span className="panel-label">Kirim pesan langsung</span><div className="contact-links">{contactInfo.map(({ icon: Icon, label, value, href }) => <a href={href} key={label}><Icon size={17} /><span><small>{label}</small>{value}</span><ArrowUpRight size={15} /></a>)}</div><form className="message-form" onSubmit={handleContactSubmit}><div><label htmlFor="name">Nama<input id="name" name="name" placeholder="Nama kamu" required /></label><label htmlFor="email">Email<input id="email" name="email" type="email" placeholder="email@kamu.com" required /></label></div><label htmlFor="subject">Subjek<input id="subject" name="subject" placeholder="Apa yang ingin dibahas?" required /></label><label htmlFor="message">Pesan<textarea id="message" name="message" rows={4} placeholder="Tulis pesan kamu di sini..." required /></label><button type="submit">Kirim pesan <Send size={15} /></button></form></div></div></section>
        <footer className="site-footer"><span><Heart size={14} /> Dibuat dengan perhatian</span><span>© 2026 Asri Mela Aldian Syah</span><span>{footerSocialLinks.map((link) => <a href={link.href} key={link.label} target="_blank" rel="noreferrer"><link.icon size={15} /></a>)}</span></footer>
      </div>
    </main>
  );
}
