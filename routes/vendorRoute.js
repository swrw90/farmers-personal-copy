var express = require("express");
var vendorRoutes = express.Router();
var Vendor = require("../models/vendor");


vendorRoutes.route("/")
	.get(function (req, res) {
		Vendor.find(function (err, vendor) {
			return res.send(vendor);
		});

	})
	.post(function (req, res) {
		// Array of JSON Objects
		if (req.body.vendors) {
			Vendor.create(req.body.vendors, function (err) {
				if (err)
					res.send(err);

				else
					res.json(req.body);
			});
		}
		// Single JSON Object
		else {
			var newOrg = new Vendor(req.body);

			// New User is saved in the db.
			var newVendor = new Vendor(req.body);
			newVendor.save(function (err, vendor) {
				if (err) return res.status(500).send(err);
				res.status(201).send(vendor);

			});
		}
	});

vendorRoutes.route("/:id")
	.put(function (req, res) {
		Vendor.findByIdAndUpdate(req.params.id, req.body, {
			new: true
		}, function (err, updatedVendor) {
			if (err) return res.status(500).send(err);
			res.status(201).send(updatedVendor);

		});
	})
	.delete(function (req, res) {
		Vendor.findByIdAndRemove(req.params.id,
			function (err, vendor) {
				if (err) return res.status(500).send(err);
				res.status(201).send(vendor);
			});

	})
	.get(function (req, res) {
		Vendor.findOne({
				_id: req.params.id
			},
			function (err, vendor) {
				if (err) return res.status(500).send(err);
				res.status(201).send(vendor);

			});
	});

module.exports = vendorRoutes;