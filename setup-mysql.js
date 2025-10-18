const mysql = require('mysql2/promise');

async function setupMySQL() {
  try {
    const connection = await mysql.createConnection({
      host: '127.0.0.1',
      port: 3307,
      user: 'thinkable',
      password: '8511271956', // assuming no password
      database: 'Thinkable XAI'
    });

    // Create contacts table
    await connection.execute(`
      CREATE TABLE IF NOT EXISTS contacts (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        company VARCHAR(255),
        phone VARCHAR(50),
        message TEXT,
        service VARCHAR(255),
        timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        status ENUM('new', 'read', 'responded') DEFAULT 'new',
        source VARCHAR(50) DEFAULT 'contact_form'
      )
    `);

    // Create newsletter table
    await connection.execute(`
      CREATE TABLE IF NOT EXISTS newsletter (
        id INT AUTO_INCREMENT PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        subscribed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        status ENUM('active', 'inactive') DEFAULT 'active'
      )
    `);

    console.log('MySQL tables created successfully');
    await connection.end();
  } catch (error) {
    console.error('MySQL setup error:', error.message);
  }
}

setupMySQL();
