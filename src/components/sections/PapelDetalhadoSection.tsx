"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";
import CtaButton from "@/components/ui/CtaButton";

interface PapelDetalhadoProps {
  id: string;
  tag: string;
  tagline: string;
  title: string;
  description: string;
  intro: string;
  participants: string[];
  tools: string[];
  imageSrc: string;
  imageAlt: string;
  reversed?: boolean;
  accent?: string;
}

export function PapelDetalhadoSection({
  id,
  tag,
  tagline,
  title,
  description,
  intro,
  participants,
  tools,
  imageSrc,
  imageAlt,
  reversed = false,
  accent = "#a8ff3e",
}: PapelDetalhadoProps) {
  const dir = reversed ? "right" : "left";

  const textCol = (
    <div className="flex flex-col justify-center gap-7">

      {/* Badge */}
      <AnimatedSection direction={dir} delay={0.1}>
        <div className="section-badge w-fit">{tag}</div>
      </AnimatedSection>

      {/* Tagline — destaque menor, apenas accent color na primeira linha */}
      <AnimatedSection direction={dir} delay={0.18}>
        <p
          className="font-black leading-[1.1] uppercase"
          style={{
            fontFamily: "var(--font-space)",
            fontSize: "clamp(1.3rem, 2.2vw, 1.75rem)",
          }}
        >
          <span style={{ color: accent }}>{tagline.split(" ").slice(0, 3).join(" ")}</span>{" "}
          <span className="text-white opacity-80">{tagline.split(" ").slice(3).join(" ")}</span>
        </p>
      </AnimatedSection>

      {/* Separator */}
      <AnimatedSection direction={dir} delay={0.22}>
        <div className="h-px w-12" style={{ background: accent, opacity: 0.5 }} />
      </AnimatedSection>

      {/* Intro — pergunta em destaque */}
      <AnimatedSection direction={dir} delay={0.26}>
        <p
          className="text-white font-semibold text-lg leading-relaxed"
          style={{ fontFamily: "var(--font-space)" }}
        >
          {intro}
        </p>
      </AnimatedSection>

      {/* Description */}
      <AnimatedSection direction={dir} delay={0.32}>
        <p className="text-[#909090] text-[15px] leading-[1.8]">{description}</p>
      </AnimatedSection>

      {/* Two-column lists — em cards */}
      <AnimatedSection direction={dir} delay={0.38}>
        <div className="grid sm:grid-cols-2 gap-4">
          {/* Quem Participa */}
          <div
            className="rounded-xl p-5"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: `1px solid ${accent}18`,
            }}
          >
            <h4
              className="text-xs font-bold uppercase tracking-widest mb-4"
              style={{ color: accent }}
            >
              Quem Participa
            </h4>
            <ul className="space-y-2.5">
              {participants.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-[#b0b0b0] text-sm leading-snug">
                  <span
                    className="mt-[5px] w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ background: accent, boxShadow: `0 0 6px ${accent}80` }}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Ferramentas */}
          <div
            className="rounded-xl p-5"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: `1px solid ${accent}18`,
            }}
          >
            <h4
              className="text-xs font-bold uppercase tracking-widest mb-4"
              style={{ color: accent }}
            >
              Principais Ferramentas
            </h4>
            <ul className="space-y-2.5">
              {tools.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-[#b0b0b0] text-sm leading-snug">
                  <span
                    className="mt-[5px] w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ background: accent, boxShadow: `0 0 6px ${accent}80` }}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection direction={dir} delay={0.46}>
        <CtaButton />
      </AnimatedSection>
    </div>
  );

  const imageCol = (
    <AnimatedSection direction={reversed ? "left" : "right"} delay={0.15}>
      <div className="relative w-full aspect-[3/4] max-w-[480px] mx-auto">
        {/* Outer glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse at center, ${accent}15 0%, transparent 68%)`,
            transform: "scale(1.3)",
          }}
        />

        {/* Image card */}
        <div
          className="relative w-full h-full rounded-2xl overflow-hidden"
          style={{ border: `1px solid ${accent}25` }}
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover object-center"
            style={{ filter: `brightness(1.55) contrast(1.05)` }}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = "none";
            }}
          />
          {/* Vinheta lateral para fundir com o fundo */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: reversed
                ? `linear-gradient(to right, rgba(10,10,10,0.5) 0%, transparent 30%, transparent 70%, rgba(10,10,10,0.2) 100%), linear-gradient(to top, rgba(10,10,10,0.4) 0%, transparent 30%)`
                : `linear-gradient(to left, rgba(10,10,10,0.5) 0%, transparent 30%, transparent 70%, rgba(10,10,10,0.2) 100%), linear-gradient(to top, rgba(10,10,10,0.4) 0%, transparent 30%)`,
            }}
          />
          {/* Image fallback */}
          <div className="absolute inset-0 flex items-center justify-center">
            <RobotPlaceholder accent={accent} />
          </div>
        </div>

        {/* Tag badge no canto */}
        <div
          className={`absolute bottom-5 ${reversed ? "right-5" : "left-5"} px-4 py-2 rounded-lg backdrop-blur-sm`}
          style={{
            background: "rgba(8,8,8,0.75)",
            border: `1px solid ${accent}30`,
          }}
        >
          <span className="text-xs font-bold uppercase tracking-widest" style={{ color: accent }}>
            {tag}
          </span>
        </div>
      </div>
    </AnimatedSection>
  );

  const bgStyle = reversed
    ? "linear-gradient(160deg, #080c08 0%, #090d09 50%, #07090a 100%)"
    : "linear-gradient(160deg, #080808 0%, #0b0b10 50%, #080808 100%)";

  return (
    <section
      id={id}
      className="relative w-full py-32 overflow-hidden"
      style={{ background: bgStyle }}
    >
      <div className="sep-line-bright absolute top-0 left-0 right-0" />

      {/* Diagonal lines sutis */}
      <div className="absolute inset-0 diagonal-lines pointer-events-none opacity-60" />

      {/* Glow lateral forte */}
      <div
        className={`absolute ${reversed ? "right-[-100px]" : "left-[-100px]"} top-1/2 -translate-y-1/2 w-[600px] h-[700px] pointer-events-none`}
        style={{
          background: reversed
            ? `radial-gradient(ellipse at right, ${accent}10 0%, transparent 65%)`
            : `radial-gradient(ellipse at left, ${accent}10 0%, transparent 65%)`,
        }}
      />

      {/* Watermark tag */}
      <div
        className={`absolute ${reversed ? "left-[-20px]" : "right-[-20px]"} top-1/2 -translate-y-1/2 font-black pointer-events-none select-none opacity-100`}
        style={{
          fontSize: "clamp(10rem, 18vw, 16rem)",
          lineHeight: 1,
          color: "transparent",
          WebkitTextStroke: `1px ${accent}07`,
          fontFamily: "var(--font-space)",
          writingMode: "vertical-lr",
          letterSpacing: "-0.05em",
        }}
      >
        {id.slice(0, 3).toUpperCase()}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 lg:px-16">
        <div
          className={`grid lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_480px] gap-12 xl:gap-20 items-center ${reversed ? "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1 lg:grid-cols-[420px_1fr] xl:grid-cols-[480px_1fr]" : ""}`}
        >
          {textCol}
          {imageCol}
        </div>
      </div>

      <div className="sep-line absolute bottom-0 left-0 right-0" />
    </section>
  );
}

