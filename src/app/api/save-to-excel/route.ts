import { NextResponse } from 'next/server';
import Database from 'better-sqlite3';
import * as XLSX from 'xlsx';
import * as path from 'path';

export async function POST(req: Request) {
  let db: Database.Database | null = null;
  try {
    const body = await req.json();

    // Validate required fields
    const { name, email, message, company, phone, service } = body;
    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Connect to SQLite database
    const dbPath = path.join(process.cwd(), 'data', 'contacts.db');
    db = new Database(dbPath);

    // Insert data into SQLite database
    const insertStmt = db.prepare(`
      INSERT INTO contacts (name, email, message, timestamp, status, source)
      VALUES (?, ?, ?, ?, ?, ?)
    `);
    insertStmt.run(
      name,
      email,
      message,
      new Date().toISOString(),
      'new',
      'contact_form'
    );

    // Export all contacts to Excel
    const selectStmt = db.prepare('SELECT * FROM contacts ORDER BY timestamp DESC');
    const allContacts = selectStmt.all();

    // Create Excel workbook
    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.json_to_sheet(allContacts);
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Contacts');

    // Write Excel file
    const excelPath = path.join(process.cwd(), 'data', 'contacts.xlsx');
    try {
      XLSX.writeFile(workbook, excelPath);
    } catch (writeError) {
      console.error('Failed to write Excel file:', writeError);
      // Continue without failing the request
    }

    return NextResponse.json({
      ok: true,
      message: 'Contact form submitted and data exported to Excel successfully',
      data: { name, email, company, phone, message, service }
    });
  } catch (err) {
    console.error('Contact form error:', err);
    return NextResponse.json(
      { ok: false, error: 'Internal server error', details: err instanceof Error ? err.message : 'Unknown error' },
      { status: 500 }
    );
  } finally {
    if (db) {
      db.close();
    }
  }
}
