"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import CtaButton from "@/components/ui/CtaButton";

const forcas = [
  {
    num: "01",
    tag: "Arquitetos do Problema",
    role: "Educadores",
    description: "Identificam e estruturam os problemas da população.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
        <circle cx="24" cy="24" r="20" stroke="#a8ff3e" strokeWidth="1" opacity="0.25" />
        <circle cx="24" cy="24" r="10" stroke="#a8ff3e" strokeWidth="1.5" opacity="0.5" />
        <path d="M17 24h14M24 17v14" stroke="#a8ff3e" strokeWidth="2" strokeLinecap="round" />
        <circle cx="24" cy="24" r="3" fill="#a8ff3e" opacity="0.8" />
      </svg>
    ),
    delay: 0.1,
    glowColor: "rgba(168,255,62,0.08)",
  },
  {
    num: "02",
    tag: "Estrategistas do Desafio",
    role: "Gestor Público",
    description: "Definem quais desafios públicos precisam ser resolvidos.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
        <circle cx="24" cy="24" r="20" stroke="#a8ff3e" strokeWidth="1" opacity="0.25" />
        <path d="M14 32l5-8 5 5 8-11" stroke="#a8ff3e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="14" cy="32" r="2.5" fill="#a8ff3e" opacity="0.7" />
        <circle cx="32" cy="18" r="2.5" fill="#a8ff3e" opacity="0.7" />
      </svg>
    ),
    delay: 0.2,
    glowColor: "rgba(168,255,62,0.08)",
  },
  {
    num: "03",
    tag: "Desenvolvedores da Solução",
    role: "Startups",
    description: "Criam soluções inovadoras para enfrentar esses desafios.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
        <circle cx="24" cy="24" r="20" stroke="#a8ff3e" strokeWidth="1" opacity="0.25" />
        <path d="M19 17l-6 7 6 7M29 17l6 7-6 7" stroke="#a8ff3e" strokeWidth="2" strokeLinecap="round" />
        <path d="M27 15l-6 18" stroke="#a8ff3e" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      </svg>
    ),
    delay: 0.3,
    glowColor: "rgba(168,255,62,0.08)",
  },
];

export default function TresForcasSection() {
  return (
    <section
      id="tres-forcas"
      className="relative w-full py-32 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0d0b13 0%, #0f0d16 50%, #0d0b13 100%)" }}
    >
      {/* Separador topo brilhante */}
      <div className="sep-line-bright absolute top-0 left-0 right-0" />

      {/* Linhas diagonais de fundo */}
      <div className="absolute inset-0 diagonal-lines pointer-events-none" />

      {/* Glow central roxo-verde */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(120,80,255,0.06) 0%, rgba(168,255,62,0.04) 50%, transparent 70%)",
        }}
      />

      {/* Watermark "3" enorme */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-black pointer-events-none select-none"
        style={{
          fontSize: "clamp(20rem, 40vw, 36rem)",
          lineHeight: 1,
          color: "transparent",
          WebkitTextStroke: "1px rgba(168,255,62,0.04)",
          fontFamily: "var(--font-space)",
        }}
      >
        3
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 lg:px-16">
        {/* Header */}
        <div className="text-center mb-20">
          <AnimatedSection direction="up" delay={0}>
            <div className="section-badge inline-flex mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#a8ff3e] inline-block" />
              Estrutura do Movimento
            </div>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.1}>
            <h2
              className="font-black text-white tracking-tight mb-4"
              style={{ fontFamily: "var(--font-space)", fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}
            >
              TRÊS FORÇAS E <span className="text-gradient">UM PROPÓSITO</span>
            </h2>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.15}>
            <p className="text-[#444] text-sm uppercase tracking-[0.25em]">
              Transformar desafios da Saúde Pública em oportunidades
            </p>
          </AnimatedSection>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-5 mb-16">
          {forcas.map((forca, i) => (
            <motion.div
              key={i}
              className="relative rounded-2xl p-8 flex flex-col gap-6 overflow-hidden group"
              style={{
                background: "linear-gradient(145deg, #131118 0%, #0f0d15 100%)",
                border: "1px solid rgba(168,255,62,0.1)",
              }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: forca.delay, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, borderColor: "rgba(168,255,62,0.35)" }}
            >
              {/* Watermark número */}
              <div
                className="absolute -right-3 -top-4 font-black pointer-events-none select-none"
                style={{
                  fontSize: "7rem",
                  lineHeight: 1,
                  color: "transparent",
                  WebkitTextStroke: "1px rgba(168,255,62,0.07)",
                  fontFamily: "var(--font-space)",
                }}
              >
                {forca.num}
              </div>

              {/* Glow hover */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: "radial-gradient(ellipse at 50% 0%, rgba(168,255,62,0.07) 0%, transparent 70%)",
                }}
              />

              {/* Barra topo colorida */}
              <div
                className="absolute top-0 left-8 right-8 h-[2px] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500"
                style={{ background: "linear-gradient(90deg, transparent, #a8ff3e, transparent)" }}
              />

              {/* Ícone */}
              <div
                className="w-16 h-16 rounded-xl flex items-center justify-center"
                style={{ background: "rgba(168,255,62,0.05)", border: "1px solid rgba(168,255,62,0.12)" }}
              >
                {forca.icon}
              </div>

              {/* Conteúdo */}
              <div>
                <div className="text-[#a8ff3e] text-xs font-bold uppercase tracking-widest mb-2">
                  {forca.tag}
                </div>
                <div
                  className="text-white font-bold text-2xl"
                  style={{ fontFamily: "var(--font-space)" }}
                >
                  {forca.role}
                </div>
              </div>

              <p className="text-[#777] text-sm leading-relaxed flex-1">{forca.description}</p>

              {/* Linha bottom */}
              <div
                className="h-px opacity-30 group-hover:opacity-80 transition-opacity"
                style={{ background: "linear-gradient(90deg, #a8ff3e, transparent)" }}
              />
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
