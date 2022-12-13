const inquirer = require("inquirer");
const Employee = require("./employee");
const Engineer = require("./engineer");
const Intern = require("./intern");
const Manager = require("./manager");
const fs = require("fs");

function informationEntry() {
    const questions = [{
        type: "input",
        message: "Please enter your name: ",
        name: "name"
    }, {
        type: "input",
        message: "Please enter your ID Number: ",
        name: "id"
    }, {
        type: "input",
        message: "Please enter your email address: ",
        name: "email"
    }, {
        type: "choice",
        message: "Please choose your title:",
        choices: ["Intern", "Manager", "Engineer"],
        name: "title"
    }];

    return inquirer.prompt(questions);
}

function internEntry() {
    const questions = [{
        type: "input",
        message: "Please enter your school: ",
        name: "school"
    }];

    return inquirer.prompt(questions);
}

function managerEntry() {
    const questions = [{
        type: "input",
        message: "Please enter your office number: ",
        name: "officeNumber"
    }];

    return inquirer.prompt(questions);
}

function engineerEntry() {
    const questions = [{
        type: "input",
        message: "Please enter your gitHub: ",
        name: "gitHub"
    }];

    return inquirer.prompt(questions);
}