import { useState, useEffect } from "react";
import { WhatsAppButton, PhoneDisplay } from "./WhatsAppButton";
import logoSaoFrancisco from "@/assets/logo-sao-francisco-mudas.png";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Mudas", href: "#mudas" },
    { label: "Resistência", href: "#resistencia" },
    { label: "Diferenciais", href: "#diferenciais" },
    { label: "Logística", href: "#logistica" },
    { label: "Sobre", href: "#sobre" },
    { label: "FAQ", href: "#faq" },
    { label: "Galeria", href: "#galeria" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-md shadow-soft py-3" 
          : "bg-transparent py-4"
      }`}
    >
      <div className="container-landing">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <img 
              src={logoSaoFrancisco} 
              alt="São Francisco Mudas" 
              className={`transition-all ${isScrolled ? "h-12 md:h-14" : "h-16 md:h-20 bg-white rounded-xl p-2 shadow-lg"}`}
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a 
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-green-600 ${
                  isScrolled ? "text-foreground" : "text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <PhoneDisplay className={isScrolled ? "text-muted-foreground" : "text-white/80"} />
            <WhatsAppButton size="sm" message="Olá! Vim pelo site e gostaria de mais informações.">
              Falar no WhatsApp
            </WhatsAppButton>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 ${isScrolled ? "text-foreground" : "text-white"}`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-elevated p-6 space-y-4">
            {navLinks.map((link) => (
              <a 
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-foreground font-medium py-2 hover:text-primary"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 border-t space-y-3">
              <PhoneDisplay />
              <WhatsAppButton 
                size="lg" 
                className="w-full justify-center"
                message="Olá! Vim pelo site e gostaria de mais informações."
              >
                Falar no WhatsApp
              </WhatsAppButton>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
