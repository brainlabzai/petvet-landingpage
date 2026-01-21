import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import Team from "@/components/Team";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <div className="bg-cream">
      <Navbar />
      <Hero />
      <Services />
      <Benefits />
      <Testimonials />
      <Team />
      <Pricing />
      <FAQ />
      <ContactForm />
      <Footer />
    </div>
  );
}
