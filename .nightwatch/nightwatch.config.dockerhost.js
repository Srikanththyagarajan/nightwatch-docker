const seleniumServer = require('selenium-server');
const chromedriver = require('chromedriver');

const buildGlobalSettings = require('./build-global-settings');

module.exports = {
  custom_commands_path: './commands',
  globals_path: './globals.js',
  output_folder: './reports',
  page_objects_path: './page-objects',
  selenium: {
    cli_args: {
      'webdriver.chrome.driver': chromedriver.path,
    },
    log_path: './logs',
    port: 4444,
    server_path: seleniumServer.path,
    start_process: true,
    start_session: true,
  },
  src_folders: ['test'],
  test_settings: {
    default: {
      desiredCapabilities: {
        acceptInsecureCerts: true,
        acceptSslCerts: true,
        browserName: 'chrome',
        chromeOptions: { args: ['--headless', '--no-sandbox'] },
        javascriptEnabled: true,
        webStorageEnabled: true,
      },
      selenium_host: '0.0.0.0',
      selenium_port: 4444,
    },
    dev: buildGlobalSettings('www.google.co.za'),
    local: buildGlobalSettings('localhost'),
    qa: buildGlobalSettings('www.google.com'),
    staging: buildGlobalSettings('www.google.com'),
  },
  "test_workers": { "enabled": true, "workers": 4 },
};
