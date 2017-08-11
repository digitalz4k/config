# Development Configuration

Backing up and sharing my development configuration, using Webpack, Babel, ESLint, Karma, Typescript...

## WEBPACK

* **devtool** cheap-module-source-map source-map
* **plugins** [uglifyjs-webpack-plugin](https://github.com/webpack-contrib/uglifyjs-webpack-plugin)
* **loaders** [babel-loader](https://github.com/babel/babel-loader) [eslint-loader](https://github.com/MoOx/eslint-loader)

```javascript
'use strict'

const uglifyjs = require('uglifyjs-webpack-plugin')

const DEV_ENV = process.env.NODE_ENV === 'dev'

const config = {
	context: __dirname + '/src',
	entry: './app.js',
	output: {
			path: __dirname + '/dist',
			filename: '[name].bundle.js',
	},
	devtool: DEV_ENV ? 'cheap-module-source-map' : 'source-map',
	module: {
		rules: [
			{
				enforce: 'pre',
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'eslint-loader',
				},
			},
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
				},
			},
		],
	},
	plugins: [],
}

if (!dev) {
	config.plugins.push(new uglifyjs({
		sourceMap: true,
	}))
}

module.exports = config
```


## BABEL

Nothing fancy here!
```json
{
  "presets": [
    ["env", {
      "targets": {
        "browsers": ["last 2 versions", "safari >= 7"]
      }
    }]
  ]
}
```

## ESLINT
Using the awesome [Javascript Standard](https://standardjs.com/) :)
```json
{
  "extends": "standard"
}
```

## DEPENDENCIES

##### Package.json

```json
"devDependencies": {
    "babel-core": "^6.25.0",
    "babel-loader": "^7.1.1",
    "babel-preset-env": "^1.6.0",
    "eslint": "^4.4.1",
    "eslint-config-standard": "^10.2.1",
    "eslint-loader": "^1.9.0",
    "eslint-plugin-import": "^2.7.0",
    "eslint-plugin-node": "^5.1.1",
    "eslint-plugin-promise": "^3.5.0",
    "eslint-plugin-standard": "^3.0.1",
    "uglifyjs-webpack-plugin": "^0.4.6",
    "webpack": "^3.5.3"
  }
```

##### CLI

```shell
leonardo@dev:~/$ npm i -D webpack babel-core babel-loader babel-preset-env eslint-loader eslint-plugin-import eslint-plugin-node eslint-plugin-promise eslint eslint-config-standard uglyfyjs-webpack-plugin
```

## SCRIPTS
```json
"scripts": {
  "dev": "NODE_ENV=dev webpack -d --watch",
  "build": "NODE_ENV=prod webpack -p",
  "test": "NODE_ENV=test karma"
},
```

## LICENSE

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

