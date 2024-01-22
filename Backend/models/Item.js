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
    paperTitle : {
        type : String,
        required: true,
    },
    firstAuth : {
        type : String,
        required: true,
    },
    corresAuth : {
        type : String,
        required: true,
    },
    thirdAuth : {
        type : String,
        required: true,
    },
    fourthAuth : {
        type : String,
        required: true,
    },
    instAffil : {
        type : String,
        required: true,
    },

});




module.exports = mongoose.model("Item1",itemSchema);
