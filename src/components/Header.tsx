import { useState, useEffect } from "react";
import { WhatsAppButton, PhoneDisplay } from "./WhatsAppButton";
import logoSaoFrancisco from "@/assets/logo vetorizada 2.svg";
import { Menu, X, ChevronRight } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { label: "Goiabeiras", href: "#mudas" },
    { label: "Mangueiras", href: "#mangueiras" },
    { label: "Resistência", href: "#resistencia" },
    { label: "Diferenciais", href: "#diferenciais" },
    { label: "Logística", href: "#logistica" },
    { label: "Sobre", href: "#sobre" },
    { label: "FAQ", href: "#faq" },
    { label: "Galeria", href: "#galeria" },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? "bg-white/70 backdrop-blur-xl backdrop-saturate-150 shadow-lg shadow-black/5 py-2.5 border-b border-white/40" 
            : "bg-transparent py-3 sm:py-4"
        }`}
      >
        <div className="container-landing">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2 group">
              <img 
                src={logoSaoFrancisco} 
                alt="São Francisco Mudas" 
                className={`transition-all duration-300 object-contain ${
                  isScrolled 
                    ? "h-14 sm:h-16 lg:h-20 w-auto" 
                    : "h-14 sm:h-16 md:h-20 lg:h-24 w-auto bg-white/95 rounded-xl p-2 sm:p-2.5 shadow-md border border-white/30"
                }`}
              />
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-emerald-600 ${
                    isScrolled ? "text-foreground" : "text-white hover:text-white/80"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>


            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Abrir menu"
              className={`lg:hidden flex items-center justify-center p-2.5 rounded-xl transition-all duration-200 ${
                isScrolled 
                  ? "bg-slate-100 text-slate-800 hover:bg-slate-200 active:scale-95" 
                  : "bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white/30 active:scale-95"
              }`}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Fullscreen Backdrop & Floating Panel (Outside Header Stacking Context) */}
      {isMobileMenuOpen && (
        <div className="lg:hidden">
          {/* Fullscreen Backdrop Blur matching header acrylic blur */}
          <div 
            className="fixed inset-0 bg-slate-900/30 backdrop-blur-xl backdrop-saturate-150 z-40 animate-in fade-in duration-200"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          {/* Mobile Options Card - Centered in the middle of the screen */}
          <div className="fixed top-1/2 -translate-y-1/2 left-4 right-4 max-w-sm sm:max-w-md mx-auto bg-white/95 backdrop-blur-2xl rounded-3xl shadow-2xl border border-slate-100 p-5 sm:p-6 space-y-3 z-50 animate-in fade-in zoom-in-95 duration-200 max-h-[82vh] overflow-y-auto">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a 
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between text-foreground font-semibold px-3.5 py-3 rounded-xl hover:bg-emerald-50 hover:text-emerald-700 transition-all active:scale-[0.99]"
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </a>
              ))}
            </div>
            <div className="pt-3 border-t border-slate-100 space-y-3">
              <PhoneDisplay />
              <WhatsAppButton 
                size="lg" 
                className="w-full justify-center shadow-md"
                message="Olá! Vim pelo site e gostaria de mais informações."
              >
                Falar no WhatsApp
              </WhatsAppButton>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
