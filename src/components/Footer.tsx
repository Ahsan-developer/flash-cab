import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
    { label: "Careers", href: "#careers" },
    { label: "Blog", href: "#blog" }
  ];

  const services = [
    "City Rides",
    "Airport Transfer",
    "Premium Service",
    "Group Travel",
    "Cargo Service",
    "Corporate Booking"
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" }
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-epilogue font-bold text-white mb-4">
                Quick<span className="text-primary">Hop</span>
              </h3>
              <p className="text-secondary-foreground/80 leading-relaxed">
                Your reliable transportation partner providing fast, safe, and 
                affordable cab services 24/7 across the city.
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <span>info@quickhop.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                <span>123 Transportation St, City Center</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-epilogue font-semibold text-white mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-secondary-foreground/80 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-epilogue font-semibold text-white mb-6">
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-secondary-foreground/80">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-epilogue font-semibold text-white mb-6">
              Stay Updated
            </h4>
            <p className="text-secondary-foreground/80 mb-4">
              Subscribe to get updates on special offers and news.
            </p>
            
            <div className="space-y-4">
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                />
                <Button className="btn-primary px-6 whitespace-nowrap">
                  Subscribe
                </Button>
              </div>
              
              {/* Social Links */}
              <div className="flex gap-4 pt-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-white/10 hover:bg-primary rounded-full flex items-center justify-center transition-colors group"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-white group-hover:text-white" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-white/10" />

      {/* Bottom Footer */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-secondary-foreground/60 text-center md:text-left">
            © 2024 Quick Hop. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a
              href="#privacy"
              className="text-secondary-foreground/60 hover:text-primary transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#terms"
              className="text-secondary-foreground/60 hover:text-primary transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#cookies"
              className="text-secondary-foreground/60 hover:text-primary transition-colors"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;