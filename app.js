const express = require('express');
const router = express.Router();
const app = express();
const mongoose = require('mongoose');
const config = require('./config/database');
const path = require('path');
const dogs = require('./routes/dogs')(router);
const bodyParser = require('body-parser');
const cors = require('cors');

//database config
mongoose.Promise = global.Promise;
mongoose.connect(config.url, (err) => {
    if (err){
        console.log('NOT able to connect to database: ', err);
    }else{
        console.log('Successfully connected to database: ' + config.db);
    }
});

// middleware
app.use(cors({
    origin: 'http://localhost:4200'
}));
// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json 
app.use(bodyParser.json());
app.use(express.static(__dirname + '/client/dist/'));
app.use('/dogs', dogs);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/dist/index.html'));
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});