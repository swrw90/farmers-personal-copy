var mongoose = require('mongoose');

var Schema = mongoose.Schema;

// create a schema
var marketSchema = new Schema({
	name: String,
	day: String,
	month: String,
	time: String,
	address:String,
	vendors: [{
				type: mongoose.Schema.Types.ObjectId,
				ref: "Vendor"
 }]
});

module.exports = mongoose.model("Market", marketSchema);