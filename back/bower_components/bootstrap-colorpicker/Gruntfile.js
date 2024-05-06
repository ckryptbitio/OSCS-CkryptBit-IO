'use strict';

module.exports = function (grunt) {

  // Project configuration
  grunt.initConfig({

    // Read package.json
    pkg: grunt.file.read('package.json'),

    // Configuration for tasks
    less: {},
    cssmin: {},
    jshint: {},
    jsbeautifier: {},
    combine: {},
    strip_code: {},
    uglify: {},
    watch: {},
    assemble: {},
    clean: {},

  });

  // Load tasks
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-jsbeautifier');
  grunt.loadNpmTasks('grunt-combine');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-assemble');
  grunt.loadNpmTasks('grunt-strip-code');

  // Project tasks

  // Default task
  grunt.registerTask('default', function () {
    grunt.task.run([
      'clean',
      'combine:less',
      'less',
      'cssmin',
      'jsbeautifier:src',
      'combine:js',
      'jsbeautifier:dist',
      'strip_code',
      'uglify',
      'assemble',
      'jshint'
    ]);
  });

  // Development task
  grunt.registerTask('dev', [
    'watch'
  ]);

  // Configuration for tasks

  // less
  grunt.config.merge({
    less: {
      dist: {
        options: {
          strictMath: true,
          sourceMap: true,
          outputSourceFiles: true,
          sourceMapURL: '<%= pkg.name %>.css.map',
          sourceMapFilename: 'dist/css/<%= pkg.name %>.css.map'
        },
        src: 'src/less/colorpicker.less',
        dest: 'dist/css/<%= pkg.name %>.css'
      }
    },
  });

  // cssmin
  grunt.config.merge({
    cssmin: {
      options: {
        compatibility: 'ie8',
        keepSpecialComments: '*',
        sourceMap: true,
        advanced: false
      },
      dist: {
        src: 'dist/css/<%= pkg.name %>.css',
        dest: 'dist/css/<%= pkg.name %>.min.css'
      }
    },
  });

  // jshint
  grunt.config.merge({
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      files: [
        'Gruntfile.js',
        'docs/docs.js',
        'dist/js/<%= pkg.name %>.js'
      ]
    },
  });

  // jsbeautifier
  grunt.config.merge({
    jsbeautifier: {
      options: {
        js: {
          braceStyle: "collapse",
          breakChainedMethods: false,
          e4x: false,
          evalCode: false,
          indentChar: " ",
          indentLevel: 0,
          indentSize: 2,
          indentWithTabs: false,
          jslintHappy: false,
          keepArrayIndentation: false,
          keepFunctionIndentation: false,
          maxPreserveNewlines: 2,
          preserveNewlines: true,
          spaceBeforeConditional: true,
          spaceInParen: false,
          unescapeStrings: false,
          wrapLineLength: 0,
          endWithNewline: true
        }
      },
      src: ['src/js/*.js', 'docs/docs.js'],
      dist: ['dist/js/<%= pkg.name %>.js']
    },
  });

  // combine
  grunt.config.merge({
    combine: {
      js: {
        input: 'src/js/colorpicker-plugin-wrapper.js',
        output: 'dist/js/<%= pkg.name %>.js',
        tokens: [{
          token: "//@version",
          string: '<%= pkg.version %>'
        }, {
          token: "//@colorpicker-color",
          file: 'src/js/colorpicker-color.js'
        }, {
          token: "//@colorpicker-defaults",
          file: 'src/js/colorpicker-defaults.js'
        }, {
          token: "//@colorpicker-component",
          file: 'src/js/colorpicker-component.js'
        }]
      },
      less: {
        input: 'src/less/colorpicker.less',
        output: 'src/less/colorpicker.less',
        tokens: [{
          token: "//@version",
          string: '<%= pkg.version %>'
        }]
      }
    },
  });

  // strip_code
  grunt.config.merge({
    strip_code: {
      src: {
        src: 'dist/js/*.js'
      }
    },
  });

  // uglify
  grunt.config.merge({
    uglify: {
      options: {
        banner: '/*!' + grunt.util.linefeed +
          ' Bootstrap Colorpicker v<%= pkg.version %>' + grunt.util.linefeed +
          ' https://itsjavi.com/bootstrap-colorpicker/' + grunt.util.linefeed +
          ' */' + grunt.util.linefeed
      },
      dist: {
        files: {
          'dist/js/<%= pkg.name %>.min.js': [
            'dist/js/<%= pkg.name %>.js'
          ]
        }
      }
    },
  });

  // watch
  grunt.config.merge({
    watch: {
      less: {
        files: [
          'src/less/*.less'
        ],
        tasks: ['combine:less', 'less', 'cssmin']
      },
      js: {
        files: [
          'src/js/*.js',
          'docs/docs.js'
        ],
        tasks: ['jsbeautifier:src', 'combine:js', 'jsbeautifier:dist', 'uglify', 'jshint']
      },
      handlebars: {
        files: [
          'docs/*.hbs',
          'docs/**/*.hbs',
          'docs/helpers/**/*.js'
        ],
        tasks: ['assemble']
      }
    },
  });

  // assemble
  grunt.config.merge({
    assemble: {
      options: {
        assets: 'docs/assets',
        helpers: ['docs/helpers/code'],
        partials: ['docs/includes/**/*.hbs'],
        layout: ['docs/layout.hbs'],
        data: ['package.json'],
        flatten: true
      },
      site: {
        src: ['docs/pages/*.hbs'],
        dest: './'
      }
    },
  });

  // clean
  grunt.config.merge({
    clean: {
      dist: [
        'dist/css/*',
        'dist/js/*',
        'index_new.html'
      ]
    },
  });

};
