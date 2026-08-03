import { WhatsAppButton, PhoneDisplay } from "./WhatsAppButton";
import logoSaoFrancisco from "@/assets/logo-sao-francisco-mudas.png";
import { Phone, Clock, MapPin } from "lucide-react";
const FinalCTASection = () => {
  return <section className="section-padding bg-gradient-to-br from-primary via-primary to-accent text-white">
      <div className="container-landing">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <img src={logoSaoFrancisco} alt="São Francisco Mudas" className="h-20 w-auto mx-auto mb-8 bg-white rounded-xl p-3" />

          {/* Headline */}
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">
            Pronto para Investir em um{" "}
            <span className="text-gradient-gold">Pomar Resistente</span>?
          </h2>

          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Não deixe os nematoides destruírem seu investimento. Comece com mudas 
            certificadas e suporte técnico especializado.
          </p>

          {/* Main CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <WhatsAppButton size="xl" className="text-lg" message="Olá! Quero fazer um pedido de mudas de goiabeira Paluma enxertadas no BRS Guaraçá.">
              Compre agora
            </WhatsAppButton>
          </div>

          {/* Contact info */}
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div className="flex flex-col items-center gap-2 p-4 bg-white/10 rounded-xl">
              <Phone className="w-6 h-6" />
              <span className="font-semibold">WhatsApp / Telefone</span>
              <span className="text-white/80">(87) 99649-4036</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-4 bg-white/10 rounded-xl">
              <Clock className="w-6 h-6" />
              <span className="font-semibold">Horário de Atendimento</span>
              <span className="text-white/80">Seg-Sex: 8h-18h | Sáb: 8h-14h</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-4 bg-white/10 rounded-xl">
              <MapPin className="w-6 h-6" />
              <span className="font-semibold">Localização</span>
              <span className="text-white/80">Petrolina, Pernambuco, Brasil</span>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default FinalCTASection;