function RobotPlaceholder({ accent }: { accent: string }) {
  return (
    <div className="opacity-10 w-48 h-64">
      <svg viewBox="0 0 200 280" fill="none" className="w-full h-full">
        {/* Robot head */}
        <rect x="60" y="40" width="80" height="70" rx="8" fill={accent} opacity="0.3" stroke={accent} strokeWidth="2" />
        <circle cx="85" cy="75" r="10" fill={accent} opacity="0.5" />
        <circle cx="115" cy="75" r="10" fill={accent} opacity="0.5" />
        <rect x="80" y="95" width="40" height="6" rx="3" fill={accent} opacity="0.4" />
        {/* Neck */}
        <rect x="90" y="110" width="20" height="20" fill={accent} opacity="0.3" />
        {/* Body */}
        <rect x="50" y="130" width="100" height="90" rx="10" fill={accent} opacity="0.15" stroke={accent} strokeWidth="2" />
        {/* Chest panel */}
        <rect x="70" y="150" width="60" height="50" rx="5" fill={accent} opacity="0.1" stroke={accent} strokeWidth="1" />
        <circle cx="100" cy="175" r="12" fill={accent} opacity="0.2" stroke={accent} strokeWidth="1" />
        {/* Arms */}
        <rect x="20" y="135" width="25" height="70" rx="12" fill={accent} opacity="0.15" stroke={accent} strokeWidth="1.5" />
        <rect x="155" y="135" width="25" height="70" rx="12" fill={accent} opacity="0.15" stroke={accent} strokeWidth="1.5" />
        {/* Legs */}
        <rect x="60" y="222" width="30" height="50" rx="8" fill={accent} opacity="0.15" stroke={accent} strokeWidth="1.5" />
        <rect x="110" y="222" width="30" height="50" rx="8" fill={accent} opacity="0.15" stroke={accent} strokeWidth="1.5" />
      </svg>
    </div>
  );
}

