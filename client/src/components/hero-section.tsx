import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { LeadForm } from "@/components/lead-form";
import { ArrowRight } from "lucide-react";
import heroBg from "@assets/generated_images/dark_cinematic_food_photography_for_delivery_landing_page_background.png";

export function HeroSection() {
  const scrollToForm = () => {
    const formElement = document.getElementById("lead-form-container");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden flex flex-col items-center pb-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Delicious delivery food" 
          className="w-full h-full object-cover"
        />
        {/* Complex gradient overlay for depth and readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-[#070505]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,0,0,0)_0%,_#070505_100%)]" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 pt-32 md:pt-40 flex flex-col items-center text-center">
        
        {/* Eyebrow */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <span className="inline-block rounded-full px-4 py-1.5 text-xs md:text-sm font-bold uppercase tracking-widest border border-[#FF5A00]/30 bg-[#FF5A00]/10 text-[#FF5A00] backdrop-blur-sm">
            Explosão de vendas no delivery
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-4xl mx-auto text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] tracking-tight mb-6 font-display"
        >
          Acelere o faturamento do seu delivery com o <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5A00] to-[#ff8a4d]">Método CAC</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground leading-relaxed mb-10"
        >
          Agende uma análise gratuita e descubra como a aplicação do nosso método pode levar o seu delivery para o próximo nível.
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
            className="h-14 px-8 rounded-full text-lg font-semibold bg-[#FF5A00] hover:bg-[#d14900] text-white shadow-[0_0_30px_rgba(255,90,0,0.4)] hover:shadow-[0_0_50px_rgba(255,90,0,0.6)] hover:scale-105 transition-all duration-300"
          >
            Agendar Análise Gratuita 
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>

        {/* Card Form Container */}
        <div id="lead-form-container" className="w-full flex justify-center px-2 md:px-0">
          <LeadForm />
        </div>

      </div>
      
      {/* Bottom Fade to seamless blend if content continues */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#070505] to-transparent z-0 pointer-events-none" />
    </section>
  );
}