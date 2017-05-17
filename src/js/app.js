/**
 * Created by Administrator on 2017/5/16 0016.
 */
(function (angular) {
    "use strict"
    /*创建模块*/
    var app = angular.module("app",[])
    /*创建控制器*/
    app.controller("appController",['$scope',function ($scope) {
        $scope.name = "趣闻一刻钟";
        /*记录当前点击的类型*/
        $scope.type = 'home';
        /*记录当前的导航*/
        $scope.title = "趣闻一刻钟"
        /*监听tabbar通知*/
        $scope.tabbarClick = function (args) {
            $scope.type = args;
            switch(args){
                case 'home':
                    $scope.title = "趣闻一刻钟";
                    break;
                case 'author':
                    $scope.title = "作者";
                    break;
                case 'content':
                    $scope.title = "我的";
                    break;
                case 'my':
                    $scope.title = "趣闻一刻钟";
                    break;
            }
            /*发广播  改标题*/
            $scope.$broadcast('titleChange',{type:args,curTitle:$scope.title})
        }
    }])
})(angular);
