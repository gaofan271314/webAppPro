/**
 * Created by Administrator on 2017/5/17 0017.
 */
(function (angular) {
    "use strict";
    /*创建应用导航指令*/
    angular.module('app').directive('nav',function () {
        return {
            restrict:'EA',
            templateUrl:'../view/tpl/nav_tpl.html',
            /**
             * link  所有内容编译完之后，会调用 此方法 执行时， 所有DOM元素都已经加载完毕了。
             * 都是在里面处理DOM元素
             * @param $scope 就是该控制器当中的模型  (因此,此处不用手动创建子控制器)
             * @param ele 指令所在的dom元素。注意：它是一个jQlite对象
             * @param attr 指令身上绑定的所有属性
             */
            link:function ($scope,ele,attr) {
                //监听标题的变化
                $scope.$on('titleChange',function ($event,args) {
                    /*获取标题span*/
                    /*更改标题*/
                    ele.find('span').html(args.curTitle);
                });
            }
        }
    });
})(angular);