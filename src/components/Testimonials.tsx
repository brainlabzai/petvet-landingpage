import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Maria Silva',
      pet: 'Luna (Golden Retriever)',
      text: 'Atendimento excepcional! A equipe cuidou da Luna com muito carinho durante a cirurgia. Super recomendo!',
      rating: 5,
    },
    {
      name: 'Carlos Santos',
      pet: 'Thor (Labrador)',
      text: 'Melhor clínica veterinária de Moema. Profissionais competentes e estrutura impecável.',
      rating: 5,
    },
    {
      name: 'Ana Oliveira',
      pet: 'Mimi (Persa)',
      text: 'A Mimi sempre fica super tranquila aqui. Os veterinários são muito atenciosos e pacientes.',
      rating: 5,
    },
    {
      name: 'Roberto Costa',
      pet: 'Bob (Bulldog)',
      text: 'Emergência 24h salvou a vida do meu Bob. Eternamente grato à equipe da VetCare!',
      rating: 5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            O Que Dizem Nossos Clientes
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A satisfação dos tutores e o bem-estar dos pets são nossa maior recompensa
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main testimonial */}
          <div className="relative bg-card rounded-3xl p-8 md:p-12 shadow-card">
            <Quote className="w-12 h-12 text-primary/20 absolute top-8 left-8" />
            
            <div className="text-center">
              {/* Avatar */}
              <div className="w-20 h-20 bg-primary/10 rounded-full mx-auto mb-6 flex items-center justify-center text-3xl">
                🐕
              </div>

              {/* Rating */}
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>

              {/* Text */}
              <blockquote className="text-lg md:text-xl text-foreground leading-relaxed mb-6 max-w-2xl mx-auto">
                "{testimonials[currentIndex].text}"
              </blockquote>

              {/* Author */}
              <div>
                <p className="font-bold text-foreground">{testimonials[currentIndex].name}</p>
                <p className="text-sm text-muted-foreground">{testimonials[currentIndex].pet}</p>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    i === currentIndex ? 'bg-primary' : 'bg-muted'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
