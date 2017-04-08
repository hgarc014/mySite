'use strict';

angular.module('myApp.courses', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/courses', {
            templateUrl: 'www/courses/courses.html',
            controller: 'CoursesCtrl'
        });
    }])

    .controller('CoursesCtrl', function ($scope, helper, $filter) {


        var getElementPos = function (array, elem, elemVal) {
            var pos = -1;
            for (var i in array) {
                if (array[i][elem] === elemVal) {
                    pos = i;
                    break;
                }
            }
            return pos;

        }


        var addCourse = function (year, season, courseName) {


            var yearsPos = helper.getElementPos($scope.years, "year", year);
            var yearsObj = $scope.years[yearsPos];

            if (!yearsObj) {
                // console.log("ADDED YEAR");
                $scope.years.push({
                    year: year,
                    seasons: [{season: season, courses: [{courseName: courseName}]}]
                });
                return;
            }

            var seasonsPos = helper.getElementPos(yearsObj.seasons, "season", season);
            var seasonsObj = yearsObj.seasons[seasonsPos];

            if (!seasonsObj) {
                // console.log("ADDED SEASON");
                $scope.years[yearsPos].seasons.push({season: season, courses: [{courseName: courseName}]});
                return;
            }

            var coursesPos = helper.getElementPos(seasonsObj.courses, "courseName", courseName);
            var coursesObj = seasonsObj.courses[coursesPos];

            if (!coursesObj) {
                $scope.years[yearsPos].seasons[seasonsPos].courses.push({courseName: courseName});
                return;
            }

        };

        var addGPA =  function(year,gpa){
            var yearsPos = helper.getElementPos($scope.years, "year", year);
            var yearsObj = $scope.years[yearsPos];

            yearsObj.gpa = gpa;
        };

        $scope.years = [];
        var sea = {F: "Fall", S: "Spring", W: "Winter", U: "Summer"};

        addCourse("2016 - 2017", sea.F, "ENGR180W: Technical Communications");
        addCourse("2016 - 2017", sea.F, "ANTH001: Cultural Anthropology");
        addCourse("2016 - 2017", sea.F, "ECON003: Introduction to Microeconomics");
        addCourse("2016 - 2017", sea.F, "HIST015: World History: 1500 to 1900");
        addCourse("2016 - 2017", sea.W, "Coming Soon");
        addCourse("2016 - 2017", sea.S, "Coming Soon");
        addGPA("2016 - 2017",3.828);


        //3.828
        addCourse("2015 - 2016", sea.F, "CS 164: Computer Networks");
        addCourse("2015 - 2016", sea.F, "CS 165: Computer Security");
        addCourse("2015 - 2016", sea.F, "BIOL002: Cellular Basis of Life");
        addCourse("2015 - 2016", sea.F, "ENGR101I: Professional Development and Mentoring");
        addCourse("2015 - 2016", sea.W, "CS 150: Automata and Formal Languages");
        addCourse("2015 - 2016", sea.W, "CS 161: Design Architecture of Computer Systems");
        addCourse("2015 - 2016", sea.W, "CS 161L: Laboratory in Design and Architecture of Computer Systems");
        addCourse("2015 - 2016", sea.W, "CS 166: Database Management Systems");
        addCourse("2015 - 2016", sea.W, "STAT 155: PROBABLTY & STATSTCS");
        addCourse("2015 - 2016", sea.S, "CS 179G: Database Systems");
        addCourse("2015 - 2016", sea.S, "CS 180: Intro to Software Engineering");
        addCourse("2015 - 2016", sea.S, "EE 020: Linear Methods for Engineering Analysis and Design Using MATLAB");
        addGPA("2015 - 2016",3.828);


        //3.814
        addCourse("2014 - 2015", sea.F, "CS 141: Intermediate Data Structures and Algorithms");
        addCourse("2014 - 2015", sea.F, "CS 100: Software Construction");
        addCourse("2014 - 2015", sea.F, "MATH031: Applied Linear Algebra");
        addCourse("2014 - 2015", sea.W, "CS 172: Introduction to Data Retrieval");
        addCourse("2014 - 2015", sea.W, "CS 120A: Logic Design");
        addCourse("2014 - 2015", sea.W, "PHIL124: Formal Logic");
        addCourse("2014 - 2015", sea.S, "CS 153: Design of Operating Systems");
        addCourse("2014 - 2015", sea.S, "CS 120B: Introduction to Embedded Systems");
        addCourse("2014 - 2015", sea.S, "PHYS040C: General Physics");
        addGPA("2014 - 2015",3.814);



        //3.717
        addCourse("2013 - 2014", sea.F, "CS 10: Introduction to Computer Science for Science, Mathematics, and Engineers Part 1");
        addCourse("2013 - 2014", sea.F, "ENGL001A: Beginning Composition");
        addCourse("2013 - 2014", sea.F, "ENGR001I: Professional Development and Mentoring");
        addCourse("2013 - 2014", sea.F, "MATH009C: 	First-Year Calculus");
        addCourse("2013 - 2014", sea.W, "CS 11: Introduction to Discrete Structures");
        addCourse("2013 - 2014", sea.W, "CS 12: Introduction to Computer Science, Mathematics, and Engineers Part 2");
        addCourse("2013 - 2014", sea.W, "MATH010A: 	Calculus of Several Variables");
        addCourse("2013 - 2014", sea.W, "ENGL001B: 	Intermediate Composition");
        addCourse("2013 - 2014", sea.S, "CS 14: Introduction to Data Structures and Algorithms");
        addCourse("2013 - 2014", sea.S, "CS 111: Discrete Structures");
        addCourse("2013 - 2014", sea.S, "MATH046: 	Introduction to Ordinary Differential Equations");
        addCourse("2013 - 2014", sea.U, "CS 61: Machine Organization and Assembly Language Programming");
        addCourse("2013 - 2014", sea.U, "PHYS040A: General Physics");
        addCourse("2013 - 2014", sea.U, "PHYS040B: General Physics");
        addGPA("2013 - 2014",3.717);


    })


;
