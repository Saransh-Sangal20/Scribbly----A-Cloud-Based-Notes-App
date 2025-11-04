// index.js is our express server
const connectToMongo = require('./db');
const express = require('express')
var cors = require('cors')
require('dotenv').config({ path: './backend/.env' });  // this change has been made because .env is in backend folder and not in root folder

connectToMongo();

const app = express()
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json());

// routes created
app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));

app.listen(port, () => {
  console.log(`Scribbly -- Notes App listening on port ${port}`)
})
