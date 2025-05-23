
const express = require('express');
const router = express.Router();
const { createUser, getUser, getAllUsers } = require('../controllers/userController');
const auth = require('../middlewares/authMiddleware');

router.post('/', auth, createUser);
router.get('/:id', auth, getUser);
router.get('/', auth, getAllUsers);

module.exports = router;
