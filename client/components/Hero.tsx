import { Phone, ArrowRight } from "lucide-react";
import cachorroEGato from "@/assets/cachorro-e-gato.png";
export default function Hero() {
  return <section className="bg-cream py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div>
              <h1 className="font-title font-bold text-4xl md:text-5xl lg:text-6xl text-dark-text leading-tight mb-4">
                Clínica Veterinária 24h em Moema, São Paulo
              </h1>
              <p className="font-body text-lg text-dark-text opacity-80 leading-relaxed">
                Cuidado completo para seu pet com amor e expertise. Consultas, 
                vacinas, exames, cirurgias e atendimento de emergência 24 horas. 
                Sua clínica veterinária de confiança em Moema.
              </p>
            </div>

            {/* Phone Link */}
            <a href="tel:+5511999999999" className="inline-flex items-center gap-3 font-body text-coral hover:text-dark-text transition-colors group">
              <div className="w-10 h-10 bg-coral text-white rounded-full flex items-center justify-center border-2 border-dark-text shadow-neo-sm group-hover:shadow-neo-md transition-all">
                <Phone className="w-5 h-5" />
              </div>
              <span className="font-semibold">(11) 99999-9090</span>
            </a>

            {/* CTA Button - extra spacing from phone */}
            <div className="pt-4">
              <a href="#services" className="inline-flex items-center gap-2 font-title font-bold px-8 py-4 bg-coral text-white border-2 border-dark-text rounded-btn shadow-neo-md hover:shadow-neo-lg hover:translate-x-1 hover:translate-y-1 transition-all group">
                Nossos Serviços
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative h-96 md:h-full min-h-96">
            {/* Yellow circular background */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-80 h-80 md:w-96 md:h-96 bg-yellow-300 rounded-full border-4 border-dark-text shadow-neo-lg overflow-hidden">
                <img src={cachorroEGato} alt="Cachorro e gato felizes na clínica veterinária PetVet Moema" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
}