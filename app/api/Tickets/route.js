import Ticket from '@/app/(models)/Ticket';
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const body = await req.json();
    await Ticket.create(body.data);
    return NextResponse.json({ message: 'Ticket Created' }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ message: 'Error', err }, { status: 500 });
  }
}

export async function GET() {
  try {
    const tickets = await Ticket.find();
    return NextResponse.json({ tickets }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Error', err }, { status: 500 });
  }
}
