import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { WhatsAppButton } from "./WhatsAppButton";

const FAQSection = () => {
  const faqs = [
    {
      question: "O que é o porta-enxerto BRS Guaraçá?",
      answer: "O BRS Guaraçá é um porta-enxerto híbrido desenvolvida pela EMBRAPA. Sua principal característica é a resistência ao nematoide das galhas (Meloidogyne enterolobii), que dizima pomares de goiaba convencionais em todo o Brasil."
    },
    {
      question: "Qual a diferença entre muda enxertada e muda de pé-franco?",
      answer: "A muda de pé-franco é produzida a partir de estaquia (copa da paluma) e não possui resistência a nematoides. A muda enxertada une as características produtivas da copa (Paluma) com a resistência do porta-enxerto (BRS Guaraçá), oferecendo o melhor dos dois mundos: alta produtividade com proteção contra a principal praga."
    },
    {
      question: "As mudas já estão prontas para plantio no campo?",
      answer: "Sim! Nossas mudas são comercializadas com 120 dias após a enxertia, medindo entre 30 a 40 cm de altura. Elas possuem sistema radicular bem desenvolvido e estão totalmente aptas para o plantio definitivo no campo."
    },
    {
      question: "Qual o espaçamento recomendado para o plantio?",
      answer: "O espaçamento mais utilizado para a goiabeira Paluma é de 6m x 4m (416 plantas/ha). Porém, o espaçamento ideal pode variar conforme o sistema de condução e o nível tecnológico adotado. Nossa equipe pode orientar sobre a melhor opção para seu caso."
    },
    {
      question: "Em quanto tempo as plantas começam a produzir?",
      answer: "Com manejo adequado, as goiabeiras Paluma enxertadas no BRS Guaraçá iniciam a produção comercial com 12 meses após o plantio. A produção plena é alcançada a partir do terceiro ano."
    },
    {
      question: "Vocês entregam para todo o Brasil?",
      answer: "Sim! Realizamos entregas para todos os estados brasileiros. As mudas são embaladas em caixas especiais que garantem a integridade durante o transporte. O frete é calculado conforme a quantidade e o destino."
    },
    {
      question: "Qual a quantidade mínima para pedido?",
      answer: "Para garantir a viabilidade logística e oferecer as melhores condições, trabalhamos com pedido mínimo. Entre em contato pelo WhatsApp para verificar a quantidade mínima e condições especiais para volumes maiores."
    },
    {
      question: "As mudas vêm com alguma garantia?",
      answer: "Garantimos a procedência e a qualidade fitossanitária de todas as nossas mudas. Trabalhamos com material genético original EMBRAPA e fornecemos orientações completas de plantio. As mudas acompanham nota fiscal e termo de conformidade."
    }
  ];

  return (
    <section className="section-padding bg-secondary" id="faq">
      <div className="container-landing">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Perguntas{" "}
              <span className="text-primary">Frequentes</span>
            </h2>
            <p className="text-muted-foreground">
              Tire suas dúvidas sobre nossas mudas, processo de compra e entrega.
            </p>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card rounded-xl px-6 shadow-soft border-none"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* CTA */}
          <div className="text-center mt-10">
            <p className="text-muted-foreground mb-4">
              Ainda tem dúvidas? Fale diretamente com nossa equipe!
            </p>
            <WhatsAppButton 
              size="lg"
              message="Olá! Tenho algumas dúvidas sobre as mudas de goiabeira. Podem me ajudar?"
            >
              Tirar Dúvidas pelo WhatsApp
            </WhatsAppButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
