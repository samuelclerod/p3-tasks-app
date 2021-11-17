const express = require('express');
const UsersController = require('../controllers/usersController');

const TasksController = require('../controllers/tasksController');

const router = express.Router();

router.post("/users", UsersController.create);
router.get("/users", UsersController.list);
router.get("/users/:id", UsersController.find);
router.patch("/users/:id", UsersController.update);
router.delete("/users/:id", UsersController.remove);

router.post("/tasks", TasksController.create);
router.get("/tasks", TasksController.list);
router.get("/tasks/:id", TasksController.find);

module.exports = router;