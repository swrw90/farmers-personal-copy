var app = angular.module("BuyLocalApp");
app.controller("VendorCtrl", ["$scope", "infoReqServ", "$routeParams", function ($scope, infoReqServ, $routeParams, cartStorage) {

    infoReqServ.getVendors().then(function (response) {
        for (var i = 0; i < response.data.length; i++) {
            if (response.data[i]._id === $routeParams.vendorId) {
                $scope.vendorInfo = response.data[i];
            }
        }
    });
}]);