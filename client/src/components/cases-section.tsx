import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid } from "recharts";

const case1Data = [
  { month: "02/2025", value: 75241.90 },
  { month: "04/2025", value: 156518.95 },
  { month: "06/2025", value: 155249.11 },
];

const case2Data = [
  { month: "09/2024", value: 611767.94 },
  { month: "11/2024", value: 687463.70 },
  { month: "01/2025", value: 592481.30 },
  { month: "03/2025", value: 732571.38 },
  { month: "05/2025", value: 811279.59 },
  { month: "07/2025", value: 832786.84 },
];

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
};

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#0f0f0f] border border-white/10 p-3 rounded-lg shadow-xl">
        <p className="text-gray-400 text-sm mb-1">{label}</p>
        <p className="text-[#FFD000] font-bold">
          {formatCurrency(payload[0].value)}
        </p>
      </div>
    );
  }
  return null;
};

const CustomBarLabel = (props: any) => {
  const { x, y, width, value } = props;
  return (
    <text 
      x={x + width / 2} 
      y={y - 10} 
      fill="#a1a1aa" 
      textAnchor="middle" 
      dominantBaseline="alphabetic"
      fontSize={10}
      fontWeight={500}
    >
      {formatCurrency(value)}
    </text>
  );
};

export function CasesSection() {
  return (
    <section className="relative py-12 md:py-24 px-6 overflow-hidden bg-[#070505]">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[50%] h-[50%] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,208,0,0.03)_0%,transparent_70%)] blur-3xl" />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-16">
          <motion.h2
            className="text-3xl md:text-5xl font-extrabold mb-6 font-display tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-gray-200 to-gray-600 drop-shadow-sm">
              Seu delivery precisa de alguém que
            </span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FFD000] to-[#FF5A00]">
              entenda do seu negócio
            </span>
          </motion.h2>

          <motion.p
            className="max-w-3xl mx-auto text-gray-400 leading-relaxed text-sm md:text-base"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Somos especialistas no mercado de delivery, por isso, sabemos o caminho para você aumentar suas vendas. Testamos e validamos o Método CAC em diversas empresas do nicho e por isso sabemos exatamente quais estratégias realmente geram aumento de faturamento para o seu delivery.
          </motion.p>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Case 01 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="bg-[#0f0f0f]/80 border-white/5 backdrop-blur-sm h-full hover:border-white/10 transition-colors">
              <CardHeader>
                <CardTitle className="text-xl text-white mb-2">Case 01</CardTitle>
                <CardDescription className="text-gray-400">
                  Crescimento consistente para operações em expansão
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] w-full mt-4">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={case1Data} margin={{ top: 20, right: 0, left: 0, bottom: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                      <XAxis 
                        dataKey="month" 
                        stroke="#666" 
                        tick={{ fill: '#666', fontSize: 12 }}
                        tickLine={false}
                        axisLine={false}
                      />
                      <YAxis 
                        stroke="#666" 
                        tick={{ fill: '#666', fontSize: 12 }}
                        tickFormatter={(value) => `R$ ${(value / 1000).toFixed(0)}k`}
                        tickLine={false}
                        axisLine={false}
                      />
                      <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(255,255,255,0.02)' }} />
                      <Bar 
                        dataKey="value" 
                        fill="url(#barGradient1)" 
                        radius={[4, 4, 0, 0]}
                        animationDuration={2000}
                        label={<CustomBarLabel />}
                      />
                      <defs>
                        <linearGradient id="barGradient1" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#FFD000" stopOpacity={0.8} />
                          <stop offset="100%" stopColor="#b87a00" stopOpacity={0.3} />
                        </linearGradient>
                      </defs>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Case 02 */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="bg-[#0f0f0f]/80 border-white/5 backdrop-blur-sm h-full hover:border-white/10 transition-colors">
              <CardHeader>
                <CardTitle className="text-xl text-white mb-2">Case 02</CardTitle>
                <CardDescription className="text-gray-400">
                  Escala agressiva para grandes operações
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] w-full mt-4">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={case2Data} margin={{ top: 20, right: 0, left: 0, bottom: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                      <XAxis 
                        dataKey="month" 
                        stroke="#666" 
                        tick={{ fill: '#666', fontSize: 10 }}
                        tickLine={false}
                        axisLine={false}
                        interval={0}
                      />
                      <YAxis 
                        stroke="#666" 
                        tick={{ fill: '#666', fontSize: 12 }}
                        tickFormatter={(value) => `R$ ${(value / 1000).toFixed(0)}k`}
                        tickLine={false}
                        axisLine={false}
                      />
                      <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(255,255,255,0.02)' }} />
                      <Bar 
                        dataKey="value" 
                        fill="url(#barGradient2)" 
                        radius={[4, 4, 0, 0]}
                        animationDuration={2000}
                        label={<CustomBarLabel />}
                      />
                      <defs>
                        <linearGradient id="barGradient2" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#FFD000" stopOpacity={0.8} />
                          <stop offset="100%" stopColor="#b87a00" stopOpacity={0.3} />
                        </linearGradient>
                      </defs>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
