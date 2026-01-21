import { Check } from "lucide-react";

const benefits = [
  "Professional and certified pet caregivers",
  "24/7 monitoring and health updates",
  "Nutritious meal plans tailored to your pet",
  "Vaccination and health records management",
  "Emergency care and veterinary support",
  "Comfortable and safe facilities",
];

export default function Benefits() {
  return (
    <section id="features" className="bg-cream py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Image Placeholder */}
          <div className="relative h-96 md:h-full min-h-96 flex items-center justify-center order-2 md:order-1">
            <div className="w-80 h-80 md:w-96 md:h-96 bg-coral rounded-full border-4 border-dark-text shadow-neo-lg flex items-center justify-center">
              <div className="text-center">
                <div className="text-sm font-body text-white opacity-80">
                  Benefits Image
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Benefits List */}
          <div className="space-y-8 order-1 md:order-2">
            <div>
              <h2 className="font-title font-bold text-3xl md:text-4xl lg:text-5xl text-dark-text mb-4">
                Providing best care
              </h2>
              <p className="font-body text-lg text-dark-text opacity-70">
                We ensure your pets receive the highest quality of care and
                attention.
              </p>
            </div>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple border-2 border-dark-text flex items-center justify-center mt-1">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <p className="font-body text-lg text-dark-text">{benefit}</p>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex font-title font-bold px-8 py-3 bg-purple text-white border-2 border-dark-text rounded-btn shadow-neo-md hover:shadow-neo-lg hover:translate-x-1 hover:translate-y-1 transition-all"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
