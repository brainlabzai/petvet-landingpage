import { Button } from '@/components/ui/button';
import { MessageCircle, Phone } from 'lucide-react';

const FinalCTA = () => {
  return (
    <section id="contato" className="py-20 bg-cta-gradient">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
          Agende a Consulta do Seu Pet Agora
        </h2>
        <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8">
          Nossa equipe está pronta para cuidar do seu melhor amigo com todo carinho e profissionalismo
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="cta" size="xl" className="group">
            <MessageCircle className="w-5 h-5" />
            Falar no WhatsApp
          </Button>
          <a 
            href="tel:+5511999999999" 
            className="flex items-center gap-2 text-primary-foreground font-semibold text-lg hover:opacity-80 transition-opacity"
          >
            <Phone className="w-5 h-5" />
            (11) 99999-9999
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
