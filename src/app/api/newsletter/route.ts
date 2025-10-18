import { NextResponse } from 'next/server';
import { getMySQLConnection } from '@/lib/mysql';

export async function POST(req: Request) {
  let connection;
  try {
    const body = await req.json();
    const { email } = body;

    // Validate email
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      return NextResponse.json(
        { ok: false, error: 'Valid email is required' },
        { status: 400 }
      );
    }

    // Get MySQL connection
    connection = await getMySQLConnection();

    // Insert or update subscription (ON DUPLICATE KEY UPDATE for MySQL)
    await connection.execute(`
      INSERT INTO newsletter (email, subscribed_at, status)
      VALUES (?, NOW(), 'active')
      ON DUPLICATE KEY UPDATE
        subscribed_at = NOW(),
        status = 'active'
    `, [email]);

    return NextResponse.json({ ok: true, message: 'Successfully subscribed to newsletter' });
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return NextResponse.json(
      { ok: false, error: 'Internal server error' },
      { status: 500 }
    );
  } finally {
    if (connection) await connection.end();
  }
}

export async function GET() {
  let connection;
  try {
    // Get MySQL connection
    connection = await getMySQLConnection();

    // Get subscriber count
    const [rows] = await connection.execute('SELECT COUNT(*) as total FROM newsletter WHERE status = "active"');
    const count = (rows as any)[0] as { total: number };

    return NextResponse.json({ ok: true, subscribers: count.total });
  } catch (error) {
    console.error('Newsletter count error:', error);
    return NextResponse.json(
      { ok: false, error: 'Internal server error' },
      { status: 500 }
    );
  } finally {
    if (connection) await connection.end();
  }
}
