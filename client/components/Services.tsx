import { Scissors, Heart, Pill, Utensils, Zap, Smile } from "lucide-react";

const services = [
  {
    icon: Scissors,
    title: "Grooming",
    description:
      "Professional grooming services to keep your pet looking beautiful and healthy.",
    color: "coral",
    shadowColor: "shadow-neo-coral-md",
  },
  {
    icon: Heart,
    title: "Dog Care",
    description:
      "Comprehensive care including walking, training, and playtime for dogs.",
    color: "purple",
    shadowColor: "shadow-neo-purple-md",
  },
  {
    icon: Pill,
    title: "Health Check",
    description:
      "Regular health checkups and wellness monitoring for your beloved pets.",
    color: "blue",
    shadowColor: "shadow-neo-blue-md",
  },
  {
    icon: Utensils,
    title: "Nutrition",
    description:
      "Expert dietary guidance and specialized nutrition plans for pet wellness.",
    color: "coral",
    shadowColor: "shadow-neo-coral-md",
  },
  {
    icon: Zap,
    title: "Training",
    description:
      "Professional training programs to teach obedience and good behaviors.",
    color: "purple",
    shadowColor: "shadow-neo-purple-md",
  },
  {
    icon: Smile,
    title: "Cat Care",
    description:
      "Specialized care services designed specifically for cats and their unique needs.",
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
            Our Services
          </h2>
          <p className="font-body text-lg text-dark-text opacity-70 max-w-2xl mx-auto">
            Complete pet care solutions tailored to meet the unique needs of
            your furry companions.
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
