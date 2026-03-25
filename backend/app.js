/* eslint-env node */
/* global require, module */
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const usersRouter = require('./routes/api/users');
const calculatorRouter = require('./routes/api/calculator');
const productsRouter = require('./routes/api/products');
const diaryRouter = require('./routes/api/diary');
const recommendationsRouter = require('./routes/api/recommendations');

const app = express();
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());

// Swagger Docs
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/api/users', usersRouter);
app.use('/api/calculator', calculatorRouter);
app.use('/api/products', productsRouter);
app.use('/api/diary', diaryRouter);
app.use('/api/recommendations', recommendationsRouter);

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' });
});

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, _next) => {
  res.status(err.status || 500).json({ message: err.message || 'Server error' });
});

module.exports = app;
