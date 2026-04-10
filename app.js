const express = require('express');
const path = require('path');
const hbs = require('hbs');
const cors = require('cors');

require('./app_api/models/db');
require('./app_api/models/trips');

const indexRouter = require('./app_server/routes/index');
const apiTripsRouter = require('./app_api/routes/trips');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// View engine (HBS)
app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'hbs');
hbs.registerPartials(path.join(__dirname, 'app_server', 'views', 'partials'));

// API (Separation of Concerns)
app.use('/api', apiTripsRouter);

// MVC site
app.use('/', indexRouter);

// Static files
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
  console.log(`Travlr server running on http://localhost:${PORT}`);
});