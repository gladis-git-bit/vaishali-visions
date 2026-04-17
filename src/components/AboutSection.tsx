import { Code2, Palette, Zap, Heart } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const highlights = [
  { icon: Code2, label: "clean code", desc: "efficient, maintainable, kinda poetic", color: "bg-primary/20 text-primary" },
  { icon: Palette, label: "design eye", desc: "pixel-perfect, soft on the soul", color: "bg-pop/20 text-pop" },
  { icon: Zap, label: "fast delivery", desc: "agile but never rushed", color: "bg-accent/30 text-accent-foreground" },
  { icon: Heart, label: "good vibes", desc: "kindness ships better products", color: "bg-sage/30 text-sage-foreground" },
];

const AboutSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="blob w-[400px] h-[400px] top-10 -right-20 bg-primary/20" />

      <div ref={ref} className={`container mx-auto relative z-10 scroll-reveal ${isVisible ? "visible" : ""}`}>
        <div className="flex items-baseline gap-3 mb-3">
          <span className="font-script text-2xl text-pop">a little</span>
          <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">— 01</span>
        </div>
        <h2 className="font-serif text-4xl md:text-6xl mb-16">
          about <span className="italic text-gradient">me</span>
        </h2>

        <div className="grid md:grid-cols-5 gap-10 items-start">
          <div className="md:col-span-3 space-y-6">
            <p className="leading-relaxed text-xl text-foreground/80 scroll-reveal-child" style={{ transitionDelay: "0.1s" }}>
              i'm a creative developer + designer with <span className="text-pop font-medium">5+ years</span> of
              shipping digital things that feel like a warm hug. i live for the moment a clunky idea
              becomes something soft, useful, and a little bit magical.
            </p>
            <p className="text-muted-foreground leading-relaxed scroll-reveal-child" style={{ transitionDelay: "0.2s" }}>
              full-stack means i'm at home in the messy backend and the dreamy frontend — turning
              complex problems into simple, beautiful flows. i care about typography, micro-animations,
              and what happens between the clicks.
            </p>
            <div className="glass rounded-3xl p-6 scroll-reveal-child" style={{ transitionDelay: "0.3s" }}>
              <p className="font-script text-2xl text-foreground/80">
                "the best interfaces feel like a friend handing you exactly what you need." ✨
              </p>
            </div>
          </div>

          <div className="md:col-span-2 grid grid-cols-2 gap-3">
            {highlights.map(({ icon: Icon, label, desc, color }, i) => (
              <div
                key={label}
                className="glass rounded-3xl p-5 hover-lift scroll-reveal-child"
                style={{ transitionDelay: `${0.15 * (i + 1)}s` }}
              >
                <div className={`w-10 h-10 rounded-2xl ${color} flex items-center justify-center mb-3`}>
                  <Icon size={18} />
                </div>
                <h3 className="font-medium text-foreground mb-1 text-sm">{label}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
