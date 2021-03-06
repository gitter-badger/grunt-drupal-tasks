module.exports = function(grunt) {

  /**
   * Define operations tasks as configured via scripts in Gruntconfig.json
   *
   * These are ad hoc scripts with minimal facilitation from Grunt.
   */

  if (grunt.config('config.scripts')) {
    var scripts = grunt.config('config.scripts');
    for (var key in scripts) {
      grunt.registerTask(key, 'Perform the configured "' + key + '" task.', function() {
        var task = require('../lib/scripts')(grunt)
          .handle(grunt.config('config'), this.name, 'ops');

        if (task) {
          grunt.task.run(task);
        }
      });

      require('../lib/help')(grunt).add({
        task: key,
        group: 'Operations'
      });
    }
  }

}
