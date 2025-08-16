import { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ContactForm } from "@/components/blocks/contact-form";

export const metadata: Metadata = {
  title: "Contact HDFrames Productions | Get Your Quote Today",
  description: "Get in touch with HDFrames Productions for professional video production, awards ceremonies, and digital signage solutions. Based in Birmingham, West Midlands.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="pt-16">
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}