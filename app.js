const express = require('express');
var cors = require('cors')
const app = express();
const path = require('path');
const PORT = 8009;

require('dotenv').config();

const goty  = require('./controllers/goty');
const mario  = require('./controllers/mario');
const contra  = require('./controllers/contra');
app.use('/controller', contra);
app.use('/mario', mario);
app.use('/goty', goty);
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const gamesModelRoute = require('./routes/gamesModel');
app.use('/gamesModel', gamesModelRoute);

const conn = require('./middlewares/connection');
console.log("Trying to establish a connection to TiDB...");

if (conn) {
  console.log("Connection to TiDB successful");
} else {
  console.log("Connection to TiDB failed");
}


//Please don't delete this health API
app.use('/api/health', (req, res) => {
    res.send('Hello Autopilot');
  });

app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});

module.exports = app;