# EtherSketch

This is an experiment from [SouleLabs](https://github.com/SouleLabs) around
[pixel advertising](https://en.wikipedia.org/wiki/Pixel_advertising) using an
[Ethereum](https://www.ethereum.org/) [decentralized
applications](https://en.wikipedia.org/wiki/Ethereum#Decentralized_applications).

## Quickstart

Make sure you have
[Truffle](http://truffleframework.com/docs/getting_started/installation),
[TestRPC](https://www.npmjs.com/package/truffle-testrpc) and [Node
6.x](https://nodejs.org/en/) installed and then run:

```console
$ truffle-testrpc &
$ truffle compile
$ truffle migrate
$ npm install
$ npm start
```

# Structure

This project was bootstraped with
[truffle-init-webpack](https://github.com/trufflesuite/truffle-init-webpack) and
later had some additions based on
[truffle-box-auth](https://github.com/truffle-box/truffle-box-auth), which means
it carries some ejected features of
[create-react-app](https://github.com/facebookincubator/create-react-app). It
should include contracts, migrations, tests, user interface and Webpack build
pipeline. If you need to know more about rationales about some structures or
decisions, please, checkout those source projects as well.

## Directories

Root folders come out from a combination of both Truffle and ReactJS projects.
The following serve for Truffle and Ethereum purpose:

- *contracts*: Ethereum contracts definition written in Solidity;
- *migrations*: Truffle migrations;
- *test*: unit tests for such contracts;

From the ReactJS front-end side, we have these directories:

- *config*: Webpack and other configuration as from an ejected `create-react-app`
  project;
- *public*: public HTML and other ordinary files for the front-end
- *scripts*: build and test scripts as from an ejected `create-react-app` project;
- *src*: actual ReactJS source code;

# Building and Running

There are two pieces of code to prepare and build before running the application
locally. To get the Ethereum or back-end piece ready, you need to:

1. Run `truffle compile`
2. Run `truffle migrate`

Note that you need a running RPC server for that. We advise you to use
`truffle-testrpc`. Truffle framework must also be previously installed. For the
front-end, you'll need to:

1. Run `npm install`
2. Run `npm start`

You are expected to have at least Node 6.x installed so that works fine. After
you call `npm start`, you should be able to access http://localhost:3000 from
your browser.

## Front-end tests

1. You can run front-end tests with `npm test`
