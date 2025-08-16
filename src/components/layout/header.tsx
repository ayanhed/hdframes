"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Play, Camera, Monitor, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Work", href: "/work" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const services = [
  {
    name: "Video Production",
    href: "/services#video-production",
    description: "Bespoke promotional videos for TV and social media",
    icon: Play,
  },
  {
    name: "Awards & Events",
    href: "/services#awards-events",
    description: "Multi-camera productions and award graphics",
    icon: Camera,
  },
  {
    name: "Digital Signage",
    href: "/services#digital-signage",
    description: "Hardware, design, installation, and support",
    icon: Monitor,
  },
  {
    name: "Corporate Solutions",
    href: "/services#corporate",
    description: "Professional video solutions for businesses",
    icon: Users,
  },
];

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "nav-glass transition-all duration-300",
        isScrolled && "backdrop-blur-xl bg-glass/90"
      )}
    >
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">H</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-lg opacity-0 group-hover:opacity-20 transition-opacity blur-xl" />
            </div>
            <div className="hidden sm:block">
              <span className="text-xl font-bold text-foreground">HDFrames</span>
              <span className="text-sm text-muted-foreground ml-1">Productions</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary relative group",
                  pathname === item.href
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
              >
                {item.name}
                <span
                  className={cn(
                    "absolute -bottom-1 left-0 h-0.5 bg-primary transition-all",
                    pathname === item.href ? "w-full" : "w-0 group-hover:w-full"
                  )}
                />
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/work">View Work</Link>
            </Button>
            <Button size="sm" asChild>
              <Link href="/contact">Get Quote</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-glass-border mt-4 pt-4 pb-6 space-y-4 animate-slide-down">
            <nav className="space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "block py-2 text-base font-medium transition-colors",
                    pathname === item.href
                      ? "text-primary"
                      : "text-muted-foreground hover:text-primary"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Mobile Services Quick Links */}
            <div className="border-t border-glass-border pt-4">
              <p className="text-sm font-medium text-foreground mb-3">Services</p>
              <div className="grid grid-cols-2 gap-3">
                {services.map((service) => (
                  <Link
                    key={service.name}
                    href={service.href}
                    className="flex items-center space-x-2 p-2 rounded-lg hover:bg-surface-2 transition-colors group"
                    onClick={() => setIsOpen(false)}
                  >
                    <service.icon className="h-4 w-4 text-primary group-hover:scale-110 transition-transform" />
                    <span className="text-sm text-muted-foreground group-hover:text-foreground">
                      {service.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile CTAs */}
            <div className="border-t border-glass-border pt-4 space-y-3">
              <Button variant="ghost" className="w-full" asChild>
                <Link href="/work" onClick={() => setIsOpen(false)}>
                  View Our Work
                </Link>
              </Button>
              <Button className="w-full" asChild>
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  Get a Quote
                </Link>
              </Button>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}