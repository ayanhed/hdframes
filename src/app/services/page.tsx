import { Metadata } from "next";
import Link from "next/link";
import { 
  Play, 
  Camera, 
  Monitor, 
  Users, 
  ArrowRight,
  CheckCircle,
  Clock,
  Shield,
  Zap,
  Settings,
  Award,
  Tv,
  Share2
} from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Container, Section, SectionHeader } from "@/components/ui/container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Professional Video Production & Digital Signage Services",
  description: "Comprehensive video production, awards ceremony coverage, and digital signage solutions. Broadcast-standard quality from Birmingham, West Midlands.",
};

const services = [
  {
    id: "video-production",
    title: "Bespoke Video Promotional Solutions",
    description: "Professional video content for TV, social media, and corporate use with broadcast-standard quality.",
    icon: Play,
    features: [
      "Broadcast-standard 4K video production",
      "Multi-platform content optimization (TV, social, web)",
      "Professional lighting and audio equipment",
      "Color grading and post-production",
      "Motion graphics and visual effects",
      "Script development and storyboarding"
    ],
    benefits: [
      { icon: Tv, text: "Broadcast Standard Quality", description: "Professional equipment and expertise for TV-ready content" },
      { icon: Share2, text: "Multi-Platform Ready", description: "Optimized formats for TV, social media, and web" },
      { icon: Zap, text: "Fast Turnaround", description: "Efficient workflow for quick project delivery" }
    ],
    process: [
      "Initial consultation and brief development",
      "Concept creation and storyboard design",
      "Pre-production planning and scheduling",
      "Professional filming with broadcast equipment",
      "Post-production editing and color grading",
      "Final delivery in all required formats"
    ],
    faqs: [
      {
        question: "What video formats do you deliver?",
        answer: "We deliver in all major formats including broadcast-standard formats for TV, optimized files for social media platforms, and web-ready versions for websites."
      },
      {
        question: "How long does video production take?",
        answer: "Typical projects take 2-4 weeks from concept to delivery, depending on complexity. Rush projects can often be accommodated."
      },
      {
        question: "Do you provide script writing services?",
        answer: "Yes, we offer complete script development and storyboarding services as part of our comprehensive video production package."
      }
    ]
  },
  {
    id: "awards-events",
    title: "Corporate Awards & Multi-Camera Productions",
    description: "Professional awards presentation graphics and multi-camera ceremony productions for corporate events.",
    icon: Camera,
    features: [
      "Multi-camera ceremony coverage",
      "Live event streaming capabilities",
      "Custom awards graphics and animations",
      "Professional audio mixing",
      "Real-time video switching",
      "Post-event editing and highlights"
    ],
    benefits: [
      { icon: Camera, text: "Multi-Camera Setup", description: "Professional coverage from multiple angles" },
      { icon: Award, text: "Custom Graphics", description: "Bespoke awards graphics and animations" },
      { icon: Users, text: "Live Event Expertise", description: "Experienced team for seamless live productions" }
    ],
    process: [
      "Event consultation and technical requirements",
      "Custom graphics design and approval",
      "Technical setup and equipment installation",
      "Live event production and streaming",
      "Real-time mixing and graphics integration",
      "Post-event editing and delivery"
    ],
    faqs: [
      {
        question: "Can you stream events live?",
        answer: "Yes, we provide professional live streaming services for awards ceremonies and corporate events to multiple platforms simultaneously."
      },
      {
        question: "How many cameras do you use?",
        answer: "We typically use 3-6 cameras depending on venue size and requirements, ensuring complete coverage of your event."
      },
      {
        question: "Do you create custom award graphics?",
        answer: "Absolutely. We design bespoke graphics, lower thirds, and animations that match your brand and event theme."
      }
    ]
  },
  {
    id: "digital-signage",
    title: "Digital Signage Solutions",
    description: "Complete digital signage solutions including hardware, bespoke creative design, installations, and ongoing support.",
    icon: Monitor,
    features: [
      "Hardware consultation and supply",
      "Bespoke creative design and branding",
      "Professional installation services",
      "Content management systems",
      "Remote monitoring and updates",
      "Ongoing technical support"
    ],
    benefits: [
      { icon: Monitor, text: "Hardware Included", description: "Complete hardware solution from consultation to installation" },
      { icon: Settings, text: "Full Installation", description: "Professional installation and setup service" },
      { icon: Shield, text: "Ongoing Support", description: "Comprehensive maintenance and support packages" }
    ],
    process: [
      "Site survey and requirements analysis",
      "Hardware recommendation and quotation",
      "Creative design and content development",
      "Professional installation and setup",
      "Training and handover",
      "Ongoing support and maintenance"
    ],
    faqs: [
      {
        question: "What industries do you work with?",
        answer: "We work with retail, hospitality, corporate offices, healthcare, education, and many other sectors requiring digital signage solutions."
      },
      {
        question: "Do you provide content creation?",
        answer: "Yes, we offer complete content creation services including graphic design, animation, and templated content systems for easy updates."
      },
      {
        question: "What ongoing support do you provide?",
        answer: "We offer comprehensive support packages including remote monitoring, content updates, technical support, and maintenance services."
      }
    ]
  }
];

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        {/* Hero Section */}
        <Section className="pt-24">
          <Container>
            <div className="text-center max-w-4xl mx-auto">
              <Badge variant="secondary" className="mb-6">
                Professional Services
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                <span className="bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
                  Broadcast-Standard Video & Digital Solutions
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                From bespoke video production to complete digital signage solutions, 
                we deliver professional results that exceed expectations with broadcast-standard quality.
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
          </Container>
        </Section>

        {/* Services Detail Sections */}
        {services.map((service, index) => (
          <Section key={service.id} id={service.id} className={index % 2 === 1 ? "bg-surface/30" : ""}>
            <Container>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center">
                      <service.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                        {service.title}
                      </h2>
                    </div>
                  </div>
                  
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Benefits */}
                  <div className="space-y-4 mb-8">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                          <benefit.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">
                            {benefit.text}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {benefit.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Button asChild>
                    <Link href="/contact">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>

                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <Card glass="lg" className="p-8">
                    {/* Features */}
                    <div className="mb-8">
                      <h3 className="text-xl font-semibold mb-6">Key Features</h3>
                      <div className="space-y-3">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-3">
                            <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                            <span className="text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Separator className="mb-8" />

                    {/* Process */}
                    <div>
                      <h3 className="text-xl font-semibold mb-6">Our Process</h3>
                      <div className="space-y-4">
                        {service.process.map((step, stepIndex) => (
                          <div key={stepIndex} className="flex items-start space-x-4">
                            <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                              <span className="text-sm font-semibold text-primary">
                                {stepIndex + 1}
                              </span>
                            </div>
                            <span className="text-sm text-muted-foreground pt-1">
                              {step}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </Container>
          </Section>
        ))}

        {/* FAQ Section */}
        <Section>
          <Container>
            <SectionHeader
              overline="Frequently Asked Questions"
              title="Common Questions About Our Services"
              subtitle="Get answers to the most common questions about our video production and digital signage services."
              centered
            />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16">
              {services.map((service) => (
                <div key={service.id} className="space-y-6">
                  <div className="flex items-center space-x-3 mb-6">
                    <service.icon className="h-6 w-6 text-primary" />
                    <h3 className="text-lg font-semibold">{service.title}</h3>
                  </div>
                  
                  <div className="space-y-4">
                    {service.faqs.map((faq, faqIndex) => (
                      <Card key={faqIndex} glass="md">
                        <CardHeader className="pb-3">
                          <CardTitle className="text-base">{faq.question}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground">{faq.answer}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* CTA Section */}
        <Section>
          <Container>
            <div className="glass-xl rounded-3xl p-12 text-center max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Tell us about your project. We&apos;ll reply within one business day with 
                a detailed proposal tailored to your specific requirements.
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

              {/* Trust Indicators */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 pt-8 border-t border-glass-border">
                <div className="flex items-center justify-center space-x-3">
                  <Clock className="h-5 w-5 text-primary" />
                  <span className="text-sm text-muted-foreground">Quick Response</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <Shield className="h-5 w-5 text-primary" />
                  <span className="text-sm text-muted-foreground">Professional Quality</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <Users className="h-5 w-5 text-primary" />
                  <span className="text-sm text-muted-foreground">Expert Team</span>
                </div>
              </div>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}