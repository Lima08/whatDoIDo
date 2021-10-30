const express = require('express');
const userRouter = require('../routers/userRoutes');
const middlewareError = require('../middlewares/error');

const app = express();

app.use(express.json());

app.use(userRouter);

app.use(middlewareError);

module.exports = app;
