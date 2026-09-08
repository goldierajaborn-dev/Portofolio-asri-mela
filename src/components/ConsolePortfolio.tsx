"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowUpRight, Check, ChevronRight, ExternalLink, Send, Terminal } from "lucide-react";
import { aboutMe, contactInfo, education, experiences, footerSocialLinks, highlights, projects, skillCategories, socialLinks, stats } from "../../data";

const commands = ["home", "about", "stats", "skills", "projects", "experience", "contact"];

export default function ConsolePortfolio() {
  const [activeCommand, setActiveCommand] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>(".console-section");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    const activeObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveCommand(entry.target.id);
      });
    }, { rootMargin: "-35% 0px -55% 0px", threshold: 0 });
    sections.forEach((section) => observer.observe(section));
    sections.forEach((section) => activeObserver.observe(section));
    return () => {
      observer.disconnect();
      activeObserver.disconnect();
    };
  }, []);

  const jumpTo = (command: string) => {
    setActiveCommand(command);
    document.getElementById(command)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleContactSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "");
    const email = String(formData.get("email") ?? "");
    const subject = String(formData.get("subject") ?? "");
    const message = String(formData.get("message") ?? "");
    const body = `Nama: ${name}\nEmail: ${email}\n\n${message}`;
    window.location.href = `mailto:asrimela14410@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <main className="console-page">
      <header className="console-header"><a className="brand-mark" href="#home" onClick={() => setActiveCommand("home")}><span className="brand-dot" /> asri-mela.dev</a><nav className="top-command-nav">{commands.map((command, index) => <button className={activeCommand === command ? "command-link active" : "command-link"} key={command} onClick={() => jumpTo(command)}><span className="command-index">0{index + 1}</span><span>{command}</span></button>)}</nav><a className="header-contact" href="#contact">connect <ArrowUpRight size={14} /></a></header>
      <div className="console-layout">
        <aside className="command-sidebar"><div className="sidebar-label">navigation /</div><nav>{commands.map((command, index) => <button className={activeCommand === command ? "command-link active" : "command-link"} key={command} onClick={() => jumpTo(command)}><span className="command-index">0{index + 1}</span><span>$ {command}</span>{activeCommand === command && <ChevronRight size={14} />}</button>)}</nav><div className="sidebar-footer"><div className="mini-prompt"><span>●</span> system online</div><div>indonesia</div><div>© 2026 mela</div></div></aside>
        <div className="console-content">
          <section className="console-section home-section" id="home"><div className="section-prompt"><span>$</span> home --init</div><div className="home-grid"><div><p className="eyebrow">portfolio / entrypoint</p><h1>{aboutMe.name}<span className="cursor">_</span></h1><p className="intro-role">{aboutMe.role}</p><p className="home-tagline">Building useful digital experiences with curiosity and care.</p><div className="home-actions"><a href="#projects">view projects <ArrowUpRight size={15} /></a><a href="#contact">start a conversation <ArrowUpRight size={15} /></a></div></div><div className="home-photo"><Image src="/images/Gold.jpg" alt={`Foto diri ${aboutMe.name}`} fill sizes="(max-width: 850px) 100vw, 400px" priority /><span>portrait.jpg / 01</span></div></div></section>
          <section className="console-section intro-section about-section" id="about"><div className="section-prompt"><span>$</span> about --read</div><div className="intro-grid"><div><p className="eyebrow">{aboutMe.nickname} / profile.json</p><p className="intro-copy">{aboutMe.description}</p><blockquote>&quot;{aboutMe.quote}&quot;</blockquote><div className="highlight-list">{highlights.map(({ icon: Icon, text }) => <span key={text}><Icon size={15} /> {text}</span>)}</div></div><div className="identity-terminal"><div className="window-bar"><span /><span /><span /><small>identity.sh</small></div><div className="identity-body"><p><i>const</i> developer = &#123;</p><p className="indent"><b>name:</b> &quot;{aboutMe.name}&quot;,</p><p className="indent"><b>focus:</b> &quot;full stack&quot;,</p><p className="indent"><b>location:</b> &quot;{aboutMe.location}&quot;,</p><p className="indent"><b>status:</b> <em>&quot;learning&quot;</em></p><p>&#125;</p><div className="terminal-check"><Check size={13} /> build passes</div></div></div></div></section>
          <section className="console-section" id="stats"><div className="section-prompt"><span>$</span> stats --all</div><div className="stats-grid">{stats.map((stat) => <div className="stat-line" key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}</div></section>
          <section className="console-section" id="skills"><div className="section-prompt"><span>$</span> skills --list</div><div className="skills-output">{skillCategories.map((category) => <div className="skill-group" key={category.title}><h2><span>./</span>{category.title.toLowerCase()}</h2><div className="skill-list">{category.skills.map(({ icon: Icon, name }) => <span key={name}><Icon size={15} />{name}</span>)}</div></div>)}</div></section>
          <section className="console-section" id="projects"><div className="section-prompt"><span>$</span> projects --featured</div><div className="project-output">{projects.map((project, index) => <article className="project-row" key={project.title}><div className="project-number">0{index + 1}</div><div className="project-image"><Image src={project.image} alt={project.title} fill sizes="(max-width: 800px) 100vw, 240px" /></div><div className="project-info"><div className="project-title"><h2>{project.title}</h2><ExternalLink size={15} /></div><p>{project.description}</p><div className="tech-list">{project.techStack.map((tech) => <span key={tech}>{tech}</span>)}</div></div><a className="row-action" href={project.demoUrl} target={project.demoUrl === "#" ? undefined : "_blank"} rel="noreferrer" aria-label={`Open ${project.title}`}><ArrowUpRight size={18} /></a></article>)}</div></section>
          <section className="console-section" id="experience"><div className="section-prompt"><span>$</span> experience --timeline</div><div className="timeline-output">{experiences.map((experience, index) => <article className="timeline-row" key={`${experience.title}-${experience.period}`}><div className="timeline-marker">{String(index + 1).padStart(2, "0")}</div><div className="timeline-copy"><div className="timeline-meta"><span>{experience.type}</span><time>{experience.period}</time></div><h2>{experience.title}</h2><p className="company">{experience.company}</p><p>{experience.description}</p><div className="tech-list">{experience.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div></div></article>)}</div><div className="education-output">{education.map((item) => <div key={item.school}><span className="graduation-glyph">+</span><span><b>{item.major}</b> / {item.school}</span><time>{item.startYear} — {item.endYear}</time></div>)}</div></section>
          <section className="console-section contact-section" id="contact"><div className="section-prompt"><span>$</span> contact --open</div><div className="contact-layout"><div className="contact-side"><div className="contact-intro"><h2>Let&apos;s connect.</h2><p>Find the right channel or send a direct message.</p></div><div className="contact-info-cards">{contactInfo.map(({ icon: Icon, label, value, href }) => <a className="contact-info-card" href={href} key={label}><span className="contact-card-icon"><Icon size={18} /></span><span><small>{label}</small><b>{value}</b></span><ArrowUpRight size={14} /></a>)}</div></div><form className="contact-form-card" onSubmit={handleContactSubmit}><div className="form-card-heading"><span>compose.message</span><small>mailto:asrimela14410@gmail.com</small></div><div className="form-row"><label htmlFor="name">name<input id="name" name="name" placeholder="Your name" required /></label><label htmlFor="email">email<input id="email" name="email" type="email" placeholder="you@example.com" required /></label></div><label htmlFor="subject">subject<input id="subject" name="subject" placeholder="What would you like to discuss?" required /></label><label htmlFor="message">message<textarea id="message" name="message" rows={5} placeholder="Write your message here..." required /></label><button type="submit"><Send size={15} /> Kirim pesan</button></form></div></section>
          <footer className="console-footer"><span><Terminal size={14} /> EOF</span><span>© 2026 Asri Mela Aldian Syah. All rights reserved.</span><span>{footerSocialLinks.map((link) => <a href={link.href} key={link.label} target="_blank" rel="noreferrer"><link.icon size={15} /></a>)}</span></footer>
        </div>
      </div>
    </main>
  );
}