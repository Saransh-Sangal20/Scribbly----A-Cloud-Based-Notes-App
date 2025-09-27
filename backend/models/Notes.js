const mongoose = require("mongoose");
const { Schema } = mongoose;

const notesSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    title: {
        type: String,  // ensures type of field is string
        required: true
    }, 
    description: {
        type: String,
        required: true,  // ensures that this field is entered by user
    },
    tag: {
        type: String,
        default: "general"
    },
    date: {
        type: Date,
        default: Date.now  // ensures default date is current date, if user dont enters date
    }
});

module.exports = mongoose.model("notes", notesSchema);  // first created a model using schema and then exported it