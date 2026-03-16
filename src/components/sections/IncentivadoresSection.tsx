"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import CtaButton from "@/components/ui/CtaButton";

const parceiros = [
  { name: "FAPES",    src: "/images/fapes.png",    w: 120 },
  { name: "SEBRAE",   src: "/images/sebrae.png",   w: 130 },
  { name: "SECTI-ES", src: "/images/secti-es.png", w: 140 },
  { name: "SEGER-ES", src: "/images/seger-es.png", w: 130 },
];

export default function IncentivadoresSection() {
  return (
    <section
      id="incentivadores"
      className="relative w-full py-32 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0d0b13 0%, #090810 40%, #080808 100%)" }}
    >
      <div className="sep-line-bright absolute top-0 left-0 right-0" />

      {/* Grid pattern sutil */}
      <div className="absolute inset-0 bg-grid-sm opacity-40 pointer-events-none" />

      {/* Glow roxo-verde no topo */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[400px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at top right, rgba(120,60,255,0.06) 0%, transparent 65%)" }}
      />
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[400px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at bottom left, rgba(168,255,62,0.05) 0%, transparent 65%)" }}
      />

      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        {/* Header */}
        <div className="text-center mb-16">
          <AnimatedSection direction="up" delay={0}>
            <div className="section-badge inline-flex mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#a8ff3e] inline-block" />
              Parceiros e Apoiadores
            </div>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.1}>
            <h2
              className="font-black text-white tracking-tight"
              style={{ fontFamily: "var(--font-space)", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}
            >
              INCENTIVADORES DO <span className="text-gradient">MOVIMENTO</span>
            </h2>
          </AnimatedSection>
        </div>

        {/* Logos em cards individuais */}
        <AnimatedSection direction="up" delay={0.2}>
          <div className="flex flex-wrap items-center justify-center gap-4 mb-24">
            {parceiros.map((p, i) => (
              <motion.div
                key={i}
                className="relative flex items-center justify-center px-8 py-6 rounded-xl group cursor-pointer"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  minWidth: 160,
                  minHeight: 90,
                }}
                whileHover={{
                  background: "rgba(168,255,62,0.05)",
                  borderColor: "rgba(168,255,62,0.25)",
                  y: -3,
                }}
                transition={{ duration: 0.25 }}
              >
                <div className="relative" style={{ width: p.w, height: 48 }}>
                  <Image
                    src={p.src}
                    alt={p.name}
                    fill
                    className="object-contain"
                    style={{ filter: "brightness(1.2) contrast(1.05)", opacity: 0.85 }}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;color:#999;font-weight:700;font-size:14px;letter-spacing:0.1em;">${p.name}</div>`;
                      }
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* CTA final — bloco impactante */}
        <AnimatedSection direction="up" delay={0.3}>
          <div className="relative rounded-3xl overflow-hidden">
            {/* Background gradiente dramático */}
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(135deg, #0f0d18 0%, #0a0a0f 50%, #0d100a 100%)",
              }}
            />
            <div
              className="absolute inset-0"
              style={{
                background: "radial-gradient(ellipse at 30% 50%, rgba(120,60,255,0.08) 0%, transparent 50%), radial-gradient(ellipse at 70% 50%, rgba(168,255,62,0.06) 0%, transparent 50%)",
              }}
            />
            {/* Borda com glow */}
            <div
              className="absolute inset-0 rounded-3xl pointer-events-none"
              style={{ border: "1px solid rgba(168,255,62,0.18)", boxShadow: "inset 0 0 60px rgba(168,255,62,0.03)" }}
            />
            {/* Grid sutil */}
            <div className="absolute inset-0 bg-grid-sm opacity-20 pointer-events-none" />

            {/* Linha topo */}
            <div
              className="absolute top-0 left-12 right-12 h-[2px] rounded-full"
              style={{ background: "linear-gradient(90deg, transparent, rgba(168,255,62,0.6), transparent)" }}
            />

            <div className="relative z-10 px-12 lg:px-20 py-16 lg:py-20 text-center max-w-3xl mx-auto">
              <div
                className="text-[#a8ff3e] font-bold uppercase tracking-[0.2em] text-xs mb-6"
                style={{ fontFamily: "var(--font-space)" }}
              >
                Faça parte do movimento
              </div>

              <h3
                className="font-black text-white leading-tight mb-6"
                style={{ fontFamily: "var(--font-space)", fontSize: "clamp(1.8rem, 3vw, 2.8rem)" }}
              >
                TRANSFORME DESAFIOS EM{" "}
                <span className="text-gradient">SOLUÇÕES REAIS</span>
              </h3>

              <p className="text-[#777] text-base leading-relaxed mb-10">
                Conecte-se com quem está construindo o futuro da saúde pública no Espírito
                Santo. Especialistas, gestores e startups unidos por um propósito comum.
              </p>

              <CtaButton size="lg" />
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
