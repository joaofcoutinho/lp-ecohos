"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import CtaButton from "@/components/ui/CtaButton";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen w-full flex flex-col overflow-hidden"
      style={{ background: "linear-gradient(160deg, #080808 0%, #0a0f05 50%, #080808 100%)" }}
    >
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid opacity-60 pointer-events-none" />

      {/* Radial glow top-right */}
      <div
        className="absolute top-0 right-0 w-[800px] h-[800px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at top right, rgba(168,255,62,0.07) 0%, transparent 60%)",
        }}
      />

      {/* Radial glow bottom-left */}
      <div
        className="absolute bottom-0 left-0 w-[600px] h-[600px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at bottom left, rgba(168,255,62,0.05) 0%, transparent 60%)",
        }}
      />

      {/* Navbar */}
      <nav className="relative z-20 flex items-center justify-between px-8 lg:px-16 py-6">
        {/* Espaço vazio esquerda para balancear */}
        <div className="flex-1" />

        {/* Logo centralizada */}
        <AnimatedSection direction="none" delay={0} className="flex-1 flex justify-center">
          <Image
            src="/images/logo-ecohos.png"
            alt="ECOHOS Logo"
            width={180}
            height={52}
            className="object-contain"
            priority
          />
        </AnimatedSection>

        {/* Direita: redes sociais + CTA */}
        <AnimatedSection direction="right" delay={0.1} className="flex-1 flex justify-end">
          <div className="flex items-center gap-6">
            <a href="#" className="text-[#a0a0a0] hover:text-[#a8ff3e] transition-colors" aria-label="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a href="#" className="text-[#a0a0a0] hover:text-[#a8ff3e] transition-colors" aria-label="LinkedIn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <CtaButton label="Participar" size="sm" />
          </div>
        </AnimatedSection>
      </nav>

      {/* Hero content */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="w-full max-w-7xl mx-auto px-8 lg:px-16 py-12 lg:py-0">
          <div className="grid lg:grid-cols-[45%_55%] gap-0 items-center">
            {/* Left: Text */}
            <div className="space-y-8 min-w-0">
              <AnimatedSection direction="up" delay={0.1}>
                <div className="section-badge">
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-[#a8ff3e] inline-block"
                    style={{ boxShadow: "0 0 6px #a8ff3e" }}
                  />
                  O Desenvolvimento de Pessoas através de Desafios
                </div>
              </AnimatedSection>

              <AnimatedSection direction="up" delay={0.2}>
                <h1>
                  <div className="relative w-full max-w-[520px] h-[90px]">
                    <Image
                      src="/moviment-ecohos.png"
                      alt="MOVIMENTO ECOHOS"
                      fill
                      className="object-contain object-left"
                      priority
                      style={{ filter: "drop-shadow(0 0 24px rgba(168,255,62,0.25))" }}
                    />
                  </div>
                </h1>
              </AnimatedSection>

              <AnimatedSection direction="up" delay={0.3}>
                <p className="text-[#c8c8c8] text-xl leading-[1.75] max-w-lg font-light">
                  O Movimento ECOHOS conecta{" "}
                  <span className="text-white font-semibold">especialistas</span>,{" "}
                  <span className="text-white font-semibold">gestores públicos</span> e{" "}
                  <span className="text-white font-semibold">startups</span> para transformar
                  desafios da saúde pública em soluções tecnológicas que melhorem o
                  atendimento à população.
                </p>
              </AnimatedSection>

              <AnimatedSection direction="up" delay={0.4}>
                <CtaButton size="lg" />
              </AnimatedSection>

              {/* Stats row */}
              <AnimatedSection direction="up" delay={0.5}>
                <div className="flex items-center gap-10 pt-4">
                  <div>
                    <div className="text-white font-black text-4xl leading-none">3</div>
                    <div className="text-[#666] text-xs uppercase tracking-widest mt-1">
                      Forças Unidas
                    </div>
                  </div>
                  <div className="w-px h-12 bg-[#222]" />
                  <div>
                    <div className="text-[#a8ff3e] font-black text-4xl leading-none text-glow">78</div>
                    <div className="text-[#666] text-xs uppercase tracking-widest mt-1">
                      Secretarias
                    </div>
                  </div>
                  <div className="w-px h-12 bg-[#222]" />
                  <div>
                    <div className="text-white font-black text-4xl leading-none">ES</div>
                    <div className="text-[#666] text-xs uppercase tracking-widest mt-1">
                      Espírito Santo
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Right: Visual — pushed further right with padding */}
            <AnimatedSection direction="right" delay={0.3} className="relative hidden lg:block">
              <div className="relative w-full aspect-square max-w-[520px] ml-auto mr-[-2rem]">
                {/* Decorative rings */}
                <div
                  className="absolute inset-0 rounded-full border border-[#a8ff3e]/10"
                  style={{ transform: "scale(1.05)" }}
                />
                <div
                  className="absolute inset-0 rounded-full border border-[#a8ff3e]/06"
                  style={{ transform: "scale(1.15)" }}
                />
                <div
                  className="absolute inset-0 rounded-full border border-[#a8ff3e]/03"
                  style={{ transform: "scale(1.28)" }}
                />

                {/* Center glow */}
                <div
                  className="absolute inset-1/4 rounded-full"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(168,255,62,0.1) 0%, transparent 70%)",
                  }}
                />

                {/* Brain image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-4/5 h-4/5">
                    <Image
                      src="/images/lp-hero.png"
                      alt="Brain circuit visualization"
                      fill
                      className="object-contain"
                      style={{ filter: "drop-shadow(0 0 40px rgba(168,255,62,0.3))" }}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = "none";
                      }}
                    />
                    {/* Fallback SVG pattern */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-20">
                      <HeroBrainSVG />
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 gradient-overlay-bottom pointer-events-none" />

      {/* Scroll indicator */}
      <AnimatedSection direction="up" delay={1} className="relative z-10 pb-10 flex justify-center">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 cursor-pointer opacity-40 hover:opacity-80 transition-opacity"
        >
          <span className="text-xs text-[#a0a0a0] uppercase tracking-widest">Scroll</span>
          <svg width="16" height="24" viewBox="0 0 16 24" fill="none">
            <rect x="1" y="1" width="14" height="22" rx="7" stroke="#a8ff3e" strokeWidth="1.5" />
            <circle cx="8" cy="8" r="2" fill="#a8ff3e" />
          </svg>
        </motion.div>
      </AnimatedSection>
    </section>
  );
}

