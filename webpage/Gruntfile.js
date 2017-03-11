module.exports = function (grunt) {
  grunt.initConfig({
    browserify: {
      dist: {
        options: {
          transform: [
            ["babelify", {presets: ["react"]}],
            ["grunt-less-browserify"]
          ]
        },
        files: {
          "./dist/module.js": ["./modules/index.js"]
        }
      }
    },
    lessBrowserify: {
      output:  'dist/module.css',
      jsAppend: false
    },
    watch: {
      scripts: {
        files: ["./modules/**/*.js", "./css/**/*.css"],
        tasks: ["browserify"]
      }
    }
  });

  grunt.loadNpmTasks("grunt-browserify");
  grunt.loadNpmTasks("grunt-contrib-watch");

  grunt.registerTask("default", ["watch"]);
  grunt.registerTask("build", ["browserify"]);
};