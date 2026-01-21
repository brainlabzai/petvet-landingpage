import { Instagram, Linkedin } from "lucide-react";

const teamMembers = [
  {
    name: "Dra. Marina Costa",
    role: "Diretora Clínica",
    initials: "MC",
    color: "bg-coral",
    shadowColor: "shadow-neo-coral-md",
  },
  {
    name: "Dr. Paulo Henrique",
    role: "Cirurgião Veterinário",
    initials: "PH",
    color: "bg-purple",
    shadowColor: "shadow-neo-purple-md",
  },
  {
    name: "Dra. Juliana Reis",
    role: "Dermatologista Veterinária",
    initials: "JR",
    color: "bg-blue-500",
    shadowColor: "shadow-neo-blue-md",
  },
  {
    name: "Carlos Eduardo",
    role: "Groomer Especialista",
    initials: "CE",
    color: "bg-coral",
    shadowColor: "shadow-neo-coral-md",
  },
];

export default function Team() {
  return (
    <section id="team" className="bg-white py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-title font-bold text-3xl md:text-4xl lg:text-5xl text-dark-text mb-4">
            Conheça nossa equipe
          </h2>
          <p className="font-body text-lg text-dark-text opacity-70 max-w-2xl mx-auto">
            Profissionais experientes e apaixonados por animais, dedicados à 
            saúde e bem-estar do seu pet.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {teamMembers.map((member, index) => (
            <article
              key={index}
              className={`bg-white border-2 border-dark-text rounded-card p-6 flex flex-col items-center text-center ${member.shadowColor} hover:shadow-neo-lg hover:translate-x-1 hover:translate-y-1 transition-all`}
            >
              {/* Avatar */}
              <div
                className={`w-24 h-24 ${member.color} rounded-full border-4 border-dark-text flex items-center justify-center mb-4`}
              >
                <span className="font-title font-bold text-2xl text-white">
                  {member.initials}
                </span>
              </div>

              {/* Name and Role */}
              <h3 className="font-title font-bold text-lg text-dark-text mb-1">
                {member.name}
              </h3>
              <p className="font-body text-sm text-dark-text opacity-70 mb-6">
                {member.role}
              </p>

              {/* Social Links */}
              <div className="flex gap-3">
                <a
                  href="#"
                  className="p-2 rounded-full bg-gray-100 hover:bg-coral hover:text-white border-2 border-dark-text transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="p-2 rounded-full bg-gray-100 hover:bg-coral hover:text-white border-2 border-dark-text transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
