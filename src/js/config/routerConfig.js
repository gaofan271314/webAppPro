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

    angular.module('app').config(['$stateProvider',function ($stateProvider) {
        /*配置子路由*/
        $stateProvider.state('app.index',{
            url:'/index',
            template:"<list list-item = 'data.posts'></list>"
        })
    }])

    angular.module('app').config(['$stateProvider',function ($stateProvider) {
        /*配置子路由传参*/
        $stateProvider.state('app.detail',{
            url:'/detail/:id',
            template:'<div><detail my-content="{{content}}"></detail></div>',
            /*又忘了 属性不能大写*/
            controller:'detailController'

        })
    }])
})(angular);
