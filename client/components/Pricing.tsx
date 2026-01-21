import { Check } from "lucide-react";

const pricingPlans = [
  {
    name: "Basic",
    price: "$49",
    period: "/month",
    features: [
      "Weekly grooming",
      "Daily updates",
      "Nutrition guidance",
      "Emergency support",
    ],
    color: "bg-coral",
    shadowColor: "shadow-neo-coral-md",
    highlighted: false,
  },
  {
    name: "Premium",
    price: "$79",
    period: "/month",
    features: [
      "Bi-weekly grooming",
      "24/7 monitoring",
      "Nutrition guidance",
      "Training sessions",
      "Emergency support",
      "Health analytics",
    ],
    color: "bg-purple",
    shadowColor: "shadow-neo-purple-md",
    highlighted: true,
  },
  {
    name: "VIP",
    price: "$129",
    period: "/month",
    features: [
      "Weekly grooming",
      "24/7 monitoring",
      "Custom nutrition",
      "Training sessions",
      "24/7 emergency care",
      "Health analytics",
      "Vet consultation",
    ],
    color: "bg-blue-500",
    shadowColor: "shadow-neo-blue-md",
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-cream py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-title font-bold text-3xl md:text-4xl lg:text-5xl text-dark-text mb-4">
            Simple and transparent pricing
          </h2>
          <p className="font-body text-lg text-dark-text opacity-70 max-w-2xl mx-auto">
            Choose the plan that best fits your pet's needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white border-2 border-dark-text rounded-card overflow-hidden flex flex-col ${plan.shadowColor} hover:shadow-neo-lg hover:translate-x-1 hover:translate-y-1 transition-all ${
                plan.highlighted ? "ring-2 ring-dark-text" : ""
              }`}
            >
              {/* Color Badge with Price */}
              <div
                className={`${plan.color} text-white p-6 flex flex-col items-center`}
              >
                <p className="font-body text-sm opacity-90 mb-2">Starting at</p>
                <h3 className="font-title font-bold text-4xl">{plan.price}</h3>
                <p className="font-body text-sm opacity-90">{plan.period}</p>
              </div>

              {/* Plan Details */}
              <div className="flex-grow p-6 flex flex-col">
                <h3 className="font-title font-bold text-2xl text-dark-text mb-6">
                  {plan.name} Plan
                </h3>

                {/* Features List */}
                <ul className="space-y-3 flex-grow">
                  {plan.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-start gap-3 font-body text-dark-text"
                    >
                      <Check className="w-5 h-5 text-purple flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <a
                  href="#contact"
                  className="mt-8 w-full text-center font-title font-bold px-6 py-3 bg-dark-text text-white border-2 border-dark-text rounded-btn shadow-neo-sm hover:shadow-neo-md hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
                >
                  Contact us
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
