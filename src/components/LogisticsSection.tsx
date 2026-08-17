import mudasCaixas from "@/assets/mudas-caixas-transporte.webp";
import { Package, Truck, MapPin, Clock, CheckCircle } from "lucide-react";
import { WhatsAppButton } from "./WhatsAppButton";

const LogisticsSection = () => {
  const steps = [
    {
      icon: Package,
      title: "Preparação Cuidadosa",
      description: "Mudas selecionadas e embaladas com proteção especial",
    },
    {
      icon: Truck,
      title: "Transporte Especializado",
      description: "Enviamos via terrestre ou aéreo, conforme sua necessidade",
    },
    {
      icon: MapPin,
      title: "Cobertura Nacional",
      description: "Entregamos em todo o território brasileiro",
    },
    {
      icon: Clock,
      title: "Prazo Ágil",
      description: "Rápida chegada ao destino!",
    },
  ];
  const regions = ["Nordeste", "Sudeste", "Centro-Oeste", "Sul", "Norte"];

  return (
    <section className="section-padding" id="logistica">
      <div className="container-landing">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                Suas Mudas Chegam <span className="text-primary">Saudáveis</span> em Qualquer Lugar do Brasil
              </h2>
              <p className="text-muted-foreground">
                Desenvolvemos um sistema de embalagem e transporte que garante que suas mudas
                cheguem em perfeitas condições, prontas para o plantio.
              </p>
            </div>

            {/* Steps */}
            <div className="grid sm:grid-cols-2 gap-4">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-secondary rounded-xl">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <step.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-sm">{step.title}</h3>
                    <p className="text-xs text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Regions */}
            <div className="bg-leaf-light rounded-xl p-6">
              <h3 className="font-heading font-semibold mb-4">Regiões Atendidas</h3>
              <div className="flex flex-wrap gap-2">
                {regions.map((region, index) => (
                  <span key={index} className="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    <CheckCircle className="w-3 h-3" />
                    {region}
                  </span>
                ))}
              </div>
            </div>

            <WhatsAppButton size="lg" message="Olá! Gostaria de saber sobre frete e prazos de entrega para minha região.">
              Consultar Frete e Prazo
            </WhatsAppButton>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="absolute -inset-4 bg-primary/5 rounded-3xl" />
            <img
              alt="Mudas organizadas em caixas para transporte"
              className="relative w-full rounded-2xl shadow-elevated"
              src="/lovable-uploads/32956fc3-a7ae-4667-9d59-827a5ea5ab60.webp"
              loading="lazy"
              decoding="async"
              width={600}
              height={400}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogisticsSection;