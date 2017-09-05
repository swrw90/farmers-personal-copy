var app = angular.module("BuyLocalApp");
app.controller("VendorsCtrl", ["$scope", "infoReqServ", function ($scope, infoReqServ) {

	$scope.fetchVendor = function (info) {
		infoReqServ.getVendors(info).then(function (response) {

			$scope.vendors = response.data;
			console.log(response.data)

		})
	}
}]);
