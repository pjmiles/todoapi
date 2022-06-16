const Todo = require('../model/task')
const asyncWrap = require('../middleware/asyncwrap')

// delete a todo list

const deleteTodo = asyncWrap(async (req, res) => {
    const result = await Todo.findByIdAndDelete(req.params.id)
    res.json(`DELETED! ${result}`)
})


module.exports = {
    deleteTodo
}