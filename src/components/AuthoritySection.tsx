import { CheckCircle, Leaf, FlaskConical, Award } from "lucide-react";
import seloEmbrapa from "@/assets/selo-embrapa.webp";

const AuthoritySection = () => {
  const credentials = [
    {
      icon: FlaskConical,
      title: "Pesquisa Científica",
      description: "Material genético desenvolvido pela EMBRAPA após anos de pesquisa intensiva",
    },
    {
      icon: Award,
      title: "Certificação Oficial",
      description: "Cultivar registrado e protegido, garantindo autenticidade e rastreabilidade",
    },
    {
      icon: Leaf,
      title: "Viveiro Especializado",
      description: "Produção controlada com padrões rigorosos de qualidade fitossanitária",
    },
  ];

  return (
    <section className="section-padding bg-secondary">
      <div className="container-landing">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nós somos referência em{" "}
            <span className="text-primary">mudas de alta qualidade!</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Somos produtores especializados com material genético original EMBRAPA,
            garantindo a procedência e qualidade que seu investimento merece.
          </p>
        </div>

        {/* Credentials grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {credentials.map((item, index) => (
            <div key={index} className="bg-card rounded-xl p-6 shadow-card card-hover text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-4">
                <item.icon className="w-7 h-7" />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.description}</p>
            </div>
          ))}
        </div>

        {/* EMBRAPA highlight */}
        <div className="bg-gradient-to-r from-embrapa to-primary rounded-2xl p-8 md:p-12 text-white">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <img
              alt="Tecnologia EMBRAPA"
              className="w-32 h-32 object-contain"
              src="/lovable-uploads/5a8da977-d484-4b34-bf5c-dab940a8a104.webp"
              loading="lazy"
            />
            <div className="flex-1 text-center md:text-left">
              <h3 className="font-heading text-2xl md:text-3xl font-bold mb-4">
                Tecnologia EMBRAPA Comprovada
              </h3>
              <p className="text-white/90 mb-4">
                O porta-enxerto <strong>BRS Guaraçá</strong> foi desenvolvido especificamente pela
                Empresa Brasileira de Pesquisa Agropecuária (EMBRAPA) para conferir resistência
                a nematoides das galhas (<em>Meloidogyne enterolobii</em>), a principal praga
                que dizima pomares de goiaba em todo o Brasil.
              </p>
              <ul className="space-y-2">
                {[
                  "Resultado de mais de 15 anos de pesquisa",
                  "Testado em diversas regiões produtoras do país",
                  "Única solução eficaz contra M. enterolobii",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthoritySection;