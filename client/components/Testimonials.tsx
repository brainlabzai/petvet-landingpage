import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Mariana Silva",
    role: "Tutora do Thor",
    text: "A PetVet salvou a vida do meu cachorro! Atendimento de emergência impecável, equipe super atenciosa e o Thor se recuperou rapidamente. Recomendo demais!",
    avatar: "MS",
    rating: 5,
  },
  {
    name: "Ricardo Santos",
    role: "Tutor da Luna",
    text: "Melhor clínica veterinária de Moema! A Luna faz acompanhamento aqui desde filhote. Veterinários competentes e ambiente muito acolhedor.",
    avatar: "RS",
    rating: 5,
  },
  {
    name: "Fernanda Costa",
    role: "Tutora do Mia e Bob",
    text: "Tenho dois pets e confio totalmente na PetVet. O atendimento 24h é um diferencial enorme, especialmente para emergências. Equipe nota 10!",
    avatar: "FC",
    rating: 5,
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  const testimonial = testimonials[current];

  return (
    <section id="testimonials" className="bg-cream py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-title font-bold text-3xl md:text-4xl lg:text-5xl text-dark-text mb-4">
            O que nossos clientes dizem
          </h2>
        </div>

        <div className="bg-coral rounded-card border-2 border-dark-text p-8 md:p-12 shadow-neo-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Left Arrow */}
            <button
              onClick={prev}
              className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-white border-2 border-dark-text hover:bg-gray-100 transition-colors"
              aria-label="Depoimento anterior"
            >
              <ChevronLeft className="w-6 h-6 text-dark-text" />
            </button>

            {/* Testimonial Content */}
            <div className="text-white text-center space-y-6">
              {/* Avatar */}
              <div className="flex justify-center">
                <div className="w-20 h-20 rounded-full bg-white border-4 border-dark-text flex items-center justify-center">
                  <span className="font-title font-bold text-xl text-coral">
                    {testimonial.avatar}
                  </span>
                </div>
              </div>

              {/* Rating */}
              <div className="flex justify-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-300 text-yellow-300"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-lg md:text-xl font-body italic leading-relaxed">
                "{testimonial.text}"
              </blockquote>

              {/* Name and Role */}
              <div>
                <p className="font-title font-bold text-lg">
                  {testimonial.name}
                </p>
                <p className="font-body opacity-80">{testimonial.role}</p>
              </div>
            </div>

            {/* Right Arrow */}
            <button
              onClick={next}
              className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-white border-2 border-dark-text hover:bg-gray-100 transition-colors"
              aria-label="Próximo depoimento"
            >
              <ChevronRight className="w-6 h-6 text-dark-text" />
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className="flex md:hidden justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-white border-2 border-dark-text hover:bg-gray-100 transition-colors"
              aria-label="Depoimento anterior"
            >
              <ChevronLeft className="w-5 h-5 text-dark-text" />
            </button>
            <button
              onClick={next}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-white border-2 border-dark-text hover:bg-gray-100 transition-colors"
              aria-label="Próximo depoimento"
            >
              <ChevronRight className="w-5 h-5 text-dark-text" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8 md:mt-0">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === current ? "bg-white w-8" : "bg-white opacity-50"
                }`}
                aria-label={`Ir para depoimento ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}