/**
 * Created by Administrator on 2017/5/20 0020.
 */
(function (angular) {
    "use strict"
    /*内容排版组件(4到5种样式)*/
    angular.module("app").directive('list',function () {
        return{
            restrict:'EA',
            templateUrl:'../view/tpl/list_tpl.html',

            scope:{
                listItem:'='
            }
            /*子控制器获取父控制器的属性(其实可以直接利用控制器的作用域,此处为了使用指令作用域的修饰符   这样做的好处是:ng-repeat='item in listItem'不把listItem写死,既然是list组件,要考虑到复用性和可扩展性,<list list-item = 'data.posts'></list> 只用在这改,不用考虑组件内修改)*/
        }
    })
})(angular);