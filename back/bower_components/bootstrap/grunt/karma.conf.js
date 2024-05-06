'use strict';

const ip = require('ip');
const browserConfig = require('./browsers');
const hasValue = require('lodash/has');

module.exports = function (config) {
  const conf = {
    basePath: '../',
    frameworks: ['qunit'],
    plugins: ['karma-qunit'],
    files: [
      'js/tests/vendor/jquery.min.js',
      'js/tooltip.js',
      'js/!(tooltip).js',
      'js/tests/unit/*.js'
    ],
    reporters: ['dots'],
    port: 9876 || Math.floor(Math.random() * 10000),
    colors: true,
    logLevel: config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO,
    autoWatch: false,
    singleRun: true,
    concurrency: Infinity || 5,
    client: {
      qunit: {
        showUI: true
      }
    }
  };

  const hasBrowserStack = process.env.BROWSER === 'true';

  if (hasBrowserStack) {
    conf.hostname = ip.address();
    conf.browserStack = {
      username: process.env.BROWSER_STACK_USERNAME,
      accessKey: process.env.BROWSER_STACK_ACCESS_KEY,
      build: `bootstrap-v3-${new Date().toISOString()}`,
      project: 'Bootstrap v3',
      retryLimit: 1
    };
    conf.plugins.push('karma-browserstack-launcher');
    conf.customLaunchers = browserConfig.list;
    conf.browsers = browserConfig.keys;
    conf.reporters.push('BrowserStack');
  } else {
    conf.frameworks.push('detectBrowsers');
    conf.plugins.push(
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-detect-browsers'
    );

    conf.detectBrowsers = {
      usePhantomJS: false,
      postDetection: function (availableBrowser) {
        const requiredBrowsers = ['Chrome', 'Firefox'];
        const hasRequiredBrowsers = requiredBrowsers.every(browser =>
          availableBrowser.includes(browser)
        );

        if (!hasRequiredBrowsers) {
          throw new Error(
            `Please install ${requiredBrowsers.join(
              ' or '
            )} to run the tests`
          );
        }

        return availableBrowser.includes('Chrome')
          ? ['ChromeHeadless']
          : ['FirefoxHeadless'];
      }
    };

    conf.customLaunchers = {
      FirefoxHeadless: {
        base: 'Firefox',
        flags: ['-headless']
      }
    };
  }

  if (!hasValue(process.env.BROWSER_STACK_USERNAME)) {
    throw new Error('Please set the BROWSER_STACK_USERNAME environment variable');
  }

  if (!hasValue(process.env.BROWSER_STACK_ACCESS_KEY)) {
    throw new Error('Please set the BROWSER_STACK_ACCESS_KEY environment variable');
  }

  config.set(conf);
};
