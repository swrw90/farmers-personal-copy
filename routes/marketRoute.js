var express = require("express");
var marketRoutes = express.Router();
var Market = require("../models/market");


marketRoutes.route("/")
	.get(function (req, res) {
		Market.find(function (err, market) {
			return res.send(market);
		});

	})
	.post(function (req, res) {
		var newMarket = new Market(req.body);
		newMarket.save(function (err, market) {
			if (err) return res.status(500).send(err);
			res.status(201).send(market);

		});
	});

marketRoutes.route("/:id")
	.put(function (req, res) {
		Market.findByIdAndUpdate(req.params.id, req.body, {
			new: true
		}, function (err, updatedMarket) {
			if (err) return res.status(500).send(err);
			res.status(201).send(updatedMarket);

		});
	})
	.delete(function (req, res) {
		Market.findByIdAndRemove(req.params.id,
			function (err, market) {
				if (err) return res.status(500).send(err);
				res.status(201).send(market);
			});

	})
	.get(function (req, res) {
		Food.findOne({
			_id: req.params.id
		},
			function (err, market) {
				if (err) return res.status(500).send(err);
				res.status(201).send(market);

			});
	});

module.exports = marketRoutes;
