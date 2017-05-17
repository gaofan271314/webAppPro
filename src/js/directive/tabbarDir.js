/**
 * Created by Administrator on 2017/5/17 0017.
 */
(function (angular) {
    "use strict"
    /*创建底部tabbar指令*/
    angular.module("app").directive('tabbar',function () {
        return{
            restrict:'EA',
            templateUrl:'../view/tpl/tabbar_tpl.html'
        }
    })
})(angular);