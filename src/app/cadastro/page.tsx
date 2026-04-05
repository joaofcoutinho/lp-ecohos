"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";

type Forca = "arquiteto" | "gestor" | "startup" | "";

interface FormData {
  nome: string;
  email: string;
  telefone: string;
  cidadeEstado: string;
  cargo: string;
  forca: Forca;
  contribuicao: string;
  areaAtuacao: string;
  experiencia: string;
  interesses: string[];
  compromisso: string;
}

const INTERESSES = [
  "Participar do Programa Secretário Inovador",
  "Desenvolver projetos com o ECOHOS",
  "Conectar com gestores públicos",
  "Acompanhar novidades",
];

const FORCAS = [
  {
    id: "arquiteto" as Forca,
    titulo: "Arquiteto do Problema",
    descricao: "Educadores / Especialistas / Mentores",
    icon: "🧠",
  },
  {
    id: "gestor" as Forca,
    titulo: "Estrategista do Desafio",
    descricao: "Gestores Públicos",
    icon: "🏛️",
  },
  {
    id: "startup" as Forca,
    titulo: "Desenvolvedor da Solução",
    descricao: "Startups / Empresas",
    icon: "🚀",
  },
];

const forcaLabel: Record<string, string> = {
  arquiteto: "ARQUITETO DO PROBLEMA",
  gestor: "GESTOR PÚBLICO",
  startup: "STARTUP / EMPRESA",
};

