"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight, Play, Award, Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";

interface HeroProps {
  overline?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  primaryCta?: {
    text: string;
    href: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
  features?: string[];
  videoSrc?: string;
  imageSrc?: string;
}

export function Hero({
  overline = "Birmingham's Premier Video Production",
  title = "Bringing Your Vision to Life — In Broadcast-Standard Quality",
  subtitle = "Bespoke video promotions, awards graphics, multi-camera productions, and digital signage—crafted in Birmingham for TV and every platform.",
  description,
  primaryCta = { text: "Get a Quote", href: "/contact" },
  secondaryCta = { text: "View Our Work", href: "/work" },
  features = [
    "Years of experience across TV, corporate, and live events",
    "Broadcast-standard equipment and expertise",
    "Based in Birmingham, West Midlands"
  ],
  videoSrc,
  imageSrc,
}: HeroProps) {
  const [isVideoPlaying] = React.useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient mesh */}
      <div className="absolute inset-0 gradient-mesh noise-overlay" />
      
      {/* Background Video/Image */}
      <div className="absolute inset-0 z-0">
        {videoSrc && !isVideoPlaying && (
          <div className="relative w-full h-full bg-background/50">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
              style={{
                backgroundImage: imageSrc ? `url(${imageSrc})` : undefined,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/20 to-background/60" />
          </div>
        )}
        
        {videoSrc && isVideoPlaying && (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-30"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        )}
      </div>

      <Container className="relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left max-w-2xl">
            {/* Overline */}
            <Badge variant="secondary" className="mb-6 animate-fade-in">
              {overline}
            </Badge>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-slide-up">
              <span className="bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
                {title}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed animate-slide-up" style={{ animationDelay: "0.1s" }}>
              {subtitle}
            </p>

            {/* Description */}
            {description && (
              <p className="text-base text-muted-foreground mb-8 animate-slide-up" style={{ animationDelay: "0.2s" }}>
                {description}
              </p>
            )}

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-slide-up" style={{ animationDelay: "0.3s" }}>
              <Button size="lg" asChild>
                <Link href={primaryCta.href}>
                  {primaryCta.text}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="ghost" size="lg" asChild>
                <Link href={secondaryCta.href}>
                  <Play className="mr-2 h-4 w-4" />
                  {secondaryCta.text}
                </Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            {features && features.length > 0 && (
              <div className="space-y-3 animate-slide-up" style={{ animationDelay: "0.4s" }}>
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center justify-center lg:justify-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Visual Element */}
          <div className="flex-1 max-w-lg lg:max-w-none">
            <div className="relative">
              {/* Main Visual Card */}
              <div className="glass-lg rounded-2xl p-8 animate-scale-in" style={{ animationDelay: "0.5s" }}>
                <div className="grid grid-cols-1 gap-6">
                  {/* Video Production Card */}
                  <div className="glass rounded-xl p-6 hover:shadow-glass-lg transition-all group cursor-pointer">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Play className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">Video Production</h3>
                        <p className="text-sm text-muted-foreground">Broadcast Quality</p>
                      </div>
                    </div>
                    <div className="w-full h-2 bg-surface-2 rounded-full overflow-hidden">
                      <div className="h-full w-4/5 bg-gradient-to-r from-primary to-accent rounded-full animate-pulse" />
                    </div>
                  </div>

                  {/* Awards & Events Card */}
                  <div className="glass rounded-xl p-6 hover:shadow-glass-lg transition-all group cursor-pointer">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Award className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">Awards & Events</h3>
                        <p className="text-sm text-muted-foreground">Multi-Camera</p>
                      </div>
                    </div>
                    <div className="w-full h-2 bg-surface-2 rounded-full overflow-hidden">
                      <div className="h-full w-3/4 bg-gradient-to-r from-accent to-primary rounded-full" />
                    </div>
                  </div>

                  {/* Digital Signage Card */}
                  <div className="glass rounded-xl p-6 hover:shadow-glass-lg transition-all group cursor-pointer">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Monitor className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">Digital Signage</h3>
                        <p className="text-sm text-muted-foreground">End-to-End</p>
                      </div>
                    </div>
                    <div className="w-full h-2 bg-surface-2 rounded-full overflow-hidden">
                      <div className="h-full w-5/6 bg-gradient-to-r from-primary to-accent rounded-full" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full opacity-60 blur-xl animate-pulse" />
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-br from-accent to-primary rounded-full opacity-40 blur-2xl animate-pulse" style={{ animationDelay: "1s" }} />
            </div>
          </div>
        </div>
      </Container>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}