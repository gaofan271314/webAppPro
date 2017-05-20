/**
 * Created by Administrator on 2017/5/20 0020.
 */
(function (angular) {
    angular.module('app').config(['$stateProvider','$urlRouterProvider',function ($stateProvider,$urlRouterProvider) {
        /*配置主路由*/
        $stateProvider.state('app',{
            url:'/app',
            views:{
                home:{
                    templateUrl:'../view/home_tpl.html',
                    controller:'homeController'
                },
                author:{
                    template:"作者"
                },
                content:{
                    template:'栏目'
                },
                my:{
                    template:'我的'
                }
            }
        })
        $urlRouterProvider.otherwise('/app')
    }])
})(angular);
