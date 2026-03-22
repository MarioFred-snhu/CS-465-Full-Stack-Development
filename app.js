const express = require('express');
const path = require('path');
const hbs = require('hbs');

const indexRouter = require('./app_server/routes/index');

const app = express();
const PORT = 3000;

// View engine setup (HBS)
app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'hbs');
hbs.registerPartials(path.join(__dirname, 'app_server', 'views', 'partials'));

// MVC routes FIRST
app.use('/', indexRouter);

// Static files AFTER
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
  console.log(`Travlr server running on http://localhost:${PORT}`);
});