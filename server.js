const express = require('express');
const db = require('./config/connection');
const routes = require('./controllers/routes');

const cwd = process.cwd();  // TODO - what is this?

const PORT = 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

db.once('open', () => {
  app.listen(PORT, () => {
    // TODO - previous code had referenced "activity" from cwd.  What was that?
    console.log(`API server for "Mini-Social-Network" running on port ${PORT}!`);
  });
});
