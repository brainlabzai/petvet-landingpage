import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import dogCatFaq from "@/assets/dog-cat-faq.png";

const faqs = [
  {
    question: "Vocês atendem emergências 24 horas?",
    answer:
      "Sim! Nossa clínica funciona 24 horas por dia, 7 dias por semana, incluindo feriados. Em caso de emergência, traga seu pet imediatamente ou ligue para (11) 99999-9999.",
  },
  {
    question: "Quais formas de pagamento são aceitas?",
    answer:
      "Aceitamos cartões de crédito e débito, PIX, dinheiro e parcelamento em até 12x. Também trabalhamos com os principais planos de saúde pet.",
  },
  {
    question: "Preciso agendar consulta ou posso ir direto?",
    answer:
      "Recomendamos agendar pelo WhatsApp para garantir atendimento mais rápido. Porém, também atendemos por ordem de chegada conforme disponibilidade.",
  },
  {
    question: "Vocês atendem animais silvestres?",
    answer:
      "Nossa especialidade são cães e gatos. Para animais silvestres ou exóticos, recomendamos clínicas especializadas para garantir o melhor atendimento.",
  },
  {
    question: "Como funciona a internação?",
    answer:
      "Nossa UTI veterinária conta com monitoramento 24 horas, equipe dedicada e acomodações confortáveis. Você receberá atualizações diárias sobre o estado do seu pet.",
  },
  {
    question: "Onde fica a clínica?",
    answer:
      "Estamos localizados na Av. Moema, 1000 - Moema, São Paulo/SP. Temos estacionamento próprio gratuito para clientes. Fácil acesso pelo metrô Moema.",
  },
];

export default function FAQ() {
  return (
    <section className="bg-white py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-title font-bold text-3xl md:text-4xl lg:text-5xl text-dark-text mb-4">
            Perguntas Frequentes
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column - Image */}
          <div className="hidden md:flex items-center justify-center relative h-96">
            <div className="w-80 h-80 bg-yellow-300 rounded-full border-4 border-dark-text shadow-neo-lg overflow-hidden">
              <img 
                src={dogCatFaq} 
                alt="Cachorro Border Collie e gato britânico juntos" 
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          {/* Right Column - Accordion */}
          <div>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-2 border-dark-text rounded-card overflow-hidden data-[state=open]:shadow-neo-md transition-all"
                >
                  <AccordionTrigger className="px-6 py-4 hover:bg-cream font-title font-bold text-dark-text hover:text-coral transition-colors [&[data-state=open]]:bg-cream text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-4 bg-white font-body text-dark-text opacity-80 border-t-2 border-dark-text">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
