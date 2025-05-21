async function createTask(task) {
    const task = new (require('../domain/entities/Task'))(taskData);
}

module.exports = createTask;