import { neon } from '@neondatabase/serverless'
import { NextRequest, NextResponse } from 'next/server'

const sql = neon(process.env.DATABASE_URL!)

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { nome, telefone, email, formacao, municipio, perfil, info, parte, divulgar } = body

    // Cria a tabela se não existir
    await sql`
      CREATE TABLE IF NOT EXISTS inscricoes (
        id SERIAL PRIMARY KEY,
        nome TEXT NOT NULL,
        telefone TEXT,
        email TEXT NOT NULL,
        formacao TEXT,
        municipio TEXT,
        perfil TEXT,
        aceita_info BOOLEAN DEFAULT false,
        quer_participar BOOLEAN DEFAULT false,
        autoriza_divulgacao BOOLEAN DEFAULT false,
        criado_em TIMESTAMPTZ DEFAULT NOW()
      )
    `

    await sql`
      INSERT INTO inscricoes (nome, telefone, email, formacao, municipio, perfil, aceita_info, quer_participar, autoriza_divulgacao)
      VALUES (${nome}, ${telefone}, ${email}, ${formacao}, ${municipio}, ${perfil}, ${info}, ${parte}, ${divulgar})
    `

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('Erro ao salvar inscrição:', error)
    return NextResponse.json({ ok: false, error: 'Erro interno' }, { status: 500 })
  }
}
