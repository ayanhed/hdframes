import Link from "next/link";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Play, 
  Camera, 
  Monitor, 
  Users,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Separator } from "@/components/ui/separator";

const services = [
  { name: "Video Production", href: "/services#video-production", icon: Play },
  { name: "Awards & Events", href: "/services#awards-events", icon: Camera },
  { name: "Digital Signage", href: "/services#digital-signage", icon: Monitor },
  { name: "Corporate Solutions", href: "/services#corporate", icon: Users },
];

const company = [
  { name: "About Us", href: "/about" },
  { name: "Our Work", href: "/work" },
  { name: "Case Studies", href: "/work" },
  { name: "Contact", href: "/contact" },
];

const legal = [
  { name: "Privacy Policy", href: "/legal/privacy" },
  { name: "Terms of Service", href: "/legal/terms" },
  { name: "Cookie Policy", href: "/legal/cookies" },
];

const social = [
  { name: "Facebook", href: "#", icon: Facebook },
  { name: "Twitter", href: "#", icon: Twitter },
  { name: "Instagram", href: "#", icon: Instagram },
  { name: "LinkedIn", href: "#", icon: Linkedin },
  { name: "YouTube", href: "#", icon: Youtube },
];

export function Footer() {
  return (
    <footer className="bg-surface border-t border-glass-border">
      <Container>
        {/* Main Footer Content */}
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <Link href="/" className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">H</span>
                </div>
                <div>
                  <span className="text-xl font-bold text-foreground">HDFrames</span>
                  <span className="text-sm text-muted-foreground ml-1">Productions</span>
                </div>
              </Link>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Bringing your vision to life with broadcast-standard quality. 
                Professional video solutions from Birmingham, West Midlands.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-sm">
                  <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">Birmingham, West Midlands</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                  <Link 
                    href="tel:+441234567890" 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +44 (0) 123 456 7890
                  </Link>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                  <Link 
                    href="mailto:hello@hdframes.co.uk" 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    hello@hdframes.co.uk
                  </Link>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <Clock className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">Mon-Fri 9AM-6PM</span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-semibold text-foreground mb-6">Services</h3>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.name}>
                    <Link
                      href={service.href}
                      className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
                    >
                      <service.icon className="h-3 w-3 group-hover:scale-110 transition-transform" />
                      <span>{service.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-semibold text-foreground mb-6">Company</h3>
              <ul className="space-y-3">
                {company.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal & Social */}
            <div>
              <h3 className="font-semibold text-foreground mb-6">Legal</h3>
              <ul className="space-y-3 mb-8">
                {legal.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Social Media */}
              <div>
                <h4 className="font-medium text-foreground mb-4">Follow Us</h4>
                <div className="flex space-x-3">
                  {social.map((platform) => (
                    <Link
                      key={platform.name}
                      href={platform.href}
                      className="w-9 h-9 rounded-lg bg-surface-2 border border-glass-border flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-surface-3 transition-all group"
                      aria-label={`Follow us on ${platform.name}`}
                    >
                      <platform.icon className="h-4 w-4 group-hover:scale-110 transition-transform" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator />

        {/* Footer Bottom */}
        <div className="py-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} HDFrames Productions. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-6 text-sm text-muted-foreground">
            <span>Made in Birmingham, West Midlands</span>
            <span className="w-1 h-1 bg-muted-foreground rounded-full" />
            <span>Broadcast-Standard Quality</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}