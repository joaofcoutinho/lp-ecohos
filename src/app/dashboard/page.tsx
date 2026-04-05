'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'

interface Lead {
  id: number
  nome: string
  telefone: string
  email: string
  formacao: string
  municipio: string
  perfil: string
  aceita_info: boolean
  quer_participar: boolean
  autoriza_divulgacao: boolean
  criado_em: string
}

const PERFIL_LABEL: Record<string, string> = {
  educador: 'Educador',
  gestor: 'Gestor Público',
  startup: 'Startup',
}

const PERFIL_COLOR: Record<string, string> = {
  educador: 'rgba(168,255,62,0.15)',
  gestor: 'rgba(62,168,255,0.15)',
  startup: 'rgba(255,168,62,0.15)',
}

const PERFIL_TEXT: Record<string, string> = {
  educador: '#a8ff3e',
  gestor: '#3ea8ff',
  startup: '#ffa83e',
}

export default function DashboardPage() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [user, setUser] = useState('')
  const [pass, setPass] = useState('')
  const [showPass, setShowPass] = useState(false)
  const [loginError, setLoginError] = useState('')
  const [leads, setLeads] = useState<Lead[]>([])
  const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState('')
  const [filterPerfil, setFilterPerfil] = useState('')

  const fetchLeads = useCallback(async () => {
    setLoading(true)
    const res = await fetch('/api/leads', {
      headers: { 'x-dashboard-auth': 'institutoecohos:admin123' },
    })
    const json = await res.json()
    if (json.ok) setLeads(json.data)
    setLoading(false)
  }, [])

  useEffect(() => {
    if (loggedIn) fetchLeads()
  }, [loggedIn, fetchLeads])

  function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    if (user === 'institutoecohos' && pass === 'admin123') {
      setLoggedIn(true)
      setLoginError('')
    } else {
      setLoginError('Usuário ou senha incorretos.')
    }
  }

  const filtered = leads.filter((l) => {
    const q = search.toLowerCase()
    const matchSearch =
      !q ||
      l.nome?.toLowerCase().includes(q) ||
      l.email?.toLowerCase().includes(q) ||
      l.municipio?.toLowerCase().includes(q)
    const matchPerfil = !filterPerfil || l.perfil === filterPerfil
    return matchSearch && matchPerfil
  })

  const stats = {
    total: leads.length,
    educador: leads.filter((l) => l.perfil === 'educador').length,
    gestor: leads.filter((l) => l.perfil === 'gestor').length,
    startup: leads.filter((l) => l.perfil === 'startup').length,
  }

  // ── Login ────────────────────────────────────────────────────────────────────
  if (!loggedIn) {
    return (
      <div
        className="min-h-screen flex items-center justify-center px-4"
        style={{ background: '#080808' }}
      >
        <div className="w-full max-w-sm">
          <div className="text-center mb-8">
            <Image src="/ecohos.png" alt="ECOHOS" width={160} height={48} className="h-12 w-auto mx-auto mb-6 object-contain" />
            <p className="text-[#555] text-sm">Acesso restrito · Dashboard de leads</p>
          </div>

          <form
            onSubmit={handleLogin}
            className="rounded-2xl p-8 space-y-5"
            style={{ background: '#0d0d0d', border: '1px solid rgba(255,255,255,0.07)' }}
          >
            <div>
              <label className="block text-xs font-semibold uppercase tracking-widest text-[#555] mb-2">Usuário</label>
              <input
                type="text"
                value={user}
                onChange={(e) => setUser(e.target.value)}
                required
                autoComplete="username"
                className="w-full px-4 py-3 rounded-lg text-sm text-white outline-none transition-all"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)' }}
                onFocus={(e) => (e.target.style.borderColor = 'rgba(168,255,62,0.5)')}
                onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')}
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-widest text-[#555] mb-2">Senha</label>
              <div className="relative">
                <input
                  type={showPass ? 'text' : 'password'}
                  value={pass}
                  onChange={(e) => setPass(e.target.value)}
                  required
                  autoComplete="current-password"
                  className="w-full px-4 py-3 pr-11 rounded-lg text-sm text-white outline-none transition-all"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)' }}
                  onFocus={(e) => (e.target.style.borderColor = 'rgba(168,255,62,0.5)')}
                  onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')}
                />
                <button
                  type="button"
                  onClick={() => setShowPass((v) => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#555] hover:text-[#a8ff3e] transition-colors"
                  tabIndex={-1}
                  aria-label={showPass ? 'Ocultar senha' : 'Mostrar senha'}
                >
                  {showPass ? (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
                      <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
                      <line x1="1" y1="1" x2="23" y2="23" />
                    </svg>
                  ) : (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {loginError && <p className="text-red-400 text-xs text-center">{loginError}</p>}

            <button
              type="submit"
              className="w-full py-3 rounded-lg font-semibold text-sm transition-all"
              style={{ background: '#a8ff3e', color: '#080808', boxShadow: '0 0 20px rgba(168,255,62,0.25)' }}
            >
              Entrar
            </button>
          </form>
        </div>
      </div>
    )
  }

  // ── Dashboard ────────────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen" style={{ background: '#080808', color: '#fff' }}>
      {/* Header */}
      <header
        className="sticky top-0 z-10 px-6 lg:px-10 py-4 flex items-center justify-between"
        style={{ background: 'rgba(8,8,8,0.9)', backdropFilter: 'blur(16px)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}
      >
        <div className="flex items-center gap-4">
          <Image src="/ecohos.png" alt="ECOHOS" width={120} height={36} className="h-9 w-auto object-contain" />
          <span className="text-[#333] text-sm hidden sm:block">/ Dashboard</span>
        </div>
        <button
          onClick={() => setLoggedIn(false)}
          className="text-xs text-[#555] hover:text-[#a8ff3e] transition-colors"
        >
          Sair
        </button>
      </header>

      <main className="max-w-7xl mx-auto px-6 lg:px-10 py-10">
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {[
            { label: 'Total de inscrições', value: stats.total, color: '#a8ff3e' },
            { label: 'Educadores', value: stats.educador, color: '#a8ff3e' },
            { label: 'Gestores Públicos', value: stats.gestor, color: '#3ea8ff' },
            { label: 'Startups', value: stats.startup, color: '#ffa83e' },
          ].map((s) => (
            <div
              key={s.label}
              className="rounded-xl p-5"
              style={{ background: '#0d0d0d', border: '1px solid rgba(255,255,255,0.06)' }}
            >
              <div className="text-3xl font-bold mb-1" style={{ color: s.color }}>
                {s.value}
              </div>
              <div className="text-xs text-[#555] uppercase tracking-widest">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Filtros */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <input
            type="text"
            placeholder="Buscar por nome, e-mail ou município..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 px-4 py-2.5 rounded-lg text-sm text-white outline-none transition-all"
            style={{ background: '#0d0d0d', border: '1px solid rgba(255,255,255,0.08)' }}
            onFocus={(e) => (e.target.style.borderColor = 'rgba(168,255,62,0.4)')}
            onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.08)')}
          />
          <select
            value={filterPerfil}
            onChange={(e) => setFilterPerfil(e.target.value)}
            className="px-4 py-2.5 rounded-lg text-sm text-white outline-none"
            style={{ background: '#0d0d0d', border: '1px solid rgba(255,255,255,0.08)' }}
          >
            <option value="">Todos os perfis</option>
            <option value="educador">Educador</option>
            <option value="gestor">Gestor Público</option>
            <option value="startup">Startup</option>
          </select>
          <button
            onClick={fetchLeads}
            className="px-5 py-2.5 rounded-lg text-sm font-semibold transition-all"
            style={{ background: 'rgba(168,255,62,0.1)', color: '#a8ff3e', border: '1px solid rgba(168,255,62,0.2)' }}
          >
            Atualizar
          </button>
        </div>

        {/* Tabela */}
        <div className="rounded-xl overflow-hidden" style={{ border: '1px solid rgba(255,255,255,0.06)' }}>
          {loading ? (
            <div className="py-20 text-center text-[#444] text-sm">Carregando...</div>
          ) : filtered.length === 0 ? (
            <div className="py-20 text-center text-[#444] text-sm">Nenhuma inscrição encontrada.</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ background: '#0d0d0d', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                    {['Nome', 'Email', 'Telefone', 'Município', 'Formação', 'Perfil', 'Data'].map((h) => (
                      <th
                        key={h}
                        className="px-5 py-3 text-left text-[10px] font-bold uppercase tracking-widest text-[#444]"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((l, i) => (
                    <tr
                      key={l.id}
                      style={{
                        background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.01)',
                        borderBottom: '1px solid rgba(255,255,255,0.04)',
                      }}
                    >
                      <td className="px-5 py-4 font-medium text-white whitespace-nowrap">{l.nome}</td>
                      <td className="px-5 py-4 text-[#888]">{l.email}</td>
                      <td className="px-5 py-4 text-[#888] whitespace-nowrap">{l.telefone}</td>
                      <td className="px-5 py-4 text-[#888]">{l.municipio}</td>
                      <td className="px-5 py-4 text-[#888]">{l.formacao}</td>
                      <td className="px-5 py-4">
                        {l.perfil ? (
                          <span
                            className="px-2.5 py-1 rounded-full text-xs font-semibold"
                            style={{
                              background: PERFIL_COLOR[l.perfil] ?? 'rgba(255,255,255,0.07)',
                              color: PERFIL_TEXT[l.perfil] ?? '#aaa',
                            }}
                          >
                            {PERFIL_LABEL[l.perfil] ?? l.perfil}
                          </span>
                        ) : (
                          <span className="text-[#444]">—</span>
                        )}
                      </td>
                      <td className="px-5 py-4 text-[#555] whitespace-nowrap text-xs">
                        {new Date(l.criado_em).toLocaleDateString('pt-BR', {
                          day: '2-digit', month: '2-digit', year: 'numeric',
                          hour: '2-digit', minute: '2-digit',
                        })}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        <p className="text-center text-[#333] text-xs mt-6">
          {filtered.length} resultado{filtered.length !== 1 ? 's' : ''} · Programa Secretário Inovador
        </p>
      </main>
    </div>
  )
}
