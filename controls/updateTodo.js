const Todo = require("../model/task");
const asyncWrap = require("../middleware/asyncwrap");

const updateTodo = asyncWrap(async (req, res) => {
  const todo = await Todo.findByIdAndUpdate(req.params.id, { $set: req.body });
  res.send(`update: ${todo}`);
});

module.exports = {
  updateTodo,
};
