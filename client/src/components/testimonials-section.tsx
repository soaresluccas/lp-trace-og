import { motion } from "framer-motion";
import { Instagram } from "lucide-react";

const testimonials = [
  {
    id: "vini",
    name: "Vinicius Reis",
    handle: "@vinireispersonal",
    specialty: "Especialista no emagrecimento de mulheres com a Síndrome do Ovário Policístico",
    image: "/Vini.jpeg",
  },
  {
    id: "renata",
    name: "Renata Almeida",
    handle: "@renatapersonaltreinadora",
    specialty: "Especialista em definição feminina",
    image: "/Renata.jpeg",
  },
  {
    id: "edvelton",
    name: "Edvelton de Lima",
    handle: "@edveltonpersonal",
    specialty: "Especialista em definição feminina",
    image: "/Edvelton.jpeg",
  },
];

export function TestimonialsSection() {
  return (
    <section className="relative py-12 md:py-20 px-4 overflow-hidden bg-[#070505]">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[50%] rounded-[40%] bg-[radial-gradient(circle_at_center,rgba(255,208,0,0.05)_0%,transparent_60%)]" />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <motion.h2
            className="text-3xl md:text-5xl font-extrabold font-display tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-gray-200 to-gray-500">
              Personais que confiam no
            </span>{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FFD000] to-[#FF5A00]">
              nosso trabalho
            </span>
          </motion.h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="h-full"
            >
        <div className="group relative flex flex-col items-center text-center p-8 rounded-2xl h-full bg-[#0f0f0f]/80 border border-white/5 hover:border-white/10 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.7)] overflow-hidden">
                {/* Hover gradient */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[linear-gradient(135deg,rgba(255,208,0,0.03)_0%,rgba(184,122,0,0.01)_100%)]" />

                {/* Bottom bar on hover */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-[#FFD000] to-[#FF5A00] group-hover:w-full transition-all duration-700 ease-out shadow-[0_0_10px_rgba(255,208,0,0.5)]" />

                <div className="relative z-10 flex flex-col items-center">
                  {/* Avatar */}
                  <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-[#FFD000]/40 transition-colors duration-300 shadow-lg mb-5">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>

                  {/* Name */}
                  <h3 className="text-xl font-bold text-white font-display mb-1 group-hover:text-[#FFD000] transition-colors duration-300">
                    {item.name}
                  </h3>

                  {/* Handle */}
                  <a
                    href={`https://instagram.com/${item.handle.replace("@", "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-[#FFD000]/70 hover:text-[#FFD000] transition-colors duration-200 mb-4"
                  >
                    <Instagram className="w-3.5 h-3.5" />
                    {item.handle}
                  </a>

                  {/* Specialty */}
                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {item.specialty}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
