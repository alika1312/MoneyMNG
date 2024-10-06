const { getUser, signUp, signIn, logOut } = require("../controllers/user");

const router = require("express").Router();

router.get("/users", getUser);
router.post("/sign-up", signUp);
router.post("/sign-in", signIn);
router.get("/log-out", logOut);
// router.post('/add-user', addUser);
// router.delete('/delete-user/:id', deleteUser);
// router.patch('/update-user/:id', updateUser);

module.exports = router;
