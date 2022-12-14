const Employee = require("./employee");

class Engineer extends Employee {
    constructor(name, id, email, gitHub, title) {
        super(name, id, email)
        this.gitHub = gitHub;
        this.title = title;
    }
    
    getGitHub() {
        return this.gitHub;
    }

    getTitle() {
        return this.title;
    }
}

module.exports = Engineer;