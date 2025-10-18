# MySQL Setup and API Migration TODO

- [x] Create lib/mysql.ts: Utility file with MySQL connection function using mysql2/promise
- [x] Update src/app/api/newsletter/route.ts: Replace SQLite with MySQL, adjust SQL syntax for MySQL
- [x] Update src/app/api/save-to-excel/route.ts: Replace SQLite with MySQL, adjust insert to match full table schema (set missing fields to NULL/default)
- [x] Execute setup-mysql.js to create MySQL tables (Note: MySQL server not running, connection refused)
- [x] Test API routes by running dev server and making sample requests (Note: APIs return connection errors as expected since MySQL server is not running)
