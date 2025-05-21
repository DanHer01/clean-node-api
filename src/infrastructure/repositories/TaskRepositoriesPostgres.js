// src/infrastructure/repositories/TaskRepositoryPostgres.js
class TaskRepositoryPostgres {
  constructor(pool) {
    this.pool = pool;
  }

  async create(task) {
    const result = await this.pool.query(
      'INSERT INTO tasks (title, completed) VALUES ($1, $2) RETURNING *',
      [task.title, task.completed]
    );
    return result.rows[0];
  }
}

module.exports = TaskRepositoryPostgres;
