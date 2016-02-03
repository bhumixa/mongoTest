
module.exports = function(app) {
	app.get('/', function(req, res) {		
		res.render('login.ejs', { message: req.flash('loginMessage') });
	}); 
	app.get('/home', function(req, res) {		
		res.redirect('/index#/dashboard');
	}); 
	app.get('/index', function(req, res) {   
		res.render('index.ejs'); 
	}); 
	app.get('/signup', function(req, res) {
        res.render('signup.ejs', { message: req.flash('signupMessage') });
    }); 
    app.get('/content', function(req, res) {       
		res.render('content.ejs'); 
	});
    app.get('/dashboard', function(req, res) {		
		res.render('dashboard.ejs');
	});  
	app.post('/signup', passport.authenticate('local-signup', {
        successRedirect : '/home', // redirect to the secure profile section
        failureRedirect : '/signup', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));
	app.post('/login', passport.authenticate('local-login', {
        successRedirect : '/home', // redirect to the secure profile section
        failureRedirect : '/', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));
}