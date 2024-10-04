import { openDB } from "../configDB.js";

export async function createTable() {
    openDB().then(async (db) => {
        db.exec('CREATE TABLE IF NOT EXISTS tasks (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, body TEXT)');
    });
}

export async function insertTask(task) {
    openDB().then(async (db) => {
        db.run('INSERT INTO tasks (title, body) VALUES (?, ?)', [task.title, task.body]);
    });
}

export async function updateTask(task) {
    openDB().then(async (db) => {
        db.run('UPDATE tasks SET title = ?, body = ? WHERE id = ?', [task.title, task.body, task.id]);
    });
}