'use strict';
module.exports = function (grunt) {

    grunt.initConfig({
        watch: {
            files: ['sass/*.scss'],
            tasks: ['compass','cssmin'],
            options: {
                spawn: false
            }
        },
        compass: {
            dist: {
                options: {
                    sassDir: 'sass',
                    cssDir: 'dist',
                    specify: 'sass/framework.scss',
                    outputStyle:'expanded'
                }
            }
        },
        cssmin: {
            minify: {
                expand: true,
                cwd: 'dist/',
                src: ['*.css', '!*.min.css'],
                dest: 'dist/',
                ext: '.min.css'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.loadNpmTasks('grunt-contrib-compass');

    grunt.loadNpmTasks('grunt-contrib-cssmin');


    grunt.registerTask('compile',['compass','cssmin']);




};


