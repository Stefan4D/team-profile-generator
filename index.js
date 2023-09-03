// const Manager = require("./lib/Manager");
// const Engineer = require("./lib/Engineer");
// const Intern = require("./lib/Intern");
import Manager from "./lib/Manager.js";
import Engineer from "./lib/Engineer.js";
import Intern from "./lib/Intern.js";
// const inquirer = require("inquirer");
// const path = require("path");
// const fs = require("fs");
import fs from "fs";
import inquirer from "inquirer";
import path from "path";

// __dirname doesn't work with ES6 modules
// const OUTPUT_DIR = path.resolve(__dirname, "output");
const OUTPUT_DIR = path.resolve(process.cwd(), "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

// need to validate that this render function works with the refactor in the page-template.js file
// const render = require("./src/page-template.js");
import render from "./src/page-template.js";

// TODO: Write Code to gather information about the development team members, and render the HTML file.
const initialQuestions = [
  // Name
  // Employee ID
  // Email address
  // Office number
  {
    type: "input",
    name: "managerName",
    message: "What is the name of the team manager?",
  },
  {
    type: "input",
    name: "id",
    message: "What is the employee ID of the manager?",
  },
  {
    type: "input",
    name: "email",
    message: "What is the email address of the manager?",
  },
  {
    type: "input",
    name: "officeNumber",
    message: "What is the office number of the manager?",
  },
];

const menuItems = [
  "Add an engineer",
  "Add an intern",
  "Finish building the team",
];

const menuOptions = [
  {
    type: "list",
    name: "menuSelection",
    message: "What would you like to do next?",
    choices: menuItems,
    // default: "Add an engineer",
  },
];

// When a user starts the application, they're prompted to enter the team manager's:
// Name
// Employee ID
// Email address
// Office number

// function to initialize program
function init() {
  inquirer
    .prompt(initialQuestions)
    .then((answers) => {
      console.log(answers);

      inquirer
        .prompt(menuOptions)
        .then((menuOption) => console.log(menuOption));

      // writeToFile(
      //   `./output/${answers.title
      //     .replace(/\s+/g, "-")
      //     .toLowerCase()}-README.md`,
      //   generateMarkdown(answers)
      // );
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
        // TTY = teletypewriter
        console.error(
          "Wrong execution environment. Please use Node or similar."
        );
      } else {
        console.error(error);
        // Something else went wrong
      }
    });
}

// function call to initialize program
init();

// When a user enters those requirements, the user is presented with a menu with the option to:
// Add an engineer
// Add an intern
// Finish building the team

// When a user selects the engineer option, the user is prompted to enter the following and then taken back to the menu:
// Engineer's Name
// ID
// Email
// GitHub username

// When a user selects the intern option, the user is prompted to enter the following and then taken back to the menu:
// Intern’s name
// ID
// Email
// School

// When a user decides to finish building their team, they exit the application and the HTML is generated.

// Call the render function (provided for you) and pass in an array containing all employee objects.

// The render function will generate and return a block of HTML including templated div elements for each employee.

// Create an HTML file using the HTML returned from the render function.

// Write it to a file named team.html in the output folder.

// You can use the provided variable outputPath to target this location.
