import { Button } from '@/components/ui/button';
import { MessageCircle, ArrowRight, Clock } from 'lucide-react';
import heroImage from '@/assets/hero-vet.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-hero-gradient pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-fade-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Clock className="w-4 h-4" />
              Atendimento 24 horas
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Cuidado Veterinário Completo em{' '}
              <span className="text-primary">Moema</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
              Clínica com estrutura completa para consultas, exames, cirurgias e emergências. 
              Sua família de quatro patas merece o melhor cuidado.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="whatsapp" size="xl" className="group">
                <MessageCircle className="w-5 h-5" />
                Agendar pelo WhatsApp
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="heroOutline" size="xl">
                Ver Serviços
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center gap-6 mt-10 justify-center lg:justify-start">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-muted border-2 border-background flex items-center justify-center text-xs"
                    >
                      🐕
                    </div>
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  <strong className="text-foreground">+2.500</strong> pets atendidos
                </span>
              </div>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
                <span className="text-sm text-muted-foreground ml-1">4.9 no Google</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={heroImage}
                alt="Veterinária atendendo golden retriever com carinho em clínica moderna"
                className="w-full h-auto object-cover"
              />
              {/* Floating Badge */}
              <div className="absolute top-6 right-6 bg-background/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">24h</p>
                    <p className="text-xs text-muted-foreground">Emergência</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