export default function CadastroPage() {
  const [form, setForm] = useState<FormData>({
    nome: "",
    email: "",
    telefone: "",
    cidadeEstado: "",
    cargo: "",
    forca: "",
    contribuicao: "",
    areaAtuacao: "",
    experiencia: "",
    interesses: [],
    compromisso: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const set = (key: keyof FormData, value: string | string[]) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const toggleInteresse = (item: string) => {
    setForm((prev) => ({
      ...prev,
      interesses: prev.interesses.includes(item)
        ? prev.interesses.filter((i) => i !== item)
        : [...prev.interesses, item],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return <SuccessScreen />;
  }

  return (
    <div
      className="min-h-screen w-full relative overflow-x-hidden"
      style={{ background: "linear-gradient(160deg, #080808 0%, #0a0f05 50%, #080808 100%)" }}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at top right, rgba(168,255,62,0.06) 0%, transparent 60%)" }}
      />
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at bottom left, rgba(168,255,62,0.04) 0%, transparent 60%)" }}
      />

      <div className="relative z-10 max-w-2xl mx-auto px-6 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#666] hover:text-[#a8ff3e] transition-colors text-sm mb-8"
          >
            <ArrowLeft size={14} />
            Voltar ao site
          </Link>

          <div className="flex justify-center mb-8">
            <Image
              src="/images/logo-ecohos.png"
              alt="ECOHOS Logo"
              width={140}
              height={40}
              className="object-contain"
            />
          </div>

          <div className="text-center">
            <div className="section-badge mx-auto w-fit mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#a8ff3e] inline-block" style={{ boxShadow: "0 0 6px #a8ff3e" }} />
              Cadastro
            </div>
            <h1
              className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-3"
              style={{ fontFamily: "var(--font-space), sans-serif" }}
            >
              Faça parte do Movimento
            </h1>
            <p className="text-[#a0a0a0] text-base">
              Preencha o formulário abaixo e entre para o ECOHOS.
            </p>
          </div>
        </motion.div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-8"
        >
          {/* ── 1. Identificação básica ── */}
          <FormCard step="01" title="Identificação básica">
            <div className="space-y-4">
              <Field label="Nome completo" required>
                <input
                  type="text"
                  required
                  placeholder="Seu nome completo"
                  value={form.nome}
                  onChange={(e) => set("nome", e.target.value)}
                  className="form-input"
                />
              </Field>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Field label="E-mail" required>
                  <input
                    type="email"
                    required
                    placeholder="seu@email.com"
                    value={form.email}
                    onChange={(e) => set("email", e.target.value)}
                    className="form-input"
                  />
                </Field>
                <Field label="Telefone (WhatsApp)" required>
                  <input
                    type="tel"
                    required
                    placeholder="(27) 99999-9999"
                    value={form.telefone}
                    onChange={(e) => set("telefone", e.target.value)}
                    className="form-input"
                  />
                </Field>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Field label="Cidade / Estado" required>
                  <input
                    type="text"
                    required
                    placeholder="Vitória, ES"
                    value={form.cidadeEstado}
                    onChange={(e) => set("cidadeEstado", e.target.value)}
                    className="form-input"
                  />
                </Field>
                <Field label="Cargo atual" required>
                  <input
                    type="text"
                    required
                    placeholder="Seu cargo"
                    value={form.cargo}
                    onChange={(e) => set("cargo", e.target.value)}
                    className="form-input"
                  />
                </Field>
              </div>
            </div>
          </FormCard>

          {/* ── 2. Qual das três forças ── */}
          <FormCard step="02" title="Qual das três forças você representa?" required>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {FORCAS.map((f) => (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => set("forca", f.id)}
                  className={`forca-card ${form.forca === f.id ? "forca-card-active" : ""}`}
                >
                  <span className="text-2xl mb-2 block">{f.icon}</span>
                  <span className="font-bold text-sm text-white block leading-tight mb-1">
                    {f.titulo}
                  </span>
                  <span className="text-[11px] text-[#666] block leading-snug">
                    {f.descricao}
                  </span>
                  {form.forca === f.id && (
                    <span
                      className="absolute top-2 right-2 w-2 h-2 rounded-full bg-[#a8ff3e]"
                      style={{ boxShadow: "0 0 6px #a8ff3e" }}
                    />
                  )}
                </button>
              ))}
            </div>
          </FormCard>

          {/* ── 3. Sobre você ── */}
          <FormCard step="03" title="Sobre você">
            <Field label="Descreva como você pode contribuir para transformar a saúde pública" required>
              <textarea
                required
                rows={4}
                placeholder="Compartilhe sua experiência, visão e como pretende contribuir com o movimento..."
                value={form.contribuicao}
                onChange={(e) => set("contribuicao", e.target.value)}
                className="form-input resize-none"
              />
            </Field>
          </FormCard>

          {/* ── 4. Detalhes por força (condicional) ── */}
          <AnimatePresence>
            {form.forca && (
              <motion.div
                key="detalhe"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.35 }}
              >
                <FormCard step="04" title={`Informações: ${forcaLabel[form.forca]}`}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Field label="Área de atuação" required>
                      <input
                        type="text"
                        required={!!form.forca}
                        placeholder="Ex: Saúde pública, Tecnologia..."
                        value={form.areaAtuacao}
                        onChange={(e) => set("areaAtuacao", e.target.value)}
                        className="form-input"
                      />
                    </Field>
                    <Field label="Experiência com">
                      <input
                        type="text"
                        placeholder="Ex: Gestão de políticas, SUS, IA..."
                        value={form.experiencia}
                        onChange={(e) => set("experiencia", e.target.value)}
                        className="form-input"
                      />
                    </Field>
                  </div>
                </FormCard>
              </motion.div>
            )}
          </AnimatePresence>

          {/* ── 5. Interesse no Movimento ── */}
          <FormCard step={form.forca ? "05" : "04"} title="Interesse no Movimento">
            <p className="text-[#a0a0a0] text-sm mb-4">Você deseja: (pode marcar mais de uma)</p>
            <div className="space-y-3">
              {INTERESSES.map((item) => (
                <label key={item} className="checkbox-label group">
                  <input
                    type="checkbox"
                    checked={form.interesses.includes(item)}
                    onChange={() => toggleInteresse(item)}
                    className="sr-only"
                  />
                  <span className={`checkbox-box ${form.interesses.includes(item) ? "checkbox-box-active" : ""}`}>
                    {form.interesses.includes(item) && (
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M2 5l2.5 2.5L8 3" stroke="#080808" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </span>
                  <span className="text-[#c8c8c8] group-hover:text-white transition-colors text-sm">
                    {item}
                  </span>
                </label>
              ))}
            </div>
          </FormCard>

          {/* ── 6. Compromisso ── */}
          <FormCard step={form.forca ? "06" : "05"} title="Compromisso">
            <p className="text-[#a0a0a0] text-sm mb-4">
              Você está disposto a participar ativamente da construção de soluções para a saúde pública?
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              {[
                { value: "sim", label: "Sim, estou pronto!" },
                { value: "talvez", label: "Quero entender melhor primeiro" },
              ].map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => set("compromisso", opt.value)}
                  className={`compromisso-btn ${form.compromisso === opt.value ? "compromisso-btn-active" : ""}`}
                >
                  {form.compromisso === opt.value && (
                    <span
                      className="w-2 h-2 rounded-full bg-[#a8ff3e] flex-shrink-0"
                      style={{ boxShadow: "0 0 6px #a8ff3e" }}
                    />
                  )}
                  {opt.label}
                </button>
              ))}
            </div>
          </FormCard>

          {/* ── Submit ── */}
          <motion.button
            type="submit"
            className="btn-cta w-full justify-center text-[13px] py-5"
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
          >
            QUERO FAZER PARTE DO PROGRAMA SECRETÁRIO INOVADOR
            <ArrowRight size={15} strokeWidth={2.5} />
          </motion.button>

          <p className="text-center text-[#555] text-xs pb-8">
            Seus dados são tratados com sigilo e utilizados apenas para contato pelo time ECOHOS.
          </p>
        </motion.form>
      </div>

      <style jsx>{`
        .form-input {
          width: 100%;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 10px;
          padding: 12px 14px;
          color: #fff;
          font-size: 14px;
          outline: none;
          transition: border-color 0.2s, background 0.2s;
        }
        .form-input::placeholder {
          color: #555;
        }
        .form-input:focus {
          border-color: rgba(168, 255, 62, 0.4);
          background: rgba(168, 255, 62, 0.03);
        }
        .forca-card {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 20px 14px;
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.07);
          background: rgba(255, 255, 255, 0.03);
          cursor: pointer;
          transition: all 0.2s;
        }
        .forca-card:hover {
          border-color: rgba(168, 255, 62, 0.2);
          background: rgba(168, 255, 62, 0.03);
        }
        .forca-card-active {
          border-color: rgba(168, 255, 62, 0.5) !important;
          background: rgba(168, 255, 62, 0.07) !important;
          box-shadow: 0 0 20px rgba(168, 255, 62, 0.1);
        }
        .checkbox-label {
          display: flex;
          align-items: center;
          gap: 12px;
          cursor: pointer;
        }
        .checkbox-box {
          width: 20px;
          height: 20px;
          border-radius: 5px;
          border: 1px solid rgba(255, 255, 255, 0.15);
          background: rgba(255, 255, 255, 0.04);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: all 0.2s;
        }
        .checkbox-box-active {
          background: #a8ff3e;
          border-color: #a8ff3e;
          box-shadow: 0 0 10px rgba(168, 255, 62, 0.3);
        }
        .compromisso-btn {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 14px 18px;
          border-radius: 10px;
          border: 1px solid rgba(255, 255, 255, 0.07);
          background: rgba(255, 255, 255, 0.03);
          color: #a0a0a0;
          font-size: 13px;
          cursor: pointer;
          transition: all 0.2s;
        }
        .compromisso-btn:hover {
          border-color: rgba(168, 255, 62, 0.2);
          color: #fff;
        }
        .compromisso-btn-active {
          border-color: rgba(168, 255, 62, 0.5) !important;
          background: rgba(168, 255, 62, 0.07) !important;
          color: #fff !important;
          box-shadow: 0 0 15px rgba(168, 255, 62, 0.1);
        }
      `}</style>
    </div>
  );
}

