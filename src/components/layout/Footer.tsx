import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";

const verticals = [
  { name: "AkroTution", path: "/verticals/akrotution" },
  { name: "AkroPlacement", path: "/verticals/akroplacement" },
  { name: "AkroHolidays", path: "/verticals/akroholidays" },
  { name: "AkroMind", path: "/verticals/akromind" },
];

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Why Choose Us", path: "/why-choose-us" },
  { name: "Contact", path: "/contact" },
];

const legalLinks = [
  { name: "Privacy Policy", path: "/privacy" },
  { name: "Terms & Conditions", path: "/terms" },
];

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-primary-foreground flex items-center justify-center">
                <span className="text-primary font-display font-bold text-lg">NA</span>
              </div>
              <span className="font-display font-bold text-xl">New Akromind</span>
            </Link>
            <p className="text-primary-foreground/70 leading-relaxed">
              One intelligent ecosystem powering education, careers, travel, and innovation. 
              Building futures, one vertical at a time.
            </p>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/in/new-akromind-97142b330/" className="p-2 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/newakrominnd/" className="p-2 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/new_akromind/" className="p-2 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Verticals */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Our Verticals</h4>
            <ul className="space-y-4">
              {verticals.map((vertical) => (
                <li key={vertical.path}>
                  <Link
                    to={vertical.path}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {vertical.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/70">
                  123 Innovation Hub, Tech District<br />
                  New Delhi, India 110001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <a href="tel:+911234567890" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  +91 123 456 7890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <a href="mailto:hello@newakromind.com" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  hello@newakromind.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} New Akromind. All rights reserved.
          </p>
          <div className="flex gap-6">
            {legalLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
