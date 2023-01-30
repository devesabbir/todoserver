const mongoose = require("mongoose");

const TasksSchema = mongoose.Schema({
  name: {
    type: String,
  },
  sector:{
    type: String,
  
  },
  agreeWithTerms:{
     type:Boolean,
  }
});

const Task = mongoose.model("Task", TasksSchema);

module.exports = Task