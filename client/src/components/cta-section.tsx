import { motion, useAnimation } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

export function CTASection() {
  const [isHovered, setIsHovered] = useState(false);


  const scrollToForm = () => {
    const formElement = document.getElementById("lead-form-container");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-10 md:py-20 px-4 md:px-6 bg-[#070505]">
      <div className="max-w-[1000px] mx-auto w-full">
        <motion.div
          className="relative rounded-[2rem] md:rounded-[2.5rem] border border-white/10 overflow-hidden w-full"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Animated Background */}
          <div className="absolute inset-0 bg-[#0f0f0f]">
            {/* Moving Gradient Orbs - Enhanced */}
            <motion.div
              className="absolute top-[-50%] left-[-20%] w-[80%] h-[150%] bg-gradient-to-br from-orange-600/30 via-yellow-500/20 to-orange-400/10 blur-[120px] rounded-full mix-blend-screen"
              animate={{
                x: [0, 150, 0],
                y: [0, -80, 0],
                scale: [1, 1.3, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute bottom-[-50%] right-[-20%] w-[80%] h-[150%] bg-gradient-to-tl from-yellow-600/30 via-orange-500/20 to-yellow-400/10 blur-[120px] rounded-full mix-blend-screen"
              animate={{
                x: [0, -150, 0],
                y: [0, 80, 0],
                scale: [1, 1.4, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
              }}
            />

            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />
          </div>

          {/* Content Container */}
          <div className="relative z-20 px-6 py-12 md:p-24 flex flex-col items-center text-center">
            {/* Icon/Badge */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", duration: 0.8 }}
              className="w-16 h-16 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br from-orange-500 to-yellow-500 p-[1px] mb-6 md:mb-8 shadow-[0_0_30px_rgba(255,165,0,0.3)] relative overflow-hidden"
            >
              <div className="w-full h-full rounded-[15px] bg-[#0f0f0f] flex items-center justify-center relative z-10 p-2">
                <img
                  src="/Logo.png"
                  alt="TRACE Logo"
                  className="w-full h-full object-contain drop-shadow-[0_0_10px_rgba(255,165,0,0.5)]"
                />
              </div>
              {/* Icon Glow Animation */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 blur-xl"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>

            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 tracking-tight font-display max-w-4xl">
              Chegou a hora de fazer o seu{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-yellow-400">
                delivery crescer
              </span>{" "}
              de verdade!
            </h2>

            <p className="text-base md:text-lg text-gray-400 mb-8 md:mb-12 max-w-2xl leading-relaxed">
              Se você sabe que a sua empresa pode ir além e quer a ajuda de
              especialistas para isso, preencha o formulário e dê o primeiro
              passo agora.
            </p>

            {/* Unique CTA Button */}
            <motion.button
              className="group relative px-6 py-3 md:px-10 md:py-5 bg-white text-black font-bold text-sm md:text-lg rounded-full overflow-hidden shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_80px_rgba(255,165,0,0.6)] transition-shadow duration-500 cursor-pointer w-full md:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
            >
              {/* Button Background Gradient Animation */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Shine Effect */}
              <motion.div
                className="absolute inset-0 -translate-x-full"
                animate={{ x: ["0%", "200%"] }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                  ease: "linear",
                  repeatDelay: 2
                }}
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)",
                  transform: "skewX(-20deg)",
                }}
              />
              <button onClick={scrollToForm}>
                <span className="relative cursor-pointer z-10 flex items-center justify-center gap-3 group-hover:text-white transition-colors duration-300">
                  Quero Vender Mais
                  <ArrowRight className={`w-5 h-5 transition-transform duration-300 ${isHovered ? "translate-x-1" : ""}`} />
                </span>
              </button>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
