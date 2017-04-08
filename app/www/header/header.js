'use strict';

angular.module('myApp.header', ['ngRoute', 'ui.bootstrap'])

// .config(['$routeProvider', function ($routeProvider) {
//     $routeProvider.when('/main', {
//         templateUrl: 'www/main/main.html',
//         controller: 'MainCtrl'
//     });
// }])

    .controller('HeaderCtrl', function ($scope, $rootScope, $location, $log, helper, $window) {


        ////---------------------- Variables ----------------------------------///

        $scope.selectedIndex = -1;
        $scope.showTop = true;

        $scope.navbar = {
            isNavCollapsed: true,
            dropdown: false
        };

        $scope.navPages = [
            {
                name: "Home",
                page: "main",
                title: "Henry"
            },
            // {
            //     name: "Stories",
            //     page: "stories",
            //     title: "Henry's stories"
            // },
            {
                name: "Projects",
                page: "projects",
                title: "Henry's projects"
            }
            // {
            //     name: "Courses",
            //     page: "courses",
            //     title: "Henry's courses"
            // },
            // {name:"Resume",url:"https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwjt65fCipfPAhUQzmMKHZGfAZsQPAgD#hl=en&q=est&btnK=Google+Search"}
        ];
        var titles = {};
        titles["/"] = "Henry";
        for (var page in $scope.navPages) {
            titles["/" + page.page] = page.title;
        }

        ////---------------------- local functions ----------------------------------///

        var isEmpty = function (obj) {
            for (var key in obj) {
                if (obj.hasOwnProperty(key))
                    return false;
            }
            return true;
        };

        ////---------------------- Scope functions ----------------------------------///

        // $scope.checkDropdown = function(dropdown){
        //     // console.log("NAV:");
        //     // console.log($scope.navbar);
        //     dropdown = !dropdown;
        //     // $scope.navbar.dropdown = !$scope.navbar.dropdown;
        // }

        $scope.UpdatePageIndex = function () {


            if (!isEmpty(titles[$location.path()])) {
                // console.log("found position " + titles[$location.path()]);
                $rootScope.pageTitle = titles[$location.path()];
            }

            for (var pos in $scope.navPages) {
                // console.log("/"+$scope.navPages[pos].page + "===" + $location.path());
                if ($scope.navPages[pos].page && "/" + $scope.navPages[pos].page === $location.path()) {
                    $scope.selectedIndex = pos;
                }
            }
        };


        $scope.updatePage = function (index) {
            if ($scope.navPages[index].url) {
                $window.open($scope.navPages[index].url, '_blank');
                // $location.href = $scope.navPages[index].url;
            } else {
                console.log($scope.navbar.isNavCollapsed);
                if (!$scope.navbar.isNavCollapsed)
                    $scope.navbar.isNavCollapsed = true;
                console.log($scope.isNavCollapsed);
                $location.url($scope.navPages[index].page);
                $scope.selectedIndex = index;
            }

        };

        ////---------------------- Root Scope functions ----------------------------------///

        $rootScope.$on('$routeChangeSuccess', function () {
            $scope.UpdatePageIndex();
        });

    })

    ////---------------------- Directives and filters ----------------------------------///

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


    .directive('errSrc', function () {
        return {
            link: function (scope, element, attrs) {
                element.bind('error', function () {
                    if (attrs.src != attrs.errSrc) {
                        attrs.$set('src', attrs.errSrc);
                    }
                });

                attrs.$observe('ngSrc', function (value) {
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
