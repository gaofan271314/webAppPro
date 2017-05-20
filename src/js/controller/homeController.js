/**
 * Created by Administrator on 2017/5/21 0021.
 */
(function (angular) {
    "use strict"
    angular.module('app').controller('homeController',['$scope','$http',function ($scope, $http) {
        /*请求数据*/
        $http({
            url:'http://localhost/api/home.php',
            method:'jsonp'
            /*由于设置了白名单,所以不用传参了*/
        }).then(function (res) {
            console.log(res.data);
        }).catch(function (err) {

        })
    }])
})(angular);
