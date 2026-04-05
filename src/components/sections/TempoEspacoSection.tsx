"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import CtaButton from "@/components/ui/CtaButton";

const pillars = [
  {
    icon: "◈",
    label: "01",
    title: "Fora da Rotina",
    desc: "Ambiente neutro que estimula o pensamento criativo fora das estruturas institucionais",
    delay: 0.2,
  },
  {
    icon: "◉",
    label: "02",
    title: "Colaboração Real",
    desc: "Conexão genuína entre perfis complementares com objetivos compartilhados",
    delay: 0.3,
  },
  {
    icon: "◎",
    label: "03",
    title: "Impacto Concreto",
    desc: "Soluções que chegam às pessoas que mais precisam dos serviços de saúde",
    delay: 0.4,
  },
];

export default function TempoEspacoSection() {
  return (
    <section
      id="tempo-espaco"
      className="relative w-full py-36 overflow-hidden"
      style={{ background: "linear-gradient(160deg, #06080e 0%, #080a12 40%, #060810 100%)" }}
    >
      <div className="sep-line-bright absolute top-0 left-0 right-0" />

      {/* Imagem de fundo com overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/fundo-secao-tempo-e-espaco.png"
          alt="Espaço criativo"
          fill
          className="object-cover"
          style={{ opacity: 0.65 }}
          onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
        />
        {/* Overlay escuro azulado */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(160deg, rgba(6,8,14,0.55) 0%, rgba(8,10,18,0.50) 50%, rgba(6,8,16,0.60) 100%)" }}
        />
        {/* Noise */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: "180px 180px",
          }}
        />
      </div>

      {/* Glow azul-verde central */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at top, rgba(60,100,255,0.06) 0%, rgba(168,255,62,0.04) 50%, transparent 70%)" }}
      />

      {/* Linhas horizontais decorativas */}
      {[20, 50, 80].map((pct, i) => (
        <div
          key={i}
          className="absolute left-0 right-0 pointer-events-none"
          style={{ top: `${pct}%`, height: "1px", background: `rgba(168,255,62,${0.02 + i * 0.01})` }}
        />
      ))}

      <div className="relative z-10 max-w-6xl mx-auto px-8 lg:px-16">
        <div className="text-center mb-20">
          <AnimatedSection direction="up" delay={0}>
            <div className="section-badge inline-flex mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#a8ff3e] inline-block" />
              Metodologia
            </div>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.1}>
            <h2
              className="font-semibold tracking-tight leading-tight mb-6"
              style={{ fontFamily: "var(--font-space)", fontSize: "clamp(2.2rem, 5vw, 4rem)" }}
            >
              <span className="text-white">Tempo e espaço</span>{" "}
              <span className="text-gradient">criativo</span>
            </h2>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.15}>
            <p
              className="font-medium text-lg mb-8 tracking-normal"
              style={{ color: "#a8ff3e", textShadow: "0 0 20px rgba(168,255,62,0.4)", fontFamily: "var(--font-space)" }}
            >
              O hub de inovações onde três forças se conectam para transformar a saúde
            </p>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.18}>
            <p className="text-[#888] text-lg leading-[1.9] max-w-3xl mx-auto">
              O Programa Secretário Inovador promove um espaço criativo de conexão entre especialistas,
              gestores públicos e empreendedores. Fora da rotina das instituições, esse
              ambiente estimula novas ideias, colaboração e o desenvolvimento de soluções
              inovadoras capazes de enfrentar os desafios da saúde pública e melhorar a vida
              das pessoas.
            </p>
          </AnimatedSection>
        </div>

        {/* Três pilares — cards com borda esquerda colorida */}
        <div className="grid md:grid-cols-3 gap-5 mb-16">
          {pillars.map((p, i) => (
            <motion.div
              key={i}
              className="relative rounded-xl overflow-hidden group"
              style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.02) 100%)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: p.delay, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4, borderColor: "rgba(168,255,62,0.2)" }}
            >
              {/* Borda esquerda verde */}
              <div
                className="absolute left-0 top-0 bottom-0 w-[3px]"
                style={{ background: "linear-gradient(180deg, #a8ff3e, rgba(168,255,62,0.2))" }}
              />

              {/* Glow hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: "radial-gradient(ellipse at 0% 50%, rgba(168,255,62,0.06) 0%, transparent 60%)" }}
              />

              <div className="p-7 pl-8">
                {/* Número */}
                <div
                  className="text-xs font-bold uppercase tracking-widest mb-5"
                  style={{ color: "rgba(168,255,62,0.45)", fontFamily: "var(--font-space)" }}
                >
                  {p.label}
                </div>

                {/* Ícone grande */}
                <div
                  className="text-4xl mb-5 leading-none"
                  style={{ color: "#a8ff3e", textShadow: "0 0 20px rgba(168,255,62,0.5)" }}
                >
                  {p.icon}
                </div>

                <h3
                  className="text-white font-bold text-xl mb-3"
                  style={{ fontFamily: "var(--font-space)" }}
                >
                  {p.title}
                </h3>

                <p className="text-[#777] text-sm leading-relaxed">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatedSection direction="up" delay={0.5} className="flex justify-center">
          <CtaButton size="lg" />
        </AnimatedSection>
      </div>

      <div className="sep-line absolute bottom-0 left-0 right-0" />
    </section>
  );
}
