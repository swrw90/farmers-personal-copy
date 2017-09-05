var express = require("express");
var userAuthRoute = express.Router();
var jwt = require("jsonwebtoken");
var config = require("../config");
var User = require("../models/user");

userAuthRoute.post("/signup", function (req, res) {
	User.find({
		email: req.body.email
	}, function (err, existingUser) {
		if (err) res.status(500).send(err);
		if (existingUser.length) {
			return res.status(404).send({
				success: false,
				message: "User already exists"
			});
		} else {
			var newUser = new User(req.body);
			newUser.save(function (err, user) {
				if (err) res.status(500).send(err);
				return res.send(user);
			})
		}
	})
});

userAuthRoute.post("/login", function (req, res) {
	User.find({
		email: req.body.email
	}, function (err, existingUser) {
		//make sure user is already there. Then if user is there make sure the
		// password matches. 
		// Send back the user obj with the token attached. 
		if (err) res.status(500).send(err);
		if (!existingUser.length || existingUser[0].password != req.body.password) {
			return res.status(401).send({ success: false, message: "Email or password is incorrect" });
		}
		var token = jwt.sign(existingUser[0].toObject(), config.secret);
		return res.send({ token: token, user: existingUser[0].toObject(), success: true, message: "I hope we recieve a token from this!" })
	})
});

module.exports = userAuthRoute;