module.exports = function(grunt) {

  //command availability
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  //==========================================================

  //core uglify configuration object
  config = {

    //concatenate vendor scripts
    //order important in app.js
    concat: {
      options: {
        separator: ';'
      },
      js: {
        files: {
          'out/assets/scripts/vendors.js': [
            'bower_components/jquery/dist/jquery.js',
            'bower_components/leaflet/dist/leaflet-src.js'],
          'out/assets/scripts/app.js': [
            'out/assets/scripts/namespaces.js',
            'out/assets/scripts/methods/*',
            'out/assets/scripts/utils/*',
            'out/assets/scripts/classes/*',
            'out/assets/scripts/init.js']
        }
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