// ─── Pre-configured instances ────────────────────────────────────────────────

export function ArquitetosSection() {
  return (
    <PapelDetalhadoSection
      id="arquitetos"
      tag="Arquitetos do Problema"
      tagline="OS PROBLEMAS DA SAÚDE PÚBLICA PRECISAM SER BEM COMPREENDIDOS ANTES DE SEREM RESOLVIDOS."
      title="Arquitetos do Problema"
      intro="Você é educador, especialista ou mentor que ajuda equipes a identificar e estruturar problemas complexos?"
      description="O Movimento ECOHOS busca profissionais capazes de conduzir gestores públicos na identificação dos principais desafios enfrentados pela população nos serviços de saúde. Utilizando metodologias de inovação e inteligência coletiva, esses especialistas ajudam a transformar problemas do cotidiano da gestão pública em desafios estruturados, abrindo caminho para o desenvolvimento de soluções tecnológicas que podem melhorar a vida das pessoas."
      participants={[
        "Professores e educadores",
        "Especialistas em inovação aberta",
        "Facilitadores de metodologias",
        "Mentores de projetos",
      ]}
      tools={[
        "Design Thinking",
        "Sprint de Inovação",
        "Gestão Ágil",
        "Análise SWOT",
        "Mapeamento de Processos",
        "Jornada do Usuário",
      ]}
      imageSrc="/images/robo1.png"
      imageAlt="Arquiteto do problema — especialista em inovação"
      reversed={false}
    />
  );
}

export function EstrategistasSection() {
  return (
    <PapelDetalhadoSection
      id="estrategistas"
      tag="Estrategistas do Desafio"
      tagline="OS PROBLEMAS IDENTIFICADOS PRECISAM SER TRANSFORMADOS EM DESAFIOS CLAROS PARA GERAR SOLUÇÕES."
      title="Estrategistas do Desafio"
      intro="Você é gestor público e participa das decisões que definem prioridades e projetos da sua secretaria?"
      description="O Movimento ECOHOS busca gestores públicos capazes de analisar os problemas identificados e definir quais desafios devem ser priorizados para melhorar os serviços de saúde oferecidos à população. A partir de processos estruturados de análise e decisão, esses profissionais transformam problemas reais da gestão pública em desafios de inovação, abrindo caminho para que startups e empreendedores desenvolvam soluções tecnológicas."
      participants={[
        "Secretários municipais de saúde",
        "Subsecretários e diretores de área",
        "Gestores de programas públicos",
        "Coordenadores técnicos",
        "Lideranças da gestão pública",
      ]}
      tools={[
        "Matriz de Priorização de Problemas",
        "Análise de Impacto à População",
        "Análise de Viabilidade Técnica",
        "Planejamento Estratégico",
        "Definição de Desafios de Inovação",
        "Estruturação de Projetos Públicos",
      ]}
      imageSrc="/images/robo2.png"
      imageAlt="Estrategista do desafio — gestor público"
      reversed={true}
    />
  );
}

export function DesenvolvedoresSection() {
  return (
    <PapelDetalhadoSection
      id="desenvolvedores"
      tag="Desenvolvedores da Solução"
      tagline="OS DESAFIOS DA SAÚDE PÚBLICA PRECISAM DE SOLUÇÕES INOVADORAS CAPAZES DE GERAR IMPACTO REAL NA VIDA DAS PESSOAS."
      title="Desenvolvedores da Solução"
      intro="Você é empreendedor, fundador de startup ou especialista em tecnologia que desenvolve soluções digitais para resolver problemas reais?"
      description="O Movimento ECOHOS busca startups, empreendedores e empresas de base tecnológica capazes de desenvolver soluções inovadoras para enfrentar os desafios apresentados pelos gestores públicos. A partir dos desafios definidos pelas secretarias de saúde, esses profissionais utilizam tecnologia, criatividade e métodos ágeis para criar produtos, plataformas e serviços digitais que possam melhorar o atendimento à população."
      participants={[
        "Startups de tecnologia",
        "Empreendedores de base tecnológica",
        "Desenvolvedores de soluções digitais",
        "Empresas de inovação em saúde (HealthTechs)",
        "Especialistas em IA e dados",
      ]}
      tools={[
        "Desenvolvimento Ágil",
        "Prototipagem",
        "MVP – Produto Mínimo Viável",
        "Testes em ambiente real",
        "Inteligência Artificial e dados",
        "Desenvolvimento de plataformas",
      ]}
      imageSrc="/images/robo3.png"
      imageAlt="Desenvolvedor de solução — startup healthtech"
      reversed={false}
    />
  );
}
