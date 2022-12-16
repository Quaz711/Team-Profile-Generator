const inquirer = require("inquirer"); //Pulls data from the inquirer script
const Employee = require("./employee"); //Pulls data from the employee.js script
const Engineer = require("./engineer"); //Pulls data from the engineer.js script
const Intern = require("./intern"); //Pulls data from the intern.js script
const Manager = require("./manager"); //Pulls data from the manager.js script
const fs = require("fs"); //Pulls data from the fs script

function menuEntry() { //Creates a menu function so user can choose an option
    const questions = [{ //Creates an array for user choice
        type: "list", //Type of inquiry
        message: "Please choose an option:", //Message displayed
        choices: ["Add An Intern", "Add An Engineer", "Finish Entering Team"], //Choices user has
        name: "option" //Name of inquiry
    }];

    return inquirer.prompt(questions); //Returns user choice
}

function informationEntry() { //Creates an infromation entry function so user can enter informtaion for employee
    const questions = [{ //Creates an array for user input
        type: "input", //Type of inquiry
        message: "Please enter the name: ", //Message displayed
        name: "name" //Name of inquiry
    },

    {
        type: "input", //Type of inquiry
        message: "Please enter the employee ID: ", //Message displayed
        name: "id" //Name of inquiry
    },

    {
        type: "input", //Type of inquiry
        message: "Please enter the email address: ", //Message displayed
        name: "email" //Name of inquiry
    }];

    return inquirer.prompt(questions); //Returns user input
}

function internEntry() { //Creates an intern entry function so user can enter informtaion specific for intern
    const questions = [{ //Creates an array for user input
        type: "input", //Type of inquiry
        message: "Please enter the school: ", //Message displayed
        name: "school" //Name of inquiry
    }];

    return inquirer.prompt(questions); //Returns user input
}

function managerEntry() { //Creates a manager entry function so user can enter informtaion specific for manager
    const questions = [{ //Creates an array for user input
        type: "input", //Type of inquiry
        message: "Please enter the office number: ", //Message displayed
        name: "officeNumber" //Name of inquiry
    }];

    return inquirer.prompt(questions); //Returns user input
}

function engineerEntry() { //Creates an engineer entry function so user can enter informtaion specific for engineer
    const questions = [{ //Creates an array for user input
        type: "input", //Type of inquiry
        message: "Please enter the gitHub username: ", //Message displayed
        name: "gitHub" //Name of inquiry
    }];

    return inquirer.prompt(questions); //Returns user input
}

async function enteringEmployee(a, b) { //Creates an async function for entering an employee and thier information
    let entryCheck = false; //A avriable that checks to make sure an employee has been entered
    employees = a; //Brings in the employee object from a different function passed in and then assigns it to a local instance of the employees variable
    const promise = new Promise((resolve, reject) => { //Creates a promise that goes to different functions depending on what a user wants to do
        informationEntry().then(function ({ name, id, email, title }) { //Goes to the informationEntry function and grabs the needed information from the user input
            title = b; //Brings in the title from a different function passed in and then assigns it to a local instance of the title variable
            if (title === "Intern") { //Checks to see what the title of entered employee is
                internEntry().then(function ({ school }) { //Goes to the internEntry function and grabs the needed information from user input
                    this.employee = new Intern(name, id, email, school, title); //Stores the collected data into this function's variable
                    employees.push(employee); //Pushes information into employees object array
                    resolve("Intern was Entered"); //Sends the promise back as resolved because employee was created
                    entryCheck = true; //Makes the employee entered check varibale true 
                });
            }
            
            else if (title === "Engineer") { //Checks to see what the title of entered employee is
                engineerEntry().then(function ({ gitHub }) { //Goes to the engineerEntry function and grabs the needed information from user input
                    this.employee = new Engineer(name, id, email, gitHub, title); //Stores the collected data into this function's variable
                    employees.push(employee); //Pushes information into employees object array
                    resolve("Engineer was Entered"); //Sends the promise back as resolved because employee was created
                    entryCheck = true; //Makes the employee entered check varibale true 
                });
            }
            
            else { //Enters if employee entered is not an Intern or and Engineer
                console.log("There has been a serious error"); //The only choices for an employee entered is an Intern or an Engineer, so if this else is entered something bad happened
            }
        }).catch(function (err) { //An error occurred and we are throwing it back to the promise
                console.log("An error has occured: " + err); //Displays what error occurred
            });
    });

    const result = await promise; //Puts the promise into a constant variable
    console.log(result); //Displays the promise to the user

    if (entryCheck) { //Checks to see if an employee was entered
        menuEntry().then(function ({ option }) { //Calls the menu function so user can decide what to do next
            if (option === "Add An Intern") { //Checks to see if the user decided to add an intern
                title = "Intern"; //Makes the title variable Intern
                enteringEmployee(employees, title); //Calls the function that allows the user to enter input for an employee and passes the employees object array and the title
            }

            else if (option === "Add An Engineer") { //Checks to see if the user decided to add an engineer
                title = "Engineer"; //Makes the title variable Engineer
                enteringEmployee(employees, title); //Calls the function that allows the user to enter input for an employee and passes the employees object array and the title
            }

            else { //If user decides to finish the team we enter this else staement
                for (var i = 0; i < employees.length; i++) { //Runs a for loop according to how log the employees object array is
                    writeHtml(); //Calls the function that writes the html
                }
            }
        });
    }
}

