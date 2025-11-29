import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Target, TrendingUp, BarChart3, Zap, ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const features = [
  {
    id: "card-1",
    title: "Independência dos Marketplaces",
    text: "Pare de depender dos marketplaces e construa uma base sólida de clientes próprios, sem perder margem.",
    icon: Target,
  },
  {
    id: "card-2",
    title: "Retorno sobre Investimento",
    text: "Transforme seus investimentos em tráfego em vendas reais e mensuráveis para o seu delivery.",
    icon: TrendingUp,
  },
  {
    id: "card-3",
    title: "Previsibilidade de Faturamento",
    text: "Tenha controle total do seu faturamento, sem depender da sorte ou de picos ocasionais de vendas.",
    icon: BarChart3,
  },
  {
    id: "card-4",
    title: "Crescimento Acelerado",
    text: "Método validado para acelerar o crescimento do seu delivery em tempo recorde.",
    icon: Zap,
  },
];

export function WhySection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const cardsRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const title = titleRef.current;
    const cardsContainer = cardsRef.current;
    const text = textRef.current;

    if (!section || !title || !cardsContainer || !text) return;

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      return;
    }

    const cards = cardsContainer.querySelectorAll(".feature-card");

    if (!cards.length) return;

    const isSmallScreen =
      typeof window !== "undefined" &&
      window.matchMedia("(max-width: 768px)").matches;

    const chars: NodeListOf<HTMLSpanElement> | null = isSmallScreen
      ? null
      : title.querySelectorAll("span[data-char]");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "+=900",
        scrub: 0.3,
        pin: true,
        pinSpacing: true,
      },
    });

    if (chars && chars.length) {
      tl.fromTo(
        chars,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.04,
          ease: "power2.out",
        }
      );
    } else {
      tl.fromTo(
        title,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          ease: "power2.out",
        }
      );
    }

    tl
      .fromTo(
        text,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          ease: "power2.out",
        },
        ">+0.2"
      )
      .fromTo(
        cards,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          ease: "power2.out",
        },
        ">+0.3"
      );

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);

  const titleText = "Por que escolher a Trace Company?";

  const scrollToForm = () => {
    const formElement = document.getElementById("lead-form-container");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-40 md:py-48 px-6 overflow-hidden bg-[#070505] min-h-[140vh] md:min-h-[160vh]"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[50%] rounded-[40%] bg-[radial-gradient(circle_at_center,rgba(255,208,0,0.06)_0%,rgba(184,122,0,0.02)_30%,transparent_60%)]" />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <h2
            ref={titleRef}
            className="text-[18px] md:text-4xl font-extrabold mb-6 text-white font-display tracking-tight"
          >
            {titleText.split("").map((char, index) => (
              <span key={index} data-char className="inline-block">
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h2>

          <p
            ref={textRef}
            className="max-w-3xl mx-auto text-lg text-gray-400 leading-relaxed"
          >
            Somos uma agência de Marketing de Crescimento especializada no mercado de delivery. Criamos o Método CAC e é através dele que os nossos clientes batem recorde de faturamento todos os meses.
          </p>
        </div>

        {/* Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
        >
          {features.map((feature, index) => (
            <div key={feature.id} className="feature-card">
              <Card className="group relative p-8 h-full bg-[#0f0f0f]/80 border-white/5 hover:border-white/10 transition-all duration-500 overflow-hidden backdrop-blur-sm hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.7)]">
                {/* Hover Gradient Background */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[linear-gradient(135deg,rgba(255,208,0,0.03)_0%,rgba(184,122,0,0.01)_100%)]" />

                {/* Progressive Bottom Bar */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-[#FFD000] to-[#FF5A00] group-hover:w-full transition-all duration-700 ease-out shadow-[0_0_10px_rgba(255,208,0,0.5)]" />

                <div className="relative z-10">
                  {/* Icon Badge */}
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-b from-[#FFD000] to-[#b87a00] grid place-items-center shadow-[0_8px_16px_-6px_rgba(255,180,0,0.3)] mb-6 group-hover:scale-110 transition-transform duration-500">
                    <feature.icon className="w-7 h-7 text-black stroke-[2.5]" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4 font-display group-hover:text-[#FFD000] transition-colors duration-300">
                    {feature.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {feature.text}
                  </p>
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Button
            onClick={scrollToForm}
            className="px-10 py-7 text-lg font-bold rounded-2xl bg-gradient-to-r from-[#FFD000] to-[#b87a00] text-black shadow-[0_10px_30px_rgba(255,180,0,0.2)] hover:shadow-[0_15px_40px_rgba(255,180,0,0.3)] hover:-translate-y-1 transition-all duration-300 border border-white/10"
          >
            Quero vender mais
            <ArrowRight className="ml-2 h-5 w-5 stroke-[2.5]" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}