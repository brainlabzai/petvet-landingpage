import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import cachorroDuvida from "@/assets/cachorro-duvida.jpg";

const faqs = [
  {
    question: "A PetVet atende emergências 24 horas?",
    answer:
      "Sim! Nossa clínica veterinária em Moema funciona 24 horas por dia, 7 dias por semana, incluindo feriados. Estamos sempre prontos para atender emergências.",
  },
  {
    question: "Quais formas de pagamento são aceitas?",
    answer:
      "Aceitamos cartões de crédito e débito, PIX, transferência bancária e dinheiro. Também oferecemos parcelamento em até 12x para procedimentos mais complexos.",
  },
  {
    question: "Preciso agendar consulta ou posso ir direto?",
    answer:
      "Recomendamos o agendamento para consultas de rotina, garantindo seu horário. Para emergências, atendemos por ordem de chegada e prioridade clínica.",
  },
  {
    question: "A clínica atende animais exóticos?",
    answer:
      "Sim! Além de cães e gatos, atendemos coelhos, hamsters, aves e outros animais de estimação. Consulte nossa equipe sobre espécies específicas.",
  },
  {
    question: "Como funciona a internação?",
    answer:
      "Nossa internação conta com monitoramento 24h, UTI veterinária e equipe especializada. Enviamos atualizações diárias sobre o estado do pet e você pode visitar em horários determinados.",
  },
  {
    question: "Vocês oferecem planos de saúde pet?",
    answer:
      "Sim! Temos planos mensais que incluem consultas, vacinas, exames e descontos em procedimentos. Confira nossa seção de planos para mais detalhes.",
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
                src={cachorroDuvida} 
                alt="Cachorro curioso esperando resposta sobre serviços veterinários PetVet" 
                className="w-full h-full object-cover"
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
                  <AccordionTrigger className="px-6 py-4 hover:bg-cream font-title font-bold text-dark-text hover:text-coral transition-colors [&[data-state=open]]:bg-cream">
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