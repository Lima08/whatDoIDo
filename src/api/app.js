const express = require('express');
const userRouter = require('../routers/userRoutes');
const todoRouter = require('../routers/todoRoutes');
const middlewareError = require('../middlewares/error');
const cors = require('cors')

const app = express();

app.use(cors());
app.use(express.json());

app.use(userRouter);
app.use(todoRouter);

app.use(middlewareError);

module.exports = app;
