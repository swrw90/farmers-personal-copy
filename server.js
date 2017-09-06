var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var morgan = require("morgan");
var port = process.env.PORT || 8000;
var expressJwt = require("express-jwt");
var path = require("path");
var config = require("./config");

app.use("/api", expressJwt({
	secret: config.secret
}));

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use("/api/market", require("./routes/marketRoute"));
app.use("/api/vendor", require("./routes/vendorRoute"));
app.use("/auth", require("./routes/authRoutes"));

app.use("/api", expressJwt({
	secret: config.secret
}));

//mongoose.connect('mongodb://localhost/market');
// mongoose.connect("mongodb://localhost/vendor", function (err)

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/shopping', function (err) {
	if(err) throw err;
	console.log("connected to the database");
});

app.listen(port, function () {
	console.log("port is running on port " + port);
});