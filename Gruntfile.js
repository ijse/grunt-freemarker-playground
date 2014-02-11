module.exports = function(grunt){

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        freemarker: {
            options: {
                views: "views",
                out: "public"
            },
            test: {
                src: "mocks/*.js"
            }

        },

        clean: {
            options: {
                force: true
            },
            htmls: {
                src: "public/*.html"
            }
        },

        // watch mocks and views changes
        watch: {
            options: {
                livereload: true
            },
            develop: {
                files: ['mocks/**/*', 'views/**/*' ],
                tasks: [ 'freemarker:test' ],
                options: {
                    debounceDelay: 250
                }
            }
        },

        // http service
        connect: {
            server: {
                options: {
                    port: 9022,
                    base: 'public'
                }
            }
        }

    });

    grunt.loadNpmTasks('grunt-freemarker');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');

    // direct
    grunt.registerTask('default', ['freemarker:test']);
    grunt.registerTask('server', [ 'clean:htmls', 'freemarker:test', 'connect:server', 'watch:develop']);
};