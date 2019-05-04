const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
app.use(cors());
const apiRoute = require('./routes/api/v1');
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use('/api/v1', apiRoute);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () =>
  console.log(`The server is running in http://localhost:${PORT}`)
);
