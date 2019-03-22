module.exports = {
	ensureAuthenticated: function(req, res, next) {
		console.log('authenticated user: ' + JSON.stringify(req.session.passport));

		// same as doing req.session.passport.user !== undefined
		if (req.isAuthenticated()) {
			console.log("user is authenticated")
			return next();
		}
		console.log('Not authenticated.. redirecting back to home.');
		res.status(401).send();
	}
}
