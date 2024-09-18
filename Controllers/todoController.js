const todoSchema = require('../Models/todoSchema');

const addTodo = async (req,res) =>{
   try {
    const data = new todoSchema(req.body);
   await data.save();
   res.status(200).send(data);
   } catch (error) {
    res.status(400).send(error.message);
   }
}

const getTodo = async (req,res) =>{
    try {
        const data = await todoSchema.find();
        res.status(200).send(data)
    } catch (error) {
    res.status(400).send(error.message);
    }
}

const removeTodo = async (req,res) =>{
    try {
        const id = req.params.id;
        console.log(id)
       await todoSchema.findByIdAndDelete(id);
        res.status(200).send("deleted")
    } catch (error) {
    res.status(400).send(error.message);
    }
}

const updateTodo = async (req,res) =>{
    try {
        const id = req.params.id;
        console.log(id)
        await todoSchema.findByIdAndUpdate(id , {task : req.body.task})
        res.status(200).send("updated")
    } catch (error) {
        res.status(400).send(error.message)
    }
}

const updateCompletion = async (req,res)=>{
    try{
      if(req.query.completed === "true") {
      const id = req.params.id;
      await todoSchema.findByIdAndUpdate(id , {completed : false})
      res.status(200).send("okay")
      }
      else {
        const id = req.params.id;
        await todoSchema.findByIdAndUpdate(id , {completed : true})
        res.status(200).send("okay")
      }
    }catch(error){
    res.status(400).send(error.message)
    }
}

exports.addTodo = addTodo;
exports.removeTodo = removeTodo
exports.getTodo = getTodo;
exports.updateTodo = updateTodo;
exports.updateCompletion = updateCompletion;