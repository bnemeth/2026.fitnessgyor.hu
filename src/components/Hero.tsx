import logo from "@/assets/logo.jpg";
import { Link } from "react-router-dom";
import { Phone } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
        {/* Logo */}
        <div className="mb-8 animate-fade-up">
          <img
            src={logo}
            alt="Fitness Győr logó"
            className="w-48 h-48 md:w-56 md:h-56 mx-auto object-contain rounded-2xl"
          />
        </div>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 opacity-0 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          A céljaidat gyorsabban elérheted mint gondolnád! Heti 2-3 edzéssel és megfelelő táplálkozással szemmel látható eredmények.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 animate-fade-up" style={{ animationDelay: "0.4s" }}>
          <a
            href="tel:+36705104440"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-display text-lg uppercase tracking-wider px-8 py-4 rounded-lg hover:brightness-110 transition-all duration-300 hover:scale-105 shadow-lg shadow-primary/25"
          >
            <Phone className="w-5 h-5" />
            06 70 510 44 40
          </a>
          <Link
            to="/orarend"
            className="inline-flex items-center gap-2 border border-foreground/20 text-foreground font-display text-lg uppercase tracking-wider px-8 py-4 rounded-lg hover:border-primary hover:text-primary transition-all duration-300"
          >
            Órarend
          </Link>
          <a
            href="#edzesek"
            className="inline-flex items-center gap-2 border border-foreground/20 text-foreground font-display text-lg uppercase tracking-wider px-8 py-4 rounded-lg hover:border-primary hover:text-primary transition-all duration-300"
          >
            Edzések
          </a>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
