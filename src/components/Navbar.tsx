import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import logo from "@/assets/logo.jpg";

const navItems = [
  { label: "Helló", href: "/" },
  { label: "Órarend", href: "/orarend" },
  { label: "Bérletek & árak", href: "/berletek" },
  { label: "Rólam", href: "/rolam" },
  { label: "Kapcsolat", href: "/kapcsolat" },
  { label: "GYIK", href: "/gyik" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="Fitness Győr logó"
            className="h-10 w-auto object-contain rounded-lg"
          />
        </Link>
        <div className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={`font-display text-sm uppercase tracking-wider transition-colors duration-300 ${
                location.pathname === item.href
                  ? "text-primary"
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <ThemeToggle />
          <a
            href="tel:+36705104440"
            className="bg-primary text-primary-foreground font-display text-sm uppercase tracking-wider px-5 py-2 rounded-lg hover:brightness-110 transition-all"
          >
            Hívj!
          </a>
        </div>
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center justify-center min-w-[44px] min-h-[44px] text-foreground"
            aria-label="Menü"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden bg-background border-t border-border px-4 py-2 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              onClick={() => setOpen(false)}
              className={`flex items-center py-2.5 font-display text-sm uppercase tracking-wider transition-colors ${
                location.pathname === item.href
                  ? "text-primary"
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <a
            href="tel:+36705104440"
            className="block bg-primary text-primary-foreground font-display text-sm uppercase tracking-wider px-5 py-2 rounded-lg text-center"
          >
            Hívj!
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
