import { ArrowRight, Mail, Sparkles, Star } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center section-padding pt-36 overflow-hidden bg-gradient-hero"
    >
      {/* Floating blobs */}
      <div className="blob blob-animate w-[420px] h-[420px] -top-20 -left-20 bg-pop/40" />
      <div className="blob blob-animate w-[500px] h-[500px] top-40 -right-32 bg-primary/30" style={{ animationDelay: "-6s" }} />
      <div className="blob blob-animate w-[360px] h-[360px] bottom-0 left-1/3 bg-accent/40" style={{ animationDelay: "-12s" }} />

      {/* Decorative stickers */}
      <div className="hidden md:block absolute top-32 right-16 animate-float">
        <div className="sticker rotate-6">
          <Star size={12} className="text-pop fill-pop" />
          designer + dev
        </div>
      </div>
      <div className="hidden md:block absolute bottom-32 left-12 animate-float" style={{ animationDelay: "-2s" }}>
        <div className="sticker -rotate-6">
          <Sparkles size={12} className="text-primary" />
          based in the cloud ☁️
        </div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl">
          <p className="font-script text-3xl md:text-4xl text-pop mb-2 animate-fade-in-up">
            hi, lovelies ♡
          </p>
          <h1
            className="font-serif text-5xl md:text-7xl lg:text-8xl mb-4 animate-fade-in-up leading-[1.05]"
            style={{ animationDelay: "0.1s" }}
          >
            i'm <span className="text-gradient italic">Vaishali</span>
            <br />
            <span className="relative inline-block">
              <span className="squiggle-underline">a full-stack</span>
            </span>{" "}
            <span className="marquee-text">dreamer.</span>
          </h1>
          <p
            className="text-muted-foreground text-lg md:text-xl max-w-xl mt-8 mb-10 leading-relaxed animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            i build soft, thoughtful, lovable web experiences — somewhere between code, color
            theory, and a really good playlist.
          </p>
          <div
            className="flex flex-wrap gap-4 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-7 py-4 rounded-full bg-foreground text-background font-medium hover:bg-pop transition-all duration-500 hover:-translate-y-0.5 shadow-card"
            >
              peek my work
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-7 py-4 rounded-full glass text-foreground font-medium hover:bg-white transition-all duration-500 hover:-translate-y-0.5"
            >
              say hi <Mail size={18} className="text-pop" />
            </a>
          </div>

          <div className="mt-12 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">currently</p>
            <div className="flex flex-wrap items-center gap-3">
              <span className="sticker animate-float inline-flex">🎧 lo-fi loops</span>
              <span className="sticker animate-float inline-flex" style={{ animationDelay: "-1.5s" }}>📚 design systems</span>
              <span className="sticker animate-float inline-flex" style={{ animationDelay: "-3s" }}>🌸 spring drops</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
