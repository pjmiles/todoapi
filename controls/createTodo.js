const Todo = require('../model/task')

// Create todo list
const createTodo = ((req, res) => {
    const todo = new Todo({ text: req.body.text })
    todo.save()
    res.json(todo)
})

module.exports = {
    createTodo
};