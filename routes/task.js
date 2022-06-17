const router = require('express').Router();
const { getAllTodo } = require('../controls/getTodo');
const { createTodo } = require('../controls/createTodo');
const { deleteTodo } = require('../controls/deleteTodo');
const { updateTodo } = require('../controls/updateTodo');
const { getTodoById } = require('../controls/getTodo')


router.route('/todos').get(getAllTodo).post(createTodo)
router.route('/todo/:id').put(updateTodo).get(getTodoById).delete(deleteTodo)



module.exports = router;