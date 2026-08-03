import { WhatsAppButton, PhoneDisplay } from "./WhatsAppButton";
import logoSaoFrancisco from "@/assets/logo-sao-francisco-mudas.png";
import seloEmbrapa from "@/assets/selo-embrapa.png";
import mudaIndividual from "@/assets/muda-goiabeira-individual.jpg";
import { Shield, Award, Truck } from "lucide-react";
const HeroSection = () => {
  return <section className="relative min-h-screen flex items-center bg-gradient-to-br from-primary via-primary to-accent overflow-hidden">

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />
      </div>

      <div className="container-landing section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-white space-y-6 fade-in-up">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-2 rounded-full text-xs sm:text-sm max-w-[70%] sm:max-w-full mt-16 sm:mt-0 self-start">
              <Award className="w-4 h-4 text-gold flex-shrink-0" />
              <span className="truncate sm:whitespace-normal">Material Genético Original EMBRAPA</span>
            </div>

            {/* Headline */}
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Mudas de Goiabeira{" "}
              <span className="text-gradient-gold">Paluma Enxertadas</span>{" "}
              com BRS Guaraçá
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-white/90 max-w-xl">
              <strong>Resistência comprovada a nematoides</strong> com tecnologia EMBRAPA. 
              A escolha inteligente para produtores que buscam alta produtividade e longevidade do pomar.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2 bg-white/10 px-3 py-2 rounded-lg">
                <Shield className="w-4 h-4 text-gold" />
                <span>Garantia de Origem</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-3 py-2 rounded-lg">
                <Truck className="w-4 h-4 text-gold" />
                <span>Entrega para Todo Brasil</span>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <WhatsAppButton size="xl" message="Olá! Quero solicitar um orçamento para mudas de goiabeira Paluma enxertadas.">
                Solicitar Orçamento Agora
              </WhatsAppButton>
              <PhoneDisplay className="text-white/80 hover:text-white" />
            </div>
          </div>

          {/* Right content - EMBRAPA seal + Image */}
          <div className="relative flex flex-col lg:flex-row justify-center lg:justify-end items-center gap-4 lg:gap-6">
            {/* EMBRAPA seal - left of the photo on desktop, below on mobile */}
            <div className="order-2 lg:order-1 flex flex-col items-center gap-2 opacity-90 hover:opacity-100 transition-opacity">
              <img src={seloEmbrapa} alt="Tecnologia EMBRAPA" className="h-16 lg:h-20 w-auto drop-shadow-lg" />
              <span className="text-white/70 text-[10px] lg:text-xs font-medium bg-white/10 px-2 py-1 rounded-full backdrop-blur-sm text-center">Licenciado EMBRAPA</span>
            </div>
            
            <div className="order-1 lg:order-2 relative float-animation">
              <div className="absolute -inset-4 bg-white/20 rounded-3xl blur-2xl" />
              <img alt="Muda de Goiabeira Paluma Enxertada" className="relative w-72 md:w-80 lg:w-96 h-auto rounded-2xl shadow-elevated" src="/lovable-uploads/12bbb4e2-2444-493f-9410-441644b7804c.jpg" />
              
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-card p-4 fade-in-up" style={{
              animationDelay: "0.3s"
            }}>
                <p className="text-xs text-muted-foreground">Porta-enxerto</p>
                <p className="font-heading font-bold text-primary">BRS Guaraçá</p>
              </div>
              
              <div className="absolute -top-4 -right-4 bg-gold text-white rounded-xl shadow-card p-4 fade-in-up" style={{
              animationDelay: "0.5s"
            }}>
                <p className="font-heading font-bold text-lg">100%</p>
                <p className="text-xs">Resistente</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>;
};
export default HeroSection;