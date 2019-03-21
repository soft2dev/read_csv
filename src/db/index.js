const mysql = require('mysql2/promise');

require('dotenv').config();

// load environment variables for mysql
const {
  MS_USER: user,
  MS_HOST: host,
  MS_DATABASE: database,
  MS_PASSWORD: password,
  MS_PORT: port,
} = process.env;

//create connection for mysql

// run query using connection pool
exports.run = async function(query) {
    const connection =  await mysql.createConnection({
      host,
      user,
      password,
      database,
      port
    });
    const [rows, fields] = await connection.execute(query);
    console.log('rows',rows);
    return rows
};
