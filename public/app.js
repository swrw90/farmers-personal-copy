var app = angular.module("BuyLocalApp", ["ngRoute", "Auth"]);
app.config(["$routeProvider", function ($routeProvider) {
	$routeProvider
		.when("/home", {
			templateUrl: "components/home/home.html"
		})
		.when("/vendor/:vendorId", {
			templateUrl: "components/vendor/vendor.html",
			controller: "VendorCtrl"
		})
		.when("/vendors", {
			templateUrl: "components/vendors/vendors.html",
			controller: "VendorsCtrl"
		})
		.when("/about", {
			templateUrl: "components/about/about.html"

		})

		.otherwise("/home", {
			redirectTo: "components/home/home.html"
		});
}]);
