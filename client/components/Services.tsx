import { Stethoscope, Syringe, Scissors, HeartPulse, FlaskConical, Bath } from "lucide-react";

const services = [
  {
    icon: Stethoscope,
    title: "Consultas Veterinárias",
    description:
      "Atendimento clínico completo para cães, gatos e animais exóticos com veterinários especializados.",
    color: "coral",
    shadowColor: "shadow-neo-coral-md",
  },
  {
    icon: Syringe,
    title: "Vacinas e Vermífugos",
    description:
      "Protocolo de vacinação completo e prevenção de parasitas para manter seu pet protegido.",
    color: "purple",
    shadowColor: "shadow-neo-purple-md",
  },
  {
    icon: HeartPulse,
    title: "Cirurgias",
    description:
      "Centro cirúrgico moderno para procedimentos eletivos e de emergência com anestesia segura.",
    color: "blue",
    shadowColor: "shadow-neo-blue-md",
  },
  {
    icon: FlaskConical,
    title: "Exames Laboratoriais",
    description:
      "Laboratório próprio com resultados rápidos: hemograma, bioquímico, urinálise e mais.",
    color: "coral",
    shadowColor: "shadow-neo-coral-md",
  },
  {
    icon: Scissors,
    title: "Internação 24h",
    description:
      "UTI veterinária com monitoramento contínuo e cuidados intensivos para casos críticos.",
    color: "purple",
    shadowColor: "shadow-neo-purple-md",
  },
  {
    icon: Bath,
    title: "Banho e Tosa",
    description:
      "Serviços de estética pet com produtos premium e profissionais qualificados.",
    color: "blue",
    shadowColor: "shadow-neo-blue-md",
  },
];

const colorMap = {
  coral: "bg-coral text-white",
  purple: "bg-purple text-white",
  blue: "bg-blue-500 text-white",
};

export default function Services() {
  return (
    <section id="services" className="bg-white py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-title font-bold text-3xl md:text-4xl lg:text-5xl text-dark-text mb-4">
            Serviços Veterinários em Moema
          </h2>
          <p className="font-body text-lg text-dark-text opacity-70 max-w-2xl mx-auto">
            Estrutura completa para cuidar da saúde do seu pet com excelência e carinho.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className={`bg-white border-2 border-dark-text rounded-card p-8 flex flex-col items-center text-center group hover:shadow-neo-lg hover:translate-x-1 hover:translate-y-1 transition-all ${service.shadowColor}`}
              >
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 border-2 border-dark-text ${colorMap[service.color as keyof typeof colorMap]}`}
                >
                  <IconComponent className="w-8 h-8" />
                </div>
                <h3 className="font-title font-bold text-xl text-dark-text mb-3">
                  {service.title}
                </h3>
                <p className="font-body text-dark-text opacity-70">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}