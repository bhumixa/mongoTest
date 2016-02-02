
module.exports = function(app) {
	app.get('/', function(req, res) {		
		res.render('login.ejs');
	}); 
	app.get('/index', function(req, res) {		
		res.render('index.ejs');
	});   
	/*app.post('/login', function(req, res) {	
		//console.log(req)	
		var username =  req.body.username;
		var password =  req.body.password;
		console.log(username + ' ' +password)

		if(username && password){
			res.render('index.ejs');
		}
	});  */  

	app.post('/login', passport.authenticate('local-login', {
        successRedirect : '/index', // redirect to the secure profile section
        failureRedirect : '/', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));
}