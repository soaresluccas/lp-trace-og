import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Layers, Flame, Rocket } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Construção",
    description:
      "Antes de vender, é preciso ter uma base sólida para receber demanda. Estruturamos todos os ativos digitais da empresa para garantir que cada real investido em tráfego gere o máximo de conversão.",
    icon: Layers,
    color: "from-blue-500 to-cyan-400",
    shadow: "shadow-blue-500/20",
  },
  {
    id: 2,
    title: "Aquecimento",
    description:
      "Com a estrutura pronta, atraímos novos clientes com campanhas de tráfego pago que geram o primeiro contato com o cardápio digital. O objetivo é gerar uma exposição frequente para novos públicos, criando uma base sólida de potenciais compradores.",
    icon: Flame,
    color: "from-orange-500 to-red-500",
    shadow: "shadow-orange-500/20",
  },
  {
    id: 3,
    title: "Conversão",
    description:
      "Aqui o foco é vender. Com a estrutura montada e o público aquecido, entramos com as campanhas de conversão e remarketing que transformam interesse em pedidos reais. Otimizamos o investimento para gerar previsibilidade, recorrência e crescimento contínuo do delivery.",
    icon: Rocket,
    color: "from-green-500 to-emerald-400",
    shadow: "shadow-green-500/20",
  },
];

export function MethodSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const yCard = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section
      ref={containerRef}
      className="relative py-16 md:py-32 px-6 overflow-hidden bg-[#070505]"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)]" />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12 md:mb-24">
          <motion.h2
            className="text-4xl md:text-6xl font-extrabold mb-6 font-display tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-gray-200 to-gray-600 drop-shadow-sm">
              Método CAC
            </span>{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FFD000] to-[#FF5A00]">
              na prática
            </span>
          </motion.h2>
        </div>

        {/* Steps Container */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-[100px] left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/10 to-transparent z-0" />

          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              className="relative z-10 group perspective-1000 h-full flex flex-col"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* 3D Card Container */}
              <div className="relative transform transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-2 h-full flex flex-col">
                {/* 3D Icon Container */}
                <div className="flex justify-center mb-8 relative flex-shrink-0">
                  <motion.div
                    className={`w-24 h-24 rounded-3xl bg-gradient-to-br ${step.color} p-[2px] shadow-2xl ${step.shadow} relative z-10`}
                    style={{ y: index % 2 === 0 ? y : undefined }} // Keep parallax, remove floating
                  >
                    <div className="w-full h-full rounded-[22px] bg-[#1a1a1a] flex items-center justify-center relative overflow-hidden backdrop-blur-xl">
                      <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-10`} />
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.2),transparent)]" />
                      <step.icon className="w-10 h-10 text-white relative z-10 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
                    </div>
                  </motion.div>
                  
                  {/* Connector Dot */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white/5 rounded-full blur-2xl -z-10" />
                </div>

                {/* Content Card */}
                <motion.div 
                  className="bg-[#0f0f0f]/60 backdrop-blur-md border border-white/5 rounded-2xl p-8 text-center hover:bg-[#0f0f0f]/80 transition-colors duration-300 relative overflow-hidden flex-1 flex flex-col"
                  style={{ y: yCard }}
                >
                  {/* Gradient Border Bottom */}
                  <div className={`absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r ${step.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  
                  <h3 className="text-2xl font-bold text-white mb-4 font-display">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-sm flex-1">
                    {step.description}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
