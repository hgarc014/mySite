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

            }
        };
    })

