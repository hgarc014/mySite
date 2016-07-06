module.exports = function (grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        // jshint: {
        //     all: ['www/**/*.js'],
        //     options: {
        //         jshintrc: '.jshintrc'
        //     }
        // },
        jshint: {
            files: ['Gruntfile.js', 'www/**/*.js'],
            options: {
                // options here to override JSHint defaults
                globals: {
                    jQuery: true,
                    console: true,
                    module: true,
                    document: true
                }
            }
        },
        clean: {
            folder: 'app/lib/js',
            folderTwo: ['app/lib/css']
        },
        bowercopy: {
            css: {
                options: {
                    destPrefix: 'app/www/assets'
                },
                files: {

                    'angular-carousel.css':'angular-carousel/dist/angular-carousel.css',
                    'angular-material.css':'angular-material/angular-material.css',



                    // 'font-awesome.css': 'font-awesome/css/font-awesome.min.css',
                    // 'angular-material.css': 'angular-material/angular-material.min.css',
                    // 'angular-busy.css': 'angular-busy/dist/angular-busy.min.css',
                    // 'angular-csp.css' : 'angular/angular-csp.css',
                    // 'angular-material.layouts.css' : 'angular-material/modules/layouts/angular-material.layouts.min.css',
                    // 'angular-material-data-table.css' : 'angular-material-data-table/dist/md-data-table.min.css'
                }
            },
            libs: {
                options: {
                    destPrefix: 'app/www/assets'
                },
                files: {

                    'angular.js' : 'angular/angular.js',
                    'angular-touch.js':'angular-touch/angular-touch.js',
                    'angular-carousel.js':'angular-carousel/dist/angular-carousel.js',
                    'ui-bootstrap.js':'angular-bootstrap/ui-bootstrap.js',
                    'angular-material.js':'angular-material/angular-material.js',
                    'angular-animate.js':'angular-animate/angular-animate.js',
                    'angular-aria.js':'angular-aria/angular-aria.js',
                    'angular-route.js':'angular-route/angular-route.js',

                    // 'angular.js': 'angular/angular.js',
                    // 'angular-google-maps.js': 'angular-google-maps/dist/angular-google-maps.min.js',
                    // 'angular-material.js': 'angular-material/angular-material.min.js',
                    // 'angular-translate.js': 'angular-translate/angular-translate.min.js',
                    // 'require.js': 'requirejs/require.js',
                    // 'requirejs-plugins': 'requirejs-plugins/src',
                    // 'angular-busy.js': 'angular-busy/dist/angular-busy.min.js',
                    // 'angular-aria.js': 'angular-aria/angular-aria.min.js',
                    // 'angular-animate.js': 'angular-animate/angular-animate.min.js',
                    // 'angular-messages.js': 'angular-messages/angular-messages.min.js',
                    // 'angular-simple-logger.js': 'angular-simple-logger/dist/angular-simple-logger.min.js',
                    // 'lodash.js': 'lodash/dist/lodash.min.js',
                    // 'fastclick.js' : 'fastclick/lib/fastclick.js',
                    // 'angular/angular-route.js' : 'angular-route/angular-route.min.js',
                    // 'angular/angular-sanitize.js' : 'angular-sanitize/angular-sanitize.min.js',
                    // '../../templates/angular-busy.html' : 'angular-busy/angular-busy.html',
                    // 'ngStorage.js' : 'ngstorage/ngStorage.min.js',
                    // 'ng-google-chart.js' : 'angular-google-chart/ng-google-chart.min.js',
                    // 'angular-material-data-table.js' : 'angular-material-data-table/dist/md-data-table.min.js',
                    // 'ng-cordova.js' : 'ngCordova/dist/ng-cordova.min.js'
                }
            }
        },
        watch: {
            files: ['app/www/**/*.*'],
            tasks: ['shell:prepare']
        }
    });
    // Actually load this plugin's task(s).
    // grunt.loadTasks('tasks');
    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-bowercopy');
    // Whenever the "test" task is run, first clean the "tmp" dir, then run this
    // plugin's task(s), then test the result.
    // grunt.registerTask('myLess', ['less:development']);
    // grunt.registerTask('test', ['clean', 'myLess', 'bowercopy']);
    // By default, lint and run all tests.
    grunt.registerTask('default', ['jshint','clean', 'bowercopy']);
};
