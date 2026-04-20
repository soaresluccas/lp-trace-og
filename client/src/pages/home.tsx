import { CTASection } from "@/components/cta-section";
import { FooterSection } from "@/components/footer-section";
import { HeroSection } from "@/components/hero-section";
import { LeadForm } from "@/components/lead-form";
import { TestimonialsSection } from "@/components/testimonials-section";
import { WhySection } from "@/components/why-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#070505] text-white overflow-x-hidden">
      <HeroSection />
      <TestimonialsSection />
      <WhySection />
      <section id="lead-form-container" className="py-12 md:py-20 px-4 bg-[#070505] flex justify-center">
        <LeadForm />
      </section>
      <CTASection />
      <FooterSection />
      
      {/* Footer / Copyright */}
      <footer className="py-8 text-center text-muted-foreground text-sm bg-[#070505]">
        <p>© 2026 TRACE COMPANY. Todos os direitos reservados.</p>
      </footer>
    </main>
  );
}
