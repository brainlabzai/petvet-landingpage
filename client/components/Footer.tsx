import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Mail,
  Send,
} from "lucide-react";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  return (
    <footer className="bg-purple text-white py-12 md:py-16 border-t-4 border-dark-text">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8 md:mb-12">
          {/* Column 1: Quick Links */}
          <div>
            <h3 className="font-title font-bold text-xl mb-6">Quick Links</h3>
            <ul className="space-y-3 font-body">
              <li>
                <a
                  href="#services"
                  className="hover:text-yellow-300 transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#team"
                  className="hover:text-yellow-300 transition-colors"
                >
                  Team
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="hover:text-yellow-300 transition-colors"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-yellow-300 transition-colors"
                >
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-300 transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Newsletter */}
          <div>
            <h3 className="font-title font-bold text-xl mb-6">Newsletter</h3>
            <p className="font-body text-sm opacity-90 mb-4">
              Subscribe to get updates on pet care tips and special offers.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Your email"
                className="flex-1 px-4 py-2 border-2 border-white rounded-btn font-body text-dark-text focus:outline-none focus:ring-2 focus:ring-yellow-300"
              />
              <button
                type="submit"
                className="p-2 bg-white border-2 border-white rounded-btn text-purple hover:bg-yellow-300 transition-colors flex items-center justify-center"
                aria-label="Subscribe"
              >
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>

          {/* Column 3: Social Icons */}
          <div>
            <h3 className="font-title font-bold text-xl mb-6">Follow Us</h3>
            <p className="font-body text-sm opacity-90 mb-4">
              Connect with us on social media for daily pet content.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="p-3 bg-white border-2 border-white rounded-full text-purple hover:bg-yellow-300 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-3 bg-white border-2 border-white rounded-full text-purple hover:bg-yellow-300 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-3 bg-white border-2 border-white rounded-full text-purple hover:bg-yellow-300 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-3 bg-white border-2 border-white rounded-full text-purple hover:bg-yellow-300 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t-2 border-white border-opacity-30 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="font-body text-sm opacity-80">
              <p>© {new Date().getFullYear()} PEBO. All rights reserved.</p>
            </div>
            <div className="flex gap-6 font-body text-sm">
              <a
                href="#"
                className="opacity-80 hover:opacity-100 transition-opacity"
              >
                Terms
              </a>
              <a
                href="#"
                className="opacity-80 hover:opacity-100 transition-opacity"
              >
                Privacy
              </a>
              <a
                href="#"
                className="opacity-80 hover:opacity-100 transition-opacity"
              >
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
