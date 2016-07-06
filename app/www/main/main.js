'use strict';

angular.module('myApp.main', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/main', {
            templateUrl: 'www/main/main.html',
            controller: 'MainCtrl'
        });
    }])

    .controller('MainCtrl', function ($scope, $rootScope, $location, $log, helper) {


        helper.setTitle();

    })

    .filter('trustAsResourceUrl', ['$sce', function ($sce) {
        return function (val) {
            return $sce.trustAsResourceUrl(val);
        };
    }])

    // .directive('errSrc', function () {
    //     return {
    //         link: function (scope, element, attrs) {
    //             element.bind('error', function () {
    //                 if (attrs.src != attrs.errSrc) {
    //                     attrs.$set('src', attrs.errSrc);
    //                 }
    //             });
    //         }
    //     }
    // })


    .directive('errSrc', function() {
        return {
            link: function(scope, element, attrs) {
                element.bind('error', function() {
                    if (attrs.src != attrs.errSrc) {
                        attrs.$set('src', attrs.errSrc);
                    }
                });

                attrs.$observe('ngSrc', function(value) {
                    if (!value && attrs.errSrc) {
                        attrs.$set('src', attrs.errSrc);
                    }
                });
            }
        }
    })

    // .directive('egDirective',[function(){
    //     // console.log("IN egDirective");
    //     return {
    //         restrict: 'A',
    //         link: function (scope,element,attributes) {
    //         console.log("IN LINK");
    //             // console.log(scope);
    //             console.log(element);
    //             console.log("ATTRI:");
    //             console.log(attributes);
    //             element.bind('click',onClick);
    //             function onClick () {
    //                 console.log("IN HTML CANVAS");
    //                 html2canvas(element,{
    //                     onrendered: function (canvas) {
    //                         // Canvas2Image.saveAsPNG(canvas);
    //
    //                         console.log("IN RENDER");
    //                         var myImage = canvas.toDataURL("image/jpeg");
    //                         console.log("MYIMG:" + myImage);
    //                         window.open(myImage);
    //                     }
    //                 });
    //             }
    //         }
    //     };
    // }])


    .directive('isActiveNav', ['$location', function ($location) {
        return {
            restrict: 'A',
            link: function (scope, element) {
                scope.location = $location;
                scope.$watch('location.path()', function (currentPath) {
                    if ('/#' + currentPath === element[0].attributes['href'].nodeValue) {
                        element.parent().addClass('active');
                        element.addClass('active');
                    } else {
                        element.parent().removeClass('active');
                        element.removeClass('active');
                    }
                });
            }
        };
    }])


;
