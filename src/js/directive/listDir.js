/**
 * Created by Administrator on 2017/5/20 0020.
 */
(function (angular) {
    "use strict"
    /*内容排版组件(4到5种样式)*/
    angular.module("app").directive('list',function () {
        return{
            restrict:'EA',
            templateUrl:'../view/tpl/list_tpl.html'
        }
    })
})(angular);