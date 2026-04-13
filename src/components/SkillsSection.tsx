const devSkills = ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Express", "PostgreSQL", "MongoDB", "Git", "Docker"];
const designSkills = ["Figma", "Adobe XD", "Tailwind CSS", "Framer Motion", "UI/UX Design", "Responsive Design"];

const SkillBadge = ({ skill }: { skill: string }) => (
  <span className="px-4 py-2 rounded-full text-sm font-medium bg-secondary text-secondary-foreground border border-border hover:border-primary/50 hover:bg-primary/10 transition-colors cursor-default">
    {skill}
  </span>
);

const SkillsSection = () => {
  return (
    <section className="section-padding bg-card/50">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Skills & <span className="text-gradient">Technologies</span>
        </h2>

        <div className="space-y-10">
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gradient-primary inline-block" />
              Developer
            </h3>
            <div className="flex flex-wrap gap-3">
              {devSkills.map((s) => <SkillBadge key={s} skill={s} />)}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent inline-block" />
              Designer
            </h3>
            <div className="flex flex-wrap gap-3">
              {designSkills.map((s) => <SkillBadge key={s} skill={s} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
