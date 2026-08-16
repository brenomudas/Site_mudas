import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Check, ZoomIn, Info } from "lucide-react";
import { WhatsAppButton } from "./WhatsAppButton";
import { Dialog, DialogContent } from "@/components/ui/dialog";

import imgManga1 from "@/assets/file_000000003398820ebfadde86b90076c6.webp";
import imgManga2 from "@/assets/IMG-20260728-WA0129.webp";
import imgManga3 from "@/assets/IMG-20260728-WA0131.webp";
import imgManga4 from "@/assets/IMG-20260728-WA0133.webp";
import imgManga5 from "@/assets/IMG-20260728-WA0135.webp";

const mangoImages = [
  {
    src: imgManga1,
    alt: "Lote de Mudas de Mangueira no Viveiro São Francisco",
    title: "Lote de Mudas de Mangueira",
    subtitle: "Padrão de qualidade e vigor no viveiro",
  },
  {
    src: imgManga2,
    alt: "Mudas de Mangueira em Desenvolvimento",
    title: "Excelente Desenvolvimento Foliar",
    subtitle: "Sanidade e tratamento nutricional completo",
  },
  {
    src: imgManga3,
    alt: "Estrutura do Cultivo de Mangueiras",
    title: "Canteiros de Produção Organizados",
    subtitle: "Ambiente protegido para máximo rendimento",
  },
  {
    src: imgManga4,
    alt: "Mudas Selecionadas de Mangueira",
    title: "Enraizamento Vigoroso e Seguro",
    subtitle: "Mudas prontas para fixação imediata no solo",
  },
  {
    src: imgManga5,
    alt: "Mudas de Mangueira Prontas para Envio",
    title: "Preparo e Expedição para Transporte",
    subtitle: "Embaladas com cuidado para entrega em todo Brasil",
  },
];

const mangoFeatures = [
  {
    title: "Matrizes Selecionadas",
    description: "Material genético de alto padrão para garantir produtividade e padrão de frutos.",
  },
  {
    title: "Sistema Radicular Forte",
    description: "Desenvolvimento radicular consistente para rápido pegamento pós-plantio no campo.",
  },
  {
    title: "Acompanhamento Técnico",
    description: "Mudas cultivadas sob rigorosa supervisão nutricional e fitossanitária.",
  },
  {
    title: "Prontas para o Campo",
    description: "Tamanho e aclimatação ideais para encarar o plantio direto na sua propriedade.",
  },
];

const OtherProductsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === mangoImages.length - 1 ? 0 : prev + 1));
  }, []);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? mangoImages.length - 1 : prev - 1));
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      goToNext();
    }, 4500);
    return () => clearInterval(timer);
  }, [isAutoPlaying, goToNext]);

  return (
    <section id="mangueiras" className="section-padding bg-gradient-to-b from-amber-50/40 via-white to-emerald-50/20 overflow-hidden relative">
      {/* Decorative ambient blurred glow */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container-landing relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight mb-4">
            Também trabalhamos com <span className="text-amber-600">Mudas de Mangueira</span>
          </h2>

          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Além da nossa referência na produção de goiabeiras, oferecemos mudas de mangueira de alta qualidade,
            cultivadas com rigor técnico para maximizar o rendimento e a longevidade do seu pomar.
          </p>
        </div>

        {/* 2-Column Main Content: Left Text/Specs, Right Image Carousel */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Product Information & Benefits */}
          <div className="flex flex-col justify-between space-y-6">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-card border border-amber-100 relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/10 rounded-bl-full pointer-events-none" />

              <div>
                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4">
                  Vigor, Saúde Genética e Alto Pegamento
                </h3>

                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-6">
                  Nossas mudas de mangueira passam por rigoroso controle no viveiro, garantindo um desenvolvimento uniforme,
                  tronco estruturado e raízes sadias prontas para absorver nutrientes assim que plantadas.
                </p>
              </div>

              {/* Grid of features */}
              <div className="grid sm:grid-cols-2 gap-4 pt-2">
                {mangoFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-amber-50/50 border border-amber-100/60">
                    <div className="p-1.5 rounded-lg bg-amber-500/15 text-amber-700 flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground text-sm">{feat.title}</h4>
                      <p className="text-xs text-muted-foreground mt-0.5 leading-snug">{feat.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-0 sm:pt-2">
              <WhatsAppButton 
                size="xl" 
                iconClassName="w-7 h-7 sm:w-8 sm:h-8 flex-shrink-0"
                className="w-full sm:w-auto bg-amber-600 hover:bg-amber-700 text-white shadow-xl py-4 sm:py-5 px-6 sm:px-8 text-base sm:text-lg font-bold gap-3 rounded-2xl active:scale-[0.98] transition-all"
                message="Olá! Vim pelo site e gostaria de informações e orçamento para mudas de mangueira."
              >
                Solicitar Orçamento para Mudas de Manga
              </WhatsAppButton>
            </div>
          </div>

          {/* Right Column - Image Carousel */}
          <div
            className="flex flex-col space-y-4"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            {/* Main Featured Carousel Display with Fixed 4:3 Aspect Ratio & Full Image Cover */}
            <div className="relative rounded-2xl overflow-hidden shadow-elevated border border-slate-200/80 bg-slate-900 aspect-[4/3] w-full group">
              <img
                src={mangoImages[currentIndex].src}
                alt={mangoImages[currentIndex].alt}
                loading="lazy"
                className="w-full h-full object-cover object-center transition-all duration-500 ease-out transform group-hover:scale-105"
              />

              {/* Gradient Overlay for Text & Buttons */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none z-10" />

              {/* Zoom Lightbox Trigger */}
              <button
                onClick={() => setIsLightboxOpen(true)}
                className="absolute top-4 right-4 p-2.5 rounded-full bg-black/40 backdrop-blur-md text-white hover:bg-black/60 transition-all z-20"
                title="Ampliar foto"
              >
                <ZoomIn className="w-5 h-5" />
              </button>

              {/* Navigation Arrows */}
              <button
                onClick={goToPrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/40 transition-all opacity-95 group-hover:opacity-100 z-20"
                aria-label="Imagem anterior"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={goToNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/40 transition-all opacity-95 group-hover:opacity-100 z-20"
                aria-label="Próxima imagem"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Caption & Counter Badge */}
              <div className="absolute bottom-4 left-4 right-4 z-20 flex items-end justify-between gap-4">
                <div className="text-white space-y-0.5 max-w-[80%]">
                  <span className="inline-block px-2.5 py-0.5 rounded-md bg-amber-500/80 text-white font-medium text-xs mb-1">
                    Mudas de Mangueira
                  </span>
                  <h4 className="font-heading font-bold text-base sm:text-lg leading-snug drop-shadow-sm">
                    {mangoImages[currentIndex].title}
                  </h4>
                  <p className="text-xs text-white/80 line-clamp-1">
                    {mangoImages[currentIndex].subtitle}
                  </p>
                </div>

                <div className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-md text-white text-xs font-semibold whitespace-nowrap">
                  {currentIndex + 1} / {mangoImages.length}
                </div>
              </div>
            </div>

            {/* Thumbnail Navigation Carousel */}
            <div className="grid grid-cols-5 gap-2 sm:gap-3 shrink-0">
              {mangoImages.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`relative aspect-square rounded-xl overflow-hidden border-2 transition-all duration-200 ${currentIndex === idx
                    ? "border-amber-500 ring-2 ring-amber-500/40 scale-[1.03] shadow-md"
                    : "border-transparent opacity-65 hover:opacity-100"
                    }`}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <Dialog open={isLightboxOpen} onOpenChange={setIsLightboxOpen}>
        <DialogContent className="max-w-4xl w-full p-0 bg-black/95 border-none">
          <div className="relative flex items-center justify-center min-h-[60vh] p-4">
            <button
              onClick={goToPrev}
              className="absolute left-4 z-50 text-white hover:text-amber-400 transition-colors p-2 bg-black/40 rounded-full"
            >
              <ChevronLeft className="h-8 w-8" />
            </button>

            <img
              src={mangoImages[currentIndex].src}
              alt={mangoImages[currentIndex].alt}
              className="max-h-[80vh] max-w-full object-contain rounded-lg"
            />

            <button
              onClick={goToNext}
              className="absolute right-4 z-50 text-white hover:text-amber-400 transition-colors p-2 bg-black/40 rounded-full"
            >
              <ChevronRight className="h-8 w-8" />
            </button>

            <div className="absolute bottom-4 left-0 right-0 text-center text-white bg-black/60 py-2 px-4 backdrop-blur-sm">
              <p className="font-semibold text-sm">{mangoImages[currentIndex].title}</p>
              <p className="text-xs text-white/80">{mangoImages[currentIndex].alt}</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default OtherProductsSection;
