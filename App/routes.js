
module.exports = function(app) {
	app.get('/', function(req, res) {		
		res.render('login.ejs');
	});    
	app.post('/login', function(req, res) {	
		//console.log(req)	
		var username =  req.body.username;
		var password =  req.body.password;
		console.log(username + ' ' +password)

		if(username && password){
			res.render('index.ejs');
		}
	});    
}