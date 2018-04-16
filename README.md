# nightwatch-docker

Struggling with Nightwatch inside docker.

To run:

```sh
$ docker-compose run --rm app npm i
$ docker-compose up
```

Then check the `/logs/selenium-debug.log` file, which would show something like:

```
14:22:12.200 INFO [GridLauncherV3.launch] - Selenium build info: version: '3.11.0', revision: 'e59cfb3'
14:22:12.201 INFO [GridLauncherV3$1.launch] - Launching a standalone Selenium Server on port 5555
2018-04-16 14:22:12.264:INFO::main: Logging initialized @260ms to org.seleniumhq.jetty9.util.log.StdErrLog
14:22:12.381 INFO [SeleniumServer.boot] - Welcome to Selenium for Workgroups....
14:22:12.382 INFO [SeleniumServer.boot] - Selenium Server is up and running on port 5555
14:22:12.627 INFO [ActiveSessionFactory.apply] - Capabilities are: Capabilities {acceptSslCerts: true, browserName: chrome, chromeOptions: {args: [--headless]}, javascriptEnabled: true, name: Landing, webStorageEnabled: true}
14:22:12.628 INFO [ActiveSessionFactory.lambda$apply$11] - Matched factory org.openqa.selenium.remote.server.ServicedSession$Factory (provider: org.openqa.selenium.chrome.ChromeDriverService)
14:22:32.644 ERROR [OsProcess.checkForError] - org.apache.commons.exec.ExecuteException: Execution failed (Exit value: -559038737. Caused by java.io.IOException: Cannot run program "/home/node/app/node_modules/chromedriver/lib/chromedriver/chromedriver" (in directory "."): error=2, No such file or directory)
```

Although I can browse to the file `/home/node/app/node_modules/chromedriver/lib/chromedriver/chromedriver` so I am pretty sure it exists.
