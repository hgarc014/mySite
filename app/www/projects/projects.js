'use strict';

angular.module('myApp.projects', ['ngRoute','ui.bootstrap'])

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

        var addProject = function (type, title, url, img, contributors, summary, time, iscs) {

            var typePos = helper.getElementPos($scope.types, "type", type);
            var typeObj = $scope.types[typePos];

            if (!typeObj) {

                // console.log("NO GENRE FOR: " + genre);
                typePos = $scope.types.length;
                typeObj = {
                    type: type,
                    projects: [],
                    bg:{'background-image' : helper.getBackground(type)}

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
        addProject("Websites", "SmartDocFinder", "http://www.SmartDocFinder.com/UCR", "www/img/SDF.png",
            "<a target='_blank' href=\"https://www.linkedin.com/company/10686652?trk=vsrp_companies_res_name&trkInfo=VSRPsearchId%3A3411264871474157431642%2CVSRPtargetId%3A10686652%2CVSRPcmpt%3Aprimary\">SmartDocFinder team</a>",
            "SmartDocFinder is a data-driven patient-centric service to match patients to healthcare providers, " +
            "which achieves increased patient satisfaction and reduced healthcare costs.",
            "Developing", "");
        addProject("Websites", "TweetSearcher", "http://tweetsearcher-programhenry.rhcloud.com/TweetSearcher/TweetSearcher.html",
            "www/img/TweetSearcher.png", "Nicolas Lawler, Henry Garcia", "A simple tweet search engine that uses Lucene. " +
            "Currently the site is hosted by a free service so it can be found offline occasionally. " +
            "Tweets are fetched periodically and emptied every few days.",
            "Developed in 2015", "");
        // addProject("Websites", "League Information", "http://programhenry.com/theleague/index.html", "www/img/League.png", "Henry",
        //     "My first website created using html. It refers to a computer game called \"League of Legends\"",
        //     "Developed in 2012", "");
        // listHeaderClose();

        // listHeader();
        addProject("Software", "passwordCracker", "https://github.com/hgarc014/passwordCracker", "www/img/passwordCracker.png",
            "Henry Garcia", "A basic multi-threaded brute force password cracker written in c/c++.  ",
            "Developed in 2015", "");
        addProject("Software", "twitter", "https://github.com/hgarc014/twitter", "www/img/twitter_terminal.png",
            "Henry Garcia", "A basic terminal version of twitter with real time updates. written in python. ",
            "Developed in 2015", "");
        addProject("Software", "rshell", "https://github.com/hgarc014/rshell", "www/img/rshell.png", "Henry Garcia",
            "A basic terminal based on bash, developed using c/c++ and helped tested with bash.",
            "Developed in 2014", "");
        // listHeaderClose();

        // listHeader();
        addProject("Games", "DodgeBall", "https://www.youtube.com/watch?v=1tNON1eCtzk", "www/img/dodgeball.png",
            "Henry Garcia", "An embedded system game I created using an atmega1284 chip and some other componenets. " +
            "The goal is to dodge the balls that keep coming toward you.",
            "Developed in 2015", "");
        addProject("Games", "git-game-v2", "https://github.com/git-game/git-game-v2", "www/img/git-game2.jpg", "Calvin Kwan, John Dixon, Juan Ruelas, Henry Garcia",
            "A sequel to git-game that tests your skills on harder github commands.",
            "Developed in 2015", "");
        addProject("Games", "git-game", "https://github.com/git-game/git-game", "www/img/git-game.png", "Daniel Rameriez, Henry Garcia",
            "A terminal based game that tests your skills on github (a version control system). " +
            "You can see all versions of git-game <a href=\"https://github.com/git-game\"> here </a>",
            "Developed in 2014", "");
        addProject("Games", "Adventures of Brady", "/Downloads/Games/Adventures of Brady.zip", "", "Rodrigo Aguayo, Henry Garcia",
            "A game created using <a href=\"http://www.yoyogames.com/studio\">GameMaker</a>. " +
            "You play as Mr. Brady and have to kill the zombie leader in order to save the world from the zombie apocalypse.",
            "Developed in 2013", "");
        addProject("Games", "Hangman (windows terminal)", "/Downloads/Games/Hangman.zip", "", "Henry Garcia",
            "A terminal based hang man game.",
            "Developed in 2013");
        addProject("Games", "Platform", "/Downloads/Games/Platform.zip", "", "Henry Garcia",
            "A platforming game that involves the main character as a rectangle. He neeeds to get to the exit. " +
            "This game was made with <a href=\"http://www.yoyogames.com/studio\">GameMaker</a>.",
            "Developed in 2010", "");
        // listHeaderClose();

        // // listHeader(,"notcs");
        // addProject("Videos", "Disco Macbeth", "https://www.youtube.com/watch?v=xrrfrg1JDy0&feature=player_embedded",
        //     "https://www.youtube.com/embed/xrrfrg1JDy0", "Mayra, Michael, Yoenai, Rodrigo, Andy, Alberto, Carlos, Henry",
        //     "A Scene from Macbeth that we twisted into a dance off.",
        //     "Developed in 2013", "notcs");
        // addProject("Videos", "Z.O.M.B.E.E.Z", "https://www.youtube.com/watch?v=ZqzkFYdHkiU", "https://www.youtube.com/embed/ZqzkFYdHkiU",
        //     "Rodrigo, Michael, Ramon, Andy, Henry", "A video made to showcase our Adventures of Brady game.",
        //     "Developed in 2013", "notcs");
        // addProject("Videos", "Presidential Election", "https://www.youtube.com/watch?v=ErWBcqnp0rg", "https://www.youtube.com/embed/ErWBcqnp0rg",
        //     "Rodrigo, Grant, Josh, Jessica, Henry",
        //     "A play that we created for an English class in High School.",
        //     "Developed in 2011", "notcs");
        // addProject("Videos", "Richards show", "https://www.youtube.com/watch?v=75OIQ8DI_7g", "https://www.youtube.com/embed/75OIQ8DI_7g",
        //     "Richard Garcia, David Garcia, Henry Garcia",
        //     "A little video that my brother wanted to make when he was young.",
        //     "Developed in 2010", "notcs");
        // // listHeaderClose();


    })


;
