/**
 * Created by Administrator on 2017/5/21 0021.
 */
(function (angular) {
    "use strict"
    angular.module('app').controller('homeController',['$scope','xmgHttp',function ($scope, xmgHttp) {
        /*请求数据  xmgHttp自定义服务*/
        xmgHttp.getData(function (data) {
            console.log(data);
            $scope.data = data;
        },function (error) {

        })

    }])
})(angular);
