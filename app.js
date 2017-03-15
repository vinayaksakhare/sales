const express =  require('express');
const path = require("path");
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

// Connect to Database
mongoose.connect(config.database);

// On Connection
mongoose.connection.on('connected', () => {
    console.log('Connected to DB ' + config.database);
});

mongoose.connection.on('error', (err) => {
    console.log('Database Error ' + err);
});

const app = express();

const users = require('./routes/users'); 

const port = 3000;

// cors Middleware
app.use(cors());

// SEt Static folder
app.use(express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(bodyParser.json());

app.use('/users', users);

// Index Route
app.get('/', (req, res) => {
    res.send('Invalid endpoint');
});

app.listen(port, () => {
    console.log('server started on port '+ port);
});
