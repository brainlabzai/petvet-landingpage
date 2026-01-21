import { Check } from "lucide-react";
import womanDog from "@/assets/woman-dog.png";

const benefits = [
  "Equipe de veterinários especializados e certificados",
  "Atendimento humanizado e acolhedor",
  "Estrutura completa com equipamentos modernos",
  "Emergência veterinária 24 horas",
  "Laboratório próprio com resultados rápidos",
  "Localização privilegiada em Moema",
];

export default function Benefits() {
  return (
    <section id="features" className="bg-cream py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Image */}
          <div className="relative h-96 md:h-full min-h-96 flex items-center justify-center order-2 md:order-1">
            <div className="w-80 h-80 md:w-96 md:h-96 bg-coral rounded-full border-4 border-dark-text shadow-neo-lg overflow-hidden">
              <img 
                src={womanDog} 
                alt="Tutora com seu cachorro no colo demonstrando carinho" 
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          {/* Right Column - Benefits List */}
          <div className="space-y-8 order-1 md:order-2">
            <div>
              <h2 className="font-title font-bold text-3xl md:text-4xl lg:text-5xl text-dark-text mb-4">
                Por que escolher a PetVet?
              </h2>
              <p className="font-body text-lg text-dark-text opacity-70">
                Oferecemos o melhor cuidado veterinário em Moema com estrutura 
                completa e atendimento humanizado.
              </p>
            </div>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple border-2 border-dark-text flex items-center justify-center mt-1">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <p className="font-body text-lg text-dark-text">{benefit}</p>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex font-title font-bold px-8 py-3 bg-purple text-white border-2 border-dark-text rounded-btn shadow-neo-md hover:shadow-neo-lg hover:translate-x-1 hover:translate-y-1 transition-all"
            >
              Saiba mais
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
