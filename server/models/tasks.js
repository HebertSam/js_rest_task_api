const mongoose = require("mongoose");

let TaskSchema = new mongoose.Schema({
    title: {type: String, required:true, minlength:2},
    description: {type:String, default:""},
    completed: {type:Boolean, default:false},
}, {timestamps:true})
mongoose.model("Task", TaskSchema);
const Task = mongoose.model("Task");