function HeroBrainSVG() {
  return (
    <svg viewBox="0 0 400 400" className="w-full h-full" fill="none">
      <circle cx="200" cy="200" r="150" stroke="#a8ff3e" strokeWidth="0.5" strokeDasharray="4 8" />
      <circle cx="200" cy="200" r="100" stroke="#a8ff3e" strokeWidth="0.5" strokeDasharray="2 6" />
      <circle cx="200" cy="200" r="50" stroke="#a8ff3e" strokeWidth="1" />
      {/* Circuit lines */}
      <path d="M200 50 L200 150 M200 250 L200 350" stroke="#a8ff3e" strokeWidth="0.8" />
      <path d="M50 200 L150 200 M250 200 L350 200" stroke="#a8ff3e" strokeWidth="0.8" />
      <path d="M100 100 L155 155 M245 245 L300 300" stroke="#a8ff3e" strokeWidth="0.5" />
      <path d="M300 100 L245 155 M155 245 L100 300" stroke="#a8ff3e" strokeWidth="0.5" />
      {/* Nodes */}
      {[
        [200, 50], [200, 350], [50, 200], [350, 200],
        [100, 100], [300, 100], [100, 300], [300, 300],
      ].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="4" fill="#a8ff3e" opacity="0.6" />
      ))}
      <circle cx="200" cy="200" r="8" fill="#a8ff3e" opacity="0.8" />
    </svg>
  );
}
