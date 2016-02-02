var express = require('express');   //Express Web Server 
var js = require('./JS/utilities.js')
var http = require('http');
var app = express();
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

var Attendance = mongoose.model('Attendance');
var attendance = new Attendance();
/*attendance.id = '2';
attendance.name = 'Kalps';
attendance.save(function (err) {
	if (err) {
		console.log(err);
	}else{
		console.log('in')
	}
});
*/

Attendance.find().exec(function(err,data){ 
	if(data){
		console.log(data)
	}
});

var server = app.listen(process.env.PORT || 6000, function() {
  console.log('Listening on port %d', server.address().port);
});