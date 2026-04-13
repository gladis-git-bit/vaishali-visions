import { Calendar, Clock, ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const blogPosts = [
  {
    title: "Building Scalable React Applications with Modern Architecture",
    excerpt: "Learn how to structure your React projects for scalability, maintainability, and performance using the latest patterns and best practices.",
    date: "Mar 15, 2026",
    readTime: "8 min read",
    category: "React",
  },
  {
    title: "The Future of CSS: What's Coming in 2026",
    excerpt: "Explore the exciting new CSS features landing in browsers this year, from container queries to scroll-driven animations.",
    date: "Feb 28, 2026",
    readTime: "6 min read",
    category: "CSS",
  },
  {
    title: "From Junior to Senior: Lessons from 5 Years of Development",
    excerpt: "Reflecting on the key milestones, mistakes, and breakthroughs that shaped my journey as a full-stack developer.",
    date: "Jan 10, 2026",
    readTime: "10 min read",
    category: "Career",
  },
];

const BlogSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="blog" className="py-20 md:py-28 bg-muted/30">
      <div
        ref={ref}
        className={`container mx-auto px-4 scroll-reveal ${isVisible ? "revealed" : ""}`}
      >
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Latest <span className="text-gradient">Blog Posts</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Thoughts, tutorials, and insights on web development, design, and the tech industry.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {blogPosts.map((post, i) => (
            <article
              key={post.title}
              className="scroll-reveal-child group rounded-xl border border-border bg-card p-6 flex flex-col gap-4 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <span className="self-start text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary">
                {post.category}
              </span>
              <h3 className="text-lg font-semibold leading-snug group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between text-xs text-muted-foreground pt-2 border-t border-border">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" /> {post.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" /> {post.readTime}
                </span>
              </div>
              <a
                href="#"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline mt-auto"
              >
                Read More <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
