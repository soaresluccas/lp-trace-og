import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  const scrollToForm = () => {
    const formElement = document.getElementById("lead-form-container");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full overflow-hidden flex flex-col items-center py-12 md:py-24 bg-[#070505]">
      <div className="absolute inset-0 bg-[#070505] z-0" />

      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center -mt-24">

        <div className="mb-8 -mt-4">
          <img
            src="/Logo.webp"
            alt="Logo"
            width="224"
            height="224"
            className="h-auto w-56"
            fetchPriority="high"
            decoding="async"
          />
        </div>

        <h1 className="-mt-12 max-w-4xl mx-auto text-4xl md:text-4xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight mb-6 font-display">
          Escale as vendas da sua consultoria online usando um <span className="text-[#FFD000]">sistema validado de marketing</span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground leading-relaxed mb-10">
          Agende uma análise gratuita e descubra como estruturar o seu marketing para gerar alunos todos os dias, sem depender do algoritmo ou de indicação.
        </p>

        <div className="-mt-4 mb-6 md:mb-12 md:-mb-44">
          <Button
            onClick={scrollToForm}
            className="h-14 px-8 rounded-full text-lg font-bold bg-[#FFD000] hover:bg-[#E6BC00] text-black shadow-[0_0_30px_rgba(255,208,0,0.4)] hover:shadow-[0_0_50px_rgba(255,208,0,0.6)] hover:scale-105 transition-all duration-300 md:mb-24"
          >
            Agendar Análise Gratuita
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>

      </div>
    </section>
  );
}
