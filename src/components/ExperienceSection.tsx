const experiences = [
  {
    title: "Senior Full-Stack Developer",
    company: "TechNova Solutions",
    period: "2023 - Present",
    desc: "Leading the development of enterprise SaaS platforms. Architecting scalable microservices and mentoring junior developers.",
  },
  {
    title: "Frontend Developer",
    company: "PixelCraft Studio",
    period: "2021 - 2023",
    desc: "Built responsive web applications using React and TypeScript. Improved performance by 40% through code optimization and lazy loading.",
  },
  {
    title: "Junior Developer",
    company: "CodeBridge Inc.",
    period: "2020 - 2021",
    desc: "Developed RESTful APIs and contributed to the company's design system. Collaborated with cross-functional teams on agile projects.",
  },
];

const ExperienceSection = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          <span className="text-gradient">Experience</span>
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <div key={i} className="relative pl-12 md:pl-16">
                {/* Dot */}
                <div className="absolute left-2.5 md:left-4.5 top-1.5 w-3 h-3 rounded-full bg-gradient-primary ring-4 ring-background" />

                <div className="p-6 rounded-lg bg-card border border-border hover:border-primary/30 transition-colors">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h3 className="font-semibold text-foreground text-lg">{exp.title}</h3>
                    <span className="text-xs font-medium px-3 py-1 rounded-full bg-secondary text-muted-foreground">{exp.period}</span>
                  </div>
                  <p className="text-accent text-sm font-medium mb-2">{exp.company}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{exp.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
