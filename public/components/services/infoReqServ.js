angular.module("BuyLocalApp");
// const apiString = "http://localhost:8000/"

app.service("infoReqServ", ["$http", function ($http) {
    this.getInfo = function (info) {

        // This config will handle query params for external api req
        // var config = {
        //     params: info
        // }
    //    This is for an external api request
        return $http.get("", config);
    };

// These are for handling our own data
    this.getLocalInfo = function () {
        return $http.get(apiString)
    };

    this.getVendors = function () {
        return $http.get("/api/vendor")
    }

    this.postInfo = function (localInfo) {
        return $http.post(apiString, info)
    };

    this.updateInfo = function (id, localInfo) {
        return $http.put(apiString + id, localInfo)
    };

    this.removeInfo = function (localInfo) {
        return $http.delete(apiString + info._id)
    };
}]);