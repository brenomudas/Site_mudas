import { Phone, MessageCircle, Mail, Clock } from "lucide-react";
import { WhatsAppButton, PhoneDisplay } from "./WhatsAppButton";

const SupportSection = () => {
  return (
    <section className="section-padding bg-secondary" id="suporte">
      <div className="container-landing">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                Estamos Aqui Para{" "}
                <span className="text-primary">Ajudar Você</span>
              </h2>
              <p className="text-muted-foreground">
                Nosso compromisso não termina na venda. Oferecemos suporte técnico completo 
                para garantir o sucesso do seu pomar, desde o plantio até a primeira colheita.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-card rounded-xl shadow-soft">
                <div className="w-12 h-12 rounded-full bg-whatsapp/10 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-6 h-6 text-whatsapp" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">WhatsApp Direto</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Atendimento rápido e personalizado para tirar suas dúvidas
                  </p>
                  <WhatsAppButton size="sm" variant="whatsapp-outline">
                    (87) 99649-4036
                  </WhatsAppButton>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-card rounded-xl shadow-soft">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Ligações Telefônicas</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Para conversas mais detalhadas sobre seu projeto
                  </p>
                  <PhoneDisplay className="text-primary font-semibold" />
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-card rounded-xl shadow-soft">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Horário de Atendimento</h3>
                  <p className="text-sm text-muted-foreground">
                    Segunda a Sexta: 8h às 18h<br />
                    Sábado: 8h às 14h
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Support info card */}
          <div className="bg-gradient-to-br from-primary to-accent rounded-2xl p-8 text-white">
            <h3 className="font-heading text-2xl font-bold mb-6">
              O Que Você Recebe de Suporte
            </h3>
            <ul className="space-y-4">
              {[
                "Orientações para preparo do solo e covas",
                "Dicas de irrigação inicial",
                "Informações sobre espaçamento ideal",
                "Orientação das podas de formação",
                "Esclarecimento de dúvidas técnicas",
                "Indicações de manejo fitossanitário"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-sm">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-8 pt-6 border-t border-white/20">
              <p className="text-white/80 text-sm mb-4">
                Pronto para começar seu projeto?
              </p>
              <WhatsAppButton 
                variant="whatsapp"
                size="lg"
                className="justify-center mr-auto"
                message="Olá! Gostaria de receber orientações técnicas sobre o plantio das mudas."
              >
                Falar com Nossa Equipe
              </WhatsAppButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
