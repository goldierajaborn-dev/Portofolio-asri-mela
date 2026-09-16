import {
  Code2,
  Database,
  Globe,
  Layout,
  Palette,
  Server,
  Terminal,
  Wrench,
} from "lucide-react";
import { SiFigma, SiGithub } from "react-icons/si";

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Frontend",
      color: "from-blue-500 to-indigo-600",
      skills: [
        { name: "React", icon: Code2 },
        { name: "Next.js", icon: Globe },
        { name: "TypeScript", icon: Terminal },
        { name: "Tailwind CSS", icon: Palette },
        { name: "JavaScript", icon: Code2 },
        { name: "HTML & CSS", icon: Layout },
      ],
    },
    {
      title: "Backend",
      color: "from-indigo-500 to-purple-600",
      skills: [
        { name: "Node.js", icon: Server },
        { name: "Express.js", icon: Server },
        { name: "REST API", icon: Globe },
        { name: "Supabase", icon: Database },
        { name: "MySQL", icon: Database },
      ],
    },
    {
      title: "Tools & Others",
      color: "from-purple-500 to-rose-500",
      skills: [
        { name: "Git", icon: Wrench },
        { name: "GitHub", icon: SiGithub },
        { name: "Figma", icon: SiFigma },
        { name: "VS Code", icon: Terminal },
      ],
    },
  ];

  return (
    <section id="skills" className="section-pad relative overflow-hidden bg-slate-50/50 dark:bg-slate-900/40">
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
            Technical Skills
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight"
            style={{ fontFamily: "var(--font-cormorant)", color: "var(--text)" }}
          >
            Keahlian &amp; <span style={{ color: "var(--accent)" }}>Tools</span>
          </h2>
          <p className="mt-2 text-sm text-muted-foreground max-w-xl mx-auto leading-relaxed" style={{ color: "var(--text-muted)" }}>
            Teknologi, framework, dan peralatan yang saya gunakan dalam merancang dan mengembangkan website.
          </p>
        </div>

        {/* Skill Category Groups */}
        <div className="space-y-10 max-w-5xl mx-auto">
          {skillCategories.map((group, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-lg sm:text-xl font-semibold flex items-center gap-2.5" style={{ color: "var(--text)" }}>
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: "var(--accent)" }} />
                {group.title}
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {group.skills.map((skill, sIdx) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={sIdx}
                      className="group relative rounded-2xl border p-4 flex flex-col items-center gap-3 cursor-pointer shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300"
                      style={{
                        background: "var(--surface)",
                        borderColor: "var(--border)",
                      }}
                    >
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${group.color} flex items-center justify-center text-white shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      <span
                        className="text-xs sm:text-sm font-medium text-center"
                        style={{ color: "var(--text)" }}
                      >
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
