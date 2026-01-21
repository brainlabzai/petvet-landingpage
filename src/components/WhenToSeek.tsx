import { Stethoscope, Syringe, AlertTriangle } from 'lucide-react';

const WhenToSeek = () => {
  const reasons = [
    {
      icon: Stethoscope,
      title: 'Consultas de Rotina e Vacinas',
      description: 'Check-ups preventivos, vacinas em dia e acompanhamento da saúde do seu pet.',
    },
    {
      icon: Syringe,
      title: 'Exames e Diagnósticos',
      description: 'Laboratório próprio com resultados rápidos para identificar problemas de saúde.',
    },
    {
      icon: AlertTriangle,
      title: 'Emergências e Cirurgias',
      description: 'Atendimento 24h para urgências com centro cirúrgico completo.',
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Quando Procurar um Veterinário?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Identificar os sinais e manter a prevenção em dia é essencial para a saúde do seu pet
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <reason.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {reason.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhenToSeek;
