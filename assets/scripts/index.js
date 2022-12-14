const inquirer = require("inquirer");
const Employee = require("./employee");
const Engineer = require("./engineer");
const Intern = require("./intern");
const Manager = require("./manager");
const fs = require("fs");

function menuEntry() {
    const questions = [{
        type: "list",
        message: "Please choose an option:",
        choices: ["Add An Intern", "Add An Engineer", "Finish Entering Team"],
        name: "option"
    }];

    return inquirer.prompt(questions);
}

function informationEntry() {
    const questions = [{
        type: "input",
        message: "Please enter the name: ",
        name: "name"
    },

    {
        type: "input",
        message: "Please enter the employee ID : ",
        name: "id"
    },

    {
        type: "input",
        message: "Please enter the email address: ",
        name: "email"
    }];

    return inquirer.prompt(questions);
}

function internEntry() {
    const questions = [{
        type: "input",
        message: "Please enter the school: ",
        name: "school"
    }];

    return inquirer.prompt(questions);
}

function managerEntry() {
    const questions = [{
        type: "input",
        message: "Please enter the office number: ",
        name: "officeNumber"
    }];

    return inquirer.prompt(questions);
}

function engineerEntry() {
    const questions = [{
        type: "input",
        message: "Please enter the gitHub username: ",
        name: "gitHub"
    }];

    return inquirer.prompt(questions);
}

async function enteringEmployee(a, b) {
    let entryCheck = false;
    employees = a;
    const promise = new Promise((resolve, reject) => {
        informationEntry().then(function ({ name, id, email, title }) {
            title = b;
            if (title === "Intern") {
                internEntry().then(function ({ school }) {
                    this.employee = new Intern(name, id, email, school, title);
                    employees.push(employee);
                    resolve("Employee Entered");
                    entryCheck = true;
                });
            }
            
            else if (title === "Engineer") {
                engineerEntry().then(function ({ gitHub }) {
                    this.employee = new Engineer(name, id, email, gitHub, title);
                    employees.push(employee);
                    resolve("Employee Entered");
                    entryCheck = true;
                });
            }
            
            else {
                console.log("There has been a serious error");
            }
        }).catch(function (err) {
                console.log("An error has occured: " + err);
            });
    });

    const result = await promise;
    console.log(result);

    if (entryCheck) {
        menuEntry().then(function ({ option }) {
            if (option === "Add An Intern") {
                title = "Intern";
                enteringEmployee(employees, title);
            }

            else if (option === "Add An Engineer") {
                title = "Engineer";
                enteringEmployee(employees, title);
            }

            else {
                for (var i = 0; i < employees.length; i++) {
                    writeHtml();
                }
            }
        });
    }
}

async function startProgram() {
    let entryCheck = false;
    let employees = [];
    const promise = new Promise((resolve, reject) => {
        informationEntry().then(function ({ name, id, email, title }) {
            managerEntry().then(function ({ officeNumber }) {
                title = "Manager";
                this.employee = new Manager(name, id, email, officeNumber, title);
                employees.push(employee);
                resolve("Employee Entered");
                entryCheck = true;
            });
        }).catch(function (err) {
                console.log("An error has occured: " + err);
            });
    });

    const result = await promise;
    console.log(result);

    if (entryCheck) {
        menuEntry().then(function ({ option }) {
            if (option === "Add An Intern") {
                title = "Intern";
                enteringEmployee(employees, title);
            }

            else if (option === "Add An Engineer") {
                title = "Engineer";
                enteringEmployee(employees, title);
            }

            else {
                for (var i = 0; i < employees.length; i++) {
                    writeHtml();
                }
            }
        });
    }
}

function employeeTitle(employee) {
    if (employee.title === "Intern") {
        return `School: ${employee.school}`;
    }

    if (employee.title === "Manager") {
        return `Office number: ${employee.officeNumber}`;
    }

    if (employee.title === "Engineer") {
        return `GitHub: <a href="https://www.github.com/${employee.gitHub}">github.com/${employee.gitHub}</a>`;
    }
}

function formHtml() {
    let html = "";
    let employeeIcon = "";
    for (i = 0; i < employees.length; i++) {
        if (employees[i].title === "Manager") {
            employeeIcon = "&#9749; ";
        }
        
        else if (employees[i].title === "Engineer") {
            employeeIcon = "&#128083; ";
        }

        else {
            employeeIcon = "&#127891; ";
        }

        html += `
                <div class="card">
                    <div class="col card-header">
                        <h4>${employees[i].name}</h4>
                        <h4>${employeeIcon + employees[i].title}</h4 >
                    </div>

                    <ul class="list-group list-group-flush text">
                        <li class="list-group-item">ID: ${employees[i].id}</li>
                        <li class="list-group-item">Email: <a href=mailto:${employees[i].email}>${employees[i].email}</a></li>
                        <li class="list-group-item"> ${employeeTitle(employees[i])}</li>
                    </ul>
                </div>`;
    }
    return html;
}

function writeHtml() {
    let html = `<!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
            integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
            
            <title>Document</title>

            <style>
                .navbar {
                    background-color: red;
                    justify-content: center;
                    align-items: center;
                    color: white;
                    padding: 40px;
                }

                .row {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    margin-top: 20px;
                    margin-bottom: 20px;
                    background-color: white;
                }

                .card {
                    padding: 0px;
                    border-radius: 6px;
                    color: white;
                    margin: 15px;
                    background-color: lightgray;
                    justify-content: center;
                    align-items: center;
                    width: 250px;
                    display:block;
                }

                .text {
                    padding: 2px;
                    border-radius: 2px;
                    background-color: lightgray;
                    color: black;
                    margin: 2px;
                }

                .col {
                    flex: 1;
                    text-align: left;
                    background-color: blue;
                    padding: 15px;
                    margin-bottom: 25px;
                }
            </style>
        </head>

        <body>
            <nav class="navbar">
                <span class="navbar-brand mb-0 h1">
                    <h1>My Team</h1>
                </span>
            </nav>

            <div class="row">
                ${formHtml()}
            </div>
        </body>
    </html>`;

    const fs = require("fs");
    fs.writeFile('../pages/index.html', html, function (err) {
        if (err) throw err;
        console.log('File is created successfully.');
    });
}

startProgram();