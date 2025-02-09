const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const cursoRoutes = require('./routes/cursoRoutes');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/api', cursoRoutes);

module.exports = app;