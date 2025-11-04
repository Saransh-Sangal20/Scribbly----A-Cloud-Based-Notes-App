// here we connect to our mongodb database

const mongoose = require("mongoose");
require('dotenv').config({ path: './backend/.env' });  // this change has been made because .env is in backend folder and not in root folder
const mongoURI = process.env.MONGO_URI;

function connectToMongo() {
    mongoose.connect(mongoURI)
    .then(()=> console.log("Connection Successful"))
    .catch((err)=> console.log(err.message))
}
module.exports = connectToMongo;