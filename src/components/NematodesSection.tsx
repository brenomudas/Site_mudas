import { ShieldCheck, TrendingUp, Timer, AlertTriangle } from "lucide-react";
import { WhatsAppButton } from "./WhatsAppButton";

const NematodesSection = () => {
  const problems = [
    "Amarelecimento e murcha das folhas",
    "Queda prematura de frutos",
    "Nódulos nas raízes",
    "Morte progressiva das plantas",
    "Redução drástica da produtividade",
    "Necessidade de renovação total do pomar"
  ];

  const solutions = [
    {
      icon: ShieldCheck,
      title: "Resistência Comprovada",
      description: "O BRS Guaraçá apresenta resistência completa ao Meloidogyne enterolobii"
    },
    {
      icon: Timer,
      title: "Longevidade do Pomar",
      description: "Plantas saudáveis por muito mais tempo, garantindo retorno do investimento"
    },
    {
      icon: TrendingUp,
      title: "Produtividade Mantida",
      description: "Sem perdas de produção causadas por nematoides, colheitas consistentes"
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-background to-secondary" id="resistencia">
      <div className="container-landing">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-destructive/10 text-destructive rounded-full text-sm font-medium mb-4">
            Problema Grave
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nematoides: A{" "}
            <span className="text-destructive">Maior Ameaça</span>{" "}
            aos Pomares de Goiaba
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            O nematoide das galhas (<em>Meloidogyne enterolobii</em>) tem devastado pomares 
            em todo o Brasil. Áreas inteiras foram abandonadas por produtores que viram 
            anos de trabalho e investimento serem destruídos.
          </p>
        </div>

        {/* Problem vs Solution */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Problem */}
          <div className="bg-destructive/5 border border-destructive/20 rounded-2xl p-8">
            <h3 className="font-heading font-bold text-xl text-destructive mb-6 flex items-center gap-2">
              <AlertTriangle className="w-6 h-6" />
              Sintomas da Infestação
            </h3>
            <ul className="space-y-3">
              {problems.map((problem, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-destructive/20 text-destructive flex items-center justify-center flex-shrink-0 text-sm font-bold">
                    ✕
                  </span>
                  <span className="text-foreground">{problem}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solution */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8">
            <h3 className="font-heading font-bold text-xl text-primary mb-6 flex items-center gap-2">
              <ShieldCheck className="w-6 h-6" />
              A Solução: BRS Guaraçá
            </h3>
            <div className="space-y-4">
              {solutions.map((solution, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <solution.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{solution.title}</h4>
                    <p className="text-sm text-muted-foreground">{solution.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-card rounded-2xl p-8 shadow-card">
          <h3 className="font-heading font-bold text-2xl mb-4">
            Não Arrisque Seu Investimento!
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Proteja seu pomar desde o início com mudas enxertadas no porta-enxerto BRS Guaraçá. 
            A única solução comprovada contra o nematoide das galhas.
          </p>
          <WhatsAppButton 
            size="xl"
            message="Olá! Quero proteger meu pomar com mudas resistentes a nematoides. Podem me ajudar?"
          >
            Garantir Mudas Resistentes
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
};

export default NematodesSection;
