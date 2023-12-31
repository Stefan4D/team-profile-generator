// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
// const Employee = require("./Employee.js");
import Employee from "./Employee.js";

export default class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.role = "Engineer";
    this.github = github;
  }

  // Do I need to override like this or does setting the role in constructor achieve the result using parent getter function?
  //   getRole() {
  //     return "Engineer";
  //   }

  getGithub() {
    return this.github;
  }
}

// module.exports = Engineer;
