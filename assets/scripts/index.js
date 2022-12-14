const inquirer = require("inquirer");
const Employee = require("./employee");
const Engineer = require("./engineer");
const Intern = require("./intern");
const Manager = require("./manager");
const fs = require("fs");

function menuEntry() {
    console.log("Entered menuEntry");
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
        message: "Please enter the gitHub: ",
        name: "gitHub"
    }];

    return inquirer.prompt(questions);
}

function finishTeam() {
    const questions = [{
        type: "confirm",
        name: "confirmFinished",
        message: "Are you finished entering your team?"
        },
    
        {
        type: 'input',
        name: 'teamFinished',
        message: 'Please list installation instructions.',
        when: ({ confirmFinished }) => {
            if (confirmFinished) { //Checks to make sure confirmInstallation is true and lets user input information about it
            return true;
            }
            
            else {
            return false;
            }
        }
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
                    console.log(school);
                    employees.push(employee);
                    resolve("Employee Entered");
                    entryCheck = true;
                });
            }
            
            else if (title === "Engineer") {
                engineerEntry().then(function ({ gitHub }) {
                    this.employee = new Engineer(name, id, email, gitHub, title);
                    console.log(gitHub);
                    employees.push(employee);
                    resolve("Employee Entered");
                    entryCheck = true;
                });
            }
            
            else {
                /*managerEntry().then(function ({ officeNumber }) {
                    title = "Manager";
                    this.employee = new Manager(name, id, email, officeNumber, title);
                    console.log(officeNumber);
                    employees.push(employee);
                    resolve("done");
                    entryCheck = true;
                });*/
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
                console.log("adding intern");
                title = "Intern";
                enteringEmployee(employees, title);
            }

            else if (option === "Add An Engineer") {
                console.log("adding engineer");
                title = "Engineer";
                enteringEmployee(employees, title);
            }

            else {
                for (var i = 0; i < employees.length; i++) {
                    console.log("Employee title: " + employees[i].title + "\n");
                    console.log("Employee name: " + employees[i].name + "\n");
                    console.log("Employee ID: " + employees[i].id + "\n");
                    console.log("Employee email: " + employees[i].email + "\n");
                    console.log("exit app");
                }
            }
        });
    }
}

async function startProgram() {
    let entryCheck = false;
    let employees = [];
    //const cap = 4;
    //for (var i = 0; i < cap; i++) {
    const promise = new Promise((resolve, reject) => {
        informationEntry().then(function ({ name, id, email, title }) {
            /*if (title === "Intern") {
                internEntry().then(function ({ school }) {
                    this.employee = new Intern(name, id, email, school, title);
                    console.log(school);
                    employees.push(employee);
                    resolve("done");
                });
            }
            
            else if (title === "Engineer") {
                engineerEntry().then(function ({ gitHub }) {
                    this.employee = new Engineer(name, id, email, gitHub, title);
                    console.log(gitHub);
                    employees.push(employee);
                    resolve("done");
                });
            }
            
            else {*/
                managerEntry().then(function ({ officeNumber }) {
                    title = "Manager";
                    this.employee = new Manager(name, id, email, officeNumber, title);
                    console.log(officeNumber);
                    employees.push(employee);
                    resolve("Employee Entered");
                    entryCheck = true;
                });
            //}

        }).catch(function (err) {
                console.log("An error has occured: " + err);
            });
    });

    const result = await promise;
    console.log(result);

    if (entryCheck) {
        menuEntry().then(function ({ option }) {
            if (option === "Add An Intern") {
                console.log("adding intern");
                title = "Intern";
                enteringEmployee(employees, title);
            }

            else if (option === "Add An Engineer") {
                console.log("adding engineer");
                title = "Engineer";
                enteringEmployee(employees, title);
            }

            else {
                for (var i = 0; i < employees.length; i++) {
                    console.log("Employee title: " + employees[i].title + "\n");
                    console.log("Employee name: " + employees[i].name + "\n");
                    console.log("Employee ID: " + employees[i].id + "\n");
                    console.log("Employee email: " + employees[i].email + "\n");
                    console.log("exit app");
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
        console.log(employee.officeNumber);
        return `Office number: ${employee.officeNumber}`;
    }

    if (employee.title === "Engineer") {
        return `GitHub: ${employee.gitHub}`;
    }
}

function formHtml() {
    let html = "";
    for (i = 0; i < employees.length; i++) {
        console.log(employees[i])
        html += `<div class="card bg-dark justify-content-center align-items-center" style="width: 18rem;">
            <div class="col card-header">
                <h4>${employees[i].name}</h4>
            </div>

            <div class="col card-header">
                <h4>${employees[i].title}</h4 >
            </div >

            <ul class="list-group list-group-flush text">
                <li class="list-group-item">ID: ${employees[i].id}</li>
                <li class="list-group-item">Email: ${employees[i].email}</li>
                <li class="list-group-item"> ${employeeTitle(employees[i])}</li>
            </ul>

        </div > `;
    }
    return html;
}

function writeHtml() {
    let html = `< !DOCTYPE html >
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
            integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
            
            <title>Document</title>

            <style>
                .row {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    margin-top: 20px;
                    margin-bottom: 20px;
                }

                .card {
                    padding: 15px;
                    border-radius: 6px;
                    background-color: white;
                    color: lightskyblue;
                    margin: 15px;
                }

                .text {
                    padding: 15px;
                    border-radius: 6px;
                    background-color: lightskyblue;
                    color: black;
                    margin: 15px;
                }

                .col {
                    flex: 1;
                    text-align: center;
                }
            </style>
        </head>

        <body>
            <nav class="navbar navbar-dark bg-dark justify-content-center align-items-center">
                <span class="navbar-brand mb-0 h1">
                    <h1>My Team</h1>
                </span>
            </nav>

            <div class="row">
                ${formHtml()}
            </div>
        </body>
    </html>`;

    console.log(html);
    const fs = require("fs");
    fs.writeFile('newfile.html', html, function (err) {
        if (err) throw err;
        console.log('File is created successfully.');
    });
}

startProgram();