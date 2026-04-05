import { neon } from '@neondatabase/serverless'
import { NextRequest, NextResponse } from 'next/server'

const sql = neon(process.env.DATABASE_URL!)

export async function GET(req: NextRequest) {
  const auth = req.headers.get('x-dashboard-auth')
  if (auth !== 'institutoecohos:admin123') {
    return NextResponse.json({ ok: false }, { status: 401 })
  }

  try {
    const rows = await sql`
      SELECT id, nome, telefone, email, formacao, municipio, perfil,
             aceita_info, quer_participar, autoriza_divulgacao,
             criado_em
      FROM inscricoes
      ORDER BY criado_em DESC
    `
    return NextResponse.json({ ok: true, data: rows })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ ok: false, error: 'Erro ao buscar dados' }, { status: 500 })
  }
}
