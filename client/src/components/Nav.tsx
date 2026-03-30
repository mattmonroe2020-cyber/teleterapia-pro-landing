import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-sm shadow-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center">
            <span className="text-primary-foreground font-accent font-bold text-sm">T</span>
          </div>
          <span className="font-display font-bold text-foreground text-lg leading-tight">
            Teleterapia<span className="text-primary"> PRO</span>
          </span>
        </div>

        {/* Desktop nav links */}
        <nav className="hidden md:flex items-center gap-6">
          <button
            onClick={() => scrollTo("modulos")}
            className="font-accent text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Módulos
          </button>
          <button
            onClick={() => scrollTo("como-funciona")}
            className="font-accent text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Cómo funciona
          </button>
          <button
            onClick={() => scrollTo("faq")}
            className="font-accent text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            FAQ
          </button>
          <Button
            size="sm"
            onClick={() => scrollTo("pricing")}
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-accent font-medium"
          >
            Accede Ahora — $890 MXN
          </Button>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menú"
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-background border-b border-border shadow-lg">
          <div className="container py-4 flex flex-col gap-4">
            <button
              onClick={() => scrollTo("modulos")}
              className="font-accent text-sm text-left text-foreground py-2 border-b border-border"
            >
              Módulos
            </button>
            <button
              onClick={() => scrollTo("como-funciona")}
              className="font-accent text-sm text-left text-foreground py-2 border-b border-border"
            >
              Cómo funciona
            </button>
            <button
              onClick={() => scrollTo("faq")}
              className="font-accent text-sm text-left text-foreground py-2 border-b border-border"
            >
              FAQ
            </button>
            <Button
              onClick={() => scrollTo("pricing")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-accent font-medium w-full"
            >
              Accede Ahora — $890 MXN
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
