const Employee = require("./employee"); //Pulls data from the employee.js script

class Manager extends Employee { //Creates a class called Manager that extends from Employee class
    constructor(name, id, email, officeNumber, title) { //Constructor that grabs all the data to send back when this class is called
        super(name, id, email) //Pulls data from Employee class
        this.officeNumber = officeNumber; //Creates data in this class to send out
        this.title = title; //Creates data in this class to send out
    }
    
    getOfficeNumber() {
        return this.officeNumber; //Returns value to script that called this function
    }

    getTitle() {
        return this.title; //Returns value to script that called this function
    }
}

module.exports = Manager; //Exports this calss so that other scripts can access the data within