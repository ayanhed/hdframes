"use client";

import * as React from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Container, Section, SectionHeader } from "@/components/ui/container";
import { cn } from "@/lib/utils";

interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar?: string;
  rating?: number;
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    quote: "HDFrames Productions delivered exceptional broadcast-quality video content for our corporate awards ceremony. Their multi-camera setup and professional approach exceeded our expectations. The final product was flawless.",
    author: "Sarah Johnson",
    role: "Marketing Director",
    company: "Birmingham Chamber of Commerce",
    rating: 5
  },
  {
    id: "2",
    quote: "The digital signage solution they provided has transformed our retail space. From initial consultation to installation and ongoing support, HDFrames demonstrated true professionalism and expertise.",
    author: "Michael Chen",
    role: "Operations Manager",
    company: "Westfield Shopping Centre",
    rating: 5
  },
  {
    id: "3",
    quote: "Working with HDFrames on our promotional video was a pleasure. They understood our vision immediately and delivered content that works perfectly across TV and social media platforms. Broadcast-standard quality at its finest.",
    author: "Emma Williams",
    role: "Creative Director",
    company: "West Midlands Tourism",
    rating: 5
  },
  {
    id: "4",
    quote: "Their expertise in awards ceremony production is unmatched. The graphics, multi-camera coordination, and live streaming capabilities made our corporate event truly memorable. Professional service from start to finish.",
    author: "David Thompson",
    role: "Event Manager",
    company: "Birmingham Business Awards",
    rating: 5
  },
  {
    id: "5",
    quote: "HDFrames' digital signage solutions have revolutionized how we communicate with our customers. The installation was seamless, and their ongoing support ensures everything runs smoothly. Highly recommended.",
    author: "Lisa Brown",
    role: "Store Manager",
    company: "John Lewis Birmingham",
    rating: 5
  }
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = React.useState(true);

  const nextTestimonial = React.useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevTestimonial = React.useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  React.useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, [nextTestimonial, isAutoPlaying]);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <Section>
      <Container>
        <SectionHeader
          overline="Client Testimonials"
          title="What Our Clients Say"
          subtitle="Don't just take our word for it. Here's what our clients across Birmingham and the West Midlands say about working with HDFrames Productions."
          centered
        />

        <div className="mt-16 max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <Card 
            glass="xl" 
            className="relative group"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <CardContent className="p-8 md:p-12">
              {/* Quote Icon */}
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-8 mx-auto">
                <Quote className="h-8 w-8 text-primary" />
              </div>

              {/* Rating */}
              {currentTestimonial.rating && (
                <div className="flex justify-center mb-6">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
              )}

              {/* Quote */}
              <blockquote className="text-lg md:text-xl text-center text-foreground leading-relaxed mb-8">
                &ldquo;{currentTestimonial.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="text-center">
                <div className="text-base font-semibold text-foreground mb-1">
                  {currentTestimonial.author}
                </div>
                <div className="text-sm text-muted-foreground">
                  {currentTestimonial.role} • {currentTestimonial.company}
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-center space-x-4 mt-8">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={prevTestimonial}
                  className="w-10 h-10 rounded-full bg-surface-2 border border-glass-border hover:bg-surface-3"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>

                {/* Dots Indicator */}
                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={cn(
                        "w-2 h-2 rounded-full transition-all",
                        index === currentIndex
                          ? "bg-primary w-8"
                          : "bg-muted hover:bg-muted-foreground"
                      )}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>

                <Button
                  variant="ghost"
                  size="icon"
                  onClick={nextTestimonial}
                  className="w-10 h-10 rounded-full bg-surface-2 border border-glass-border hover:bg-surface-3"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Side Testimonials Preview */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                      {testimonials
            .filter((_, index) => index !== currentIndex)
            .slice(0, 2)
            .map((testimonial) => (
                <Card
                  key={testimonial.id}
                  glass="md"
                  className="cursor-pointer hover:border-primary/20 transition-all group"
                  onClick={() => setCurrentIndex(testimonials.findIndex(t => t.id === testimonial.id))}
                >
                  <CardContent className="p-6">
                    <blockquote className="text-sm text-muted-foreground line-clamp-3 mb-4">
                      &ldquo;{testimonial.quote}&rdquo;
                    </blockquote>
                    <div className="text-xs">
                      <div className="font-medium text-foreground">
                        {testimonial.author}
                      </div>
                      <div className="text-muted-foreground">
                        {testimonial.role} • {testimonial.company}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="glass rounded-2xl p-8 max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-primary mb-2">100+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary mb-2">5★</div>
                <div className="text-sm text-muted-foreground">Average Rating</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary mb-2">15+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}