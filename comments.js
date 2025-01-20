// Create web server
// To run this program, you need to install the express library
// npm install express
// npm install body-parser
// npm install request
// npm install ejs
// npm install nodemailer
// npm install nodemailer-smtp-transport

var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');

// Create a new instance of express
var app = express();

// Set the view engine to ejs
app.set('view engine', 'ejs');

// Use the body-parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Create a POST endpoint that will receive the data from the form
app.post('/submit', function (req, res) {
  // Get the data from the form
  var name = req.body.name;
  var email = req.body.email;
  var message = req.body.message;

  // Send an email using nodemailer
  var transporter = nodemailer.createTransport(smtpTransport({
    service: 'gmail',
    auth: {
      user: '



