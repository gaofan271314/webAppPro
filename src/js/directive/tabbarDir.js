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
            /*利用事件冒泡机制(具体到这 控制器的作用域)减少一步子控制让父控制器做事的广播
            * 直接在父控制器定义tabbar点击方法*/
        }
    })
})(angular);