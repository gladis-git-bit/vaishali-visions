import { useScrollReveal } from "@/hooks/useScrollReveal";

const experiences = [
  {
    title: "Senior Full-Stack Developer",
    company: "TechNova Solutions",
    period: "2023 — now",
    desc: "leading enterprise SaaS builds, architecting scalable microservices, and mentoring the next wave of devs.",
    emoji: "✨",
  },
  {
    title: "Frontend Developer",
    company: "PixelCraft Studio",
    period: "2021 — 2023",
    desc: "shipped responsive web apps in React + TypeScript. boosted performance by 40% with code splitting & lazy loading.",
    emoji: "🌷",
  },
  {
    title: "Junior Developer",
    company: "CodeBridge Inc.",
    period: "2020 — 2021",
    desc: "built RESTful APIs and contributed to the company design system. learned to love the messy middle.",
    emoji: "🌱",
  },
];

const ExperienceSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="blob w-[400px] h-[400px] bottom-10 -left-20 bg-sage/30" />

      <div ref={ref} className={`container mx-auto relative z-10 scroll-reveal ${isVisible ? "visible" : ""}`}>
        <div className="flex items-baseline gap-3 mb-3">
          <span className="font-script text-2xl text-pop">my</span>
          <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">— 03</span>
        </div>
        <h2 className="font-serif text-4xl md:text-6xl mb-16">
          journey <span className="italic text-gradient">so far</span>
        </h2>

        <div className="space-y-5 max-w-4xl">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="group glass rounded-[2rem] p-7 md:p-8 hover-lift scroll-reveal-child"
              style={{ transitionDelay: `${0.15 * (i + 1)}s` }}
            >
              <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{exp.emoji}</span>
                  <div>
                    <h3 className="font-serif text-2xl md:text-3xl text-foreground">{exp.title}</h3>
                    <p className="text-pop text-sm font-medium mt-1">{exp.company}</p>
                  </div>
                </div>
                <span className="sticker font-script text-base">{exp.period}</span>
              </div>
              <p className="text-muted-foreground leading-relaxed pl-12">{exp.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
