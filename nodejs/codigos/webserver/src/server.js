require('dotenv/config');

const express = require('express');
const helloRouter = require('./routes/hello');
const loginRouter = require('./routes/login');

const app = express();

app.use(express.json());
app.use(helloRouter);
app.use(loginRouter);

const port = process.env.PORT;
app.listen(port, () => console.log(`Server running on port ${port}...`));
