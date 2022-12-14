const Employee = require("./employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber, title) {
        super(name, id, email)
        this.officeNumber = officeNumber;
        this.title = title;
    }
    
    getOfficeNumber() {
        return this.officeNumber;
    }

    getTitle() {
        return this.title;
    }
}

module.exports = Manager;