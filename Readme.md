# YARSK

**Y**et **A**nother **R**eact **S**tarter **K**it **2**.

Another react starter kit that addresses the constraints of using React, Webpack, React Hot Loader, ESNext, SASS/Less, and Test frameworks

This is my react starter kit for building react libraries  - a variation on [YARSK](https://github.com/bradleyboy/yarsk). There is no Flux implementaiton included as one can always add that later if needed.

## Features

* [React](http://facebook.github.io/react/)
* [Webpack](http://webpack.github.io/) for bundling
* [React hot loader](https://github.com/gaearon/react-hot-loader) for fast, iterative development.
* [Babel](https://babeljs.io/) for ESNext.
* [SASS](http://sass-lang.com/) (SCSS or Sass style), [Less](http://lesscss.org/), and [Autoprefixer](https://github.com/postcss/autoprefixer) enabled by default through Webpack.
* [Karma](http://karma-runner.github.io/0.12/index.html) + [Mocha](http://mochajs.org/) for testing.
* [Istanbul](https://gotwarlost.github.io/istanbul/) and [isparta](https://github.com/douglasduteil/isparta) for code coverage and analysis.

* [Optional linting with ESLint via babel-eslint](https://github.com/bradleyboy/yarsk#linting).

This kit is intentionally missing a specific Flux implementation, or any other non-essential library, as I use this as a base for experimenting with various parts of the React ecosystem.

## Usage

Fork this repo, then run:

```
npm install
npm start
```

That will fire up a webpack dev server in **hot** mode. Most changes will be reflected in the browser automatically without a browser reload. You can view the app in the browser at `http://localhost:8080`.

## Building

To generate a production build, run:

```
npm run build
```

The above command will generate a `dist` folder with the appropriate index.html file along with the minified CSS and JS files.

You can also automatically publish to GitHub pages. Just run this instead of the regular build command:

```
npm run build:gh
```

You can then view your app at `http://[yourgithubusername].github.io/[reponame]`. For example, you can load this demo at http://bradleyboy.github.io/yarsk.

## Modifying the HTML

The HTML file is generated using the `conf/webpack/template.html` file. This file is used for both the development and production build.

## Tests

The tests use Karma, Mocha and Chai through PhantomJS. See the example test in `app/Application/__tests__/index.js`. The test suite can be run like so:

```
npm test
```

To run the tests in watch mode (tests will re-run each time a file changes), use this instead:

```
npm run test:watch
```

You can generate code coverage reports with:

```
npm run test:coverage
```

See the `coverage` directory once that command is completed.

Finally, the repo is [Travis](https://travis-ci.org) ready. The `.travis.yml` file should work out of the box, just add your repo in Travis.

## Linting

If you'd like your JavaScript to be linted, copy the `.eslintrc.example` to `.eslintrc`. I've included my own defaults, feel free to modify them to your own taste. For more information on configuring ESLint, [consult its documentation](http://eslint.org/docs/rules/). Linting is run before each webpack build when a `.eslintrc` file is present.

## .editorconfig

An example `.editorconfig` file is provided with sensible defaults for JavaScript. Feel free to modify `.editorconfig.example` to match your own preferences, then renamed the file to `.editorconfig` and use an IDE or editor that supports [EditorConfig](http://editorconfig.org/).
