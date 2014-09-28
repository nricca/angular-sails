/**
 * Copy files and folders.
 *
 * ---------------------------------------------------------------
 *
 * # dev task config
 * Copies all directories and files, exept coffescript and less fiels, from the sails
 * assets folder into the .tmp/public directory.
 *
 * # build task config
 * Copies all directories nd files from the .tmp/public directory into a www directory.
 *
 * For usage docs see:
 *        https://github.com/gruntjs/grunt-contrib-copy
 */
module.exports = function (grunt) {

    grunt.config.set('copy', {
        dev: {
            files: [
                {
                    expand: true,
                    cwd: './assets',
                    src: ['**/*.!(coffee|less)'],
                    dest: '.tmp/public'
                },
                {
                    expand: true,
                    flatten: true,
                    cwd: './app/bower_components',
                    src: ['angular/angular.js'],
                    dest: '.tmp/public/bower_components'
                },
                {
                    expand: true,
                    cwd: './app/scripts',
                    src: ['**/*.js'],
                    dest: '.tmp/public/angular'
                }
            ]
        },
        build: {
            files: [{
                expand: true,
                cwd: '.tmp/public',
                src: ['**/*'],
                dest: 'www'
            }]
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
};
