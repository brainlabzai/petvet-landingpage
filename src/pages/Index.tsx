import Header from '@/components/Header';
import Hero from '@/components/Hero';
import WhenToSeek from '@/components/WhenToSeek';
import Services from '@/components/Services';
import Differentials from '@/components/Differentials';
import Testimonials from '@/components/Testimonials';
import Location from '@/components/Location';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <WhenToSeek />
      <Services />
      <Differentials />
      <Testimonials />
      <Location />
      <FinalCTA />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
