const Employee = require("./employee"); //Pulls data from the employee.js script

class Engineer extends Employee { //Creates a class called Engineer that extends from Employee class
    constructor(name, id, email, gitHub, title) { //Constructor that grabs all the data to send back when this class is called
        super(name, id, email) //Pulls data from Employee class
        this.gitHub = gitHub; //Creates data in this class to send out
        this.title = title; //Creates data in this class to send out
    }
    
    getGitHub() { //Allows other scripts to access this data through calling this function
        return this.gitHub; //Returns value to script that called this function
    }

    getTitle() { //Allows other scripts to access this data through calling this function
        return this.title; //Returns value to script that called this function
    }
}

module.exports = Engineer; //Exports this calss so that other scripts can access the data within