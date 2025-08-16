import Link from "next/link";
import { 
  Play, 
  Camera, 
  Monitor, 
  Users, 
  ArrowRight,
  Tv,
  Share2,
  Award,
  Settings,
  Zap,
  ShieldCheck
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Container, Section, SectionHeader } from "@/components/ui/container";

const services = [
  {
    id: "video-production",
    title: "Bespoke Video Promotional Solutions",
    description: "Professional video content for TV, social media, and corporate use with broadcast-standard quality.",
    icon: Play,
    features: [
      "Broadcast-standard quality",
      "TV and social media formats",
      "Corporate promotional videos",
      "Professional equipment"
    ],
    highlights: ["TV Quality", "Social Ready", "Corporate"],
    benefits: [
      { icon: Tv, text: "Broadcast Standard" },
      { icon: Share2, text: "Multi-Platform" },
      { icon: Zap, text: "Fast Turnaround" }
    ],
    href: "/services#video-production",
    ctaText: "Learn More"
  },
  {
    id: "awards-events",
    title: "Corporate Awards & Multi-Camera Productions",
    description: "Professional awards presentation graphics and multi-camera ceremony productions for corporate events.",
    icon: Camera,
    features: [
      "Multi-camera setups",
      "Live event production",
      "Awards graphics design",
      "Professional streaming"
    ],
    highlights: ["Multi-Camera", "Live Events", "Graphics"],
    benefits: [
      { icon: Camera, text: "Multi-Camera" },
      { icon: Award, text: "Awards Graphics" },
      { icon: Users, text: "Live Events" }
    ],
    href: "/services#awards-events",
    ctaText: "Learn More"
  },
  {
    id: "digital-signage",
    title: "Digital Signage Solutions",
    description: "Complete digital signage solutions including hardware, bespoke creative design, installations, and ongoing support.",
    icon: Monitor,
    features: [
      "Hardware supply & installation",
      "Bespoke creative design",
      "Content management systems",
      "Ongoing support & maintenance"
    ],
    highlights: ["End-to-End", "Hardware", "Support"],
    benefits: [
      { icon: Monitor, text: "Hardware Included" },
      { icon: Settings, text: "Full Installation" },
      { icon: ShieldCheck, text: "Ongoing Support" }
    ],
    href: "/services#digital-signage",
    ctaText: "Request Audit"
  }
];

export function ServicesGrid() {
  return (
    <Section>
      <Container>
        <SectionHeader
          overline="Our Services"
          title="Professional Video & Digital Solutions"
          subtitle="From broadcast-quality video production to comprehensive digital signage solutions, we deliver professional results that exceed expectations."
          centered
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16">
          {services.map((service, index) => (
            <Card 
              key={service.id} 
              hover 
              glass="lg"
              className="group relative overflow-hidden h-full"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex gap-2">
                    {service.highlights.map((highlight) => (
                      <Badge key={highlight} variant="secondary" className="text-xs">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <CardTitle className="text-xl leading-tight">
                  {service.title}
                </CardTitle>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Benefits */}
                <div className="grid grid-cols-1 gap-3">
                  {service.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center space-x-3">
                      <benefit.icon className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{benefit.text}</span>
                    </div>
                  ))}
                </div>

                {/* Features List */}
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-foreground">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-xs text-muted-foreground">
                        <div className="w-1 h-1 bg-primary rounded-full flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="pt-4">
                  <Button variant="ghost" size="sm" asChild className="w-full group/btn">
                    <Link href={service.href}>
                      {service.ctaText}
                      <ArrowRight className="ml-2 h-3 w-3 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </CardContent>

              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="glass-lg rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Ready to bring your vision to life?
            </h3>
            <p className="text-muted-foreground mb-6">
              Tell us about your project. We&apos;ll reply within one business day with a detailed proposal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Get a Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="ghost" size="lg" asChild>
                <Link href="/work">
                  View Our Work
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}