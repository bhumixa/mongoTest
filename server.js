var express = require('express');   //Express Web Server 
var js = require('./JS/utilities.js')
var http = require('http');
var app = express();
var engine = require('ejs-locals');
global.appRoot = path.resolve(__dirname);

mongoose.connect(config.url, {server: {auto_reconnect: true,  poolSize: 10 }}, function(err) {    
    if (err) {
      console.log('errr');
      console.log(err);
    } else {
        console.log("db connected");
    }
});

var models_path = __dirname + '/App/Models'
fs.readdirSync(models_path).forEach(function (file) {
		if (~file.indexOf('.js')) require(models_path + '/' + file)
})

require('./JS/assignmodels.js')



app.engine('ejs', engine);
app.set('views', __dirname + '/App/Views');
app.set('view engine', 'ejs'); // set up ejs for templating
var bodyParser  = require("body-parser"),
app.use(bodyParser())
//app.use(express.static(__dirname + '/public'));

require('./App/routes.js')(app)
/*var attendance = new Attendance();
attendance.id = '3';
attendance.name = 'Bhavu';
attendance.save(function (err) {
	if (err) {
		console.log(err);
	}else{
		console.log('in')
	}
});*/


Attendance.find().exec(function(err,data){ 
	if(data){
		console.log(data)
	}
});


process.on('uncaughtException', function (err) {
  console.error(err.stack);
  console.log(err)
  console.log("Node NOT Exiting...");
});

var server = app.listen(process.env.PORT || 4000, function() {
  console.log('Listening on port %d', server.address().port);
});