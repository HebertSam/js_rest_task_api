const mongoose = require("mongoose");
const Task = mongoose.model("Task");
const task = require("../controllers/tasks.js");

module.exports = function(app){
    app.get("/", task.show)
    app.get("/:id", task.showOne)
    app.post("/:title", task.add)
    app.put("/:id", task.update)
    app.delete("/:id", task.destroy)
}