const express = require('express');
const mongoose = require('./db');

const { StudentModel } = require('./models');

const app = express();

app.get('/hello', (req, res) => {
    return res.send('Hello World!');
});

app.get('/students', async (req, res) => {
    const students = await StudentModel.find();

    return res.status(200).send(students);
});

app.listen(3010, () => console.log('Server running on port 3010'));
