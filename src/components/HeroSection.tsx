import { ArrowRight, Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center section-padding pt-32" style={{ backgroundImage: "var(--gradient-hero)" }}>
      <div className="container mx-auto">
        <div className="max-w-3xl">
          <p className="text-accent font-medium mb-4 animate-fade-in-up">Hello World 👋</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Hey!, I am <span className="text-gradient">Vaishali</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-muted-foreground mb-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Full-Stack Developer
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mb-10 leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            I craft beautiful, functional digital experiences by bringing ideas to life. Specializing in modern web development and user-centered design.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity glow-primary"
            >
              View My Work <ArrowRight size={18} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-medium hover:bg-secondary transition-colors"
            >
              Get In Touch <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
