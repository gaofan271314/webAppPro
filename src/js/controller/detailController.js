/**
 * Created by Administrator on 2017/5/21 0021.
 */
(function (angular) {
    "use strict"
    angular.module('app').controller('detailController',['$scope','$stateParams',function ($scope,$stateParams) {
        console.log($stateParams.id);
        console.log($scope.data.posts[$stateParams.id]);
        $scope.content = $scope.data.posts[$stateParams.id].content

    }])
})(angular);
