class Employee { //Creates a class called Employee
    constructor(name, id, email, title) { //Constructor that grabs all the data to send back when this class is called
        this.name = name; //Creates data in this class to send out
        this.id = id; //Creates data in this class to send out
        this.email = email; //Creates data in this class to send out
        this.title = title; //Creates data in this class to send out
    }
    
    getName() { //Allows other scripts to access this data through calling this function
        return this.name; //Returns value to script that called this function
    }

    getID() { //Allows other scripts to access this data through calling this function
        return this.id; //Returns value to script that called this function
    }

    getEmail() { //Allows other scripts to access this data through calling this function
        return this.email; //Returns value to script that called this function
    }

    getTitle() { //Allows other scripts to access this data through calling this function
        return this.title; //Returns value to script that called this function
    }
}

module.exports = Employee; //Exports this calss so that other scripts can access the data within