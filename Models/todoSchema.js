const mongoose = require('mongoose');
const todoData = mongoose.Schema({
  task : {
    type:String,
    required:false
  },
  completed:{
    type:Boolean,
    required:false
  },
  created_by:{
    type:String,
    required:false
  }
})


const todoSchema = mongoose.model("todoSchema" , todoData);
module.exports = todoSchema