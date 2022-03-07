const express = require('express');

const bodyParser = require('body-parser');

const route = require('./routes/route.js');
const moment = require('moment')

const { default: mongoose } = require('mongoose');

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(function (req, res, next) {

    //const dateTime = new Date().toISOString().replace(/\..+/, "");

    let now = new Date();

    const dateTime =  new moment(now).format('YYYY-MM-DD HH:mm:ss:a');

    const IP = req.ip;

    const Api = req.method + req.originalUrl;

    console.log("Timestamp:", dateTime," "," IP address ", IP," ","API", Api);

    
    next();

  });

mongoose.connect("mongodb+srv://functionup-cohort:G0Loxqc9wFEGyEeJ@cluster0.rzotr.mongodb.net/armynishad?retryWrites=true&w=majority", {
    useNewUrlParser: true

})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});