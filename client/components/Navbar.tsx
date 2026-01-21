import { useState } from "react";
import { Menu, X } from "lucide-react";
import logoPetvet from "@/assets/logo-petvet.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Serviços", href: "#services" },
    { label: "Diferenciais", href: "#features" },
    { label: "Depoimentos", href: "#testimonials" },
    { label: "Equipe", href: "#team" },
    { label: "Planos", href: "#pricing" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-cream border-b-2 border-dark-text">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <img 
              src={logoPetvet} 
              alt="Logo PetVet - Clínica Veterinária em Moema" 
              className="w-10 h-10 object-contain"
            />
            <span className="font-title font-bold text-2xl text-dark-text">
              PetVet
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-body text-dark-text hover:text-coral transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="inline-flex items-center justify-center font-title font-semibold px-6 py-3 bg-coral text-white border-2 border-dark-text rounded-btn shadow-neo-sm hover:shadow-neo-md hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
            >
              Agendar Consulta
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Abrir menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-dark-text" />
            ) : (
              <Menu className="w-6 h-6 text-dark-text" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t-2 border-dark-text">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block py-2 font-body text-dark-text hover:text-coral transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-4 block w-full text-center font-title font-semibold px-6 py-3 bg-coral text-white border-2 border-dark-text rounded-btn shadow-neo-sm transition-all"
              onClick={() => setIsOpen(false)}
            >
              Agendar Consulta
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}