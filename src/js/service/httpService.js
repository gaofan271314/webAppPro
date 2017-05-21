/**
 * Created by Administrator on 2017/5/21 0021.
 */
(function (angular) {
    "use strict"
    /*自定义服务 : (服务就是功能) 将$http服务抽取出来成一个新的服务,http常用,抽取出来,利于管理
    * 以后自定义的各种服务就相当于一个工具类*/
    angular.module("app").service('xmgHttp',['$http',function ($http) {
        this.getData = function (successFn, error) {
            $http({
                url:'http://localhost/api/home.php',
                method:'jsonp'
                /*由于设置了白名单,所以不用传参了*/
            }).then(function (res) {
                successFn(res.data);
            }).catch(function (err) {
                error(err);
            })
        }
    }])
})(angular);
