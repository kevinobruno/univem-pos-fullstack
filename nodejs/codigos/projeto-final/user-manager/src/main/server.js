require('dotenv/config');
require('../infra/databases/mongo');

const express = require('express');

const logMiddleware = require('./middlewares/logMiddleware');
const userRouter = require('./routes/userRoutes');

const app = express();
app.use(express.json());
app.use(logMiddleware);

app.use(userRouter);
app.get('/healthcheck', (req, res) => res.send('OK!'));

const port = process.env.PORT || 3999;
app.listen(port, () => console.log(`Server listening on port ${port}`));
