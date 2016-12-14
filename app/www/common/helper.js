'use strict';

angular.module('myApp.helper', ['ngRoute'])

    .factory('helper', function ($rootScope, $location, $log,$q) {
        return {

            getBackground :function(title){
                var BASE = "/www/img/Background/"
                var url = "water_rock.jpg";
                if( title == "Websites"){
                    url = "website.jpeg";
                } else if( title == "Software"){
                    url = "circuit.jpg";
                } else if (title == "Games"){
                    url = "controller.jpeg";
                } else if (title == "Action"){
                    url = "dark_clouds.jpg";
                } else if (title == "Fantasy"){
                    url = "planet_fantasy.jpg";
                } else if (title == "Horror"){
                    url = "skeletons.jpg";
                }


                return "url("+BASE + url+")";
            },
            
            isImage: function (src) {

                var deferred = $q.defer();

                var image = new Image();
                image.onerror = function () {
                    deferred.resolve(false);
                };
                image.onload = function () {
                    deferred.resolve(true);
                };
                image.src = src;

                return deferred.promise;
            },
            getElementPos: function (array, elem, elemVal) {
                var pos = -1;
                for (var i in array) {
                    if (array[i][elem] === elemVal) {
                        pos = i;
                        break;
                    }
                }
                return pos;

            },
            setTitle: function () {
                //Setting Title
                var titles = {};

                titles["/"] = "Henry";
                titles["/main"] = titles["/"];
                titles["/courses"] = "Henry's courses";
                titles["/projects"] = "Henry's projects";
                titles["/stories"] = "Henry's stories";


                var isEmpty = function (obj) {
                    for (var key in obj) {
                        if (obj.hasOwnProperty(key))
                            return false;
                    }
                    return true;
                }

                // var setTitle = function () {
                //     console.log("SETTING TITLE");
                if (!isEmpty(titles[$location.path()])) {
                    // console.log("found position " + titles[$location.path()]);
                    $rootScope.pageTitle = titles[$location.path()];
                }
                // }

                // setTitle();
                // $rootScope.$on('$routeChangeSuccess', function () {
                //     setTitle();
                //     // console.log("Header handled");
                //     // Possible place to put in anchor handling? see http://stackoverflow.com/a/14717011 --Jon
                // });
            }
        };
    })

