/**
 * Created by Administrator on 2017/5/17 0017.
 */
(function (angular) {
    "use strict"

    angular.module("app").directive('detail',function () {
        return{
            restrict:'EA',
            templateUrl:'../view/tpl/detail_tpl.html',
            /**
             * link  所有内容编译完之后，会调用 此方法 执行时， 所有DOM元素都已经加载完毕了。
             * 都是在里面处理DOM元素
             * @param $scope 就是该控制器当中的模型
             * @param ele 指令所在的dom元素。注意：它是一个jQlite对象
             * @param attr 指令身上绑定的所有属性
             */
            link:function ($scope, ele, attr) {
                ele.html(attr.myContent);
                console.log(attr);
            }

        }
    })
})(angular);