"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import CtaButton from "@/components/ui/CtaButton";

const events = [
  {
    hashtag1: "HumanIA",
    hashtag2: "ConexãoHumano",
    month: "ABR",
    year: "2026",
    index: "01",
    description: "Conexão entre especialistas e gestores para identificar os desafios humanos na saúde pública com o apoio da Inteligência Artificial.",
    delay: 0.1,
  },
  {
    hashtag1: "InovaçãoAberta",
    hashtag2: "NoSetorPúblico",
    month: "JUL",
    year: "2026",
    index: "02",
    description: "Encontro para estruturar desafios de inovação aberta voltados à melhoria dos serviços públicos de saúde no Espírito Santo.",
    delay: 0.2,
  },
  {
    hashtag1: "CasesdeSucesso",
    hashtag2: "RevoluçãoTec",
    month: "OUT",
    year: "2026",
    index: "03",
    description: "Apresentação das soluções tecnológicas desenvolvidas pelas startups, celebrando os resultados e impactos gerados na saúde pública.",
    delay: 0.3,
  },
];

export default function EncontrosSection() {
  return (
    <section
      id="encontros"
      className="relative w-full py-32 overflow-hidden"
      style={{ background: "linear-gradient(160deg, #060608 0%, #08080d 50%, #060608 100%)" }}
    >
      <div className="sep-line-bright absolute top-0 left-0 right-0" />

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-grid opacity-50 pointer-events-none" />

      {/* Watermark "2026" */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 font-black pointer-events-none select-none leading-none"
        style={{
          fontSize: "clamp(10rem, 22vw, 20rem)",
          color: "transparent",
          WebkitTextStroke: "1px rgba(168,255,62,0.04)",
          fontFamily: "var(--font-space)",
          letterSpacing: "-0.04em",
        }}
      >
        2026
      </div>

      {/* Top glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[300px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at top, rgba(168,255,62,0.06) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-8 lg:px-16">
        {/* Header */}
        <div className="text-center mb-24">
          <AnimatedSection direction="up" delay={0}>
            <div className="section-badge inline-flex mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#a8ff3e] inline-block" />
              Agenda 2026
            </div>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.1}>
            <h2
              className="font-black tracking-tight text-white mb-4"
              style={{ fontFamily: "var(--font-space)", fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}
            >
              ENCONTROS & <span className="text-gradient">CONEXÕES</span>
            </h2>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.15}>
            <p className="text-[#666] text-base max-w-2xl mx-auto leading-relaxed">
              A partir dessa conexão entre especialistas, gestores públicos e startups, o
              Movimento ECOHOS impulsiona o desenvolvimento de soluções inovadoras para os
              desafios da saúde pública.
            </p>
          </AnimatedSection>
        </div>

        {/* Cards desktop — horizontal com linha de tempo */}
        <div className="hidden lg:block mb-20">
          {/* Timeline line */}
          <div className="relative mb-0">
            <div className="absolute left-[16.66%] right-[16.66%] top-[88px] h-px pointer-events-none z-0">
              <div className="w-full h-full" style={{ background: "linear-gradient(90deg, transparent, rgba(168,255,62,0.25) 20%, rgba(168,255,62,0.25) 80%, transparent)" }} />
              <motion.div
                className="absolute top-0 h-full w-32"
                style={{ background: "linear-gradient(90deg, transparent, rgba(168,255,62,0.8), transparent)" }}
                animate={{ left: ["-20%", "120%"] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
              />
            </div>

            <div className="grid grid-cols-3 gap-6 relative z-10">
              {events.map((ev, i) => (
                <motion.div
                  key={i}
                  className="flex flex-col items-center text-center"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.7, delay: ev.delay, ease: [0.22, 1, 0.36, 1] }}
                >
                  {/* Círculo data */}
                  <motion.div
                    className="relative mb-12"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Anel externo pulsando */}
                    <motion.div
                      className="absolute inset-0 rounded-full"
                      style={{ border: "1px solid rgba(168,255,62,0.2)", transform: "scale(1.25)" }}
                      animate={{ scale: [1.25, 1.4], opacity: [0.3, 0] }}
                      transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.8 }}
                    />

                    <div
                      className="w-[176px] h-[176px] rounded-full flex flex-col items-center justify-center relative"
                      style={{
                        background: "linear-gradient(135deg, #131118 0%, #0f0d15 100%)",
                        border: "1px solid rgba(168,255,62,0.22)",
                        boxShadow: "0 0 30px rgba(168,255,62,0.08), inset 0 0 30px rgba(168,255,62,0.03)",
                      }}
                    >
                      {/* Número do evento */}
                      <div
                        className="absolute top-3 right-4 text-xs font-bold"
                        style={{ color: "rgba(168,255,62,0.35)", fontFamily: "var(--font-space)" }}
                      >
                        {ev.index}
                      </div>
                      <div
                        className="text-[#a8ff3e] font-black text-4xl leading-none text-glow"
                        style={{ fontFamily: "var(--font-space)" }}
                      >
                        {ev.month}
                      </div>
                      <div className="text-[#444] text-sm mt-1 font-medium">{ev.year}</div>
                    </div>
                  </motion.div>

                  {/* Hashtags */}
                  <div className="space-y-1.5 mb-5">
                    <div className="text-[#a8ff3e] font-bold text-lg">#{ev.hashtag1}</div>
                    <div className="text-white font-medium text-sm">#{ev.hashtag2}</div>
                  </div>

                  {/* Separador */}
                  <div className="w-8 h-px bg-[#a8ff3e]/30 mb-5" />

                  <p className="text-[#666] text-sm leading-relaxed max-w-[260px]">{ev.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Cards mobile */}
        <div className="lg:hidden space-y-4 mb-16">
          {events.map((ev, i) => (
            <motion.div
              key={i}
              className="rounded-2xl p-6"
              style={{
                background: "linear-gradient(135deg, #131118, #0f0d15)",
                border: "1px solid rgba(168,255,62,0.12)",
              }}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div className="flex items-center gap-5 mb-4">
                <div
                  className="w-16 h-16 rounded-full flex flex-col items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(168,255,62,0.06)", border: "1px solid rgba(168,255,62,0.2)" }}
                >
                  <div className="text-[#a8ff3e] font-black text-xl leading-none">{ev.month}</div>
                  <div className="text-[#444] text-xs">{ev.year}</div>
                </div>
                <div>
                  <div className="text-[#a8ff3e] font-bold">#{ev.hashtag1}</div>
                  <div className="text-white text-sm">#{ev.hashtag2}</div>
                </div>
              </div>
              <p className="text-[#777] text-sm leading-relaxed">{ev.description}</p>
            </motion.div>
          ))}
        </div>

        <AnimatedSection direction="up" delay={0.4} className="flex justify-center">
          <CtaButton />
        </AnimatedSection>
      </div>

      <div className="sep-line absolute bottom-0 left-0 right-0" />
    </section>
  );
}
