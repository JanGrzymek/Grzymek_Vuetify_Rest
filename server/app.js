const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const path = require('path');
const routes = require('./routes');
const cors = require('cors');

require('colors');
require('dotenv').config();

const app = express();

app.use(morgan('dev'));

app.use(cors('cors'));

app.use(express.static(path.join(__dirname, '/public')));
app.use(helmet());

app.use(express.json());

app.use('/', routes);

const PORT = process.env.PORT ?? 5000;

app.listen(PORT);
