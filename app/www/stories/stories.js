'use strict';

angular.module('myApp.stories', ['ngRoute', 'angular-carousel'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/stories', {
            templateUrl: 'www/stories/stories.html',
            controller: 'StoriesCtrl'
        });
    }])

    .controller('StoriesCtrl', function (helper, $log, $scope) {
        helper.setTitle();
        $scope.genres = [];

        var addStory = function (genre, title, summary, link) {

            var genrePos = helper.getElementPos($scope.genres, "genre", genre);
            var genreObj = $scope.genres[genrePos];

            if (!genreObj) {

                console.log("NO GENRE FOR: " + genre);
                genrePos = $scope.genres.length;
                genreObj = {
                    genre: genre,
                    stories: []
                }
                $scope.genres.push(genreObj);
            }

            var storyPos = helper.getElementPos(genreObj.stories, "title", title);
            var storyObj = genreObj.stories[storyPos];

            if (!storyObj) {
                storyPos = genreObj.stories.length;
                storyObj = {
                    "title": title,
                    "summary": summary,
                    "link": link,
                    "img": "/www/img/yinyang_small.png"
                };
                $scope.genres[genrePos].stories.push(storyObj);
            }
        }


        var gen = {"ACT": "Action", "FANT": "Fantasy", "HORR": "Horror"};

        addStory(gen["ACT"], "Gun Shots", "We were just making a quick pitstop at a gas station before we continued our long drive. It wasn't long before we decided to head out, but that's when we were first attacked.", "myLink");

        addStory(gen["FANT"], "Psychic Powers", "My name is Jake Smith I freed my people from the burden of humanity. With the help of some staffs left by my ancestors I was able to return sorcery to my people. Now we face a large threat that my ancestors had failed to defeat.");

        addStory(gen["HORR"], "Ghost Children", "I never really liked driving around with my sister, even before she had a learners permit. I thought we were going to go for a little drive around time and come home for dinner, but boy was I wrong. Out of no where I end up in home with ghosts and an evil witch. I have no idea what lies ahead.", "myLink");
        addStory(gen["HORR"], "Half Human Robot", "John and William try to survive the ever growing human robots that are taking over the world. They both get captured and are placed in a prison cell. They are faced with escaping or becoming another human robot to assist taking over the world.", "myLink");
        addStory(gen["HORR"], "Magical House Dungeon", "My brother and I woke up in this random isolated room with no escape. We have to find a way out of here. I don't want to find out what hides inside these walls.", "myLink");
        addStory(gen["HORR"], "Mizuki", "A person visits his grandmother's house to find himself messing with evil cards. It doesn't take long after playing with the wrong cards to summon Mizuki, placing him and his family in deep trouble.", "myLink");
        addStory(gen["HORR"], "Suicide Cup", "A person who finds himself at a old ladies home with an evil forest. When the day turns dark unknown species appears.", "myLink");
        addStory(gen["HORR"], "Sun God", "What harm can watching a movie have? A college student finds an old movie with his family that he had found. Soon after watching the movie him and his family are sucked into the movie. They have to survive fire dogs and get out of the movie and stop it in order to save their lives and the lives of the world.", "myLink");
        addStory(gen["HORR"], "Zombie Story", "My name is Garry. Before all of the madness started I was a janitor. My job wasn't all that appealing or easy, but you kind of get used to it. In this new hell of a world I wouldn't say you ever get used to it, especially at night.", "myLink");

        // console.log("GENRES:");
        // console.log($scope.genres);


    })


;
