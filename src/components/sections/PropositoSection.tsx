"use client";

import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";
import CtaButton from "@/components/ui/CtaButton";

export default function PropositoSection() {
  return (
    <section
      id="proposito"
      className="relative w-full py-32 overflow-hidden noise"
      style={{
        background: "linear-gradient(160deg, #05090a 0%, #080f0a 40%, #060a06 100%)",
      }}
    >
      {/* Separador top brilhante */}
      <div className="sep-line-bright absolute top-0 left-0 right-0" />

      {/* Dot pattern de fundo */}
      <div className="absolute inset-0 bg-dots opacity-60 pointer-events-none" />

      {/* Glow esquerdo grande */}
      <div
        className="absolute -left-40 top-1/2 -translate-y-1/2 w-[700px] h-[700px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(168,255,62,0.07) 0%, transparent 65%)",
        }}
      />

      {/* Watermark "78" enorme */}
      <div
        className="absolute right-[-60px] top-1/2 -translate-y-1/2 font-black pointer-events-none select-none"
        style={{
          fontSize: "clamp(16rem, 30vw, 26rem)",
          lineHeight: 1,
          color: "transparent",
          WebkitTextStroke: "1px rgba(168,255,62,0.06)",
          fontFamily: "var(--font-space)",
          letterSpacing: "-0.05em",
        }}
      >
        78
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 lg:px-16">
        <AnimatedSection direction="up" delay={0}>
          <div className="section-badge mb-10">
            <span className="w-1.5 h-1.5 rounded-full bg-[#a8ff3e] inline-block" />
            Propósito do Movimento
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Esquerda: Mapa */}
          <AnimatedSection direction="left" delay={0.1}>
            <div className="relative flex justify-center lg:justify-start">
              <div className="relative w-full max-w-[600px]">
                {/* Rings decorativos */}
                <div
                  className="absolute inset-0 rounded-full pointer-events-none"
                  style={{
                    background: "radial-gradient(circle, rgba(168,255,62,0.1) 0%, transparent 60%)",
                    transform: "scale(1.15)",
                  }}
                />

                <div className="relative w-full aspect-[3/4]">
                  <Image
                    src="/images/mapa-es.png"
                    alt="Mapa do Espírito Santo"
                    fill
                    className="object-contain scale-110"
                    style={{ filter: "drop-shadow(0 0 48px rgba(168,255,62,0.4))" }}
                    onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <MapFallback />
                  </div>
                </div>

                {/* Badge 78 sobre o mapa */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                  <div
                    className="bg-[#080808]/85 backdrop-blur-md rounded-2xl px-8 py-6 text-center"
                    style={{
                      border: "1px solid rgba(168,255,62,0.35)",
                      boxShadow: "0 0 40px rgba(168,255,62,0.15), inset 0 0 20px rgba(168,255,62,0.04)",
                    }}
                  >
                    <div
                      className="text-[#a8ff3e] font-black leading-none text-glow"
                      style={{ fontSize: "clamp(3.5rem, 7vw, 5rem)", fontFamily: "var(--font-space)" }}
                    >
                      78
                    </div>
                    <div className="text-[#a0a0a0] text-xs uppercase tracking-widest mt-2 leading-relaxed">
                      Secretarias<br />Municipais<br />de Saúde
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Direita: Texto */}
          <div className="space-y-8">
            <AnimatedSection direction="up" delay={0.2}>
              <h2
                className="font-black leading-tight tracking-tight"
                style={{ fontFamily: "var(--font-space)", fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
              >
                <span className="text-white">INOVAÇÃO QUE MELHORA A </span>
                <span className="text-gradient">SAÚDE DA NOSSA GENTE</span>
              </h2>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.3}>
              <p className="text-[#b0b0b0] text-lg leading-[1.85]">
                No Espírito Santo,{" "}
                <span className="text-[#a8ff3e] font-semibold">78 secretarias municipais de saúde</span>{" "}
                atendem milhões de capixabas todos os dias. O Movimento ECOHOS nasce para apoiar
                essas equipes na busca por soluções inovadoras que melhorem o atendimento e a
                qualidade de vida da população.
              </p>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.4}>
              <div className="space-y-3">
                {[
                  "Conexão entre especialistas, gestores e startups",
                  "Metodologias de inovação aplicadas à saúde pública",
                  "Soluções tecnológicas com impacto real na população",
                  "Cobertura em todo o estado do Espírito Santo",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div
                      className="w-8 h-px flex-shrink-0"
                      style={{ background: "linear-gradient(90deg, #a8ff3e, transparent)" }}
                    />
                    <span className="text-[#c0c0c0] text-base">{item}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.5}>
              <CtaButton />
            </AnimatedSection>
          </div>
        </div>
      </div>

      <div className="sep-line absolute bottom-0 left-0 right-0" />
    </section>
  );
}

function MapFallback() {
  return (
    <div className="w-48 h-64 opacity-10">
      <svg viewBox="0 0 200 280" fill="none" className="w-full h-full">
        <path
          d="M100 20 L140 30 L160 60 L170 100 L165 140 L150 170 L140 210 L120 250 L100 260 L80 250 L60 210 L50 170 L35 140 L30 100 L40 60 L60 30 Z"
          fill="rgba(168,255,62,0.3)" stroke="#a8ff3e" strokeWidth="2"
        />
        {([[100,80],[90,120],[110,150],[80,170],[115,190]] as number[][]).map(([cx,cy],i) => (
          <circle key={i} cx={cx} cy={cy} r="3" fill="#a8ff3e" opacity="0.6" />
        ))}
      </svg>
    </div>
  );
}
