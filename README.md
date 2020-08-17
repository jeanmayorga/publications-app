# Publications App

This is an applcation for _Frontend Position_

## Directory layout

```
.
├── frontend/                   <-- Frontend Site
├── backend/                    <-- Backend Site
```

## Getting started

### Requirements

Make sure the following tools are installed in your system:

- [Node v12.X.X](https://nodejs.org/en/download/)
- [Yarn v1.21.X](https://yarnpkg.com/en/docs/install)

### Installation

Clone the GitHub repository and use `yarn` to install the dependencies.

```
$ git clone https://github.com/<username>/publications-app.git
$ cd publications-app
$ yarn install
```

## Frontend

## Main technologies used

1. [React js](https://reactjs.org/): A JavaScript library for building user interfaces
2. [Redux](https://www.npmjs.com/package/redux): A predictable state container for JavaScript apps.
3. [React-Redux](https://www.npmjs.com/package/redux): React Redux is maintained by the Redux team, and kept up-to-date with the latest APIs from Redux and React. Predictable.
4. [emotion-theming](https://www.npmjs.com/package/emotion-theming): Emotion-theming is a theming library inspired by _Styled-components_
5. [Ant Design](https://ant.design/): A design system for enterprise-level products. Create an efficient and enjoyable work experience.
6. [AWS Amplify](https://aws.amazon.com/es/amplify/): AWS Amplify is a set of tools and services that enables mobile and front-end web developers to build secure, scalable full stack applications, powered by AWS.

## Available Scripts

In the project directory, you can run:

### Local

To start developing environment simply run:

```
$ yarn start:dev

```

To start production environment simply run:

```
$ yarn start:prod
```

### `yarn test`

Launches the test runner in the interactive watch mode.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

Inside `src` folder we have:

- **api:** Cloudinary function to be called
- **components:** Reusable UI components used in the main pages
- **config:** Some public configurations
- **interfaces:** Some interfaces for app
- **pages:** Main pages the users see on the web application
- **routes:** Apps routes
- **store:** Redux actions and reducers
- **utils:** Utils

## Frontend

## Main technologies used

1. [JSON SERVER](https://github.com/typicode/json-server): fake REST API with zero coding in less than 30 seconds (seriously)

### Local

To start developing environment simply run:

```
$ yarn start:dev

```

To start production environment simply run:

```
$ yarn start:prod
```
