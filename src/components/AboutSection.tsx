import viveiroMudas from "@/assets/viveiro-mudas-panorama.webp";
import logoSaoFrancisco from "@/assets/logo-sao-francisco-mudas.webp";
import { MapPin, Users, Award, Target, Youtube } from "lucide-react";

const AboutSection = () => {
  const stats = [
    { value: "30+", label: "Anos no Mercado" },
    { value: "15MM+", label: "Mudas Produzidas" },
    { value: "7K+", label: "Produtores Atendidos" },
    { value: "15", label: "Estados Alcançados" },
  ];

  return (
    <section className="section-padding" id="sobre">
      <div className="container-landing">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Viveiro de Mudas <span className="text-primary">São Francisco Mudas</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base">
            Referência nacional na produção e venda de muda de goiaba Paluma enxertada no BRS Guaraçá e muda de goiaba tailandesa com garantia genética EMBRAPA.
          </p>
        </div>

        {/* Main content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          {/* Image */}
          <div className="relative">
            <img
              alt="Viveiro de mudas São Francisco Mudas em Petrolina PE"
              className="w-full rounded-2xl shadow-elevated"
              src="/lovable-uploads/a3f2cf2e-ea07-491c-b4f0-9c7eb7197f57.webp"
              loading="lazy"
              decoding="async"
              width={600}
              height={400}
            />
            <div className="absolute -bottom-6 -right-6 bg-card rounded-xl shadow-card p-4 border border-border">
              <img
                alt="São Francisco Mudas - Viveiro de Mudas de Goiaba"
                className="h-16 w-auto"
                src="/lovable-uploads/ad49dabe-36f5-4b5c-8b64-07192fbf8f45.webp"
                loading="lazy"
                decoding="async"
                width={150}
                height={64}
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-5 h-5 text-primary" />
              <span>Petrolina, Pernambuco, Brasil</span>
            </div>

            <p className="text-lg text-foreground leading-relaxed">
              A <strong>São Francisco Mudas</strong> é um <strong>viveiro de mudas </strong> com mais de 30 anos de atuação sob liderança de Haroldo de Carvalho Neves. Somos especialistas no cultivo, propagação e <strong>venda de mudas de goiaba</strong> de alto rendimento para fruticultores de todo o Brasil.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Nosso carro-chefe é a <strong>muda de goiaba Paluma enxertada no BRS Guaraçá</strong> e a <strong>muda de goiaba tailandesa enxertada no BRS Guaraçá</strong>. Essa combinação proporciona 100% de resistência ao nematoide das galhas (<em>Meloidogyne enterolobii</em>), salvando pomares de goiaba em diversas regiões do país.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Se você busca <strong>comprar muda de goiaba enxertada</strong> com garantia de origem, registro fitossanitário e excelente preço por lote, nossa estrutura está pronta para atender seu projeto agrícola.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <div className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-lg">
                <Users className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Material Original EMBRAPA</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-lg">
                <Award className="w-5 h-5 text-gold" />
                <span className="text-sm font-medium">Parceiro EMBRAPA</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-lg">
                <Target className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium">Controle de Qualidade</span>
              </div>
            </div>

            {/* YouTube Channel */}
            <div className="pt-2">
              <a
                href="https://youtu.be/P0pzQaxEgAo?si=c0b0dAa8kkEAsX8r"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-5 py-3 bg-red-600 hover:bg-red-700 text-white rounded-xl font-medium transition-colors shadow-md"
              >
                <Youtube className="w-6 h-6" />
                <span>Conheça Nosso Viveiro no YouTube</span>
              </a>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-card rounded-xl p-6 text-center shadow-soft border border-border/50 card-hover">
              <p className="font-heading text-3xl md:text-4xl font-bold text-primary mb-1">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;