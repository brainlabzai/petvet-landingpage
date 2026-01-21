import { useState } from "react";
import { Send } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    petName: "",
    email: "",
    phone: "",
    petType: "dog",
    service: "grooming",
    message: "",
    videoCall: false,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({
      name: "",
      petName: "",
      email: "",
      phone: "",
      petType: "dog",
      service: "grooming",
      message: "",
      videoCall: false,
    });
  };

  return (
    <section id="contact" className="bg-cream py-16 md:py-24 lg:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-title font-bold text-3xl md:text-4xl lg:text-5xl text-dark-text mb-4">
            Get in touch
          </h2>
          <p className="font-body text-lg text-dark-text opacity-70">
            Fill out the form below and we'll get back to you as soon as
            possible.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white border-2 border-dark-text rounded-card p-8 md:p-12 shadow-neo-lg space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block font-title font-semibold text-dark-text mb-2"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-dark-text rounded-btn font-body focus:outline-none focus:ring-2 focus:ring-coral focus:ring-offset-2"
                placeholder="John Doe"
              />
            </div>

            {/* Pet Name */}
            <div>
              <label
                htmlFor="petName"
                className="block font-title font-semibold text-dark-text mb-2"
              >
                Pet Name
              </label>
              <input
                type="text"
                id="petName"
                name="petName"
                value={formData.petName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-dark-text rounded-btn font-body focus:outline-none focus:ring-2 focus:ring-coral focus:ring-offset-2"
                placeholder="Max"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block font-title font-semibold text-dark-text mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-dark-text rounded-btn font-body focus:outline-none focus:ring-2 focus:ring-coral focus:ring-offset-2"
                placeholder="john@example.com"
              />
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="phone"
                className="block font-title font-semibold text-dark-text mb-2"
              >
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-dark-text rounded-btn font-body focus:outline-none focus:ring-2 focus:ring-coral focus:ring-offset-2"
                placeholder="+1 (234) 567-890"
              />
            </div>

            {/* Pet Type */}
            <div>
              <label
                htmlFor="petType"
                className="block font-title font-semibold text-dark-text mb-2"
              >
                Pet Type
              </label>
              <select
                id="petType"
                name="petType"
                value={formData.petType}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-dark-text rounded-btn font-body focus:outline-none focus:ring-2 focus:ring-coral focus:ring-offset-2 bg-white"
              >
                <option value="dog">Dog</option>
                <option value="cat">Cat</option>
                <option value="rabbit">Rabbit</option>
                <option value="hamster">Hamster</option>
                <option value="bird">Bird</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Service */}
            <div>
              <label
                htmlFor="service"
                className="block font-title font-semibold text-dark-text mb-2"
              >
                Service
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-dark-text rounded-btn font-body focus:outline-none focus:ring-2 focus:ring-coral focus:ring-offset-2 bg-white"
              >
                <option value="grooming">Grooming</option>
                <option value="training">Training</option>
                <option value="daycare">Daycare</option>
                <option value="boarding">Boarding</option>
                <option value="health-check">Health Check</option>
                <option value="nutrition">Nutrition Consultation</option>
              </select>
            </div>
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block font-title font-semibold text-dark-text mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-3 border-2 border-dark-text rounded-btn font-body focus:outline-none focus:ring-2 focus:ring-coral focus:ring-offset-2 resize-none"
              placeholder="Tell us more about your pet and what services you're interested in..."
            />
          </div>

          {/* Video Call Checkbox */}
          <div className="flex items-center gap-3 py-4 border-t-2 border-b-2 border-dark-text">
            <input
              type="checkbox"
              id="videoCall"
              name="videoCall"
              checked={formData.videoCall}
              onChange={handleChange}
              className="w-5 h-5 rounded border-2 border-dark-text cursor-pointer"
            />
            <label
              htmlFor="videoCall"
              className="font-body text-dark-text cursor-pointer flex-1"
            >
              Schedule a video call consultation
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 font-title font-bold px-8 py-4 bg-coral text-white border-2 border-dark-text rounded-btn shadow-neo-md hover:shadow-neo-lg hover:translate-x-1 hover:translate-y-1 transition-all"
          >
            Send Message
            <Send className="w-5 h-5" />
          </button>
        </form>
      </div>
    </section>
  );
}
