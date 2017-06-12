# EtherSketch

This project was bootstrap ed with
[truffle-init-webpack](https://github.com/trufflesuite/truffle-init-webpack) and
later had some additions based on
[truffle-box-auth](https://github.com/truffle-box/truffle-box-auth), which means
it carries some ejected features of
[create-react-app](https://github.com/facebookincubator/create-react-app). It
should include contracts, migrations, tests, user interface and Webpack build
pipeline.

## Building and the frontend

1. First run `truffle compile`, then run `truffle migrate` to deploy the
   contracts onto your network of choice (default "development").
2. Then run `npm start` to build the app and serve it on http://localhost:3000

## Running frontend tests

1. You can run front-end tests with `npm test`
