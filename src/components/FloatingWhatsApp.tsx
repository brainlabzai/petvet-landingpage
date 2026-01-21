import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';

const FloatingWhatsApp = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fade-in">
      <Button 
        variant="whatsapp" 
        size="lg"
        className="rounded-full shadow-lg hover:shadow-xl animate-pulse-soft"
      >
        <MessageCircle className="w-5 h-5" />
        <span className="hidden sm:inline">Agendar Agora</span>
      </Button>
    </div>
  );
};

export default FloatingWhatsApp;
