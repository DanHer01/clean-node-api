const express = require('express');
const router = express.Router();

module.exports = (taskController) => {
  router.post('/tasks', (req, res) => taskController.createTask(req, res));
  return router;
};
