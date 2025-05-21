class TaskController {
    constructor(createTaskUseCase) {
        this.createTaskUseCase = createTaskUseCase;
    }

    async createTask(res, req) {
        try {
            const task = this.createTaskUseCase(req.body);
            res.status(201).json(task);
        } catch (error) {
            res.status(500).json({ error: error.message});
        }
    }
}

module.exports = TaskController;