import { useState } from "react";
import { Check, Info, Sprout } from "lucide-react";
import { WhatsAppButton } from "./WhatsAppButton";

const varieties = [
  {
    id: "paluma",
    name: "Goiaba Paluma Enxertada",
    badge: "Mais Vendida",
    subhead: "Porta-Enxerto BRS Guaraçá",
    description:
      "A cultivar mais plantada no Brasil. Destaca-se pela altíssima produtividade, frutos de polpa vermelha espessa e excelente aceitação no mercado in natura e industrial.",
    image: "/lovable-uploads/4c636a85-42c2-4cd0-8c2d-fc36968a0086.webp",
    imageAlt: "Muda de goiaba Paluma enxertada no BRS Guaraçá - São Francisco Mudas",
    specifications: [
      { label: "Copa", value: "Goiaba Paluma" },
      { label: "Porta-enxerto", value: "BRS Guaraçá (EMBRAPA)" },
      { label: "Preço unitário", value: "R$ 12,90 cada" },
      { label: "Pedido mínimo", value: "50 mudas" },
      { label: "Resistência", value: "100% Resistente a Nematoides" },
      { label: "Altura", value: "30 a 40 cm" },
      { label: "Idade", value: "120 dias pós-enxertia" },
      { label: "Embalagem", value: "Sacola agrícola" },
    ],
    benefits: [
      "Alta produtividade comprovada",
      "Frutos grandes de polpa vermelha",
      "Produção precoce a partir de 12 meses",
      "Resistência total a nematoides",
      "Excelente durabilidade pós-colheita",
      "Ideal para indústria e mesa",
    ],
    whatsappMsg: "Olá! Gostaria de consultar o preço e solicitar orçamento para mudas de goiaba Paluma enxertadas.",
    ctaText: "Solicitar Orçamento Paluma",
  },
  {
    id: "tailandesa",
    name: "Goiaba Tailandesa Enxertada",
    badge: "Frutos Gigantes",
    subhead: "Porta-Enxerto BRS Guaraçá",
    description:
      "Ideal para o mercado in natura premium. Produz frutos gigantes (500g a 1kg) de polpa crocante, sabor suave e altíssimo valor agregado.",
    image: "/lovable-uploads/12bbb4e2-2444-493f-9410-441644b7804c.webp",
    imageAlt: "Muda de goiaba tailandesa enxertada no BRS Guaraçá - São Francisco Mudas",
    specifications: [
      { label: "Copa", value: "Goiaba Tailandesa" },
      { label: "Porta-enxerto", value: "BRS Guaraçá (EMBRAPA)" },
      { label: "Preço unitário", value: "R$ 12,90 cada" },
      { label: "Pedido mínimo", value: "50 mudas" },
      { label: "Resistência", value: "100% Resistente a Nematoides" },
      { label: "Peso do fruto", value: "500g a 1.000g" },
      { label: "Idade", value: "120 dias pós-enxertia" },
      { label: "Mercado", value: "In natura de luxo" },
    ],
    benefits: [
      "Frutos gigantes de elevado valor comercial",
      "Polpa crocante com pouca semente",
      "Proteção total contra o nematoide das galhas",
      "Excelente vigor e rápido pegamento no campo",
      "Mudas aclimatadas e prontas para plantio",
      "Excelente padrão para feiras e supermercados",
    ],
    whatsappMsg: "Olá! Gostaria de consultar o preço e solicitar orçamento para mudas de goiaba Tailandesa enxertadas.",
    ctaText: "Solicitar Orçamento Tailandesa",
  },
];

const ProductSection = () => {
  const [activeTab, setActiveTab] = useState("paluma");
  const activeVariety = varieties.find((v) => v.id === activeTab) || varieties[0];

  return (
    <section className="section-padding bg-background" id="mudas">
      <div className="container-landing">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-3">
            <Sprout className="w-4 h-4" /> Nossos Produtos
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight mb-3">
            Mudas de Goiaba <span className="text-primary">Enxertadas</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            Cultivadas com rigor técnico no porta-enxerto BRS Guaraçá.
          </p>

          {/* Variety Selector Tabs - Equal width and height grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 max-w-2xl mx-auto gap-3 mt-6 w-full">
            {varieties.map((v) => (
              <button
                key={v.id}
                onClick={() => setActiveTab(v.id)}
                className={`w-full px-5 py-3.5 rounded-2xl font-heading font-bold text-sm sm:text-base transition-all duration-200 shadow-sm flex items-center justify-between gap-3 text-left ${
                  activeTab === v.id
                    ? "bg-primary text-white shadow-md scale-[1.01]"
                    : "bg-secondary text-foreground hover:bg-secondary/80 border border-slate-200"
                }`}
              >
                <span className="truncate">{v.name}</span>
                <span
                  className={`text-xs px-2.5 py-1 rounded-full font-medium shrink-0 whitespace-nowrap ${
                    activeTab === v.id
                      ? "bg-white/20 text-white"
                      : "bg-primary/10 text-primary"
                  }`}
                >
                  {v.badge}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Content Card */}
        <div className="grid lg:grid-cols-2 gap-10 items-center bg-card border border-border rounded-3xl p-6 sm:p-10 shadow-card">
          {/* Image Column */}
          <div className="relative">
            <div className="absolute -inset-4 bg-primary/5 rounded-3xl" />
            <img
              src={activeVariety.image}
              alt={activeVariety.imageAlt}
              loading="lazy"
              decoding="async"
              width={448}
              height={336}
              className="relative w-full max-w-md mx-auto rounded-2xl shadow-elevated object-cover aspect-[4/3]"
            />

            {/* Info badge */}
            <div className="mt-4 bg-white/95 border border-primary/20 backdrop-blur-sm rounded-xl p-3.5 shadow-sm">
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-muted-foreground">
                  <strong className="text-foreground">Material EMBRAPA:</strong> Resistência comprovada contra o nematoide <em>Meloidogyne enterolobii</em>.
                </p>
              </div>
            </div>
          </div>

          {/* Text Content Column */}
          <div className="space-y-5">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-accent bg-accent/10 px-3 py-1 rounded-md">
                {activeVariety.subhead}
              </span>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mt-2 mb-2">
                {activeVariety.name}
              </h3>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                {activeVariety.description}
              </p>
            </div>

            {/* Technical Specifications - Perfectly Aligned Grid */}
            <div className="bg-secondary/90 rounded-2xl p-5 border border-slate-200/80 shadow-sm">
              <h4 className="font-heading font-bold text-sm mb-3.5 text-foreground border-b border-slate-200/60 pb-2">
                Especificações Técnicas
              </h4>
              <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                {activeVariety.specifications.map((spec, index) => (
                  <div key={index} className="flex flex-col justify-start min-h-[48px]">
                    <p className="text-[11px] text-muted-foreground font-semibold uppercase tracking-wider mb-0.5">
                      {spec.label}
                    </p>
                    <p className="font-bold text-foreground text-xs sm:text-sm leading-snug">
                      {spec.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits list */}
            <div>
              <h4 className="font-heading font-semibold text-sm mb-2.5 text-foreground">
                Destaques
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {activeVariety.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-accent flex-shrink-0" />
                    <span className="text-xs sm:text-sm font-medium text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="pt-2">
              <WhatsAppButton
                size="lg"
                className="w-full sm:w-auto"
                message={activeVariety.whatsappMsg}
              >
                {activeVariety.ctaText}
              </WhatsAppButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;