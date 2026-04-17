import { ExternalLink, Github, Sparkles } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const projects = [
  { title: "E-Commerce Platform", desc: "modern e-comm with real-time inventory, payments, and a dreamy admin dashboard.", tags: ["React", "Node.js", "PostgreSQL"], gradient: "from-pop/40 to-primary/30", emoji: "🛍️" },
  { title: "AI Chat Application", desc: "an intelligent chatbot interface powered by ML & natural language magic.", tags: ["Next.js", "Python", "OpenAI"], gradient: "from-primary/40 to-accent/40", emoji: "🤖" },
  { title: "Task Management App", desc: "a collaborative project tool with real-time updates and team features.", tags: ["TypeScript", "Firebase", "Tailwind"], gradient: "from-accent/40 to-sage/40", emoji: "✅" },
  { title: "Portfolio Generator", desc: "a tool that helps devs spin up stunning portfolio sites in minutes.", tags: ["React", "Framer Motion", "MDX"], gradient: "from-sage/40 to-primary/40", emoji: "🎨" },
  { title: "Health & Fitness Tracker", desc: "mobile-first fitness tracking with charts, goals, and social bits.", tags: ["React Native", "GraphQL", "MongoDB"], gradient: "from-primary/40 to-pop/40", emoji: "🌿" },
  { title: "Social Media Dashboard", desc: "analytics dashboard for managing & tracking social performance.", tags: ["Vue.js", "D3.js", "Express"], gradient: "from-pop/40 to-accent/40", emoji: "📊" },
];

const ProjectsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="projects" className="section-padding relative overflow-hidden bg-gradient-soft">
      <div className="blob w-[450px] h-[450px] top-20 -right-32 bg-primary/25" />

      <div ref={ref} className={`container mx-auto relative z-10 scroll-reveal ${isVisible ? "visible" : ""}`}>
        <div className="flex items-baseline gap-3 mb-3">
          <span className="font-script text-2xl text-pop">selected</span>
          <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">— 04</span>
        </div>
        <h2 className="font-serif text-4xl md:text-6xl mb-4">
          things i've <span className="italic text-gradient">made</span>
        </h2>
        <p className="text-muted-foreground mb-14 max-w-2xl">
          a little gallery of projects — web apps, mobile bits, and small experiments in between. more dropping soon ♡
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <div
              key={i}
              className="group rounded-[2rem] glass overflow-hidden hover-lift scroll-reveal-child"
              style={{ transitionDelay: `${0.1 * (i + 1)}s` }}
            >
              <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                <div className="text-7xl opacity-90 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                  {project.emoji}
                </div>
                <span className="absolute top-3 right-3 sticker text-[10px]">
                  <Sparkles size={10} className="text-pop" />
                  coming soon
                </span>
              </div>

              <div className="p-6">
                <h3 className="font-serif text-2xl text-foreground mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.desc}</p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-[11px] px-2.5 py-1 rounded-full bg-foreground/5 text-foreground/70">{tag}</span>
                  ))}
                </div>

                <div className="flex gap-4 pt-4 border-t border-foreground/5">
                  <button className="flex items-center gap-1.5 text-xs font-medium text-pop hover:text-foreground transition-colors">
                    <ExternalLink size={14} /> live preview
                  </button>
                  <button className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors">
                    <Github size={14} /> source
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
