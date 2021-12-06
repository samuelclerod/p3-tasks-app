const express = require('express');
const auth = require('../middlewares/auth')
const UsersController = require('../controllers/usersController');
const TasksController = require('../controllers/tasksController');

const router = express.Router();

router.post("/users", UsersController.create);
router.get("/users", auth, UsersController.list);
router.post("/users/login", UsersController.login);
router.post("/users/logout", auth, UsersController.logOut);
router.post("/users/logout_all", auth, UsersController.logOutAll);

// modify for access a single user
router.get("/users/me", auth, UsersController.find);
router.delete("/users/me", auth, UsersController.remove);
router.patch("/users/me", auth, UsersController.update);

router.post("/tasks", auth, TasksController.create);
router.get("/tasks", auth, TasksController.list);
router.get("/tasks/:id", auth, TasksController.find);

module.exports = router;