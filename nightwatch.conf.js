const seleniumServer = require('selenium-server');
const chromedriver = require('chromedriver');

module.exports = {
  src_folders: ['test'],
  page_objects_path: 'page-objects',
  globals_path: './globals.js',

  selenium: {
    start_process: true,
    server_path: seleniumServer.path,
    start_session: true,
    log_path: './logs',
    port: 5555,
    cli_args: {
      'webdriver.chrome.driver': chromedriver.path,
    },
  },

  test_settings: {
    default: {
      selenium_port: 5555,
      selenium_host: '0.0.0.0',
      desiredCapabilities: {
        browserName: 'chrome',
        webStorageEnabled: true,
        chromeOptions: {
          args: ['--headless'],
        },
        javascriptEnabled: true,
        acceptSslCerts: true,
      },
    },
    dev: {
      launch_url: 'https://www.google.com',
    },
    local: {
      launch_url: 'https://www.google.com',
    },
    qa: {
      launch_url: 'https://www.google.com',
    },
  },
};
