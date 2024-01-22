const mongoose = require("mongoose");

const requestSchema = new mongoose.Schema({
    user : {
        type:String,
        required: true,
    },
    inputState : {
        type:Boolean,
        required: true,
    },
});

module.exports = mongoose.model("Request",requestSchema);