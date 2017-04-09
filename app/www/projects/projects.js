'use strict';

angular.module('myApp.projects', ['ngRoute', 'ui.bootstrap'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/projects', {
            templateUrl: 'www/projects/projects.html',
            controller: 'ProjectsCtrl'
        });
    }])

    .controller('ProjectsCtrl', function ($scope, helper, $sce, $document, $timeout) {
        $scope.$sce = $sce;

        var websites = {
            "type": "Websites",
            "bg": {
                "background-image": "url(/www/img/Background/website.jpeg)"
            },
            "projects": [
                {
                    "title": "SmartDocFinder",
                    "url": "http://www.SmartDocFinder.com/UCR",
                    "img": "www/img/SDF.png",
                    "contributors": "<a target='_blank' href=\"https://www.linkedin.com/company-beta/10686652/\">SmartDocFinder team</a>",
                    "summary": "SmartDocFinder is a data-driven patient-centric service to match patients to healthcare providers, which achieves increased patient satisfaction and reduced healthcare costs.",
                    "time": "Developing",
                    "iscs": "",
                    "isImg": false
                },
                {
                    "title": "TweetSearcher",
                    "url": "http://tweetsearcher-programhenry.rhcloud.com/TweetSearcher/TweetSearcher.html",
                    "img": "www/img/TweetSearcher.png",
                    "contributors": "Nicolas Lawler, Henry Garcia",
                    "summary": "A simple tweet search engine that uses Lucene. Currently the site is hosted by a free service so it can be found offline occasionally. Tweets are fetched periodically and emptied every few days.",
                    "time": "Developed in 2015",
                    "iscs": "",
                    "isImg": false
                }
                // ,{
                //     title: "League Information",
                //     url: "http://programhenry.com/theleague/index.html",
                //     img: "www/img/League.png",
                //     contributors: "Henry",
                //     summary: "My first website created using html. It refers to a computer game called \"League of Legends\"",
                //     time: "Developed in 2012",
                //     iscs: "",
                //     isImg: false
                // },
                // {
                //     title: "",
                //     url: "",
                //     img: "",
                //     contributors: "",
                //     summary: "",
                //     time: "",
                //     iscs: "",
                //     isImg: false
                // }
            ]
        };
        var software = {
            "type": "Software",
            "bg": {
                "background-image": "url(/www/img/Background/circuit.jpg)"
            },
            "projects": [
                {
                    "title": "passwordCracker",
                    "url": "https://github.com/hgarc014/passwordCracker",
                    "img": "www/img/passwordCracker.png",
                    "contributors": "Henry Garcia",
                    "summary": "A basic multi-threaded brute force password cracker written in c/c++.  ",
                    "time": "Developed in 2015",
                    "iscs": "",
                    "isImg": false,
                },
                {
                    "title": "twitter",
                    "url": "https://github.com/hgarc014/twitter",
                    "img": "www/img/twitter_terminal.png",
                    "contributors": "Henry Garcia",
                    "summary": "A basic terminal version of twitter with real time updates. written in python. ",
                    "time": "Developed in 2015",
                    "iscs": "",
                    "isImg": false,
                },
                {
                    "title": "rshell",
                    "url": "https://github.com/hgarc014/rshell",
                    "img": "www/img/rshell.png",
                    "contributors": "Henry Garcia",
                    "summary": "A basic terminal based on bash, developed using c/c++ and helped tested with bash.",
                    "time": "Developed in 2014",
                    "iscs": "",
                    "isImg": false,
                }
            ]
        };
        var games = {
            "type": "Games",
            "bg": {
                "background-image": "url(/www/img/Background/controller.jpeg)"
            },
            "projects": [
                {
                    "title": "DodgeBall",
                    "url": "https://www.youtube.com/watch?v=1tNON1eCtzk",
                    "img": "www/img/dodgeball.png",
                    "contributors": "Henry Garcia",
                    "summary": "An embedded system game I created using an atmega1284 chip and some other componenets. The goal is to dodge the balls that keep coming toward you.",
                    "time": "Developed in 2015",
                    "iscs": "",
                    "isImg": false,
                },
                {
                    "title": "git-game-v2",
                    "url": "https://github.com/git-game/git-game-v2",
                    "img": "www/img/git-game2.jpg",
                    "contributors": "Calvin Kwan, John Dixon, Juan Ruelas, Henry Garcia",
                    "summary": "A sequel to git-game that tests your skills on harder github commands.",
                    "time": "Developed in 2015",
                    "iscs": "",
                    "isImg": false,
                },
                {
                    "title": "git-game",
                    "url": "https://github.com/git-game/git-game",
                    "img": "www/img/git-game.png",
                    "contributors": "Daniel Rameriez, Henry Garcia",
                    "summary": "A terminal based game that tests your skills on github (a version control system). You can see all versions of git-game <a href=\"https://github.com/git-game\"> here </a>",
                    "time": "Developed in 2014",
                    "iscs": "",
                    "isImg": false,
                },
                {
                    "title": "Adventures of Brady",
                    "url": "/Downloads/Games/Adventures of Brady.zip",
                    "img": "",
                    "contributors": "Rodrigo Aguayo, Henry Garcia",
                    "summary": "A game created using <a href=\"http://www.yoyogames.com/studio\">GameMaker</a>. You play as Mr. Brady and have to kill the zombie leader in order to save the world from the zombie apocalypse.",
                    "time": "Developed in 2013",
                    "iscs": "",
                    "isImg": false,
                },
                {
                    "title": "Hangman (windows terminal)",
                    "url": "/Downloads/Games/Hangman.zip",
                    "img": "",
                    "contributors": "Henry Garcia",
                    "summary": "A terminal based hang man game.",
                    "time": "Developed in 2013",
                    "isImg": false,
                },
                {
                    "title": "Platform",
                    "url": "/Downloads/Games/Platform.zip",
                    "img": "",
                    "contributors": "Henry Garcia",
                    "summary": "A platforming game that involves the main character as a rectangle. He neeeds to get to the exit. This game was made with <a href=\"http://www.yoyogames.com/studio\">GameMaker</a>.",
                    "time": "Developed in 2010",
                    "iscs": "",
                    "isImg": false,
                }
            ]
        };



        $scope.types =
            [
                websites,
                software,
                games
            ];


        $scope.goto = function (id) {
            console.log("ID:"+id);
            var docel = document.getElementById(id);
            console.log(docel);
            var section = angular.element(docel);
            console.log(section);
            if (!helper.isEmpty(section)){
                console.log("GOING TO SECTION");
                $document.scrollTo(section, 50, 1000);
            }
        };
        $document.ready(function(){
            var slide = helper.getRouteParam("slide");
            if (slide) {
                var id= helper.getRouteParam("id");
                helper.goto(id);

                // $scope.goto(id);
                var found = false;
                for (var typePos in $scope.types) {
                    if (found)
                        break;
                    for (var p in $scope.types[typePos].projects) {
                        if ($scope.types[typePos].projects[p].title == slide) {
                            found = true;

                            $scope.types[typePos].active = parseInt(p, 10);
                            break;
                        }
                    }
                }

            }
        });

        // function moveDown(){

        // }




    })


;
