const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
    name: {
        type: String,  // ensures type of field is string
        required: true
    }, 
    email: {
        type: String,
        required: true,  // ensures that this field is entered by user
        unique: true  // ensures this field is unique
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now  // ensures default date is current date, if user dont enters date
    }
});

module.exports = mongoose.model("user", userSchema);  // first created a model using schema and then exported it