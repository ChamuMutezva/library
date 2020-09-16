const chalk = require('chalk');
const express = require('express');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');

const port = process.env.port || 3000;

const app = express();

app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, '/public/')));
app.use('css', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')));
app.use('js', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js')));
app.use('js', express.static(path.join(__dirname, '/node_modules/jquery/dist')));
app.set('views', './public/src/views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  // res.sendFile(path.join(__dirname, 'views/index.html'));
  res.render('index', { list: ['a', 'b'], title: 'My Library' });
});

app.listen(port, () => {
  debug(`Listening on port ${chalk.green(port)}`);
});
