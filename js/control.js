/**
 * Created by Admin on 2017/8/9.
 */
(function () {
    var myApp=angular.module('myApp',['ui.bootstrap','ui.router']);
    myApp.config(['$stateProvider','$urlRouterProvider',function ($stateProvider,$urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state("index",{
                url:'/',
                views:{
                    "main":{templateUrl: 'tml/indextml.html'}
                }
            })
            .state('info',{
                url:'/info',
                views:{
                    "main":{templateUrl: 'tml/infotml.html'}
                }
            })
            .state('quality',{
                url:'/quality',
                views:{
                    "main":{templateUrl: 'tml/qualitytml.html'},
                    "qualityDM@quality'":{templateUrl: 'tml/qualitytml/data.html'}
                }
            })
            .state('quality.qualityData',{
                url:'/qualityData',
                views:{
                    "qualityDM":{templateUrl: 'tml/qualitytml/data.html'}
                }
            })
                .state('quality.qualityMap',{
                url:'/qualityMap',
                views:{
                    "qualityDM":{templateUrl: 'tml/qualitytml/map.html'}
                }
            })

            .state('rankingList',{
                url:'/rankingList',
                views:{
                    "main":{templateUrl: 'tml/rankingList.html'}
                }
            })










    }]);
})();