import { useState } from "react";
import { Send, Smartphone, Palette, MessageSquare, Sparkles } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const services = [
  { icon: Smartphone, label: "mobile development", color: "bg-primary/20 text-primary" },
  { icon: Palette, label: "ui/ux design", color: "bg-pop/20 text-pop" },
  { icon: MessageSquare, label: "technical consulting", color: "bg-accent/30 text-accent-foreground" },
];

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const { ref, isVisible } = useScrollReveal();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("yay! thanks for reaching out — i'll get back to you soon ♡");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden bg-gradient-soft">
      <div className="blob w-[450px] h-[450px] -bottom-20 right-0 bg-pop/30" />
      <div className="blob w-[350px] h-[350px] top-10 left-10 bg-primary/20" />

      <div ref={ref} className={`container mx-auto relative z-10 scroll-reveal ${isVisible ? "visible" : ""}`}>
        <div className="flex items-baseline gap-3 mb-3">
          <span className="font-script text-2xl text-pop">let's</span>
          <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">— 06</span>
        </div>
        <h2 className="font-serif text-4xl md:text-6xl mb-4">
          make something <span className="italic text-gradient">together</span>
        </h2>
        <p className="text-muted-foreground mb-14 max-w-2xl text-lg scroll-reveal-child" style={{ transitionDelay: "0.1s" }}>
          got an idea bubbling? a project that needs a soft, thoughtful build? slide into my inbox — i reply fast & with feelings. 💌
        </p>

        <div className="grid md:grid-cols-5 gap-8">
          <div className="md:col-span-2 space-y-4 scroll-reveal-child" style={{ transitionDelay: "0.2s" }}>
            <h3 className="font-serif text-2xl text-foreground mb-4">what i do</h3>
            <div className="space-y-3">
              {services.map(({ icon: Icon, label, color }) => (
                <div key={label} className="flex items-center gap-3 p-4 rounded-2xl glass hover-lift">
                  <div className={`w-10 h-10 rounded-xl ${color} flex items-center justify-center`}>
                    <Icon size={16} />
                  </div>
                  <span className="text-sm font-medium text-foreground">{label}</span>
                </div>
              ))}
            </div>
            <div className="glass rounded-3xl p-5 mt-6">
              <p className="font-script text-xl text-foreground/80">
                p.s. coffee chats are always free ☕
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="md:col-span-3 glass rounded-[2rem] p-8 space-y-5 scroll-reveal-child" style={{ transitionDelay: "0.3s" }}>
            <div>
              <label className="block text-xs uppercase tracking-widest font-medium text-muted-foreground mb-2">your name</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-2xl bg-white/60 border border-white/80 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-pop/40 focus:bg-white transition text-sm"
                placeholder="hi, i'm…"
              />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest font-medium text-muted-foreground mb-2">email</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 rounded-2xl bg-white/60 border border-white/80 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-pop/40 focus:bg-white transition text-sm"
                placeholder="you@dreamy.com"
              />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest font-medium text-muted-foreground mb-2">tell me everything</label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-2xl bg-white/60 border border-white/80 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-pop/40 focus:bg-white transition text-sm resize-none"
                placeholder="the project, the vibe, the timeline… spill it all ♡"
              />
            </div>
            <button
              type="submit"
              className="group inline-flex items-center gap-2 px-7 py-4 rounded-full bg-foreground text-background font-medium hover:bg-pop transition-all duration-500 hover:-translate-y-0.5 shadow-card"
            >
              send it
              <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              <Sparkles size={14} className="text-accent" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
