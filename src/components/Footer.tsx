import { Instagram, Facebook, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { label: 'Serviços', href: '#servicos' },
    { label: 'Emergência 24h', href: '#emergencia' },
    { label: 'Localização', href: '#localizacao' },
    { label: 'Contato', href: '#contato' },
  ];

  const services = [
    'Consultas',
    'Vacinas',
    'Cirurgias',
    'Internação',
    'Exames',
    'Banho e Tosa',
  ];

  return (
    <footer className="bg-foreground text-background/80 pt-16 pb-8">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">🐾</span>
              </div>
              <span className="font-bold text-xl text-background">
                VetCare <span className="text-primary">Moema</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Cuidado veterinário completo com atendimento 24h. 
              Sua família de quatro patas em boas mãos.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-background mb-4">Links Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm hover:text-primary transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-background mb-4">Serviços</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-background mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 shrink-0 text-primary" />
                <span className="text-sm">
                  Av. Moema, 1000 - Moema<br />
                  São Paulo - SP, 04077-000
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-sm">(11) 99999-9999</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-sm">contato@vetcaremoema.com.br</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-background/10 pt-8">
          <p className="text-center text-sm text-background/60">
            © {new Date().getFullYear()} VetCare Moema. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
