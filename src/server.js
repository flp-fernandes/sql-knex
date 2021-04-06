const express = require('express');


const app = express();
const routes = require('./routes');
const { port } = require('./env');

app.use(routes);

app.listen(port, () => console.log(`Server is running on port ${port}`));