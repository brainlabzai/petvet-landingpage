import { useState } from "react";
import { Send } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    petName: "",
    email: "",
    phone: "",
    petType: "cachorro",
    service: "consulta",
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
    console.log("Formulário enviado:", formData);
    // Reset form
    setFormData({
      name: "",
      petName: "",
      email: "",
      phone: "",
      petType: "cachorro",
      service: "consulta",
      message: "",
      videoCall: false,
    });
  };

  return (
    <section id="contact" className="bg-cream py-16 md:py-24 lg:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-title font-bold text-3xl md:text-4xl lg:text-5xl text-dark-text mb-4">
            Entre em Contato
          </h2>
          <p className="font-body text-lg text-dark-text opacity-70">
            Preencha o formulário abaixo e entraremos em contato o mais rápido possível.
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
                Seu Nome
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-dark-text rounded-btn font-body focus:outline-none focus:ring-2 focus:ring-coral focus:ring-offset-2"
                placeholder="Maria Silva"
              />
            </div>

            {/* Pet Name */}
            <div>
              <label
                htmlFor="petName"
                className="block font-title font-semibold text-dark-text mb-2"
              >
                Nome do Pet
              </label>
              <input
                type="text"
                id="petName"
                name="petName"
                value={formData.petName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-dark-text rounded-btn font-body focus:outline-none focus:ring-2 focus:ring-coral focus:ring-offset-2"
                placeholder="Rex"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block font-title font-semibold text-dark-text mb-2"
              >
                E-mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-dark-text rounded-btn font-body focus:outline-none focus:ring-2 focus:ring-coral focus:ring-offset-2"
                placeholder="maria@exemplo.com"
              />
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="phone"
                className="block font-title font-semibold text-dark-text mb-2"
              >
                Telefone/WhatsApp
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-dark-text rounded-btn font-body focus:outline-none focus:ring-2 focus:ring-coral focus:ring-offset-2"
                placeholder="(11) 99999-9999"
              />
            </div>

            {/* Pet Type */}
            <div>
              <label
                htmlFor="petType"
                className="block font-title font-semibold text-dark-text mb-2"
              >
                Tipo de Pet
              </label>
              <select
                id="petType"
                name="petType"
                value={formData.petType}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-dark-text rounded-btn font-body focus:outline-none focus:ring-2 focus:ring-coral focus:ring-offset-2 bg-white"
              >
                <option value="cachorro">Cachorro</option>
                <option value="gato">Gato</option>
                <option value="outro">Outro</option>
              </select>
            </div>

            {/* Service */}
            <div>
              <label
                htmlFor="service"
                className="block font-title font-semibold text-dark-text mb-2"
              >
                Serviço Desejado
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-dark-text rounded-btn font-body focus:outline-none focus:ring-2 focus:ring-coral focus:ring-offset-2 bg-white"
              >
                <option value="consulta">Consulta</option>
                <option value="vacinas">Vacinas</option>
                <option value="cirurgia">Cirurgia</option>
                <option value="exames">Exames</option>
                <option value="banho-tosa">Banho e Tosa</option>
                <option value="emergencia">Emergência</option>
              </select>
            </div>
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block font-title font-semibold text-dark-text mb-2"
            >
              Mensagem
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-3 border-2 border-dark-text rounded-btn font-body focus:outline-none focus:ring-2 focus:ring-coral focus:ring-offset-2 resize-none"
              placeholder="Conte-nos mais sobre seu pet e o que precisa..."
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
              Prefiro receber ligação por telefone
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 font-title font-bold px-8 py-4 bg-coral text-white border-2 border-dark-text rounded-btn shadow-neo-md hover:shadow-neo-lg hover:translate-x-1 hover:translate-y-1 transition-all"
          >
            Enviar Mensagem
            <Send className="w-5 h-5" />
          </button>
        </form>
      </div>
    </section>
  );
}
