const express = require('express');
const router = express.Router();
const todoController = require('../Controllers/todoController')

router.post('/addTodo' , todoController.addTodo);
router.get('/getTodo' ,todoController.getTodo)
router.post('/removeTodo/:id' , todoController.removeTodo)
router.post('/updateTodo/:id' , todoController.updateTodo)
router.post('/updateCompletion/:id' , todoController.updateCompletion)

module.exports = router