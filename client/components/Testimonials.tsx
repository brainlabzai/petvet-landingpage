import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Dog Owner",
    text: "PEBO completely transformed my pet's wellness. The team is so caring and professional. I love the daily updates and my dog is happier than ever!",
    avatar: "SJ",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Cat Lover",
    text: "I was skeptical at first, but PEBO exceeded all my expectations. My cat gets premium care and I have complete peace of mind.",
    avatar: "MC",
    rating: 5,
  },
  {
    name: "Emma Rodriguez",
    role: "Pet Parent",
    text: "The grooming services are impeccable, and the staff truly loves animals. I recommend PEBO to all my friends!",
    avatar: "ER",
    rating: 5,
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  const testimonial = testimonials[current];

  return (
    <section id="testimonials" className="bg-cream py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-title font-bold text-3xl md:text-4xl lg:text-5xl text-dark-text mb-4">
            What our customers say
          </h2>
        </div>

        <div className="bg-coral rounded-card border-2 border-dark-text p-8 md:p-12 shadow-neo-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Left Arrow */}
            <button
              onClick={prev}
              className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-white border-2 border-dark-text hover:bg-gray-100 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6 text-dark-text" />
            </button>

            {/* Testimonial Content */}
            <div className="text-white text-center space-y-6">
              {/* Avatar */}
              <div className="flex justify-center">
                <div className="w-20 h-20 rounded-full bg-white border-4 border-dark-text flex items-center justify-center">
                  <span className="font-title font-bold text-xl text-coral">
                    {testimonial.avatar}
                  </span>
                </div>
              </div>

              {/* Rating */}
              <div className="flex justify-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-300 text-yellow-300"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-lg md:text-xl font-body italic leading-relaxed">
                "{testimonial.text}"
              </blockquote>

              {/* Name and Role */}
              <div>
                <p className="font-title font-bold text-lg">
                  {testimonial.name}
                </p>
                <p className="font-body opacity-80">{testimonial.role}</p>
              </div>
            </div>

            {/* Right Arrow */}
            <button
              onClick={next}
              className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-white border-2 border-dark-text hover:bg-gray-100 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6 text-dark-text" />
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className="flex md:hidden justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-white border-2 border-dark-text hover:bg-gray-100 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-dark-text" />
            </button>
            <button
              onClick={next}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-white border-2 border-dark-text hover:bg-gray-100 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-dark-text" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8 md:mt-0">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === current ? "bg-white w-8" : "bg-white opacity-50"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
