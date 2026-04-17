import { useScrollReveal } from "@/hooks/useScrollReveal";

const devSkills = ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Express", "PostgreSQL", "MongoDB", "Git", "Docker"];
const designSkills = ["Figma", "Adobe XD", "Tailwind CSS", "Framer Motion", "UI/UX Design", "Responsive Design"];

const palettes = [
  "bg-primary/15 text-foreground border-primary/30 hover:bg-primary/30",
  "bg-pop/15 text-foreground border-pop/30 hover:bg-pop/30",
  "bg-accent/25 text-foreground border-accent/40 hover:bg-accent/40",
  "bg-sage/25 text-foreground border-sage/40 hover:bg-sage/40",
  "bg-secondary text-foreground border-border hover:bg-secondary/80",
];

const SkillBadge = ({ skill, delay, idx }: { skill: string; delay: number; idx: number }) => (
  <span
    className={`px-5 py-2.5 rounded-full text-sm font-medium border backdrop-blur-sm transition-all cursor-default scroll-reveal-child hover:-translate-y-1 hover:rotate-1 ${palettes[idx % palettes.length]}`}
    style={{ transitionDelay: `${delay}s` }}
  >
    {skill}
  </span>
);

const SkillsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section-padding relative overflow-hidden bg-gradient-soft">
      <div className="blob w-[350px] h-[350px] -top-20 left-1/4 bg-pop/30" />

      <div ref={ref} className={`container mx-auto relative z-10 scroll-reveal ${isVisible ? "visible" : ""}`}>
        <div className="flex items-baseline gap-3 mb-3">
          <span className="font-script text-2xl text-pop">my</span>
          <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">— 02</span>
        </div>
        <h2 className="font-serif text-4xl md:text-6xl mb-16">
          toolkit <span className="italic text-gradient">&amp; toys</span>
        </h2>

        <div className="space-y-12">
          <div className="scroll-reveal-child" style={{ transitionDelay: "0.1s" }}>
            <h3 className="text-sm uppercase tracking-widest mb-5 flex items-center gap-2 text-muted-foreground">
              <span className="w-8 h-px bg-foreground/40" />
              for the building
            </h3>
            <div className="flex flex-wrap gap-3">
              {devSkills.map((s, i) => <SkillBadge key={s} skill={s} delay={0.15 + i * 0.04} idx={i} />)}
            </div>
          </div>

          <div className="scroll-reveal-child" style={{ transitionDelay: "0.3s" }}>
            <h3 className="text-sm uppercase tracking-widest mb-5 flex items-center gap-2 text-muted-foreground">
              <span className="w-8 h-px bg-foreground/40" />
              for the pretty
            </h3>
            <div className="flex flex-wrap gap-3">
              {designSkills.map((s, i) => <SkillBadge key={s} skill={s} delay={0.35 + i * 0.04} idx={i + 2} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
