module.exports = function(grunt) {

  //command availability
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  //==========================================================

  //core uglify configuration object
  config = {

    //concatenate vendor scripts
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: [
          'bower_components/jquery/dist/jquery.js',
          'bower_components/leaflet/dist/leaflet-src.js'],
        dest: 'out/assets/scripts/vendors.js'
      }
    },

    //uglify/minify
    uglify: {
      my_target: {
        files: [{
          expand: true,
          cwd: 'out/assets/scripts',
          src: ['**/*.js'],
          dest: 'out/assets/scripts/'
        }]
      }
    }
  };

  //==========================================================

  //Project configuration
  grunt.initConfig(config);

};

