import { Button } from '@/components/ui/button';
import { MapPin, Clock, Navigation } from 'lucide-react';

const Location = () => {
  const schedules = [
    { day: 'Segunda a Sexta', hours: '8h às 20h' },
    { day: 'Sábados', hours: '8h às 18h' },
    { day: 'Domingos e Feriados', hours: '9h às 14h' },
    { day: 'Emergência', hours: '24 horas' },
  ];

  return (
    <section id="localizacao" className="py-20 bg-muted/50">
      <div className="container mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nossa Localização
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Estamos no coração de Moema, com fácil acesso e estacionamento próprio
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-card h-[400px] bg-muted">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.5847657089366!2d-46.66389368502258!3d-23.59445198467051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5a2b2ed7f3a1%3A0xab35da2f4b0fa29d!2sMoema%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1635789123456!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização VetCare Moema"
            />
          </div>

          {/* Info */}
          <div className="bg-card rounded-2xl p-8 shadow-card">
            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">Endereço</h3>
                  <p className="text-muted-foreground">
                    Av. Moema, 1000 - Moema<br />
                    São Paulo - SP, 04077-000
                  </p>
                </div>
              </div>

              {/* Schedule */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-foreground mb-3">Horários de Atendimento</h3>
                  <div className="space-y-2">
                    {schedules.map((schedule, index) => (
                      <div key={index} className="flex justify-between text-sm">
                        <span className="text-muted-foreground">{schedule.day}</span>
                        <span className={`font-medium ${schedule.day === 'Emergência' ? 'text-primary' : 'text-foreground'}`}>
                          {schedule.hours}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* CTA */}
              <Button variant="hero" size="lg" className="w-full mt-4">
                <Navigation className="w-5 h-5" />
                Como Chegar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
