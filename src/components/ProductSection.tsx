import mudaIndividual from "@/assets/muda-goiabeira-individual.jpg";
import { Check, Info } from "lucide-react";
import { WhatsAppButton } from "./WhatsAppButton";
const ProductSection = () => {
  const specifications = [{
    label: "Copa",
    value: "Goiabeira Paluma"
  }, {
    label: "Porta-enxerto",
    value: "BRS Guaraçá (Material original EMBRAPA)"
  }, {
    label: "Altura média",
    value: "30 a 40 cm"
  }, {
    label: "Sistema radicular",
    value: "Vigoroso e desenvolvido"
  }, {
    label: "Idade",
    value: "120 dias pós-enxertia"
  }, {
    label: "Embalagem",
    value: "Sacola plástica preta"
  }];
  const benefits = ["Alta produtividade comprovada", "Frutos grandes e uniformes", "Excelente aceitação no mercado", "Polpa espessa e vermelha", "Ideal para mesa e indústria", "Resistência a pragas e doenças"];
  return <section className="section-padding" id="mudas">
      <div className="container-landing">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="absolute -inset-4 bg-primary/5 rounded-3xl" />
            <img alt="Muda de Goiabeira Paluma Enxertada no BRS Guaraçá" className="relative w-full max-w-md mx-auto rounded-2xl shadow-elevated" src="/lovable-uploads/4c636a85-42c2-4cd0-8c2d-fc36968a0086.jpg" />
            
            {/* Info badge */}
            <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-card">
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Muda pronta para plantio:</strong> Desenvolvida 
                  em ambiente controlado, com sistema radicular bem formado e apta para campo.
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                Muda de Goiabeira{" "}
                <span className="text-primary">Paluma</span>{" "}
                Enxertada
              </h2>
              <p className="text-muted-foreground">
                A variedade <strong>Paluma</strong> é a cultivar de goiaba mais plantada no Brasil, 
                reconhecida por sua alta produtividade, frutos de excelente qualidade e boa 
                adaptação às diferentes condições climáticas do país.
              </p>
            </div>

            {/* Specifications */}
            <div className="bg-secondary rounded-xl p-6">
              <h3 className="font-heading font-semibold text-lg mb-4">Especificações Técnicas</h3>
              <div className="grid grid-cols-2 gap-4">
                {specifications.map((spec, index) => <div key={index} className="space-y-1">
                    <p className="text-xs text-muted-foreground uppercase tracking-wide">{spec.label}</p>
                    <p className="font-medium text-foreground">{spec.value}</p>
                  </div>)}
              </div>
            </div>

            {/* Benefits */}
            <div>
              <h3 className="font-heading font-semibold text-lg mb-4">Benefícios da Paluma</h3>
              <div className="grid grid-cols-2 gap-3">
                {benefits.map((benefit, index) => <div key={index} className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-sm">{benefit}</span>
                  </div>)}
              </div>
            </div>

            {/* CTA */}
            <WhatsAppButton size="lg" message="Olá! Gostaria de saber mais sobre as mudas de goiabeira Paluma enxertadas.">
              Falar com Nossa Equipe
            </WhatsAppButton>
          </div>
        </div>
      </div>
    </section>;
};
export default ProductSection;