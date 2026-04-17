import { useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";

const navLinks = ["Home", "About", "Projects", "Blog", "Contact"];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-4 right-4 z-50 rounded-full glass shadow-card">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <a href="#" className="font-serif text-2xl text-gradient flex items-center gap-1">
          vaishali<span className="text-pop">.</span>
        </a>

        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors relative group"
            >
              {link}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pop rounded-full group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center">
          <span className="sticker text-foreground">
            <Sparkles size={12} className="text-pop animate-wiggle" />
            open to projects
          </span>
        </div>

        <button
          className="md:hidden text-foreground p-2 rounded-full hover:bg-secondary/50 transition"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden glass rounded-3xl mt-2 mx-2 mb-2 px-5 py-4 space-y-2">
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
          <span className="sticker mt-2">
            <Sparkles size={12} className="text-pop" />
            open to projects
          </span>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
