import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How often can I visit my pet?",
    answer:
      "You can visit your pet anytime during our business hours. We also provide daily updates through our app and photos to keep you connected.",
  },
  {
    question: "What is your emergency procedure?",
    answer:
      "We have 24/7 emergency support. In case of any health concerns, we immediately contact our veterinary partners and keep you informed every step of the way.",
  },
  {
    question: "Do you offer customized nutrition plans?",
    answer:
      "Yes! Our nutrition experts create personalized meal plans based on your pet's age, weight, health conditions, and preferences.",
  },
  {
    question: "Are your facilities safe and clean?",
    answer:
      "Absolutely. We maintain the highest hygiene standards and security protocols. Our facilities are regularly inspected and exceed all safety requirements.",
  },
  {
    question: "Can you handle pets with special needs?",
    answer:
      "Yes, we specialize in caring for pets with special medical needs, behavioral issues, and elderly pets. We have certified trainers and veterinary specialists on staff.",
  },
  {
    question: "How do I get started?",
    answer:
      "Simply fill out our contact form or call us. We'll schedule a consultation to discuss your pet's needs and find the perfect plan for them.",
  },
];

export default function FAQ() {
  return (
    <section className="bg-white py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-title font-bold text-3xl md:text-4xl lg:text-5xl text-dark-text mb-4">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column - Image Placeholder */}
          <div className="hidden md:flex items-center justify-center relative h-96">
            <div className="w-80 h-80 bg-yellow-300 rounded-full border-4 border-dark-text shadow-neo-lg flex items-center justify-center">
              <div className="text-center">
                <div className="text-sm font-body text-dark-text opacity-60">
                  FAQ Image Placeholder
                </div>
              </div>
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
