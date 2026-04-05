"use client";

import { useEffect, useRef, useState } from "react";
import { motion, animate } from "framer-motion";
import Image from "next/image";
import CtaButton from "@/components/ui/CtaButton";

/* ── Typewriter ─────────────────────────────────────────────── */
const WORDS = ["especialistas", "gestores públicos", "startups"];

function useTypewriter(words: string[], speed = 75, pause = 2000) {
  const [display, setDisplay] = useState(words[0]);
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(words[0].length);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIdx];
    let t: ReturnType<typeof setTimeout>;
    if (!deleting && charIdx < word.length) {
      t = setTimeout(() => setCharIdx((c) => c + 1), speed);
    } else if (!deleting && charIdx === word.length) {
      t = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIdx > 0) {
      t = setTimeout(() => setCharIdx((c) => c - 1), speed / 2);
    } else {
      setDeleting(false);
      setWordIdx((i) => (i + 1) % words.length);
    }
    return () => clearTimeout(t);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  useEffect(() => {
    setDisplay(words[wordIdx].slice(0, charIdx));
  }, [charIdx, wordIdx, words]);

  return display;
}

/* ── CountUp ────────────────────────────────────────────────── */
function CountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const ctrl = animate(0, to, {
          duration: 2,
          ease: "easeOut",
          onUpdate: (v) => setVal(Math.round(v)),
        });
        return () => ctrl.stop();
      }
    });
    obs.observe(el);
    return () => obs.disconnect();
  }, [to]);
  return <span ref={ref}>{val}{suffix}</span>;
}

/* ── Hero ───────────────────────────────────────────────────── */
export default function HeroSection() {
  const typed = useTypewriter(WORDS);

  return (
    <section
      className="relative w-full flex flex-col overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #080808 0%, #0a0f05 50%, #080808 100%)",
        minHeight: "92vh",
      }}
    >
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />

      {/* Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center top, rgba(168,255,62,0.07) 0%, transparent 65%)" }}
      />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at bottom left, rgba(168,255,62,0.04) 0%, transparent 60%)" }}
      />

      {/* Navbar fixo */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 lg:px-16 py-3"
        style={{
          background: "rgba(8,8,8,0.7)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
          <Image src="/images/logo-ecohos.png" alt="ECOHOS Logo" width={120} height={36} className="object-contain" priority />
          <div className="flex items-center gap-5">
            <a href="#" className="text-[#666] hover:text-[#a8ff3e] transition-colors" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a href="#" className="text-[#666] hover:text-[#a8ff3e] transition-colors" aria-label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <CtaButton label="Participar" size="sm" href="/cadastro" />
          </div>
      </motion.nav>

      {/* Hero content */}
      <div className="relative z-10 flex-1 flex items-center justify-center">
        <div className="w-full max-w-3xl mx-auto px-8 flex flex-col items-center text-center gap-6 py-12">

          {/* Content */}
          <div className="flex flex-col items-center text-center gap-6">

            <motion.div
              className="section-badge"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#a8ff3e] inline-block" style={{ boxShadow: "0 0 6px #a8ff3e" }} />
              Inovação em Saúde Pública · Espírito Santo
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <Image
                src="/images/moviment-ecohos.png"
                alt="PROGRAMA SECRETÁRIO INOVADOR"
                width={440}
                height={76}
                className="w-full max-w-[440px] h-auto"
                priority
                style={{ filter: "drop-shadow(0 0 32px rgba(168,255,62,0.3))" }}
              />
            </motion.div>

            <motion.p
              className="text-lg text-[#b0b0b0] font-light leading-relaxed max-w-md"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
            >
              Conectando{" "}
              <span className="font-semibold">
                <span className="text-[#a8ff3e]" style={{ textShadow: "0 0 16px rgba(168,255,62,0.4)" }}>
                  {typed}
                </span>
                <motion.span
                  className="inline-block w-[2px] h-[1em] bg-[#a8ff3e] ml-[2px] align-middle"
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.6, repeat: Infinity }}
                />
              </span>{" "}
              para transformar desafios da saúde pública em soluções reais.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <CtaButton size="lg" />
            </motion.div>

            <motion.div
              className="flex items-center justify-center gap-8 pt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              {[
                { value: 3, suffix: "", label: "Forças Unidas", green: false },
                { value: 78, suffix: "", label: "Secretarias", green: true },
                { value: 1, suffix: " Estado", label: "Espírito Santo", green: false },
              ].map((s, i) => (
                <div key={i} className="flex items-center gap-8">
                  {i > 0 && <div className="w-px h-10 bg-[#1e1e1e]" />}
                  <div>
                    <div
                      className={`font-black text-3xl leading-none tabular-nums ${s.green ? "text-[#a8ff3e]" : "text-white"}`}
                      style={s.green ? { textShadow: "0 0 20px rgba(168,255,62,0.4)" } : {}}
                    >
                      <CountUp to={s.value} suffix={s.suffix} />
                    </div>
                    <div className="text-[#555] text-[10px] uppercase tracking-widest mt-1">{s.label}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-36 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, #080808)" }}
      />

      {/* Scroll indicator */}
      <motion.div
        className="relative z-10 pb-8 flex justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
      >
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 opacity-35 hover:opacity-70 transition-opacity cursor-pointer"
        >
          <span className="text-[10px] text-[#666] uppercase tracking-[0.2em]">Scroll</span>
          <svg width="14" height="22" viewBox="0 0 14 22" fill="none">
            <rect x="1" y="1" width="12" height="20" rx="6" stroke="#a8ff3e" strokeWidth="1.2" />
            <motion.circle
              cx="7" cy="7" r="2" fill="#a8ff3e"
              animate={{ cy: [7, 13, 7] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
