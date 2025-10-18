import mysql from 'mysql2/promise';

export async function getMySQLConnection() {
  return await mysql.createConnection({
    host: '127.0.0.1',
    port: 3307,
    user: 'thinkable',
    password: '8511271956',
    database: 'Thinkable XAI'
  });
}
