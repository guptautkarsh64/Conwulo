import { hash } from 'bcryptjs';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return new Response(JSON.stringify({ error: 'Missing fields' }), { status: 400 });
    }

    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) {
      return new Response(JSON.stringify({ error: 'User already exists' }), { status: 400 });
    }

    const hashedPassword = await hash(password, 10);
    const user = await prisma.user.create({
      data: { email, password: hashedPassword },
    });

    return new Response(JSON.stringify({ user }), { status: 201 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: 'Server error' }), { status: 500 });
  }
}
