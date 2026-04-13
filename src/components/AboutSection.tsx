import { Code2, Palette, Zap } from "lucide-react";

const highlights = [
  { icon: Code2, label: "Clean Code", desc: "Writing efficient, maintainable solutions" },
  { icon: Palette, label: "Design Eye", desc: "Pixel-perfect, user-centered interfaces" },
  { icon: Zap, label: "Fast Delivery", desc: "Agile approach with rapid iteration" },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          About <span className="text-gradient">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed text-lg">
              I'm a passionate creative developer and designer with over <span className="text-foreground font-medium">5 years of experience</span> building 
              digital products that make a difference. I believe in the power of clean, efficient code and thoughtful design.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My expertise spans the full stack — from crafting pixel-perfect frontends to building robust, scalable backends. 
              I love turning complex problems into simple, elegant solutions.
            </p>
            <p className="text-muted-foreground leading-relaxed italic border-l-2 border-primary pl-4">
              When I'm not coding, you'll find me exploring new design trends, contributing to open-source projects, or speaking at conferences.
            </p>
          </div>

          <div className="grid gap-4">
            {highlights.map(({ icon: Icon, label, desc }) => (
              <div key={label} className="flex items-start gap-4 p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors">
                <div className="p-2 rounded-md bg-gradient-primary text-primary-foreground shrink-0">
                  <Icon size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{label}</h3>
                  <p className="text-sm text-muted-foreground">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
