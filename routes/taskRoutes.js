
const express = require('express');
const router = express.Router();
const {
  createTask, getTask, getAllTasks, updateTask, deleteTask
} = require('../controllers/taskController');
const auth = require('../middlewares/authMiddleware');

router.post('/', auth, createTask);
router.get('/:id', auth, getTask);
router.get('/', auth, getAllTasks);
router.put('/:id', auth, updateTask);
router.delete('/:id', auth, deleteTask);

module.exports = router;
