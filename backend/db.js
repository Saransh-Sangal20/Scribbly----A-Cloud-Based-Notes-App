// here we connect to our mongodb database

const mongoose = require("mongoose");
const mongoURI = "mongodb://localhost:27017/scribbly"

function connectToMongo() {
    mongoose.connect(mongoURI)
    .then(()=> console.log("Connection Successful"))
    .catch((err)=> console.log(err.message))
}
module.exports = connectToMongo;