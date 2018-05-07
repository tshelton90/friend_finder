// Dependencies

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

//Epress app setup
const app = express();
const PORT = process.env.PORT || 3000;

//Sets up Epress to handle data parcing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require('./app/routing/htmlRoutes.js')(app);
require('./app/routing/apiRoutes.js')(app);


app.listen(PORT,() => {
    console.log(`Server is listening on http://localhost:${PORT}`);
});