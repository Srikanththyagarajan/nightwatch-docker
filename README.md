# nightwatch-docker

[NightwatchJS](http://nightwatchjs.org/) running inside a [Docker](https://www.docker.com/)
container.

Writes [Allure Test Report](http://allure.qatools.ru/) reports to keep an eye on tests even after
they have run.

## Setup

### Prerequisites

#### On a local machine

When running this test runner on a local machine you will need [NodeJS](https://nodejs.org/en/) and
[npm](https://www.npmjs.com/) installed.

_Local is not run through [Docker](https://www.docker.com/) as the browser can be seen when running
locally. When running in [Docker](https://www.docker.com/) the browser will run headless inside the
container, and will thus not be seen._

#### Inside the container

When running the tests on a CI server you will need [Docker](https://www.docker.com/) and
[Docker Compose](https://docs.docker.com/compose/) installed.

### Installation

#### On a local machine

Simply install the required [npm](https://www.npmjs.com/) dependencies:

```sh
$ npm install
```

#### Inside the container

Build the [Docker](https://www.docker.com/) image:

```sh
$ docker-compose build
```

Install the required [npm](https://www.npmjs.com/) dependencies:

```sh
$ docker-compose run --rm app npm i
```

## Usage

A list of test commands have been set up to run tests on any necessary environment. These
environments are `local`, `dev`, `qa` and `staging`. The default test environment for the `npm test`
command is set to `qa`.

#### On a local machine

`local`:

```sh
$ npm run test:local
```

`dev`:

```sh
$ npm run test:dev
```

`qa`:

```sh
$ npm run test:qa
```

`staging`:

```sh
$ npm run test:staging
```

#### Inside the container

`local`:

```sh
$ docker-compose run --rm app npm run test:local:dockerhost
```

`dev`:

```sh
$ docker-compose run --rm app npm run test:dev:dockerhost
```

`qa`:

```sh
$ docker-compose run --rm app npm run test:qa:dockerhost
```

`staging`:

```sh
$ docker-compose run --rm app npm run test:staging:dockerhost
```
