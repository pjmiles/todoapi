const Todo = require('../model/task')
const asyncWrapper = require('../middleware/asyncwrap')

// to get all task
const getAllTodo = asyncWrapper(async (req, res) => {
    const todo = await Todo.find({})

    res.json(todo)
    console.log(todo)
})

module.exports = {
    getAllTodo
};
