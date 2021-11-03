const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

routerApi(app);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
