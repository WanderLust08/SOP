const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
    user : {
        type : String,
        required: true,
    },
    // name : {
    //     type : String,
    //     required:[true, "Please provide a name"], //NOTE THIS RESTRICTION
    //     trim :true,
    //     maxlength: [20, "name cannot be more than 20 characters"] //NOTE THIS RESTRICTION
    // },
    // file : {
    //     type:String,
    //     required : [true, "Please provide a File"],
    // },
    wordCount1 : {
        type : Number,
        required: true,
    },
    keywords : {
        type : String,
        required: true,
    },
    file : {
        type:String,
        required : [true, "Please provide a File"],
    },

});




module.exports = mongoose.model("Item2",itemSchema);
