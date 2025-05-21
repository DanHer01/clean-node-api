const express = require('express');
const pool = require('./src/config/db');
const TaskRepositoryPostgres = require('./src/infrastructure/repositories/TaskRepositoryPostgres');
const createTask = require('./src/usecases/createTask');
const TaskController = require('./src/interfaces/controllers/TaskController');
const taskRoutes = require('./src/interfaces/routes/taskRoutes');

const app = express();
app.use(express.json());

const taskRepo = new TaskRepositoryPostgres(pool);
const createTaskUseCase = (taskData) => createTask(taskData, taskRepo);
const taskController = new TaskController(createTaskUseCase);

app.use('/', taskRoutes(taskController));

module.exports = app;
