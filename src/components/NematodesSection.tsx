import { ShieldCheck, TrendingUp, Timer, AlertTriangle } from "lucide-react";
import { WhatsAppButton } from "./WhatsAppButton";

const NematodesSection = () => {
  const problems = [
    "Amarelecimento e murcha das folhas",
    "Queda prematura de frutos e flores",
    "Nódulos e galhas nas raízes de goiabeiras comuns",
    "Morte progressiva e secamento das plantas",
    "Redução drástica da produtividade do pomar",
    "Necessidade de erradicação de áreas infestadas"
  ];

  const solutions = [
    {
      icon: ShieldCheck,
      title: "Resistência Total a Nematoides",
      description: "O porta-enxerto BRS Guaraçá apresenta resistência genética ao Meloidogyne enterolobii."
    },
    {
      icon: Timer,
      title: "Longevidade no Campo",
      description: "Mantém a planta saudável e altamente produtiva por décadas."
    },
    {
      icon: TrendingUp,
      title: "Produtividade Mantida",
      description: "Produção a plena carga mesmo em solos com presença comprovada de nematoides."
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-background to-secondary" id="resistencia">
      <div className="container-landing">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-destructive/10 text-destructive rounded-full text-sm font-medium mb-3">
            Alerta aos Produtores
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3">
            Nematoides das Galhas: A <span className="text-destructive">Maior Ameaça</span> aos Pomares
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-base sm:text-lg">
            O nematoide das galhas (<em>Meloidogyne enterolobii</em>) devasta pomares de pé-franco. 
            A única solução definitiva é o plantio de <strong>mudas de goiaba enxertadas no BRS Guaraçá</strong>.
          </p>
        </div>

        {/* Problem vs Solution */}
        <div className="grid lg:grid-cols-2 gap-8 mb-10">
          {/* Problem */}
          <div className="bg-destructive/5 border border-destructive/20 rounded-2xl p-6 sm:p-8">
            <h3 className="font-heading font-bold text-xl text-destructive mb-5 flex items-center gap-2">
              <AlertTriangle className="w-6 h-6" />
              Sintomas em Plantas Sem Enxertia
            </h3>
            <ul className="space-y-3">
              {problems.map((problem, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-destructive/20 text-destructive flex items-center justify-center flex-shrink-0 text-xs font-bold mt-0.5">
                    ✕
                  </span>
                  <span className="text-foreground text-sm sm:text-base">{problem}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solution */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 sm:p-8">
            <h3 className="font-heading font-bold text-xl text-primary mb-5 flex items-center gap-2">
              <ShieldCheck className="w-6 h-6" />
              Solução: Porta-Enxerto BRS Guaraçá
            </h3>
            <div className="space-y-4">
              {solutions.map((solution, index) => (
                <div key={index} className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <solution.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-base">{solution.title}</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{solution.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-card rounded-2xl p-6 sm:p-8 shadow-card border border-border">
          <h3 className="font-heading font-bold text-xl sm:text-2xl mb-2">
            Proteja Seu Investimento com Mudas Resistentes
          </h3>
          <p className="text-muted-foreground mb-5 max-w-xl mx-auto text-sm sm:text-base">
            Consulte a disponibilidade e solicite orçamento para mudas enxertadas no BRS Guaraçá.
          </p>
          <WhatsAppButton 
            size="xl"
            message="Olá! Quero proteger meu pomar com mudas de goiaba resistentes a nematoides enxertadas no BRS Guaraçá."
          >
            Garantir Mudas Resistentes
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
};

export default NematodesSection;
