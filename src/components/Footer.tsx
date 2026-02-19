import { Github,Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  const socialLinks = [
   
    { Icon: Facebook, url: "https://www.facebook.com/share/14XFgi8FfPt/" },
    { Icon: Instagram, url: "https://www.instagram.com/farzana_arefin_poly?igsh=MTZhNG5qcmsxMHhkZQ==" },
    { Icon: Twitter, url: "https://x.com/WebFynix" },
    { Icon: Github, url: "https://github.com/farzana2005" },
  ];

  return (
    <footer className="border-t border-border/30 py-12 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo */}
          <div>
            <a href="#home" className="text-2xl font-bold">
              <span className="text-primary">Far</span>zana<span className="text-primary">.</span>
            </a>
            <p className="text-muted-foreground text-sm mt-2">
              Building the web, one pixel at a time.
            </p>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 md:justify-center">
            {["Home", "About", "Services", "Portfolio", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Social */}
          <div className="flex gap-3 md:justify-end">
            {socialLinks.map(({ Icon, url }, i) => (
              <a
                key={i}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/30 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Farzana Akter. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
