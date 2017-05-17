/**
 * Created by Administrator on 2017/5/16 0016.
 */
(function (angular) {
    "use strict"
    /*创建模块*/
    var app = angular.module("app",[])
    /*创建控制器*/
    app.controller("appController",['$scope',function ($scope) {
        $scope.name = "趣闻一刻钟"
    }])
})(angular);
