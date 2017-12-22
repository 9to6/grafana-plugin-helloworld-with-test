// Karma configuration
// Generated on Thu Dec 21 2017 19:20:58 GMT+0900 (KST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: './',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['systemjs', 'mocha', 'chai', 'expect'],


    // list of files / patterns to load in the browser
    files: [
			'node_modules/axios/dist/axios.js',
			'node_modules/moxios/dist/moxios.js',
			'src/stack_info.js',
      'test/*.js',
    ],


    // list of files to exclude
    exclude: [
      '**/*.swp'
    ],
		
		
		plugins: ['karma-systemjs', 'karma-babel-preprocessor', 'karma-mocha', 'karma-chai',
			'karma-expect', 'karma-phantomjs-launcher', 'karma-chrome-launcher'],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
			'src/*.js': ['babel'],
			'test/*.js': ['babel']
    },


		babelPreprocessor: {
      options: {
        presets: ['env'], // use the es2015 preset
        // plugins: ['transform-es2015-modules-systemjs', 'transform-es2015-for-of'],
        sourceMap: 'inline' // inline source maps inside compiled files
      },
      sourceFileName: (file) => {
        return file.originalPath;
      }
    },
    
		
		systemjs: {
        // File patterns for application code, dependencies, and test suites
      files: [
				'src/*.js',
        'test/*.js'
      ],

      // SystemJS configuration specifically for tests, added after your config file.
      // Good for adding test libraries and mock modules
      config: {
        defaultJSExtensions: true,
        baseURL: '.',

        // Set path for third-party libraries as modules
        paths: {
          'babel': 'node_modules/babel-core/lib/api/browser.js',
          'systemjs': 'node_modules/systemjs/dist/system.js',
          'system-polyfills': 'node_modules/systemjs/dist/system-polyfills.js',
					'axios': 'node_modules/axios/dist/axios.js',
					'moxios': 'node_modules/moxios/dist/moxios.js',
        },

        transpiler: 'babel'
      }
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['dots'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
