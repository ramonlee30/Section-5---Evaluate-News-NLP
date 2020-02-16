const dotenv = require('dotenv');
dotenv.config({path: '../../.env'});
var path = require('path')
var aylien = require("aylien_textapi");
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const app = express()
const cors = require('cors');
const bodyParser = require('body-parser');

let projectData = {};

app.use(express.static('dist'))
app.use(cors());

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

console.log(__dirname)
console.log(`Your API key is ${process.env.API_KEY}`);

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

API_ID = '417ceb58'
API_KEY = 'ac2d75aeb27487027f67a0ff93c60aeb'

// set aylien API credentias
var textapi = new aylien({
    application_id: API_ID,
    application_key: API_KEY
  });

  app.post('/test', function (req, res) {
    console.log(req.body)
    return textapi.sentiment({
        url: req.body.url
      }, function(error, response) {
        if(error){
            console.log(error);
            // throw new Error(error);
            return
        }
            projectData['polarity'] = response.polarity;
            projectData['subjectivity'] = response.subjectivity;
            projectData['polarity_confidence'] = response.polarity_confidence;
            projectData['subjectivity_confidence'] = response.subjectivity_confidence;
            console.log(projectData)
            res.send(projectData);
            }); 
    });
