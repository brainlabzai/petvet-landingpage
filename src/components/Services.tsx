import { Button } from '@/components/ui/button';
import { 
  Stethoscope, 
  Syringe, 
  Scissors, 
  Building2, 
  TestTube, 
  Sparkles,
  ArrowRight 
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Stethoscope,
      title: 'Consultas',
      description: 'Atendimento com veterinários especializados para cuidar da saúde do seu pet.',
    },
    {
      icon: Syringe,
      title: 'Vacinas',
      description: 'Calendário completo de vacinação para cães e gatos de todas as idades.',
    },
    {
      icon: Scissors,
      title: 'Cirurgias',
      description: 'Centro cirúrgico moderno com equipamentos de última geração.',
    },
    {
      icon: Building2,
      title: 'Internação',
      description: 'Estrutura completa para internação com monitoramento 24 horas.',
    },
    {
      icon: TestTube,
      title: 'Exames Laboratoriais',
      description: 'Laboratório próprio com resultados rápidos e precisos.',
    },
    {
      icon: Sparkles,
      title: 'Banho e Tosa',
      description: 'Serviço de estética pet com profissionais carinhosos.',
    },
  ];

  return (
    <section id="servicos" className="py-20 bg-muted/50">
      <div className="container mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nossos Serviços
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Oferecemos uma linha completa de serviços veterinários para garantir o bem-estar do seu pet
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <Button variant="link" className="p-0 h-auto text-primary font-medium group/btn">
                    Saber mais
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
