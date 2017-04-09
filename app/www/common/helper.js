'use strict';

angular.module('myApp.helper', ['ngRoute'])

    .factory('helper', function ($rootScope, $location, $log, $q,$routeParams, $document) {
        var isEmpty = function (obj) {
            for (var key in obj) {
                if (obj.hasOwnProperty(key))
                    return false;
            }
            return true;
        };
        return {

            getBackground: function (title) {
                var BASE = "/www/img/Background/"
                var url = "water_rock.jpg";
                if (title == "Websites") {
                    url = "website.jpeg";
                } else if (title == "Software") {
                    url = "circuit.jpg";
                } else if (title == "Games") {
                    url = "controller.jpeg";
                } else if (title == "Action") {
                    url = "dark_clouds.jpg";
                } else if (title == "Fantasy") {
                    url = "planet_fantasy.jpg";
                } else if (title == "Horror") {
                    url = "skeletons.jpg";
                }


                return "url(" + BASE + url + ")";
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
            getRouteParam: function (name) {
                // console.log("ROUTE PARAM:"+name);
                return $routeParams[name];
            },
            goto: function(id){
                var section = angular.element(document.getElementById(id));
                if (!isEmpty(section))
                {
                    $document.scrollTo(section, 50, 1000);
                }

            },
            isEmpty: function(obj){
                return isEmpty(obj);
            }
        };
    });

