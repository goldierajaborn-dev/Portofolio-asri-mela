"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight, Mail } from "lucide-react";
import { aboutMe } from "../../data";

const ROLES = [
  "RPL Student",
  "Frontend Developer",
  "Web Developer",
  "UI/UX Enthusiast",
];

export default function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = ROLES[roleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        if (currentText === fullText) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        if (currentText === "") {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % ROLES.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex]);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Floating Paper Airplane Decoration with dashed trail */}
      <div className="absolute top-28 right-[10%] lg:right-[46%] pointer-events-none z-10 animate-float-plane opacity-80 hidden sm:block">
        <div className="relative">
          <svg
            className="absolute -left-16 top-5 w-20 h-14 overflow-visible opacity-30 text-indigo-500"
            viewBox="0 0 80 50"
            fill="none"
          >
            <path
              d="M5 42 C 20 38, 32 12, 75 16"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeDasharray="3 3"
              strokeLinecap="round"
            />
          </svg>
          <svg
            width="34"
            height="34"
            viewBox="0 0 24 24"
            fill="none"
            className="text-indigo-600 dark:text-indigo-400 drop-shadow-md"
          >
            <path
              d="M22 2L11 13"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M22 2L15 22L11 13L2 9L22 2Z"
              fill="var(--accent-soft)"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      <div className="container-custom w-full pt-32 pb-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Photo Column (First on mobile, second on desktop) */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative w-[180px] sm:w-[240px] lg:w-[320px]">
              
              {/* Fluttering Butterfly Decoration on Photo Corner */}
              <div className="absolute -top-7 -left-7 pointer-events-none z-20 animate-flutter-butterfly hidden sm:block">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  className="text-indigo-500 dark:text-indigo-300 drop-shadow-sm"
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
                  <path d="M16 12 L16 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <circle cx="16" cy="11" r="1" fill="currentColor" />
                </svg>
              </div>

              {/* Second Playful Butterfly near bottom right */}
              <div
                className="absolute -bottom-6 -right-6 pointer-events-none z-20 animate-flutter-butterfly opacity-75 hidden sm:block"
                style={{ animationDelay: "-3.5s" }}
              >
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 32 32"
                  fill="none"
                  className="text-rose-400 dark:text-rose-300 drop-shadow-sm"
                >
                  <path
                    className="animate-wing"
                    d="M16 16 C12 9, 5 10, 6 17 C7 22, 14 19, 16 16 Z"
                    fill="currentColor"
                    fillOpacity="0.7"
                    stroke="currentColor"
                    strokeWidth="1.2"
                  />
                  <path
                    className="animate-wing"
                    d="M16 16 C20 9, 27 10, 26 17 C25 22, 18 19, 16 16 Z"
                    fill="currentColor"
                    fillOpacity="0.7"
                    stroke="currentColor"
                    strokeWidth="1.2"
                  />
                  <path d="M16 13 L16 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>

              {/* Ambient Glow */}
              <div
                className="absolute inset-0 rounded-full pointer-events-none"
                style={{
                  background: "var(--accent)",
                  opacity: 0.15,
                  filter: "blur(50px)",
                  transform: "scale(0.9)",
                }}
              />

              {/* Main Photo Frame */}
              <div
                className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border"
                style={{ borderColor: "var(--border)" }}
              >
                <Image
                  src="/images/mela 1.jpeg"
                  alt={aboutMe.name}
                  fill
                  priority
                  sizes="(max-width: 640px) 180px, (max-width: 1024px) 240px, 320px"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>

              {/* Decorative Tech Frame & Glow Elements */}
              <div
                className="absolute pointer-events-none"
                style={{ top: "-6px", left: "10%", right: "10%", height: "1px", background: "var(--border)", opacity: 0.4 }}
              />
              <div
                className="absolute pointer-events-none"
                style={{ bottom: "-6px", left: "10%", right: "10%", height: "1px", background: "var(--border)", opacity: 0.4 }}
              />
              <div
                className="absolute pointer-events-none"
                style={{ left: "-6px", top: "10%", bottom: "10%", width: "1px", background: "var(--border)", opacity: 0.4 }}
              />
              <div
                className="absolute pointer-events-none"
                style={{ right: "-6px", top: "10%", bottom: "10%", width: "1px", background: "var(--border)", opacity: 0.4 }}
              />

              {/* Accent Bars */}
              <div
                className="absolute pointer-events-none"
                style={{
                  top: "-6px",
                  left: "15%",
                  width: "25%",
                  height: "2px",
                  background: "var(--accent)",
                  borderRadius: "2px",
                  filter: "drop-shadow(0 0 4px var(--accent))",
                }}
              />
              <div
                className="absolute pointer-events-none"
                style={{
                  top: "-6px",
                  right: "15%",
                  width: "25%",
                  height: "2px",
                  background: "var(--accent)",
                  borderRadius: "2px",
                  filter: "drop-shadow(0 0 4px var(--accent))",
                }}
              />
              <div
                className="absolute pointer-events-none"
                style={{
                  bottom: "-6px",
                  left: "15%",
                  width: "25%",
                  height: "2px",
                  background: "var(--mauve)",
                  borderRadius: "2px",
                  filter: "drop-shadow(0 0 4px var(--mauve))",
                }}
              />
              <div
                className="absolute pointer-events-none"
                style={{
                  bottom: "-6px",
                  right: "15%",
                  width: "25%",
                  height: "2px",
                  background: "var(--mauve)",
                  borderRadius: "2px",
                  filter: "drop-shadow(0 0 4px var(--mauve))",
                }}
              />

              {/* Corner Brackets */}
              <div
                className="absolute pointer-events-none"
                style={{
                  top: "2px",
                  left: "2px",
                  width: "14px",
                  height: "14px",
                  borderTop: "2px solid var(--accent)",
                  borderLeft: "2px solid var(--accent)",
                  opacity: 0.8,
                }}
              />
              <div
                className="absolute pointer-events-none"
                style={{
                  top: "2px",
                  right: "2px",
                  width: "14px",
                  height: "14px",
                  borderTop: "2px solid var(--accent)",
                  borderRight: "2px solid var(--accent)",
                  opacity: 0.8,
                }}
              />
              <div
                className="absolute pointer-events-none"
                style={{
                  bottom: "2px",
                  left: "2px",
                  width: "14px",
                  height: "14px",
                  borderBottom: "2px solid var(--mauve)",
                  borderLeft: "2px solid var(--mauve)",
                  opacity: 0.8,
                }}
              />
              <div
                className="absolute pointer-events-none"
                style={{
                  bottom: "2px",
                  right: "2px",
                  width: "14px",
                  height: "14px",
                  borderBottom: "2px solid var(--mauve)",
                  borderRight: "2px solid var(--mauve)",
                  opacity: 0.8,
                }}
              />

              {/* Corner Diamond Glow Pins */}
              <div
                className="absolute pointer-events-none"
                style={{
                  top: "-5px",
                  left: "-5px",
                  width: "8px",
                  height: "8px",
                  background: "var(--accent)",
                  transform: "rotate(45deg)",
                  boxShadow: "0 0 10px var(--accent)",
                }}
              />
              <div
                className="absolute pointer-events-none"
                style={{
                  top: "-5px",
                  right: "-5px",
                  width: "8px",
                  height: "8px",
                  background: "var(--accent)",
                  transform: "rotate(45deg)",
                  boxShadow: "0 0 10px var(--accent)",
                }}
              />
              <div
                className="absolute pointer-events-none"
                style={{
                  bottom: "-5px",
                  left: "-5px",
                  width: "8px",
                  height: "8px",
                  background: "var(--mauve)",
                  transform: "rotate(45deg)",
                  boxShadow: "0 0 10px var(--mauve)",
                }}
              />
              <div
                className="absolute pointer-events-none"
                style={{
                  bottom: "-5px",
                  right: "-5px",
                  width: "8px",
                  height: "8px",
                  background: "var(--mauve)",
                  transform: "rotate(45deg)",
                  boxShadow: "0 0 10px var(--mauve)",
                }}
              />
            </div>
          </div>

          {/* Text Column (Second on mobile, first on desktop) */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Availability Pill */}
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-[10px] tracking-[0.18em] uppercase"
              style={{
                borderColor: "var(--border)",
                background: "var(--surface)",
                color: "var(--text-muted)",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full animate-pulse"
                style={{ background: "var(--accent)" }}
              />
              Available for work
            </div>

            {/* Cormorant Garamond Heading */}
            <h1
              className="mt-5 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] font-medium"
              style={{ fontFamily: "var(--font-cormorant)", color: "var(--text)" }}
            >
              Asri<br />
              <span style={{ color: "var(--accent)" }}>Mela</span>{" "}
              <span className="italic" style={{ color: "var(--text-muted)" }}>
                Aldian Syah
              </span>
            </h1>

            {/* Animated Typing Role */}
            <div
              className="mt-5 text-base sm:text-lg lg:text-xl font-light min-h-[1.8em]"
              style={{ color: "var(--text-muted)" }}
            >
              I&apos;m a{" "}
              <span className="inline-flex items-center font-medium" style={{ color: "var(--text)" }}>
                <span>{currentText}</span>
                <span
                  className="inline-block w-[2px] h-[1em] ml-1 align-middle animate-pulse"
                  style={{ background: "var(--accent)" }}
                />
              </span>
            </div>

            {/* Description Bio */}
            <p
              className="mt-5 max-w-lg mx-auto lg:mx-0 text-sm sm:text-[15px] leading-relaxed"
              style={{ color: "var(--text-muted)" }}
            >
              {aboutMe.description}
            </p>

            {/* CTA Buttons */}
            <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <a
                href="#projects"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-transform hover:scale-[1.03] active:scale-95"
                style={{ background: "var(--accent)", color: "#fff" }}
              >
                Lihat Karya
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border text-sm font-medium transition-transform hover:scale-[1.03] active:scale-95"
                style={{
                  borderColor: "var(--border)",
                  background: "var(--surface)",
                  color: "var(--text)",
                }}
              >
                <Mail className="w-4 h-4" />
                Kontak Saya
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
