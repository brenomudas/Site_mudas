import logoSaoFrancisco from "@/assets/logo-sao-francisco-mudas.webp";
import { WhatsAppButton, PhoneDisplay } from "./WhatsAppButton";
import { Youtube, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-foreground text-white/70 py-12">
      <div className="container-landing">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <img
              alt="São Francisco Mudas"
              className="h-12 w-auto bg-white rounded-lg p-2"
              src="/lovable-uploads/5517861d-1eea-4aeb-8be8-990ba3a36f87.webp"
              loading="lazy"
              decoding="async"
              width={120}
              height={48}
            />
            <div>
              <p className="font-heading font-semibold text-white">São Francisco Mudas</p>
              <p className="text-sm">Mudas de alta qualidade para o seu pomar</p>
            </div>
          </div>

          {/* Contact & Social */}
          <div className="flex flex-col items-start gap-3">
            {/* WhatsApp */}
            <WhatsAppButton
              id="whatsapp-normal"
              variant="link"
              size="sm"
              iconClassName="w-4 h-4"
              message="Olá! Vim pelo rodapé do site e gostaria de mais informações."
            >
              <span>(87) 99649-4036</span>
            </WhatsAppButton>

            {/* YouTube */}
            <a
              href="https://youtu.be/P0pzQaxEgAo?si=c0b0dAa8kkEAsX8r"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors"
            >
              <Youtube className="w-4 h-4" />
              <span>São Francisco Mudas</span>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/saofranciscomudas_"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors"
            >
              <Instagram className="w-4 h-4" />
              <span>saofranciscomudas_</span>
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-center md:text-right">
            © {currentYear} São Francisco Mudas.<br />
            Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;