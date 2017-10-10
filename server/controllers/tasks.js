const mongoose = require("mongoose");
const Task = mongoose.model("Task");

module.exports = {
    show: function(req, res){
        Task.find({}, function(err, task){
            if(err){
                return console.log("something went wrong");
            }
            res.json(task)
        })
    },
    showOne: function(req, res){
        Task.findOne({_id:req.params.id}, function(err, task){
            if(err){
                return console.log("could not find");
            }
            res.json(task)
        })
    },
    add: function(req, res){

        let params = req.params
        console.log("this is the paramaters", params)
        let task = new Task(params)
            task.save(function(err){
                if(err){
                    return console.log("error")
                }
                res.json(task)
            })
    },
    update: function(req, res){
        let params = req.params
        Task.findOneAndUpdate({params}, function(err){
            if(err){
                return console.log("could not update")
            }
            res.redirect("/")
        })
    },
    destroy: function(req, res){
        console.log(req.params.id)
        Task.remove({_id: req.params.id}, function(err){
            if(err){
                return console.log("could not remove");
            }
            res.json({message: "successfully delete"})
        })
    }
}