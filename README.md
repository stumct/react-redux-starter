mkdir app
cd app
npm init

Dev Dependencies
  npm i webpack --save-dev
  npm i webpack-merge --save-dev (used to merge webpack configs such as COMMON, PROD, DEV etc...)
  npm i html-webpack-plugin --save-dev (creates your html for you with webpack bundles in script tags)
  npm i webpack-dev-server --save-dev (in memory dev server which refreshes content)
  npm i file-loader --save-dev ()
  npm i url-loader --save-dev ()
  npm i css-loader style-loader --save-dev (allows us to refresh css changes)
  npm i less less-loader --save-dev ()
  npm i sass sass-loader --save-dev ()
  npm i extract-text-webpack-plugin --save (for creating css files)
	npm i babel-loader babel-core --save-dev
	npm i babel-preset-es2015 babel-preset-react --save-dev
  //npm i babel-loader@5.x --save-dev (babel transpiles es6+ to es5)
  //npm i babel-plugin-react-transform@v1.1.1 react-transform-hmr --save-dev (this one works)
  npm i babel-eslint eslint eslint-plugin-react --save-dev (for linting JS)
  npm i eslint-loader --save-dev (integrates eslint with webpack)

Dependencies
  npm i react react-dom --save (install React and ReactDOM)
  npm i jquery --save ()
  npm i bootstrap --save ()
  npm i redux react-redux redux-thunk --save
  npm i react-router history redux-simple-router --save


package.json
.gitignore
.eslintignore
.eslilntrc
.babelrc
webpack.config.js


USEFUL LINKS
http://survivejs.com/webpack_react/webpack_and_react/
http://rackt.org/redux/
https://github.com/rackt/redux-simple-router
https://github.com/gaearon/redux-thunk
http://christianalfoni.github.io/react-webpack-cookbook/
