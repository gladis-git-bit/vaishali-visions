import { useScrollReveal } from "@/hooks/useScrollReveal";

const devSkills = ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Express", "PostgreSQL", "MongoDB", "Git", "Docker"];
const designSkills = ["Figma", "Adobe XD", "Tailwind CSS", "Framer Motion", "UI/UX Design", "Responsive Design"];

const SkillBadge = ({ skill, delay }: { skill: string; delay: number }) => (
  <span className="px-4 py-2 rounded-full text-sm font-medium bg-secondary text-secondary-foreground border border-border hover:border-primary/50 hover:bg-primary/10 transition-colors cursor-default scroll-reveal-child" style={{ transitionDelay: `${delay}s` }}>
    {skill}
  </span>
);

const SkillsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section-padding bg-card/50">
      <div ref={ref} className={`container mx-auto scroll-reveal ${isVisible ? "visible" : ""}`}>
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Skills & <span className="text-gradient">Technologies</span>
        </h2>

        <div className="space-y-10">
          <div className="scroll-reveal-child" style={{ transitionDelay: "0.1s" }}>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gradient-primary inline-block" />
              Developer
            </h3>
            <div className="flex flex-wrap gap-3">
              {devSkills.map((s, i) => <SkillBadge key={s} skill={s} delay={0.15 + i * 0.04} />)}
            </div>
          </div>

          <div className="scroll-reveal-child" style={{ transitionDelay: "0.3s" }}>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent inline-block" />
              Designer
            </h3>
            <div className="flex flex-wrap gap-3">
              {designSkills.map((s, i) => <SkillBadge key={s} skill={s} delay={0.35 + i * 0.04} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
