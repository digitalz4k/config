## React Native SDK configurations
Platform configurations using the latest SDKs

### Android - Support API 19 to 26

##### BuildGradle Project
```
...
dependencies {
    ...
    classpath 'com.android.tools.build:gradle:3.0.0'
}
```

##### BuildGradle App
```
android {
    compileSdkVersion 26
    defaultConfig {
        ...
        minSdkVersion 19
        targetSdkVersion 26
    }
    ...
}

dependencies {
    ...
    implementation 'com.android.support:appcompat-v7:26.1.0'
    ...
}
```

##### Gradle distribution
```
distributionUrl=https\://services.gradle.org/distributions/gradle-4.1-all.zip
```

##### Gradle properties
```
org.gradle.jvmargs=-Xmx1536m
```

## React Native startup

##### Dependencies
Add dev dependencies
```
yarn add -D babel-eslint babel-preset-flow babel-plugin-transform-remove-console eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react flow-bin prettier-eslint
```

##### Scripts
Add scripts to `package.json`
```
"scripts": {
    "start": "node node_modules/react-native/local-cli/cli.js start",
    "test": "jest",
    "lint": "eslint .",
    "prettier": "eslint . --fix",
    "flow start": "flow start",
    "flow stop": "flow stop",
    "flow status": "flow status",
    "flow coverage": "flow coverage"
  },
```

##### Babel
Add/Update `.babelrc`
```
{
  "presets": ["react-native", "flow"],
  "retainLines": true,
  "env": {
    "production": {
      "plugins": ["transform-remove-console"]
    }
  }
}
```

##### Eslint
Add/Update `.eslintrc`
```
{
  "parser": "babel-eslint",
  "extends": "airbnb",
  "plugins": ["react", "jsx-a11y", "import"],
  "parserOptions": {
    "ecmaVersion": 2017,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "env": {
    "jest": true,
    "node": true,
    "browser": true
  },
  "rules": {
    "semi": 0,
    "react/jsx-filename-extension": 0,
    "linebreak-style": 0,
  }
}
```

##### Prettier
Add/Update `.prettierrc`
```
{
  "printWidth": 80,
  "tabWidth": 2,
  "singleQuote": true,
  "trailingComma": "es5",
  "semi": false,
  "bracketSpacing": true,
  "jsxBracketSameLine": false,
  "parser": "flow",
  "useTabs": true
}
```

##### VSCode
Add/Update preferences
```
{
  "editor.formatOnSave": true,
  "flow.useNPMPackagedFlow": true,
  "javascript.format.enable": false,
  "javascript.validate.enable": false,
  "prettier.eslintIntegration": true
}
```

##### GIT
Add/Update `.gitignore`
```
# VSCODE
.vscode/

# ENV
.env
.env.*
```

## Advanced Development Packager
Use [Haul Package](https://github.com/callstack/haul) by Callstack

##### Add dependency
```
yarn add -D haul
```

##### Edit android/app/build.gradle
Add this just below `apply from: "../../node_modules/react-native/react.gradle"`
```
project.ext.react = [
    cliPath: "node_modules/haul/bin/cli.js"
]
```

##### Initialize Haul
This will add a `webpack.haul.js` which can be customized
```
yarn haul init
```

##### Start development server
```
yarn haul start -- --platform android|ios
```

##### Run or update your bundle app
```
react-native run-android|ios
```
