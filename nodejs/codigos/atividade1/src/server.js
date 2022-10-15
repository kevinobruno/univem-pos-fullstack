require('dotenv/config');

const express = require('express');
const playerRouter = require('./routes/player');

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(playerRouter);

app.listen(port, () => console.log(`Server running on port ${port}...`));
