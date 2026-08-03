import viveiroMudas from "@/assets/viveiro-mudas-panorama.jpg";
import logoSaoFrancisco from "@/assets/logo-sao-francisco-mudas.png";
import { MapPin, Users, Award, Target, Youtube } from "lucide-react";
const AboutSection = () => {
  const stats = [{
    value: "30+",
    label: "Anos de Experiência"
  }, {
    value: "15MM+",
    label: "Mudas Produzidas"
  }, {
    value: "7K+",
    label: "Clientes Atendidos"
  }, {
    value: "15",
    label: "Estados Alcançados"
  }];
  return <section className="section-padding" id="sobre">
      <div className="container-landing">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Conheça a{" "}
            <span className="text-primary">São Francisco Mudas</span>
          </h2>
        </div>

        {/* Main content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          {/* Image */}
          <div className="relative">
            <img alt="Viveiro São Francisco Mudas" className="w-full rounded-2xl shadow-elevated" src="/lovable-uploads/a3f2cf2e-ea07-491c-b4f0-9c7eb7197f57.jpg" />
            <div className="absolute -bottom-6 -right-6 bg-card rounded-xl shadow-card p-4">
              <img alt="São Francisco Mudas" className="h-16 w-auto" src="/lovable-uploads/ad49dabe-36f5-4b5c-8b64-07192fbf8f45.png" />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-5 h-5 text-primary" />
              <span>Petrolina, Pernambuco, Brasil</span>
            </div>

            <p className="text-lg text-foreground">
              A <strong>São Francisco Mudas</strong> nasceu da paixão pela agricultura e do compromisso com a qualidade. Somos uma empresa especializada na produção de mudas frutíferas de alta qualidade a mais de 30 anos. Contamos com a experiência do seu proprietário – Haroldo de Carvalho Neves – profissional com longa experiência no segmento.                             
            </p>

            <p className="text-muted-foreground">
              Nosso foco principal são as mudas de <strong>goiabeira Paluma enxertadas no 
              porta-enxerto BRS Guaraçá</strong>, desenvolvido pela EMBRAPA para conferir 
              resistência ao nematoide das galhas, a maior ameaça aos pomares de goiaba do Brasil.
            </p>

            <p className="text-muted-foreground">
              Trabalhamos com material genético original e certificado, garantindo que cada muda 
              entregue carregue consigo a genética de resistência que fará a diferença no seu pomar.
            </p>

            <div className="flex flex-wrap gap-4">
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
                <span className="text-sm font-medium">Foco em Qualidade</span>
              </div>
            </div>

            {/* YouTube Channel */}
            <a 
              href="https://youtu.be/P0pzQaxEgAo?si=c0b0dAa8kkEAsX8r" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-5 py-3 bg-red-600 hover:bg-red-700 text-white rounded-xl font-medium transition-colors shadow-md"
            >
              <Youtube className="w-6 h-6" />
              <span>Conheça Nosso Canal no YouTube</span>
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => <div key={index} className="bg-card rounded-xl p-6 text-center shadow-soft card-hover">
              <p className="font-heading text-3xl md:text-4xl font-bold text-primary mb-1">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>)}
        </div>
      </div>
    </section>;
};
export default AboutSection;