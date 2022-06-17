const Todo = require('../model/task')
const asyncWrapper = require('../middleware/asyncwrap')

// to get all task
const getAllTodo = asyncWrapper(async (req, res) => {
    const todo = await Todo.find()

    res.json(todo)
  
})

// get todo by id
const getTodoById = asyncWrapper(async (req, res) => {
    const todoById = await Todo.findOne()

    res.json(todoById)
})

module.exports = {
    getAllTodo,
    getTodoById
};
