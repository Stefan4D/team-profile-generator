import Manager from "./lib/Manager.js";
import Engineer from "./lib/Engineer.js";
import Intern from "./lib/Intern.js";

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

const team = []; // array to hold all employee objects

// TODO: Combine and refactor arrays into core questions and per-role questions. Can use spread operator to add into new arrays.
const initialQuestions = [
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

const engineerQuestions = [
  {
    type: "input",
    name: "engineerName",
    message: "What is the name of the engineer?",
  },
  {
    type: "input",
    name: "id",
    message: "What is the employee ID of the engineer?",
  },
  {
    type: "input",
    name: "email",
    message: "What is the email address of the engineer?",
  },
  {
    type: "input",
    name: "github",
    message: "What is the GitHub username of the engineer?",
  },
];

const internQuestions = [
  {
    type: "input",
    name: "internName",
    message: "What is the name of the intern?",
  },
  {
    type: "input",
    name: "id",
    message: "What is the employee ID of the intern?",
  },
  {
    type: "input",
    name: "email",
    message: "What is the email address of the intern?",
  },
  {
    type: "input",
    name: "school",
    message: "What school does the intern attend?",
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
  },
];

// TODO: Update JSDocs comments
/**
 * @function showMenu
 * @returns { function }
 */
function showMenu() {
  inquirer.prompt(menuOptions).then((answer) => {
    console.log(answer);
    switch (answer.menuSelection) {
      case "Add an engineer":
        addEngineer(); // refactor to use return statements?
        break;
      case "Add an intern":
        addIntern();
        break;
      case "Finish building the team":
        finishTeam();
        break;
      default:
        console.log("Invalid selection");
        break;
    }
  });
}

function addEngineer() {
  inquirer.prompt(engineerQuestions).then((answers) => {
    console.log(answers);

    // create a new Engineer instance
    const engineer = new Engineer(
      answers.engineerName,
      answers.id,
      answers.email,
      answers.github
    );

    // add the engineer instance to the team array
    team.push(engineer);
    console.log(team);

    showMenu(); // recursively call showMenu until user selects "Finish building the team"
  });
}

function addIntern() {
  // Intern’s name
  // ID
  // Email
  // School
  inquirer.prompt(internQuestions).then((answers) => {
    console.log(answers);

    // create a new Intern instance
    const intern = new Intern(
      answers.internName,
      answers.id,
      answers.email,
      answers.school
    );

    // add the intern instance to the team array
    team.push(intern);
    console.log(team);

    showMenu(); // recursively call showMenu until user selects "Finish building the team"
  });
}

function finishTeam() {
  // implement inquirer questions
  console.log("finishTeam");
  // render the HTML and store in a variable
  const html = render(team);
  // TODO: Write the file to the output folder.
  // Create the output directory if it doesn't exist
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR);
  }

  // write to file
  fs.writeFile(outputPath, html, (err) => {
    if (err) throw err;
    console.log("File saved!");
  });

  console.log("Exiting application.");
}

// function to initialize program
function init() {
  // TODO: refactor into addManager() function
  inquirer
    .prompt(initialQuestions)
    .then((answers) => {
      console.log(answers);

      // create a new Manager instance
      const manager = new Manager(
        answers.managerName,
        answers.id,
        answers.email,
        answers.officeNumber
      );

      // add the manager object to the team array
      team.push(manager);
      console.log(team);

      showMenu();
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
