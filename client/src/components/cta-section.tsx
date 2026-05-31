import { ArrowRight } from "lucide-react";

export function CTASection() {
  const scrollToForm = () => {
    const formElement = document.getElementById("lead-form-container");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-10 md:py-20 px-4 md:px-6 bg-[#070505]">
      <div className="max-w-[1000px] mx-auto w-full">
        <div className="relative rounded-[2rem] md:rounded-[2.5rem] border border-white/10 overflow-hidden w-full">
          <div className="absolute inset-0 bg-[#0f0f0f]">
            <div className="absolute top-[-50%] left-[-20%] w-[80%] h-[150%] bg-gradient-to-br from-yellow-500/30 via-yellow-400/20 to-yellow-300/10 blur-[120px] rounded-full mix-blend-screen opacity-50" />
            <div className="absolute bottom-[-50%] right-[-20%] w-[80%] h-[150%] bg-gradient-to-tl from-yellow-400/30 via-yellow-300/20 to-yellow-200/10 blur-[120px] rounded-full mix-blend-screen opacity-50" />

            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />
          </div>

          <div className="relative z-20 px-6 py-12 md:p-24 flex flex-col items-center text-center">
            <div className="w-16 h-16 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br from-yellow-400 to-yellow-300 p-[1px] mb-6 md:mb-8 shadow-[0_0_30px_rgba(255,208,0,0.3)] relative overflow-hidden">
              <div className="w-full h-full rounded-[15px] bg-[#0f0f0f] flex items-center justify-center relative z-10 p-2">
                <img
                  src="/Logo.png"
                  alt="TRACE Logo"
                  width="96"
                  height="96"
                  loading="lazy"
                  className="w-full h-full object-contain drop-shadow-[0_0_10px_rgba(255,208,0,0.5)]"
                />
              </div>
            </div>

            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 tracking-tight font-display max-w-4xl">
              Chegou a hora de fazer o seu online{" "}
              <span className="text-[#FFD000]">
                crescer de verdade
              </span>!
            </h2>

            <p className="text-base md:text-lg text-gray-400 mb-8 md:mb-12 max-w-2xl leading-relaxed">
              Se você sabe que a sua empresa pode ir além e quer a ajuda de
              especialistas para isso, preencha o formulário e dê o primeiro
              passo agora.
            </p>

            <button
              onClick={scrollToForm}
              className="group relative px-6 py-3 md:px-10 md:py-5 bg-white text-black font-bold text-sm md:text-lg rounded-full overflow-hidden shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_80px_rgba(255,208,0,0.6)] transition-all duration-500 cursor-pointer w-full md:w-auto hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative z-10 flex items-center justify-center gap-3 group-hover:text-white transition-colors duration-300">
                Quero Escalar Minha Consultoria
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
