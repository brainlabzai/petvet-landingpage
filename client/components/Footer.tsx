import {
  Facebook,
  Instagram,
  Send,
  MapPin,
  Phone,
  Clock,
} from "lucide-react";
import { useState } from "react";
import logoPetVet from "@/assets/logo-petvet.png";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter cadastro:", email);
    setEmail("");
  };

  return (
    <footer className="bg-purple text-white py-12 md:py-16 border-t-4 border-dark-text">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12">
          {/* Column 1: Logo and About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img 
                src={logoPetVet} 
                alt="PetVet Logo" 
                className="w-10 h-10 object-contain brightness-0 invert"
              />
              <span className="font-title font-bold text-2xl">PetVet</span>
            </div>
            <p className="font-body text-sm opacity-90 mb-4">
              Clínica veterinária em Moema, São Paulo. Cuidando do seu pet com amor e profissionalismo 24 horas por dia.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-title font-bold text-xl mb-6">Links Rápidos</h3>
            <ul className="space-y-3 font-body">
              <li>
                <a
                  href="#services"
                  className="hover:text-yellow-300 transition-colors"
                >
                  Serviços
                </a>
              </li>
              <li>
                <a
                  href="#team"
                  className="hover:text-yellow-300 transition-colors"
                >
                  Equipe
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="hover:text-yellow-300 transition-colors"
                >
                  Planos
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-yellow-300 transition-colors"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="font-title font-bold text-xl mb-6">Contato</h3>
            <ul className="space-y-3 font-body text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>Av. Moema, 1000<br />Moema, São Paulo - SP</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>(11) 99999-9999</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 flex-shrink-0" />
                <span>Atendimento 24 horas</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h3 className="font-title font-bold text-xl mb-6">Newsletter</h3>
            <p className="font-body text-sm opacity-90 mb-4">
              Receba dicas de cuidados e novidades sobre a PetVet.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Seu e-mail"
                className="flex-1 px-4 py-2 border-2 border-white rounded-btn font-body text-dark-text focus:outline-none focus:ring-2 focus:ring-yellow-300"
              />
              <button
                type="submit"
                className="p-2 bg-white border-2 border-white rounded-btn text-purple hover:bg-yellow-300 transition-colors flex items-center justify-center"
                aria-label="Inscrever-se"
              >
                <Send className="w-5 h-5" />
              </button>
            </form>
            
            {/* Social Icons */}
            <div className="flex gap-3 mt-6">
              <a
                href="https://www.instagram.com/petvetmoema"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white border-2 border-white rounded-full text-purple hover:bg-yellow-300 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/petvetmoema"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white border-2 border-white rounded-full text-purple hover:bg-yellow-300 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t-2 border-white border-opacity-30 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="font-body text-sm opacity-80">
              <p>© {new Date().getFullYear()} PetVet Moema. Todos os direitos reservados.</p>
            </div>
            <div className="flex gap-6 font-body text-sm">
              <a
                href="#"
                className="opacity-80 hover:opacity-100 transition-opacity"
              >
                Termos de Uso
              </a>
              <a
                href="#"
                className="opacity-80 hover:opacity-100 transition-opacity"
              >
                Privacidade
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
