const router = require('express').Router();
const { getAllTodo } = require('../controller/getTodo');
const { createTodo } = require('../controller/getTodo');
const { deleteTodo } = require('../controller/getTodo');
const { updateTodo } = require('../controller/getTodo');
const { getTodoById } = require('../controller/getTodo')


router.get('/', getAllTodo)
router.post('/', createTodo)
router.put('/:id', updateTodo)
router.get('/:id', getTodoById)
router.delete('/:id', deleteTodo)



module.exports = router;