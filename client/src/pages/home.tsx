import { HeroSection } from "@/components/hero-section";
import { WhySection } from "@/components/why-section";
import { CasesSection } from "@/components/cases-section";
import { MethodSection } from "@/components/method-section";
import { CTASection } from "@/components/cta-section";
import { FooterSection } from "@/components/footer-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#070505] text-white overflow-x-hidden">
      <HeroSection />
      <WhySection />
      <CasesSection />
      <MethodSection />
      <CTASection />
      <FooterSection />
    </main>
  );
}
