# Swill React Template

A ReactJS template for creating custom UI components for [CraftBeerPi](https://www.github.com/Manuel83/craftbeerpi3) using [Swill SDK](https://www.github.com/jonrhall/swill-sdk).

## Usage

This package is a true plug-and-play template meant to provide an easy way to develop custom interfaces for CraftBeerPi. As such, the template contains a few helpers for developing and deploying your interface.

### Building your component

The files in the [src](./src) directory are provided as a sample entry point for a custom interface and as an example on how to begin to implement your own UI. It is intended that the developer will modify these files for their own purposes.

### Run the dev server

From the root of the project directory, run `npm start`. [Webpack Dev Server](https://github.com/webpack/webpack-dev-server) will start and open a new browser window to the location of your bundled files, allowing you to view and debug your application. It is highly recommended that you also install the [React Dev Tools](https://github.com/facebook/react-devtools) plugin for your browser of choice because it will help you to debug your React app.

If you are not running the dev server on the same host as CraftBeerPi, you'll need to specify the IP address or hostname in [config.json](./config.json). 

### Deploying your app

The `deploy.sh` script in the root directory of swill-react-template allows you to build and deploy your app to your CraftBeerPi instance.

1. In the root directory, run `sh deploy.sh`
2. When prompted, enter the location of your CraftBeerPi3 installation (e.g. `~/craftbeerpi3`).
2. Visit the deployed app at the CraftBeerPi URL: `http://<<cbpi-address>>:<<cbpi-port>>/ui/static/custom/index.html`

## What this template contains

The following libraries are used as a starting point for building reliable ES7 components:

- [React](https://reactjs.org/) - For building UI components in a declarative, flexible way.
- [Swill SDK](https://github.com/jonrhall/swill-sdk) - To talk to your CraftBeerPi server.
- [Material UI](https://material-ui.com) - For the latest in UI theming and modular components.
- [Webpack v4](https://webpack.js.org/) - To package your component into easily-consumable pieces.
- [Babel](https://babeljs.io/) - For transpiling ES6/7 code down to ES5.
- [ESLint](https://eslint.org/) - For enforcing best practices when writing components.
