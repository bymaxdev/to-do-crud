// import { openDB } from './configDB.js';
import express from 'express';
import { createTable, insertTask, updateTask } from './Controller/tasks.js';

const app = express();
app.use(express.json());

createTable();

app.get('/', (req, res) => { // Rota de teste
    res.send('Hello World');
})

app.post('/tasks', (req, res) => { // Criar tarefa
    insertTask(req.body);
    res.json({
        "statusCode": 200,
    });
})

app.put('/tasks', (req, res) => { // Atualizar tarefa
    if (!req.body.id) {
        res.json({
            "statusCode": 400,
            "message": "id is required"
        });
    }
    updateTask(req.body);
    res.json({
        "statusCode": 200,
    });
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})