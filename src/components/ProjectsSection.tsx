import { ExternalLink, Github, Clock } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    desc: "A modern e-commerce application with real-time inventory, payments, and admin dashboard.",
    tags: ["React", "Node.js", "PostgreSQL"],
  },
  {
    title: "AI Chat Application",
    desc: "An intelligent chatbot interface powered by machine learning with natural language processing.",
    tags: ["Next.js", "Python", "OpenAI"],
  },
  {
    title: "Task Management App",
    desc: "A collaborative project management tool with real-time updates and team features.",
    tags: ["TypeScript", "Firebase", "Tailwind"],
  },
  {
    title: "Portfolio Generator",
    desc: "A tool that helps developers create stunning portfolio websites in minutes.",
    tags: ["React", "Framer Motion", "MDX"],
  },
  {
    title: "Health & Fitness Tracker",
    desc: "A mobile-first fitness tracking application with charts, goals, and social features.",
    tags: ["React Native", "GraphQL", "MongoDB"],
  },
  {
    title: "Social Media Dashboard",
    desc: "An analytics dashboard for managing and tracking social media performance across platforms.",
    tags: ["Vue.js", "D3.js", "Express"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding bg-card/50">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">
          My <span className="text-gradient">Projects</span>
        </h2>
        <p className="text-muted-foreground mb-12 max-w-2xl">
          A collection of projects I've worked on, ranging from web applications to mobile apps and everything in between.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <div
              key={i}
              className="group rounded-xl border border-border bg-card overflow-hidden hover:border-primary/40 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
            >
              {/* Placeholder image */}
              <div className="h-44 bg-secondary flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-primary opacity-10" />
                <div className="flex flex-col items-center gap-2 text-muted-foreground">
                  <Clock size={24} />
                  <span className="text-xs font-medium">Coming Soon</span>
                </div>
              </div>

              <div className="p-5">
                <h3 className="font-semibold text-foreground mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.desc}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2 py-1 rounded-md bg-secondary text-muted-foreground">{tag}</span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <button className="flex items-center gap-1.5 text-xs font-medium text-accent hover:text-foreground transition-colors">
                    <ExternalLink size={14} /> View Website
                  </button>
                  <button className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors">
                    <Github size={14} /> View Code
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
