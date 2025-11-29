import { HeroSection } from "@/components/hero-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#070505] text-white overflow-x-hidden">
      <HeroSection />
      
      {/* Footer / Copyright */}
      <footer className="py-8 text-center text-muted-foreground text-sm bg-[#070505]">
        <p>© 2024 Método CAC. Todos os direitos reservados.</p>
      </footer>
    </main>
  );
}