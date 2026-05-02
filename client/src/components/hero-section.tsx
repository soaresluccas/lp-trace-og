import { motion } from "framer-motion";
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
    <section className="relative w-full overflow-hidden flex flex-col items-center pb-10 md:pb-20 bg-[#070505] min-h-screen">
      {/* Background - Solid Black */}
      <div className="absolute inset-0 bg-[#070505] z-0" />

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 pt-8 md:pt-40 flex flex-col items-center text-center justify-center h-full">

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <img
            src="/Logo.png"
            alt="Logo"
            className="h-auto w-56"
          />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-4xl mx-auto text-4xl md:text-4xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight mb-6 font-display"
        >
          Escale as vendas da sua consultoria online usando um <span className="text-[#FFD000]">sistema validado de marketing</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground leading-relaxed mb-10"
        >
          Agende uma análise gratuita e descubra como estruturar o seu marketing para gerar alunos todos os dias, sem depender do algoritmo.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-20"
        >
          <Button
            onClick={scrollToForm}
            className="h-14 px-8 rounded-full text-lg font-bold bg-[#FFD000] hover:bg-[#E6BC00] text-black shadow-[0_0_30px_rgba(255,208,0,0.4)] hover:shadow-[0_0_50px_rgba(255,208,0,0.6)] hover:scale-105 transition-all duration-300"
          >
            Agendar Análise Gratuita
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>

      </div>
    </section>
  );
}
