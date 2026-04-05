"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";

const PERFIS = [
  { value: "educador", label: "Educador", sub: "Especialista em Diagnóstico" },
  { value: "gestor", label: "Gestor Público", sub: "Secretário e Equipe" },
  { value: "startup", label: "Startup", sub: "Empresas Criativas" },
];

export default function IncentivadoresSection() {
  const [perfil, setPerfil] = useState("");
  const [checks, setChecks] = useState({ info: false, parte: false, divulgar: false });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState("");

  function toggleCheck(key: keyof typeof checks) {
    setChecks((prev) => ({ ...prev, [key]: !prev[key] }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setErro("");
    const form = e.currentTarget;
    const data = {
      nome: (form.elements.namedItem("nome") as HTMLInputElement).value,
      telefone: (form.elements.namedItem("telefone") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      formacao: (form.elements.namedItem("formacao") as HTMLInputElement).value,
      municipio: (form.elements.namedItem("municipio") as HTMLInputElement).value,
      perfil,
      info: checks.info,
      parte: checks.parte,
      divulgar: checks.divulgar,
    };
    try {
      const res = await fetch("/api/inscricao", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setErro("Erro ao enviar. Tente novamente.");
      }
    } catch {
      setErro("Erro de conexão. Tente novamente.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      id="incentivadores"
      className="relative w-full overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0d0b13 0%, #090810 40%, #080808 100%)" }}
    >
      <div className="absolute inset-0 bg-grid-sm opacity-40 pointer-events-none" />
      <div
        className="absolute top-0 right-0 w-[600px] h-[400px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at top right, rgba(120,60,255,0.06) 0%, transparent 65%)" }}
      />
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[400px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at bottom left, rgba(168,255,62,0.05) 0%, transparent 65%)" }}
      />

      {/* Fita full-width — topo da seção */}
      <AnimatedSection direction="up" delay={0}>
        <div
          className="relative w-full"
          style={{
            borderTop: "1px solid rgba(168,255,62,0.18)",
            borderBottom: "1px solid rgba(255,255,255,0.07)",
            background: "rgba(255,255,255,0.02)",
          }}
        >
          {/* Label — mobile: topo separado; desktop: inline */}
          <div
            className="px-6 py-3 lg:hidden"
            style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#444]" style={{ fontFamily: "var(--font-space)" }}>
              Parceiros e Apoiadores
            </span>
          </div>

          <div className="flex items-stretch">
            {/* Label desktop */}
            <div className="hidden lg:flex px-10 py-6 items-center flex-shrink-0"
              style={{ borderRight: "1px solid rgba(255,255,255,0.07)" }}
            >
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#444]" style={{ fontFamily: "var(--font-space)" }}>
                Parceiros e Apoiadores
              </span>
            </div>

            {/* Itens */}
            {["Governo", "Universidades", "Startups", "ICTs"].map((label, i) => (
              <motion.div
                key={i}
                className="flex-1 flex items-center justify-center px-4 py-5 lg:px-10 lg:py-6 cursor-default"
                style={{ borderRight: i < 3 ? "1px solid rgba(255,255,255,0.07)" : undefined }}
                whileHover={{ background: "rgba(168,255,62,0.06)" }}
                transition={{ duration: 0.2 }}
              >
                <span
                  className="font-semibold text-white tracking-wide text-xs lg:text-base whitespace-nowrap"
                  style={{ fontFamily: "var(--font-space)" }}
                >
                  {label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <div className="max-w-7xl mx-auto px-8 lg:px-16 pt-12 pb-24">

        {/* CTA final com formulário */}
        <AnimatedSection direction="up" delay={0.3}>
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #0f0d18 0%, #0a0a0f 50%, #0d100a 100%)" }} />
            <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 30% 50%, rgba(120,60,255,0.08) 0%, transparent 50%), radial-gradient(ellipse at 70% 50%, rgba(168,255,62,0.06) 0%, transparent 50%)" }} />
            <div className="absolute inset-0 rounded-3xl pointer-events-none" style={{ border: "1px solid rgba(168,255,62,0.18)", boxShadow: "inset 0 0 60px rgba(168,255,62,0.03)" }} />
            <div className="absolute inset-0 bg-grid-sm opacity-20 pointer-events-none" />
            <div className="absolute top-0 left-12 right-12 h-[2px] rounded-full" style={{ background: "linear-gradient(90deg, transparent, rgba(168,255,62,0.6), transparent)" }} />

            <div className="relative z-10 px-12 lg:px-20 py-16 lg:py-20 max-w-4xl mx-auto">
              {/* Título */}
              <div className="text-center mb-10">
                <div className="section-badge inline-flex mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#a8ff3e] inline-block" />
                  Programa Secretário Inovador
                </div>
                <h3 className="font-semibold text-white leading-tight" style={{ fontFamily: "var(--font-space)", fontSize: "clamp(1.8rem, 3vw, 2.8rem)" }}>
                  Faça parte do <span className="text-gradient">movimento</span>
                </h3>
              </div>

              {submitted ? (
                <motion.div
                  className="text-center py-12"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="text-5xl mb-4">✓</div>
                  <p className="text-[#a8ff3e] font-semibold text-xl mb-2">Inscrição enviada!</p>
                  <p className="text-[#777] text-sm">Em breve entraremos em contato.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Campos de texto */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    {[
                      { name: "nome", label: "Nome Completo", type: "text" },
                      { name: "telefone", label: "Telefone", type: "tel" },
                      { name: "email", label: "Email", type: "email" },
                      { name: "formacao", label: "Formação Atual", type: "text" },
                    ].map((field) => (
                      <div key={field.name}>
                        <label className="block text-xs font-semibold uppercase tracking-widest text-[#666] mb-2">
                          {field.label}
                        </label>
                        <input
                          type={field.type}
                          name={field.name}
                          required
                          className="w-full px-4 py-3 rounded-lg text-sm text-white outline-none transition-all"
                          style={{
                            background: "rgba(255,255,255,0.04)",
                            border: "1px solid rgba(255,255,255,0.1)",
                          }}
                          onFocus={(e) => (e.target.style.borderColor = "rgba(168,255,62,0.5)")}
                          onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                        />
                      </div>
                    ))}
                  </div>

                  {/* Município — full width */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-widest text-[#666] mb-2">
                      Município
                    </label>
                    <input
                      type="text"
                      name="municipio"
                      required
                      className="w-full px-4 py-3 rounded-lg text-sm text-white outline-none transition-all"
                      style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)" }}
                      onFocus={(e) => (e.target.style.borderColor = "rgba(168,255,62,0.5)")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                    />
                  </div>

                  {/* Sou */}
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-[#666] mb-3">Sou</p>
                    <div className="flex flex-col sm:grid sm:grid-cols-3 gap-3">
                      {PERFIS.map((p) => (
                        <button
                          key={p.value}
                          type="button"
                          onClick={() => setPerfil(p.value)}
                          className="flex sm:flex-col items-center sm:justify-center gap-3 sm:gap-0 px-4 py-3 sm:py-4 rounded-lg text-left sm:text-center transition-all"
                          style={{
                            background: perfil === p.value ? "rgba(168,255,62,0.12)" : "rgba(255,255,255,0.03)",
                            border: perfil === p.value ? "1px solid rgba(168,255,62,0.5)" : "1px solid rgba(255,255,255,0.08)",
                          }}
                        >
                          <div className="font-semibold text-sm flex-shrink-0" style={{ color: perfil === p.value ? "#a8ff3e" : "#fff" }}>
                            {p.label}
                          </div>
                          <div className="text-[11px] text-[#555] sm:mt-1">{p.sub}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Checkboxes */}
                  <div className="space-y-3 pt-2">
                    {[
                      { key: "info" as const, label: "Quero receber informações sobre o Programa Secretário Inovador" },
                      { key: "parte" as const, label: "Quero fazer parte do Programa Secretário Inovador" },
                      { key: "divulgar" as const, label: "Autorizo divulgar o meu nome no site do Programa Secretário Inovador" },
                    ].map((item) => (
                      <label key={item.key} className="flex items-start gap-3 cursor-pointer group">
                        <div
                          onClick={() => toggleCheck(item.key)}
                          className="mt-0.5 w-4 h-4 rounded flex-shrink-0 flex items-center justify-center transition-all"
                          style={{
                            background: checks[item.key] ? "#a8ff3e" : "transparent",
                            border: checks[item.key] ? "1px solid #a8ff3e" : "1px solid rgba(255,255,255,0.2)",
                          }}
                        >
                          {checks[item.key] && (
                            <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                              <path d="M1 4L3.5 6.5L9 1" stroke="#080808" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          )}
                        </div>
                        <span className="text-sm text-[#888] group-hover:text-[#aaa] transition-colors leading-snug">
                          {item.label}
                        </span>
                      </label>
                    ))}
                  </div>

                  {/* Submit */}
                  <div className="pt-2">
                    {erro && <p className="text-red-400 text-sm mb-3 text-center">{erro}</p>}
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-4 rounded-lg font-semibold text-sm tracking-wide transition-all disabled:opacity-60"
                      style={{
                        background: "#a8ff3e",
                        color: "#080808",
                        boxShadow: "0 0 24px rgba(168,255,62,0.3)",
                      }}
                    >
                      {loading ? "Enviando..." : "Enviar inscrição →"}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
