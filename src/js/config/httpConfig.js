/**
 * Created by Administrator on 2017/5/21 0021.
 */
(function (angular) {
    "use strict"
    angular.module("app").config(['$sceDelegateProvider',function ($sceDelegateProvider) {
            $sceDelegateProvider.resourceUrlWhitelist([
                'self',
                'http://localhost/api/**'
            ]);
        }])
})(angular);

