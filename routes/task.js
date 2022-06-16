const router = require('express').Router();
const { getAllTodo } = require('../controls/getAllTodo');
const { createTodo } = require('../controls/createTodo');
const { deleteTodo } = require('../controls/deleteTodo')


router.route('/todos').get(getAllTodo).post(createTodo)
router.route('/todo/:id').delete(deleteTodo)



module.exports = router;