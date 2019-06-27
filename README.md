# code-coverage-vue-example [![renovate-app badge][renovate-badge]][renovate-app] [![CircleCI](https://circleci.com/gh/bahmutov/code-coverage-vue-example/tree/master.svg?style=svg)](https://circleci.com/gh/bahmutov/code-coverage-vue-example/tree/master) [![Coverage Status](https://coveralls.io/repos/github/bahmutov/code-coverage-vue-example/badge.svg)](https://coveralls.io/github/bahmutov/code-coverage-vue-example)
> Code coverage for Vue single file components from Cypress.io end-to-end tests

Uses [@cypress/code-coverage](https://github.com/cypress-io/code-coverage) plugin for [Cypress.io](https://www.cypress.io) test runner. See [https://on.cypress.io/code-coverage](https://on.cypress.io/code-coverage)

Because this application is served using `webpack-dev-server, it instruments the application code following the example in [bahmutov/code-coverage-webpack-dev-server](https://github.com/bahmutov/code-coverage-webpack-dev-server) via [.babelrc](.babelrc) and [webpack.config.js](webpack.config.js) files.

## License

This project is licensed under the terms of the [MIT license](/LICENSE.md).

[renovate-badge]: https://img.shields.io/badge/renovate-app-blue.svg
[renovate-app]: https://renovateapp.com/
