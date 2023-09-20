const express = require('express');
const db = require('./config/connection');
const routes = require('./controllers/routes');

const PORT = 3002;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server for "Mini-Social-Network" running on port ${PORT}!`);
  });
});
