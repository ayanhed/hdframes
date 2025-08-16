import { Hero } from "@/components/blocks/hero";
import { ServicesGrid } from "@/components/blocks/services-grid";
import { Testimonials } from "@/components/blocks/testimonials";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <ServicesGrid />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
