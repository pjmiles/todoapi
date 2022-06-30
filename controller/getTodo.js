const Todo = require('../model/task')

// to get all task
const getAllTodo =  async (req, res) => {
    try {
        const todo = await Todo.find({})
        res.json(todo) 
    } catch (error) {
       console.log(error) 
    } 
}

// get todo by id
const getTodoById = (async (req, res) => {
    const todoById = await Todo.findOne({})

    res.json(todoById)
})

// Create todo list
const createTodo = ((req, res) => {
    const { text, description } = req.body
    const todo = new Todo({ text, description })
    todo.save()
    res.json(todo)
})

// update todo list
const updateTodo = (async (req, res) => {
    const todo = await Todo.findByIdAndUpdate(req.params.id, { $set: req.body });
    res.send(`update: ${todo}`);
  });


  // delete a todo list
const deleteTodo = (async (req, res) => {
    const result = await Todo.findByIdAndDelete(req.params.id)
    res.json(`DELETED! ${result}`)
})
  
module.exports = {
    getAllTodo,
    getTodoById,
    createTodo,
    updateTodo,
    deleteTodo
};


