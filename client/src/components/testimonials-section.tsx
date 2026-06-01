import { Instagram } from "lucide-react";

const testimonials = [
  {
    id: "vini",
    name: "Vinicius Reis",
    handle: "@vinireispersonal",
    specialty: "Especialista no emagrecimento de mulheres com a Síndrome do Ovário Policístico",
    image: "/Vini.webp",
  },
  {
    id: "renata",
    name: "Renata Almeida",
    handle: "@renatapersonaltreinadora",
    specialty: "Especialista em definição feminina",
    image: "/Renata.webp",
  },
  {
    id: "edvelton",
    name: "Edvelton de Lima",
    handle: "@edveltonpersonal",
    specialty: "Especialista em definição feminina",
    image: "/Edvelton.webp",
  },
];

export function TestimonialsSection() {
  return (
    <section className="relative pt-8 pb-12 md:py-20 px-4 overflow-hidden bg-[#070505]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[50%] rounded-[40%] bg-[radial-gradient(circle_at_center,rgba(255,208,0,0.05)_0%,transparent_60%)]" />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold font-display tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-gray-200 to-gray-500">
              Personais que confiam no
            </span>{" "}
            <span className="text-[#FFD000]">
              nosso trabalho
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((item) => (
            <div key={item.id} className="h-full">
              <div className="group relative flex flex-col items-center text-center p-8 rounded-2xl h-full bg-[#0f0f0f] border border-white/5 hover:border-white/10 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.7)] overflow-hidden">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[linear-gradient(135deg,rgba(255,208,0,0.03)_0%,rgba(184,122,0,0.01)_100%)] pointer-events-none z-0" />

                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-[#FFD000] to-[#FFD000] group-hover:w-full transition-all duration-700 ease-out shadow-[0_0_10px_rgba(255,208,0,0.5)] z-30" />

                <div className="relative w-28 h-28 mb-6 shrink-0 z-20">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#FFD000] to-[#FFD000] p-[2px] opacity-50 group-hover:opacity-100 transition-opacity duration-500">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      width="112"
                      height="112"
                      loading="lazy"
                      className="w-full h-full object-cover rounded-full border-4 border-[#0f0f0f]"
                    />
                  </div>
                  <div className="absolute inset-0 rounded-full bg-[#FFD000] blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10" />
                </div>

                <div className="relative z-20 flex flex-col items-center grow">
                  <h3 className="text-xl md:text-2xl font-bold text-white font-display mb-1 group-hover:text-[#FFD000] transition-colors duration-300 drop-shadow-sm">
                    {item.name}
                  </h3>

                  <a
                    href={`https://instagram.com/${item.handle.replace("@", "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 text-sm font-medium text-[#FFD000]/80 hover:text-[#FFD000] transition-colors duration-200 mb-4"
                  >
                    <Instagram className="w-4 h-4" />
                    {item.handle}
                  </a>

                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {item.specialty}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
