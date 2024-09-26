const { getUser, addUser, deleteUser, updateUser } = require('../controllers/user');

const router = require('express').Router();

router.get('/users', getUser);
router.post('/add-user', addUser);
router.delete('/delete-user/:id', deleteUser);
router.patch('/update-user/:id', updateUser);


module.exports = router;