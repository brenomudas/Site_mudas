import { Award, Leaf, ShieldCheck, Microscope, Truck, HeartHandshake } from "lucide-react";

const DifferentialsSection = () => {
  const differentials = [
    {
      icon: Microscope,
      title: "Material Genético Original",
      description: "Trabalhamos exclusivamente com material genético ORIGINAL EMBRAPA, garantindo a autenticidade do BRS Guaraçá."
    },
    {
      icon: Leaf,
      title: "Mudas de Alta Qualidade",
      description: "Produzidas em viveiro próprio com controle fitossanitário rigoroso e acompanhamento técnico em todas as etapas."
    },
    {
      icon: ShieldCheck,
      title: "Garantia de Procedência",
      description: "Cada lote possui rastreabilidade completa, desde a origem do material genético até a entrega ao cliente."
    },
    {
      icon: Award,
      title: "Experiência Comprovada",
      description: "34 anos de experiência na produção de mudas frutíferas, atendendo produtores de todo o Brasil."
    },
    {
      icon: Truck,
      title: "Logística Especializada",
      description: "Embalagem e transporte desenvolvidos para manter a integridade das mudas durante toda a viagem."
    },
    {
      icon: HeartHandshake,
      title: "Suporte Técnico",
      description: "Orientações completas para plantio e poda."
    }
  ];

  return (
    <section className="section-padding bg-primary text-white" id="diferenciais">
      <div className="container-landing">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Por Que Escolher a{" "}
            <span className="text-gradient-gold">São Francisco Mudas?</span>
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Compromisso com qualidade, transparência e o sucesso do seu projeto agrícola.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentials.map((item, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-colors"
            >
              <div className="w-12 h-12 rounded-lg bg-gold/20 flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-white/70 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
