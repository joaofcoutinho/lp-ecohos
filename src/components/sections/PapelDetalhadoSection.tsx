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
          className="font-semibold leading-[1.1]"
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

  const bgStyle = reversed
    ? "linear-gradient(160deg, #080c08 0%, #090d09 50%, #07090a 100%)"
    : "linear-gradient(160deg, #080808 0%, #0b0b10 50%, #080808 100%)";

  return (
    <section
      id={id}
      className="relative w-full overflow-hidden flex flex-col lg:flex-row"
      style={{ background: bgStyle, minHeight: '700px' }}
    >
      <div className="sep-line-bright absolute top-0 left-0 right-0 z-10" />

      {/* Image side — full height */}
      <AnimatedSection direction={reversed ? "right" : "left"} delay={0.15} className={`relative w-full lg:w-1/2 min-h-[56vw] lg:min-h-0 ${reversed ? "lg:order-2" : "lg:order-1"}`}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover object-center"
          sizes="(max-width: 1024px) 100vw, 50vw"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = "none";
          }}
        />
        {/* Vinheta — no mobile escurece só embaixo, no desktop escurece lateral */}
        <div
          className="absolute inset-0 pointer-events-none z-10 hidden lg:block"
          style={{
            background: reversed
              ? `linear-gradient(to left, ${bgStyle.includes('080c08') ? '#080c08' : '#080808'} 0%, transparent 25%)`
              : `linear-gradient(to right, ${bgStyle.includes('080c08') ? '#080c08' : '#080808'} 0%, transparent 25%)`,
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none z-10 lg:hidden"
          style={{
            background: `linear-gradient(to top, ${bgStyle.includes('080c08') ? '#080c08' : '#080808'} 0%, transparent 40%)`,
          }}
        />
        {/* Tag badge — desktop only */}
        <div
          className="hidden lg:block absolute bottom-4 left-4 px-4 py-2 rounded-lg backdrop-blur-sm z-20"
          style={{ background: "rgba(8,8,8,0.8)", border: `1px solid ${accent}30` }}
        >
          <span className="text-xs font-bold uppercase tracking-widest" style={{ color: accent }}>
            {tag}
          </span>
        </div>
      </AnimatedSection>

      {/* Text side */}
      <div className={`relative w-full lg:w-1/2 flex items-center py-24 px-10 xl:px-20 z-10 ${reversed ? "lg:order-1" : "lg:order-2"}`}>
        {/* Diagonal lines */}
        <div className="absolute inset-0 diagonal-lines pointer-events-none opacity-60" />
        {/* Watermark */}
        <div
          className="absolute right-[-20px] top-1/2 -translate-y-1/2 font-black pointer-events-none select-none"
          style={{
            fontSize: "clamp(8rem, 14vw, 12rem)",
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
        <div className="relative z-10 w-full max-w-xl">
          {textCol}
        </div>
      </div>

      <div className="sep-line absolute bottom-0 left-0 right-0 z-10" />
    </section>
  );
}

// ─── Pre-configured instances ────────────────────────────────────────────────

export function ArquitetosSection() {
  return (
    <PapelDetalhadoSection
      id="arquitetos"
      tag="Especialistas em Diagnóstico"
      tagline="OS PROBLEMAS DA SAÚDE PÚBLICA PRECISAM SER BEM COMPREENDIDOS ANTES DE SEREM RESOLVIDOS."
      title="Especialistas em Diagnóstico"
      intro="Você é educador, especialista ou mentor que ajuda equipes a identificar e estruturar problemas complexos?"
      description="O Programa Secretário Inovador busca profissionais capazes de conduzir gestores públicos na identificação dos principais desafios enfrentados pela população nos serviços de saúde. Utilizando metodologias de inovação e inteligência coletiva, esses especialistas ajudam a transformar problemas do cotidiano da gestão pública em desafios estruturados, abrindo caminho para o desenvolvimento de soluções tecnológicas que podem melhorar a vida das pessoas."
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
      imageSrc="/especialista.png"
      imageAlt="Especialista em Diagnóstico"
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
      description="O Programa Secretário Inovador busca gestores públicos capazes de analisar os problemas identificados e definir quais desafios devem ser priorizados para melhorar os serviços de saúde oferecidos à população. A partir de processos estruturados de análise e decisão, esses profissionais transformam problemas reais da gestão pública em desafios de inovação, abrindo caminho para que startups e empreendedores desenvolvam soluções tecnológicas."
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
      imageSrc="/to.png"
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
      description="O Programa Secretário Inovador busca startups, empreendedores e empresas de base tecnológica capazes de desenvolver soluções inovadoras para enfrentar os desafios apresentados pelos gestores públicos. A partir dos desafios definidos pelas secretarias de saúde, esses profissionais utilizam tecnologia, criatividade e métodos ágeis para criar produtos, plataformas e serviços digitais que possam melhorar o atendimento à população."
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
      imageSrc="/solucao.png"
      imageAlt="Desenvolvedor de solução — startup healthtech"
      reversed={false}
    />
  );
}
