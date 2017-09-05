
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var userSchema = new Schema({
	firstName: String,
	lastName: String,
	email: {
		type: String,
		required: true,
		unique: true,
		lowercase: true
	},


	password: {
		type: String,
		required: true,
	}
});

module.exports = mongoose.model("User", userSchema);
