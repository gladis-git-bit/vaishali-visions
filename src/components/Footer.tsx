import { Github, Linkedin, Twitter, Instagram, Heart } from "lucide-react";

const socials = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden">
      {/* Big marquee word */}
      <div className="overflow-hidden py-12 border-y border-foreground/10">
        <div className="flex whitespace-nowrap animate-marquee">
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i} className="marquee-text text-[12vw] md:text-[10vw] leading-none px-8">
              vaishali · let's build · vaishali · let's build ·
            </span>
          ))}
        </div>
      </div>

      <div className="container mx-auto py-10 px-5 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm text-muted-foreground flex items-center gap-1.5">
          made with <Heart size={14} className="text-pop fill-pop" /> by vaishali · © 2026
        </p>

        <div className="flex items-center gap-2">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="w-10 h-10 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-pop hover:-translate-y-0.5 transition-all"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
