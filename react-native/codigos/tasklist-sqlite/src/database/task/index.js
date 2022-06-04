import { database } from '../';

const initTaskTable = () => {
  database.transaction(transaction => {
    transaction.executeSql(`
      CREATE TABLE IF NOT EXISTS task(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL
      );
    `);
  });
};

const listTasks = () => {
  return new Promise(resolve => {
    database.transaction(transaction => {
      transaction.executeSql(
        `
        SELECT id, title FROM task;
      `,
        [],
        (transaction, results) => resolve(results.rows._array),
      );
    });
  });
};

const insertTask = taskTitle => {
  return new Promise(resolve => {
    database.transaction(transaction => {
      transaction.executeSql(
        `
        INSERT INTO task (title) VALUES (?);
      `,
        [taskTitle],
        () => resolve('Task successfully added'),
      );
    });
  });
};

const updateTask = task => {
  return new Promise(resolve => {
    database.transaction(transaction => {
      transaction.executeSql(
        `
        UPDATE task SET title = ? WHERE id = ?;
      `,
        [task.title, task.id],
        () => resolve('Task successfully updated'),
      );
    });
  });
};

const deleteTask = taskId => {
  return new Promise(resolve => {
    database.transaction(transaction => {
      transaction.executeSql(
        `
        DELETE FROM task WHERE id = ?;
      `,
        [taskId],
        () => resolve('Task successfully deleted'),
      );
    });
  });
};

export { initTaskTable, listTasks, insertTask, updateTask, deleteTask };
