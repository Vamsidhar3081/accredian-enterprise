import { NextResponse } from 'next/server'
import { promises as fs } from 'fs'
import path from 'path'

const DB_PATH = path.join(process.cwd(), 'data', 'leads.json')



async function readLeads() {
  try {
    const raw = await fs.readFile(DB_PATH, 'utf-8')
    return JSON.parse(raw)
  } catch {
    return []
  }
}

async function writeLeads(leads) {
  await fs.mkdir(path.dirname(DB_PATH), { recursive: true })
  await fs.writeFile(DB_PATH, JSON.stringify(leads, null, 2))
}

export async function POST(req) {
  try {
    const body = await req.json()
    const { name, email, company, size, message } = body

    // Basic validation
    if (!name || !email || !company || !size) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const lead = {
      id: Date.now().toString(),
      name,
      email,
      company,
      size,
      message: message || '',
      createdAt: new Date().toISOString(),
    }

    const leads = await readLeads()
    leads.push(lead)
    await writeLeads(leads)

    console.log('New lead captured:', lead)

    return NextResponse.json(
      { success: true, message: 'Lead captured successfully', id: lead.id },
      { status: 201 }
    )
  } catch (err) {
    console.error('Lead API error:', err)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function GET() {
  // Admin endpoint to view all leads
  const leads = await readLeads()
  return NextResponse.json({ leads, count: leads.length })
}
