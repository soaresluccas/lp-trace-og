import { CasesSection } from "@/components/cases-section";
import { CTASection } from "@/components/cta-section";
import { FooterSection } from "@/components/footer-section";
import { HeroSection } from "@/components/hero-section";
import { MethodSection } from "@/components/method-section";
import { WhySection } from "@/components/why-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#070505] text-white overflow-x-hidden">
      <HeroSection />
      <WhySection />
      <CasesSection />
      <MethodSection />
      <CTASection />
      <FooterSection />
      
      {/* Footer / Copyright */}
      <footer className="py-8 text-center text-muted-foreground text-sm bg-[#070505]">
        <p>© 2025 TRACE. Todos os direitos reservados.</p>
      </footer>
    </main>
  );
}
