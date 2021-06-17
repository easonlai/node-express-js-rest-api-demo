var express = require('express');
var winston = require('winston');
var app = express();
var fs = require("fs");

const logConfiguration = {
  'transports': [
      new winston.transports.Console({
        level: 'info'
      }),
      new winston.transports.File({
        level: 'info',
        filename: 'logs/log.log'
      })
  ],
  format: winston.format.combine(
    winston.format.label({
        label: 'audit log'
    }),
    winston.format.timestamp({
       format: 'DD-MM-DD-YYYY HH:mm:ss'
   }),
    winston.format.printf(info => `${info.level}, ${info.label}, ${[info.timestamp]}, ${info.message}`),
  )
};

const logger = winston.createLogger(logConfiguration);

app.get('/listSAs', (req, res) => {
   fs.readFile( __dirname + '/' + '/data/users.json', 'utf8', function (err, data) {
       //console.log( "/listUsers API is being GET." );
       res.statusMessage = 'OK';
       logger.info(`200, ${res.statusMessage}, ${req.originalUrl}, ${req.method}, ${req.ip}, ${server.address().address}`);
       res.end( data );
   });
})

app.use((req,res,next) => {
  res.status(404).send('400 PAGE NOT FOUND');
  logger.error(`400, ${res.statusMessage}, ${req.originalUrl}, ${req.method}, ${req.ip}, ${server.address().address}`);
})

// Capture 500 errors
app.use((err,req,res,next) => {
  res.status(500).send('500 SERVER ERROR');
     logger.error(`${err.status || 500}, ${err.message}, ${req.originalUrl}, ${req.method}, ${req.ip}, ${server.address().address}`);
  })

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  //console.log("RestAPI is listening at http://%s:%s", host, port)

})