import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = ["Home", "About", "Projects", "Blog", "Contact"];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto flex items-center justify-between py-4">
        <a href="#" className="text-xl font-bold text-gradient">Vaishali.</a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link}
            </a>
          ))}
          <span className="text-xs font-medium px-3 py-1 rounded-full bg-gradient-primary text-primary-foreground animate-pulse">
            Available for new projects
          </span>
        </div>

        <button
          className="md:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-card border-t border-border px-4 pb-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="block text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              {link}
            </a>
          ))}
          <span className="inline-block text-xs font-medium px-3 py-1 rounded-full bg-gradient-primary text-primary-foreground">
            Available for new projects
          </span>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
