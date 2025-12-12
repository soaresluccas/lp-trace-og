import { motion } from "framer-motion";
import { ArrowUp, Mail } from "lucide-react";

export function FooterSection() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative px-4 md:px-6 bg-[#070505] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute bottom-[-50%] left-1/2 -translate-x-1/2 w-[100%] md:w-[70%] h-[100%] opacity-40 blur-[120px]"
          style={{
            background: "radial-gradient(circle, rgba(234,179,8,0.4) 0%, rgba(234,179,8,0.1) 50%, transparent 70%)"
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent" />
      </div>

      <div className="relative max-w-[1200px] mx-auto w-full flex flex-col items-center justify-center">
        
        {/* Large Logo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-32 h-32 md:w-48 md:h-48 relative"
        >
          <img 
            src="/Logo.png" 
            alt="TRACE Logo" 
            className="w-full mt-12 h-full object-contain drop-shadow-[0_0_25px_rgba(234,179,8,0.3)]"
          />
        </motion.div>
      
        {/* Copyright */}
        <div className="w-full pb-12 pt-0 flex flex-col md:flex-col items-center justify-center gap-2 text-sm text-white/40">
          <p className="text-center md:text-left"> CNPJ: 51.067.160/0001-99</p>
          <a href="mailto:ricardo@tracecompany.com.br" className="text-center md:text-right">
            <Mail className="w-6 h-6 inline-block mr-2" />
            ricardo@tracecompany.com.br
          </a>
         
        </div>
      </div>

      {/* Back to Top Button */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="absolute bottom-12 right-8 md:bottom-12 md:right-12 p-2 bg-yellow-500/10 hover:bg-yellow-500/20 border border-yellow-500/30 rounded-full text-yellow-500 transition-colors backdrop-blur-sm z-10 cursor-pointer"
        aria-label="Voltar ao topo"
      >
        <ArrowUp className="w-4 h-4" />
      </motion.button>
    </footer>
  );
}
