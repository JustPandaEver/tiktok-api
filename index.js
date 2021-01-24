var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var eventsRouter = require('./events-router');
var tiktok = require('./tik');

var app = express();
const PORT = process.env.PORT || 8080;

app.use(morgan('dev'));
app.use(express.static('client'));


app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,recording-session");
    next();
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/tiktok', tiktok);

app.listen(PORT, () => {
    console.log(`Server Run on port ${PORT}`)
});
