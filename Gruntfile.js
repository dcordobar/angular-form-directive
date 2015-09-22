module.exports = function(grunt) {

  grunt.initConfig({

    uglify: {
      my_target: {
        files: {
        'dist/angular-form-directive.min.js': ['src/angular-form-directive.js']
        }
      } //my_target
    } //uglify

  });

  grunt.loadNpmTasks('grunt-contrib-uglify');

};
