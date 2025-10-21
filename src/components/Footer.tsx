import { Facebook, Twitter, Linkedin, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Logo } from "./Logo";

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-gradient-to-br from-purple-900 to-purple-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Logo width={40} height={40} />
              <span className="text-xl font-semibold">Olena Group</span>
            </div>
            <p className="text-purple-200 mb-4 font-light">
              Building Digital Experiences That Inspire
            </p>
            <div className="flex gap-3">
              <a 
                href="https://www.facebook.com/olenagroupltd" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="https://twitter.com/olenagroupltd" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a 
                href="https://www.linkedin.com/company/olenagroupltd" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="https://www.instagram.com/olenagroupltd" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "About", "Apps", "Careers", "Blog", "Contact"].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => {
                      onNavigate(item.toLowerCase());
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="text-purple-200 hover:text-white transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 font-semibold">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-purple-200">
                <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                <span>
                  Office 15282, 182-184 High Street North, East Ham, London E6 2JA, United Kingdom
                </span>
              </li>
              <li className="flex items-center gap-2 text-purple-200">
                <Mail size={18} className="flex-shrink-0" />
                <a href="mailto:hello@olenagroup.dev" className="hover:text-white transition-colors">
                  hello@olenagroup.dev
                </a>
              </li>
              <li className="flex items-center gap-2 text-purple-200">
                <Phone size={18} className="flex-shrink-0" />
                <a href="tel:+447493057836" className="hover:text-white transition-colors">
                  +44 7493 057836
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="mb-4 text-[18px]">Newsletter</h3>
            <p className="text-purple-200 mb-4">
              Stay updated with our latest apps and news.
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-purple-200"
              />
              <Button className="bg-primary hover:bg-primary/90 text-white shrink-0">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/20 text-center text-purple-200">
          <p>© 2025 Olena Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
