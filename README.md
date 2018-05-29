# Swill React Template

A ReactJS template to create custom UI components for [CraftBeerPi](https://www.github.com/Manuel83/craftbeerpi3) using [Swill SDK](https://www.github.com/jonrhall/swill-sdk).

## Usage

This package as a true plug-and-play template meant to provide an easy way to develop custom interfaces for CraftBeerPi. As such, the template contains a few helpers for developing and deploying your interface.

### Building your component

The files in the [src](./src) directory are provided as a a sample entry point for a custom interface, it is intended that the developer will modify and add/remove to these files for their own purposes. Please feel free to do so--however understand that the process for [running the dev server](#run-the-dev-server) or [deploying the interface](#deploying-a-custom-interface).

### Run the dev server

From the root of the template directory, run `npm start`. Webpack-dev-server will start and open a new browser window to the location of your bundled files, allowing you to view and debug your application. It is highly recommended that you also install the React Dev Tools plugin in your browser of choice for this purpose because it will help you to debug your React app.

### Deploying a custom interface

// TODO

## What this template contains

The following libraries are used as a starting point to building reliable ES7 components:

- [React](https://reactjs.org/) - For building UI components in a declarative, flexible way.
- [Swill SDK](https://github.com/jonrhall/swill-sdk) - To talk to your CraftBeerPi server.
- [Material UI](https://material-ui.com) - For the latest in UI theming and modular components.
- [Webpack v4](https://webpack.js.org/) - To package your component into easily-consumable pieces.
- [Babel](https://babeljs.io/) - For transpiling ES6/7 code down to ES5.
- [ESLint](https://eslint.org/) - For enforcing best practices when writing components.
