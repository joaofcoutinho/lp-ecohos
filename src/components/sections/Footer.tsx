"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative w-full py-12 border-t border-[#111]">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <Image
            src="/ecohos.png"
            alt="ECOHOS Logo"
            width={200}
            height={60}
            className="object-contain h-14 w-auto"
          />

          {/* Links */}
          <div className="flex items-center gap-8 text-[#555] text-sm">
            <a href="#proposito" className="hover:text-[#a8ff3e] transition-colors">
              Propósito
            </a>
            <a href="#tres-forcas" className="hover:text-[#a8ff3e] transition-colors">
              Três Forças
            </a>
            <a href="#encontros" className="hover:text-[#a8ff3e] transition-colors">
              Encontros
            </a>
            <a href="#incentivadores" className="hover:text-[#a8ff3e] transition-colors">
              Parceiros
            </a>
          </div>

          {/* Social */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="w-9 h-9 rounded-lg border border-[#222] flex items-center justify-center text-[#555] hover:text-[#a8ff3e] hover:border-[#a8ff3e]/40 transition-all"
              aria-label="Instagram"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a
              href="#"
              className="w-9 h-9 rounded-lg border border-[#222] flex items-center justify-center text-[#555] hover:text-[#a8ff3e] hover:border-[#a8ff3e]/40 transition-all"
              aria-label="LinkedIn"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </div>
        </div>

        <div className="sep-line mt-8 mb-6" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-[#666] text-xs">
            © 2026 Programa Secretário Inovador · Espírito Santo · Inovação na Saúde Pública
          </p>
          <p className="text-[#666] text-xs text-center md:text-right">
            R. Dom João Batista da Mota e Albuquerque, 11 — Ibes, Vila Velha - ES, 29104-045
          </p>
        </div>
      </div>
    </footer>
  );
}
