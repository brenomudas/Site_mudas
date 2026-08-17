import { WhatsAppButton, PhoneDisplay } from "./WhatsAppButton";
import logoSaoFrancisco from "@/assets/logo-sao-francisco-mudas.png";
import seloEmbrapa from "@/assets/selo-embrapa.webp";
import mudaIndividual from "@/assets/muda-goiabeira-individual.webp";
import { Shield, Award, Truck } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-primary via-primary to-accent overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container-landing section-padding pt-28 md:pt-36 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-white space-y-6 fade-in-up">
            {/* Headline */}
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Mudas de Goiaba{" "}
              <span className="text-gradient-gold">Enxertadas</span>{" "}
              no BRS Guaraçá
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-white/90 max-w-xl">
              <strong>Resistência comprovada a nematoides</strong> com porta-enxerto BRS Guaraçá. Mudas de goiaba Paluma e Tailandesa com tecnologia EMBRAPA.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2 bg-white/10 px-3 py-2 rounded-lg">
                <Shield className="w-4 h-4 text-gold" />
                <span>Garantia de Origem EMBRAPA</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-3 py-2 rounded-lg">
                <Truck className="w-4 h-4 text-gold" />
                <span>Entrega para Todo Brasil</span>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <WhatsAppButton size="xl" message="Olá! Gostaria de solicitar um orçamento para mudas de goiaba enxertadas no BRS Guaraçá.">
                Solicitar Orçamento
              </WhatsAppButton>
              <PhoneDisplay className="text-white/80 hover:text-white" />
            </div>
          </div>

          {/* Right content - Main Image + Floating Badges */}
          <div className="relative flex justify-center items-center">
            <div className="relative float-animation">
              <div className="absolute -inset-4 bg-white/20 rounded-3xl blur-2xl" />
              <img
                alt="Muda de goiaba Paluma enxertada no BRS Guaraçá - São Francisco Mudas"
                className="relative w-72 md:w-80 lg:w-96 h-auto rounded-2xl shadow-elevated"
                src="/lovable-uploads/12bbb4e2-2444-493f-9410-441644b7804c.webp"
                loading="eager"
                fetchPriority="high"
                decoding="async"
                width={384}
                height={384}
              />

              {/* EMBRAPA Seal Floating Badge - Top Left */}
              <div
                className="absolute -top-6 -left-6 bg-white rounded-2xl shadow-card p-2 sm:p-2.5 fade-in-up border border-white hover:scale-105 transition-all z-20"
                style={{ animationDelay: "0.2s" }}
              >
                <img
                  src={seloEmbrapa}
                  alt="Tecnologia EMBRAPA"
                  className="h-16 md:h-20 lg:h-24 w-auto object-contain"
                  loading="eager"
                  decoding="async"
                  width={96}
                  height={96}
                />
              </div>

              {/* Porta-enxerto Floating Badge - Bottom Left */}
              <div
                className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-card p-3 sm:p-4 fade-in-up z-20"
                style={{ animationDelay: "0.3s" }}
              >
                <p className="text-xs text-muted-foreground font-medium">Porta-enxerto</p>
                <p className="font-heading font-bold text-primary">BRS Guaraçá</p>
              </div>

              {/* 100% Resistente Floating Badge - Top Right */}
              <div
                className="absolute -top-4 -right-4 bg-gold text-white rounded-xl shadow-card p-3 sm:p-4 fade-in-up z-20"
                style={{ animationDelay: "0.5s" }}
              >
                <p className="font-heading font-bold text-lg leading-none">100%</p>
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
    </section>
  );
};

export default HeroSection;