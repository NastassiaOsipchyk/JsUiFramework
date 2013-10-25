// Karma configuration
// Generated on Mon Oct 21 2013 12:34:20 GMT+0300 (Kaliningrad Standard Time)

module.exports = function(config) {
  config.set({

    // base path, that will be used to resolve files and exclude
    basePath: '',

    // frameworks to use
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
	'libs/jquery.js',
	'libs/funcunit.js',
	'tests/upPanel.coffee',
	'tests/basketScreen.coffee',
	'tests/test2.coffee'
    ],


    // list of files to exclude
    exclude: [
    ],


    // test results reporter to use
    // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
    reporters: ['progress','html'],


    // web server port
    port: 8080,
	
	
	urlRoot: 'karma',

    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: ['Firefox'],
	preprocessors: {
	'**/*.coffee': ['coffee'],
	 '**/*.html': ['html2js']
	},
	proxies:  {
    '/': 'http://www.ozon.ru/'
  },
    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 60000,
    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false
	
  });
};
