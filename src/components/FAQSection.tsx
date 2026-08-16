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
      question: "Por que a muda de goiaba enxertada no araçá / BRS Guaraçá é essencial?",
      answer: "A muda de goiaba enxertada no porta-enxerto BRS Guaraçá (híbrido de araçazeiro desenvolvido pela EMBRAPA) é a única forma comprovada de proteger seu pomar contra o nematoide das galhas (Meloidogyne enterolobii). Ela combina a imunidade radicular do araçá com a altíssima produtividade das copas Paluma e Tailandesa."
    },
    {
      question: "Qual a diferença entre a muda de goiaba Paluma e a muda de goiaba Tailandesa enxertada?",
      answer: "A muda de goiaba Paluma enxertada no araçá produz frutos de tamanho médio a grande com polpa vermelha intensa, sendo a mais plantada para a indústria e mercado in natura. Já a muda de goiaba tailandesa enxertada gera frutos gigantes (de 500g a 1kg) com polpa crocante, ideais para hortifrútis e feiras de alto valor agregado."
    },
    {
      question: "Como consultar o preço da muda de goiaba e comprar direto do viveiro?",
      answer: "Para solicitar a tabela de preços e comprar muda de goiaba enxertada, basta clicar nos botões de WhatsApp do site. Nosso viveiro de mudas de goiaba oferece condições especiais para lotes comerciais e entregas agendadas."
    },
    {
      question: "Qual a vantagem de comprar muda de goiaba enxertada em relação ao pé-franco?",
      answer: "A muda de pé-franco (produzida por estaquia) é suscetível ao nematoide e pode morrer em poucos anos se o solo estiver contaminado. A muda de goiabeira enxertada no araçá BRS Guaraçá une a força produtiva da copa com a resistência do porta-enxerto, garantindo a longevidade do pomar por mais de 15 a 20 anos."
    },
    {
      question: "As mudas de goiaba chegam prontas para plantio?",
      answer: "Sim! As mudas de goiaba Paluma e Tailandesa enxertadas saem do viveiro São Francisco com aproximadamente 120 dias pós-enxertia, medindo entre 30 e 40 cm de altura, com sistema radicular perfeitamente formado e aclimatadas para plantio imediato."
    },
    {
      question: "Como é feita a entrega da venda de mudas de goiaba para todo o Brasil?",
      answer: "Trabalhamos com logística especializada no transporte de mudas frutíferas. As cargas são acondicionadas para garantir zero danos durante o trajeto até a sua propriedade rural ou fazenda."
    },
    {
      question: "Em quanto tempo a muda de goiaba enxertada começa a produzir?",
      answer: "Com manejo adequado e irrigação correta, a muda de goiaba enxertada no BRS Guaraçá começa a produzir seus primeiros frutos comerciais a partir do 12º mês pós-plantio."
    }
  ];

  return (
    <section className="section-padding bg-secondary" id="faq">
      <div className="container-landing">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Dúvidas Frequentes sobre <span className="text-primary">Mudas de Goiaba</span>
            </h2>
            <p className="text-muted-foreground">
              Respostas claras sobre como comprar muda de goiaba enxertada, vantagens do porta-enxerto BRS Guaraçá / Araçá e entrega.
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
                <AccordionTrigger className="text-left font-semibold hover:no-underline py-5 text-foreground">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* CTA */}
          <div className="text-center mt-10">
            <p className="text-muted-foreground mb-4">
              Quer saber o <strong>preço da muda de goiaba</strong> para seu projeto ou tirar dúvidas técnicas?
            </p>
            <WhatsAppButton 
              size="lg"
              message="Olá! Vim pelo site e gostaria de consultar a disponibilidade e preço das mudas de goiaba enxertadas."
            >
              Consultar Preço no WhatsApp
            </WhatsAppButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
