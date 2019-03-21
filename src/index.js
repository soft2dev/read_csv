require('dotenv').config();
const Koa = require('koa');
const axios = require('axios');
const db = require('db');
const fs = require('fs');
const  csv = require('csvtojson')

// load environment variables
const {
  PORT: port
} = process.env;

// create app for koa
const app = new Koa();
const cors = require('@koa/cors');

// listen
app.listen(port, async () => {
  console.log(`Server is listening to port ${port}`);
  csv()
  .fromFile('./public/admin.csv')
  .then(async (jsonObj)=>{
      await db.run(`INSERT INTO users ( name,email)
                                VALUES ( '${jsonObj[0].Name}','${jsonObj[0].email}')`);
  })
});