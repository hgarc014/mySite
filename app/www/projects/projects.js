'use strict';

angular.module('myApp.projects', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/projects', {
            templateUrl: 'www/projects/projects.html',
            controller: 'ProjectsCtrl'
        });
    }])

    .controller('ProjectsCtrl', function ($scope, helper, $sce,$document) {
        helper.setTitle();
        $scope.$sce = $sce;
        $scope.types = [];

        $scope.examples = [
            {
                imageUrl: 'http://placeimg.com/800/200'
            },
            {
                imageUrl: 'http://placeimg.com/800/500'
            },
            {
                imageUrl: 'http://placeimg.com/800/200'
            }
        ];

        // var myPic;
        // html2canvas([document.getElementById('exportable')], {
        //     onrendered: function (canvas) {
        //         myPic = canvas.toDataUrl("image/jpeg");
        //     }

        // var element = angular.element($document[0].querySelector('#MyID'));
        //
        // html2canvas(element, {
        //     onrendered: function (canvas) {
        //         // canvas is the final rendered <canvas> element
        //     }
        // });

        // html2canvas($("#widget"), {
        //     onrendered: function(canvas) {
        //         theCanvas = canvas;
        //         document.body.appendChild(canvas);
        //
        //         // Convert and download as image
        //         Canvas2Image.saveAsPNG(canvas);
        //         $("#img-out").append(canvas);
        //         // Clean up
        //         //document.body.removeChild(canvas);
        //     }
        // }

        // types.push({type:"value",projects:[]});

        var addProject = function (type, title, url, img, contributors, summary, time, iscs) {

            var typePos = helper.getElementPos($scope.types, "type", type);
            var typeObj = $scope.types[typePos];

            if (!typeObj) {

                // console.log("NO GENRE FOR: " + genre);
                typePos = $scope.types.length;
                typeObj = {
                    type: type,
                    projects: []
                }
                $scope.types.push(typeObj);
            }

            var projectPos = helper.getElementPos(typeObj.projects, "title", title);
            var projectObj = typeObj.projects[projectPos];

            if (!projectObj) {
                projectPos = typeObj.projects.length;
                if (img === "same")
                    img = url;
                var isImg = false;
                projectObj = {
                    "title": title,
                    "url": url,
                    "img": img,
                    "contributors": contributors,
                    "summary": summary,
                    "time": time,
                    "iscs": iscs,
                    "isImg": isImg,
                };
                // if (img) {
                //     helper.isImage(img).then(function (test) {
                //         projectObj.isImg = test;
                //     });
                // }
                $scope.types[typePos].projects.push(projectObj);
            }
        }

        // listHeader("Websites");
        addProject("Websites", "SmartDocFinder", "http://www.SmartDocFinder.com/UCR", "same", "Matthew Wiley, Michael Brevard, Ryan Rivas, Henry Garcia", "SmartDocFinder is a data-driven patient-centric service to match patients to healthcare providers, which achieves increased patient satisfaction and reduced healthcare costs.", "Developing", "");
        addProject("Websites", "TweetSearcher", "http://tweetsearcher-programhenry.rhcloud.com/TweetSearcher/TweetSearcher.html", "same", "Nicolas Lawler, Henry Garcia", "A simple tweet search engine that uses Lucene. Currently the site is hosted by a free service so it can be found offline occasionally. Tweets are fetched periodically and emptied every few days.", "Developed in 2015", "");
        addProject("Websites", "League Information", "http://programhenry.com/theleague/index.html", "same", "Henry", "A website I created for a class project. It describes some basic things about the game <a href=\"http://na.leagueoflegends.com\">League of Legends</a>", "Developed in 2012", "");
        // listHeaderClose();

        // listHeader();
        addProject("Software", "passwordCracker", "https://github.com/hgarc014/passwordCracker", "http://programhenry.com/Pictures/passwordCracker.png", "Henry Garcia", "A basic multi-threaded brute force password cracker written in c/c++.  ", "Developed in 2015", "");
        addProject("Software", "twitter", "https://github.com/hgarc014/twitter", "http://programhenry.com/Pictures/twitter_terminal.png", "Henry Garcia", "A basic terminal version of twitter with real time updates. written in python. ", "Developed in 2015", "");
        addProject("Software", "rshell", "https://github.com/hgarc014/rshell", "", "Henry Garcia", "A basic terminal based on bash, developed using c/c++ and helped tested with bash.", "Developed in 2014", "");
        // listHeaderClose();

        // listHeader();
        addProject("Games", "DodgeBall", "https://www.youtube.com/watch?v=1tNON1eCtzk", "https://www.youtube.com/embed/1tNON1eCtzk", "Henry Garcia", "An embedded system game I created using an atmega1284 chip and some other componenets. The goal is to dodge the balls that keep coming toward you.", "Developed in 2015", "");
        addProject("Games", "git-game-v2", "https://github.com/git-game/git-game-v2", "", "Calvin Kwan, John Dixon, Juan Ruelas, Henry Garcia", "A sequel to git-game that tests your skills on harder github commands.", "Developed in 2015", "");
        addProject("Games", "git-game", "https://github.com/git-game/git-game", "", "Daniel Rameriez, Henry Garcia", "A terminal based game that tests your skills on github (a version control system). You can see all versions of git-game <a href=\"https://github.com/git-game\"> here </a>", "Developed in 2014", "");
        addProject("Games", "Adventures of Brady", "/Adventures of Brady.zip", "", "Rodrigo Aguayo, Henry Garcia", "A game created using <a href=\"http://www.yoyogames.com/studio\">GameMaker</a>. You play as Mr. Brady and have to kill the zombie leader in order to save the world from the zombie apocalypse.", "Developed in 2013", "");
        addProject("Games", "Hangman (windows terminal)", "/Hangman.zip", "", "Henry Garcia", "A terminal based hang man game.", "Developed in 2013");
        addProject("Games", "Platform", "/Platform.zip", "", "Henry Garcia", "A platforming game that involves the main character as a rectangle. He neeeds to get to the exit. This game was made with <a href=\"http://www.yoyogames.com/studio\">GameMaker</a>.", "Developed in 2010", "");
        // listHeaderClose();

        // listHeader(,"notcs");
        addProject("Videos", "Disco Macbeth", "https://www.youtube.com/watch?v=xrrfrg1JDy0&feature=player_embedded", "https://www.youtube.com/embed/xrrfrg1JDy0", "Mayra, Michael, Yoenai, Rodrigo, Andy, Alberto, Carlos, Henry", "A Scene from Macbeth that we twisted into a dance off.", "Developed in 2013", "notcs");
        addProject("Videos", "Z.O.M.B.E.E.Z", "https://www.youtube.com/watch?v=ZqzkFYdHkiU", "https://www.youtube.com/embed/ZqzkFYdHkiU", "Rodrigo, Michael, Ramon, Andy, Henry", "A video made to showcase our Adventures of Brady game.", "Developed in 2013", "notcs");
        addProject("Videos", "Presidential Election", "https://www.youtube.com/watch?v=ErWBcqnp0rg", "https://www.youtube.com/embed/ErWBcqnp0rg", "Rodrigo, Grant, Josh, Jessica, Henry", "A play that we created for an English class in High School.", "Developed in 2011", "notcs");
        addProject("Videos", "Richards show", "https://www.youtube.com/watch?v=75OIQ8DI_7g", "https://www.youtube.com/embed/75OIQ8DI_7g", "Richard Garcia, David Garcia, Henry Garcia", "A little video that my brother wanted to make when he was young.", "Developed in 2010", "notcs");
        // listHeaderClose();

    })


;
