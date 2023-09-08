# Team Profile Generator

## Description

Submission for Module 12 of the University of Birmingham Skills Bootcamp in Front-End Web Development & UX.

The challenge was to create a Node.js command-line application that takes in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person.

The application uses the Inquirer package to prompt the user for information and Jest to run unit tests. The application is invoked by using the following command:

```bash
node index.js
```

The application prompts the user for information about the team manager and then information about the team members. The user can input any number of team members, and they may be a mix of engineers and interns. When the user has completed building the team, the application will create an HTML file that displays a formatted team roster based on the information provided by the user.

## Table of Contents

- [Description](#description)
- [Table of Contents](#table-of-contents)
- [Installation](#installation)
- [Learning Outcomes](#learning-outcomes)
- [Resources used](#resources-used)
- [License](#license)

## Installation

- This project uses ES Modules and therefore requires a modern version of Node.js (>= 16.0.0)
- Node.js version is enforced through the .npmrc file

Run `npm install` or `npm i` to install the dependencies.

## Learning Outcomes

- Learnt how to convert Jest to use ES Modules using experimental flags
- Implemented recursive logic with functions
- Learnt how to use the fs module to check if a directory exists

## Resources used

- [Jest Docs: ECMAScript Modules](https://jestjs.io/docs/ecmascript-modules)
- [Working with folders in Node.js](https://nodejs.dev/en/learn/working-with-folders-in-nodejs/#:~:text=work%20with%20folders.-,Check%20if%20a%20folder%20exists,access%20it%20with%20its%20permissions.)
- [Check synchronously if file/directory exists in Node.js](https://stackoverflow.com/questions/4482686/check-synchronously-if-file-directory-exists-in-node-js)

## Mark Scheme Compliance

## License

Released under the MIT license. Full details in [LICENSE](./LICENSE).
