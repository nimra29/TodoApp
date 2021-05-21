const express = require("express");
const router = express.Router();
const todoController =require('../controllers/todo_controller')
// create a user
router.post('/create',todoController.createToDo);
router.post('/edittt',todoController.editTodos);
 router.post('/find',todoController.getTodos);
 router.post('/del',todoController.delTodos);


module.exports=router;