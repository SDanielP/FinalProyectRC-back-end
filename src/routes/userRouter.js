const express = require('express');
const {
    getAllUsers,
    createUser,
    getUserById,
    updateUser,
    deleteUser
} = require('../controllers/userController');
const validateToken = require('../middlewares/validationToken');
const { roleCheck } = require('../middlewares/validationRole');

const userRouter = express.Router();

userRouter.get('/', getAllUsers);
userRouter.post('/', validateToken, roleCheck("ADMIN"), createUser);
userRouter.get('/:id', validateToken, getUserById);
userRouter.patch('/:id', updateUser);
userRouter.delete('/:id', validateToken, deleteUser);

module.exports = userRouter;