async function startProgram() { //Function that starts off the application when the application starts
    let entryCheck = false; //A avriable that checks to make sure an employee has been entered
    let employees = []; //Creates an empty object array to store employees' information
    const promise = new Promise((resolve, reject) => {  //Creates a promise that goes to different functions depending on what a user wants to do
        informationEntry().then(function ({ name, id, email, title }) { //Goes to the informationEntry function and grabs the needed information from the user input
            managerEntry().then(function ({ officeNumber }) { //Goes to the managerEntry function and grabs the needed information from user input
                title = "Manager"; //Makes the title variable Manager
                this.employee = new Manager(name, id, email, officeNumber, title); //Stores the collected data into this function's variable
                employees.push(employee); //Pushes information into employees object array
                resolve("Manager was Entered"); //Sends the promise back as resolved because employee was created
                entryCheck = true; //Makes the employee entered check varibale true 
            });
        }).catch(function (err) { //An error occurred and we are throwing it back to the promise
                console.log("An error has occured: " + err); //Displays what error occurred
            });
    });

    const result = await promise; //Puts the promise into a constant variable
    console.log(result); //Displays the promise to the user

    if (entryCheck) { //Checks to see if an employee was entered
        menuEntry().then(function ({ option }) { //Calls the menu function so user can decide what to do next
            if (option === "Add An Intern") { //Checks to see if the user decided to add an intern
                title = "Intern"; //Makes the title variable Intern
                enteringEmployee(employees, title); //Calls the function that allows the user to enter input for an employee and passes the employees object array and the title
            }

            else if (option === "Add An Engineer") { //Checks to see if the user decided to add an engineer
                title = "Engineer"; //Makes the title variable Engineer
                enteringEmployee(employees, title); //Calls the function that allows the user to enter input for an employee and passes the employees object array and the title
            }

            else { //If user decides to finish the team we enter this else staement
                for (var i = 0; i < employees.length; i++) { //Runs a for loop according to how log the employees object array is
                    writeHtml(); //Calls the function that writes the html
                }
            }
        });
    }
}

function employeeTitle(employee) { //Function that returns what the employee title is when writing the html file
    if (employee.title === "Intern") { //Checks to see if the employee's title that was passed in is Intern
        return `School: ${employee.school}`; //Returns what school the intern attends
    }

    if (employee.title === "Manager") { //Checks to see if the employee's title that was passed in is Manager
        return `Office number: ${employee.officeNumber}`; //Returns what office number the manager has
    }

    if (employee.title === "Engineer") { //Checks to see if the employee's title that was passed in is Engineer
        return `GitHub: <a href="https://www.github.com/${employee.gitHub}">github.com/${employee.gitHub}</a>`; //Returns the gitHub for the engineer
    }
}

function formHtml() { //Function that forms the employee card onto the html
    let html = ""; //Clears a variable that is storing the html file
    let employeeIcon = ""; //Clears the employee's title icon
    for (i = 0; i < employees.length; i++) { //Runs a for loop according to how log the employees object array is
        if (employees[i].title === "Manager") { //Checks to see the title of the employee passed in is a manager
            employeeIcon = "&#9749; "; //Makes the employee icon a coffee mug
        }
        
        else if (employees[i].title === "Engineer") { //Checks to see the title of the employee passed in is a engineer
            employeeIcon = "&#128083; "; //Makes the employee icon glasses
        }

        else { //If the employee's title that was passed in is not a manager or an engineer than they are an intern
            employeeIcon = "&#127891; "; //Makes the employee icon a graduate's hat
        }
        //Creates the html for the passed in employee and stores it into a variable to be passed back to be written to the html file
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

    return html; //Returns the html variable storing the employee html code
}

function writeHtml() { //Function that writes the html file
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

    const fs = require("fs"); //Script that makes it possible to write files
    fs.writeFile('../pages/index.html', html, function (err) { //Calls function that writes the html file in the designated file location path with the html data we have created
        if (err) throw err; //Checks to see if an error is thrown and throws that error back
        console.log('File is created successfully.'); //Displays that the file was created successfully
    });
}

startProgram(); //Calls the function that starts the entire application