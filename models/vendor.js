var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var vendorSchema = new Schema({
	name: String,
	summary: String,
	owner: String,
	email: String,
	phone: String,
	url: String,
	imageUrl: String,
	produce: [{
		category: String,
		name: String,
		price: String,
		imgUrl: String
	}]
});
module.exports = mongoose.model("Vendor", vendorSchema);