function FormCard({
  step,
  title,
  required,
  children,
}: {
  step: string;
  title: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      style={{
        background: "rgba(255,255,255,0.02)",
        border: "1px solid rgba(255,255,255,0.07)",
        borderRadius: 16,
        padding: "28px 24px",
      }}
    >
      <div className="flex items-center gap-3 mb-5">
        <span
          className="text-[11px] font-black tracking-widest px-2 py-1 rounded"
          style={{ background: "rgba(168,255,62,0.1)", color: "#a8ff3e" }}
        >
          {step}
        </span>
        <h2 className="text-white font-bold text-base" style={{ fontFamily: "var(--font-space), sans-serif" }}>
          {title}
          {required && <span className="text-[#a8ff3e] ml-1">*</span>}
        </h2>
      </div>
      {children}
    </motion.div>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <label className="text-[#a0a0a0] text-xs uppercase tracking-wider block">
        {label}
        {required && <span className="text-[#a8ff3e] ml-1">*</span>}
      </label>
      {children}
    </div>
  );
}

function SuccessScreen() {
  return (
    <div
      className="min-h-screen w-full flex items-center justify-center"
      style={{ background: "linear-gradient(160deg, #080808 0%, #0a0f05 50%, #080808 100%)" }}
    >
      <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 text-center max-w-md px-6"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="flex justify-center mb-6"
        >
          <CheckCircle2 size={64} className="text-[#a8ff3e]" style={{ filter: "drop-shadow(0 0 20px rgba(168,255,62,0.5))" }} />
        </motion.div>
        <h2
          className="text-3xl font-semibold text-white mb-3"
          style={{ fontFamily: "var(--font-space), sans-serif" }}
        >
          Cadastro realizado!
        </h2>
        <p className="text-[#a0a0a0] mb-8 leading-relaxed">
          Bem-vindo ao Programa Secretário Inovador. Em breve nossa equipe entrará em contato com você.
        </p>
        <Link
          href="/"
          className="btn-cta inline-flex gap-2 text-[12px] px-8 py-4"
        >
          Voltar ao site
          <ArrowRight size={14} strokeWidth={2.5} />
        </Link>
      </motion.div>
    </div>
  );
}
