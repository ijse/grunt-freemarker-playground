module.exports = function(grunt){

    // 项目配置
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

        }
    });

    grunt.loadNpmTasks('grunt-freemarker');

    // 默认任务
    grunt.registerTask('default', ['freemarker:test']);
};