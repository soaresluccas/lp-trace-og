import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Target, TrendingUp, BarChart3, Zap } from "lucide-react";

const features = [
  {
    id: "card-1",
    title: "Independência do Orgânico",
    text: "Reduza a dependência do algoritmo e tenha controle sobre a sua geração de alunos.",
    icon: Target,
  },
  {
    id: "card-2",
    title: "Retorno sobre Investimento",
    text: "Pare de queimar dinheiro com tráfego pago genérico e passe a ver o seu investimento trazer o retorno esperado, o de novos alunos.",
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
    text: "Aplicamos um sistema validado para escalar sua consultoria com consistência.",
    icon: Zap,
  },
];

export function WhySection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden flex flex-col items-center pb-10 md:pb-20">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[50%] rounded-[40%] bg-[radial-gradient(circle_at_center,rgba(255,208,0,0.06)_0%,rgba(184,122,0,0.02)_30%,transparent_60%)]" />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto">
        <div className="text-center mb-8 md:mb-24">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 font-display tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-gray-200 to-gray-600 drop-shadow-sm">
              Por que escolher a
            </span>
          </h2>

          <h2 className="-mt-4 text-3xl md:text-5xl font-extrabold mb-6 font-display tracking-tight">
            <span className="text-[#FFD000]">
              Trace Company?
            </span>
          </h2>

          <p className="max-w-3xl px-4 mx-auto text-[18px] text-gray-400 leading-relaxed">
            Somos uma agência de Marketing de Performance especializada no mercado fitness. Estamos desde 2023 levando personais a baterem recordes de faturamento no online.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {features.map((feature) => (
            <div key={feature.id} className="feature-card">
              <Card className="group relative p-8 h-full bg-[#0f0f0f]/80 border-white/5 hover:border-white/10 transition-all duration-500 overflow-hidden backdrop-blur-sm hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.7)]">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[linear-gradient(135deg,rgba(255,208,0,0.03)_0%,rgba(184,122,0,0.01)_100%)]" />

                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-[#FFD000] to-[#FFD000] group-hover:w-full transition-all duration-700 ease-out shadow-[0_0_10px_rgba(255,208,0,0.5)]" />

                <div className="relative z-10">
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
      </div>
    </section>
  );
}
