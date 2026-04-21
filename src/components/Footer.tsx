import { Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <span className="font-display text-xl font-bold uppercase">
            fitness<span className="text-primary">győr</span>
          </span>
          <p className="text-muted-foreground text-sm mt-1">Kiscsoportos funkcionális edzés Győrben</p>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <Phone className="w-4 h-4 text-primary" />
          <a href="tel:+36705104440" className="hover:text-primary transition-colors">
            06 70 510 44 40
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
