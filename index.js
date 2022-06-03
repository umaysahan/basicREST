const express = require('express');
const bodyParser = require('body-parser');

// create express app
const app = express();

// setup the server port
const port = 3000;

// parse request data content type application/x-www-form-rulencoded
app.use(bodyParser.urlencoded({extended: false}));

// parse request data content type application/json
app.use(bodyParser.json());

// define root route
app.get('/', (req, res)=>{
    res.send('Hello World');
});
// import person routes
const router = require('./src/routes/person.route.js');

// create person routes
app.use('/api/v1/person', router);

// listen to the port
app.listen(port, ()=>{
    console.log(`Express is running at port ${port}`);
    console.log("Server is running on http://localhost:3000");
}
);
module.exports = app;
