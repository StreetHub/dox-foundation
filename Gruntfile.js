module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({
    watch: {
      template:{
        files: ['views/**/*'],
        tasks: ['shell:compile']
      }
    },

    shell: {
      compile: {
          command: 'bin/dox-foundation --source examples/example.js --target docs',
          options: {
            stdout: true
          }
      }
    }
  });

  // Default task.
  grunt.registerTask('default', ['watch:template']);
  grunt.registerTask('build', ['shell:compile']);


};
