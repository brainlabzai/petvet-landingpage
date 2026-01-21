import { Users, Building, Heart, Clock } from 'lucide-react';

const Differentials = () => {
  const differentials = [
    {
      icon: Users,
      title: 'Equipe Especializada',
      description: 'Veterinários com anos de experiência e especializações diversas.',
    },
    {
      icon: Building,
      title: 'Estrutura Completa',
      description: 'Clínica equipada com tecnologia de ponta para diagnósticos precisos.',
    },
    {
      icon: Heart,
      title: 'Atendimento Humanizado',
      description: 'Tratamos seu pet com o carinho e atenção que ele merece.',
    },
    {
      icon: Clock,
      title: 'Emergência 24h',
      description: 'Pronto atendimento disponível todos os dias, a qualquer hora.',
    },
  ];

  return (
    <section id="emergencia" className="py-20 bg-secondary">
      <div className="container mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Por Que Escolher a VetCare?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Compromisso com a excelência no cuidado veterinário há mais de 10 anos
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {differentials.map((item, index) => (
            <div
              key={index}
              className="text-center p-6"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
                <item.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentials;
