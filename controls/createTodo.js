const Todo = require('../model/task')

// Create todo list
const createTodo = ((req, res) => {
    const { text, description } = req.body
    const todo = new Todo({ text, description })
    todo.save()
    res.json(todo)
})

module.exports = {
    createTodo
};