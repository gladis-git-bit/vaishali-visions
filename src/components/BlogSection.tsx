import { Calendar, Clock, ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const blogPosts = [
  {
    title: "building scalable react apps with modern architecture",
    excerpt: "how to structure react projects for scale, maintainability & performance — with the patterns i actually use.",
    date: "Mar 15, 2026",
    readTime: "8 min read",
    category: "react",
    tint: "bg-primary/20 text-primary",
  },
  {
    title: "the future of CSS: what's coming in 2026",
    excerpt: "container queries, scroll-driven animations & the new CSS sugar landing in browsers this year.",
    date: "Feb 28, 2026",
    readTime: "6 min read",
    category: "css",
    tint: "bg-pop/20 text-pop",
  },
  {
    title: "from junior to senior: 5 years of lessons",
    excerpt: "milestones, mistakes, and the small breakthroughs that quietly shaped my dev journey.",
    date: "Jan 10, 2026",
    readTime: "10 min read",
    category: "career",
    tint: "bg-accent/30 text-accent-foreground",
  },
];

const BlogSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="blog" className="section-padding relative overflow-hidden">
      <div className="blob w-[400px] h-[400px] top-20 -left-20 bg-accent/30" />

      <div ref={ref} className={`container mx-auto relative z-10 scroll-reveal ${isVisible ? "visible" : ""}`}>
        <div className="text-center mb-14">
          <div className="flex items-baseline justify-center gap-3 mb-3">
            <span className="font-script text-2xl text-pop">from the</span>
            <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">— 05</span>
          </div>
          <h2 className="font-serif text-4xl md:text-6xl mb-4">
            journal <span className="italic text-gradient">&amp; notes</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            thoughts, tutorials, and tiny essays from somewhere between the IDE and a coffee shop.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {blogPosts.map((post, i) => (
            <article
              key={post.title}
              className="scroll-reveal-child group glass rounded-[2rem] p-7 flex flex-col gap-4 hover-lift"
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <span className={`self-start text-xs font-medium px-3 py-1 rounded-full ${post.tint}`}>
                {post.category}
              </span>
              <h3 className="font-serif text-2xl leading-snug text-foreground group-hover:text-pop transition-colors">
                {post.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between text-xs text-muted-foreground pt-3 border-t border-foreground/5">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" /> {post.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" /> {post.readTime}
                </span>
              </div>
              <a
                href="#"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-pop hover:text-foreground transition-colors mt-auto"
              >
                read more <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
